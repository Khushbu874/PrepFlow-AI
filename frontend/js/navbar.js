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
    else if (path.includes('practice.html')) activeKey = 'practice';
    else if (path.includes('assessment.html')) activeKey = 'assessment';
    else if (path.includes('behavioral.html')) activeKey = 'behavioral';
    else if (path.includes('mock-interview.html')) activeKey = 'mock-interview';
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
                <li><a href="/practice.html" class="nav-item ${activeKey === 'practice' ? 'active' : ''}">Practice</a></li>
                <li><a href="/assessment.html" class="nav-item ${activeKey === 'assessment' ? 'active' : ''}">Assessments</a></li>
                <li><a href="/behavioral.html" class="nav-item ${activeKey === 'behavioral' ? 'active' : ''}">Behavioral</a></li>
                <li><a href="/mock-interview.html" class="nav-item ${activeKey === 'mock-interview' ? 'active' : ''}">Mock Interview</a></li>
            </ul>

            <div class="nav-actions" id="navActions">
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
                        <a href="/login.html" class="btn btn-sm btn-outline">Log In</a>
                        <a href="/register.html" class="btn btn-sm btn-primary">Create Account</a>
                    </div>
                `}
            </div>
        </nav>
    `;
}

// Auto-run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobalHeader);
} else {
    initGlobalHeader();
}
