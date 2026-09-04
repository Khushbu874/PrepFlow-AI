import uuid
from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, EmailStr
import jwt
from datetime import datetime, timedelta
from app.database import get_db_connection, hash_password
from app.config import settings

router = APIRouter(prefix="/auth", tags=["Auth"])

class LoginRequest(BaseModel):
    email: str
    password: str

class RegisterRequest(BaseModel):
    name: str
    email: str
    password: str

def create_access_token(user_id: str, role: str = "user"):
    payload = {
        "sub": user_id,
        "role": role,
        "exp": datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    }
    return jwt.encode(payload, settings.JWT_SECRET, algorithm=settings.ALGORITHM)

@router.post("/register")
def register(req: RegisterRequest):
    name = req.name.strip()
    email = req.email.strip().lower()
    password = req.password.strip()

    if not name or not email or not password:
        raise HTTPException(status_code=400, detail="All fields are required.")
    
    if len(password) < 6:
        raise HTTPException(status_code=400, detail="Password must be at least 6 characters long.")

    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT id FROM users WHERE email = ?", (email,))
    existing = cursor.fetchone()
    if existing:
        conn.close()
        raise HTTPException(status_code=400, detail="An account with this email already exists. Please log in.")

    user_id = str(uuid.uuid4())
    hashed = hash_password(password)
    now = datetime.utcnow().isoformat()
    avatar = f"https://api.dicebear.com/7.x/bottts/svg?seed={name}"

    cursor.execute("""
        INSERT INTO users (id, email, password_hash, name, role, avatar_url, created_at)
        VALUES (?, ?, ?, ?, 'user', ?, ?)
    """, (user_id, email, hashed, name, avatar, now))

    try:
        cursor.execute("""
            INSERT INTO profiles (id, email, full_name, avatar_url, password_hash, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT (id) DO UPDATE SET 
                full_name = EXCLUDED.full_name, 
                avatar_url = EXCLUDED.avatar_url,
                password_hash = EXCLUDED.password_hash
        """, (user_id, email, name, avatar, hashed, now, now))
    except Exception:
        pass

    conn.commit()
    conn.close()

    token = create_access_token(user_id, "user")
    user_data = {
        "id": user_id,
        "email": email,
        "name": name,
        "role": "user",
        "avatar_url": avatar,
        "created_at": now
    }

    return {"access_token": token, "token_type": "bearer", "user": user_data}

@router.post("/login")
def login(req: LoginRequest):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    email = req.email.strip().lower()
    hashed = hash_password(req.password)
    cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
    user = cursor.fetchone()
    
    if not user or user["password_hash"] != hashed:
        conn.close()
        raise HTTPException(status_code=401, detail="Invalid email or password.")
        
    token = create_access_token(user["id"], user["role"])
    
    user_data = {
        "id": user["id"],
        "email": user["email"],
        "name": user["name"],
        "role": user["role"],
        "avatar_url": user["avatar_url"],
        "created_at": user["created_at"]
    }
    conn.close()
    return {"access_token": token, "token_type": "bearer", "user": user_data}

@router.get("/me")
def get_current_user(token: str):
    try:
        payload = jwt.decode(token, settings.JWT_SECRET, algorithms=[settings.ALGORITHM])
        user_id = payload["sub"]
        
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT id, email, name, role, avatar_url, created_at FROM users WHERE id = ?", (user_id,))
        user = cursor.fetchone()
        conn.close()
        
        if not user:
            raise HTTPException(status_code=404, detail="User not found.")
        return dict(user)
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid or expired token.")
