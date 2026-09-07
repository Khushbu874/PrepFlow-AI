// PrepFlow AI - Contextual AI Tutor Chat Controller (with BYOK Groq API Key support)

const PREPFLOW_USER_GROQ_KEY = 'prepflow_user_groq_api_key';

let currentTopicContext = {
    topic_id: null,
    topic_title: "Binary Search",
    category_name: "Data Structures & Algorithms"
};

// -------------------------------------------------------------
// USER GROQ API KEY MANAGEMENT (LOCAL STORAGE / BYOK)
// -------------------------------------------------------------

function getUserGroqKey() {
    try {
        const savedKey = (localStorage.getItem(PREPFLOW_USER_GROQ_KEY) || '').trim();
        if (savedKey && savedKey.startsWith('gsk_')) {
            return savedKey;
        }

        const oldKey = (localStorage.getItem('prepflow_user_gemini_api_key') || '').trim();
        if (oldKey && oldKey.startsWith('gsk_')) {
            return oldKey;
        }

        return '';
    } catch (e) {
        return '';
    }
}

function handleGroqKeyInput() {
    const input = document.getElementById('userGroqKeyInput') || document.getElementById('userGeminiKeyInput');
    const notice = document.getElementById('aiKeyNoticeMsg');
    const saveText = document.getElementById('saveGroqKeyText');
    if (!input) return;

    const val = input.value.trim();
    const savedKey = getUserGroqKey();

    // If user has actively entered a new key different from saved:
    if (val && val !== savedKey) {
        if (saveText) saveText.innerText = 'Verify & Save';
        input.style.borderColor = 'var(--accent-amber)';

        if (notice) {
            notice.style.display = 'block';
            notice.style.background = 'rgba(245, 158, 11, 0.12)';
            notice.style.border = '1px solid rgba(245, 158, 11, 0.35)';
            notice.style.color = 'var(--accent-amber)';
            notice.innerHTML = 'Nayi key enter hui hai. Chat me use karne ke liye <strong>Verify & Save</strong> karein.';
        }
    } else if (val === savedKey && savedKey) {
        input.style.borderColor = 'var(--accent-green)';
        if (saveText) saveText.innerText = 'Active';
        if (notice) notice.style.display = 'none';
    }
}

function toggleKeyVisibility() {
    const input = document.getElementById('userGroqKeyInput') || document.getElementById('userGeminiKeyInput');
    const svg = document.getElementById('eyeSvgIcon');
    if (!input) return;
    if (input.type === 'password') {
        input.type = 'text';
        if (svg) {
            svg.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
        }
    } else {
        input.type = 'password';
        if (svg) {
            svg.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
        }
    }
}

