// PrepFlow AI - Dynamic Analytics & Dashboard Controller

document.addEventListener('DOMContentLoaded', async () => {
    requireAuth();
    renderNavProfile();
    
    const user = getCurrentUser();
    document.getElementById('userNameWelcome').innerText = user ? user.name : 'Learner';
    
    await loadDashboardData(user.id);
});

async function loadDashboardData(userId) {
    try {
        // 1. Fetch user topic statuses and bookmarks
        let completedTopicIds = new Set();
        let bookmarkedTopicIds = new Set();

        try {
            const userTopicsData = await apiFetch(`/progress/user-topics/${userId}`);
            if (userTopicsData) {
                completedTopicIds = new Set(userTopicsData.completed_topic_ids || []);
                bookmarkedTopicIds = new Set(userTopicsData.bookmarked_topic_ids || []);
            }
        } catch (e) {
            console.warn("Could not fetch user topics, checking local cache:", e);
            const cachedDone = JSON.parse(localStorage.getItem(`prepflow_done_${userId}`) || '[]');
            const cachedBook = JSON.parse(localStorage.getItem(`prepflow_book_${userId}`) || '[]');
            completedTopicIds = new Set(cachedDone);
            bookmarkedTopicIds = new Set(cachedBook);
        }

        // 2. Fetch server dashboard metrics
        let dashboardData = {};
        try {
            dashboardData = await apiFetch(`/progress/dashboard/${userId}`);
        } catch (e) {
            dashboardData = {
                solved_count: 0,
                attempted_count: 0,
                revision_count: bookmarkedTopicIds.size,
                learning_streak_days: 5,
                weak_topics: []
            };
        }

        // 3. Compute accurate module analytics across all static subcategories
        let totalTopicsCount = 0;
        let completedTopicsCount = 0;
        let resumeTopicCandidate = null;
        const moduleAnalytics = [];

        if (window.PREPFLOW_TOPICS_DATA && window.PREPFLOW_TOPICS_DATA[0]) {
            const subcategories = window.PREPFLOW_TOPICS_DATA[0].subcategories || [];

            subcategories.forEach((sub, subIdx) => {
                const subTopics = sub.topics || [];
                const subTotal = subTopics.length;
                let subCompleted = 0;

                subTopics.forEach(t => {
                    totalTopicsCount++;
                    if (completedTopicIds.has(t.id) || completedTopicIds.has(t.slug)) {
                        subCompleted++;
                        completedTopicsCount++;
                    } else if (!resumeTopicCandidate) {
                        // First incomplete topic is our recommended resume point
                        resumeTopicCandidate = {
                            topic_title: t.title,
                            topic_slug: t.slug,
                            subject_name: sub.name,
                            difficulty: t.difficulty
                        };
                    }
                });

                const subPct = subTotal > 0 ? Math.round((subCompleted / subTotal) * 100) : 0;

                moduleAnalytics.push({
                    id: sub.id,
                    name: sub.name,
                    icon: sub.icon || '📁',
                    firstTopicSlug: subTopics[0] ? subTopics[0].slug : 'binary-search',
                    total: subTotal,
                    completed: subCompleted,
                    percentage: subPct
                });
            });
        }

        const overallPercentage = totalTopicsCount > 0 
            ? Math.round((completedTopicsCount / totalTopicsCount) * 100) 
            : 0;

        // 4. Update Overview Analytics Cards
        document.getElementById('overallProgressText').innerText = `${overallPercentage}%`;
        document.getElementById('overallProgressBar').style.width = `${overallPercentage}%`;
        
        document.getElementById('completedTopicsCountText').innerText = completedTopicsCount;
        document.getElementById('totalTopicsMetaText').innerText = `${completedTopicsCount} / ${totalTopicsCount} Topics Completed`;

        // Calculate solved LeetCode questions from localStorage set
        let solvedQuestionsCount = 0;
        try {
            const key = userId ? `prepflow_solved_q_${userId}` : 'prepflow_solved_q_guest';
            const solvedSet = JSON.parse(localStorage.getItem(key) || '[]');
            solvedQuestionsCount = Array.isArray(solvedSet) ? solvedSet.length : (dashboardData.solved_count || 0);
        } catch (e) {
            solvedQuestionsCount = dashboardData.solved_count || 0;
        }

        if (document.getElementById('solvedQuestionsCountText')) {
            document.getElementById('solvedQuestionsCountText').innerText = solvedQuestionsCount;
        }
        document.getElementById('revisionCountText').innerText = bookmarkedTopicIds.size || dashboardData.revision_count || 0;

        // 5. Render Resume Learning Hero Banner
        const resumeContainer = document.getElementById('resumeLearningContainer');
        if (resumeContainer) {
            const rt = resumeTopicCandidate || (window.PREPFLOW_TOPICS_DATA && window.PREPFLOW_TOPICS_DATA[0].subcategories[0].topics[0]);
            if (rt) {
                resumeContainer.innerHTML = `
                    <div class="card" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15)); border-color: var(--accent-blue);">
                        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1.25rem;">
                            <div style="min-width:0; flex:1;">
                                <span style="font-size:0.78rem; font-weight:800; color:var(--accent-blue); text-transform:uppercase; letter-spacing:0.05em;">Continue Learning Roadmap</span>
                                <h3 style="font-size:clamp(1.15rem, 3.5vw, 1.45rem); font-weight:800; margin:0.3rem 0; word-break:break-word;">${rt.topic_title || rt.title}</h3>
                                <p style="font-size:0.88rem; color:var(--text-secondary); word-break:break-word;">${rt.subject_name || 'DSA Core'} • Recommended Next Step</p>
                            </div>
                            <a href="/learn.html?topic=${rt.topic_slug || rt.slug}" class="btn btn-primary" style="flex-shrink:0;">Resume Lesson →</a>
                        </div>
                    </div>
                `;
            }
        }

        // 6. Render Module-by-Module Progress Cards (All 17 Modules)
        const catGrid = document.getElementById('categoryProgressGrid');
        if (catGrid) {
            catGrid.innerHTML = moduleAnalytics.map(m => `
                <div class="card" onclick="window.location.href='/learn.html?topic=${m.firstTopicSlug}'" style="cursor:pointer; transition:transform 0.2s, border-color 0.2s;">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem; gap:0.5rem;">
                        <h4 style="font-size:0.95rem; font-weight:700; color:var(--text-primary); display:flex; align-items:center; gap:0.4rem;">
                            <span>${m.icon}</span>
                            <span>${m.name}</span>
                        </h4>
                        <span class="badge ${m.percentage === 100 ? 'badge-easy' : (m.percentage > 0 ? 'badge-medium' : 'badge-secondary')}">
                            ${m.percentage}%
                        </span>
                    </div>
                    <p style="font-size:0.82rem; color:var(--text-secondary); margin-bottom:0.85rem;">
                        ${m.completed} of ${m.total} topics completed
                    </p>
                    <div class="progress-bar-bg">
                        <div class="progress-bar-fill" style="width: ${m.percentage}%;"></div>
                    </div>
                </div>
            `).join('');
        }

        // 7. Render Bookmarked Topics List
        const bookmarkedContainer = document.getElementById('weakTopicsList');
        if (bookmarkedContainer) {
            let bookmarkedTopicIds = new Set();
            
            // Check localStorage cache first
            try {
                const cachedBook = JSON.parse(localStorage.getItem(`prepflow_book_${userId}`) || '[]');
                if (Array.isArray(cachedBook)) {
                    cachedBook.forEach(id => bookmarkedTopicIds.add(id));
                }
            } catch (e) {}

            // Fetch from backend API
            try {
                const apiBookmarks = await apiFetch(`/progress/bookmarks/${userId}`);
                if (Array.isArray(apiBookmarks)) {
                    apiBookmarks.forEach(b => {
                        if (b.topic_id) bookmarkedTopicIds.add(b.topic_id);
                        if (b.topic_slug) bookmarkedTopicIds.add(b.topic_slug);
                    });
                }
            } catch (e) {
                console.warn("Could not fetch API bookmarks:", e);
            }

            // Resolve bookmarked topic details from PREPFLOW_TOPICS_DATA
            const resolvedBookmarks = [];
            if (window.PREPFLOW_TOPICS_DATA && window.PREPFLOW_TOPICS_DATA[0]) {
                const subcategories = window.PREPFLOW_TOPICS_DATA[0].subcategories || [];
                subcategories.forEach(sub => {
                    (sub.topics || []).forEach(t => {
                        if (bookmarkedTopicIds.has(t.id) || bookmarkedTopicIds.has(t.slug)) {
                            resolvedBookmarks.push({
                                title: t.title,
                                slug: t.slug,
                                subjectName: sub.name,
                                difficulty: t.difficulty || 'Medium'
                            });
                        }
                    });
                });
            }

            // Update Overview Card 4 Count
            if (document.getElementById('revisionCountText')) {
                document.getElementById('revisionCountText').innerText = resolvedBookmarks.length;
            }

            if (resolvedBookmarks.length === 0) {
                bookmarkedContainer.innerHTML = `
                    <div style="text-align:center; padding:1.5rem 1rem; color:var(--text-muted);">
                        <p style="font-size:0.92rem; margin-bottom:0.5rem;">No bookmarked topics yet.</p>
                        <p style="font-size:0.8rem; color:var(--text-secondary);">Click <strong>"☆ Bookmark"</strong> in any lesson to add it to your quick review list here!</p>
                    </div>
                `;
            } else {
                bookmarkedContainer.innerHTML = resolvedBookmarks.map(b => `
                    <div style="display:flex; justify-content:space-between; align-items:center; padding:0.75rem 0; border-bottom:1px solid var(--border-color); flex-wrap:wrap; gap:0.5rem;">
                        <div style="display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
                            <span class="badge ${b.difficulty === 'Easy' ? 'badge-easy' : (b.difficulty === 'Hard' ? 'badge-hard' : 'badge-medium')}" style="font-size:0.72rem;">
                                ${b.difficulty}
                            </span>
                            <strong style="font-size:0.92rem; color:var(--text-primary);">${b.title}</strong>
                            <span style="font-size:0.78rem; color:var(--text-muted);">(${b.subjectName})</span>
                        </div>
                        <a href="/learn.html?topic=${b.slug}" class="btn btn-sm btn-outline">Study Lesson →</a>
                    </div>
                `).join('');
            }
        }
    } catch (err) {
        console.error("Dashboard load failed:", err);
    }
}
