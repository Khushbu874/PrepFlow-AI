from pydantic import BaseModel, EmailStr
from typing import List, Optional, Any, Dict

# --- Auth Schemas ---
class LoginRequest(BaseModel):
    email: str
    password: str

class UserResponse(BaseModel):
    id: str
    email: str
    name: str
    role: str
    avatar_url: Optional[str] = None
    created_at: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse

# --- Category & Subject Schemas ---
class CategoryBase(BaseModel):
    name: str
    slug: str
    description: Optional[str] = None
    icon: Optional[str] = "book"
    display_order: Optional[int] = 0

class CategoryResponse(CategoryBase):
    id: str
    created_at: str
    subjects_count: Optional[int] = 0

class SubjectBase(BaseModel):
    category_id: str
    name: str
    slug: str
    description: Optional[str] = None
    icon: Optional[str] = "folder"
    display_order: Optional[int] = 0

class SubjectResponse(SubjectBase):
    id: str
    created_at: str
    topics_count: Optional[int] = 0

# --- Topic & Content Block Schemas ---
class TopicBase(BaseModel):
    subject_id: str
    parent_topic_id: Optional[str] = None
    title: str
    slug: str
    description: Optional[str] = None
    difficulty: Optional[str] = "Medium"
    display_order: Optional[int] = 0

class TopicResponse(TopicBase):
    id: str
    created_at: str
    progress_percentage: Optional[int] = 0
    status: Optional[str] = "not_started"

class ContentBlockCreate(BaseModel):
    topic_id: str
    block_type: str
    content: str
    metadata: Optional[Dict[str, Any]] = {}
    display_order: Optional[int] = 0

class ContentBlockResponse(ContentBlockCreate):
    id: str
    created_at: str

# --- AI Schemas ---
class AIQuestionRequest(BaseModel):
    topic_id: Optional[str] = None
    category_name: Optional[str] = None
    topic_title: Optional[str] = None
    message: str
    action_type: Optional[str] = "chat" # 'explain_simple', 'example', 'logic', 'dry_run', 'interview', 'quiz_me', 'chat'

class AIGenerateContentRequest(BaseModel):
    topic_name: str
    category_name: str
    difficulty: Optional[str] = "Beginner to Interview Level"
