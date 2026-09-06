// PrepFlow AI - Universal Intelligent Topic Search Engine & Spotlight Modal

let allTopicsIndex = null;
let activeModalCategoryFilter = 'all';
let modalSelectedResultIndex = -1;
let modalCurrentLimit = 25;

// Initialize Topic Index from PREPFLOW_TOPICS_DATA
function getTopicsIndex() {
    if (allTopicsIndex && allTopicsIndex.length > 0) return allTopicsIndex;
    if (!window.PREPFLOW_TOPICS_DATA || !Array.isArray(window.PREPFLOW_TOPICS_DATA)) return [];

    const index = [];
    window.PREPFLOW_TOPICS_DATA.forEach(cat => {
        (cat.subcategories || []).forEach(sub => {
            (sub.topics || []).forEach(t => {
                index.push({
                    id: t.id,
                    title: t.title,
                    slug: t.slug,
                    difficulty: t.difficulty || 'Medium',
                    description: t.description || '',
                    categoryId: cat.id,
                    categoryName: cat.name,
                    categoryIcon: cat.icon || '⚡',
                    subcategoryId: sub.id,
                    subcategoryName: sub.name,
                    subcategoryIcon: sub.icon || '📁',
                    // Precomputed searchable string
                    searchCorpus: `${t.title} ${sub.name} ${cat.name} ${t.difficulty || ''} ${t.description || ''}`.toLowerCase()
                });
            });
        });
    });

    allTopicsIndex = index;
    return allTopicsIndex;
}

// Search algorithm with smart scoring & rich metadata
function searchTopicsWithMeta(query, categoryFilter = 'all', limit = 25) {
    const topics = getTopicsIndex();
    
    // Topics filtered by category track
    const categoryTopics = (categoryFilter === 'all') 
        ? topics 
        : topics.filter(t => t.categoryId === categoryFilter);

    if (!query || !query.trim()) {
        return {
            results: categoryTopics.slice(0, limit),
            totalMatches: categoryTopics.length,
            totalInCategory: categoryTopics.length,
            totalAll: topics.length,
            isQueryEmpty: true
        };
    }

    const cleanQuery = query.trim().toLowerCase();
    const queryTokens = cleanQuery.split(/\s+/).filter(Boolean);

    const scored = [];

    categoryTopics.forEach(t => {
        const titleLower = t.title.toLowerCase();
        let score = 0;

        // Exact title match
        if (titleLower === cleanQuery) {
            score += 1000;
        } else if (titleLower.startsWith(cleanQuery)) {
            score += 500;
        } else if (titleLower.includes(cleanQuery)) {
            score += 250;
        }

        // Token matches
        let tokensMatched = 0;
        queryTokens.forEach(token => {
            if (titleLower.includes(token)) {
                score += 50;
                tokensMatched++;
            } else if (t.subcategoryName.toLowerCase().includes(token)) {
                score += 20;
                tokensMatched++;
            } else if (t.categoryName.toLowerCase().includes(token)) {
                score += 15;
                tokensMatched++;
            } else if (t.searchCorpus.includes(token)) {
                score += 10;
                tokensMatched++;
            }
        });

        if (score > 0 || tokensMatched === queryTokens.length) {
            scored.push({ topic: t, score });
        }
    });

    scored.sort((a, b) => b.score - a.score);
    return {
        results: scored.slice(0, limit).map(s => s.topic),
        totalMatches: scored.length,
        totalInCategory: categoryTopics.length,
        totalAll: topics.length,
        isQueryEmpty: false
    };
}

// Backward-compatible searchTopics wrapper
function searchTopics(query, categoryFilter = 'all', limit = 20) {
    return searchTopicsWithMeta(query, categoryFilter, limit).results;
}

