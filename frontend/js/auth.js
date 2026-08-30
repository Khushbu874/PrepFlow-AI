// PrepFlow AI - Auth & Session Controller

function getCurrentUser() {
    const userStr = sessionStorage.getItem('prepflow_user') || localStorage.getItem('prepflow_user');
    if (!userStr) return null;
    try {
        return JSON.parse(userStr);
    } catch {
        return null;
    }
}

function isAuthenticated() {
    return !!(sessionStorage.getItem('prepflow_token') || localStorage.getItem('prepflow_token'));
}

function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = '/login.html';
    }
}

async function loginUser(email, password) {
    const data = await apiFetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
    });
    
    // Store in both SessionStorage and LocalStorage
    sessionStorage.setItem('prepflow_token', data.access_token);
    sessionStorage.setItem('prepflow_user', JSON.stringify(data.user));
    localStorage.setItem('prepflow_token', data.access_token);
    localStorage.setItem('prepflow_user', JSON.stringify(data.user));
    
    window.location.href = '/dashboard.html';
}

async function registerUser(name, email, password) {
    const data = await apiFetch('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password })
    });
    
    sessionStorage.setItem('prepflow_token', data.access_token);
    sessionStorage.setItem('prepflow_user', JSON.stringify(data.user));
    localStorage.setItem('prepflow_token', data.access_token);
    localStorage.setItem('prepflow_user', JSON.stringify(data.user));
    
    window.location.href = '/dashboard.html';
}

function logoutUser() {
    sessionStorage.removeItem('prepflow_token');
    sessionStorage.removeItem('prepflow_user');
    localStorage.removeItem('prepflow_token');
    localStorage.removeItem('prepflow_user');
    window.location.href = '/login.html';
}

function renderNavProfile() {
    const user = getCurrentUser();
    const navActions = document.getElementById('navActions');
    if (!navActions) return;
    
    if (user) {
        navActions.innerHTML = `
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
        `;
    } else {
        navActions.innerHTML = `
            <div style="display:flex; gap:0.4rem; white-space:nowrap;">
                <a href="/login.html" class="btn btn-sm btn-outline">Log In</a>
                <a href="/register.html" class="btn btn-sm btn-primary">Create Account</a>
            </div>
        `;
    }
}
