import sqlite3
import json
import uuid
import hashlib
import os
from datetime import datetime
from app.config import settings

try:
    import psycopg2
    from psycopg2.extras import RealDictCursor
except ImportError:
    psycopg2 = None
    RealDictCursor = None


class PgCursorWrapper:
    def __init__(self, cur):
        self._cur = cur

    def execute(self, query, params=None):
        if params is not None:
            # Convert SQLite '?' placeholders to PostgreSQL '%s' placeholders
            query = query.replace("?", "%s")
            return self._cur.execute(query, params)
        else:
            return self._cur.execute(query)

    def fetchone(self):
        res = self._cur.fetchone()
        return dict(res) if res is not None else None

    def fetchall(self):
        res = self._cur.fetchall()
        return [dict(r) for r in res] if res is not None else []


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


def get_db_connection():
    """Returns database connection - prefers Supabase Postgres if configured, falls back to SQLite."""
    if settings.DATABASE_URL and psycopg2 is not None:
        try:
            conn = psycopg2.connect(settings.DATABASE_URL)
            return PgConnectionWrapper(conn)
        except Exception as e:
            print(f"[Supabase Connection Warning]: {e}. Falling back to SQLite.")

    conn = sqlite3.connect(settings.DATABASE_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode()).hexdigest()