async function saveUserGroqKey() {
    const input = document.getElementById('userGroqKeyInput') || document.getElementById('userGeminiKeyInput');
    const notice = document.getElementById('aiKeyNoticeMsg');
    const saveBtn = document.getElementById('saveGroqKeyBtn');
    const saveSpinner = document.getElementById('saveGroqKeySpinner');
    const saveText = document.getElementById('saveGroqKeyText');
    if (!input) return;

    const val = input.value.trim();
    if (!val) {
        if (notice) {
            notice.style.display = 'block';
            notice.style.background = 'rgba(244, 63, 94, 0.12)';
            notice.style.border = '1px solid rgba(244, 63, 94, 0.35)';
            notice.style.color = 'var(--accent-rose)';
            notice.innerHTML = 'Kripya Groq API key enter karein (starts with <code>gsk_</code>).';
        }
        input.focus();
        return;
    }

    if (!val.startsWith('gsk_')) {
        if (notice) {
            notice.style.display = 'block';
            notice.style.background = 'rgba(244, 63, 94, 0.12)';
            notice.style.border = '1px solid rgba(244, 63, 94, 0.35)';
            notice.style.color = 'var(--accent-rose)';
            notice.innerHTML = '<strong>Invalid Format:</strong> Groq API key hamesha <code>gsk_</code> se shuru hoti hai.<br><small style="opacity:0.9;">Groq Console (console.groq.com/keys) se copy karein.</small>';
        }
        input.style.borderColor = 'var(--accent-rose)';
        input.focus();
        return;
    }

    // UI Loading state - Live verification with Groq API
    if (saveBtn) saveBtn.disabled = true;
    if (saveSpinner) saveSpinner.style.display = 'inline-block';
    if (saveText) saveText.innerText = 'Checking...';
    if (notice) {
        notice.style.display = 'block';
        notice.style.background = 'rgba(59, 130, 246, 0.12)';
        notice.style.border = '1px solid rgba(59, 130, 246, 0.35)';
        notice.style.color = 'var(--accent-blue)';
        notice.innerHTML = '<strong>Live Checking:</strong> Groq servers ke sath key verify ho rahi hai...';
    }

    try {
        const resp = await apiFetch('/ai/verify-key', {
            method: 'POST',
            body: JSON.stringify({ api_key: val })
        });

        if (resp && resp.valid === true) {
            // Key is verified and actively responding!
            localStorage.setItem(PREPFLOW_USER_GROQ_KEY, val);
            localStorage.setItem('prepflow_user_groq_key_verified', 'true');
            updateKeyStatusUI();

            if (notice) {
                notice.style.display = 'block';
                notice.style.background = 'rgba(16, 185, 129, 0.15)';
                notice.style.border = '1px solid rgba(16, 185, 129, 0.4)';
                notice.style.color = 'var(--accent-green)';
                notice.innerHTML = '<strong>Verified & Active:</strong> Groq key confirmed working.';
            }
            if (saveText) saveText.innerText = 'Active';
            input.style.borderColor = 'var(--accent-green)';

            setTimeout(() => {
                toggleAPIKeySettings(false);
                if (notice) notice.style.display = 'none';
            }, 1200);
        } else {
            if (notice) {
                notice.style.display = 'block';
                notice.style.background = 'rgba(244, 63, 94, 0.15)';
                notice.style.border = '1px solid rgba(244, 63, 94, 0.4)';
                notice.style.color = 'var(--accent-rose)';
                const errMsg = resp.error || 'Groq ne is key ko reject kar diya. Key active nahi hai.';
                notice.innerHTML = `<strong>Verification Failed:</strong><br>${errMsg}`;
            }
            input.style.borderColor = 'var(--accent-rose)';
            input.focus();
        }
    } catch (e) {
        if (notice) {
            notice.style.display = 'block';
            notice.style.background = 'rgba(244, 63, 94, 0.15)';
            notice.style.border = '1px solid rgba(244, 63, 94, 0.4)';
            notice.style.color = 'var(--accent-rose)';
            notice.innerHTML = '<strong>Network Error:</strong> Key verify nahi ho payi. Backend connection check karein.';
        }
    } finally {
        if (saveBtn) saveBtn.disabled = false;
        if (saveSpinner) saveSpinner.style.display = 'none';
        if (saveText && saveText.innerText !== 'Active') saveText.innerText = 'Verify & Save';
    }
}

async function testActiveKeyStatus() {
    const key = getUserGroqKey();
    const notice = document.getElementById('aiKeyNoticeMsg');
    const testBtn = document.getElementById('testActiveKeyBtn');
    if (!key) return;

    if (testBtn) {
        testBtn.disabled = true;
        testBtn.innerText = 'Checking...';
    }
    if (notice) {
        notice.style.display = 'block';
        notice.style.background = 'rgba(59, 130, 246, 0.12)';
        notice.style.border = '1px solid rgba(59, 130, 246, 0.35)';
        notice.style.color = 'var(--accent-blue)';
        notice.innerHTML = 'Stored Groq key ki live active state check ho rahi hai...';
    }

    try {
        const resp = await apiFetch('/ai/verify-key', {
            method: 'POST',
            body: JSON.stringify({ api_key: key })
        });
        if (resp && resp.valid === true) {
            if (notice) {
                notice.style.background = 'rgba(16, 185, 129, 0.15)';
                notice.style.border = '1px solid rgba(16, 185, 129, 0.4)';
                notice.style.color = 'var(--accent-green)';
                notice.innerHTML = '<strong>Key Active Hai:</strong> Groq API server se successfully connected.';
            }
        } else {
            if (notice) {
                notice.style.background = 'rgba(244, 63, 94, 0.15)';
                notice.style.border = '1px solid rgba(244, 63, 94, 0.4)';
                notice.style.color = 'var(--accent-rose)';
                notice.innerHTML = `<strong>Key Inactive / Expired:</strong> ${resp.error || 'Please enter an active key.'}`;
            }
        }
    } catch (e) {
        if (notice) {
            notice.style.color = 'var(--accent-rose)';
            notice.innerHTML = 'Verification request fail ho gayi.';
        }
    } finally {
        if (testBtn) {
            testBtn.disabled = false;
            testBtn.innerText = 'Re-verify';
        }
    }
}