// Highlight matched search tokens in text safely
function highlightMatch(text, query) {
    if (!query || !query.trim()) return escapeHtml(text);
    const escapedText = escapeHtml(text);
    const clean = query.trim();
    const regex = new RegExp(`(${clean.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return escapedText.replace(regex, '<mark class="search-highlight">$1</mark>');
}

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// =============================================================
// GLOBAL SPOTLIGHT SEARCH MODAL CONTROLLER
// =============================================================

function ensureSearchModalInDOM() {
    if (document.getElementById('prepflowSearchModalOverlay')) return;

    const modalHtml = `
        <div class="search-modal-overlay" id="prepflowSearchModalOverlay" onclick="handleSearchOverlayClick(event)">
            <div class="search-modal-container" onclick="event.stopPropagation()">
                <!-- Search Input Header -->
                <div class="search-modal-header">
                    <svg class="search-modal-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input type="text" 
                           id="globalSearchModalInput" 
                           class="search-modal-input" 
                           placeholder="Search 330+ topics, algorithms, system design patterns..." 
                           autocomplete="off"
                           spellcheck="false"
                           oninput="onModalSearchInput(this.value)"
                           onkeydown="onModalSearchKeydown(event)">
                    <button class="search-modal-close-btn" onclick="closeGlobalSearchModal()" title="Close search (Esc)">
                        ✕
                    </button>
                </div>

                <!-- Category Filter Tabs inside Modal -->
                <div class="search-modal-tabs">
                    <button class="search-modal-tab active" onclick="setModalCategoryFilter('all')" id="modalTab-all">All Tracks</button>
                    <button class="search-modal-tab" onclick="setModalCategoryFilter('cat-dsa')" id="modalTab-cat-dsa">⚡ DSA</button>
                    <button class="search-modal-tab" onclick="setModalCategoryFilter('cat-cs-fundamentals')" id="modalTab-cat-cs-fundamentals">💻 CS Fundamentals</button>
                    <button class="search-modal-tab" onclick="setModalCategoryFilter('cat-system-design')" id="modalTab-cat-system-design">🏗️ System Design</button>
                </div>

                <!-- Results List Container -->
                <div class="search-modal-results" id="searchModalResultsList"></div>

                <!-- Modal Footer -->
                <div class="search-modal-footer">
                    <div class="search-footer-hint">
                        <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
                        <span><kbd>Enter</kbd> Open Topic</span>
                        <span><kbd>Esc</kbd> Close</span>
                    </div>
                    <span id="searchResultCountBadge" style="color:var(--text-muted); font-weight:600;">330+ topics indexed</span>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function openGlobalSearchModal(initialQuery = '') {
    ensureSearchModalInDOM();
    modalCurrentLimit = 25; // Reset limit when opening modal
    const overlay = document.getElementById('prepflowSearchModalOverlay');
    const input = document.getElementById('globalSearchModalInput');
    if (!overlay || !input) return;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (initialQuery) {
        input.value = initialQuery;
    }

    // Autofocus input
    setTimeout(() => {
        input.focus();
        input.select();
        renderModalResults(input.value);
    }, 50);
}

function closeGlobalSearchModal() {
    const overlay = document.getElementById('prepflowSearchModalOverlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
    document.body.style.overflow = '';
}

function handleSearchOverlayClick(event) {
    if (event.target.id === 'prepflowSearchModalOverlay') {
        closeGlobalSearchModal();
    }
}

function setModalCategoryFilter(catId) {
    modalCurrentLimit = 25; // Reset limit on tab change
    activeModalCategoryFilter = catId;
    document.querySelectorAll('.search-modal-tab').forEach(b => b.classList.remove('active'));
    const tab = document.getElementById(`modalTab-${catId}`);
    if (tab) tab.classList.add('active');

    const input = document.getElementById('globalSearchModalInput');
    renderModalResults(input ? input.value : '');
}

function onModalSearchInput(val) {
    modalCurrentLimit = 25; // Reset limit when search query changes
    modalSelectedResultIndex = -1;
    renderModalResults(val);
}

function renderModalResults(query) {
    const container = document.getElementById('searchModalResultsList');
    const countBadge = document.getElementById('searchResultCountBadge');
    if (!container) return;

    const data = searchTopicsWithMeta(query, activeModalCategoryFilter, modalCurrentLimit);
    const { results, totalMatches, totalInCategory, isQueryEmpty } = data;

    const categoryLabels = {
        'all': 'All Tracks',
        'cat-dsa': 'DSA',
        'cat-cs-fundamentals': 'CS Fundamentals',
        'cat-system-design': 'System Design'
    };
    const catName = categoryLabels[activeModalCategoryFilter] || '';

    // Dynamic Topic Count Badge
    if (countBadge) {
        if (isQueryEmpty) {
            if (activeModalCategoryFilter === 'all') {
                countBadge.innerText = (results.length < totalMatches)
                    ? `Showing ${results.length} of ${totalMatches} total topics`
                    : `${totalMatches} topics available`;
            } else {
                countBadge.innerText = (results.length < totalMatches)
                    ? `Showing ${results.length} of ${totalMatches} ${catName} topics`
                    : `${totalMatches} ${catName} topics available`;
            }
        } else {
            if (totalMatches === 0) {
                countBadge.innerText = `0 topics found`;
            } else if (totalMatches <= results.length) {
                countBadge.innerText = `${totalMatches} topic${totalMatches === 1 ? '' : 's'} found`;
            } else {
                countBadge.innerText = `Showing ${results.length} of ${totalMatches} topics found`;
            }
        }
    }

    if (results.length === 0) {
        container.innerHTML = `
            <div class="search-empty-state">
                <div style="font-size:2rem; margin-bottom:0.4rem;">🔍</div>
                <h4 style="color:var(--text-primary); margin-bottom:0.25rem;">No topics found</h4>
                <p style="color:var(--text-muted); font-size:0.85rem;">No lessons matching "${escapeHtml(query)}" in ${catName || 'this track'}.</p>
            </div>
        `;
        return;
    }

    let itemsHtml = results.map((t, idx) => {
        let badgeClass = 'category-badge-dsa';
        if (t.categoryId === 'cat-cs-fundamentals') badgeClass = 'category-badge-cs';
        else if (t.categoryId === 'cat-system-design') badgeClass = 'category-badge-sd';

        const diffClass = (t.difficulty === 'Easy') ? 'badge-easy' : (t.difficulty === 'Hard' ? 'badge-hard' : 'badge-medium');

        return `
            <div class="search-result-item ${idx === modalSelectedResultIndex ? 'selected' : ''}" 
                 data-slug="${t.slug}"
                 onclick="navigateToTopic('${t.slug}')"
                 onmouseenter="selectResultIndex(${idx})">
                <div class="search-item-left">
                    <div class="search-item-meta">
                        <span class="category-badge-tag ${badgeClass}" style="font-size:0.68rem; padding:0.1rem 0.45rem;">
                            ${t.categoryIcon} ${t.categoryName.split(' ')[0]}
                        </span>
                        <span class="search-subcat-text">${escapeHtml(t.subcategoryName)}</span>
                    </div>
                    <div class="search-item-title">
                        ${highlightMatch(t.title, query)}
                    </div>
                </div>
                <div class="search-item-right">
                    <span class="badge ${diffClass}" style="font-size:0.7rem;">${t.difficulty}</span>
                    <span class="search-item-arrow">→</span>
                </div>
            </div>
        `;
    }).join('');

    // If there are more matching topics than currently shown, render Load More button
    if (totalMatches > results.length) {
        const remaining = totalMatches - results.length;
        itemsHtml += `
            <div style="padding: 0.85rem; text-align: center;">
                <button type="button" 
                        class="search-load-more-btn" 
                        onclick="loadMoreModalResults()">
                    Show all ${totalMatches} matching topics (+${remaining} more) ↓
                </button>
            </div>
        `;
    }

    container.innerHTML = itemsHtml;
}

function loadMoreModalResults() {
    modalCurrentLimit = 999;
    const input = document.getElementById('globalSearchModalInput');
    renderModalResults(input ? input.value : '');
}

function selectResultIndex(idx) {
    modalSelectedResultIndex = idx;
    const items = document.querySelectorAll('.search-result-item');
    items.forEach((it, i) => {
        it.classList.toggle('selected', i === idx);
    });
}

function onModalSearchKeydown(e) {
    const items = document.querySelectorAll('.search-result-item');
    if (items.length === 0) return;

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        modalSelectedResultIndex = (modalSelectedResultIndex + 1) % items.length;
        selectResultIndex(modalSelectedResultIndex);
        items[modalSelectedResultIndex]?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        modalSelectedResultIndex = (modalSelectedResultIndex - 1 + items.length) % items.length;
        selectResultIndex(modalSelectedResultIndex);
        items[modalSelectedResultIndex]?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
        e.preventDefault();
        const target = (modalSelectedResultIndex >= 0 && items[modalSelectedResultIndex])
            ? items[modalSelectedResultIndex]
            : items[0];
        if (target) {
            const slug = target.getAttribute('data-slug');
            if (slug) navigateToTopic(slug);
        }
    } else if (e.key === 'Escape') {
        closeGlobalSearchModal();
    }
}

function navigateToTopic(slug) {
    closeGlobalSearchModal();
    window.location.href = `/learn.html?topic=${slug}`;
}

// Global Keyboard Shortcut: Ctrl+K or Cmd+K or Slash (/)
document.addEventListener('keydown', (e) => {
    // If user presses Ctrl+K or Cmd+K
    if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        openGlobalSearchModal();
    } else if (e.key === 'Escape') {
        closeGlobalSearchModal();
    }
});

// =============================================================
// DASHBOARD IN-PAGE SEARCH INTEGRATION
// =============================================================

function initDashboardSearch() {
    const input = document.getElementById('dashboardSearchInput');
    const dropdown = document.getElementById('dashboardSearchDropdown');
    const clearBtn = document.getElementById('clearDashboardSearchBtn');
    if (!input || !dropdown) return;

    input.addEventListener('input', () => {
        const val = input.value.trim();
        if (clearBtn) clearBtn.style.display = val ? 'inline-flex' : 'none';

        if (!val) {
            dropdown.style.display = 'none';
            return;
        }

        const results = searchTopics(val, 'all', 8);
        if (results.length === 0) {
            dropdown.innerHTML = `
                <div style="padding:1rem; text-align:center; color:var(--text-muted); font-size:0.85rem;">
                    No topics found matching "${escapeHtml(val)}"
                </div>
            `;
            dropdown.style.display = 'block';
            return;
        }

        dropdown.innerHTML = results.map(t => {
            let badgeClass = 'category-badge-dsa';
            if (t.categoryId === 'cat-cs-fundamentals') badgeClass = 'category-badge-cs';
            else if (t.categoryId === 'cat-system-design') badgeClass = 'category-badge-sd';

            return `
                <a href="/learn.html?topic=${t.slug}" class="dashboard-search-dropdown-item">
                    <div style="min-width:0; flex:1;">
                        <div style="display:flex; align-items:center; gap:0.4rem; margin-bottom:0.2rem;">
                            <span class="category-badge-tag ${badgeClass}" style="font-size:0.65rem; padding:0.05rem 0.4rem;">
                                ${t.categoryIcon} ${t.categoryName.split(' ')[0]}
                            </span>
                            <span style="font-size:0.75rem; color:var(--text-muted);">${escapeHtml(t.subcategoryName)}</span>
                        </div>
                        <div style="font-weight:700; font-size:0.88rem; color:var(--text-primary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                            ${highlightMatch(t.title, val)}
                        </div>
                    </div>
                    <span class="badge ${t.difficulty === 'Easy' ? 'badge-easy' : (t.difficulty === 'Hard' ? 'badge-hard' : 'badge-medium')}" style="font-size:0.68rem;">
                        ${t.difficulty}
                    </span>
                </a>
            `;
        }).join('');

        dropdown.style.display = 'block';
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#dashboardSearchContainer')) {
            dropdown.style.display = 'none';
        }
    });

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            input.value = '';
            clearBtn.style.display = 'none';
            dropdown.style.display = 'none';
            input.focus();
        });
    }
}

