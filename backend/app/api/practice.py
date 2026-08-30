from fastapi import APIRouter, HTTPException
import json
import uuid
from datetime import datetime
from pydantic import BaseModel
from typing import Optional
from app.database import get_db_connection

router = APIRouter(prefix="/practice", tags=["Practice"])

class QuestionStatusUpdate(BaseModel):
    user_id: str
    question_id: str
    status: str # 'not_started', 'attempted', 'solved', 'revision'
    notes: Optional[str] = None

@router.get("/questions")
def get_practice_questions(category_slug: str = None, difficulty: str = None, user_id: str = None):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    query = "SELECT q.*, t.title as topic_title FROM practice_questions q LEFT JOIN topics t ON q.topic_id = t.id WHERE 1=1"
    params = []
    
    if category_slug:
        query += " AND q.category_slug = ?"
        params.append(category_slug)
    if difficulty:
        query += " AND q.difficulty = ?"
        params.append(difficulty)
        
    query += " ORDER BY q.display_order ASC"
    cursor.execute(query, params)
    rows = cursor.fetchall()
    
    questions = []
    for r in rows:
        qd = dict(r)
        try:
            qd["hints"] = json.loads(qd["hints"]) if isinstance(qd["hints"], str) else qd["hints"]
        except Exception:
            qd["hints"] = []
            
        if user_id:
            cursor.execute("SELECT status, notes FROM user_question_progress WHERE user_id = ? AND question_id = ?", (user_id, qd["id"]))
            p = cursor.fetchone()
            qd["user_status"] = p["status"] if p else "not_started"
            qd["user_notes"] = p["notes"] if p else ""
        else:
            qd["user_status"] = "not_started"
            qd["user_notes"] = ""
            
        questions.append(qd)
        
    conn.close()
    return questions

@router.post("/status")
def update_question_status(req: QuestionStatusUpdate):
    conn = get_db_connection()
    cursor = conn.cursor()
    now = datetime.utcnow().isoformat()
    
    cursor.execute("""
        INSERT INTO user_question_progress (id, user_id, question_id, status, notes, updated_at)
        VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT(user_id, question_id) DO UPDATE SET
            status = excluded.status,
            notes = excluded.notes,
            updated_at = excluded.updated_at
    """, (str(uuid.uuid4()), req.user_id, req.question_id, req.status, req.notes, now))
    
    conn.commit()
    conn.close()
    return {"status": "success", "question_id": req.question_id, "new_status": req.status}
