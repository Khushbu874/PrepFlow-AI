@echo off
echo.
echo ================================================
echo     PrepFlow AI - Starting Application Server
echo ================================================
echo.
cd /d "%~dp0backend"
if exist "venv\Scripts\activate.bat" (
    call "venv\Scripts\activate.bat"
)
echo [1/2] Initializing database...
python -c "from app.database import init_db; init_db()" 2>nul
echo [2/2] Launching FastAPI backend...
echo.
echo     API Docs:  http://127.0.0.1:8000/api/docs
echo     App URL:   http://127.0.0.1:8000
echo.
echo Press CTRL+C to stop the server.
echo ================================================
echo.
python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload

