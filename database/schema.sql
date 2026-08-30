-- PrepFlow AI Database Schema for Supabase (PostgreSQL)

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. USERS TABLE
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'user', -- 'admin' or 'user'
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    icon VARCHAR(100) DEFAULT 'book',
    display_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. SUBJECTS TABLE
CREATE TABLE IF NOT EXISTS subjects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    icon VARCHAR(100) DEFAULT 'folder',
    display_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. TOPICS TABLE
CREATE TABLE IF NOT EXISTS topics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
    parent_topic_id UUID REFERENCES topics(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    difficulty VARCHAR(50) DEFAULT 'Medium', -- 'Beginner', 'Easy', 'Medium', 'Hard', 'Advanced'
    display_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. CONTENT BLOCKS TABLE (Modular Block System)
CREATE TABLE IF NOT EXISTS content_blocks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    topic_id UUID NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
    block_type VARCHAR(50) NOT NULL, 
    -- block_type options: 'explanation', 'concept', 'example', 'code', 'diagram', 'step_by_step', 'dry_run', 'complexity', 'mistakes', 'tips'
    content TEXT NOT NULL, -- Main text or JSON string depending on block_type
    metadata JSONB DEFAULT '{}'::jsonb, -- e.g., {"language": "python", "diagram_type": "mermaid", "time_complexity": "O(log n)"}
    display_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. PRACTICE QUESTIONS TABLE
CREATE TABLE IF NOT EXISTS practice_questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    topic_id UUID REFERENCES topics(id) ON DELETE CASCADE,
    category_slug VARCHAR(100) DEFAULT 'dsa', -- 'dsa', 'system-design', etc.
    title VARCHAR(255) NOT NULL,
    difficulty VARCHAR(50) NOT NULL DEFAULT 'Easy', -- 'Easy', 'Medium', 'Hard'
    description TEXT,
    platform VARCHAR(100) DEFAULT 'LeetCode', -- 'LeetCode', 'GeeksforGeeks', 'HackerRank', 'Custom'
    external_url TEXT,
    hints JSONB DEFAULT '[]'::jsonb, -- Hints for System Design practice
    solution_reference TEXT, -- Reference solution or architectural notes
    display_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. USER QUESTION PROGRESS TABLE
CREATE TABLE IF NOT EXISTS user_question_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    question_id UUID NOT NULL REFERENCES practice_questions(id) ON DELETE CASCADE,
    status VARCHAR(50) NOT NULL DEFAULT 'not_started', -- 'not_started', 'attempted', 'solved', 'revision'
    notes TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, question_id)
);

-- 8. ASSESSMENTS TABLE
CREATE TABLE IF NOT EXISTS assessments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    topic_id UUID REFERENCES topics(id) ON DELETE SET NULL,
    subject_id UUID REFERENCES subjects(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    time_limit_minutes INT DEFAULT 15,
    pass_mark_percentage INT DEFAULT 70,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 9. ASSESSMENT QUESTIONS TABLE
CREATE TABLE IF NOT EXISTS assessment_questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    assessment_id UUID NOT NULL REFERENCES assessments(id) ON DELETE CASCADE,
    question_type VARCHAR(50) NOT NULL DEFAULT 'mcq', -- 'mcq', 'true_false', 'multiple_select', 'scenario', 'short_answer'
    question TEXT NOT NULL,
    options JSONB DEFAULT '[]'::jsonb, -- Array of string options
    correct_answer JSONB NOT NULL, -- String or array of correct option indexes/texts
    explanation TEXT,
    topic_tag VARCHAR(255), -- Map back to specific weak topic for recommendations
    display_order INT NOT NULL DEFAULT 0
);

-- 10. ASSESSMENT ATTEMPTS TABLE
CREATE TABLE IF NOT EXISTS assessment_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    assessment_id UUID NOT NULL REFERENCES assessments(id) ON DELETE CASCADE,
    score INT NOT NULL,
    total_questions INT NOT NULL,
    percentage FLOAT NOT NULL,
    passed BOOLEAN NOT NULL DEFAULT false,
    weak_topics JSONB DEFAULT '[]'::jsonb,
    started_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 11. USER TOPIC PROGRESS TABLE
CREATE TABLE IF NOT EXISTS user_topic_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    topic_id UUID NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
    status VARCHAR(50) NOT NULL DEFAULT 'not_started', -- 'not_started', 'in_progress', 'completed'
    progress_percentage INT DEFAULT 0,
    last_viewed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, topic_id)
);

-- 12. BOOKMARKS & REVISIONS TABLE
CREATE TABLE IF NOT EXISTS bookmarks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    topic_id UUID NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
    note TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, topic_id)
);

CREATE TABLE IF NOT EXISTS revisions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    topic_id UUID NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
    reason TEXT, -- 'low_assessment_score', 'flagged_practice', 'user_marked'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, topic_id)
);

-- 13. BEHAVIORAL ANSWERS TABLE
CREATE TABLE IF NOT EXISTS behavioral_answers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    question_title VARCHAR(255) NOT NULL,
    answer TEXT NOT NULL,
    ai_feedback JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 14. AI CONVERSATIONS TABLE
CREATE TABLE IF NOT EXISTS ai_conversations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    topic_id UUID REFERENCES topics(id) ON DELETE SET NULL,
    message TEXT NOT NULL,
    response TEXT NOT NULL,
    context JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- INDEXES FOR PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_subjects_category ON subjects(category_id);
CREATE INDEX IF NOT EXISTS idx_topics_subject ON topics(subject_id);
CREATE INDEX IF NOT EXISTS idx_content_blocks_topic ON content_blocks(topic_id);
CREATE INDEX IF NOT EXISTS idx_practice_questions_topic ON practice_questions(topic_id);
CREATE INDEX IF NOT EXISTS idx_user_question_prog ON user_question_progress(user_id, question_id);
CREATE INDEX IF NOT EXISTS idx_user_topic_prog ON user_topic_progress(user_id, topic_id);

-- ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE user_question_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessment_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_topic_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE revisions ENABLE ROW LEVEL SECURITY;
ALTER TABLE behavioral_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;

-- Default policies (Users manage their own records)
CREATE POLICY user_question_prog_policy ON user_question_progress FOR ALL USING (user_id = auth.uid());
CREATE POLICY assessment_attempts_policy ON assessment_attempts FOR ALL USING (user_id = auth.uid());
CREATE POLICY user_topic_prog_policy ON user_topic_progress FOR ALL USING (user_id = auth.uid());
CREATE POLICY bookmarks_policy ON bookmarks FOR ALL USING (user_id = auth.uid());
CREATE POLICY revisions_policy ON revisions FOR ALL USING (user_id = auth.uid());
CREATE POLICY behavioral_answers_policy ON behavioral_answers FOR ALL USING (user_id = auth.uid());
CREATE POLICY ai_conversations_policy ON ai_conversations FOR ALL USING (user_id = auth.uid());
