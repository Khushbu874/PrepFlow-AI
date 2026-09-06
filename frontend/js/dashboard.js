// PrepFlow AI - Dynamic Analytics & Categorized Dashboard Controller

let cachedCategoriesData = [];
let cachedBookmarkedTopics = [];
let activeCategoryFilter = 'all';
let activeBookmarkFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
    requireAuth();
    renderNavProfile();

    const user = getCurrentUser();
    document.getElementById('userNameWelcome').innerText = user ? user.name : 'Learner';

    // Show initial loading skeletons
    const moduleContainer = document.getElementById('moduleAnalyticsContainer');
    if (moduleContainer) {
        moduleContainer.innerHTML = `<div style="padding:2.5rem 1rem; text-align:center; color:var(--text-muted); font-size:0.92rem; display:flex; align-items:center; justify-content:center; gap:0.6rem;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite;"><path d="M21.5 2v6h-6M2.13 15.57a10 10 0 1 0 0-10.57L2.1 5"/><path d="M2.5 22v-6h6"/></svg><span>Loading Categorized Curriculum Modules...</span></div>`;
    }
    const tracksContainer = document.getElementById('categoryTracksContainer');
    if (tracksContainer) {
        tracksContainer.innerHTML = `<div style="grid-column: 1/-1; padding:1.5rem; text-align:center; color:var(--text-muted); font-size:0.9rem; display:flex; align-items:center; justify-content:center; gap:0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite;"><path d="M21.5 2v6h-6M2.13 15.57a10 10 0 1 0 0-10.57L2.1 5"/><path d="M2.5 22v-6h6"/></svg><span>Loading Curriculum Tracks...</span></div>`;
    }
    const weakList = document.getElementById('weakTopicsList');
    if (weakList) {
        weakList.innerHTML = `<div style="padding:1.5rem; text-align:center; color:var(--text-muted); font-size:0.9rem; display:flex; align-items:center; justify-content:center; gap:0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite;"><path d="M21.5 2v6h-6M2.13 15.57a10 10 0 1 0 0-10.57L2.1 5"/><path d="M2.5 22v-6h6"/></svg><span>Syncing Bookmarked Topics from Supabase DB...</span></div>`;
    }

    if (user && user.id) {
        loadDashboardData(user.id);
    }
});

