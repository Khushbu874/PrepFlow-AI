from fastapi import APIRouter, HTTPException
import json
import uuid
from datetime import datetime
from pydantic import BaseModel
from typing import Optional, List, Dict, Any
from app.services.ai_service import AIService
from app.database import get_db_connection

router = APIRouter(prefix="/ai", tags=["AI Tutor & Features"])

class AIAskRequest(BaseModel):
    user_id: str
    topic_id: Optional[str] = None
    topic_title: Optional[str] = "Binary Search"
    category_name: Optional[str] = "Data Structures & Algorithms"
    message: str
    action_type: Optional[str] = "chat"
    section_content: Optional[str] = ""

class BehavioralFeedbackRequest(BaseModel):
    user_id: str
    question_title: str
    answer: str

class AdminAIGenerateRequest(BaseModel):
    topic_name: str
    category_name: str
    difficulty: Optional[str] = "Beginner to Interview Level"

class MockInterviewStepRequest(BaseModel):
    user_id: str
    interview_type: str # 'dsa', 'cs-fundamentals', 'system-design', 'behavioral'
    difficulty: str
    history: List[Dict[str, str]] = []
    user_message: str

@router.post("/ask")
async def ask_ai_tutor(req: AIAskRequest):
    response_text = await AIService.answer_topic_doubt(
        topic_title=req.topic_title or "Interview Preparation",
        category_name=req.category_name or "Computer Science",
        message=req.message,
        action_type=req.action_type,
        section_content=req.section_content or ""
    )
    
    # Save conversation log
    if req.user_id:
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            now = datetime.utcnow().isoformat()
            cursor.execute("""
                INSERT INTO ai_conversations (id, user_id, topic_id, message, response, context, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            """, (str(uuid.uuid4()), req.user_id, req.topic_id, req.message, response_text, json.dumps({"action": req.action_type}), now))
            conn.commit()
            conn.close()
        except Exception as e:
            print(f"[AI Log Error] Failed to save conversation: {e}")
            
    return {"response": response_text, "action_type": req.action_type}

@router.post("/behavioral/feedback")
async def evaluate_behavioral(req: BehavioralFeedbackRequest):
    feedback = await AIService.evaluate_behavioral_answer(req.question_title, req.answer)
    
    # Store user answer & feedback in DB
    if req.user_id:
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            now = datetime.utcnow().isoformat()
            cursor.execute("""
                INSERT INTO behavioral_answers (id, user_id, question_title, answer, ai_feedback, created_at, updated_at)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            """, (str(uuid.uuid4()), req.user_id, req.question_title, req.answer, json.dumps(feedback), now, now))
            conn.commit()
            conn.close()
        except Exception as e:
            print(f"[Behavioral Log Error]: {e}")
            
    return feedback

@router.post("/admin/generate-content")
async def admin_generate_content(req: AdminAIGenerateRequest):
    blocks = await AIService.generate_structured_content_blocks(
        topic_name=req.topic_name,
        category_name=req.category_name,
        difficulty=req.difficulty or "Medium"
    )
    return {"status": "success", "topic_name": req.topic_name, "blocks": blocks}

@router.post("/mock-interview/step")
async def mock_interview_step(req: MockInterviewStepRequest):
    result = await AIService.run_mock_interview_step(
        interview_type=req.interview_type,
        difficulty=req.difficulty,
        history=req.history,
        user_message=req.user_message
    )
    return result
