// PrepFlow AI - Behavioral Answer & STAR Feedback Controller

document.addEventListener('DOMContentLoaded', () => {
    requireAuth();
    renderNavProfile();
});

async function submitBehavioralForFeedback() {
    const questionTitle = document.getElementById('behavioralQuestionSelect')?.value || 'Tell me about a technical challenge';
    const answerText = document.getElementById('behavioralAnswerText')?.value.trim();
    
    if (!answerText) {
        alert("Please write your answer before submitting for AI analysis.");
        return;
    }
    
    const feedbackBox = document.getElementById('behavioralFeedbackContainer');
    if (feedbackBox) {
        feedbackBox.style.display = 'block';
        feedbackBox.innerHTML = `<em>PrepFlow AI is analyzing your response for STAR structure, clarity, and metrics...</em>`;
    }
    
    const user = getCurrentUser();
    
    try {
        const feedback = await apiFetch('/ai/behavioral/feedback', {
            method: 'POST',
            body: JSON.stringify({
                user_id: user ? user.id : 'demo-user',
                question_title: questionTitle,
                answer: answerText
            })
        });
        
        feedbackBox.innerHTML = `
            <div class="card" style="border-left:4px solid var(--accent-purple); background:rgba(139,92,246,0.08);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                    <h3 style="font-size:1.2rem; font-weight:800; color:var(--accent-purple);">AI Feedback & STAR Analysis</h3>
                    <span class="badge badge-easy" style="font-size:0.9rem; padding:0.4rem 0.8rem;">Score: ${feedback.overall_score}/100</span>
                </div>
                
                <div style="margin-bottom:1rem;">
                    <strong style="font-size:0.95rem;">Rating:</strong> ${feedback.structure_rating} (Clarity: ${feedback.clarity})
                </div>
                
                <div style="margin-bottom:1rem;">
                    <strong style="font-size:0.95rem;">STAR Framework Alignment:</strong>
                    <ul style="margin-left:1.25rem; margin-top:0.4rem; font-size:0.9rem; color:var(--text-secondary);">
                        <li><strong>S (Situation):</strong> ${feedback.star_breakdown.Situation}</li>
                        <li><strong>T (Task):</strong> ${feedback.star_breakdown.Task}</li>
                        <li><strong>A (Action):</strong> ${feedback.star_breakdown.Action}</li>
                        <li><strong>R (Result):</strong> ${feedback.star_breakdown.Result}</li>
                    </ul>
                </div>
                
                <div>
                    <strong style="font-size:0.95rem;">Key Improvements:</strong>
                    <ul style="margin-left:1.25rem; margin-top:0.4rem; font-size:0.9rem; color:var(--accent-amber);">
                        ${feedback.improvement_suggestions.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    } catch (err) {
        console.error("Behavioral evaluation failed:", err);
    }
}
