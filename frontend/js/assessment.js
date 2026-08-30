// PrepFlow AI - Assessment & Quiz Engine

let activeAssessment = null;
let userAnswers = {};
let timerInterval = null;

document.addEventListener('DOMContentLoaded', async () => {
    requireAuth();
    renderNavProfile();
    
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    if (id) {
        await startAssessment(id);
    } else {
        await loadAssessmentList();
    }
});

async function loadAssessmentList() {
    try {
        const assessments = await apiFetch('/assessments');
        const container = document.getElementById('assessmentListContainer');
        if (!container) return;
        
        container.innerHTML = assessments.map(a => `
            <div class="card" style="margin-bottom:1.25rem;">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
                    <div>
                        <span class="badge badge-medium">⏱️ ${a.time_limit_minutes} Mins</span>
                        <span class="badge badge-easy" style="margin-left:0.4rem;">Pass: ${a.pass_mark_percentage}%</span>
                        <h3 style="font-size:1.2rem; font-weight:700; margin-top:0.4rem;">${a.title}</h3>
                        <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:0.2rem;">${a.description || ''}</p>
                    </div>
                    <button onclick="window.location.href='/assessment.html?id=${a.id}'" class="btn btn-primary">Start Assessment →</button>
                </div>
            </div>
        `).join('');
    } catch (err) {
        console.error("Failed to load assessments:", err);
    }
}

async function startAssessment(id) {
    try {
        activeAssessment = await apiFetch(`/assessments/${id}`);
        userAnswers = {};
        
        document.getElementById('assessmentListSection').style.display = 'none';
        document.getElementById('assessmentRunnerSection').style.display = 'block';
        
        document.getElementById('quizTitle').innerText = activeAssessment.title;
        document.getElementById('quizTimeText').innerText = `${activeAssessment.time_limit_minutes}:00`;
        
        // Start timer
        startQuizTimer(activeAssessment.time_limit_minutes * 60);
        
        // Render Questions
        const qContainer = document.getElementById('quizQuestionsContainer');
        qContainer.innerHTML = activeAssessment.questions.map((q, idx) => `
            <div class="card" style="margin-bottom:1.5rem; padding:1.5rem;">
                <div style="font-size:0.85rem; font-weight:700; color:var(--accent-blue); margin-bottom:0.4rem;">Question ${idx + 1} of ${activeAssessment.questions.length}</div>
                <h4 style="font-size:1.05rem; font-weight:700; margin-bottom:1rem;">${q.question}</h4>
                
                <div style="display:flex; flex-direction:column; gap:0.6rem;">
                    ${q.options.map(opt => `
                        <label style="display:flex; align-items:center; gap:0.75rem; padding:0.75rem 1rem; border:1px solid var(--border-color); border-radius:var(--radius-md); cursor:pointer; background:var(--bg-primary);">
                            <input type="radio" name="question_${q.id}" value="${opt}" onchange="recordAnswer('${q.id}', '${opt.replace(/'/g, "\\'")}')">
                            <span style="font-size:0.9rem;">${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `).join('');
    } catch (err) {
        console.error("Failed to start assessment:", err);
    }
}

function recordAnswer(questionId, value) {
    userAnswers[questionId] = value;
}

function startQuizTimer(seconds) {
    let remaining = seconds;
    clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        remaining--;
        const mins = Math.floor(remaining / 60);
        const secs = remaining % 60;
        document.getElementById('quizTimeText').innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        
        if (remaining <= 0) {
            clearInterval(timerInterval);
            submitQuizAnswers();
        }
    }, 1000);
}

async function submitQuizAnswers() {
    clearInterval(timerInterval);
    const user = getCurrentUser();
    
    try {
        const result = await apiFetch('/assessments/submit', {
            method: 'POST',
            body: JSON.stringify({
                user_id: user.id,
                assessment_id: activeAssessment.id,
                answers: userAnswers
            })
        });
        
        document.getElementById('assessmentRunnerSection').style.display = 'none';
        document.getElementById('assessmentResultsSection').style.display = 'block';
        
        document.getElementById('resultScoreText').innerText = `${result.score} / ${result.total_questions}`;
        document.getElementById('resultPercentageText').innerText = `${result.percentage}%`;
        
        const badge = document.getElementById('resultPassBadge');
        if (result.passed) {
            badge.className = 'badge badge-solved';
            badge.innerText = 'PASSED ✅';
        } else {
            badge.className = 'badge badge-hard';
            badge.innerText = 'FAILED - NEEDS REVISION ⚠️';
        }
        
        // Explanations
        const expContainer = document.getElementById('resultExplanationsContainer');
        expContainer.innerHTML = Object.values(result.explanations).map(exp => `
            <div class="card" style="margin-bottom:1rem; border-left:4px solid ${exp.is_correct ? 'var(--accent-emerald)' : 'var(--accent-rose)'};">
                <div style="font-weight:700; margin-bottom:0.4rem;">${exp.question}</div>
                <div style="font-size:0.85rem; color:${exp.is_correct ? 'var(--accent-emerald)' : 'var(--accent-rose)'}; font-weight:600;">
                    Your Answer: ${exp.user_answer} ${exp.is_correct ? '✓ Correct' : `❌ (Correct: ${exp.correct_answer})`}
                </div>
                <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:0.4rem; background:rgba(0,0,0,0.2); padding:0.6rem; border-radius:var(--radius-sm);">
                    💡 <strong>Explanation:</strong> ${exp.explanation || 'Review topic notes for detailed concept breakdown.'}
                </div>
            </div>
        `).join('');
    } catch (err) {
        console.error("Assessment submission failed:", err);
    }
}
