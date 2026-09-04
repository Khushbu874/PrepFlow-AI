# PrepFlow AI - Supabase PostgreSQL Database Module (SQLite removed)

import json
import uuid
import hashlib
from datetime import datetime
from app.config import settings

import psycopg2
from psycopg2.extras import RealDictCursor


# ---------------------------------------------------------------------------
# Row & Cursor wrappers — convert psycopg2 RealDictRow to plain dict
# and transparently convert SQLite '?' placeholders to Postgres '%s'
# ---------------------------------------------------------------------------

class PgRowWrapper(dict):
    def __getitem__(self, item):
        if isinstance(item, int):
            return list(self.values())[item]
        return super().__getitem__(item)


class PgCursorWrapper:
    def __init__(self, cur):
        self._cur = cur

    def execute(self, query, params=None):
        if params is not None:
            query = query.replace("?", "%s")
            return self._cur.execute(query, params)
        else:
            return self._cur.execute(query)

    def fetchone(self):
        res = self._cur.fetchone()
        return PgRowWrapper(res) if res is not None else None

    def fetchall(self):
        res = self._cur.fetchall()
        return [PgRowWrapper(r) for r in res] if res is not None else []


class PgConnectionWrapper:
    def __init__(self, conn):
        self._conn = conn

    def cursor(self):
        return PgCursorWrapper(self._conn.cursor(cursor_factory=RealDictCursor))

    def commit(self):
        self._conn.commit()

    def rollback(self):
        self._conn.rollback()

    def close(self):
        self._conn.close()


# ---------------------------------------------------------------------------
# Connection factory — Supabase only
# ---------------------------------------------------------------------------

def get_db_connection() -> PgConnectionWrapper:
    """Returns a Supabase PostgreSQL connection. Raises if DATABASE_URL is not set."""
    if not settings.DATABASE_URL:
        raise RuntimeError(
            "DATABASE_URL is not configured. "
            "Set it in your .env file to connect to Supabase."
        )
    conn = psycopg2.connect(settings.DATABASE_URL)
    return PgConnectionWrapper(conn)


# ---------------------------------------------------------------------------
# Utilities
# ---------------------------------------------------------------------------

def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode()).hexdigest()


# ---------------------------------------------------------------------------
# init_db — ensures all required tables exist in Supabase
# (idempotent: safe to run on every startup)
# ---------------------------------------------------------------------------

def init_db():
    """Create all required tables in Supabase if they don't exist yet."""
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS public.users (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            name TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT 'user',
            avatar_url TEXT,
            created_at TIMESTAMPTZ DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS public.profiles (
            id UUID PRIMARY KEY,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT,
            full_name TEXT,
            avatar_url TEXT,
            target_role TEXT DEFAULT 'Software Engineer',
            target_company TEXT DEFAULT 'FAANG',
            created_at TIMESTAMPTZ DEFAULT NOW(),
            updated_at TIMESTAMPTZ DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS public.user_topic_progress (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id UUID NOT NULL,
            topic_id TEXT NOT NULL,
            status TEXT CHECK (status IN ('not_started', 'in_progress', 'completed')) DEFAULT 'completed',
            created_at TIMESTAMPTZ DEFAULT NOW(),
            updated_at TIMESTAMPTZ DEFAULT NOW(),
            CONSTRAINT unique_user_topic UNIQUE (user_id, topic_id)
        );

        CREATE TABLE IF NOT EXISTS public.user_bookmarks (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id UUID NOT NULL,
            topic_id TEXT NOT NULL,
            created_at TIMESTAMPTZ DEFAULT NOW(),
            CONSTRAINT unique_user_bookmark UNIQUE (user_id, topic_id)
        );

        CREATE TABLE IF NOT EXISTS public.user_solved_questions (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id UUID NOT NULL,
            question_title TEXT NOT NULL,
            topic_id TEXT,
            solved_at TIMESTAMPTZ DEFAULT NOW(),
            CONSTRAINT unique_user_solved_q UNIQUE (user_id, question_title)
        );

        CREATE TABLE IF NOT EXISTS public.user_topic_notes (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id UUID NOT NULL,
            topic_id TEXT NOT NULL,
            note_text TEXT NOT NULL,
            created_at TIMESTAMPTZ DEFAULT NOW(),
            updated_at TIMESTAMPTZ DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS public.ai_conversations (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id UUID NOT NULL,
            topic_id TEXT,
            user_message TEXT NOT NULL,
            ai_response TEXT NOT NULL,
            created_at TIMESTAMPTZ DEFAULT NOW()
        );
    """)

    conn.commit()
    conn.close()
    print("[DB Init] All Supabase tables verified/created.")


def migrate_db():
    """No-op kept for import compatibility — init_db() is idempotent."""
    pass
