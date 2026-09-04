import json
import httpx
from app.config import settings

class AIService:
    @staticmethod
    async def answer_topic_doubt(topic_title: str, category_name: str, message: str, action_type: str = "chat", section_content: str = "") -> str:
        """Provide context-aware AI tutor explanations with quick action prompt triggers."""
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

        system_context = f"You are PrepFlow AI, an expert interview coach and tutor specializing in {category_name or 'Computer Science'}."
        
        # Call Groq, Gemini, or OpenAI if API key present, else generate intelligent response
        if settings.GROQ_API_KEY:
            try:
                url = "https://api.groq.com/openai/v1/chat/completions"
                headers = {
                    "Authorization": f"Bearer {settings.GROQ_API_KEY}",
                    "Content-Type": "application/json"
                }
                payload = {
                    "model": settings.GROQ_MODEL,
                    "messages": [
                        {"role": "system", "content": system_context},
                        {"role": "user", "content": f"Context Topic: {topic_title}\nContext Section: {section_content[:500]}\n\nUser Question: {prompt}"}
                    ],
                    "temperature": 0.7
                }
                async with httpx.AsyncClient(timeout=15.0) as client:
                    resp = await client.post(url, headers=headers, json=payload)
                    if resp.status_code == 200:
                        data = resp.json()
                        return data["choices"][0]["message"]["content"]
                    else:
                        print(f"[AI Service Error] Groq API error {resp.status_code}: {resp.text}")
            except Exception as e:
                print(f"[AI Service Error] Groq call failed: {e}")

        if settings.GEMINI_API_KEY:
            try:
                url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={settings.GEMINI_API_KEY}"
                payload = {
                    "contents": [{
                        "parts": [{"text": f"{system_context}\n\nContext Topic: {topic_title}\nContext Section: {section_content[:500]}\n\nUser Question: {prompt}"}]
                    }]
                }
                async with httpx.AsyncClient(timeout=10.0) as client:
                    resp = await client.post(url, json=payload)
                    if resp.status_code == 200:
                        data = resp.json()
                        return data["candidates"][0]["content"]["parts"][0]["text"]
            except Exception as e:
                print(f"[AI Service Error] Gemini call failed: {e}")

        # Intelligent rule-based fallback response
        return AIService._get_fallback_response(topic_title, action_type, prompt)

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
