from fastapi import APIRouter, HTTPException
from app.database import get_db_connection

router = APIRouter(prefix="/subjects", tags=["Subjects"])

@router.get("")
def get_subjects(category_id: str = None):
    conn = get_db_connection()
    cursor = conn.cursor()
    if category_id:
        cursor.execute("SELECT * FROM subjects WHERE category_id = ? ORDER BY display_order ASC", (category_id,))
    else:
        cursor.execute("SELECT * FROM subjects ORDER BY display_order ASC")
    rows = cursor.fetchall()
    conn.close()
    return [dict(r) for r in rows]
