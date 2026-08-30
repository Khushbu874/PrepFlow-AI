// PrepFlow AI - Contextual AI Tutor Chat Controller

let currentTopicContext = {
    topic_id: null,
    topic_title: "Binary Search",
    category_name: "Data Structures & Algorithms"
};

function toggleAIChat(forceState = null) {
    const aiPanel = document.getElementById('aiChatPanel');
    const backdrop = document.getElementById('aiBackdrop');
    if (!aiPanel) return;

    if (forceState !== null) {
        if (forceState) {
            aiPanel.classList.remove('collapsed');
            if (backdrop) backdrop.classList.add('active');
        } else {
            aiPanel.classList.add('collapsed');
            if (backdrop) backdrop.classList.remove('active');
        }
    } else {
        const isCurrentlyCollapsed = aiPanel.classList.contains('collapsed');
        if (isCurrentlyCollapsed) {
            aiPanel.classList.remove('collapsed');
            if (backdrop) backdrop.classList.add('active');
        } else {
            aiPanel.classList.add('collapsed');
            if (backdrop) backdrop.classList.remove('active');
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

async function sendAIMessage(actionType = 'chat', customPrompt = null) {
    const inputEl = document.getElementById('aiChatInput');
    const message = customPrompt || (inputEl ? inputEl.value.trim() : '');
    
    if (!message && actionType === 'chat') return;
    
    if (inputEl) inputEl.value = '';
    
    const chatBody = document.getElementById('aiChatBody');
    if (!chatBody) return;
    
    // Append User Bubble
    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble chat-bubble-user';
    userBubble.innerText = customPrompt || message;
    chatBody.appendChild(userBubble);
    
    // Append AI Loading Bubble
    const aiBubble = document.createElement('div');
    aiBubble.className = 'chat-bubble chat-bubble-ai';
    aiBubble.innerHTML = `<em>PrepFlow AI is thinking...</em>`;
    chatBody.appendChild(aiBubble);
    
    chatBody.scrollTop = chatBody.scrollHeight;
    
    const user = getCurrentUser();
    
    try {
        const data = await apiFetch('/ai/ask', {
            method: 'POST',
            body: JSON.stringify({
                user_id: user ? user.id : 'demo-user',
                topic_id: currentTopicContext.topic_id,
                topic_title: currentTopicContext.topic_title,
                category_name: currentTopicContext.category_name,
                message: message,
                action_type: actionType
            })
        });
        
        // Format response using centralized rendering engine
        const renderEngine = window.PrepFlowRender || PrepFlowRender;
        aiBubble.innerHTML = renderEngine.formatAIMessage(data.response);
        
        // Speak AI response if voice enabled
        // voiceEngine.speak(data.response);
        
    } catch (err) {
        aiBubble.innerHTML = `<span style="color:var(--accent-rose);">Sorry, unable to fetch AI response right now.</span>`;
    }
    
    chatBody.scrollTop = chatBody.scrollHeight;
}
