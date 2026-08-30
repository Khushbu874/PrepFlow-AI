// PrepFlow AI - Mock Interview Simulator Controller

let interviewState = {
    active: false,
    type: 'dsa',
    difficulty: 'Intermediate',
    history: []
};

document.addEventListener('DOMContentLoaded', () => {
    requireAuth();
    renderNavProfile();
});

async function startMockInterview() {
    const type = document.getElementById('mockTypeSelect')?.value || 'dsa';
    const difficulty = document.getElementById('mockDifficultySelect')?.value || 'Intermediate';
    
    interviewState.active = true;
    interviewState.type = type;
    interviewState.difficulty = difficulty;
    interviewState.history = [];
    
    document.getElementById('mockSetupCard').style.display = 'none';
    document.getElementById('mockChatCard').style.display = 'block';
    
    const user = getCurrentUser();
    
    // Initial request to get first interviewer question
    const response = await apiFetch('/ai/mock-interview/step', {
        method: 'POST',
        body: JSON.stringify({
            user_id: user.id,
            interview_type: type,
            difficulty: difficulty,
            history: [],
            user_message: "START"
        })
    });
    
    const chatContainer = document.getElementById('mockChatContainer');
    chatContainer.innerHTML = `
        <div class="chat-bubble chat-bubble-ai" style="max-width:95%;">
            <strong>🤖 AI Interviewer (${type.toUpperCase()} - ${difficulty}):</strong><br><br>
            ${response.interviewer_response}
        </div>
    `;
    
    interviewState.history.push({ role: "interviewer", content: response.interviewer_response });
}

async function sendMockAnswer() {
    const inputEl = document.getElementById('mockUserInput');
    const answer = inputEl ? inputEl.value.trim() : '';
    if (!answer) return;
    
    inputEl.value = '';
    
    const chatContainer = document.getElementById('mockChatContainer');
    
    // Append User Answer
    const userDiv = document.createElement('div');
    userDiv.className = 'chat-bubble chat-bubble-user';
    userDiv.style.maxWidth = '95%';
    userDiv.innerText = answer;
    chatContainer.appendChild(userDiv);
    
    interviewState.history.push({ role: "user", content: answer });
    
    // Append Thinking bubble
    const thinkingDiv = document.createElement('div');
    thinkingDiv.className = 'chat-bubble chat-bubble-ai';
    thinkingDiv.style.maxWidth = '95%';
    thinkingDiv.innerHTML = `<em>Evaluating response and preparing follow-up...</em>`;
    chatContainer.appendChild(thinkingDiv);
    
    chatContainer.scrollTop = chatContainer.scrollHeight;
    const user = getCurrentUser();
    
    try {
        const response = await apiFetch('/ai/mock-interview/step', {
            method: 'POST',
            body: JSON.stringify({
                user_id: user.id,
                interview_type: interviewState.type,
                difficulty: interviewState.difficulty,
                history: interviewState.history,
                user_message: answer
            })
        });
        
        if (response.status === 'completed') {
            renderMockReport(response);
            return;
        }
        
        thinkingDiv.innerHTML = `
            <strong>🤖 AI Interviewer:</strong><br><br>
            ${response.interviewer_response}
        `;
        interviewState.history.push({ role: "interviewer", content: response.interviewer_response });
        
        // Speak question if voice available
        voiceEngine.speak(response.interviewer_response);
        
    } catch (err) {
        thinkingDiv.innerHTML = `<span style="color:var(--accent-rose);">Error communicating with interviewer.</span>`;
    }
    
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

async function finishMockInterviewEarly() {
    const user = getCurrentUser();
    const response = await apiFetch('/ai/mock-interview/step', {
        method: 'POST',
        body: JSON.stringify({
            user_id: user.id,
            interview_type: interviewState.type,
            difficulty: interviewState.difficulty,
            history: interviewState.history,
            user_message: "end interview"
        })
    });
    renderMockReport(response);
}

function renderMockReport(report) {
    document.getElementById('mockChatCard').style.display = 'none';
    const reportCard = document.getElementById('mockReportCard');
    reportCard.style.display = 'block';
    
    reportCard.innerHTML = `
        <div class="card" style="border-left:4px solid var(--accent-purple);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; margin-bottom:1.5rem;">
                <div>
                    <span class="badge badge-solved" style="font-size:0.9rem;">${report.technical_rating}</span>
                    <h2 style="font-size:1.8rem; font-weight:800; margin-top:0.4rem;">Mock Interview Performance Report</h2>
                </div>
                <div style="font-size:2rem; font-weight:800; color:var(--accent-purple);">
                    ${report.overall_score} / 100
                </div>
            </div>
            
            <p style="font-size:1rem; color:var(--text-secondary); margin-bottom:1.5rem;">${report.summary}</p>
            
            <div class="grid-2" style="margin-bottom:1.5rem;">
                <div>
                    <strong style="color:var(--accent-emerald);">✅ Strong Performance Areas:</strong>
                    <ul style="margin-left:1.25rem; margin-top:0.5rem; color:var(--text-secondary);">
                        ${report.strong_areas.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <strong style="color:var(--accent-rose);">⚠️ Areas Needing Improvement:</strong>
                    <ul style="margin-left:1.25rem; margin-top:0.5rem; color:var(--text-secondary);">
                        ${report.weak_areas.map(w => `<li>${w}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div style="margin-bottom:1.5rem;">
                <strong>📚 Recommended Topics to Revise:</strong>
                <div style="display:flex; gap:0.5rem; margin-top:0.5rem; flex-wrap:wrap;">
                    ${report.recommended_revision.map(r => `<span class="badge badge-medium">${r}</span>`).join('')}
                </div>
            </div>
            
            <button onclick="window.location.reload()" class="btn btn-primary">Start Another Mock Interview</button>
        </div>
    `;
}
