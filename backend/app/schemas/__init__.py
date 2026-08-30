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

# --- Practice Schemas ---
class QuestionStatusUpdate(BaseModel):
    question_id: str
    status: str # 'not_started', 'attempted', 'solved', 'revision'
    notes: Optional[str] = None

class PracticeQuestionResponse(BaseModel):
    id: str
    topic_id: Optional[str] = None
    category_slug: str
    title: str
    difficulty: str
    description: Optional[str] = None
    platform: str
    external_url: Optional[str] = None
    hints: Optional[List[str]] = []
    solution_reference: Optional[str] = None
    user_status: Optional[str] = "not_started"

# --- Assessment Schemas ---
class AssessmentSubmit(BaseModel):
    assessment_id: str
    answers: Dict[str, Any] # question_id -> user_answer

class AssessmentResultResponse(BaseModel):
    attempt_id: str
    score: int
    total_questions: int
    percentage: float
    passed: bool
    weak_topics: List[str]
    completed_at: str

# --- AI & Mock Interview Schemas ---
class AIQuestionRequest(BaseModel):
    topic_id: Optional[str] = None
    category_name: Optional[str] = None
    topic_title: Optional[str] = None
    message: str
    action_type: Optional[str] = "chat" # 'explain_simple', 'example', 'logic', 'dry_run', 'interview', 'quiz_me', 'chat'

class BehavioralAnswerRequest(BaseModel):
    question_title: str
    answer: str

class AIGenerateContentRequest(BaseModel):
    topic_name: str
    category_name: str
    difficulty: Optional[str] = "Beginner to Interview Level"

class MockInterviewMessage(BaseModel):
    interview_type: str # 'dsa', 'cs-fundamentals', 'system-design', 'behavioral'
    difficulty: str # 'Beginner', 'Intermediate', 'Advanced'
    history: List[Dict[str, str]] = []
    user_message: str
