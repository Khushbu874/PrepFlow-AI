import json
import httpx
from app.config import settings

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

        system_context = f"You are PrepFlow AI, an expert interview coach and tutor specializing in {category_name or 'Computer Science'}. Provide structured, clear, and high-quality explanations."
        
        # Strictly user-provided Groq API key only (NO default server key used)
        active_groq_key = user_api_key.strip() if user_api_key else ""

        # 1. If user provided a Groq key, call Groq OpenAI-compatible API
        if active_groq_key:
            # Dynamically discover currently active models for this specific Groq key
            candidate_models = await AIService.get_active_groq_models(active_groq_key)

            url = "https://api.groq.com/openai/v1/chat/completions"
            headers = {
                "Authorization": f"Bearer {active_groq_key}",
                "Content-Type": "application/json"
            }

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
                    async with httpx.AsyncClient(timeout=18.0) as client:
                        resp = await client.post(url, headers=headers, json=payload)
                        if resp.status_code == 200:
                            data = resp.json()
                            choices = data.get("choices", [])
                            if choices and "message" in choices[0]:
                                return choices[0]["message"].get("content", "")
                            return "Sorry, no response was generated. Please try asking again."
                        elif resp.status_code == 401:
                            return "⚠️ **Groq API Key Invalid:** The provided Groq API key is invalid or unauthorized. Please verify your key from [Groq Console](https://console.groq.com/keys)."
                        elif resp.status_code == 429:
                            return "⚠️ **Groq Rate Limit Exceeded:** Your Groq free tier limit was reached. Please wait a few seconds and try again."
                        
                        # Inspect error response
                        err_json = resp.json() if resp.headers.get("content-type", "").startswith("application/json") else {}
                        err_msg = err_json.get("error", {}).get("message", "")
                        err_lower = err_msg.lower()

                        # If model is deprecated, decommissioned, unavailable, or restricted, auto-failover to next candidate
                        is_model_issue = (
                            resp.status_code == 404 or 
                            any(k in err_lower for k in [
                                "does not exist", "do not have access", "decommissioned", 
                                "deprecated", "not found", "no longer supported", "invalid model"
                            ])
                        )
                        if is_model_issue:
                            print(f"[Groq Model Fallback] {model_name} issue: {err_msg}. Trying next candidate...")
                            continue
                        else:
                            return f"⚠️ **Groq Error:** {err_msg or f'Status {resp.status_code}'}\n\nPlease verify your API key in Groq Key settings."
                except httpx.TimeoutException:
                    continue
                except Exception as e:
                    print(f"[AI Service Error] Groq call failed for {model_name}: {e}")
                    continue

            # If all Groq candidate models failed or key is rejected:
            return (
                "⚠️ **Groq API Key Invalid / Inactive:** "
                "Provided Groq API key authenticate nahi ho pa rahi hai. "
                "Kripya **Groq Key** settings me jaakar active key enter aur verify karein."
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
            return f"### 💡 Simple Explanation of {topic_title}\nThink of **{topic_title}** like searching for a word in a dictionary. Instead of checking page 1, 2, 3 sequentially, you open to the middle, decide if your target is before or after, and eliminate half the book instantly!\n\nThis logarithmic halving is why it scales effortlessly to millions of records."
        elif action_type == "example":
            return f"### 📝 Step-by-Step Example for {topic_title}\nLet's trace array `[2, 4, 6, 8, 10, 12]` searching for `8`:\n1. `low = 0`, `high = 5`, `mid = 2` -> `nums[mid] = 6`.\n2. `6 < 8`, so we narrow search to indices `[3..5]`.\n3. `low = 3`, `high = 5`, `mid = 4` -> `nums[mid] = 10`.\n4. `10 > 8`, so we narrow search to index `[3]`.\n5. `low = 3`, `high = 3`, `mid = 3` -> `nums[mid] = 8` -> **Match Found!**"
        elif action_type == "logic":
            return f"### ⚙️ Core Logic for {topic_title}\n1. **Invariant**: Maintain search bounds `[low, high]` containing candidate solutions.\n2. **Calculation**: Compute `mid = low + (high - low) // 2` to prevent overflow.\n3. **Decision Branch**: Check condition on `mid` to determine which half to discard.\n4. **Termination**: Loop until `low > high` or target is found."
        elif action_type == "dry_run":
            return f"### 📊 Dry Run Table for {topic_title}\n| Iteration | low | high | mid | Element | Condition | Action |\n|---|---|---|---|---|---|---|\n| 1 | 0 | 5 | 2 | 5 | 5 < 7 | Set low = 3 |\n| 2 | 3 | 5 | 4 | 9 | 9 > 7 | Set high = 3 |\n| 3 | 3 | 3 | 3 | 7 | 7 == 7 | Return index 3 |"
        elif action_type == "interview":
            return f"### 🎯 Top Interview Insights on {topic_title}\n1. **Integer Overflow Bug**: Always calculate `low + (high - low) // 2` instead of `(low + high) // 2`.\n2. **Rotated Sorted Array Variation**: Watch out for rotated arrays where one half remains strictly sorted.\n3. **Search Space Reduction**: Binary search isn't limited to arrays — it works on any monotonic range!"
        elif action_type == "quiz_me":
            return f"### ❓ Quick Quiz Question on {topic_title}\nWhat is the time complexity of performing Binary Search on a doubly-linked list of N elements? Explain why it differs from a contiguous array."
        else:
            return f"Great question regarding **{topic_title}**! In technical interviews, master the core invariants and edge cases. For instance, always double-check loop boundary conditions (`low <= high`) and ensure zero infinite loops when shifting `low` or `high` boundaries."

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
            async with httpx.AsyncClient(timeout=5.0) as client:
                resp = await client.get(url, headers=headers)
                if resp.status_code == 200:
                    raw_models = resp.json().get("data", [])
                    available_ids = [m.get("id") for m in raw_models if m.get("id") and m.get("active", True)]
                    
                    # Preferred priority list of high-performance chat models
                    preferred = [
                        "llama-3.1-8b-instant",
                        "llama-3.3-70b-versatile",
                        "llama-3.2-3b-preview",
                        "llama-3.2-1b-preview",
                        "deepseek-r1-distill-llama-70b",
                        "qwen-2.5-32b",
                        "gemma2-9b-it",
                        "mixtral-8x7b-32768"
                    ]
                    
                    ordered = [m for m in preferred if m in available_ids]
                    # Append any other text models from user account (excluding whisper/guard/embed)
                    for m in available_ids:
                        m_lower = m.lower()
                        if m not in ordered and not any(x in m_lower for x in ["whisper", "guard", "embed", "tts", "moderation"]):
                            ordered.append(m)
                    
                    if ordered:
                        return ordered
        except Exception as e:
            print(f"[Groq Model Discovery] Failed to fetch live models: {e}")
        
        # Hardcoded safe fallbacks (excluding decommissioned llama3-8b-8192/70b)
        return [
            "llama-3.1-8b-instant",
            "llama-3.3-70b-versatile",
            "llama-3.2-3b-preview",
            "llama-3.2-1b-preview",
            "gemma2-9b-it"
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
                        "message": "Groq API Key verified & active! (Connected to Llama 3.3)"
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
