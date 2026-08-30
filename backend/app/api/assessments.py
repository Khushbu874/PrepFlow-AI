from fastapi import APIRouter, HTTPException
import json
import uuid
from datetime import datetime
from pydantic import BaseModel
from typing import Dict, Any
from app.database import get_db_connection

router = APIRouter(prefix="/assessments", tags=["Assessments"])

class AssessmentSubmit(BaseModel):
    user_id: str
    assessment_id: str
    answers: Dict[str, Any] # question_id -> user_answer

@router.get("")
def get_assessments():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        SELECT a.*, 
               (SELECT COUNT(*) FROM assessment_questions WHERE assessment_id = a.id) as question_count
        FROM assessments a
        ORDER BY a.created_at DESC
    """)
    rows = cursor.fetchall()
    conn.close()
    return [dict(r) for r in rows]

@router.get("/{assessment_id}")
def get_assessment_detail(assessment_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM assessments WHERE id = ?", (assessment_id,))
    assessment = cursor.fetchone()
    if not assessment:
        conn.close()
        raise HTTPException(status_code=404, detail="Assessment not found")
        
    ass_dict = dict(assessment)
    
    cursor.execute("SELECT * FROM assessment_questions WHERE assessment_id = ? ORDER BY display_order ASC", (assessment_id,))
    questions = []
    for q in cursor.fetchall():
        qd = dict(q)
        try:
            qd["options"] = json.loads(qd["options"]) if isinstance(qd["options"], str) else qd["options"]
        except Exception:
            qd["options"] = []
        # Exclude correct_answer from public runner view
        qd.pop("correct_answer", None)
        questions.append(qd)
        
    ass_dict["questions"] = questions
    conn.close()
    return ass_dict

@router.post("/submit")
def submit_assessment(req: AssessmentSubmit):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM assessments WHERE id = ?", (req.assessment_id,))
    assessment = cursor.fetchone()
    if not assessment:
        conn.close()
        raise HTTPException(status_code=404, detail="Assessment not found")
        
    cursor.execute("SELECT * FROM assessment_questions WHERE assessment_id = ?", (req.assessment_id,))
    questions = cursor.fetchall()
    
    total = len(questions)
    correct_count = 0
    weak_topics = set()
    explanations = {}
    
    for q in questions:
        q_id = q["id"]
        correct_ans = str(q["correct_answer"]).strip().lower()
        user_ans = str(req.answers.get(q_id, "")).strip().lower()
        
        if user_ans == correct_ans:
            correct_count += 1
        else:
            if q["topic_tag"]:
                weak_topics.add(q["topic_tag"])
                
        explanations[q_id] = {
            "question": q["question"],
            "user_answer": req.answers.get(q_id, "No answer"),
            "correct_answer": q["correct_answer"],
            "is_correct": user_ans == correct_ans,
            "explanation": q["explanation"]
        }
        
    percentage = round((correct_count / total * 100) if total > 0 else 0, 1)
    passed = percentage >= assessment["pass_mark_percentage"]
    weak_list = list(weak_topics)
    now = datetime.utcnow().isoformat()
    attempt_id = str(uuid.uuid4())
    
    cursor.execute("""
        INSERT INTO assessment_attempts (id, user_id, assessment_id, score, total_questions, percentage, passed, weak_topics, started_at, completed_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (attempt_id, req.user_id, req.assessment_id, correct_count, total, percentage, 1 if passed else 0, json.dumps(weak_list), now, now))
    
    # If weak topics present, flag for revision in revisions table
    for topic_tag in weak_list:
        cursor.execute("SELECT id FROM topics WHERE title LIKE ?", (f"%{topic_tag}%",))
        t = cursor.fetchone()
        if t:
            cursor.execute("""
                INSERT INTO revisions (id, user_id, topic_id, reason, created_at)
                VALUES (?, ?, ?, ?, ?)
                ON CONFLICT(user_id, topic_id) DO NOTHING
            """, (str(uuid.uuid4()), req.user_id, t["id"], f"Assessment Score: {percentage}%", now))
            
    conn.commit()
    conn.close()
    
    return {
        "attempt_id": attempt_id,
        "score": correct_count,
        "total_questions": total,
        "percentage": percentage,
        "passed": passed,
        "weak_topics": weak_list,
        "explanations": explanations,
        "completed_at": now
    }
