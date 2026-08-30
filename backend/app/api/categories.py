from fastapi import APIRouter, HTTPException
from app.database import get_db_connection

router = APIRouter(prefix="/categories", tags=["Categories"])

@router.get("")
def get_categories():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        SELECT c.*, 
               (SELECT COUNT(*) FROM subjects WHERE category_id = c.id) as subjects_count
        FROM categories c
        ORDER BY c.display_order ASC
    """)
    rows = cursor.fetchall()
    conn.close()
    return [dict(r) for r in rows]

@router.get("/{slug}/tree")
def get_category_tree(slug: str):
    """Fetch complete hierarchical tree (Category -> Subjects -> Topics -> Subtopics)."""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM categories WHERE slug = ?", (slug,))
    category = cursor.fetchone()
    if not category:
        conn.close()
        raise HTTPException(status_code=404, detail="Category not found")
        
    cat_dict = dict(category)
    
    # Fetch subjects
    cursor.execute("SELECT * FROM subjects WHERE category_id = ? ORDER BY display_order ASC", (cat_dict["id"],))
    subjects = [dict(s) for s in cursor.fetchall()]
    
    for s in subjects:
        cursor.execute("SELECT * FROM topics WHERE subject_id = ? ORDER BY display_order ASC", (s["id"],))
        topics = [dict(t) for t in cursor.fetchall()]
        s["topics"] = topics
        
    cat_dict["subjects"] = subjects
    conn.close()
    return cat_dict
