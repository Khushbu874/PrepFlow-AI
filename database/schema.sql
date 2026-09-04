-- =============================================================
-- PREPFLOW AI - CLEAN PRODUCTION SUPABASE (POSTGRESQL) SCHEMA
-- Modules Supported: Dashboard, Learning Hub, LeetCode Progress, Personal Notes, AI Assistant
-- =============================================================

-- -------------------------------------------------------------
-- 0. CLEANUP LEGACY & OLD TABLES (DROP IF EXISTS CASCADE)
-- -------------------------------------------------------------
DROP TABLE IF EXISTS public.ai_conversations CASCADE;
DROP TABLE IF EXISTS public.user_topic_notes CASCADE;
DROP TABLE IF EXISTS public.user_solved_questions CASCADE;
DROP TABLE IF EXISTS public.user_bookmarks CASCADE;
DROP TABLE IF EXISTS public.user_topic_progress CASCADE;
DROP TABLE IF EXISTS public.profiles CASCADE;

-- Drop obsolete legacy tables if they exist
DROP TABLE IF EXISTS public.revisions CASCADE;
DROP TABLE IF EXISTS public.behavioral_answers CASCADE;
DROP TABLE IF EXISTS public.assessment_attempts CASCADE;
DROP TABLE IF EXISTS public.assessment_questions CASCADE;
DROP TABLE IF EXISTS public.assessments CASCADE;
DROP TABLE IF EXISTS public.user_question_progress CASCADE;
DROP TABLE IF EXISTS public.practice_questions CASCADE;
DROP TABLE IF EXISTS public.content_blocks CASCADE;
DROP TABLE IF EXISTS public.topics CASCADE;
DROP TABLE IF EXISTS public.subjects CASCADE;
DROP TABLE IF EXISTS public.categories CASCADE;
DROP TABLE IF EXISTS public.users CASCADE;

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- -------------------------------------------------------------
-- 1. PROFILES TABLE (Linked with Supabase auth.users)
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT,
    full_name TEXT,
    avatar_url TEXT,
    target_role TEXT DEFAULT 'Software Engineer',
    target_company TEXT DEFAULT 'FAANG',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------------
-- 2. USER TOPIC PROGRESS TABLE (Completed / In Progress Topics)
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.user_topic_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    topic_id TEXT NOT NULL,
    status TEXT CHECK (status IN ('not_started', 'in_progress', 'completed')) DEFAULT 'completed',
    completed_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_user_topic UNIQUE (user_id, topic_id)
);

-- -------------------------------------------------------------
-- 3. USER BOOKMARKS TABLE (Saved Lessons / Topics)
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.user_bookmarks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    topic_id TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_user_bookmark UNIQUE (user_id, topic_id)
);

-- -------------------------------------------------------------
-- 4. USER SOLVED LEETCODE QUESTIONS TABLE
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.user_solved_questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    question_title TEXT NOT NULL,
    topic_id TEXT,
    solved_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_user_solved_q UNIQUE (user_id, question_title)
);

-- -------------------------------------------------------------
-- 5. USER TOPIC PERSONAL NOTES TABLE (Add, Edit, Delete Notes)
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.user_topic_notes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    topic_id TEXT NOT NULL,
    note_text TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------------
-- 6. AI CONVERSATIONS LOG TABLE
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.ai_conversations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    topic_id TEXT,
    user_message TEXT NOT NULL,
    ai_response TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------------
-- INDEXES FOR MAXIMUM SPEED & HIGH PERFORMANCE
-- -------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_progress_user ON public.user_topic_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_bookmarks_user ON public.user_bookmarks(user_id);
CREATE INDEX IF NOT EXISTS idx_solved_q_user ON public.user_solved_questions(user_id);
CREATE INDEX IF NOT EXISTS idx_notes_user_topic ON public.user_topic_notes(user_id, topic_id);
CREATE INDEX IF NOT EXISTS idx_ai_conv_user ON public.ai_conversations(user_id);

-- -------------------------------------------------------------
-- ROW LEVEL SECURITY (RLS) POLICIES FOR SUPABASE SECURE ACCESS
-- -------------------------------------------------------------
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_topic_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_solved_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_topic_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_conversations ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Topic Progress Policies
CREATE POLICY "Users can access own progress" ON public.user_topic_progress FOR ALL USING (auth.uid() = user_id);

-- Bookmarks Policies
CREATE POLICY "Users can access own bookmarks" ON public.user_bookmarks FOR ALL USING (auth.uid() = user_id);

-- Solved Questions Policies
CREATE POLICY "Users can access own solved questions" ON public.user_solved_questions FOR ALL USING (auth.uid() = user_id);

-- Notes Policies
CREATE POLICY "Users can access own topic notes" ON public.user_topic_notes FOR ALL USING (auth.uid() = user_id);

-- AI Conversations Policies
CREATE POLICY "Users can access own AI chats" ON public.ai_conversations FOR ALL USING (auth.uid() = user_id);

-- -------------------------------------------------------------
-- AUTOMATIC NEW USER TRIGGER FOR SUPABASE AUTH
-- -------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name, avatar_url)
    VALUES (
        new.id,
        new.email,
        COALESCE(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
        new.raw_user_meta_data->>'avatar_url'
    )
    ON CONFLICT (id) DO NOTHING;
    RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate Trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