// Auto sync dashboard from Supabase DB whenever user returns to this tab
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        const user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
        if (user && user.id) {
            loadDashboardData(user.id);
        }
    }
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

        // 3. Compute accurate metrics segregated by Category (Track)
        let totalTopicsCount = 0;
        let completedTopicsCount = 0;
        let primaryResumeCandidate = null;

        const categoriesAnalysis = [];

        if (window.PREPFLOW_TOPICS_DATA && Array.isArray(window.PREPFLOW_TOPICS_DATA)) {
            window.PREPFLOW_TOPICS_DATA.forEach(cat => {
                const subcategories = cat.subcategories || [];
                let catTotalTopics = 0;
                let catCompletedTopics = 0;
                let catResumeCandidate = null;
                const catModules = [];

                subcategories.forEach((sub, subIdx) => {
                    const subTopics = sub.topics || [];
                    const subTotal = subTopics.length;
                    let subCompleted = 0;

                    subTopics.forEach(t => {
                        totalTopicsCount++;
                        catTotalTopics++;
                        const isDone = completedTopicIds.has(t.id) || completedTopicIds.has(t.slug);
                        if (isDone) {
                            subCompleted++;
                            completedTopicsCount++;
                            catCompletedTopics++;
                        } else {
                            if (!primaryResumeCandidate) {
                                primaryResumeCandidate = {
                                    categoryId: cat.id,
                                    categoryName: cat.name,
                                    categoryIcon: cat.icon || '⚡',
                                    topic_title: t.title,
                                    topic_slug: t.slug,
                                    subject_name: sub.name,
                                    difficulty: t.difficulty
                                };
                            }
                            if (!catResumeCandidate) {
                                catResumeCandidate = {
                                    categoryId: cat.id,
                                    categoryName: cat.name,
                                    categoryIcon: cat.icon || '⚡',
                                    topic_title: t.title,
                                    topic_slug: t.slug,
                                    subject_name: sub.name,
                                    difficulty: t.difficulty
                                };
                            }
                        }
                    });

                    const subPct = subTotal > 0 ? Math.round((subCompleted / subTotal) * 100) : 0;

                    catModules.push({
                        id: sub.id,
                        name: sub.name,
                        icon: sub.icon || '📁',
                        stepIndex: subIdx + 1,
                        totalSteps: subcategories.length,
                        firstTopicSlug: subTopics[0] ? subTopics[0].slug : 'time-complexity',
                        total: subTotal,
                        completed: subCompleted,
                        percentage: subPct,
                        categoryId: cat.id,
                        categoryName: cat.name,
                        categoryIcon: cat.icon || '⚡',
                        topics: subTopics.map(t => ({
                            id: t.id,
                            title: t.title,
                            slug: t.slug,
                            difficulty: t.difficulty || 'Medium',
                            isCompleted: completedTopicIds.has(t.id) || completedTopicIds.has(t.slug)
                        }))
                    });
                });

                const catPercentage = catTotalTopics > 0
                    ? Math.round((catCompletedTopics / catTotalTopics) * 100)
                    : 0;

                // Fallback resume topic if all completed or default to first topic
                if (!catResumeCandidate && subcategories[0] && subcategories[0].topics[0]) {
                    const firstT = subcategories[0].topics[0];
                    catResumeCandidate = {
                        categoryId: cat.id,
                        categoryName: cat.name,
                        categoryIcon: cat.icon || '⚡',
                        topic_title: firstT.title,
                        topic_slug: firstT.slug,
                        subject_name: subcategories[0].name,
                        difficulty: firstT.difficulty
                    };
                }

                categoriesAnalysis.push({
                    id: cat.id,
                    name: cat.name,
                    icon: cat.icon || '⚡',
                    description: cat.description || '',
                    modulesCount: subcategories.length,
                    totalTopics: catTotalTopics,
                    completedTopics: catCompletedTopics,
                    percentage: catPercentage,
                    resumeTopic: catResumeCandidate,
                    modules: catModules
                });
            });
        }

        cachedCategoriesData = categoriesAnalysis;

        const overallPercentage = totalTopicsCount > 0
            ? Math.round((completedTopicsCount / totalTopicsCount) * 100)
            : 0;

        // 4. Update Overview Analytics Cards
        document.getElementById('overallProgressText').innerText = `${overallPercentage}%`;
        document.getElementById('overallProgressBar').style.width = `${overallPercentage}%`;

        document.getElementById('completedTopicsCountText').innerText = completedTopicsCount;
        document.getElementById('totalTopicsMetaText').innerText = `${completedTopicsCount} / ${totalTopicsCount} Topics Completed`;

        // Calculate solved LeetCode questions: Prioritize DB dashboardData first, fallback to localStorage
        let solvedQuestionsCount = 0;
        if (dashboardData && typeof dashboardData.solved_count === 'number' && dashboardData.solved_count > 0) {
            solvedQuestionsCount = dashboardData.solved_count;
        } else {
            try {
                const key = userId ? `prepflow_solved_q_${userId}` : 'prepflow_solved_q_guest';
                const solvedSet = JSON.parse(localStorage.getItem(key) || '[]');
                solvedQuestionsCount = Array.isArray(solvedSet) ? solvedSet.length : (dashboardData.solved_count || 0);
            } catch (e) {
                solvedQuestionsCount = dashboardData.solved_count || 0;
            }
        }

        if (document.getElementById('solvedQuestionsCountText')) {
            document.getElementById('solvedQuestionsCountText').innerText = solvedQuestionsCount;
        }

        // 5. Render Resume Learning Hero Banner with Multi-Track Resume options
        renderResumeLearningHero(primaryResumeCandidate, categoriesAnalysis);

        // 6. Render Curriculum Tracks Overview (3 Cards)
        renderCategoryTracksOverview(categoriesAnalysis);

        // 7. Render Categorized Module Sections (Respecting active filter)
        renderCategorizedModules(activeCategoryFilter);

        // 8. Resolve & Render Bookmarked Topics across ALL categories
        resolveAndRenderBookmarks(userId, bookmarkedTopicIds);

    } catch (err) {
        console.error("Dashboard load failed:", err);
    }
}

