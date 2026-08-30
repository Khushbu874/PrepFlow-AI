// PrepFlow AI - API Client Module

const API_BASE = '/api';

async function apiFetch(endpoint, options = {}) {
    const token = localStorage.getItem('prepflow_token');
    
    const headers = {
        'Content-Type': 'application/json',
        ...(options.headers || {})
    };
    
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    
    const config = {
        ...options,
        headers
    };
    
    try {
        const response = await fetch(`${API_BASE}${endpoint}`, config);
        if (response.status === 401 && !endpoint.includes('/auth/login')) {
            // Token expired or invalid
            localStorage.removeItem('prepflow_token');
            localStorage.removeItem('prepflow_user');
            if (window.location.pathname !== '/login.html') {
                window.location.href = '/login.html';
            }
        }
        
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.detail || 'API request failed');
        }
        return data;
    } catch (err) {
        console.error(`[API Error] ${endpoint}:`, err);
        throw err;
    }
}
