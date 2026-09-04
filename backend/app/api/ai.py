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

class AdminAIGenerateRequest(BaseModel):
    topic_name: str
    category_name: str
    difficulty: Optional[str] = "Beginner to Interview Level"

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
                INSERT INTO ai_conversations (id, user_id, topic_id, user_message, ai_response, created_at)
                VALUES (?, ?, ?, ?, ?, ?)
            """, (str(uuid.uuid4()), req.user_id, req.topic_id, req.message, response_text, now))
            conn.commit()
            conn.close()
        except Exception as e:
            print(f"[AI Log Error] Failed to save conversation: {e}")
            
    return {"response": response_text, "action_type": req.action_type}

@router.post("/admin/generate-content")
async def admin_generate_content(req: AdminAIGenerateRequest):
    blocks = await AIService.generate_structured_content_blocks(
        topic_name=req.topic_name,
        category_name=req.category_name,
        difficulty=req.difficulty or "Medium"
    )
    return {"status": "success", "topic_name": req.topic_name, "blocks": blocks}