// -------------------------------------------------------------
// RENDER HERO RESUME LEARNING BANNER WITH MULTI-TRACK PILLS
// -------------------------------------------------------------
function renderResumeLearningHero(primaryCandidate, categories) {
    const resumeContainer = document.getElementById('resumeLearningContainer');
    if (!resumeContainer) return;

    const rt = primaryCandidate || (categories[0] && categories[0].resumeTopic);
    if (!rt) return;

    let catBadgeClass = 'category-badge-dsa';
    if (rt.categoryId === 'cat-cs-fundamentals') catBadgeClass = 'category-badge-cs';
    else if (rt.categoryId === 'cat-system-design') catBadgeClass = 'category-badge-sd';

    const quickPillsHtml = categories.map(c => {
        if (!c.resumeTopic) return '';
        let pillBadge = 'category-badge-dsa';
        if (c.id === 'cat-cs-fundamentals') pillBadge = 'category-badge-cs';
        else if (c.id === 'cat-system-design') pillBadge = 'category-badge-sd';

        return `
            <a href="/learn.html?topic=${c.resumeTopic.topic_slug}" class="resume-track-pill" title="Jump to next step in ${c.name}">
                <span>${c.icon}</span>
                <span><strong>${c.name.split(' ')[0]}:</strong> ${c.resumeTopic.topic_title}</span>
                <span style="font-size:0.7rem; color:var(--accent-blue);">→</span>
            </a>
        `;
    }).join('');

    resumeContainer.innerHTML = `
        <div class="card" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15)); border-color: var(--accent-blue);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1.25rem;">
                <div style="min-width:0; flex:1;">
                    <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.35rem; flex-wrap:wrap;">
                        <span class="category-badge-tag ${catBadgeClass}">
                            ${rt.categoryIcon} ${rt.categoryName}
                        </span>
                        <span style="font-size:0.75rem; font-weight:700; color:var(--accent-blue); text-transform:uppercase; letter-spacing:0.04em;">Recommended Next Step</span>
                    </div>
                    <h3 style="font-size:clamp(1.15rem, 3.5vw, 1.45rem); font-weight:800; margin:0.25rem 0; word-break:break-word;">
                        ${rt.topic_title}
                    </h3>
                    <p style="font-size:0.88rem; color:var(--text-secondary); word-break:break-word;">
                        ${rt.subject_name} • Difficulty: <strong style="color:var(--text-primary);">${rt.difficulty || 'Medium'}</strong>
                    </p>
                </div>
                <a href="/learn.html?topic=${rt.topic_slug}" class="btn btn-primary" style="flex-shrink:0;">
                    Resume Lesson →
                </a>
            </div>

            <!-- Quick Track Resumes -->
            <div style="margin-top:1rem; padding-top:0.85rem; border-top:1px solid rgba(255,255,255,0.08); display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
                <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700; text-transform:uppercase;">Quick Jump:</span>
                ${quickPillsHtml}
            </div>
        </div>
    `;
}

