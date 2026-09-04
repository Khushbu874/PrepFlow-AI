// PrepFlow AI - Admin Portal Controller

document.addEventListener('DOMContentLoaded', async () => {
    requireAdmin();
    renderNavProfile();
    await loadAdminCategories();
    await loadAdminUsers();
});

function switchAdminTab(tabName) {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.admin-tab-content').forEach(c => c.style.display = 'none');
    
    document.getElementById(`tab-${tabName}`).classList.add('active');
    document.getElementById(`content-${tabName}`).style.display = 'block';
}

async function loadAdminCategories() {
    try {
        const categories = await apiFetch('/categories');
        const selectCat = document.getElementById('adminSelectCategory');
        if (selectCat) {
            selectCat.innerHTML = categories.map(c => `<option value="${c.id}">${c.name} (${c.slug})</option>`).join('');
        }
    } catch (err) {
        console.error("Admin categories load failed:", err);
    }
}

async function submitAdminCategory() {
    const name = document.getElementById('adminCatName')?.value.trim();
    const slug = document.getElementById('adminCatSlug')?.value.trim();
    const desc = document.getElementById('adminCatDesc')?.value.trim();
    
    if (!name || !slug) {
        Swal.fire({ toast: true, position: 'top-end', icon: 'warning', title: 'Category Name and Slug are required.', showConfirmButton: false, timer: 3000, timerProgressBar: true, background: '#1e293b', color: '#f8fafc' });
        return;
    }
    
    try {
        await apiFetch('/admin/categories', {
            method: 'POST',
            body: JSON.stringify({ name, slug, description: desc, icon: 'book', display_order: 1 })
        });
        Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Category Created Successfully!', showConfirmButton: false, timer: 2500, background: '#1e293b', color: '#f8fafc' });
        window.location.reload();
    } catch (err) {
        Swal.fire({ toast: true, position: 'top-end', icon: 'error', title: 'Failed to create category', text: err.message, showConfirmButton: false, timer: 4000, background: '#1e293b', color: '#f8fafc' });
    }
}

async function submitAdminTopic() {
    const subjectId = document.getElementById('adminSelectSubject')?.value;
    const title = document.getElementById('adminTopicTitle')?.value.trim();
    const slug = document.getElementById('adminTopicSlug')?.value.trim();
    const diff = document.getElementById('adminTopicDiff')?.value;
    
    if (!title || !slug) {
        Swal.fire({ toast: true, position: 'top-end', icon: 'warning', title: 'Title and Slug are required.', showConfirmButton: false, timer: 3000, timerProgressBar: true, background: '#1e293b', color: '#f8fafc' });
        return;
    }
    
    try {
        await apiFetch('/admin/topics', {
            method: 'POST',
            body: JSON.stringify({ subject_id: subjectId, title, slug, difficulty: diff, display_order: 1 })
        });
        Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Topic Created Successfully!', showConfirmButton: false, timer: 2500, background: '#1e293b', color: '#f8fafc' });
    } catch (err) {
        Swal.fire({ toast: true, position: 'top-end', icon: 'error', title: 'Failed to create topic', text: err.message, showConfirmButton: false, timer: 4000, background: '#1e293b', color: '#f8fafc' });
    }
}

async function adminAIGenerateBlocks() {
    const topicName = document.getElementById('aiGenTopicName')?.value.trim();
    const categoryName = document.getElementById('aiGenCategoryName')?.value.trim() || 'Data Structures & Algorithms';
    
    if (!topicName) {
        Swal.fire({ toast: true, position: 'top-end', icon: 'warning', title: 'Topic Name required!', text: 'Please enter a Topic Name for AI generation.', showConfirmButton: false, timer: 3000, timerProgressBar: true, background: '#1e293b', color: '#f8fafc' });
        return;
    }
    
    const previewContainer = document.getElementById('aiGenPreviewContainer');
    previewContainer.innerHTML = `<em>Generating structured block content using AI...</em>`;
    
    try {
        const data = await apiFetch('/ai/admin/generate-content', {
            method: 'POST',
            body: JSON.stringify({ topic_name: topicName, category_name: categoryName })
        });
        
        previewContainer.innerHTML = `
            <div class="card" style="margin-top:1rem; border-left:4px solid var(--accent-blue);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                    <h4 style="font-weight:700;">AI Generated Draft: ${data.topic_name} (${data.blocks.length} Blocks)</h4>
                    <button onclick="approveAIGeneratedBlocks('${data.topic_name}')" class="btn btn-sm btn-primary">Approve & Save Blocks</button>
                </div>
                <pre style="background:#0d1117; padding:1rem; border-radius:var(--radius-md); max-height:300px; overflow-y:auto; font-family:var(--font-mono); font-size:0.85rem;"><code>${JSON.stringify(data.blocks, null, 2)}</code></pre>
            </div>
        `;
    } catch (err) {
        previewContainer.innerHTML = `<span style="color:var(--accent-rose);">AI Block Generation Failed.</span>`;
    }
}

async function loadAdminUsers() {
    try {
        const users = await apiFetch('/admin/users');
        const container = document.getElementById('adminUsersTableBody');
        if (!container) return;
        
        container.innerHTML = users.map(u => `
            <tr>
                <td><strong>${u.name}</strong></td>
                <td>${u.email}</td>
                <td><span class="badge ${u.role === 'admin' ? 'badge-hard' : 'badge-easy'}">${u.role.toUpperCase()}</span></td>
                <td>${u.solved_count || 0} Solved</td>
                <td>${u.assessments_count || 0} Taken</td>
            </tr>
        `).join('');
    } catch (err) {
        console.error("Admin users load failed:", err);
    }
}
