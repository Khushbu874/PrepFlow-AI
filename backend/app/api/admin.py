from fastapi import APIRouter, HTTPException
import json
import uuid
from datetime import datetime
from pydantic import BaseModel
from typing import Optional, List, Dict, Any
from app.database import get_db_connection

router = APIRouter(prefix="/admin", tags=["Admin Portal"])

class CategoryCreate(BaseModel):
    name: str
    slug: str
    description: Optional[str] = None
    icon: Optional[str] = "book"
    display_order: Optional[int] = 0

class SubjectCreate(BaseModel):
    category_id: str
    name: str
    slug: str
    description: Optional[str] = None
    icon: Optional[str] = "folder"
    display_order: Optional[int] = 0

class TopicCreate(BaseModel):
    subject_id: str
    parent_topic_id: Optional[str] = None
    title: str
    slug: str
    description: Optional[str] = None
    difficulty: Optional[str] = "Medium"
    display_order: Optional[int] = 0

class QuestionCreate(BaseModel):
    topic_id: Optional[str] = None
    category_slug: Optional[str] = "dsa"
    title: str
    difficulty: str
    description: Optional[str] = None
    platform: Optional[str] = "LeetCode"
    external_url: Optional[str] = None
    hints: Optional[List[str]] = []
    solution_reference: Optional[str] = None

@router.post("/categories")
def create_category(req: CategoryCreate):
    conn = get_db_connection()
    cursor = conn.cursor()
    cat_id = str(uuid.uuid4())
    now = datetime.utcnow().isoformat()
    cursor.execute("""
        INSERT INTO categories (id, name, slug, description, icon, display_order, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    """, (cat_id, req.name, req.slug, req.description, req.icon, req.display_order, now))
    conn.commit()
    conn.close()
    return {"status": "success", "id": cat_id}

@router.post("/subjects")
def create_subject(req: SubjectCreate):
    conn = get_db_connection()
    cursor = conn.cursor()
    sub_id = str(uuid.uuid4())
    now = datetime.utcnow().isoformat()
    cursor.execute("""
        INSERT INTO subjects (id, category_id, name, slug, description, icon, display_order, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    """, (sub_id, req.category_id, req.name, req.slug, req.description, req.icon, req.display_order, now))
    conn.commit()
    conn.close()
    return {"status": "success", "id": sub_id}

@router.post("/topics")
def create_topic(req: TopicCreate):
    conn = get_db_connection()
    cursor = conn.cursor()
    top_id = str(uuid.uuid4())
    now = datetime.utcnow().isoformat()
    cursor.execute("""
        INSERT INTO topics (id, subject_id, parent_topic_id, title, slug, description, difficulty, display_order, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (top_id, req.subject_id, req.parent_topic_id, req.title, req.slug, req.description, req.difficulty, req.display_order, now))
    conn.commit()
    conn.close()
    return {"status": "success", "id": top_id}

@router.post("/questions")
def create_question(req: QuestionCreate):
    conn = get_db_connection()
    cursor = conn.cursor()
    q_id = str(uuid.uuid4())
    now = datetime.utcnow().isoformat()
    hints_json = json.dumps(req.hints or [])
    cursor.execute("""
        INSERT INTO practice_questions (id, topic_id, category_slug, title, difficulty, description, platform, external_url, hints, solution_reference, display_order, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (q_id, req.topic_id, req.category_slug, req.title, req.difficulty, req.description, req.platform, req.external_url, hints_json, req.solution_reference, 0, now))
    conn.commit()
    conn.close()
    return {"status": "success", "id": q_id}

@router.get("/users")
def get_admin_user_stats():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id, email, name, role, created_at FROM users ORDER BY created_at DESC")
    users = [dict(u) for u in cursor.fetchall()]
    
    for u in users:
        cursor.execute("SELECT COUNT(*) FROM user_question_progress WHERE user_id = ? AND status = 'solved'", (u["id"],))
        u["solved_count"] = cursor.fetchone()[0]
        cursor.execute("SELECT COUNT(*) FROM assessment_attempts WHERE user_id = ?", (u["id"],))
        u["assessments_count"] = cursor.fetchone()[0]
        
    conn.close()
    return users
