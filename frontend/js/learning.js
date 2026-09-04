// PrepFlow AI - Hierarchical Learning Controller & YouTube Video Engine

let currentTopicData = null;
let currentVideoConfig = null;
let userCompletedTopics = new Set();
let userBookmarkedTopics = new Set();
let userSolvedQuestions = new Set(); // In-memory only — source of truth is Supabase DB

document.addEventListener('DOMContentLoaded', async () => {
    requireAuth();
    renderNavProfile();
    
    // Initialize Sidebar State (Desktop collapsed state & button states)
    initSidebarState();

    // Initialize User Topic State (Completed & Bookmarked)
    await initUserTopicState();

    // Load solved questions from Supabase DB into memory
    await loadSolvedQuestionsFromDB();

    // Parse URL params for selected topic or category
    const urlParams = new URLSearchParams(window.location.search);
    const topicSlug = urlParams.get('topic') || 'time-complexity';
    
    renderStaticTree(topicSlug);
    loadTopicBySlug(topicSlug);
});

/* -------------------------------------------------------------
 * 1. USER TOPIC STATE INITIALIZATION & SYNC
 * ------------------------------------------------------------- */
async function initUserTopicState() {
    const user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
    const userId = (user && user.id) ? user.id : null;
    if (!userId) return;

    try {
        const data = await apiFetch(`/progress/user-topics/${userId}`);
        if (data) {
            userCompletedTopics = new Set(data.completed_topic_ids || []);
            userBookmarkedTopics = new Set(data.bookmarked_topic_ids || []);
        }
    } catch (e) {
        console.warn("Could not fetch user topic state from DB:", e);
    }
}

async function loadSolvedQuestionsFromDB() {
    const user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
    if (!user || !user.id) return;
    try {
        const rows = await apiFetch(`/progress/solved-questions/${user.id}`);
        userSolvedQuestions = new Set((rows || []).map(r => r.question_title));
    } catch (e) {
        console.warn("Could not load solved questions from DB:", e);
        userSolvedQuestions = new Set();
    }
}

/* -------------------------------------------------------------
 * 2. RENDER HIERARCHICAL SIDEBAR TREE (Category -> Subcategory -> Topic)
 * ------------------------------------------------------------- */
