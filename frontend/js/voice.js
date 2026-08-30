// PrepFlow AI - Voice Learning (Text-to-Speech) Controller

class VoiceController {
    constructor() {
        this.synth = window.speechSynthesis;
        this.utterance = null;
        this.isPlaying = false;
        this.isPaused = false;
        this.currentSpeed = 1.0;
    }

    speak(text) {
        if (!this.synth) {
            alert("Text-to-Speech is not supported in this browser.");
            return;
        }

        if (this.isPaused) {
            this.synth.resume();
            this.isPaused = false;
            this.isPlaying = true;
            this.updateVoiceUI();
            return;
        }

        this.stop();

        // Strip HTML tags for smooth audio reading
        const plainText = text.replace(/<[^>]*>?/gm, '').replace(/```[\s\S]*?```/g, 'Code block omitted.');
        
        this.utterance = new SpeechSynthesisUtterance(plainText);
        this.utterance.rate = this.currentSpeed;
        this.utterance.pitch = 1.0;
        
        this.utterance.onend = () => {
            this.isPlaying = false;
            this.isPaused = false;
            this.updateVoiceUI();
        };

        this.utterance.onerror = (e) => {
            console.error("SpeechSynthesis error:", e);
            this.isPlaying = false;
            this.isPaused = false;
            this.updateVoiceUI();
        };

        this.synth.speak(this.utterance);
        this.isPlaying = true;
        this.updateVoiceUI();
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
            this.synth.cancel();
            this.isPlaying = false;
            this.isPaused = false;
            this.updateVoiceUI();
        }
    }

    setSpeed(speed) {
        this.currentSpeed = parseFloat(speed);
        if (this.isPlaying && this.utterance) {
            // Restart with new rate
            const currentText = this.utterance.text;
            this.stop();
            this.speak(currentText);
        }
    }

    updateVoiceUI() {
        const btnPlay = document.getElementById('voicePlayBtn');
        const btnPause = document.getElementById('voicePauseBtn');
        const btnStop = document.getElementById('voiceStopBtn');
        const wave = document.getElementById('voiceWaveIndicator');

        if (btnPlay) btnPlay.style.display = this.isPlaying ? 'none' : 'inline-flex';
        if (btnPause) btnPause.style.display = this.isPlaying ? 'inline-flex' : 'none';
        if (wave) wave.style.display = (this.isPlaying || this.isPaused) ? 'inline-block' : 'none';
    }
}

const voiceEngine = new VoiceController();
