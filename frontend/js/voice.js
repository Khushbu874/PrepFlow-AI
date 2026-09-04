// PrepFlow AI - Voice Learning Controller with Sentence Offset Continuation on Speed Change

class VoiceController {
    constructor() {
        this.synth = window.speechSynthesis;
        this.utterance = null;
        this.isPlaying = false;
        this.isPaused = false;
        this.isChangingSpeed = false;
        this.showSpeedMenu = false;
        
        // Saved speed or default 1.0x
        const savedSpeed = parseFloat(localStorage.getItem('prepflow_voice_speed') || '1.0');
        this.currentSpeed = [1.0, 1.25, 1.5, 2.0].includes(savedSpeed) ? savedSpeed : 1.0;
        
        this.currentTopicTitle = "";
        this.currentRawText = "";
        this.currentCleanText = "";
        this.currentCharIndex = 0;
        this.lastSpokenCharOffset = 0;

        // Close speed popover when clicking outside
        document.addEventListener('click', (e) => {
            const popover = document.getElementById('voiceSpeedPopover');
            const menuBtn = document.getElementById('voiceSpeedMenuBtn');
            if (this.showSpeedMenu && popover && menuBtn) {
                if (!popover.contains(e.target) && !menuBtn.contains(e.target)) {
                    this.showSpeedMenu = false;
                    this.updateVoiceUI();
                }
            }
        });
    }

