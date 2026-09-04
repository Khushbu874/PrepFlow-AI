# PrepFlow AI - Clean Progress & Dashboard API Router

from fastapi import APIRouter, HTTPException
import json
import uuid
from datetime import datetime
from pydantic import BaseModel
from typing import Optional, List
from app.database import get_db_connection

router = APIRouter(prefix="/progress", tags=["Progress"])

class BookmarkToggle(BaseModel):
    user_id: str
    topic_id: str

class TopicProgressToggle(BaseModel):
    user_id: str
    topic_id: str
    status: Optional[str] = "completed"

class SolvedQuestionToggle(BaseModel):
    user_id: str
    question_title: str
    topic_id: Optional[str] = None

class TopicNoteCreate(BaseModel):
    user_id: str
    topic_id: str
    note_text: str

class TopicNoteUpdate(BaseModel):
    note_text: str


@router.get("/dashboard/{user_id}")
def get_user_dashboard(user_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # 1. Solved LeetCode Questions Count
    solved_count = 0
    try:
        cursor.execute("SELECT COUNT(*) FROM user_solved_questions WHERE user_id = ?", (user_id,))
        row = cursor.fetchone()
        solved_count = row[0] if row else 0
    except Exception:
        solved_count = 0

    # 2. Bookmarked Topics Count
    bookmark_count = 0
    try:
        cursor.execute("SELECT COUNT(*) FROM user_bookmarks WHERE user_id = ?", (user_id,))
        row = cursor.fetchone()
        bookmark_count = row[0] if row else 0
    except Exception:
        try:
            cursor.execute("SELECT COUNT(*) FROM bookmarks WHERE user_id = ?", (user_id,))
            row = cursor.fetchone()
            bookmark_count = row[0] if row else 0
        except Exception:
            bookmark_count = 0

    # 3. Completed Topics Count
    completed_topics_count = 0
    try:
        cursor.execute("SELECT COUNT(*) FROM user_topic_progress WHERE user_id = ? AND status = 'completed'", (user_id,))
        row = cursor.fetchone()
        completed_topics_count = row[0] if row else 0
    except Exception:
        completed_topics_count = 0

    conn.close()
    
    return {
        "solved_count": solved_count,
        "revision_count": bookmark_count,
        "completed_topics_count": completed_topics_count,
        "learning_streak_days": 5,
        "resume_topic": {
            "topic_title": "Binary Search & Search Space",
            "topic_slug": "binary-search",
            "subject_name": "Binary Search & Searching"
        }
    }


@router.post("/bookmark")
def toggle_bookmark(req: BookmarkToggle):
    conn = get_db_connection()
    cursor = conn.cursor()
    now = datetime.utcnow().isoformat()
    
    table_name = "user_bookmarks"
    try:
        cursor.execute("SELECT id FROM user_bookmarks WHERE user_id = ? AND topic_id = ?", (req.user_id, req.topic_id))
    except Exception:
        table_name = "bookmarks"
        cursor.execute("SELECT id FROM bookmarks WHERE user_id = ? AND topic_id = ?", (req.user_id, req.topic_id))

    existing = cursor.fetchone()
    
    if existing:
        cursor.execute(f"DELETE FROM {table_name} WHERE id = ?", (existing["id"],))
        status = "removed"
    else:
        cursor.execute(f"""
            INSERT INTO {table_name} (id, user_id, topic_id, created_at)
            VALUES (?, ?, ?, ?)
        """, (str(uuid.uuid4()), req.user_id, req.topic_id, now))
        status = "bookmarked"
        
    conn.commit()
    conn.close()
    return {"status": status, "topic_id": req.topic_id}


@router.get("/bookmarks/{user_id}")
def get_user_bookmarks(user_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    rows = []
    try:
        cursor.execute("SELECT topic_id, created_at FROM user_bookmarks WHERE user_id = ? ORDER BY created_at DESC", (user_id,))
        rows = cursor.fetchall()
    except Exception:
        try:
            cursor.execute("SELECT topic_id, created_at FROM bookmarks WHERE user_id = ? ORDER BY created_at DESC", (user_id,))
            rows = cursor.fetchall()
        except Exception:
            rows = []

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
        cursor.execute("UPDATE user_topic_progress SET status = ?, updated_at = ? WHERE id = ?", (new_status, now, existing["id"]))
    else:
        new_status = "completed"
        cursor.execute("""
            INSERT INTO user_topic_progress (id, user_id, topic_id, status, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (str(uuid.uuid4()), req.user_id, req.topic_id, new_status, now, now))
        
    conn.commit()
    conn.close()
    return {"status": new_status, "topic_id": req.topic_id}


@router.get("/user-topics/{user_id}")
def get_user_topics_status(user_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    completed = []
    try:
        cursor.execute("SELECT topic_id FROM user_topic_progress WHERE user_id = ? AND status = 'completed'", (user_id,))
        completed = [r["topic_id"] for r in cursor.fetchall()]
    except Exception:
        pass

    bookmarked = []
    try:
        cursor.execute("SELECT topic_id FROM user_bookmarks WHERE user_id = ?", (user_id,))
        bookmarked = [r["topic_id"] for r in cursor.fetchall()]
    except Exception:
        try:
            cursor.execute("SELECT topic_id FROM bookmarks WHERE user_id = ?", (user_id,))
            bookmarked = [r["topic_id"] for r in cursor.fetchall()]
        except Exception:
            pass

    conn.close()
    
    return {
        "completed_topic_ids": completed,
        "bookmarked_topic_ids": bookmarked
    }


# -------------------------------------------------------------
# LEETCODE SOLVED QUESTIONS API ENDPOINTS (DB SYNC)
# -------------------------------------------------------------
@router.post("/solved-questions/toggle")
def toggle_solved_question(req: SolvedQuestionToggle):
    conn = get_db_connection()
    cursor = conn.cursor()
    now = datetime.utcnow().isoformat()

    try:
        cursor.execute("SELECT id FROM user_solved_questions WHERE user_id = ? AND question_title = ?", (req.user_id, req.question_title))
        existing = cursor.fetchone()

        if existing:
            cursor.execute("DELETE FROM user_solved_questions WHERE id = ?", (existing["id"],))
            status = "unsolved"
        else:
            cursor.execute("""
                INSERT INTO user_solved_questions (id, user_id, question_title, topic_id, solved_at)
                VALUES (?, ?, ?, ?, ?)
            """, (str(uuid.uuid4()), req.user_id, req.question_title, req.topic_id, now))
            status = "solved"

        conn.commit()
    except Exception as e:
        conn.rollback()
        print(f"[DB Error] toggle_solved_question failed for user={req.user_id} q='{req.question_title}': {e}")
        raise HTTPException(status_code=500, detail=f"DB error: {str(e)}")
    finally:
        conn.close()

    return {"status": status, "question_title": req.question_title}


@router.get("/solved-questions/{user_id}")
def get_user_solved_questions(user_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    rows = []
    try:
        cursor.execute("SELECT question_title, topic_id, solved_at FROM user_solved_questions WHERE user_id = ?", (user_id,))
        rows = cursor.fetchall()
    except Exception:
        rows = []
    finally:
        conn.close()

    return [dict(r) for r in rows]


# -------------------------------------------------------------
# PERSONAL TOPIC NOTES API ENDPOINTS (DB SYNC)
# -------------------------------------------------------------
@router.get("/notes/{user_id}/{topic_id}")
def get_topic_notes(user_id: str, topic_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    rows = []
    try:
        cursor.execute("""
            SELECT id, user_id, topic_id, note_text, created_at, updated_at 
            FROM user_topic_notes 
            WHERE user_id = ? AND topic_id = ? 
            ORDER BY created_at DESC
        """, (user_id, topic_id))
        rows = cursor.fetchall()
    except Exception:
        rows = []
    finally:
        conn.close()

    return [dict(r) for r in rows]


@router.post("/notes")
def create_topic_note(req: TopicNoteCreate):
    conn = get_db_connection()
    cursor = conn.cursor()
    now = datetime.utcnow().isoformat()
    note_id = str(uuid.uuid4())

    try:
        cursor.execute("""
            INSERT INTO user_topic_notes (id, user_id, topic_id, note_text, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (note_id, req.user_id, req.topic_id, req.note_text, now, now))
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        conn.close()

    return {"id": note_id, "user_id": req.user_id, "topic_id": req.topic_id, "note_text": req.note_text, "created_at": now}


@router.put("/notes/{note_id}")
def update_topic_note(note_id: str, req: TopicNoteUpdate):
    conn = get_db_connection()
    cursor = conn.cursor()
    now = datetime.utcnow().isoformat()
    try:
        cursor.execute("UPDATE user_topic_notes SET note_text = ?, updated_at = ? WHERE id = ?", (req.note_text, now, note_id))
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        conn.close()

    return {"id": note_id, "note_text": req.note_text, "updated_at": now}


@router.delete("/notes/{note_id}")
def delete_topic_note_endpoint(note_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    try:
        cursor.execute("DELETE FROM user_topic_notes WHERE id = ?", (note_id,))
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        conn.close()

    return {"status": "deleted", "note_id": note_id}