// -------------------------------------------------------------
// RENDER CURRICULUM TRACKS OVERVIEW (3 CARDS)
// -------------------------------------------------------------
function renderCategoryTracksOverview(categories) {
    const container = document.getElementById('categoryTracksContainer');
    if (!container) return;

    container.innerHTML = categories.map(c => {
        let trackClass = 'track-dsa';
        let barGradient = 'linear-gradient(90deg, #3b82f6, #8b5cf6)';
        let badgeStyle = 'badge-easy';

        if (c.id === 'cat-cs-fundamentals') {
            trackClass = 'track-cs';
            barGradient = 'linear-gradient(90deg, #10b981, #06b6d4)';
            badgeStyle = 'badge-medium';
        } else if (c.id === 'cat-system-design') {
            trackClass = 'track-system-design';
            barGradient = 'linear-gradient(90deg, #f59e0b, #f43f5e)';
            badgeStyle = 'badge-hard';
        }

        return `
            <div class="category-track-card ${trackClass}" onclick="switchCategoryFilter('${c.id}')" title="Filter to ${c.name} modules">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem; gap:0.5rem;">
                        <span style="font-size:1.8rem;">${c.icon}</span>
                        <span class="badge ${badgeStyle}">
                            ${c.percentage}% Mastered
                        </span>
                    </div>
                    <h4 style="font-size:1.1rem; font-weight:800; color:var(--text-primary); margin-bottom:0.35rem;">
                        ${c.name}
                    </h4>
                    <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.75rem; line-height:1.4; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">
                        ${c.description}
                    </p>
                </div>
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.45rem; font-size:0.78rem;">
                        <span style="color:var(--text-secondary); font-weight:600;">${c.completedTopics} of ${c.totalTopics} Topics (${c.modulesCount} Modules)</span>
                        <span style="font-weight:700; color:var(--accent-blue);">View Modules ↓</span>
                    </div>
                    <div class="progress-bar-bg">
                        <div class="progress-bar-fill" style="width: ${c.percentage}%; background: ${barGradient};"></div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// -------------------------------------------------------------
// RENDER CATEGORIZED MODULE SECTIONS (GROUPED BY TRACK)
// -------------------------------------------------------------
function renderCategorizedModules(filterKey) {
    const container = document.getElementById('moduleAnalyticsContainer');
    if (!container || !cachedCategoriesData || cachedCategoriesData.length === 0) return;

    const categoriesToRender = (filterKey === 'all')
        ? cachedCategoriesData
        : cachedCategoriesData.filter(c => c.id === filterKey);

    if (categoriesToRender.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:2rem; color:var(--text-muted);">No modules found for this track.</div>`;
        return;
    }

    container.innerHTML = categoriesToRender.map(cat => {
        let badgeClass = 'category-badge-dsa';
        let barGradient = 'linear-gradient(90deg, #3b82f6, #8b5cf6)';
        if (cat.id === 'cat-cs-fundamentals') {
            badgeClass = 'category-badge-cs';
            barGradient = 'linear-gradient(90deg, #10b981, #06b6d4)';
        } else if (cat.id === 'cat-system-design') {
            badgeClass = 'category-badge-sd';
            barGradient = 'linear-gradient(90deg, #f59e0b, #f43f5e)';
        }

        const firstTopicInTrack = cat.modules[0] ? cat.modules[0].firstTopicSlug : 'time-complexity';

        const modulesCardsHtml = cat.modules.map(m => {
            const allTopics = m.topics || [];
            const visibleTopics = allTopics.slice(0, 3);
            const remainingTopics = allTopics.slice(3);
            const hasMore = remainingTopics.length > 0;
            const topicsListId = `mod-topics-${cat.id}-${m.stepIndex}`;
            const toggleBtnId = `mod-toggle-${cat.id}-${m.stepIndex}`;

            const renderTopicItem = (t) => `
                <a href="/learn.html?topic=${t.slug}" 
                   class="module-topic-btn ${t.isCompleted ? 'completed' : ''}" 
                   onclick="event.stopPropagation();" 
                   title="Open topic in Learning Hub: ${t.title}">
                    <div style="display:flex; align-items:center; gap:0.4rem; overflow:hidden; text-overflow:ellipsis;">
                        <span style="font-size:0.75rem;">${t.isCompleted ? '✅' : '⚪'}</span>
                        <span class="topic-title-text" style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${t.title}</span>
                    </div>
                    <span class="badge ${t.difficulty === 'Easy' ? 'badge-easy' : (t.difficulty === 'Hard' ? 'badge-hard' : 'badge-medium')}" style="font-size:0.68rem; padding:0.1rem 0.4rem;">
                        ${t.difficulty}
                    </span>
                </a>
            `;

            return `
                <div class="card" onclick="window.location.href='/learn.html?topic=${m.firstTopicSlug}'" 
                     style="cursor:pointer; transition:transform 0.2s, border-color 0.2s; display:flex; flex-direction:column; justify-content:space-between; background:rgba(30, 41, 59, 0.7);">
                    <div>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem; gap:0.4rem; flex-wrap:wrap;">
                            <span class="module-seq-badge">Step ${m.stepIndex} of ${m.totalSteps}</span>
                            <span class="badge ${m.percentage === 100 ? 'badge-easy' : (m.percentage > 0 ? 'badge-medium' : 'badge-secondary')}" style="font-size:0.7rem;">
                                ${m.percentage}% Done
                            </span>
                        </div>
                        <h4 style="font-size:0.95rem; font-weight:700; color:var(--text-primary); display:flex; align-items:center; gap:0.45rem; margin-bottom:0.4rem; line-height:1.35;">
                            <span style="font-size:1.1rem; flex-shrink:0;">${m.icon}</span>
                            <span>${m.name}</span>
                        </h4>

                        <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.78rem; color:var(--text-secondary); margin-bottom:0.45rem;">
                            <span>${m.completed} of ${m.total} topics completed</span>
                            <span style="font-weight:600; color:var(--accent-blue); font-size:0.75rem;">Study Module →</span>
                        </div>
                        <div class="progress-bar-bg" style="margin-bottom:0.75rem;">
                            <div class="progress-bar-fill" style="width: ${m.percentage}%; background: ${barGradient};"></div>
                        </div>

                        <!-- Topics list inside module -->
                        <div class="module-topics-list" onclick="event.stopPropagation();">
                            <div style="font-size:0.72rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:0.25rem; display:flex; justify-content:space-between; align-items:center;">
                                <span>Topics in this Module (${allTopics.length}):</span>
                            </div>
                            ${visibleTopics.map(renderTopicItem).join('')}
                            ${hasMore ? `
                                <div id="${topicsListId}" style="display:none; flex-direction:column; gap:0.35rem; margin-top:0.35rem;">
                                    ${remainingTopics.map(renderTopicItem).join('')}
                                </div>
                                <button type="button" class="btn btn-sm btn-outline" id="${toggleBtnId}" 
                                        onclick="toggleModuleTopics(event, '${topicsListId}', '${toggleBtnId}', ${remainingTopics.length})" 
                                        style="font-size:0.72rem; padding:0.2rem 0.5rem; margin-top:0.35rem; align-self:flex-start;">
                                    + View ${remainingTopics.length} more topics ▼
                                </button>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="category-section" id="section-${cat.id}">
                <div class="category-section-header">
                    <div style="display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap;">
                        <span style="font-size:1.6rem;">${cat.icon}</span>
                        <div>
                            <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
                                <h3 style="font-size:1.25rem; font-weight:800; color:var(--text-primary); margin:0;">
                                    ${cat.name}
                                </h3>
                                <span class="category-badge-tag ${badgeClass}">
                                    ${cat.modulesCount} Modules
                                </span>
                            </div>
                            <p style="font-size:0.82rem; color:var(--text-secondary); margin-top:0.2rem; margin-bottom:0;">
                                ${cat.description}
                            </p>
                        </div>
                    </div>
                    <div style="display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap;">
                        <span style="font-size:0.82rem; font-weight:700; color:var(--text-muted);">
                            ${cat.completedTopics} / ${cat.totalTopics} Topics Completed (${cat.percentage}%)
                        </span>
                        <a href="/learn.html?topic=${firstTopicInTrack}" class="btn btn-sm btn-outline" style="font-size:0.78rem;">
                            Open in Learning Hub →
                        </a>
                    </div>
                </div>

                <div class="grid-2">
                    ${modulesCardsHtml}
                </div>
            </div>
        `;
    }).join('');
}

// -------------------------------------------------------------
// CATEGORY FILTER TABS SWITCHER
// -------------------------------------------------------------
function switchCategoryFilter(filterKey) {
    activeCategoryFilter = filterKey;

    // Update tab buttons
    const tabs = document.querySelectorAll('.category-filter-tab');
    tabs.forEach(t => t.classList.remove('active'));

    const activeTab = document.getElementById(`tab-${filterKey}`);
    if (activeTab) activeTab.classList.add('active');

    renderCategorizedModules(filterKey);

    // Smooth scroll down to the module section if a specific category was clicked
    if (filterKey !== 'all') {
        const targetSection = document.getElementById(`section-${filterKey}`);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

window.switchCategoryFilter = switchCategoryFilter;

// -------------------------------------------------------------
// RESOLVE & RENDER BOOKMARKED TOPICS (ACROSS ALL 3 TRACKS)
// -------------------------------------------------------------
async function resolveAndRenderBookmarks(userId, bookmarkedTopicIds) {
    const bookmarkedContainer = document.getElementById('weakTopicsList');
    if (!bookmarkedContainer) return;

    let allBookmarkedIds = new Set(bookmarkedTopicIds);

    // 1. Check local cache
    try {
        const cachedBook = JSON.parse(localStorage.getItem(`prepflow_book_${userId}`) || '[]');
        if (Array.isArray(cachedBook)) {
            cachedBook.forEach(id => allBookmarkedIds.add(id));
        }
    } catch (e) { }

    // 2. Fetch from backend API
    try {
        const apiBookmarks = await apiFetch(`/progress/bookmarks/${userId}`);
        if (Array.isArray(apiBookmarks)) {
            apiBookmarks.forEach(b => {
                if (b.topic_id) allBookmarkedIds.add(b.topic_id);
                if (b.topic_slug) allBookmarkedIds.add(b.topic_slug);
            });
        }
    } catch (e) {
        console.warn("Could not fetch API bookmarks:", e);
    }

    // 3. Resolve topic details across ALL categories (Fixing old Category[0]-only bug)
    const resolvedBookmarks = [];
    if (window.PREPFLOW_TOPICS_DATA && Array.isArray(window.PREPFLOW_TOPICS_DATA)) {
        window.PREPFLOW_TOPICS_DATA.forEach(cat => {
            const subcategories = cat.subcategories || [];
            subcategories.forEach(sub => {
                (sub.topics || []).forEach(t => {
                    if (allBookmarkedIds.has(t.id) || allBookmarkedIds.has(t.slug)) {
                        resolvedBookmarks.push({
                            id: t.id,
                            title: t.title,
                            slug: t.slug,
                            categoryId: cat.id,
                            categoryName: cat.name,
                            categoryIcon: cat.icon || '⚡',
                            subjectName: sub.name,
                            difficulty: t.difficulty || 'Medium'
                        });
                    }
                });
            });
        });
    }

    cachedBookmarkedTopics = resolvedBookmarks;

    // Update Overview Card 4 Count
    if (document.getElementById('revisionCountText')) {
        document.getElementById('revisionCountText').innerText = resolvedBookmarks.length;
    }

    renderBookmarksList(activeBookmarkFilter);
}

function renderBookmarksList(filterKey) {
    const bookmarkedContainer = document.getElementById('weakTopicsList');
    if (!bookmarkedContainer) return;

    const filtered = (filterKey === 'all')
        ? cachedBookmarkedTopics
        : cachedBookmarkedTopics.filter(b => b.categoryId === filterKey);

    if (cachedBookmarkedTopics.length === 0) {
        bookmarkedContainer.innerHTML = `
            <div style="text-align:center; padding:1.75rem 1rem; color:var(--text-muted);">
                <p style="font-size:0.95rem; margin-bottom:0.5rem; color:var(--text-primary); font-weight:600;">No bookmarked topics yet.</p>
                <p style="font-size:0.82rem; color:var(--text-secondary);">Click <strong>"☆ Bookmark"</strong> in any lesson across DSA, CS Fundamentals, or System Design to pin it here for revision!</p>
            </div>
        `;
        return;
    }

    if (filtered.length === 0) {
        bookmarkedContainer.innerHTML = `
            <div style="text-align:center; padding:1.5rem 1rem; color:var(--text-muted);">
                <p style="font-size:0.88rem;">No bookmarks in this specific track.</p>
            </div>
        `;
        return;
    }

    bookmarkedContainer.innerHTML = filtered.map(b => {
        let badgeClass = 'category-badge-dsa';
        if (b.categoryId === 'cat-cs-fundamentals') badgeClass = 'category-badge-cs';
        else if (b.categoryId === 'cat-system-design') badgeClass = 'category-badge-sd';

        return `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:0.85rem 0; border-bottom:1px solid var(--border-color); flex-wrap:wrap; gap:0.6rem;">
                <div style="display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap; min-width:0;">
                    <span class="category-badge-tag ${badgeClass}">
                        ${b.categoryIcon} ${b.categoryName.split(' ')[0]}
                    </span>
                    <span class="badge ${b.difficulty === 'Easy' ? 'badge-easy' : (b.difficulty === 'Hard' ? 'badge-hard' : 'badge-medium')}" style="font-size:0.72rem;">
                        ${b.difficulty}
                    </span>
                    <strong style="font-size:0.92rem; color:var(--text-primary);">${b.title}</strong>
                    <span style="font-size:0.78rem; color:var(--text-muted);">(${b.subjectName})</span>
                </div>
                <a href="/learn.html?topic=${b.slug}" class="btn btn-sm btn-outline">Study Lesson →</a>
            </div>
        `;
    }).join('');
}

function filterBookmarks(filterKey) {
    activeBookmarkFilter = filterKey;

    // Toggle active state on bookmark tabs
    const buttons = document.querySelectorAll('#bookmarkFilterTabs button');
    buttons.forEach(b => b.classList.remove('active-filter-bm'));

    let tabId = 'bm-tab-all';
    if (filterKey === 'cat-dsa') tabId = 'bm-tab-dsa';
    else if (filterKey === 'cat-cs-fundamentals') tabId = 'bm-tab-cs';
    else if (filterKey === 'cat-system-design') tabId = 'bm-tab-sd';

    const activeBtn = document.getElementById(tabId);
    if (activeBtn) activeBtn.classList.add('active-filter-bm');

    renderBookmarksList(filterKey);
}

window.filterBookmarks = filterBookmarks;

// -------------------------------------------------------------
// SYNC DASHBOARD DATA
// -------------------------------------------------------------
async function refreshDashboardDataSync() {
    const icon = document.getElementById('refreshDashboardSpinner');
    if (icon) icon.style.animation = 'spin 1s linear infinite';

    const user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
    if (user && user.id) {
        await loadDashboardData(user.id);
    }

    if (icon) icon.style.animation = 'none';

    if (typeof Swal !== 'undefined') {
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Dashboard Synced',
            text: 'All curriculum tracks & metrics updated from Supabase DB.',
            showConfirmButton: false,
            timer: 2000,
            background: '#1e293b',
            color: '#f8fafc'
        });
    }
}

function toggleModuleTopics(event, listId, btnId, moreCount) {
    if (event) event.stopPropagation();
    const list = document.getElementById(listId);
    const btn = document.getElementById(btnId);
    if (!list || !btn) return;

    const isOpen = list.style.display === 'flex';
    if (isOpen) {
        list.style.display = 'none';
        btn.innerHTML = `+ View ${moreCount} more topics ▼`;
    } else {
        list.style.display = 'flex';
        btn.innerHTML = `Hide extra topics ▲`;
    }
}

window.toggleModuleTopics = toggleModuleTopics;

window.refreshDashboardDataSync = refreshDashboardDataSync;