def init_db():
    """Initialize local SQLite database with full schema and seed content."""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # 1. Users table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        name TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'user',
        avatar_url TEXT,
        created_at TEXT NOT NULL
    )
    ''')
    
    # 2. Categories
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS categories (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        description TEXT,
        icon TEXT DEFAULT 'book',
        display_order INTEGER DEFAULT 0,
        created_at TEXT NOT NULL
    )
    ''')
    
    # 3. Subjects
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS subjects (
        id TEXT PRIMARY KEY,
        category_id TEXT NOT NULL,
        name TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        description TEXT,
        icon TEXT DEFAULT 'folder',
        display_order INTEGER DEFAULT 0,
        created_at TEXT NOT NULL,
        FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
    )
    ''')
    
    # 4. Topics
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS topics (
        id TEXT PRIMARY KEY,
        subject_id TEXT NOT NULL,
        parent_topic_id TEXT,
        title TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        description TEXT,
        difficulty TEXT DEFAULT 'Medium',
        display_order INTEGER DEFAULT 0,
        created_at TEXT NOT NULL,
        FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE CASCADE
    )
    ''')
    
    # 5. Content Blocks
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS content_blocks (
        id TEXT PRIMARY KEY,
        topic_id TEXT NOT NULL,
        block_type TEXT NOT NULL,
        content TEXT NOT NULL,
        metadata TEXT DEFAULT '{}',
        display_order INTEGER DEFAULT 0,
        created_at TEXT NOT NULL,
        FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE
    )
    ''')
    
    # 6. Practice Questions
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS practice_questions (
        id TEXT PRIMARY KEY,
        topic_id TEXT,
        category_slug TEXT DEFAULT 'dsa',
        title TEXT NOT NULL,
        difficulty TEXT DEFAULT 'Easy',
        description TEXT,
        platform TEXT DEFAULT 'LeetCode',
        external_url TEXT,
        hints TEXT DEFAULT '[]',
        solution_reference TEXT,
        display_order INTEGER DEFAULT 0,
        created_at TEXT NOT NULL,
        FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE
    )
    ''')
    
    # 7. User Question Progress
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS user_question_progress (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        question_id TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'not_started',
        notes TEXT,
        updated_at TEXT NOT NULL,
        UNIQUE(user_id, question_id),
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (question_id) REFERENCES practice_questions(id) ON DELETE CASCADE
    )
    ''')
    
    # 8. Assessments
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS assessments (
        id TEXT PRIMARY KEY,
        topic_id TEXT,
        subject_id TEXT,
        title TEXT NOT NULL,
        description TEXT,
        time_limit_minutes INTEGER DEFAULT 15,
        pass_mark_percentage INTEGER DEFAULT 70,
        created_at TEXT NOT NULL
    )
    ''')
    
    # 9. Assessment Questions
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS assessment_questions (
        id TEXT PRIMARY KEY,
        assessment_id TEXT NOT NULL,
        question_type TEXT NOT NULL DEFAULT 'mcq',
        question TEXT NOT NULL,
        options TEXT DEFAULT '[]',
        correct_answer TEXT NOT NULL,
        explanation TEXT,
        topic_tag TEXT,
        display_order INTEGER DEFAULT 0,
        FOREIGN KEY (assessment_id) REFERENCES assessments(id) ON DELETE CASCADE
    )
    ''')
    
    # 10. Assessment Attempts
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS assessment_attempts (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        assessment_id TEXT NOT NULL,
        score INTEGER NOT NULL,
        total_questions INTEGER NOT NULL,
        percentage REAL NOT NULL,
        passed INTEGER NOT NULL DEFAULT 0,
        weak_topics TEXT DEFAULT '[]',
        started_at TEXT NOT NULL,
        completed_at TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (assessment_id) REFERENCES assessments(id) ON DELETE CASCADE
    )
    ''')
    
    # 11. User Topic Progress
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS user_topic_progress (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        topic_id TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'not_started',
        progress_percentage INTEGER DEFAULT 0,
        last_viewed_at TEXT NOT NULL,
        UNIQUE(user_id, topic_id),
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE
    )
    ''')
    
    # 12. Bookmarks & Revisions
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS bookmarks (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        topic_id TEXT NOT NULL,
        note TEXT,
        created_at TEXT NOT NULL,
        UNIQUE(user_id, topic_id),
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE
    )
    ''')
    
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS revisions (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        topic_id TEXT NOT NULL,
        reason TEXT,
        created_at TEXT NOT NULL,
        UNIQUE(user_id, topic_id),
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE
    )
    ''')
    
    # 13. Behavioral Answers
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS behavioral_answers (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        question_title TEXT NOT NULL,
        answer TEXT NOT NULL,
        ai_feedback TEXT DEFAULT '{}',
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
    ''')
    
    # 14. AI Conversations
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS ai_conversations (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        topic_id TEXT,
        message TEXT NOT NULL,
        response TEXT NOT NULL,
        context TEXT DEFAULT '{}',
        created_at TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
    ''')
    
    conn.commit()
    
    # Seed default data if tables are empty
    seed_database(conn)
    conn.close()

def seed_database(conn):
    cursor = conn.cursor()
    
    # Check if users exist
    cursor.execute("SELECT COUNT(*) FROM users")
    if cursor.fetchone()[0] > 0:
        return # DB already seeded
        
    now = datetime.utcnow().isoformat()
    
    # 1. Seed Users
    admin_id = str(uuid.uuid4())
    user_id = str(uuid.uuid4())
    
    cursor.execute(
        "INSERT INTO users (id, email, password_hash, name, role, created_at) VALUES (?, ?, ?, ?, ?, ?)",
        (admin_id, "admin@prepflow.ai", hash_password("admin123"), "Lead Instructor", "admin", now)
    )
    cursor.execute(
        "INSERT INTO users (id, email, password_hash, name, role, created_at) VALUES (?, ?, ?, ?, ?, ?)",
        (user_id, "user@prepflow.ai", hash_password("user123"), "Alex Prep", "user", now)
    )
    
    # 2. Seed Categories
    c_dsa = str(uuid.uuid4())
    c_cs = str(uuid.uuid4())
    c_sd = str(uuid.uuid4())
    c_hr = str(uuid.uuid4())
    
    cursor.execute("INSERT INTO categories VALUES (?, ?, ?, ?, ?, ?, ?)", 
                   (c_dsa, "Data Structures & Algorithms", "dsa", "Master algorithmic thinking, arrays, binary search, trees, graphs & dynamic programming.", "code", 1, now))
    cursor.execute("INSERT INTO categories VALUES (?, ?, ?, ?, ?, ?, ?)", 
                   (c_cs, "CS Fundamentals", "cs-fundamentals", "Core Computer Science concepts including OOPs, DBMS, Operating Systems, and Networking.", "cpu", 2, now))
    cursor.execute("INSERT INTO categories VALUES (?, ?, ?, ?, ?, ?, ?)", 
                   (c_sd, "System Design", "system-design", "High-level architecture, scalability, load balancing, caching, and real-world system design cases.", "layers", 3, now))
    cursor.execute("INSERT INTO categories VALUES (?, ?, ?, ?, ?, ?, ?)", 
                   (c_hr, "Behavioral & HR Prep", "behavioral", "Master HR questions, STAR framework, leadership principles, and soft skill communication.", "user-check", 4, now))

    # 3. Seed Subjects
    # DSA Subjects
    s_arrays = str(uuid.uuid4())
    s_search = str(uuid.uuid4())
    s_trees = str(uuid.uuid4())
    s_dp = str(uuid.uuid4())
    
    cursor.execute("INSERT INTO subjects VALUES (?, ?, ?, ?, ?, ?, ?, ?)", (s_arrays, c_dsa, "Arrays & Strings", "arrays-strings", "Linear data structures, two-pointer techniques, and sliding window.", "grid", 1, now))
    cursor.execute("INSERT INTO subjects VALUES (?, ?, ?, ?, ?, ?, ?, ?)", (s_search, c_dsa, "Binary Search & Searching", "binary-search-dept", "Logarithmic searching algorithms and search space reduction.", "search", 2, now))
    cursor.execute("INSERT INTO subjects VALUES (?, ?, ?, ?, ?, ?, ?, ?)", (s_trees, c_dsa, "Trees & Binary Search Trees", "trees-bst", "Hierarchical data structures, traversals, and BST properties.", "git-pull-request", 3, now))
    cursor.execute("INSERT INTO subjects VALUES (?, ?, ?, ?, ?, ?, ?, ?)", (s_dp, c_dsa, "Dynamic Programming", "dynamic-programming", "Memoization, tabular DP, and optimal substructure problems.", "zap", 4, now))
    
    # CS Fundamentals Subjects
    s_oops = str(uuid.uuid4())
    s_dbms = str(uuid.uuid4())
    s_os = str(uuid.uuid4())
    s_cn = str(uuid.uuid4())
    
    cursor.execute("INSERT INTO subjects VALUES (?, ?, ?, ?, ?, ?, ?, ?)", (s_oops, c_cs, "Object-Oriented Programming (OOPs)", "oops", "Encapsulation, Abstraction, Inheritance, Polymorphism, and Interfaces.", "box", 1, now))
    cursor.execute("INSERT INTO subjects VALUES (?, ?, ?, ?, ?, ?, ?, ?)", (s_dbms, c_cs, "Database Management Systems (DBMS)", "dbms", "SQL, Relational database principles, ACID, Normalization, and Indexing.", "database", 2, now))
    cursor.execute("INSERT INTO subjects VALUES (?, ?, ?, ?, ?, ?, ?, ?)", (s_os, c_cs, "Operating Systems", "operating-systems", "Process management, CPU scheduling, Memory, Paging, and Deadlocks.", "terminal", 3, now))
    cursor.execute("INSERT INTO subjects VALUES (?, ?, ?, ?, ?, ?, ?, ?)", (s_cn, c_cs, "Computer Networks", "computer-networks", "OSI model, TCP/IP, HTTP/HTTPS, DNS, and socket communication.", "globe", 4, now))

    # System Design Subjects
    s_sd_fund = str(uuid.uuid4())
    s_sd_cases = str(uuid.uuid4())
    cursor.execute("INSERT INTO subjects VALUES (?, ?, ?, ?, ?, ?, ?, ?)", (s_sd_fund, c_sd, "System Design Fundamentals", "system-design-fundamentals", "Scalability, Latency, Load Balancing, Caching, Databases, CAP Theorem.", "sliders", 1, now))
    cursor.execute("INSERT INTO subjects VALUES (?, ?, ?, ?, ?, ?, ?, ?)", (s_sd_cases, c_sd, "System Design Case Studies", "system-design-cases", "Step-by-step architecture for URL Shortener, WhatsApp, Netflix, Uber.", "server", 2, now))

    # Behavioral Subjects
    s_hr_fund = str(uuid.uuid4())
    cursor.execute("INSERT INTO subjects VALUES (?, ?, ?, ?, ?, ?, ?, ?)", (s_hr_fund, c_hr, "Behavioral & STAR Method", "star-method", "STAR Method, Leadership principles, Conflict resolution, HR Questions.", "heart", 1, now))

    # 4. Seed Topics & Content Blocks
    # Topic 1: Binary Search (DSA)
    t_bs = str(uuid.uuid4())
    cursor.execute("INSERT INTO topics VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                   (t_bs, s_search, None, "Binary Search & Search Space", "binary-search", 
                    "Master logarithmic O(log N) search on sorted arrays and monotonicity.", "Easy", 1, now))

    # Content Blocks for Binary Search
    blocks_bs = [
        ("explanation", "### What is Binary Search?\nBinary Search is an efficient algorithm for finding an item from a **sorted list of items**. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.\n\nCompared to Sequential Search (which takes `O(N)` time), Binary Search operates in **`O(log N)`** logarithmic time complexity.", "{}"),
        ("concept", "**Prerequisite Rule**: The underlying search space MUST be sorted (or possess a monotonic boolean property) for Binary Search to guarantee correctness.", "{\"callout_type\": \"important\"}"),
        ("code", "def binary_search(nums: list[int], target: int) -> int:\n    low, high = 0, len(nums) - 1\n    \n    while low <= high:\n        # Avoid potential integer overflow in languages like C++/Java\n        mid = low + (high - low) // 2\n        \n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n            \n    return -1\n\n# Example Usage\nprint(binary_search([1, 3, 5, 7, 9, 11], 7)) # Returns index 3", "{\"language\": \"python\"}"),
        ("diagram", "graph TD\n    A[Search Space: 1 3 5 7 9 11] --> B{Compare Target 7 with Mid 5}\n    B -->|7 > 5| C[Search Right Half: 7 9 11]\n    B -->|7 < 5| D[Search Left Half]\n    C --> E{Compare Target 7 with Mid 7}\n    E -->|Equal| F[Found at Index 3!]", "{\"diagram_type\": \"mermaid\"}"),
        ("step_by_step", "Step 1: Set `low = 0` and `high = n - 1`.\nStep 2: Calculate middle index `mid = low + (high - low) / 2`.\nStep 3: Compare `nums[mid]` with `target`.\nStep 4: If equal, return `mid`.\nStep 5: If `nums[mid] < target`, shift search to right half (`low = mid + 1`).\nStep 6: If `nums[mid] > target`, shift search to left half (`high = mid - 1`).\nStep 7: Repeat until `low > high`.", "{}"),
        ("dry_run", "| Step | low | high | mid | nums[mid] | Action |\n|---|---|---|---|---|---|\n| 1 | 0 | 5 | 2 | 5 | 5 < 7 -> Shift low = 3 |\n| 2 | 3 | 5 | 4 | 9 | 9 > 7 -> Shift high = 3 |\n| 3 | 3 | 3 | 3 | 7 | 7 == 7 -> Target Found! |", "{\"table_type\": \"dry_run\"}"),
        ("complexity", "Time Complexity: **O(log N)** (Reduces search space by half in each iteration)\nSpace Complexity: **O(1)** Iterative / **O(log N)** Recursive stack depth.", "{\"time\": \"O(log N)\", \"space\": \"O(1)\"}"),
        ("mistakes", "1. Using `mid = (low + high) // 2` which can cause integer overflow in C++/Java when low + high > INT_MAX.\n2. Incorrect loop boundary conditions (`low < high` vs `low <= high`).\n3. Forgetting to update `low = mid + 1` or `high = mid - 1`, leading to infinite loops.", "{}"),
        ("tips", "In technical interviews, whenever a problem mentions a 'sorted array' or asks for an optimal solution better than O(N), immediately think of **Binary Search** or search space reduction!", "{}")
    ]
    
    for i, (b_type, content, meta) in enumerate(blocks_bs, 1):
        cursor.execute("INSERT INTO content_blocks VALUES (?, ?, ?, ?, ?, ?, ?)",
                       (str(uuid.uuid4()), t_bs, b_type, content, meta, i, now))
                       
    # Topic 2: DBMS ACID Properties (CS Fundamentals)
    t_acid = str(uuid.uuid4())
    cursor.execute("INSERT INTO topics VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                   (t_acid, s_dbms, None, "ACID Properties & Transactions", "acid-properties", 
                    "Understand Atomicity, Consistency, Isolation, and Durability in Relational Databases.", "Medium", 1, now))

    blocks_acid = [
        ("explanation", "### What is a Database Transaction?\nA transaction is a logical unit of work that contains one or more SQL statements. A database transaction must adhere to **ACID properties** to ensure reliability and data integrity.", "{}"),
        ("concept", "**ACID Breakdown**:\n- **Atomicity**: All or Nothing. Either all statements succeed or none.\n- **Consistency**: Database transitions from one valid state to another.\n- **Isolation**: Concurrent transactions execute without interfering with each other.\n- **Durability**: Committed data is permanently saved even during server failures.", "{\"callout_type\": \"important\"}"),
        ("code", "-- Example Banking Transfer Transaction\nBEGIN TRANSACTION;\n\nUPDATE accounts SET balance = balance - 500 WHERE account_id = 'A101';\nUPDATE accounts SET balance = balance + 500 WHERE account_id = 'B202';\n\n-- If any error occurs, ROLLBACK;\nCOMMIT;", "{\"language\": \"sql\"}"),
        ("diagram", "graph LR\n    A[Begin Transaction] --> B[Atomicity: All Operations Executed]\n    B --> C[Isolation: Locking / MVCC Controls]\n    C --> D[Consistency: Constraints Validated]\n    D --> E[Durability: Flush WAL Logs to Disk]\n    E --> F[Commit Successful]", "{\"diagram_type\": \"mermaid\"}"),
        ("complexity", "Transaction Isolation Levels: Read Uncommitted -> Read Committed -> Repeatable Read -> Serializable.", "{}")
    ]
    for i, (b_type, content, meta) in enumerate(blocks_acid, 1):
        cursor.execute("INSERT INTO content_blocks VALUES (?, ?, ?, ?, ?, ?, ?)",
                       (str(uuid.uuid4()), t_acid, b_type, content, meta, i, now))

    # Topic 3: System Design URL Shortener
    t_url = str(uuid.uuid4())
    cursor.execute("INSERT INTO topics VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                   (t_url, s_sd_cases, None, "Design a URL Shortener (e.g. TinyURL)", "design-url-shortener", 
                    "Architect a scalable, high-throughput short URL redirection system.", "Hard", 1, now))

    blocks_url = [
        ("explanation", "### Problem Statement\nDesign a service like TinyURL that takes long web links and generates compact short links (e.g. `prep.ai/xyz123`) with ultra-fast 301/302 HTTP redirection.", "{}"),
        ("step_by_step", "Step 1: Understand Functional Requirements (Shorten URL, Redirect, Custom Aliases, Expiration).\nStep 2: Non-Functional Requirements (High Availability 99.99%, Low Latency < 20ms redirection, Read-heavy system 100:1 ratio).\nStep 3: Capacity Estimation (100M URLs/month = ~40 write QPS, 4,000 read QPS).\nStep 4: High-Level Architecture (API Gateway -> Load Balancer -> Web App -> Redis Cache -> NoSQL / SQL DB).\nStep 5: Shortening Strategy (Base62 Encoding vs KGS Key Generation Service).", "{}"),
        ("diagram", "graph TD\n    Client[User Browser] -->|1. Request Short URL| LB[Load Balancer]\n    LB --> API[API Redirection Service]\n    API -->|2. Check Cache| Cache[(Redis Cache)]\n    Cache -->|Hit| Client\n    Cache -->|Miss| DB[(SQL/NoSQL DB)]\n    DB --> API", "{\"diagram_type\": \"mermaid\"}"),
        ("tips", "Key Tradeoff in Interviews: Explain 301 Permanent Redirect (Browser caches redirection, reduces server load) vs 302 Temporary Redirect (Server tracks analytics & click metrics).", "{}")
    ]
    for i, (b_type, content, meta) in enumerate(blocks_url, 1):
        cursor.execute("INSERT INTO content_blocks VALUES (?, ?, ?, ?, ?, ?, ?)",
                       (str(uuid.uuid4()), t_url, b_type, content, meta, i, now))

    # Topic 4: STAR Method (Behavioral)
    t_star = str(uuid.uuid4())
    cursor.execute("INSERT INTO topics VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                   (t_star, s_hr_fund, None, "The STAR Method for Behavioral Interviews", "star-method-guide", 
                    "Structure your behavioral answers with Situation, Task, Action, and Result.", "Easy", 1, now))

    blocks_star = [
        ("explanation", "### The STAR Framework\nWhen answering questions like *'Tell me about a time you faced a tough technical challenge'*, structure your story using **STAR**:", "{}"),
        ("concept", "- **S - Situation**: Set the context and describe the specific scenario or problem.\n- **T - Task**: Explain what goal or responsibility you had to address.\n- **A - Action**: Detail the concrete steps YOU took to solve it (Focus 70% of answer here!).\n- **R - Result**: Quantify the positive outcome, metrics, or key takeaways.", "{\"callout_type\": \"important\"}"),
        ("example", "**Example**: 'Our production database crashed due to lock contention (Situation). I was tasked with restoring service within 15 minutes (Task). I analyzed query logs, killed long-running transactions, and deployed an index fix (Action). Result: Restored uptime in 8 mins and reduced DB load by 45% (Result).'", "{}")
    ]
    for i, (b_type, content, meta) in enumerate(blocks_star, 1):
        cursor.execute("INSERT INTO content_blocks VALUES (?, ?, ?, ?, ?, ?, ?)",
                       (str(uuid.uuid4()), t_star, b_type, content, meta, i, now))

    # 5. Seed Practice Questions
    q1 = str(uuid.uuid4())
    q2 = str(uuid.uuid4())
    q3 = str(uuid.uuid4())
    q4 = str(uuid.uuid4())

    cursor.execute("INSERT INTO practice_questions VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                   (q1, t_bs, "dsa", "Binary Search", "Easy", "Given a sorted array of integers nums and a target, return index of target.", "LeetCode", "https://leetcode.com/problems/binary-search/", "[]", "Standard Binary Search logic", 1, now))
    cursor.execute("INSERT INTO practice_questions VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                   (q2, t_bs, "dsa", "Search Insert Position", "Easy", "Given a sorted array and target, return index if found or insertion position.", "LeetCode", "https://leetcode.com/problems/search-insert-position/", "[]", "Binary Search lower bound logic", 2, now))
    cursor.execute("INSERT INTO practice_questions VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                   (q3, t_bs, "dsa", "Find Peak Element", "Medium", "A peak element is an element that is strictly greater than its neighbors.", "LeetCode", "https://leetcode.com/problems/find-peak-element/", "[]", "Binary search on slope gradient", 3, now))
    cursor.execute("INSERT INTO practice_questions VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                   (q4, t_url, "system-design", "Design TinyURL System", "Hard", "Design a URL shortening service handling 100M URLs.", "Custom", "", json.dumps(["What will generate unique short keys?", "How to handle cache eviction?", "Database partitioning scheme"]), "Key Generation Service + Redis Cache + Consistent Hashing", 1, now))

    # Seed User Progress for Alex (user@prepflow.ai)
    cursor.execute("INSERT INTO user_question_progress VALUES (?, ?, ?, ?, ?, ?)",
                   (str(uuid.uuid4()), user_id, q1, "solved", "Solved in O(log n) time", now))
    cursor.execute("INSERT INTO user_question_progress VALUES (?, ?, ?, ?, ?, ?)",
                   (str(uuid.uuid4()), user_id, q2, "attempted", "Need to check edge cases", now))
                   
    cursor.execute("INSERT INTO user_topic_progress VALUES (?, ?, ?, ?, ?, ?)",
                   (str(uuid.uuid4()), user_id, t_bs, "in_progress", 65, now))
    cursor.execute("INSERT INTO user_topic_progress VALUES (?, ?, ?, ?, ?, ?)",
                   (str(uuid.uuid4()), user_id, t_acid, "completed", 100, now))

    # 6. Seed Assessments
    ass_id = str(uuid.uuid4())
    cursor.execute("INSERT INTO assessments VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                   (ass_id, t_acid, s_dbms, "DBMS & ACID Properties Assessment", "Test your knowledge of SQL transactions, locking, isolation levels, and ACID rules.", 10, 70, now))

    aq1 = str(uuid.uuid4())
    aq2 = str(uuid.uuid4())
    aq3 = str(uuid.uuid4())

    cursor.execute("INSERT INTO assessment_questions VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                   (aq1, ass_id, "mcq", "Which ACID property guarantees that all operations in a transaction succeed or fail as a single unit?", 
                    json.dumps(["Consistency", "Atomicity", "Isolation", "Durability"]), "Atomicity", "Atomicity ensures 'all or nothing' execution.", "ACID Properties", 1))
                    
    cursor.execute("INSERT INTO assessment_questions VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                   (aq2, ass_id, "mcq", "Which transaction isolation level prevents Dirty Reads but permits Non-Repeatable Reads?", 
                    json.dumps(["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"]), "Read Committed", "Read Committed prevents reading uncommitted changes.", "Isolation Levels", 2))

    cursor.execute("INSERT INTO assessment_questions VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                   (aq3, ass_id, "true_false", "True or False: In a 301 redirect, the browser automatically caches the destination URL.", 
                    json.dumps(["True", "False"]), "True", "301 represents Permanent Redirect which is cached locally by client browsers.", "System Design Redirection", 3))

    conn.commit()
    print("[Database Seed] PrepFlow AI database initialized with sample categories, topics, content blocks, practice questions, and assessments!")

if __name__ == "__main__":
    init_db()