// =============================================================
// SIDEBAR ROADMAP FILTER INTEGRATION (LEARN.HTML)
// =============================================================

function filterSidebarTopics(query) {
    const clean = query.trim().toLowerCase();
    const accordion = document.getElementById('sidebarAccordion');
    if (!accordion) return;

    const catGroups = accordion.querySelectorAll('.category-group');

    if (!clean) {
        // Reset sidebar display
        catGroups.forEach(cat => {
            cat.style.display = '';
            const subGroups = cat.querySelectorAll('.subcategory-group');
            subGroups.forEach(sub => {
                sub.style.display = '';
                const topics = sub.querySelectorAll('.topic-item');
                topics.forEach(t => t.style.display = '');
            });
        });
        return;
    }

    catGroups.forEach(cat => {
        let catHasMatch = false;
        const subGroups = cat.querySelectorAll('.subcategory-group');

        subGroups.forEach(sub => {
            let subHasMatch = false;
            const topics = sub.querySelectorAll('.topic-item');

            topics.forEach(topEl => {
                const titleText = topEl.innerText.toLowerCase();
                const matched = titleText.includes(clean);
                topEl.style.display = matched ? 'flex' : 'none';
                if (matched) {
                    subHasMatch = true;
                    catHasMatch = true;
                }
            });

            sub.style.display = subHasMatch ? 'block' : 'none';
            if (subHasMatch) {
                sub.classList.add('open');
            }
        });

        cat.style.display = catHasMatch ? 'block' : 'none';
        if (catHasMatch) {
            cat.classList.add('open');
        }
    });
}

// Expose functions globally
window.openGlobalSearchModal = openGlobalSearchModal;
window.closeGlobalSearchModal = closeGlobalSearchModal;
window.setModalCategoryFilter = setModalCategoryFilter;
window.onModalSearchInput = onModalSearchInput;
window.onModalSearchKeydown = onModalSearchKeydown;
window.navigateToTopic = navigateToTopic;
window.initDashboardSearch = initDashboardSearch;
window.filterSidebarTopics = filterSidebarTopics;
window.loadMoreModalResults = loadMoreModalResults;
window.searchTopicsWithMeta = searchTopicsWithMeta;

document.addEventListener('DOMContentLoaded', () => {
    ensureSearchModalInDOM();
    initDashboardSearch();
});
