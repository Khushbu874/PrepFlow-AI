import os
try:
    from dotenv import load_dotenv
    env_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), ".env")
    if os.path.exists(env_path):
        load_dotenv(env_path)
except ImportError:
    pass

try:
    from pydantic_settings import BaseSettings
except ImportError:
    BaseSettings = object


class Settings:
    PROJECT_NAME: str = "PrepFlow AI"
    VERSION: str = "1.0.0"
    API_PREFIX: str = "/api"
    
    # Security
    JWT_SECRET: str = os.getenv("JWT_SECRET", "prepflow-ai-super-secret-key-2026")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7 # 7 days
    
    # Supabase / Database
    SUPABASE_URL: str = os.getenv("SUPABASE_URL", "https://naisxhsibkmcslonzybo.supabase.co")
    SUPABASE_KEY: str = os.getenv("SUPABASE_KEY", "")
    DATABASE_URL: str = os.getenv("DATABASE_URL", "")
    
    # AI API Credentials (Optional, mock/fallback AI responses included if not set)
    GROQ_API_KEY: str = os.getenv("GROQ_API_KEY", "")
    GROQ_MODEL: str = os.getenv("GROQ_MODEL", "llama-3.3-70b-versatile")
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", os.getenv("PALM_API_KEY", ""))
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY", "")
    
    # Database
    DATABASE_PATH: str = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "prepflow.db")

settings = Settings()
