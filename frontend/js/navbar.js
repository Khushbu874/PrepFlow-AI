// PrepFlow AI - Global Shared Header Controller

function initGlobalHeader() {
    let container = document.getElementById('header-container') || document.querySelector('header');
    
    // If no header container exists, create one at the very top of body
    if (!container) {
        // Check if there is an existing nav.navbar and replace it
        const oldNav = document.querySelector('nav.navbar');
        if (oldNav) {
            container = oldNav;
        } else {
            container = document.createElement('div');
            container.id = 'header-container';
            document.body.prepend(container);
        }
    }

    // Determine current active page
    const path = window.location.pathname.toLowerCase();
    let activeKey = 'dashboard';
    if (path.includes('learn.html')) activeKey = 'learn';
    else if (path.includes('dashboard.html') || path === '/' || path.endsWith('/')) activeKey = 'dashboard';

    // Get current logged-in user
    const user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;

    // Render the exact header UI
    container.outerHTML = `
        <nav class="navbar" id="globalNavbar">
            <div style="display:flex; align-items:center; gap:0.6rem; flex-shrink:0;">
                ${path.includes('learn.html') ? `
                    <button class="sidebar-toggle-btn mobile-sidebar-toggle" id="sidebarToggleBtn" onclick="toggleSidebar()" title="Toggle Roadmap Sidebar (Hide/Show)">
                        <span class="toggle-icon">☰</span>
                        <span class="toggle-text">Roadmap</span>
                    </button>
                ` : ''}
                <a href="/dashboard.html" class="nav-brand">
                    <div class="nav-logo">P</div>
                    <span>PrepFlow AI</span>
                </a>
            </div>

            <ul class="nav-links">
                <li><a href="/dashboard.html" class="nav-item ${activeKey === 'dashboard' ? 'active' : ''}">Dashboard</a></li>
                <li><a href="/learn.html" class="nav-item ${activeKey === 'learn' ? 'active' : ''}">Learning Hub</a></li>
            </ul>

            <div class="nav-actions" id="navActions" style="display:flex; align-items:center; gap:0.6rem;">
                <button id="backendStatusBtn" class="backend-status-btn idle" onclick="initiateRenderBackend()" title="Click to initiate & wake up Render Backend server">
                    ⚡ Initiate Backend
                </button>

                ${user ? `
                    <div style="display:flex; align-items:center; gap:0.6rem;">
                        <div class="user-profile-badge" title="${user.name || 'User Profile'}">
                            <img src="${user.avatar_url || 'https://api.dicebear.com/7.x/bottts/svg?seed=' + encodeURIComponent(user.name || 'User')}" 
                                 alt="${user.name || 'User'}" 
                                 style="width:32px; height:32px; border-radius:50%; background:rgba(255,255,255,0.08); border:1.5px solid rgba(255,255,255,0.15); display:block; flex-shrink:0;" />
                        </div>
                        <button onclick="logoutUser()" class="btn-icon-logout" title="Log Out" aria-label="Log Out">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                <polyline points="16 17 21 12 16 7"></polyline>
                                <line x1="21" y1="12" x2="9" y2="12"></line>
                            </svg>
                        </button>
                    </div>
                ` : `
                    <div style="display:flex; gap:0.4rem; white-space:nowrap;">
                        <a href="/login.html" id="navLogin" class="btn btn-sm btn-outline requires-backend">Log In</a>
                        <a href="/register.html" id="navRegister" class="btn btn-sm btn-primary requires-backend">Create Account</a>
                    </div>
                `}
            </div>
        </nav>
    `;
    
    // Auto ping health endpoint in background to check if backend is active or needs activation
    setTimeout(() => {
        const apiBaseUrl = (typeof API_BASE !== 'undefined' && API_BASE) ? API_BASE : '/api';
        fetch(`${apiBaseUrl}/health`, { method: 'GET', cache: 'no-store' })
            .then(res => {
                if (res.ok) {
                    res.json().then(data => window.setBackendState('active', { status: data.status }));
                } else {
                    window.setBackendState('idle');
                }
            })
            .catch(() => {
                window.setBackendState('idle');
            });
    }, 300);
}

window.setBackendState = function(state, data = {}) {
    const btn = document.getElementById('backendStatusBtn');
    const heroBanner = document.getElementById('backendStatusBanner');
    const pageButtons = document.querySelectorAll('.requires-backend, #btnStartPrep, #btnHeroLogin, #navLogin, #navRegister');

    if (state === 'active') {
        if (btn) {
            btn.disabled = false;
            btn.className = 'backend-status-btn active';
            btn.innerHTML = `<span class="backend-active-dot"></span> <span>Backend Activated</span>`;
            btn.title = `Backend Status: ${data.status || 'online'} ${data.latency ? '| Latency: ' + data.latency + 'ms' : ''}`;
        }
        if (heroBanner) {
            heroBanner.className = 'backend-status-banner banner-active';
            heroBanner.innerHTML = `✅ <strong>Backend Activated:</strong> Server is online & ready. You can now log in or start preparation!`;
        }
        pageButtons.forEach(el => {
            el.classList.remove('disabled-btn', 'btn-locked');
            el.removeAttribute('aria-disabled');
            el.style.pointerEvents = 'auto';
            el.style.opacity = '1';
        });
    } else if (state === 'loading') {
        if (btn) {
            btn.disabled = true;
            btn.className = 'backend-status-btn loading';
            btn.innerHTML = `<span class="backend-spinner"></span> <span>Activating Backend...</span>`;
        }
        if (heroBanner) {
            heroBanner.className = 'backend-status-banner banner-loading';
            heroBanner.innerHTML = `<span class="backend-spinner"></span> <strong>Waking Up Server:</strong> Connecting to backend... Please wait a few seconds.`;
        }
        pageButtons.forEach(el => {
            el.classList.add('disabled-btn', 'btn-locked');
            el.setAttribute('aria-disabled', 'true');
            el.style.pointerEvents = 'none';
            el.style.opacity = '0.45';
        });
    } else { // idle or error
        if (btn) {
            btn.disabled = false;
            btn.className = state === 'error' ? 'backend-status-btn error' : 'backend-status-btn idle';
            btn.innerHTML = state === 'error' ? `⚠️ Server Offline (Retry)` : `⚡ Initiate Backend`;
            btn.title = "Click to initiate & wake up backend server";
        }
        if (heroBanner) {
            heroBanner.className = 'backend-status-banner banner-offline';
            heroBanner.innerHTML = `🔒 <strong>Backend Offline:</strong> Click <strong>"⚡ Initiate Backend"</strong> above to wake up server before logging in.`;
        }
        pageButtons.forEach(el => {
            el.classList.add('disabled-btn', 'btn-locked');
            el.setAttribute('aria-disabled', 'true');
            el.style.pointerEvents = 'none';
            el.style.opacity = '0.45';
        });
    }
};

window.initiateRenderBackend = async function() {
    window.setBackendState('loading');
    const startTime = Date.now();
    try {
        const apiBaseUrl = (typeof API_BASE !== 'undefined' && API_BASE) ? API_BASE : '/api';
        const res = await fetch(`${apiBaseUrl}/health`, { method: 'GET', cache: 'no-store' });
        if (res.ok) {
            const data = await res.json();
            const latency = Date.now() - startTime;
            window.setBackendState('active', { status: data.status, latency });
        } else {
            throw new Error(`HTTP ${res.status}`);
        }
    } catch (err) {
        console.warn('Backend activation failed:', err);
        window.setBackendState('error');
    }
};

// Auto-run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobalHeader);
} else {
    initGlobalHeader();
}


