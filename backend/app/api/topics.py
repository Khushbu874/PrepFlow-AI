from fastapi import APIRouter, HTTPException
import json
from app.database import get_db_connection

router = APIRouter(prefix="/topics", tags=["Topics"])

@router.get("/{slug}")
def get_topic_detail(slug: str, user_id: str = None):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM topics WHERE slug = ?", (slug,))
    topic = cursor.fetchone()
    if not topic:
        conn.close()
        raise HTTPException(status_code=404, detail="Topic not found")
        
    topic_dict = dict(topic)
    
    # Get Subject and Category details for context
    cursor.execute("""
        SELECT s.name as subject_name, s.slug as subject_slug, c.name as category_name, c.slug as category_slug 
        FROM subjects s JOIN categories c ON s.category_id = c.id
        WHERE s.id = ?
    """, (topic_dict["subject_id"],))
    context = cursor.fetchone()
    if context:
        topic_dict.update(dict(context))
        
    # Get Content Blocks
    cursor.execute("SELECT * FROM content_blocks WHERE topic_id = ? ORDER BY display_order ASC", (topic_dict["id"],))
    blocks = []
    for b in cursor.fetchall():
        bd = dict(b)
        try:
            bd["metadata"] = json.loads(bd["metadata"]) if isinstance(bd["metadata"], str) else bd["metadata"]
        except Exception:
            bd["metadata"] = {}
        blocks.append(bd)
        
    topic_dict["content_blocks"] = blocks
    
    # Get Practice Questions linked to this topic
    cursor.execute("SELECT * FROM practice_questions WHERE topic_id = ? ORDER BY display_order ASC", (topic_dict["id"],))
    questions = []
    for q in cursor.fetchall():
        qd = dict(q)
        try:
            qd["hints"] = json.loads(qd["hints"]) if isinstance(qd["hints"], str) else qd["hints"]
        except Exception:
            qd["hints"] = []
            
        # Attach user status if user_id provided
        if user_id:
            cursor.execute("SELECT status FROM user_question_progress WHERE user_id = ? AND question_id = ?", (user_id, qd["id"]))
            p = cursor.fetchone()
            qd["user_status"] = p["status"] if p else "not_started"
        else:
            qd["user_status"] = "not_started"
        questions.append(qd)
        
    topic_dict["practice_questions"] = questions
    
    # Attach User Progress if user_id provided
    if user_id:
        cursor.execute("SELECT * FROM user_topic_progress WHERE user_id = ? AND topic_id = ?", (user_id, topic_dict["id"]))
        tp = cursor.fetchone()
        topic_dict["user_progress"] = dict(tp) if tp else {"status": "not_started", "progress_percentage": 0}
        
        # Check bookmark
        cursor.execute("SELECT id FROM bookmarks WHERE user_id = ? AND topic_id = ?", (user_id, topic_dict["id"]))
        topic_dict["is_bookmarked"] = cursor.fetchone() is not None
        
    conn.close()
    return topic_dict
