# PrepFlow AI — AI-Powered Interview Preparation Platform

A complete, production-ready full-stack web application for structured technical and behavioral interview preparation.

---

## 🚀 Quick Start

```bash
cd backend
python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
```

**Or double-click** `start.bat` from the project root.

Open → **http://127.0.0.1:8000**

---

## 🔑 Demo Credentials

| Role  | Email                  | Password   |
|-------|------------------------|------------|
| User  | `user@prepflow.ai`     | `user123`  |
| Admin | `admin@prepflow.ai`    | `admin123` |

---

## 📁 Project Structure

```
MyNotes/
├── start.bat                  ← One-click launch script
├── database/
│   └── schema.sql             ← Supabase PostgreSQL schema with RLS
├── backend/
│   ├── requirements.txt
│   ├── prepflow.db            ← Auto-created SQLite database (dev)
│   └── app/
│       ├── main.py            ← FastAPI entrypoint
│       ├── config.py          ← Environment settings
│       ├── database.py        ← DB connection + seed data
│       ├── schemas/           ← Pydantic request/response models
│       ├── services/
│       │   └── ai_service.py  ← AI tutor, STAR feedback, mock interview
│       └── api/
│           ├── auth.py        ← Login, JWT token
│           ├── categories.py  ← Category hierarchy & tree
│           ├── subjects.py    ← Subject listing
│           ├── topics.py      ← Topic detail + content blocks
│           ├── content.py     ← Content block CRUD
│           ├── practice.py    ← Practice questions + status tracking
│           ├── assessments.py ← Quiz runner + auto-scoring
│           ├── progress.py    ← Dashboard, bookmarks, revision queue
│           ├── ai.py          ← AI tutor, behavioral feedback, mock interview
│           └── admin.py       ← Admin CRUD + user analytics
└── frontend/
    ├── index.html             ← Landing page
    ├── login.html             ← Authentication portal
    ├── dashboard.html         ← Personalized user dashboard
    ├── learn.html             ← 3-Column Learning Hub
    ├── practice.html          ← DSA + System Design practice portal
    ├── assessment.html        ← Quiz runner with timed sessions
    ├── progress.html          ← Analytics dashboard
    ├── revision.html          ← Revision mode (bookmarks + weak areas)
    ├── behavioral.html        ← STAR method practice + AI feedback
    ├── mock-interview.html    ← AI conversational mock interview
    ├── admin/
    │   └── dashboard.html     ← Admin management portal
    ├── css/
    │   ├── main.css           ← Design system (dark theme, tokens)
    │   ├── learning.css       ← 3-column layout + block components
    │   ├── ai-chat.css        ← AI tutor panel + quick action pills
    │   └── admin.css          ← Admin forms and tables
    └── js/
        ├── api.js             ← Centralized API client
        ├── auth.js            ← Session management + role guards
        ├── dashboard.js       ← Dashboard data loader
        ├── learning.js        ← Content block renderer + voice
        ├── practice.js        ← Practice tracker + filter
        ├── assessment.js      ← Quiz engine + auto-grader
        ├── progress.js        ← Analytics + revision mode
        ├── ai-chat.js         ← Context-aware AI conversation
        ├── behavioral.js      ← STAR answer + AI feedback
        ├── mock-interview.js  ← Mock interview simulator
        ├── voice.js           ← SpeechSynthesis TTS controller
        └── admin.js           ← Admin CRUD + AI generator
```

---

## ✨ Key Features

### 📚 Learning Hub (3-Column Layout)
- **Left Sidebar**: Accordion navigation (Category → Subject → Topic)
- **Middle**: Modular block-based content:
  - `explanation` — Rich formatted notes
  - `concept` — Highlighted important principles
  - `code` — Syntax-highlighted multi-language code with copy button
  - `diagram` — Mermaid.js visual flowcharts (rendered in-browser)
  - `step_by_step` — Numbered logic walkthrough cards
  - `dry_run` — Interactive table-based trace
  - `complexity` — Time/Space complexity breakdown
  - `mistakes` — Common interview mistakes to avoid
  - `tips` — Interview-level insights
- **Right Panel**: Collapsible AI Tutor with 6 quick-action prompts
- **Voice Bar**: Play/Pause/Stop + 4 playback speeds using Web Speech API

