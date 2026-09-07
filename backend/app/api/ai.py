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
    user_api_key: Optional[str] = None

class AdminAIGenerateRequest(BaseModel):
    topic_name: str
    category_name: str
    difficulty: Optional[str] = "Beginner to Interview Level"

@router.post("/ask")
async def ask_ai_tutor(req: AIAskRequest):
    # Log incoming user input to terminal
    print("\n" + "=" * 70)
    print("📥 [AI TUTOR - INCOMING USER INPUT]")
    print("=" * 70)
    print(f"📌 Topic       : {req.topic_title or 'General'}")
    print(f"🏷️  Category    : {req.category_name or 'Computer Science'}")
    print(f"⚡ Action Type : {req.action_type or 'chat'}")
    print(f"🔑 Key Provided: {'Yes (starts with ' + req.user_api_key[:8] + '...)' if req.user_api_key else 'No'}")
    print(f"💬 Prompt/Msg  :\n{req.message}")
    print("-" * 70)

    response_text = await AIService.answer_topic_doubt(
        topic_title=req.topic_title or "Interview Preparation",
        category_name=req.category_name or "Computer Science",
        message=req.message,
        action_type=req.action_type,
        section_content=req.section_content or "",
        user_api_key=req.user_api_key or ""
    )

    # Log generated AI tutor output to terminal
    print("\n" + "=" * 70)
    print("📤 [AI TUTOR - OUTGOING RESPONSE]")
    print("=" * 70)
    print(response_text)
    print("=" * 70 + "\n")
    
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

class KeyVerifyRequest(BaseModel):
    api_key: str

@router.post("/verify-key")
async def verify_user_key(req: KeyVerifyRequest):
    result = await AIService.verify_groq_key(req.api_key)
    return result