function removeUserGroqKey() {
    try {
        localStorage.removeItem(PREPFLOW_USER_GROQ_KEY);
        localStorage.removeItem('prepflow_user_groq_key_verified');
        localStorage.removeItem('prepflow_user_gemini_api_key');
        const input = document.getElementById('userGroqKeyInput') || document.getElementById('userGeminiKeyInput');
        if (input) {
            input.value = '';
            input.style.borderColor = 'var(--border-color)';
        }
        updateKeyStatusUI();
        const notice = document.getElementById('aiKeyNoticeMsg');
        if (notice) {
            notice.style.display = 'block';
            notice.style.background = 'rgba(255, 255, 255, 0.06)';
            notice.style.border = '1px solid var(--border-color)';
            notice.style.color = 'var(--text-muted)';
            notice.innerText = 'Groq API Key removed from browser storage.';
            setTimeout(() => { notice.style.display = 'none'; }, 2000);
        }
    } catch (e) {
        console.error(e);
    }
}

function toggleAPIKeySettings(forceState = null) {
    const drawer = document.getElementById('aiApiKeyDrawer');
    if (!drawer) return;

    const shouldShow = (forceState !== null) 
        ? forceState 
        : (drawer.style.display === 'none' || drawer.style.display === '');

    drawer.style.display = shouldShow ? 'block' : 'none';

    if (shouldShow) {
        const input = document.getElementById('userGroqKeyInput') || document.getElementById('userGeminiKeyInput');
        const key = getUserGroqKey();
        if (input) {
            input.value = key;
            input.style.borderColor = 'var(--border-color)';
            input.focus();
        }
    }
}

function updateKeyStatusUI() {
    const key = getUserGroqKey();
    const btn = document.getElementById('aiKeyStatusBtn');
    const text = document.getElementById('aiKeyStatusText');
    const removeBtn = document.getElementById('removeKeyBtn');
    const testBtn = document.getElementById('testActiveKeyBtn');
    const saveText = document.getElementById('saveGroqKeyText');
    const input = document.getElementById('userGroqKeyInput') || document.getElementById('userGeminiKeyInput');

    if (!btn || !text) return;

    if (key) {
        btn.className = 'ai-key-badge-btn connected';
        text.innerText = 'Groq Active';
        btn.title = 'Groq API Key active & verified. Click to edit or check status.';
        if (removeBtn) removeBtn.style.display = 'inline-block';
        if (testBtn) testBtn.style.display = 'inline-block';
        if (saveText) saveText.innerText = 'Active';
        if (input) {
            input.value = key;
            input.placeholder = 'Paste gsk_... key';
            input.style.borderColor = 'var(--accent-green)';
        }
    } else {
        btn.className = 'ai-key-badge-btn missing';
        text.innerText = 'Add Groq Key';
        btn.title = 'Add your free Groq API key to chat with AI';
        if (removeBtn) removeBtn.style.display = 'none';
        if (testBtn) testBtn.style.display = 'none';
        if (saveText) saveText.innerText = 'Verify & Save';
        if (input) {
            input.value = '';
            input.placeholder = 'Paste gsk_... key';
            input.style.borderColor = 'var(--border-color)';
        }
    }
}

// -------------------------------------------------------------
// PANEL COLLAPSE & EXPAND CONTROLS
// -------------------------------------------------------------

function toggleAIChat(forceState = null) {
    const aiPanel = document.getElementById('aiChatPanel');
    const backdrop = document.getElementById('aiBackdrop');
    if (!aiPanel) return;

    if (forceState !== null) {
        if (forceState) {
            aiPanel.classList.remove('collapsed');
            if (backdrop) backdrop.classList.add('active');
            updateKeyStatusUI();
        } else {
            aiPanel.classList.add('collapsed');
            if (backdrop) backdrop.classList.remove('active');
            toggleAPIKeySettings(false);
        }
    } else {
        const isCurrentlyCollapsed = aiPanel.classList.contains('collapsed');
        if (isCurrentlyCollapsed) {
            aiPanel.classList.remove('collapsed');
            if (backdrop) backdrop.classList.add('active');
            updateKeyStatusUI();
        } else {
            aiPanel.classList.add('collapsed');
            if (backdrop) backdrop.classList.remove('active');
            toggleAPIKeySettings(false);
        }
    }
}

function setAITopicContext(topicId, title, categoryName) {
    currentTopicContext.topic_id = topicId;
    currentTopicContext.topic_title = title;
    currentTopicContext.category_name = categoryName;
    
    const contextHeader = document.getElementById('aiTopicContextLabel');
    if (contextHeader) {
        contextHeader.innerText = `Context: ${title}`;
    }
}

// -------------------------------------------------------------
// SEND MESSAGE TO AI BACKEND PROXY (PASSING USER API KEY)
// -------------------------------------------------------------