### 🤖 AI Tutor Quick Actions
| Button | What it does |
|--------|-------------|
| 💡 Explain Simply | Beginner-friendly analogy |
| 📝 Give Example | Step-by-step trace example |
| ⚙️ Explain Logic | Algorithm invariants breakdown |
| 📊 Dry Run | Table-form execution trace |
| 🎯 Interview Insights | Top interview tips & pitfalls |
| ❓ Quiz Me | Test question on current topic |

### 🏋️ DSA Practice Tracker
- Multi-platform links: LeetCode, GFG, HackerRank
- Status per user: `Not Started` → `Attempted` → `Solved ✅` → `Need Revision ⚠️`
- System Design exercises with expandable hints

### 📝 Assessment Engine
- MCQ, True/False, Multiple Select question types
- Real-time countdown timer
- Automated scoring + correct answer explanations
- Weak topic identification → auto-queued for revision

### 🎯 Behavioral & STAR Prep
- STAR framework breakdown (Situation, Task, Action, Result)
- Curated HR question bank
- AI analysis: clarity score, structure rating, improvement suggestions

### 🎙️ AI Mock Interview Simulator
- Track types: DSA, System Design, CS Fundamentals, Behavioral
- Adaptive follow-up questions (4 turns)
- Post-interview report: score, strong areas, weak areas, revision list

### 📊 Progress & Analytics
- Overall % preparation metric
- Per-category progress bars
- Questions solved / attempted / revision counts
- Learning streak tracker
- Resume from last-viewed topic

### 🔖 Revision Mode
- Bookmarked topics library
- Auto-flagged weak topics from low assessment scores
- Quick "Revise →" navigation

### 🛠️ Admin Portal
- Category, Subject, Topic creation (full CRUD)
- AI Content Generator: generate structured block drafts → preview → approve → publish
- User management table with activity analytics

---

## 🔌 API Endpoints (FastAPI)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Server health check |
| `POST` | `/api/auth/login` | Authenticate user |
| `GET` | `/api/auth/me` | Get current user profile |
| `GET` | `/api/categories` | List all categories |
| `GET` | `/api/categories/{slug}/tree` | Category hierarchy tree |
| `GET` | `/api/topics/{slug}` | Topic detail + content blocks |
| `GET` | `/api/practice/questions` | Filtered practice questions |
| `POST` | `/api/practice/status` | Update question solve status |
| `GET` | `/api/assessments` | List assessments |
| `POST` | `/api/assessments/submit` | Submit & auto-grade quiz |
| `GET` | `/api/progress/dashboard/{user_id}` | Dashboard metrics |
| `POST` | `/api/progress/bookmark` | Toggle topic bookmark |
| `POST` | `/api/ai/ask` | Context-aware AI tutor Q&A |
| `POST` | `/api/ai/behavioral/feedback` | STAR answer evaluation |
| `POST` | `/api/ai/admin/generate-content` | AI block draft generator |
| `POST` | `/api/ai/mock-interview/step` | Mock interview conversation |
| `GET` | `/api/docs` | Interactive Swagger API docs |

---

## 🌐 Production (Supabase)

To connect to Supabase instead of local SQLite, set environment variables:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-service-role-key
JWT_SECRET=your-strong-secret
GEMINI_API_KEY=your-gemini-api-key   # Optional for full AI responses
```

Run the `database/schema.sql` script in your Supabase SQL editor to create all tables and RLS policies.

---

## 🏗️ Architecture

```
Frontend (Vanilla JS + HTML5 + CSS3)
    ↓ REST API calls
FastAPI Backend (Python)
    ↓ SQLite (dev) / Supabase PostgreSQL (prod)
SQLite DB ← prepflow.db (auto-created on startup)
```

AI Features work in two modes:
- **With Gemini API Key**: Live Gemini 1.5 Flash responses
- **Without API Key**: Intelligent rule-based fallback responses (works offline)

---

## 📦 Dependencies

```
fastapi, uvicorn        — Python web framework
pydantic               — Request/response validation
pyjwt                  — JWT authentication tokens
passlib[bcrypt]        — Password hashing
httpx                  — Async HTTP for AI API calls
python-dotenv          — .env file support
```

Frontend (CDN — no install required):
- [Mermaid.js](https://mermaid.js.org) — Interactive diagrams
- [Google Fonts Inter](https://fonts.google.com/specimen/Inter) — Typography
