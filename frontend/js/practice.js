// PrepFlow AI - Practice Portal & System Design Exercises Controller

document.addEventListener('DOMContentLoaded', async () => {
    requireAuth();
    renderNavProfile();
    await loadPracticeQuestions();
});

async function loadPracticeQuestions() {
    const user = getCurrentUser();
    const categorySlug = document.getElementById('practiceCategoryFilter')?.value || '';
    const difficulty = document.getElementById('practiceDifficultyFilter')?.value || '';
    
    try {
        const questions = await apiFetch(`/practice/questions?category_slug=${categorySlug}&difficulty=${difficulty}&user_id=${user ? user.id : ''}`);
        const container = document.getElementById('practiceQuestionsList');
        if (!container) return;
        
        container.innerHTML = questions.map(q => `
            <div class="card" style="margin-bottom:1rem; padding:1.25rem 1.5rem;">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
                    <div>
                        <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.4rem;">
                            <span class="badge ${q.difficulty === 'Easy' ? 'badge-easy' : (q.difficulty === 'Hard' ? 'badge-hard' : 'badge-medium')}">${q.difficulty}</span>
                            <span class="badge badge-medium" style="background:rgba(139,92,246,0.15); color:var(--accent-purple);">${q.category_slug.toUpperCase()}</span>
                            ${q.topic_title ? `<span style="font-size:0.8rem; color:var(--text-muted);">Topic: ${q.topic_title}</span>` : ''}
                        </div>
                        <h4 style="font-size:1.1rem; font-weight:700;">${q.title}</h4>
                        <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:0.25rem;">${q.description || ''}</p>
                    </div>
                    
                    <div style="display:flex; align-items:center; gap:0.75rem;">
                        <select onchange="updateQuestionStatus('${q.id}', this.value)" class="speed-select" style="font-weight:600; padding:0.4rem 0.6rem;">
                            <option value="not_started" ${q.user_status === 'not_started' ? 'selected' : ''}>Not Started</option>
                            <option value="attempted" ${q.user_status === 'attempted' ? 'selected' : ''}>Attempted</option>
                            <option value="solved" ${q.user_status === 'solved' ? 'selected' : ''}>Solved ✅</option>
                            <option value="revision" ${q.user_status === 'revision' ? 'selected' : ''}>Need Revision ⚠️</option>
                        </select>
                        
                        ${q.hints && q.hints.length > 0 ? `
                            <button onclick="toggleSystemDesignHints('${q.id}')" class="btn btn-sm btn-secondary">Hints (${q.hints.length})</button>
                        ` : ''}
                        
                        ${q.external_url ? `
                            <a href="${q.external_url}" target="_blank" class="btn btn-sm btn-primary">Solve on ${q.platform} ↗</a>
                        ` : ''}
                    </div>
                </div>
                
                ${q.hints && q.hints.length > 0 ? `
                    <div id="hints-${q.id}" style="display:none; margin-top:1rem; padding-top:1rem; border-top:1px dashed var(--border-color); background:rgba(0,0,0,0.2); padding:1rem; border-radius:var(--radius-md);">
                        <strong style="color:var(--accent-amber); font-size:0.9rem;">💡 System Design Hints:</strong>
                        <ul style="margin-left:1.25rem; margin-top:0.5rem; font-size:0.85rem; color:var(--text-secondary);">
                            ${q.hints.map(h => `<li style="margin-bottom:0.25rem;">${h}</li>`).join('')}
                        </ul>
                        ${q.solution_reference ? `
                            <div style="margin-top:0.75rem; font-size:0.85rem; color:var(--accent-blue);">
                                <strong>Reference Architecture:</strong> ${q.solution_reference}
                            </div>
                        ` : ''}
                    </div>
                ` : ''}
            </div>
        `).join('');
    } catch (err) {
        console.error("Practice questions load failed:", err);
    }
}

function toggleSystemDesignHints(id) {
    const hintDiv = document.getElementById(`hints-${id}`);
    if (hintDiv) {
        hintDiv.style.display = hintDiv.style.display === 'none' ? 'block' : 'none';
    }
}
