import json
import re
import httpx
from app.config import settings

def clean_ai_response(content: str) -> str:
    if not content:
        return ""
    # Fix common LLM pipe-substituted LaTeX typos (e.g. |text{ -> \text{, |forall -> \forall)
    cleaned = re.sub(r'\|(text|forall|exists|ge|le|geq|leq|iff|implies|in|times|cdot|log)\b', r'\\\1', content)
    # Fix double-escaped brackets
    cleaned = cleaned.replace(r'\\\[', r'\[').replace(r'\\\]', r'\]').replace(r'\\\(', r'\(').replace(r'\\\)', r'\)')
    return cleaned.strip()

class AIService:
    @staticmethod
    async def answer_topic_doubt(topic_title: str, category_name: str, message: str, action_type: str = "chat", section_content: str = "", user_api_key: str = "") -> str:
        """Provide context-aware AI tutor explanations with quick action prompt triggers and user BYOK API key."""
        # Custom prompt builder based on quick action buttons
        if action_type == "explain_simple":
            prompt = f"Explain the topic '{topic_title}' in simple, beginner-friendly terms with a clear real-world analogy."
        elif action_type == "example":
            prompt = f"Provide a practical, step-by-step example illustrating '{topic_title}'."
        elif action_type == "logic":
            prompt = f"Break down the core logic and algorithmic steps for '{topic_title}' line-by-line."
        elif action_type == "dry_run":
            prompt = f"Provide a complete table-based dry run of '{topic_title}' on a small sample input."
        elif action_type == "interview":
            prompt = f"What are the top 3 interview questions, edge cases, and pitfalls regarding '{topic_title}' that interviewers at top tech companies ask?"
        elif action_type == "quiz_me":
            prompt = f"Ask me a challenging interview-level question about '{topic_title}' to test my understanding."
        else:
            prompt = message

        system_context = (
            f"You are PrepFlow AI, an elite technical interview mentor and computer science tutor specializing in {category_name or 'Computer Science'}.\n"
            "Format your responses cleanly and professionally in Markdown:\n"
            "1. STRUCTURE: Use clear hierarchy with Markdown headings (###, ####), crisp bullet points, and short readable paragraphs. Avoid overwhelming walls of text.\n"
            "2. MATH & FORMULAS: For inline formulas and complexities, write clear standard notation like $O(N)$, $O(N \\log N)$, $O(1)$, or simple clean text. "
            "For standalone equations, use $$...$$ or standard clean lines. Prefer standard clean mathematical symbols (e.g. ≤, ≥, ∈, ∀, ∃, ⟺, ·, ²) where appropriate. "
            "Never output unescaped raw LaTeX brackets like \\[ or \\( or broken macro strings like |text{}.\n"
            "3. CODE SNIPPETS: When providing code, always wrap it in fenced code blocks with language tags (```python or ```java), and keep it clean, well-commented, and interview-ready.\n"
            "4. PEDAGOGY: Answer directly and concisely. Provide intuition/analogy first, formal definition/logic second, and practical example/edge cases last.\n"
            "5. VISUAL & GRAPHICAL EXPLANATIONS: When the user asks for a graph, curve, or visual explanation of Time or Space Complexity (e.g. O(1), O(log n), O(n), O(n log n), O(n²), or Big-O comparisons): Tag your graph block with ```graph:O(n) (or ```graph:O(1), ```graph:O(log n), ```graph:O(n^2), ```graph:comparison) so the app automatically renders an interactive, high-resolution SVG vector curve directly in the chat! Also provide a clear numerical growth table (e.g. N=1, 10, 100, 1000) and 2-3 crisp bullet points explaining the slope and real-world intuition. NEVER output quickchart.io or broken external image links.\n"
            "6. LANGUAGE & TONE: If the user communicates in Hindi or Hinglish (e.g., 'mujhe graphical way me samjhao', 'ek ek karke pucho'), respond naturally in clear, conversational Hinglish while keeping core technical terms (Time Complexity, Upper Bound, Worst Case, etc.) in English."
        )
        
        # Strictly user-provided Groq API key only (NO default server key used)
        active_groq_key = user_api_key.strip() if user_api_key else ""

        # 1. If user provided a Groq key, call Groq OpenAI-compatible API
        if active_groq_key:
            # Dynamically discover currently active chat models for this specific Groq key
            candidate_models = await AIService.get_active_groq_models(active_groq_key)

            url = "https://api.groq.com/openai/v1/chat/completions"
            headers = {
                "Authorization": f"Bearer {active_groq_key}",
                "Content-Type": "application/json"
            }

            last_error_msg = ""
            for model_name in candidate_models:
                try:
                    payload = {
                        "model": model_name,
                        "messages": [
                            {"role": "system", "content": system_context},
                            {"role": "user", "content": f"Context Topic: {topic_title}\nContext Section: {section_content[:500]}\n\nUser Question: {prompt}"}
                        ],
                        "temperature": 0.7,
                        "max_tokens": 1024
                    }
                    async with httpx.AsyncClient(timeout=25.0) as client:
                        resp = await client.post(url, headers=headers, json=payload)
                        if resp.status_code == 200:
                            data = resp.json()
                            choices = data.get("choices", [])
                            if choices and "message" in choices[0]:
                                raw_msg = choices[0]["message"].get("content", "")
                                print(f"✅ [Groq Response Received] from model: {model_name}")
                                return clean_ai_response(raw_msg)
                            return "Sorry, no response was generated. Please try asking again."
                        elif resp.status_code == 401:
                            return "⚠️ **Groq API Key Unauthorized:** The provided Groq API key was rejected by Groq (401 Unauthorized). Please check or generate a new key from [Groq Console](https://console.groq.com/keys)."
                        elif resp.status_code == 429:
                            print(f"[Groq Rate Limit] Model {model_name} rate limited (429). Trying next candidate...")
                            last_error_msg = f"Model {model_name} rate limited (429)."
                            continue
                        
                        # Inspect error response
                        err_json = resp.json() if resp.headers.get("content-type", "").startswith("application/json") else {}
                        err_msg = err_json.get("error", {}).get("message", f"Status {resp.status_code}")
                        last_error_msg = f"{model_name}: {err_msg}"
                        print(f"[Groq Model Skip] {model_name} error (status {resp.status_code}): {err_msg}. Trying next candidate...")
                        continue

                except httpx.TimeoutException:
                    print(f"[Groq Timeout] {model_name} timed out. Trying next candidate...")
                    last_error_msg = f"{model_name} timed out"
                    continue
                except Exception as e:
                    print(f"[AI Service Error] Groq call failed for {model_name}: {e}")
                    last_error_msg = str(e)
                    continue

            # If all Groq candidate models failed, report the actual issue clearly
            print(f"[Groq Failure] All candidate models failed. Last error: {last_error_msg}")
            return (
                f"⚠️ **Groq Service Notice:** Model request could not be completed.\n\n"
                f"**Details:** {last_error_msg}\n\n"
                f"Please verify available models for your account at [Groq Console](https://console.groq.com/playground)."
            )

        # 2. If no user key provided at all:
        return (
            "**Groq API Key Required**\n\n"
            "AI chat use karne ke liye aapko apna free Groq API key verify aur save karna hoga:\n\n"
            "1. Panel ke upar **Add Groq Key** button par click karein.\n"
            "2. [Groq Console](https://console.groq.com/keys) se free key copy karein (starts with `gsk_`).\n"
            "3. Key paste karke **Verify & Save** karein."
        )

    @staticmethod
    def _get_fallback_response(topic_title: str, action_type: str, prompt: str) -> str:
        if action_type == "explain_simple":
            return (
                f"### 💡 Simple Explanation of {topic_title}\n"
                f"**{topic_title}** is a fundamental concept in Computer Science. "
                f"It provides a structured way to evaluate efficiency and optimize system behavior.\n\n"
                f"Think of it like choosing the right transportation: some methods are fast for short trips, "
                f"while others scale efficiently over massive distances."
            )
        elif action_type == "example":
            return (
                f"### 📝 Step-by-Step Example for {topic_title}\n"
                f"When working with **{topic_title}**, analyze how operations scale as input size $N$ grows:\n"
                f"1. **Base Case / Small Input**: Direct constant time or single step.\n"
                f"2. **Iteration / Recurrence**: How each subsequent step depends on previous operations.\n"
                f"3. **Termination**: The final computed bound or result."
            )
        elif action_type == "logic":
            return (
                f"### ⚙️ Core Logic for {topic_title}\n"
                f"1. **Identify the Invariant**: What property holds true across every step of {topic_title}?\n"
                f"2. **State Transition**: How does the algorithm progress from state $S_i$ to $S_{{i+1}}$?\n"
                f"3. **Bounding**: Determine the upper bound ($O$) and lower bound ($\Omega$) constraints."
            )
        elif action_type == "dry_run":
            return (
                f"### 📊 Analysis Table for {topic_title}\n"
                f"| Input Size $N$ | Operations Count | Growth Rate | Classification |\n"
                f"|---|---|---|---|\n"
                f"| 10 | ~10 | Linear | $O(N)$ |\n"
                f"| 1,000 | ~1,000 | Linear | $O(N)$ |\n"
                f"| 1,000,000 | ~1,000,000 | Linear | $O(N)$ |"
            )
        elif action_type == "interview":
            return (
                f"### 🎯 Top Interview Insights on {topic_title}\n"
                f"1. **Common Trap**: Confusing Worst-case ($O$) with Average-case ($\Theta$).\n"
                f"2. **Hidden Constants**: Lower-order terms and coefficients ignored in asymptotic notation.\n"
                f"3. **Space vs Time Trade-off**: Can extra memory reduce execution time?"
            )
        elif action_type == "quiz_me":
            return (
                f"### ❓ Quick Quiz Question on {topic_title}\n"
                f"Explain how **{topic_title}** behaves in technical interviews: What is the difference between best-case, average-case, and worst-case bounds for this concept?"
            )
        else:
            return f"Regarding **{topic_title}**: Focus on the core algorithmic steps, computational bounds, and edge cases commonly tested in technical interviews."

    @staticmethod
    async def generate_structured_content_blocks(topic_name: str, category_name: str, difficulty: str) -> list:
        """Generate structured block array drafts for Admin approval."""
        blocks = [
            {
                "block_type": "explanation",
                "content": f"### Introduction to {topic_name}\n**{topic_name}** is a core concept in {category_name}. Understanding this concept thoroughly is crucial for clearing technical interviews at product-based companies.",
                "metadata": {}
            },
            {
                "block_type": "concept",
                "content": f"**Key Takeaway**: Always identify the fundamental invariants and edge cases when working with {topic_name}.",
                "metadata": {"callout_type": "important"}
            },
            {
                "block_type": "code",
                "content": f"# Code Example for {topic_name}\ndef solve_{topic_name.lower().replace(' ', '_')}(data):\n    # Initialize parameters\n    res = []\n    print(f'Processing {topic_name}')\n    return res\n\nprint(solve_{topic_name.lower().replace(' ', '_')}([1, 2, 3]))",
                "metadata": {"language": "python"}
            },
            {
                "block_type": "diagram",
                "content": f"graph TD\n    Start[Start {topic_name}] --> Process[Process Core Logic]\n    Process --> Condition{{Validate Invariant}}\n    Condition -->|Valid| Success[Return Result]\n    Condition -->|Invalid| Fallback[Handle Edge Case]",
                "metadata": {"diagram_type": "mermaid"}
            },
            {
                "block_type": "complexity",
                "content": "Time Complexity: **O(N)**\nSpace Complexity: **O(1)**",
                "metadata": {"time": "O(N)", "space": "O(1)"}
            },
            {
                "block_type": "mistakes",
                "content": "1. Neglecting off-by-one errors in boundary conditions.\n2. Failing to handle null or empty inputs gracefully.",
                "metadata": {}
            }
        ]
        return blocks

    @staticmethod
    async def get_active_groq_models(api_key: str) -> list:
        """Fetch the exact list of active chat models supported by the user's specific Groq key."""
        try:
            url = "https://api.groq.com/openai/v1/models"
            headers = {"Authorization": f"Bearer {api_key}"}
            async with httpx.AsyncClient(timeout=6.0) as client:
                resp = await client.get(url, headers=headers)
                if resp.status_code == 200:
                    raw_models = resp.json().get("data", [])
                    all_ids = [m.get("id") for m in raw_models if m.get("id")]
                    print(f"[Groq Live Available Models]: {all_ids}")

                    # Filter out non-chat / specialized models (audio, moderation, embeddings, tts, vision-only)
                    non_chat_keywords = [
                        "whisper", "orpheus", "playai", "tts", "audio", 
                        "guard", "moderation", "safeguard", 
                        "embed", "bge", "canopylabs"
                    ]
                    chat_models = [
                        mid for mid in all_ids 
                        if not any(kw in mid.lower() for kw in non_chat_keywords)
                    ]

                    # Priority order for active, high-performance chat models on Groq:
                    priority = [
                        "openai/gpt-oss-120b",
                        "openai/gpt-oss-20b",
                        "groq/compound",
                        "groq/compound-mini",
                        "qwen/qwen3.6-27b",
                        "llama-3.3-70b-versatile",
                        "llama-3.1-8b-instant",
                        "llama-3.2-3b-preview",
                        "llama-3.2-1b-preview",
                        "qwen-2.5-32b",
                        "deepseek-r1-distill-llama-70b"
                    ]

                    ordered = [m for m in priority if m in chat_models]
                    # Append any remaining chat models from user account
                    for m in chat_models:
                        if m not in ordered:
                            ordered.append(m)

                    if ordered:
                        print(f"[Groq Selected Chat Candidates]: {ordered}")
                        return ordered
        except Exception as e:
            print(f"[Groq Model Discovery] Failed to fetch live models: {e}")

        # Safe production fallbacks (only active models, no decommissioned models)
        return [
            "openai/gpt-oss-120b",
            "openai/gpt-oss-20b",
            "groq/compound",
            "groq/compound-mini",
            "qwen/qwen3.6-27b",
            "llama-3.3-70b-versatile",
            "llama-3.1-8b-instant"
        ]

    @staticmethod
    async def verify_groq_key(api_key: str) -> dict:
        """Verify if a Groq API key is valid, authentic, and currently active in real-time."""
        key = (api_key or "").strip()
        if not key:
            return {"valid": False, "status": "missing", "error": "API Key cannot be empty."}
        
        if not key.startswith("gsk_"):
            return {
                "valid": False, 
                "status": "invalid_format", 
                "error": "Invalid format: Groq API key must start with 'gsk_' (copy it from console.groq.com/keys)."
            }

        try:
            url = "https://api.groq.com/openai/v1/models"
            headers = {
                "Authorization": f"Bearer {key}",
                "Content-Type": "application/json"
            }
            async with httpx.AsyncClient(timeout=8.0) as client:
                resp = await client.get(url, headers=headers)
                if resp.status_code == 200:
                    return {
                        "valid": True,
                        "status": "active",
                        "message": "Groq API Key verified & active!"
                    }
                elif resp.status_code == 401:
                    return {
                        "valid": False,
                        "status": "unauthorized",
                        "error": "Key is invalid or inactive (401 Unauthorized). Groq ne is key ko reject kar diya. Kripya Groq Console se new active key banayein."
                    }
                elif resp.status_code == 403:
                    return {
                        "valid": False,
                        "status": "forbidden",
                        "error": "Groq access forbidden (403). Is key ke permissions restricted hain."
                    }
                elif resp.status_code == 429:
                    return {
                        "valid": False,
                        "status": "rate_limited",
                        "error": "Groq rate limit reach ho chuka hai (429). Kripya thoda wait karein ya new key banayein."
                    }
                else:
                    err_data = resp.json() if resp.headers.get("content-type", "").startswith("application/json") else {}
                    err_msg = err_data.get("error", {}).get("message", f"HTTP {resp.status_code}")
                    return {
                        "valid": False,
                        "status": "rejected",
                        "error": f"Groq verification failed ({resp.status_code}): {err_msg}"
                    }
        except httpx.TimeoutException:
            return {
                "valid": False,
                "status": "timeout",
                "error": "Groq server connection timeout ho gaya. Kripya internet check karein aur dobara try karein."
            }
        except Exception as e:
            return {
                "valid": False,
                "status": "error",
                "error": f"Verification error: {str(e)}"
            }
