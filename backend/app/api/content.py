from fastapi import APIRouter, HTTPException
import json
import uuid
from datetime import datetime
from pydantic import BaseModel
from typing import Optional, Dict, Any
from app.database import get_db_connection

router = APIRouter(prefix="/content", tags=["Content Blocks"])

class BlockCreateRequest(BaseModel):
    topic_id: str
    block_type: str
    content: str
    metadata: Optional[Dict[str, Any]] = {}
    display_order: Optional[int] = 0

@router.post("/blocks")
def create_content_block(req: BlockCreateRequest):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    block_id = str(uuid.uuid4())
    now = datetime.utcnow().isoformat()
    meta_json = json.dumps(req.metadata or {})
    
    cursor.execute("""
        INSERT INTO content_blocks (id, topic_id, block_type, content, metadata, display_order, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    """, (block_id, req.topic_id, req.block_type, req.content, meta_json, req.display_order, now))
    
    conn.commit()
    conn.close()
    return {"status": "success", "id": block_id}

@router.delete("/blocks/{block_id}")
def delete_content_block(block_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM content_blocks WHERE id = ?", (block_id,))
    conn.commit()
    conn.close()
    return {"status": "deleted"}
