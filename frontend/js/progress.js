// PrepFlow AI - Analytics & Revision Controller

document.addEventListener('DOMContentLoaded', async () => {
    requireAuth();
    renderNavProfile();
    
    const user = getCurrentUser();
    if (document.getElementById('analyticsOverallProgress')) {
        await loadAnalyticsPage(user.id);
    }
    if (document.getElementById('revisionModeList')) {
        await loadRevisionMode(user.id);
    }
});

async function loadAnalyticsPage(userId) {
    try {
        const data = await apiFetch(`/progress/dashboard/${userId}`);
        
        document.getElementById('analyticsOverallProgress').innerText = `${data.overall_progress_percentage}%`;
        document.getElementById('analyticsSolvedCount').innerText = data.solved_count;
        document.getElementById('analyticsAttemptedCount').innerText = data.attempted_count;
        document.getElementById('analyticsRevisionCount').innerText = data.revision_count;
        
        const catProgressList = document.getElementById('analyticsCategoryBreakdown');
        if (catProgressList) {
            catProgressList.innerHTML = data.category_progress.map(c => `
                <div style="margin-bottom:1.25rem;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem; font-weight:600;">
                        <span>${c.name}</span>
                        <span>${c.percentage}%</span>
                    </div>
                    <div class="progress-bar-bg">
                        <div class="progress-bar-fill" style="width:${c.percentage}%;"></div>
                    </div>
                </div>
            `).join('');
        }
    } catch (err) {
        console.error("Analytics load failed:", err);
    }
}

async function loadRevisionMode(userId) {
    try {
        const bookmarks = await apiFetch(`/progress/bookmarks/${userId}`);
        const revisions = await apiFetch(`/progress/revisions/${userId}`);
        
        const revContainer = document.getElementById('revisionModeList');
        if (!revContainer) return;
        
        if (bookmarks.length === 0 && revisions.length === 0) {
            revContainer.innerHTML = `<p style="color:var(--text-muted);">No bookmarked or flagged topics in your revision queue!</p>`;
            return;
        }
        
        let html = '<h3 style="font-size:1.2rem; font-weight:700; margin-bottom:1rem;">📌 Bookmarked & Weak Topics</h3>';
        
        bookmarks.forEach(b => {
            html += `
                <div class="card" style="margin-bottom:1rem; padding:1.25rem;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <div>
                            <span class="badge badge-medium">★ Bookmarked</span>
                            <h4 style="font-size:1.1rem; font-weight:700; margin-top:0.3rem;">${b.topic_title}</h4>
                            <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:0.2rem;">${b.subject_name}</p>
                        </div>
                        <a href="/learn.html?topic=${b.topic_slug}" class="btn btn-sm btn-primary">Revise Topic →</a>
                    </div>
                </div>
            `;
        });
        
        revisions.forEach(r => {
            html += `
                <div class="card" style="margin-bottom:1rem; padding:1.25rem; border-left:4px solid var(--accent-amber);">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <div>
                            <span class="badge badge-hard">⚠️ ${r.reason}</span>
                            <h4 style="font-size:1.1rem; font-weight:700; margin-top:0.3rem;">${r.topic_title}</h4>
                            <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:0.2rem;">${r.subject_name}</p>
                        </div>
                        <a href="/learn.html?topic=${r.topic_slug}" class="btn btn-sm btn-primary">Revise Topic →</a>
                    </div>
                </div>
            `;
        });
        
        revContainer.innerHTML = html;
    } catch (err) {
        console.error("Revision mode load failed:", err);
    }
}
