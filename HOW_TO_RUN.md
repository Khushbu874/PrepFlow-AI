# 🚀 PrepFlow AI — Project Run Karne Ki Step-by-Step Guide

🌐 **Live Application Link:** [https://prepflow-backend-8d7t.onrender.com/](https://prepflow-backend-8d7t.onrender.com/)

Yeh guide aapko step-by-step batayegi ki aap apne **PrepFlow AI** project ko live ya apne computer pe kaise run kar sakte hain.

---


## ⚡ Method 1: Sabse Aasan Tarika (1-Click Run)

Agar aap Windows use kar rahe hain, toh aap direct **`start.bat`** file se project chala sakte hain:

1. Apne project folder (`MyNotes`) me jayein.
2. **`start.bat`** file par double-click karein.
3. Terminal window open hogi aur server start ho jayega.
4. Browser me ye link open karein:
   👉 **http://127.0.0.1:8000** ya **http://localhost:8000**

---

## 🛠️ Method 2: Terminal / Command Prompt se Run Karna (Step-by-Step)

Agar aap manually Terminal ya Command Prompt / PowerShell se run karna chahte hain, toh neeche diye gaye steps follow karein:

### Step 1: Project Directory me jayein (Terminal Open Karein)
VS Code me ya CMD / PowerShell me project ke folder me jayein:
```powershell
cd c:\Users\user\MyNotes
```

---

### Step 2: Backend Folder me jayein
```powershell
cd backend
```

---

### Step 3: Python Virtual Environment Activate Karein (Optional par Recommended)

- **PowerShell me:**
  ```powershell
  .\venv\Scripts\Activate.ps1
  ```
  *(Agar execution policy error aaye toh: `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` chalayein)*

- **Command Prompt (CMD) me:**
  ```cmd
  venv\Scripts\activate.bat
  ```

---

### Step 4: Dependencies Install Karein (Pehli baar run karte waqt)
Agar dependencies pehle se installed nahi hain, toh run karein:
```powershell
pip install -r requirements.txt
```

---

### Step 5: Environment Variables Setup Karein (.env)
`backend` folder ke andar ek `.env` file hona chahiye. Agar nahi hai, toh `.env.example` ko copy karke `.env` banayein:

```powershell
# Windows CMD / PowerShell me copy karein:
copy .env.example .env
```

`.env` file me apni API Keys dal sakte hain (Optional par AI features ke liye zaroori):
```env
GROQ_API_KEY=gsk_your_groq_api_key_here
GROQ_MODEL=llama-3.3-70b-versatile
JWT_SECRET=prepflow-ai-super-secret-key-2026
```
*(Free Groq API key lene ke liye: [console.groq.com](https://console.groq.com))*

---

### Step 6: Server Start Karein
Ab FastAPI backend server ko start karein:

```powershell
python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
```

Server start hone ke baad aapko console me message dikhega:
`Application startup complete.`

---

## 🌐 URLs & Access Links

Server run hone ke baad apne browser me open karein:

| Page / Feature | URL |
|---|---|
| 🏠 **Main App (Landing)** | [http://127.0.0.1:8000](http://127.0.0.1:8000) |
| 📊 **User Dashboard** | [http://127.0.0.1:8000/dashboard.html](http://127.0.0.1:8000/dashboard.html) |
| 📖 **Interactive Learning Hub** | [http://127.0.0.1:8000/learn.html](http://127.0.0.1:8000/learn.html) |
| ⚙️ **Admin Dashboard** | [http://127.0.0.1:8000/admin/dashboard.html](http://127.0.0.1:8000/admin/dashboard.html) |
| 📑 **Backend API Documentation (Swagger)** | [http://127.0.0.1:8000/api/docs](http://127.0.0.1:8000/api/docs) |

---

## 🔑 Demo Login Credentials

App me login karne ke liye ye pre-configured accounts use kar sakte hain:

### 👤 Regular User Account:
- **Email:** `user@prepflow.ai`
- **Password:** `user123`

### 👑 Admin Account:
- **Email:** `admin@prepflow.ai`
- **Password:** `admin123`

---

## 🛑 Server Stop Kaise Karein?
Jab aapko server band karna ho:
- Terminal window me jayein aur **`Ctrl + C`** press karein.

---

## ❓ Common Issues & Solutions (Troubleshooting)

### 1. `Port 8000 already in use` error:
- Kisi dusre port par run karein:
  ```powershell
  python -m uvicorn app.main:app --host 127.0.0.1 --port 8080 --reload
  ```
  Aur browser me `http://127.0.0.1:8080` open karein.

### 2. `python` command recognize nahi ho rahi:
- Check karein ki Python aapke system PATH me added hai, ya `py` command use karein:
  ```powershell
  py -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
  ```

### 3. Database reset ya fresh start karna ho:
- `backend/prepflow.db` file ko delete kar dein aur server dubara start karein. Server start hote hi fresh database aur seed data create ho jayega.