    cleanTextForSpeech(text) {
        if (!text) return "";
        let clean = text;
        
        // 1. Remove code blocks completely
        clean = clean.replace(/```[\s\S]*?```/g, ' Code example omitted. ');
        clean = clean.replace(/`([^`]+)`/g, '$1');
        
        // 2. Remove HTML tags
        clean = clean.replace(/<[^>]*>?/gm, '');
        
        // 3. Remove Markdown headings (#, ##, ###)
        clean = clean.replace(/^#{1,6}\s+/gm, '');
        
        // 4. Remove Markdown formatting symbols (*, **, _, __, ~~)
        clean = clean.replace(/(\*\*|__|\*|_|~~)/g, '');
        
        // 5. Remove Markdown links [text](url) -> text
        clean = clean.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
        
        // 6. Remove bullet points (*, -, +)
        clean = clean.replace(/^[\*\-\+]\s+/gm, '');
        
        // 7. Remove blockquotes and horizontal rules
        clean = clean.replace(/^>\s+/gm, '');
        clean = clean.replace(/^[\-\*_]{3,}\s*$/gm, '');
        
        // 8. Remove special table symbols (|)
        clean = clean.replace(/\|/g, ' ');
        
        // 9. Convert newlines to sentence breaks & normalize spaces
        clean = clean.replace(/\n+/g, '. ');
        clean = clean.replace(/\s+/g, ' ').trim();
        
        return clean;
    }

    speak(text, topicTitle = "", startFromOffset = false) {
        if (!this.synth) {
            alert("Text-to-Speech is not supported in this browser.");
            return;
        }

        if (text) {
            this.currentRawText = text;
            this.currentCleanText = this.cleanTextForSpeech(text);
        }
        if (topicTitle) {
            this.currentTopicTitle = topicTitle;
        }

        if (this.isPaused) {
            this.synth.resume();
            this.isPaused = false;
            this.isPlaying = true;
            this.updateVoiceUI();
            return;
        }

        if (!startFromOffset) {
            this.currentCharIndex = 0;
            this.lastSpokenCharOffset = 0;
        }

        const textToSpeak = this.currentCleanText.slice(this.lastSpokenCharOffset);
        if (!textToSpeak.trim()) {
            this.currentCharIndex = 0;
            this.lastSpokenCharOffset = 0;
            this.isPlaying = false;
            this.isPaused = false;
            this.updateVoiceUI();
            return;
        }

        this.isChangingSpeed = true;
        this.synth.cancel();

        setTimeout(() => {
            this.isChangingSpeed = false;
            
            this.utterance = new SpeechSynthesisUtterance(textToSpeak);
            this.utterance.rate = this.currentSpeed;
            this.utterance.pitch = 1.0;
            
            // Track exact word boundary character offset
            this.utterance.onboundary = (e) => {
                if (e.charIndex !== undefined) {
                    this.currentCharIndex = this.lastSpokenCharOffset + e.charIndex;
                }
            };

            this.utterance.onend = () => {
                if (this.isChangingSpeed) return;
                this.isPlaying = false;
                this.isPaused = false;
                this.currentCharIndex = 0;
                this.lastSpokenCharOffset = 0;
                this.updateVoiceUI();
            };

            this.utterance.onerror = (e) => {
                if (this.isChangingSpeed) return;
                console.error("SpeechSynthesis error:", e);
                this.isPlaying = false;
                this.isPaused = false;
                this.updateVoiceUI();
            };

            this.synth.speak(this.utterance);
            this.isPlaying = true;
            this.isPaused = false;
            this.updateVoiceUI();
        }, 50);
    }

    pause() {
        if (this.synth && this.isPlaying) {
            this.synth.pause();
            this.isPaused = true;
            this.isPlaying = false;
            this.updateVoiceUI();
        }
    }

    stop() {
        if (this.synth) {
            this.isChangingSpeed = false;
            this.synth.cancel();
            this.isPlaying = false;
            this.isPaused = false;
            this.showSpeedMenu = false;
            this.currentCharIndex = 0;
            this.lastSpokenCharOffset = 0;
            this.updateVoiceUI();
        }
    }

    togglePlayPause(text, title) {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.speak(text, title);
        }
    }

    toggleSpeedMenu(e) {
        if (e) e.stopPropagation();
        this.showSpeedMenu = !this.showSpeedMenu;
        this.updateVoiceUI();
    }

    setSpeed(speed) {
        this.currentSpeed = parseFloat(speed);
        localStorage.setItem('prepflow_voice_speed', this.currentSpeed.toString());
        this.showSpeedMenu = false;

        // Lock in current character position so we resume from exact same sentence
        this.lastSpokenCharOffset = this.currentCharIndex;

        if (this.isPlaying || this.isPaused) {
            this.speak(null, null, true);
        } else {
            this.updateVoiceUI();
        }
    }

    updateVoiceUI() {
        // 1. Update Header Button Status (Clean text, no emoji)
        const headerBtn = document.getElementById('voiceHeaderBtn');
        if (headerBtn) {
            if (this.isPlaying) {
                headerBtn.innerText = `Pause Audio`;
                headerBtn.classList.remove('btn-outline');
                headerBtn.classList.add('btn-primary');
            } else if (this.isPaused) {
                headerBtn.innerText = `Resume Audio`;
                headerBtn.classList.remove('btn-outline');
                headerBtn.classList.add('btn-primary');
            } else {
                headerBtn.innerText = `Listen Audio`;
                headerBtn.classList.remove('btn-primary');
                headerBtn.classList.add('btn-outline');
            }
        }

        // 2. Render or Update Floating Sticky Player Widget
        let stickyPlayer = document.getElementById('voiceStickyPlayer');
        
        if (!stickyPlayer) {
            stickyPlayer = document.createElement('div');
            stickyPlayer.id = 'voiceStickyPlayer';
            stickyPlayer.className = 'voice-floating-player';
            document.body.appendChild(stickyPlayer);
        }

        if (this.isPlaying || this.isPaused) {
            stickyPlayer.style.display = 'flex';
            stickyPlayer.innerHTML = `
                <div class="voice-floating-info">
                    <span class="voice-equalizer ${this.isPlaying ? 'active' : ''}">
                        <span></span><span></span><span></span>
                    </span>
                    <div style="min-width:0;">
                        <div class="voice-floating-label">${this.isPlaying ? 'Now Reading' : 'Audio Paused'}</div>
                        <div class="voice-floating-title">${this.currentTopicTitle || 'Lesson Audio'}</div>
                    </div>
                </div>
                <div class="voice-floating-actions" style="position:relative;">
                    <button onclick="voiceEngine.togglePlayPause()" class="btn btn-sm btn-primary voice-round-btn" title="${this.isPlaying ? 'Pause' : 'Play'}">
                        ${this.isPlaying ? '⏸' : '▶'}
                    </button>
                    <button onclick="voiceEngine.stop()" class="btn btn-sm btn-outline voice-round-btn" title="Stop Audio">
                        ⏹
                    </button>
                    
                    <button id="voiceSpeedMenuBtn" onclick="voiceEngine.toggleSpeedMenu(event)" class="voice-speed-pill-btn" title="Speed Menu">
                        ${this.currentSpeed}x ▾
                    </button>

                    ${this.showSpeedMenu ? `
                        <div class="voice-speed-popover" id="voiceSpeedPopover">
                            <div class="speed-popover-header">Playback Speed</div>
                            <div class="speed-option ${this.currentSpeed === 1.0 ? 'active' : ''}" onclick="voiceEngine.setSpeed(1.0)">1.0x (Normal)</div>
                            <div class="speed-option ${this.currentSpeed === 1.25 ? 'active' : ''}" onclick="voiceEngine.setSpeed(1.25)">1.25x</div>
                            <div class="speed-option ${this.currentSpeed === 1.5 ? 'active' : ''}" onclick="voiceEngine.setSpeed(1.5)">1.5x</div>
                            <div class="speed-option ${this.currentSpeed === 2.0 ? 'active' : ''}" onclick="voiceEngine.setSpeed(2.0)">2.0x</div>
                        </div>
                    ` : ''}

                    <button onclick="voiceEngine.stop()" class="voice-close-btn" title="Close Player">✕</button>
                </div>
            `;
        } else {
            stickyPlayer.style.display = 'none';
        }
    }
}

const voiceEngine = new VoiceController();