function renderStaticTree(activeTopicSlug) {
    const container = document.getElementById('sidebarAccordion');
    if (!container || !window.PREPFLOW_TOPICS_DATA) return;
    
    container.innerHTML = window.PREPFLOW_TOPICS_DATA.map((cat, catIdx) => {
        let containsActive = false;
        cat.subcategories.forEach(sub => {
            if (sub.topics.some(t => t.slug === activeTopicSlug)) {
                containsActive = true;
            }
        });
        
        const isOpen = containsActive || catIdx === 0;

        return `
            <div class="category-group ${isOpen ? 'open' : ''}" id="cat-group-${cat.id}">
                <div class="category-header" onclick="toggleCategoryGroup('${cat.id}')">
                    <span>${cat.icon || '📚'} ${cat.name}</span>
                    <span class="category-arrow">▶</span>
                </div>
                <div class="subcategory-list">
                    ${cat.subcategories.map(sub => `
                        <div class="subcategory-header">
                            <span>${sub.icon || '📁'}</span>
                            <span>${sub.name}</span>
                        </div>
                        ${sub.topics.map(t => {
                            const isDone = userCompletedTopics.has(t.id) || userCompletedTopics.has(t.slug);
                            const isBooked = userBookmarkedTopics.has(t.id) || userBookmarkedTopics.has(t.slug);
                            return `
                                <div class="topic-item ${t.slug === activeTopicSlug ? 'active' : ''} ${isDone ? 'completed-item' : ''}"
                                     id="nav-topic-${t.slug}"
                                     onclick="selectTopic('${t.slug}', '${cat.name}', '${sub.name}')">
                                    <div style="display:flex; align-items:center; gap:0.4rem; overflow:hidden; text-overflow:ellipsis;">
                                        <span class="status-indicator" style="font-size:0.85rem;">${isDone ? '✅' : '⚪'}</span>
                                        <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${t.title}</span>
                                    </div>
                                    <div style="display:flex; align-items:center; gap:0.25rem;">
                                        ${isBooked ? '<span style="font-size:0.75rem;">🔖</span>' : ''}
                                        <span class="difficulty-tag difficulty-${t.difficulty}">${t.difficulty}</span>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function toggleCategoryGroup(catId) {
    const group = document.getElementById(`cat-group-${catId}`);
    if (group) {
        group.classList.toggle('open');
    }
}

/* -------------------------------------------------------------
 * 3. LOAD TOPIC CONTENT & YOUTUBE VIDEO
 * ------------------------------------------------------------- */
function loadTopicBySlug(slug) {
    if (!window.PREPFLOW_TOPICS_DATA) return;
    
    let foundTopic = null;
    let foundCategory = "Data Structures & Algorithms";
    let foundSubcategory = "1. Basics & Foundations";
    
    // Find topic in static hierarchy
    for (const cat of window.PREPFLOW_TOPICS_DATA) {
        for (const sub of cat.subcategories) {
            for (const top of sub.topics) {
                if (top.slug === slug || top.id === slug) {
                    foundTopic = top;
                    foundCategory = cat.name;
                    foundSubcategory = sub.name;
                    break;
                }
            }
            if (foundTopic) break;
        }
        if (foundTopic) break;
    }

    if (!foundTopic) {
        foundTopic = window.PREPFLOW_TOPICS_DATA[0].subcategories[0].topics[0];
    }
    
    currentTopicData = foundTopic;
    
    // Update active class in sidebar tree
    document.querySelectorAll('.topic-item').forEach(el => el.classList.remove('active'));
    const activeItem = document.getElementById(`nav-topic-${foundTopic.slug}`);
    if (activeItem) activeItem.classList.add('active');

    // Update Breadcrumbs & Title
    document.getElementById('topicBreadcrumb').innerHTML = `<span>${foundCategory}</span> ➔ <span>${foundSubcategory}</span>`;
    document.getElementById('topicTitle').innerText = foundTopic.title;

    // Update Header Action Buttons (Completed & Bookmarked)
    updateHeaderButtonStates();

    // Set AI Tutor Assistant Context
    if (typeof setAITopicContext === 'function') {
        setAITopicContext(foundTopic.id, foundTopic.title, foundCategory);
    }

    // Render YouTube Video Embed Component
    renderYouTubeVideoSection(foundTopic.video);

    // Render Main Text Explanation & Notes
    renderTopicExplanation(foundTopic);
    
    // Render Topic Personal Notes
    renderTopicNotes(foundTopic.slug);

    // Render Linked LeetCode Practice Questions
    renderPracticeQuestions(foundTopic.practice_questions);
    
    // Close mobile drawer if open
    closeMobileSidebar();
}

function selectTopic(slug, catName, subName) {
    history.pushState(null, '', `/learn.html?topic=${slug}`);
    loadTopicBySlug(slug);
}

function updateHeaderButtonStates() {
    if (!currentTopicData) return;
    
    const completeBtn = document.getElementById('completeBtn');
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    
    const isDone = userCompletedTopics.has(currentTopicData.id) || userCompletedTopics.has(currentTopicData.slug);
    const isBooked = userBookmarkedTopics.has(currentTopicData.id) || userBookmarkedTopics.has(currentTopicData.slug);
    
    if (completeBtn) {
        if (isDone) {
            completeBtn.innerHTML = '✅ Completed';
            completeBtn.className = 'btn btn-sm btn-primary';
        } else {
            completeBtn.innerHTML = '⚪ Mark Complete';
            completeBtn.className = 'btn btn-sm btn-outline';
        }
    }
    
    if (bookmarkBtn) {
        if (isBooked) {
            bookmarkBtn.innerHTML = '★ Bookmarked';
            bookmarkBtn.className = 'btn btn-sm btn-primary';
        } else {
            bookmarkBtn.innerHTML = '☆ Bookmark';
            bookmarkBtn.className = 'btn btn-sm btn-outline';
        }
    }
}

/* -------------------------------------------------------------
 * 4. TOGGLE COMPLETION & BOOKMARKS
 * ------------------------------------------------------------- */
async function toggleCompleteCurrentTopic() {
    if (!currentTopicData) return;
    const user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
    const userId = (user && user.id) ? user.id : 'a0000000-0000-0000-0000-000000000002';
    
    const topicId = currentTopicData.slug || currentTopicData.id;
    const rawId = currentTopicData.id;
    const wasDone = userCompletedTopics.has(topicId) || userCompletedTopics.has(rawId);
    
    // Optimistic UI update
    if (wasDone) {
        userCompletedTopics.delete(topicId);
        if (rawId) userCompletedTopics.delete(rawId);
    } else {
        userCompletedTopics.add(topicId);
        if (rawId) userCompletedTopics.add(rawId);
    }
    
    updateHeaderButtonStates();
    renderStaticTree(currentTopicData.slug);
    
    // Sync with localStorage
    localStorage.setItem(`prepflow_done_${userId}`, JSON.stringify(Array.from(userCompletedTopics)));
    
    // Send to Backend Server & DB
    try {
        await apiFetch('/progress/topic/toggle-complete', {
            method: 'POST',
            body: JSON.stringify({
                user_id: userId,
                topic_id: topicId,
                status: wasDone ? 'not_started' : 'completed'
            })
        });
    } catch (e) {
        console.warn("Topic completion toggle server sync failed:", e);
    }
}

async function toggleBookmarkCurrentTopic() {
    if (!currentTopicData) return;
    const user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
    const userId = (user && user.id) ? user.id : 'a0000000-0000-0000-0000-000000000002';
    
    const topicId = currentTopicData.slug || currentTopicData.id;
    const rawId = currentTopicData.id;
    const wasBooked = userBookmarkedTopics.has(topicId) || userBookmarkedTopics.has(rawId);
    
    // Optimistic UI update
    if (wasBooked) {
        userBookmarkedTopics.delete(topicId);
        if (rawId) userBookmarkedTopics.delete(rawId);
    } else {
        userBookmarkedTopics.add(topicId);
        if (rawId) userBookmarkedTopics.add(rawId);
    }
    
    updateHeaderButtonStates();
    renderStaticTree(currentTopicData.slug);
    
    // Sync with localStorage
    localStorage.setItem(`prepflow_book_${userId}`, JSON.stringify(Array.from(userBookmarkedTopics)));
    
    // Send to Backend Server & DB
    try {
        await apiFetch('/progress/bookmark', {
            method: 'POST',
            body: JSON.stringify({
                user_id: userId,
                topic_id: topicId
            })
        });
    } catch (e) {
        console.warn("Bookmark toggle server sync failed:", e);
    }
}

/* -------------------------------------------------------------
 * 5. YOUTUBE EMBED PARSER & TIMESTAMP ENGINE
 * ------------------------------------------------------------- */
function parseYouTubeId(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

function buildYouTubeEmbedUrl(videoUrl, startSec = 0, endSec = 0) {
    const videoId = parseYouTubeId(videoUrl);
    if (!videoId) return null;
    
    let embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=1`;
    if (startSec && startSec > 0) {
        embedUrl += `&start=${startSec}`;
    }
    if (endSec && endSec > 0) {
        embedUrl += `&end=${endSec}`;
    }
    return embedUrl;
}

function renderYouTubeVideoSection(video) {
    const container = document.getElementById('videoSectionContainer');
    if (!container) return;
    
    if (!video || !video.url) {
        container.style.display = 'none';
        return;
    }

    currentVideoConfig = video;
    container.style.display = 'block';
    
    const embedUrl = buildYouTubeEmbedUrl(video.url, video.start_seconds || 0, video.end_seconds || 0);
    const hasTiming = (video.start_seconds > 0 || video.end_seconds > 0);

    const timingBadge = hasTiming 
        ? `<span class="badge badge-medium">⏱️ Chapter (${formatSeconds(video.start_seconds)} - ${video.end_seconds ? formatSeconds(video.end_seconds) : 'End'})</span>` 
        : `<span class="badge badge-easy">▶ Full Video</span>`;

    container.innerHTML = `
        <div class="video-section-card">
            <div class="video-header-bar">
                <div class="video-title-info">
                    <span>📺</span>
                    <span>${video.title || 'Topic Video Lecture'}</span>
                    ${timingBadge}
                </div>
                <button class="btn btn-sm btn-outline" onclick="playFullVideo()">🔄 Play Full Video</button>
            </div>
            
            <div class="video-player-container">
                <iframe id="youtubeIframe" 
                        src="${embedUrl}" 
                        title="${video.title || 'YouTube video player'}" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>

            ${video.chapters && video.chapters.length > 0 ? `
                <div class="video-chapters-bar">
                    <div class="chapters-label">Jump to Video Chapter / Timestamp</div>
                    <div class="chapter-pills-list">
                        ${video.chapters.map((ch, idx) => `
                            <button class="chapter-pill ${idx === 0 ? 'active' : ''}" 
                                    onclick="jumpToTimestamp(this, ${ch.start_seconds})">
                                ⏱️ ${formatSeconds(ch.start_seconds)} - ${ch.title}
                            </button>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

function jumpToTimestamp(btnEl, seconds) {
    if (!currentVideoConfig) return;
    
    document.querySelectorAll('.chapter-pill').forEach(el => el.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');

    const iframe = document.getElementById('youtubeIframe');
    if (iframe) {
        const newEmbedUrl = buildYouTubeEmbedUrl(currentVideoConfig.url, seconds, currentVideoConfig.end_seconds || 0);
        iframe.src = newEmbedUrl;
    }
}

function playFullVideo() {
    if (!currentVideoConfig) return;
    document.querySelectorAll('.chapter-pill').forEach(el => el.classList.remove('active'));
    const iframe = document.getElementById('youtubeIframe');
    if (iframe) {
        iframe.src = buildYouTubeEmbedUrl(currentVideoConfig.url, 0, 0);
    }
}

function formatSeconds(secs) {
    if (!secs) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}

/* -------------------------------------------------------------
 * 6. RENDER TOPIC EXPLANATIONS, CODE & PRACTICE
 * ------------------------------------------------------------- */
function renderTopicExplanation(topic) {
    const container = document.getElementById('blocksContainer');
    if (!container) return;
    
    let html = '';
    
    // Overview explanation & Visual Diagrams, Graphs, Tables & Formulas
    if (topic.explanation) {
        const renderEngine = window.PrepFlowRender || PrepFlowRender;
        const expHtml = renderEngine.renderRichMarkdown(topic.explanation);
        html += `<div class="content-block block-explanation">${expHtml}</div>`;
    }

    // Code Example (Authentic VS Code Dark+ IDE Layout with Python & Java 8 switch)
    if (topic.code_example) {
        const renderEngine = window.PrepFlowRender || PrepFlowRender;
        const lang = topic.code_example.language || 'Python';
        if (renderEngine.renderCodeBlock) {
            html += renderEngine.renderCodeBlock(topic.code_example, lang);
        } else {
            const code = renderEngine.escapeHtml(topic.code_example.code || topic.code_example.python || '');
            html += `
                <div class="content-block vscode-editor-container">
                    <pre class="vscode-pre"><code>${code}</code></pre>
                </div>
            `;
        }
    }

    // Complexity Box
    if (topic.complexity) {
        html += `
            <div class="content-block block-complexity-box">
                <div>⏱️ <strong class="exp-bold">Time Complexity:</strong> <span style="color:var(--accent-cyan); font-weight:600;">${topic.complexity.time}</span></div>
                <div>💾 <strong class="exp-bold">Space Complexity:</strong> <span style="color:var(--accent-purple); font-weight:600;">${topic.complexity.space}</span></div>
            </div>
        `;
    }

    container.innerHTML = html;
}



/* -------------------------------------------------------------
 * 7. UNIFIED SIDEBAR TOGGLE (DESKTOP COLLAPSE & MOBILE DRAWER)
 * ------------------------------------------------------------- */
function initSidebarState() {
    const isMobile = window.innerWidth <= 992;
    const sidebar = document.querySelector('.sidebar-left');
    if (!isMobile && sidebar) {
        const isCollapsed = localStorage.getItem('sidebar_collapsed') === 'true';
        if (isCollapsed) {
            sidebar.classList.add('collapsed');
        }
    }
    updateSidebarToggleState();
}

function toggleSidebar() {
    const isMobile = window.innerWidth <= 992;
    const sidebar = document.querySelector('.sidebar-left');
    const backdrop = document.getElementById('sidebarBackdrop');

    if (!sidebar) return;

    if (isMobile) {
        // Mobile drawer behavior
        const isOpen = sidebar.classList.contains('open');
        if (isOpen) {
            sidebar.classList.remove('open');
            if (backdrop) backdrop.classList.remove('active');
        } else {
            sidebar.classList.add('open');
            if (backdrop) backdrop.classList.add('active');
        }
    } else {
        // Desktop collapse behavior
        const isCollapsed = sidebar.classList.contains('collapsed');
        if (isCollapsed) {
            sidebar.classList.remove('collapsed');
            localStorage.setItem('sidebar_collapsed', 'false');
        } else {
            sidebar.classList.add('collapsed');
            localStorage.setItem('sidebar_collapsed', 'true');
        }
    }
    updateSidebarToggleState();
}

function toggleMobileSidebar() {
    toggleSidebar();
}

function closeMobileSidebar() {
    const sidebar = document.querySelector('.sidebar-left');
    const backdrop = document.getElementById('sidebarBackdrop');
    if (sidebar) sidebar.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    updateSidebarToggleState();
}

function updateSidebarToggleState() {
    const sidebar = document.querySelector('.sidebar-left');
    const toggleBtn = document.getElementById('sidebarToggleBtn') || document.querySelector('.mobile-sidebar-toggle');
    if (!sidebar || !toggleBtn) return;
    
    const isMobile = window.innerWidth <= 992;
    if (isMobile) {
        const isOpen = sidebar.classList.contains('open');
        toggleBtn.classList.toggle('active', isOpen);
    } else {
        const isCollapsed = sidebar.classList.contains('collapsed');
        toggleBtn.classList.toggle('collapsed-state', isCollapsed);
        const icon = toggleBtn.querySelector('.toggle-icon');
        if (icon) icon.textContent = isCollapsed ? '📖' : '☰';
        const text = toggleBtn.querySelector('.toggle-text');
        if (text) text.textContent = isCollapsed ? 'Show Roadmap' : 'Roadmap';
    }
}

// Keyboard shortcut: Press '[' or 'Ctrl+B' to toggle sidebar
document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
    if (e.key === '[' || (e.ctrlKey && (e.key === 'b' || e.key === 'B'))) {
        e.preventDefault();
        toggleSidebar();
    }
});

// Update state on window resize
window.addEventListener('resize', () => {
    updateSidebarToggleState();
});

function speakCurrentTopic() {
    if (!currentTopicData) return;
    
    let blockTexts = [];
    if (currentTopicData.blocks && Array.isArray(currentTopicData.blocks)) {
        currentTopicData.blocks.forEach(b => {
            if (['explanation', 'concept', 'step_by_step', 'tips'].includes(b.block_type)) {
                if (b.content) blockTexts.push(b.content);
            }
        });
    }

    const fullText = [
        currentTopicData.title,
        currentTopicData.description,
        blockTexts.join('. '),
        currentTopicData.explanation
    ].filter(Boolean).join('. ');

    if (typeof voiceEngine !== 'undefined') {
        voiceEngine.togglePlayPause(fullText, currentTopicData.title);
    }
}

function copyCode(btn) {
    try {
        const container = btn.closest('.vscode-editor-container') || btn.closest('.block-code-container');
        if (!container) return;
        
        let code = '';
        // Check which panel is currently visible (Python vs Java)
        const visiblePre = Array.from(container.querySelectorAll('.vscode-pre')).find(p => p.style.display !== 'none');
        if (visiblePre) {
            const lineCodes = visiblePre.querySelectorAll('.line-code');
            if (lineCodes.length > 0) {
                code = Array.from(lineCodes).map(el => el.innerText).join('\n');
            } else {
                code = visiblePre.innerText;
            }
        } else {
            const pre = container.querySelector('pre');
            code = pre ? pre.innerText : '';
        }

        navigator.clipboard.writeText(code);
        const originalText = btn.innerText;
        btn.innerText = '✅ Copied!';
        setTimeout(() => {
            btn.innerText = originalText;
        }, 2000);
    } catch (e) {
        console.error('Clipboard copy failed:', e);
    }
}

// Global Multi-Language Switcher (Python <-> Java 8)
function switchEditorLang(editorId, targetLang) {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('prepflow_preferred_lang', targetLang);
    }
    
    // Sync all VS Code editor containers across the page
    document.querySelectorAll('.vscode-editor-container').forEach(container => {
        const tabs = container.querySelectorAll('.vscode-tabs-group .vscode-tab');
        const pyTab = tabs[0];
        const javaTab = tabs[1];
        const pyPanel = container.querySelector('.lang-panel-python');
        const javaPanel = container.querySelector('.lang-panel-java');
        const badge = container.querySelector('.vscode-lang-badge');

        if (targetLang === 'java' && javaPanel) {
            if (pyTab) pyTab.classList.remove('active');
            if (javaTab) javaTab.classList.add('active');
            if (pyPanel) pyPanel.style.display = 'none';
            if (javaPanel) javaPanel.style.display = 'block';
            if (badge) badge.textContent = 'JAVA 8';
        } else {
            if (pyTab) pyTab.classList.add('active');
            if (javaTab) javaTab.classList.remove('active');
            if (pyPanel) pyPanel.style.display = 'block';
            if (javaPanel) javaPanel.style.display = 'none';
            if (badge) badge.textContent = 'PYTHON';
        }
    });
}
window.switchEditorLang = switchEditorLang;

/* -------------------------------------------------------------
 * TOPIC LEETCODE PRACTICE PROBLEMS & SOLVE TRACKER
 * Source of truth: Supabase DB via in-memory userSolvedQuestions Set
 * No localStorage used.
 * ------------------------------------------------------------- */
async function toggleSolveQuestion(qTitle) {
    const user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
    if (!user || !user.id) {
        Swal.fire({
            title: 'Login Required',
            text: 'Please log in to track your solved questions.',
            icon: 'warning',
            confirmButtonColor: '#6366f1',
            background: '#0f172a',
            color: '#f8fafc'
        });
        return;
    }

    // Optimistic in-memory update
    const wasSolved = userSolvedQuestions.has(qTitle);
    if (wasSolved) {
        userSolvedQuestions.delete(qTitle);
    } else {
        userSolvedQuestions.add(qTitle);
    }

    // Re-render immediately with updated in-memory state
    if (currentTopicData && currentTopicData.practice_questions) {
        renderPracticeQuestions(currentTopicData.practice_questions);
    }

    // Persist to Supabase DB
    const topicId = currentTopicData ? (currentTopicData.slug || currentTopicData.id) : null;
    try {
        await apiFetch('/progress/solved-questions/toggle', {
            method: 'POST',
            body: JSON.stringify({
                user_id: user.id,
                question_title: qTitle,
                topic_id: topicId
            })
        });
    } catch (e) {
        // Rollback optimistic update on failure
        if (wasSolved) {
            userSolvedQuestions.add(qTitle);
        } else {
            userSolvedQuestions.delete(qTitle);
        }
        if (currentTopicData && currentTopicData.practice_questions) {
            renderPracticeQuestions(currentTopicData.practice_questions);
        }
        console.warn('Solved question DB sync failed — rolled back:', e);
    }
}

function renderPracticeQuestions(questions) {
    const practiceContainer = document.getElementById('topicPracticeList');
    if (!practiceContainer) return;

    if (!questions || questions.length === 0) {
        practiceContainer.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem;">No LeetCode questions linked to this topic yet.</p>`;
        return;
    }

    // Use in-memory Set loaded from Supabase DB — no localStorage
    const totalCount = questions.length;
    let solvedCount = 0;
    questions.forEach(q => { if (userSolvedQuestions.has(q.title)) solvedCount++; });

    const percent = totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

    let progressHtml = `
        <div class="practice-progress-box">
            <div class="practice-progress-header">
                <span>🎯 Topic Practice Progress: <strong>${solvedCount} of ${totalCount} Solved</strong></span>
                <span class="practice-percentage">${percent}%</span>
            </div>
            <div class="practice-progress-track">
                <div class="practice-progress-fill" style="width: ${percent}%;"></div>
            </div>
        </div>
    `;

    let listHtml = questions.map(q => {
        const isSolved = userSolvedQuestions.has(q.title);
        const safeTitle = (q.title || '').replace(/'/g, "\\'")
        return `
            <div class="practice-card-item ${isSolved ? 'solved' : ''}">
                <div class="practice-card-left">
                    <button class="practice-check-btn ${isSolved ? 'checked' : ''}"
                            title="${isSolved ? 'Mark as Unsolved' : 'Mark as Solved'}"
                            onclick="toggleSolveQuestion('${safeTitle}')">
                        ${isSolved ? '✓' : ''}
                    </button>
                    <span class="badge ${q.difficulty === 'Easy' ? 'badge-easy' : (q.difficulty === 'Hard' ? 'badge-hard' : 'badge-medium')}">${q.difficulty}</span>
                    <span class="practice-title-text">${q.title}</span>
                </div>
                <div class="practice-card-right">
                    ${q.url ? `<a href="${q.url}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">Solve on LeetCode ↗</a>` : ''}
                </div>
            </div>
        `;
    }).join('');

    practiceContainer.innerHTML = progressHtml + listHtml;
}
window.toggleSolveQuestion = toggleSolveQuestion;

/* -------------------------------------------------------------
 * TOPIC PERSONAL NOTES CONTROLLER (ADD, EDIT, DELETE, LIST)
 * ------------------------------------------------------------- */
function getTopicNotesKey(topicSlug) {
    const user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
    const uid = user && user.id ? user.id : 'guest';
    return `prepflow_notes_${uid}_${topicSlug}`;
}

function getTopicNotes(topicSlug) {
    const key = getTopicNotesKey(topicSlug);
    try {
        return JSON.parse(localStorage.getItem(key) || '[]');
    } catch (e) {
        return [];
    }
}

function saveTopicNotes(topicSlug, notesArray) {
    const key = getTopicNotesKey(topicSlug);
    localStorage.setItem(key, JSON.stringify(notesArray));
}

function scrollToNotesSection() {
    const el = document.getElementById('topicNotesSection');
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

async function renderTopicNotes(topicSlug) {
    const slug = topicSlug || (currentTopicData ? currentTopicData.slug : '');
    if (!slug) return;

    const notesContainer = document.getElementById('topicNotesList');
    const badge = document.getElementById('notesCountBadge');
    if (!notesContainer) return;

    // 1. Render immediately from local cache
    let notes = getTopicNotes(slug);
    displayTopicNotes(notes, notesContainer, badge);

    // 2. Fetch latest notes from Supabase DB if logged in
    const user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
    if (user && user.id) {
        try {
            const dbNotes = await apiFetch(`/progress/notes/${user.id}/${slug}`);
            if (Array.isArray(dbNotes)) {
                const formattedNotes = dbNotes.map(n => ({
                    id: n.id,
                    text: n.note_text,
                    createdAt: n.created_at || n.updated_at || new Date().toISOString()
                }));
                saveTopicNotes(slug, formattedNotes);
                displayTopicNotes(formattedNotes, notesContainer, badge);
            }
        } catch (e) {
            console.warn("Could not fetch topic notes from DB:", e);
        }
    }
}

function displayTopicNotes(notes, notesContainer, badge) {
    if (badge) {
        badge.innerText = `${notes.length} Note${notes.length === 1 ? '' : 's'} Saved`;
    }

    if (!notes || notes.length === 0) {
        notesContainer.innerHTML = `
            <div style="text-align:center; padding:1.25rem; background:rgba(0,0,0,0.15); border:1px dashed var(--border-color); border-radius:var(--radius-sm); color:var(--text-muted); font-size:0.88rem;">
                No personal notes added for this topic yet. Write your first note above to save key insights for future revision!
            </div>
        `;
        return;
    }

    notesContainer.innerHTML = notes.map((n, idx) => `
        <div class="card note-card" id="noteCard_${n.id}">
            <div class="note-header">
                <span class="note-timestamp">📅 ${new Date(n.createdAt).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}</span>
                <div class="note-actions-btn-group">
                    <button onclick="startEditTopicNote('${n.id}')" class="btn btn-sm btn-outline btn-icon-note" title="Edit Note">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </button>
                    <button onclick="deleteTopicNote('${n.id}')" class="btn btn-sm btn-outline btn-icon-note-danger" title="Delete Note">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
                    </button>
                </div>
            </div>

            <!-- DISPLAY VIEW -->
            <div class="note-content-display" id="noteDisplay_${n.id}">${n.text.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>")}</div>

            <!-- EDIT VIEW (HIDDEN DEFAULT) -->
            <div class="note-content-edit" id="noteEditArea_${n.id}" style="display:none; margin-top:0.5rem;">
                <textarea id="noteEditText_${n.id}" class="note-textarea" rows="3">${n.text}</textarea>
                <div style="display:flex; justify-content:flex-end; gap:0.5rem; margin-top:0.5rem;">
                    <button onclick="cancelEditTopicNote('${n.id}')" class="btn btn-sm btn-secondary">Cancel</button>
                    <button onclick="saveEditedTopicNote('${n.id}')" class="btn btn-sm btn-primary">Update</button>
                </div>
            </div>
        </div>
    `).join('');
}

async function addTopicNote() {
    if (!currentTopicData) return;
    const input = document.getElementById('newNoteInput');
    if (!input) return;

    const text = input.value.trim();
    if (!text) {
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'warning',
            title: 'Note cannot be empty!',
            text: 'Please write something before adding a note.',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: '#1e293b',
            color: '#f8fafc'
        });
        return;
    }

    const slug = currentTopicData.slug;
    const notes = getTopicNotes(slug);
    const user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
    
    const newNote = {
        id: 'note_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
        text: text,
        createdAt: new Date().toISOString()
    };

    notes.unshift(newNote);
    saveTopicNotes(slug, notes);

    input.value = '';
    renderTopicNotes(slug);

    if (user && user.id) {
        try {
            const serverNote = await apiFetch('/progress/notes', {
                method: 'POST',
                body: JSON.stringify({
                    user_id: user.id,
                    topic_id: slug,
                    note_text: text
                })
            });
            if (serverNote && serverNote.id) {
                // Update the note's ID to server UUID and re-render so DOM IDs are correct
                newNote.id = serverNote.id;
                saveTopicNotes(slug, notes);
                renderTopicNotes(slug); // Re-render with correct server IDs
            }
        } catch (e) {
            console.warn("Note creation DB sync failed:", e);
        }
    }
}

function startEditTopicNote(noteId) {
    const disp = document.getElementById(`noteDisplay_${noteId}`);
    const edit = document.getElementById(`noteEditArea_${noteId}`);
    if (disp) disp.style.display = 'none';
    if (edit) edit.style.display = 'block';
}

function cancelEditTopicNote(noteId) {
    const disp = document.getElementById(`noteDisplay_${noteId}`);
    const edit = document.getElementById(`noteEditArea_${noteId}`);
    if (disp) disp.style.display = 'block';
    if (edit) edit.style.display = 'none';
}

async function saveEditedTopicNote(noteId) {
    if (!currentTopicData) return;
    const slug = currentTopicData.slug;
    const editInput = document.getElementById(`noteEditText_${noteId}`);
    if (!editInput) return;

    const newText = editInput.value.trim();
    if (!newText) {
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'warning',
            title: 'Note cannot be empty!',
            text: 'Please write some content before saving.',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: '#1e293b',
            color: '#f8fafc'
        });
        return;
    }

    const notes = getTopicNotes(slug);
    const target = notes.find(n => n.id === noteId);
    if (target) {
        target.text = newText;
        target.updatedAt = new Date().toISOString();
        saveTopicNotes(slug, notes);
        renderTopicNotes(slug);

        // Sync edit to backend if it's a server-side UUID (not a local temp ID)
        if (!noteId.startsWith('note_')) {
            try {
                await apiFetch(`/progress/notes/${noteId}`, {
                    method: 'PUT',
                    body: JSON.stringify({ note_text: newText })
                });
            } catch (e) {
                console.warn("Note edit DB sync failed:", e);
            }
        }
    }
}

async function deleteTopicNote(noteId) {
    if (!currentTopicData) return;
    const slug = currentTopicData.slug;

    const doDelete = async () => {
        let notes = getTopicNotes(slug);
        notes = notes.filter(n => n.id !== noteId);
        saveTopicNotes(slug, notes);
        renderTopicNotes(slug);

        // Sync deletion to backend if it's a server-side UUID (not a local temp ID)
        if (!noteId.startsWith('note_')) {
            try {
                await apiFetch(`/progress/notes/${noteId}`, { method: 'DELETE' });
            } catch (e) {
                console.warn("Note deletion DB sync failed:", e);
            }
        }
    };

    if (typeof Swal !== 'undefined') {
        Swal.fire({
            title: 'Delete Personal Note?',
            text: 'This action cannot be undone. Are you sure you want to delete this note?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#475569',
            confirmButtonText: 'Yes, Delete Note',
            cancelButtonText: 'Cancel',
            background: '#0f172a',
            color: '#f8fafc'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await doDelete();
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your personal note has been removed.',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false,
                    background: '#0f172a',
                    color: '#f8fafc'
                });
            }
        });
    } else {
        if (!confirm("Are you sure you want to delete this personal note?")) return;
        await doDelete();
    }
window.scrollToNotesSection = scrollToNotesSection;
window.addTopicNote = addTopicNote;
window.startEditTopicNote = startEditTopicNote;
window.cancelEditTopicNote = cancelEditTopicNote;
window.saveEditedTopicNote = saveEditedTopicNote;
window.deleteTopicNote = deleteTopicNote;

/* -------------------------------------------------------------
 * SECTION REFRESH SYNC HANDLERS
 * ------------------------------------------------------------- */
async function refreshCurrentTopicNotes() {
    const icon = document.getElementById('refreshNotesSpinner');
    if (icon) icon.style.animation = 'spin 1s linear infinite';
    
    const slug = currentTopicData ? currentTopicData.slug : '';
    await renderTopicNotes(slug);
    
    if (icon) icon.style.animation = 'none';

    if (typeof Swal !== 'undefined') {
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Notes Synced',
            text: 'Topic notes updated from Supabase DB.',
            showConfirmButton: false,
            timer: 2000,
            background: '#1e293b',
            color: '#f8fafc'
        });
    }
}

async function refreshPracticeQuestionsSync() {
    const icon = document.getElementById('refreshPracticeSpinner');
    if (icon) icon.style.animation = 'spin 1s linear infinite';

    await loadSolvedQuestionsFromDB();
    if (currentTopicData && currentTopicData.practice_questions) {
        renderPracticeQuestions(currentTopicData.practice_questions);
    }

    if (icon) icon.style.animation = 'none';

    if (typeof Swal !== 'undefined') {
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Practice Status Synced',
            text: 'Solved status synced from Supabase DB.',
            showConfirmButton: false,
            timer: 2000,
            background: '#1e293b',
            color: '#f8fafc'
        });
    }
}

window.refreshCurrentTopicNotes = refreshCurrentTopicNotes;
window.refreshPracticeQuestionsSync = refreshPracticeQuestionsSync;

