from fastapi import APIRouter, HTTPException
import json
import uuid
from datetime import datetime
from pydantic import BaseModel
from typing import Optional
from app.database import get_db_connection

router = APIRouter(prefix="/progress", tags=["Progress"])

class BookmarkToggle(BaseModel):
    user_id: str
    topic_id: str
    note: Optional[str] = None

class TopicProgressToggle(BaseModel):
    user_id: str
    topic_id: str
    status: Optional[str] = "completed"

class RevisionToggle(BaseModel):
    user_id: str
    topic_id: str
    reason: Optional[str] = "User Flagged"

@router.get("/dashboard/{user_id}")
def get_user_dashboard(user_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # 1. Questions solved stats
    cursor.execute("SELECT COUNT(*) FROM user_question_progress WHERE user_id = ? AND status = 'solved'", (user_id,))
    solved_count = cursor.fetchone()[0]
    
    cursor.execute("SELECT COUNT(*) FROM user_question_progress WHERE user_id = ? AND status = 'attempted'", (user_id,))
    attempted_count = cursor.fetchone()[0]
    
    cursor.execute("SELECT COUNT(*) FROM user_question_progress WHERE user_id = ? AND status = 'revision'", (user_id,))
    revision_count = cursor.fetchone()[0]
    
    cursor.execute("SELECT COUNT(*) FROM practice_questions")
    total_questions = cursor.fetchone()[0] or 1
    
    # 2. Category progress percentages
    cursor.execute("SELECT id, name, slug FROM categories ORDER BY display_order ASC")
    categories = cursor.fetchall()
    
    category_progress = []
    for c in categories:
        # Get total topics under category
        cursor.execute("""
            SELECT COUNT(t.id) 
            FROM topics t 
            JOIN subjects s ON t.subject_id = s.id 
            WHERE s.category_id = ?
        """, (c["id"],))
        tot_topics = cursor.fetchone()[0] or 1
        
        # Get completed topics by user under category
        cursor.execute("""
            SELECT COUNT(utp.id) 
            FROM user_topic_progress utp 
            JOIN topics t ON utp.topic_id = t.id 
            JOIN subjects s ON t.subject_id = s.id 
            WHERE utp.user_id = ? AND s.category_id = ? AND utp.status = 'completed'
        """, (user_id, c["id"]))
        comp_topics = cursor.fetchone()[0]
        
        percentage = round((comp_topics / tot_topics * 100), 1)
        category_progress.append({
            "category_id": c["id"],
            "name": c["name"],
            "slug": c["slug"],
            "completed_topics": comp_topics,
            "total_topics": tot_topics,
            "percentage": percentage
        })
        
    # Overall Progress
    overall_percentage = round(sum(cp["percentage"] for cp in category_progress) / len(category_progress), 1) if category_progress else 0
    
    # 3. Last viewed topic (Resume Learning)
    cursor.execute("""
        SELECT utp.*, t.title as topic_title, t.slug as topic_slug, s.name as subject_name 
        FROM user_topic_progress utp 
        JOIN topics t ON utp.topic_id = t.id 
        JOIN subjects s ON t.subject_id = s.id 
        WHERE utp.user_id = ? 
        ORDER BY utp.last_viewed_at DESC LIMIT 1
    """, (user_id,))
    last_viewed = cursor.fetchone()
    
    resume_topic = dict(last_viewed) if last_viewed else {
        "topic_title": "Binary Search & Search Space",
        "topic_slug": "binary-search",
        "subject_name": "Binary Search & Searching",
        "progress_percentage": 65
    }
    
    # 4. Weak topics list
    cursor.execute("""
        SELECT r.*, t.title as topic_title, t.slug as topic_slug 
        FROM revisions r 
        JOIN topics t ON r.topic_id = t.id 
        WHERE r.user_id = ? 
        ORDER BY r.created_at DESC LIMIT 5
    """, (user_id,))
    weak_topics = [dict(w) for w in cursor.fetchall()]
    
    conn.close()
    
    return {
        "overall_progress_percentage": overall_percentage,
        "solved_count": solved_count,
        "attempted_count": attempted_count,
        "revision_count": revision_count,
        "total_questions": total_questions,
        "learning_streak_days": 5, # Active streak
        "category_progress": category_progress,
        "resume_topic": resume_topic,
        "weak_topics": weak_topics
    }

@router.post("/bookmark")
def toggle_bookmark(req: BookmarkToggle):
    conn = get_db_connection()
    cursor = conn.cursor()
    now = datetime.utcnow().isoformat()
    
    cursor.execute("SELECT id FROM bookmarks WHERE user_id = ? AND topic_id = ?", (req.user_id, req.topic_id))
    existing = cursor.fetchone()
    
    if existing:
        cursor.execute("DELETE FROM bookmarks WHERE id = ?", (existing["id"],))
        status = "removed"
    else:
        cursor.execute("""
            INSERT INTO bookmarks (id, user_id, topic_id, note, created_at)
            VALUES (?, ?, ?, ?, ?)
        """, (str(uuid.uuid4()), req.user_id, req.topic_id, req.note, now))
        status = "bookmarked"
        
    conn.commit()
    conn.close()
    return {"status": status, "topic_id": req.topic_id}

@router.get("/bookmarks/{user_id}")
def get_user_bookmarks(user_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        SELECT b.*, t.title as topic_title, t.slug as topic_slug, t.description as topic_description, s.name as subject_name 
        FROM bookmarks b 
        JOIN topics t ON b.topic_id = t.id 
        JOIN subjects s ON t.subject_id = s.id 
        WHERE b.user_id = ? 
        ORDER BY b.created_at DESC
    """, (user_id,))
    rows = cursor.fetchall()
    conn.close()
    return [dict(r) for r in rows]

@router.post("/topic/toggle-complete")
def toggle_topic_complete(req: TopicProgressToggle):
    conn = get_db_connection()
    cursor = conn.cursor()
    now = datetime.utcnow().isoformat()
    
    cursor.execute("SELECT id, status FROM user_topic_progress WHERE user_id = ? AND topic_id = ?", (req.user_id, req.topic_id))
    existing = cursor.fetchone()
    
    if existing:
        new_status = "not_started" if existing["status"] == "completed" else "completed"
        pct = 100 if new_status == "completed" else 0
        cursor.execute("UPDATE user_topic_progress SET status = ?, progress_percentage = ?, last_viewed_at = ? WHERE id = ?", (new_status, pct, now, existing["id"]))
    else:
        new_status = "completed"
        cursor.execute("""
            INSERT INTO user_topic_progress (id, user_id, topic_id, status, progress_percentage, last_viewed_at)
            VALUES (?, ?, ?, ?, 100, ?)
        """, (str(uuid.uuid4()), req.user_id, req.topic_id, new_status, now))
        
    conn.commit()
    conn.close()
    return {"status": new_status, "topic_id": req.topic_id}

@router.get("/user-topics/{user_id}")
def get_user_topics_status(user_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT topic_id, status, progress_percentage FROM user_topic_progress WHERE user_id = ?", (user_id,))
    progress_rows = cursor.fetchall()
    
    cursor.execute("SELECT topic_id FROM bookmarks WHERE user_id = ?", (user_id,))
    bookmark_rows = cursor.fetchall()
    
    conn.close()
    
    completed = [r["topic_id"] for r in progress_rows if r["status"] == "completed"]
    bookmarked = [r["topic_id"] for r in bookmark_rows]
    
    return {
        "completed_topic_ids": completed,
        "bookmarked_topic_ids": bookmarked
    }

@router.get("/revisions/{user_id}")
def get_user_revisions(user_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        SELECT r.*, t.title as topic_title, t.slug as topic_slug, t.description as topic_description, s.name as subject_name 
        FROM revisions r 
        JOIN topics t ON r.topic_id = t.id 
        JOIN subjects s ON t.subject_id = s.id 
        WHERE r.user_id = ? 
        ORDER BY r.created_at DESC
    """, (user_id,))
    rows = cursor.fetchall()
    conn.close()
    return [dict(r) for r in rows]