async function sendAIMessage(actionType = 'chat', customPrompt = null) {
    const inputEl = document.getElementById('aiChatInput');
    const message = (inputEl ? inputEl.value.trim() : '');
    
    const actionDisplayMap = {
        explain_simple: "💡 Explain simply with an analogy",
        logic: "⚙️ Break down the core logic line-by-line",
        example: "📝 Show a step-by-step example",
        dry_run: "📊 Trace with a dry run table",
        interview: "🎯 Top interview questions & pitfalls",
        quiz_me: "❓ Quiz me on this topic"
    };

    const finalMessage = customPrompt || (actionType === 'chat' ? message : (message || actionDisplayMap[actionType] || 'Explain'));
    if (!finalMessage && actionType === 'chat') return;
    
    if (inputEl) inputEl.value = '';
    
    const chatBody = document.getElementById('aiChatBody');
    if (!chatBody) return;

    // 1. ALWAYS append User Message Bubble immediately
    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble chat-bubble-user';
    userBubble.innerText = finalMessage;
    chatBody.appendChild(userBubble);
    chatBody.scrollTop = chatBody.scrollHeight;
    
    // 2. Check if user has a verified API key
    const userApiKey = getUserGroqKey();
    if (!userApiKey) {
        toggleAPIKeySettings(true);
        const notice = document.getElementById('aiKeyNoticeMsg');
        const input = document.getElementById('userGroqKeyInput') || document.getElementById('userGeminiKeyInput');
        const hasEditedValue = input && input.value.trim();

        if (notice) {
            notice.style.display = 'block';
            notice.style.background = 'rgba(245, 158, 11, 0.12)';
            notice.style.border = '1px solid rgba(245, 158, 11, 0.35)';
            notice.style.color = 'var(--accent-amber)';
            notice.innerHTML = hasEditedValue 
                ? 'Key change hui hai par verify nahi hui hai. Pehle <strong>Verify & Save</strong> karein.'
                : 'Groq API Key Required: AI chat use karne ke liye pehle apni Groq key verify aur save karein.';
        }

        const aiBubble = document.createElement('div');
        aiBubble.className = 'chat-bubble chat-bubble-ai';
        aiBubble.innerHTML = hasEditedValue
            ? `<strong>Groq Key Unverified:</strong> Aapne key change ki hai par use abhi verify nahi kiya hai. Kripya drawer me <strong>Verify & Save</strong> par click karein.`
            : `<strong>Groq API Key Required:</strong> AI chat ke liye valid Groq key required hai. Kripya drawer me apni free key paste karke <strong>Verify & Save</strong> karein.`;
        chatBody.appendChild(aiBubble);
        chatBody.scrollTop = chatBody.scrollHeight;
        return;
    }
    
    // 3. Append AI Loading Bubble
    const aiBubble = document.createElement('div');
    aiBubble.className = 'chat-bubble chat-bubble-ai';
    aiBubble.innerHTML = `<em>PrepFlow AI is thinking...</em>`;
    chatBody.appendChild(aiBubble);
    
    chatBody.scrollTop = chatBody.scrollHeight;
    
    const user = (typeof getCurrentUser === 'function') ? getCurrentUser() : null;
    
    try {
        const data = await apiFetch('/ai/ask', {
            method: 'POST',
            body: JSON.stringify({
                user_id: user ? user.id : 'demo-user',
                topic_id: currentTopicContext.topic_id,
                topic_title: currentTopicContext.topic_title,
                category_name: currentTopicContext.category_name,
                message: finalMessage,
                action_type: actionType,
                user_api_key: userApiKey
            })
        });
        
        // Format response using centralized rendering engine
        const renderEngine = window.PrepFlowRender || PrepFlowRender;
        aiBubble.innerHTML = renderEngine.formatAIMessage(data.response);

        // ONLY open key drawer if user key is genuinely missing or rejected as 401 Unauthorized
        if (data.response && (data.response.includes('Groq API Key Unauthorized') || data.response.includes('Groq API Key Required'))) {
            toggleAPIKeySettings(true);
        }
        
    } catch (err) {
        aiBubble.innerHTML = `<span style="color:var(--accent-rose);">Sorry, unable to fetch AI response right now. Please check your network or API key.</span>`;
    }
    
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Expose functions globally
window.toggleAIChat = toggleAIChat;
window.setAITopicContext = setAITopicContext;
window.sendAIMessage = sendAIMessage;
window.toggleAPIKeySettings = toggleAPIKeySettings;
window.toggleKeyVisibility = toggleKeyVisibility;
window.saveUserGroqKey = saveUserGroqKey;
window.removeUserGroqKey = removeUserGroqKey;
window.handleGroqKeyInput = handleGroqKeyInput;
window.testActiveKeyStatus = testActiveKeyStatus;
window.saveUserGeminiKey = saveUserGroqKey; // backwards alias
window.removeUserGeminiKey = removeUserGroqKey; // backwards alias
window.updateKeyStatusUI = updateKeyStatusUI;

document.addEventListener('DOMContentLoaded', () => {
    updateKeyStatusUI();
});
