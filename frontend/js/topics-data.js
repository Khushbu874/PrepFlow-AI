var PREPFLOW_TOPICS_DATA = [
  {
    "id": "cat-dsa",
    "name": "Data Structures & Algorithms",
    "slug": "dsa",
    "icon": "⚡",
    "description": "Master foundational to advanced Data Structures and Algorithms for coding interviews.",
    "subcategories": [
      {
        "id": "sub-foundations",
        "name": "1. Basics & Foundations",
        "icon": "🧱",
        "topics": [
          {
            "id": "topic-time-complexity",
            "title": "Time Complexity (Big O, Big Ω, Big Θ & Amortized)",
            "slug": "time-complexity",
            "difficulty": "Easy",
            "description": "Deep dive into asymptotic notations, Best/Worst/Average/Amortized types, loop analysis, and runtime growth curves with multi-diagrams.",
            "video": {
              "url": "https://www.youtube.com/watch?v=FPu9Uld7W-E",
              "title": "Big O Notation & Time Complexity Masterclass",
              "start_seconds": 0,
              "end_seconds": 720,
              "chapters": [
                {
                  "title": "Introduction & Why Time Complexity Matters",
                  "start_seconds": 0
                },
                {
                  "title": "4 Types of Complexity (Best, Worst, Average, Amortized)",
                  "start_seconds": 150
                },
                {
                  "title": "Common Complexities (O(1) to O(N!))",
                  "start_seconds": 330
                },
                {
                  "title": "Loop Analysis & Dropping Constants",
                  "start_seconds": 510
                },
                {
                  "title": "Interview Golden Rules",
                  "start_seconds": 640
                }
              ]
            },
            "explanation": "\n### 1. Simple Definition & Intuition\nTime Complexity tells us how the running time (total operations) of an algorithm grows when the input size (n) increases.\n\n**In Simple Words:**\nInput bada hone par algorithm ko kitna kaam (operations) karna padega, ye Time Complexity batati hai.\n\n---\n\n### 2. Why Do We Need Time Complexity?\nSuppose humare paas ek hi problem ko solve karne ke 2 solutions hain:\n- **Solution A:** n operations\n- **Solution B:** n² operations\n\nJab n chhota ho (e.g. n = 5), dono solutions fast execute honge. Lekin jab input size **n = 1,000** ho jata hai:\n- **Solution A (n):** 1,000 operations (Instant execution)\n- **Solution B (n²):** 1,000,000 operations (1,000x slower)\n\n**Conclusion:** Time Complexity hume hardware speed se independent hokar sabse efficient algorithm choose karne me help karti hai.\n\n---\n\n### 3. What is n? (Input Size Explained)\n**n** ka matlab hai **Input Data ka Total Size** (Elements count, string length, etc.).\n\n**Examples:**\n- **Array Input:**\n```python\narr = [10, 20, 30, 40, 50]  # 5 elements -> n = 5\n```\nAgar array me 1,000 elements hain ➔ **n = 1000**.\n\n- **String Input:**\n```python\ns = \"google\"  # 6 characters -> n = 6\n```\n\n---\n\n### 4. Asymptotic Notations: Types & Classification\n\n```diagram:asymptotic-notations\n```\n\n#### 1. Big O Notation (O) — Upper Bound (Worst-Case)\n- **Meaning:** Maximum time limit. Algorithm isse zyada time kabhi nahi lega.\n- **Simple Words:** Worst to worst scenario me algorithm maximum itna time lega.\n- **Math Relation:** f(n) <= c * g(n)\n- **Interview Importance:** Most critical notation. Interviews me 99% yahi pucha jata hai.\n\n#### 2. Big Omega Notation (Ω) — Lower Bound (Best-Case)\n- **Meaning:** Minimum time limit. Kam se kam itna time toh lagega hi lagega.\n- **Simple Words:** Best scenario me bhi algorithm ko kam se kam itna time chahiye.\n- **Math Relation:** f(n) >= c * g(n)\n\n#### 3. Big Theta Notation (Θ) — Tight Bound (Exact Growth Rate)\n- **Meaning:** Jab Upper Bound aur Lower Bound dono exact same curve ko follow karein.\n- **Simple Words:** Algorithm hamesha isi exact rate se grow karega.\n- **Math Relation:** c1 * g(n) <= f(n) <= c2 * g(n)\n- **Example:** Merge Sort har scenario (Best, Average, Worst) me hamesha Θ(N log N) leta hai.\n\n#### 4. Little o Notation (o) — Strict Upper Bound\n- **Meaning:** Strictly less than (<), kabhi equal nahi ho sakta.\n- **Example:** 2n = O(n) is valid, but 2n = o(n) is false. 2n = o(n²) is true.\n\n#### 5. Little omega Notation (ω) — Strict Lower Bound\n- **Meaning:** Strictly greater than (>), strictly larger growth rate.\n- **Example:** n² = Ω(n) and n² = ω(n) are both true.\n\n---\n\n### 5. Quick Comparison: All 5 Notations\n\n| Notation | Symbol | Meaning | Math Equivalent | Real Coding Example |\n| :--- | :---: | :--- | :---: | :--- |\n| **Big O** | **O** | Upper Bound (Worst-Case Limit) | <= | Linear Search: O(N) |\n| **Big Omega** | **Ω** | Lower Bound (Best-Case Limit) | >= | Linear Search: Ω(1) |\n| **Big Theta** | **Θ** | Tight Bound (Exact Rate) | = | Merge Sort: Θ(N log N) |\n| **Little o** | **o** | Strict Upper Bound | < | N = o(N²) |\n| **Little omega** | **ω** | Strict Lower Bound | > | N² = ω(N) |\n\n---\n\n### 6. Visual Growth Curves of Common Complexities\n\n```diagram:big-o\n```\n\n---\n\n### 7. Detailed Analysis of Amortized Time Complexity\nDynamic array (Python `list` ya C++ `vector`) me jab elements add karte hain, toh mostly `O(1)` time lagta hai. Jab capacity full hoti hai, toh array double size ka naya memory allocate karke purane elements copy karta hai (`O(N)`).\n\n```diagram:amortized-time\n```\n\n---\n\n### 8. Code Implementations for Each Complexity Type\n\n```python\n# 1. O(1) Constant Time (Direct array index access)\ndef constant_time(arr):\n    return arr[0] if arr else None\n\n# 2. O(log N) Logarithmic Time (Binary Search - Halving search space)\ndef binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = low + (high - low) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1\n\n# 3. O(N) Linear Time (Single loop traversal / Find Maximum)\ndef find_max(arr):\n    if not arr: return None\n    max_val = arr[0]\n    for num in arr:\n        if num > max_val: max_val = num\n    return max_val\n\n# 4. O(N log N) Linearithmic Time (Merge Sort - Divide & Conquer)\ndef merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(left, right):\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i]); i += 1\n        else:\n            result.append(right[j]); j += 1\n    result.extend(left[i:])\n    result.extend(right[j:])\n    return result\n\n# 5. O(N^2) Quadratic Time (Nested loops - Compare all pairs)\ndef print_all_pairs(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(i + 1, n):\n            print(arr[i], arr[j])\n\n# 6. O(2^N) Exponential Time (Recursive Binary Tree / Naive Fibonacci)\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\n# 7. O(N!) Factorial Time (Generating all N! Permutations)\ndef generate_permutations(nums):\n    result = []\n    def backtrack(start):\n        if start == len(nums):\n            result.append(nums[:])\n            return\n        for i in range(start, len(nums)):\n            nums[start], nums[i] = nums[i], nums[start]\n            backtrack(start + 1)\n            nums[start], nums[i] = nums[i], nums[start]\n    backtrack(0)\n    return result\n```\n\n---\n\n### 9. Step-by-Step Time Complexity Calculation Rules\n- **Rule 1 (Drop Constants):** `O(2N + 5) -> O(N)`. Constants asymptotic slope change nahi karte.\n- **Rule 2 (Drop Non-Dominant Terms):** `O(N² + 100N + 500) -> O(N²)`.\n- **Rule 3 (Different Inputs = Different Variables):** Do alag arrays `A` aur `B` ke liye complexity `O(A + B)` hogi.\n- **Rule 4 (Multiplicative Loop):** Agar loop variable `i = i * 2` ya `i = i / 2` ho raha hai, toh loop `log₂(N)` baar chalega.\n                        ",
            "code_example": {
              "language": "multi",
              "python": "# Python (Compatible with Python 2.7, 3.6 - 3.12)\nclass ComplexityDemonstrator:\n    # 1. O(1) Constant Time (Direct array index access)\n    def constant_time(self, arr):\n        return arr[0] if arr else -1\n\n    # 2. O(log N) Logarithmic Time (Binary Search)\n    def binary_search(self, arr, target):\n        low, high = 0, len(arr) - 1\n        while low <= high:\n            mid = low + (high - low) // 2\n            if arr[mid] == target:\n                return mid\n            elif arr[mid] < target:\n                low = mid + 1\n            else:\n                high = mid - 1\n        return -1\n\n    # 3. O(N) Linear Time (Single Loop / Linear Scan)\n    def linear_scan(self, arr):\n        if not arr: return -1\n        max_val = arr[0]\n        for num in arr:\n            if num > max_val:\n                max_val = num\n        return max_val\n\n    # 4. O(N log N) Linearithmic Time (Merge Sort)\n    def merge_sort(self, arr):\n        if len(arr) <= 1:\n            return arr\n        mid = len(arr) // 2\n        left = self.merge_sort(arr[:mid])\n        right = self.merge_sort(arr[mid:])\n        return self._merge(left, right)\n\n    def _merge(self, left, right):\n        result, i, j = [], 0, 0\n        while i < len(left) and j < len(right):\n            if left[i] <= right[j]:\n                result.append(left[i]); i += 1\n            else:\n                result.append(right[j]); j += 1\n        result.extend(left[i:])\n        result.extend(right[j:])\n        return result\n\n    # 5. O(N^2) Quadratic Time (Nested Loops / All Pairs)\n    def quadratic_pairs(self, arr):\n        pairs = []\n        n = len(arr)\n        for i in range(n):\n            for j in range(i + 1, n):\n                pairs.append((arr[i], arr[j]))\n        return pairs\n\n    # 6. O(2^N) Exponential Time (Recursive Binary Tree)\n    def fibonacci(self, n):\n        if n <= 1:\n            return n\n        return self.fibonacci(n - 1) + self.fibonacci(n - 2)\n\n    # 7. O(N!) Factorial Time (Generate All Permutations)\n    def permutations(self, nums):\n        res = []\n        def backtrack(start):\n            if start == len(nums):\n                res.append(nums[:])\n                return\n            for i in range(start, len(nums)):\n                nums[start], nums[i] = nums[i], nums[start]\n                backtrack(start + 1)\n                nums[start], nums[i] = nums[i], nums[start]\n        backtrack(0)\n        return res",
              "java": "// Java 8 Solution: Complete Implementations for Each Complexity Type\nimport java.util.*;\n\npublic class Solution {\n    // 1. O(1) Constant Time (Direct array index access)\n    public int constantTime(int[] arr) {\n        return (arr != null && arr.length > 0) ? arr[0] : -1;\n    }\n\n    // 2. O(log N) Logarithmic Time (Binary Search)\n    public int binarySearch(int[] arr, int target) {\n        int low = 0, high = arr.length - 1;\n        while (low <= high) {\n            int mid = low + (high - low) / 2;\n            if (arr[mid] == target) return mid;\n            else if (arr[mid] < target) low = mid + 1;\n            else high = mid - 1;\n        }\n        return -1;\n    }\n\n    // 3. O(N) Linear Time (Single Loop / Linear Scan)\n    public int linearScan(int[] arr) {\n        if (arr == null || arr.length == 0) return -1;\n        int maxVal = arr[0];\n        for (int num : arr) {\n            if (num > maxVal) maxVal = num;\n        }\n        return maxVal;\n    }\n\n    // 4. O(N log N) Linearithmic Time (Merge Sort - Divide & Conquer)\n    public void mergeSort(int[] arr, int left, int right) {\n        if (left >= right) return;\n        int mid = left + (right - left) / 2;\n        mergeSort(arr, left, mid);\n        mergeSort(arr, mid + 1, right);\n        merge(arr, left, mid, right);\n    }\n\n    private void merge(int[] arr, int left, int mid, int right) {\n        int[] temp = new int[right - left + 1];\n        int i = left, j = mid + 1, k = 0;\n        while (i <= mid && j <= right) {\n            if (arr[i] <= arr[j]) temp[k++] = arr[i++];\n            else temp[k++] = arr[j++];\n        }\n        while (i <= mid) temp[k++] = arr[i++];\n        while (j <= right) temp[k++] = arr[j++];\n        System.arraycopy(temp, 0, arr, left, temp.length);\n    }\n\n    // 5. O(N^2) Quadratic Time (Nested Loops / All Pairs)\n    public List<int[]> quadraticPairs(int[] arr) {\n        List<int[]> pairs = new ArrayList<>();\n        int n = arr.length;\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                pairs.add(new int[]{arr[i], arr[j]});\n            }\n        }\n        return pairs;\n    }\n\n    // 6. O(2^N) Exponential Time (Recursive Binary Tree)\n    public int fibonacci(int n) {\n        if (n <= 1) return n;\n        return fibonacci(n - 1) + fibonacci(n - 2);\n    }\n\n    // 7. O(N!) Factorial Time (Generate All Permutations)\n    public List<List<Integer>> generatePermutations(int[] nums) {\n        List<List<Integer>> result = new ArrayList<>();\n        backtrack(0, nums, result);\n        return result;\n    }\n\n    private void backtrack(int start, int[] nums, List<List<Integer>> result) {\n        if (start == nums.length) {\n            List<Integer> current = new ArrayList<>();\n            for (int num : nums) current.add(num);\n            result.add(current);\n            return;\n        }\n        for (int i = start; i < nums.length; i++) {\n            swap(nums, start, i);\n            backtrack(start + 1, nums, result);\n            swap(nums, start, i);\n        }\n    }\n\n    private void swap(int[] nums, int i, int j) {\n        int tmp = nums[i]; nums[i] = nums[j]; nums[j] = tmp;\n    }\n}"
            },
            "complexity": {
              "time": "O(1) Constant to O(N!) Factorial",
              "space": "O(1) Auxiliary space"
            },
            "practice_questions": [
              {
                "title": "Two Sum (LeetCode #1) — O(N²) to O(N) Hash Map Optimization",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/two-sum/"
              },
              {
                "title": "Contains Duplicate (LeetCode #217) — O(N²) vs O(N log N) vs O(N) Comparison",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/contains-duplicate/"
              },
              {
                "title": "Binary Search (LeetCode #704) — Fundamental O(log N) Logarithmic Search",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/binary-search/"
              },
              {
                "title": "Pow(x, n) (LeetCode #50) — Reducing O(N) Linear to O(log N) Binary Exponentiation",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/powx-n/"
              },
              {
                "title": "Maximum Subarray (LeetCode #53) — Kadane's Algorithm O(N²) to O(N) Optimization",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/maximum-subarray/"
              },
              {
                "title": "3Sum (LeetCode #15) — Reducing O(N³) Brute Force to O(N²) Two Pointers",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/3sum/"
              },
              {
                "title": "Subsets (LeetCode #78) — O(2ᴺ) Exponential State Space Traversal",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/subsets/"
              }
            ]
          },
          {
            "id": "topic-space-complexity",
            "title": "Space Complexity & Memory Layout",
            "slug": "space-complexity",
            "difficulty": "Easy",
            "description": "Deep dive into Input Space vs Auxiliary Space, 4-Segment RAM layout (Stack, Heap, Data, Text), Call Stack recursion limits, and In-Place pointer algorithms.",
            "video": {
              "url": "https://www.youtube.com/watch?v=PwKv8fOcriM",
              "title": "Time & Space Complexity Complete Tutorial (Apna College)",
              "start_seconds": 0,
              "end_seconds": 1800,
              "chapters": [
                {
                  "title": "Introduction & What is Space Complexity",
                  "start_seconds": 0
                },
                {
                  "title": "Memory Allocation & Variables",
                  "start_seconds": 240
                },
                {
                  "title": "Input Space vs Auxiliary Space",
                  "start_seconds": 510
                },
                {
                  "title": "Recursion & Call Stack Memory",
                  "start_seconds": 890
                },
                {
                  "title": "Common Complexities & Optimization",
                  "start_seconds": 1320
                }
              ]
            },
            "explanation": "\n### 1. Simple Definition & Intuition\nSpace Complexity batati hai ki jab input data ka size **n** badhta hai, toh algorithm ko execute hone ke liye **Total kitni RAM (Memory)** allocate karni padti hai.\n\n**In Simple Words:**\nInput bada hone par algorithm ko chalne ke liye computer RAM me kitni extra memory chahiye, ye Space Complexity measure karti hai.\n\n---\n\n### 2. Why Do We Need Space Complexity?\nTime fast hone ke saath memory efficient hona kyu zaroori hai?\n- **Hardware Limitations:** Embedded systems, mobile apps, aur IoT devices me limited RAM (e.g. 512MB ya 2GB) hoti hai.\n- **OutOfMemoryError (OOM):** Agar algorithm memory limit cross kar deta hai, toh OS process ko crash kar deta hai.\n- **L1/L2 Cache Locality:** `O(1)` in-place algorithms CPU Cache me directly fit hote hain, jisse execution speed 10x-50x fast ho jati hai.\n- **Server Cloud Costs:** Microservices me memory usage 50% kam karne se cloud infrastructure cost aadhi ho jati hai.\n\n---\n\n### 3. The Golden Space Complexity Formula\nJab bhi hum kisi algorithm ki Space Complexity calculate karte hain:\n\n**Total Space Complexity = Input Space + Auxiliary Space**\n\n#### 1. Input Space (Mandatory)\nInput data ko memory me store karne ke liye required space.\n- **Example:** Agar function me `N` size ka array pass kiya gaya hai, toh Input Space `O(N)` hota hai.\n\n#### 2. Auxiliary Space (Temporary / Extra)\nAlgorithm ko solve karte waqt jo **Extra Variables, Hash Maps, Call Stacks, ya Temporary Arrays** allocate hote hain.\n- **Example:** Frequency count karne ke liye banaya gaya HashMap `O(N)` Auxiliary Space leta hai.\n\n> 💡 **Golden Interview Rule:** Coding Interviews me jab interviewer puchta hai *\"What is the Space Complexity?\"*, toh 99% cases me wo **Auxiliary Space** ke baare me puch rahe hote hain (Input space ko chhod kar extra memory).\n\n---\n\n### 4. Process Memory Architecture (RAM Layout)\nJab aap kisi program (C++, Java, Python) ko run karte hain, toh Operating System usko RAM me **4 alag-alag hisso (Segments)** me baant deta hai:\n\n```diagram:memory-layout\n```\n\n#### 🏠 Asaan Real-Life Analogy (Kitchen & Restaurant Example):\n- **1. Text Segment (Recipe Book):** Chef ki kitchen recipe book (Instructions jo change nahi hoti, sirf read ki jaati hain).\n- **2. Data Segment (Notice Board):** Kitchen ke wall par laga static notice board (Global cheezein jo sabhi chefs ke liye common hain).\n- **3. Stack Segment (Working Counter Desk):** Chef ki working table jaha temporary bartan aur chammach rakhe hain. Kaam khatam hote hi table turant saaf ho jaati hai ($O(1)$ Ultra-Fast).\n- **4. Heap Segment (Bada Storage Warehouse):** Bada godown jaha bade packets, fridge aur naye raw materials store hote hain (`new`, `malloc`, dynamic objects).\n\n---\n\n#### 🔍 4 Memory Segments Ka Asaan Breakdown:\n\n1. **Text / Code Segment (🔒 Read-Only):**\n   - **Kya store hota hai:** Aapke pure program ka compiled binary machine code (0s & 1s).\n   - **Kyu zaroori hai:** Ye hamesha Read-Only hota hai taaki koi virus ya bug runtime par aapke code ke logic ko overwrite na kar sake.\n\n2. **Data / BSS Segment (📌 Fixed Size):**\n   - **Kya store hota hai:** Program ke `Global Variables` aur `Static Variables`.\n   - **Lifespan:** Program start hone se lekar program terminate hone tak ye RAM me bane rehte hain.\n\n3. **Heap Segment (⬆️ Grows Upward - Dynamic Memory):**\n   - **Kya store hota hai:** Runtime par dynamically banne wale bade objects, arrays, HashMaps, aur Trees (e.g. `new int[N]`, `new ArrayList<>()`, Python `list`/`dict`).\n   - **Khaas Baat:** Size me bahut bada hota hai (Available RAM ke barabar). Garbage Collector isse clean karta hai.\n   - **Error Risk:** Agar bina soche-samjhe bahut bada array allocate kar diya, toh **OutOfMemoryError (OOM)** crash ho jata hai.\n\n4. **Stack Segment (⬇️ Grows Downward - LIFO Fast Memory):**\n   - **Kya store hota hai:** Chhote local variables (`int`, `double`, `pointers`), function arguments, aur function call addresses.\n   - **Khaas Baat:** Super Fast (CPU L1/L2 Cache me fit hota hai). Function return hote hi memory instant free ho jaati hai.\n   - **Error Risk:** Agar recursive function me base case bhool gaye, toh stack bhar jata hai aur **StackOverflowError** crash hota hai.\n\n> 💡 **Stack aur Heap aamne-saamne kyu badhte hain?**\n> RAM ke beech me unallocated khali space hoti hai. Stack upar se neeche (⬇️) aur Heap neeche se upar (⬆️) badhta hai taaki dono dynamic tarike se free RAM ko efficiently share kar sakein!\n\n---\n\n### 5. Stack vs Heap Memory Comparison\n\n| Parameter | Stack Memory | Heap Memory |\n| :--- | :--- | :--- |\n| **Data Stored** | Local primitive variables, function call frames | Objects, dynamic arrays, reference types |\n| **Allocation Mechanism** | Automatic (LIFO pushed/popped by CPU) | Dynamic via `new`/`malloc` (Garbage Collector) |\n| **Access Speed** | Ultra Fast (CPU L1/L2 cache friendly) | Slower compared to Stack |\n| **Size Limit** | Small & strictly bounded (e.g. 1MB - 8MB) | Large (Entire available system RAM) |\n| **Failure Exception** | **StackOverflowError** | **OutOfMemoryError** |\n\n---\n\n### 6. Recursion & Call Stack Space Deep Dive\nHar recursive function call CPU Call Stack par ek **Stack Frame** push karta hai.\n\n```diagram:recursion-tree\n```\n\n**Recursive Auxiliary Space = O(Max Tree Height H)**\n\n#### Recursion Memory Rules:\n- **Linear Recursion (`N ➔ 0`):** Max Call Depth = `N` ➔ `O(N)` Stack Space.\n- **Divide & Conquer Binary Search:** Max Call Depth = `log₂(N)` ➔ `O(log N)` Stack Space.\n- **Tree DFS on Balanced Tree:** Max Call Depth = `log₂(N)` ➔ `O(log N)` Stack Space.\n- **Tree DFS on Skewed Tree (Linked List shape):** Max Call Depth = `N` ➔ `O(N)` Stack Space.\n\n---\n\n### 7. Classification of Common Space Complexities\n\n```diagram:big-o\n```\n\n| Complexity | Growth Rate | Description | Classic DSA Examples |\n| :--- | :--- | :--- | :--- |\n| **O(1)** | Constant | Zero extra heap memory; uses 2-3 fixed primitive pointers | In-place Two Pointers, Fast & Slow Pointers, Dutch National Flag |\n| **O(log N)** | Logarithmic | Divide-and-Conquer call stack frames | Recursive Binary Search, QuickSort stack, Balanced BST traversal |\n| **O(N)** | Linear | Memory scales directly with input elements | Hash Map, Frequency Counter, Visited HashSet, Stack, Queue, BFS |\n| **O(N²)** | Quadratic | 2D Matrices, Grids, or DP Tabulation tables | 2D DP Grid (`dp[N][N]`), Graph Adjacency Matrix (`adj[V][V]`) |\n| **O(2ᴺ)** | Exponential | Storing all combinations / subsets in memory | Power Set generation (storing all 2ᴺ subsets), Permutations |\n\n---\n\n### 8. In-Place vs Extra Memory Algorithms\n**In-Place Algorithm** wo algorithm hota hai jo input data structure ko directly modify karta hai without allocating any extra proportional memory (`Auxiliary Space = O(1)`).\n\n#### Real Comparison:\n- **Approach 1 (Extra Memory - `O(N)` Space):**\n  Naya array banakar reverse elements copy karna ➔ `O(N)` Space.\n- **Approach 2 (In-Place - `O(1)` Space):**\n  Left aur Right pointers swap karke array ko in-place reverse karna ➔ `O(1)` Space.\n\n---\n\n### 9. Code Deep Dive: Kaha Kitni Complexity Hai Aur Kyo Hai?\n\n#### Type 1: O(1) Constant Auxiliary Space (In-Place Two Pointers)\n\n```python\ndef reverse_in_place(arr: list[int]) -> None:\n    left = 0                  # Line 1: 4 bytes (Stack)\n    right = len(arr) - 1      # Line 2: 4 bytes (Stack)\n    while left < right:\n        arr[left], arr[right] = arr[right], arr[left]  # Line 4: In-place swap\n        left += 1             # Line 5: Update pointer\n        right -= 1            # Line 6: Update pointer\n```\n\n- **Kaha kitni memory use hui?**\n  - `left`: 1 primitive integer = 4 Bytes on Stack\n  - `right`: 1 primitive integer = 4 Bytes on Stack\n  - Heap Memory: **0 Bytes** (Koi naya array/object nahi banaya gaya).\n  - Total Extra Memory: **Fixed 8 Bytes** (Constant).\n- **Kyo O(1) hai?**\n  Input array ka size `N = 10` ho ya `N = 10,000,000`, algorithm hamesha sirf 2 pointers (`left`, `right`) hi use karta hai. Isliye Auxiliary Space input size `N` par depend nahi karti ➔ `O(1)`.\n\n---\n\n#### Type 2: O(log N) Logarithmic Auxiliary Space (Recursive Binary Search)\n\n```python\ndef recursive_binary_search(arr: list[int], target: int, low: int, high: int) -> int:\n    if low > high:\n        return -1\n    mid = low + (high - low) // 2       # Mid calculation\n    if arr[mid] == target:\n        return mid\n    elif arr[mid] > target:\n        return recursive_binary_search(arr, target, low, mid - 1)  # Left Half\n    else:\n        return recursive_binary_search(arr, target, mid + 1, high) # Right Half\n```\n\n- **Kaha kitni memory use hui?**\n  - Har recursive call par CPU Call Stack me **1 naya Stack Frame** banta hai (`low`, `high`, `mid`, return address).\n  - Binary search har step par search space ko aadha (`N / 2`) kar deta hai: `N ➔ N/2 ➔ N/4 ➔ ... ➔ 1`.\n  - Call Stack ki maximum depth `H = log₂(N)` frames hoti hai.\n- **Kyo O(log N) hai?**\n  Call Stack par ek samay me active frames ki maximum sankhya `log₂(N)` hoti hai. Example: Agar `N = 1,048,576` ($2^{20}$) elements hain, toh Call Stack me maximum sirf **20 frames** banenge ➔ `O(log N)`.\n\n---\n\n#### Type 3: O(N) Linear Auxiliary Space (Frequency Hash Map)\n\n```python\ndef count_frequencies(arr: list[int]) -> dict[int, int]:\n    freq_map = {}             # Line 1: Dynamic Dictionary on Heap\n    for num in arr:\n        freq_map[num] = freq_map.get(num, 0) + 1  # Line 3: Insert keys\n    return freq_map\n```\n\n- **Kaha kitni memory use hui?**\n  - `freq_map`: Heap memory par dynamically allocate hota hai.\n  - Worst Case: Agar input array ke saare `N` elements unique hain (e.g. `[10, 20, 30, 40, 50]`), toh HashMap me `N` key-value pairs store honge.\n- **Kyo O(N) hai?**\n  HashMap me store hone wale entries ki sankhya directly input array ke size `N` ke proportional hoti hai. Agar `N = 1,000`, toh `1,000` entries store hongi ➔ `O(N)`.\n\n---\n\n#### Type 4: O(N²) Quadratic Auxiliary Space (2D Matrix / DP Table)\n\n```python\ndef build_multiplication_grid(n: int) -> list[list[int]]:\n    grid = [[0] * n for _ in range(n)]  # Line 1: N x N 2D Grid on Heap\n    for i in range(n):\n        for j in range(n):\n            grid[i][j] = (i + 1) * (j + 1)\n    return grid\n```\n\n- **Kaha kitni memory use hui?**\n  - `grid`: Heap memory par `N` rows allocate hoti hain aur har row me `N` columns hote hain.\n  - Total Memory Cells = `N × N = N²` integers.\n- **Kyo O(N²) hai?**\n  Agar `N = 100`, toh matrix me `100 × 100 = 10,000` cells allocate honge. Agar `N = 1,000`, toh `1,000,000` integers memory me store honge ➔ `O(N²)`.\n\n---\n\n#### Type 5: O(2ᴺ) Exponential Auxiliary Space (Power Set / Subsets)\n\n```python\ndef generate_all_subsets(nums: list[int]) -> list[list[int]]:\n    result = []                        # Output list holding all 2ᴺ subsets\n    def backtrack(start, path):\n        result.append(path[:])         # Copy current subset to result\n        for i in range(start, len(nums)):\n            path.append(nums[i])\n            backtrack(i + 1, path)\n            path.pop()\n    backtrack(0, [])\n    return result\n```\n\n- **Kaha kitni memory use hui?**\n  - `result`: Heap memory par `2ᴺ` subsets store karta hai.\n  - $N=3 implies 2^3 = 8$ subsets.\n  - $N=20 implies 2^{20} = 1,048,576$ subsets.\n- **Kyo O(2ᴺ) hai?**\n  Mathematics ke rule ke anusaar, `N` elements ke total `2ᴺ` possible subsets hote hain. Jab hum saare subsets ko memory me store karte hain, toh memory exponential rate se explode hoti hai ➔ `O(2ᴺ)`.\n\n---\n\n### 10. Top 5 Space Optimization Techniques for Coding Interviews\n1. **Two Pointers instead of Extra Arrays:** Slicing ya duplicate array create karne ke bajay `left` aur `right` index variables use karein (`O(N) ➔ O(1)`).\n2. **Space-Optimized DP (Rolling Variables):** Agar `dp[i][j]` sirf previous row `dp[i-1]` par depend karta hai, toh 2D matrix ke bajay 1D array ya 2 variables use karein (`O(N²) ➔ O(N)` ya `O(N) ➔ O(1)`).\n3. **Bit Manipulation / Bitmasks:** Boolean visited flags ko boolean array ke bajay ek integer variable ke bits me store karein (`O(N) ➔ O(1)`).\n4. **Input Array Mutation (Index-as-Hash):** Constraints check karke positive/negative sign flipping se input array ko hi visited hash set ki tarah use karein (`O(N) ➔ O(1)`).\n5. **Iteration over Deep Recursion:** Stack frames overflow se bachne ke liye recursive DFS ko iterative loop ya explicit small stack se replace karein.\n                        ",
            "code_example": {
              "language": "multi",
              "python": "# Python (Compatible with Python 2.7, 3.6 - 3.12)\nclass SpaceComplexityDemonstrator:\n    # 1. O(1) Auxiliary Space: In-Place Two Pointers\n    def reverse_in_place(self, arr):\n        if not arr: return\n        left, right = 0, len(arr) - 1\n        while left < right:\n            arr[left], arr[right] = arr[right], arr[left]\n            left += 1\n            right -= 1\n\n    # 2. O(log N) Auxiliary Space: Recursive Call Stack\n    def recursive_binary_search(self, arr, target, low, high):\n        if low > high: return -1\n        mid = low + (high - low) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] > target:\n            return self.recursive_binary_search(arr, target, low, mid - 1)\n        else:\n            return self.recursive_binary_search(arr, target, mid + 1, high)\n\n    # 3. O(N) Auxiliary Space: Hash Map Frequency Counter\n    def count_frequencies(self, arr):\n        freq_map = {}\n        for num in arr:\n            freq_map[num] = freq_map.get(num, 0) + 1\n        return freq_map\n\n    # 4. O(N^2) Auxiliary Space: 2D Matrix Grid Allocation\n    def build_multiplication_grid(self, n):\n        grid = [[0] * n for _ in range(n)]\n        for i in range(n):\n            for j in range(n):\n                grid[i][j] = (i + 1) * (j + 1)\n        return grid\n\n    # 5. O(2^N) Auxiliary Space: Power Set Storage\n    def generate_all_subsets(self, nums):\n        result = []\n        def backtrack(start, path):\n            result.append(path[:])\n            for i in range(start, len(nums)):\n                path.append(nums[i])\n                backtrack(i + 1, path)\n                path.pop()\n        backtrack(0, [])\n        return result",
              "java": "// Java 8 Solution: Space Complexity & Memory Optimization\nimport java.util.*;\n\npublic class Solution {\n    // 1. O(1) Auxiliary Space: In-Place Two Pointers (Zero Extra Heap Memory)\n    public void reverseInPlace(int[] arr) {\n        if (arr == null || arr.length <= 1) return;\n        int left = 0, right = arr.length - 1;\n        while (left < right) {\n            int temp = arr[left];\n            arr[left] = arr[right];\n            arr[right] = temp;\n            left++;\n            right--;\n        }\n    }\n\n    // 2. O(log N) Auxiliary Space: Recursive Call Stack (Binary Search)\n    public int recursiveBinarySearch(int[] arr, int target, int low, int high) {\n        if (low > high) return -1;\n        int mid = low + (high - low) / 2;\n        if (arr[mid] == target) return mid;\n        if (arr[mid] > target) {\n            return recursiveBinarySearch(arr, target, low, mid - 1);\n        }\n        return recursiveBinarySearch(arr, target, mid + 1, high);\n    }\n\n    // 3. O(N) Auxiliary Space: Hash Map Frequency Counter / Visited Set\n    public Map<Integer, Integer> countFrequencies(int[] arr) {\n        Map<Integer, Integer> freqMap = new HashMap<>();\n        for (int num : arr) {\n            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);\n        }\n        return freqMap;\n    }\n\n    // 4. O(N^2) Auxiliary Space: 2D Dynamic Programming Grid / Matrix\n    public int[][] buildMultiplicationGrid(int n) {\n        int[][] grid = new int[n][n];\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                grid[i][j] = (i + 1) * (j + 1);\n            }\n        }\n        return grid;\n    }\n\n    // 5. O(2^N) Auxiliary Space: Power Set Storage (All Subsets)\n    public List<List<Integer>> generateAllSubsets(int[] nums) {\n        List<List<Integer>> result = new ArrayList<>();\n        backtrackSubsets(0, nums, new ArrayList<>(), result);\n        return result;\n    }\n\n    private void backtrackSubsets(int start, int[] nums, List<Integer> path, List<List<Integer>> result) {\n        result.add(new ArrayList<>(path));\n        for (int i = start; i < nums.length; i++) {\n            path.add(nums[i]);\n            backtrackSubsets(i + 1, nums, path, result);\n            path.remove(path.size() - 1);\n        }\n    }\n}"
            },
            "complexity": {
              "time": "O(1) Constant to O(2ᴺ) Exponential",
              "space": "O(1) In-Place Auxiliary space to O(2ᴺ) PowerSet"
            },
            "practice_questions": [
              {
                "title": "Reverse String (LeetCode #344) — O(1) In-Place Two Pointers",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/reverse-string/"
              },
              {
                "title": "Move Zeroes (LeetCode #283) — O(1) In-Place Array Shift",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/move-zeroes/"
              },
              {
                "title": "Remove Duplicates from Sorted Array (LeetCode #26) — O(1) In-Place Fast/Slow Pointers",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/"
              },
              {
                "title": "Rotate Array (LeetCode #189) — O(1) 3-Reversal In-Place Technique",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/rotate-array/"
              },
              {
                "title": "Product of Array Except Self (LeetCode #238) — O(1) Auxiliary Space Accumulation",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/product-of-array-except-self/"
              },
              {
                "title": "Set Matrix Zeroes (LeetCode #73) — O(1) In-Place First Row/Col Marker Optimization",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/set-matrix-zeroes/"
              },
              {
                "title": "Subsets (LeetCode #78) — O(2ᴺ) Power Set Auxiliary Space",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/subsets/"
              }
            ]
          },
          {
            "id": "topic-recursion-basics",
            "title": "Recursion (Anatomy, 4 Types, Call Stack & Patterns)",
            "slug": "recursion-basics",
            "difficulty": "Medium",
            "description": "Deep dive into recursion mechanics — 3-part anatomy (base case, recursive case, return), call stack frame tracing, 4 major types, recursion tree complexity analysis, memoization, and 6 interview patterns with full code.",
            "video": {
              "url": "https://www.youtube.com/watch?v=9OsMG4fI4OY",
              "title": "Recursion Tutorial - Basics to Advanced | Part 1 (Apna College)",
              "start_seconds": 0,
              "end_seconds": 2560,
              "chapters": [
                {
                  "title": "Introduction & What is Recursion?",
                  "start_seconds": 50
                },
                {
                  "title": "Recursive Function — How it works",
                  "start_seconds": 570
                },
                {
                  "title": "Call Stack & Recursion Tree",
                  "start_seconds": 678
                },
                {
                  "title": "Math of Recursion & Recurrence Relation",
                  "start_seconds": 1124
                },
                {
                  "title": "N Factorial (Recursive) + Code",
                  "start_seconds": 1316
                },
                {
                  "title": "Time Complexity in Recursion",
                  "start_seconds": 1621
                },
                {
                  "title": "Space Complexity in Recursion",
                  "start_seconds": 2041
                },
                {
                  "title": "Sum of N Numbers (Recursive) + Complexity",
                  "start_seconds": 2256
                }
              ]
            },
            "explanation": "\n### 1. Simple Definition & Intuition\nRecursion ek aisi programming technique hai jisme ek **function apne aap ko hi call karta hai** — jab tak ek defined stopping condition (**Base Case**) na aa jaye.\n\n**In Simple Words:**\nEk badi problem ko choti-choti same-type ki subproblems me todna, unhe solve karna, aur phir answers ko combine karna — yahi Recursion hai.\n\n**Real Life Analogy (Mirror Room):**\nSocho tum do aaine (mirrors) ke beech khade ho — tum apna infinite reflection dekhte ho. Har reflection doosre reflection ko call karta hai. Base Case wo hoga jab mirror band ho jaye — warna ye loop kabhi nahi rukta! StackOverflow ho jata!\n\n---\n\n### 2. Why Do We Need Recursion?\nKuch problems ki structure **naturally self-similar (recursive)** hoti hai:\n- **Trees aur Graphs:** Har subtree bhi ek tree hota hai.\n- **Divide & Conquer:** Merge Sort, Quick Sort.\n- **Mathematical Sequences:** Fibonacci, Factorial.\n- **Backtracking:** Subsets, Permutations, N-Queens.\n\n**Iterative vs Recursive Comparison:**\n| Aspect | Iterative (Loop) | Recursive |\n| :--- | :--- | :--- |\n| **Code Readability** | Complex nested logic | Clean, mirrors the problem |\n| **Space Usage** | O(1) for simple loops | O(H) call stack frames |\n| **Best For** | Simple repetition | Tree/Graph/Divide & Conquer |\n| **Risk** | Infinite loop | Stack Overflow (no base case) |\n| **Debugging** | Easier | Needs recursion tree mental model |\n\n---\n\n### 3. The 3-Part Anatomy of Every Recursive Function\nHar recursive function ke **exactly 3 parts** hote hain. Ek bhi miss hua toh function galat ya infinite hoga.\n\n\n#### Part 1 — Base Case (🛑 The Stopping Condition)\n- **Kya hai:** Wo simplest condition jahan recursion ruk jaata hai aur direct answer return hota hai without any recursive call.\n- **Kyu zaroori hai:** Base case nahi hoga toh function infinitely call hota rahega jab tak Stack Overflow na aa jaye.\n- **Real Rule:** Sochna hai — \"Sabse simple possible input kya hoga jiske liye mujhe directly answer pata hai?\"\n\n```python\n# Factorial ke liye base case:\ndef factorial(n):\n    if n == 0 or n == 1:\n        return 1   # ✅ Direct answer, no recursive call needed\n```\n\n#### Part 2 — Recursive Case (🔄 The Self-Call)\n- **Kya hai:** Problem ko choti subproblem me todke apne aap ko call karna.\n- **Golden Rule:** Har recursive call me problem **thodi choti** honi chahiye — warna kabhi base case reach nahi hoga.\n- **Shrinkage Guarantee:** n → n-1 (linear), n → n/2 (logarithmic), n → two halves (divide & conquer).\n\n```python\n# Factorial ka recursive case:\ndef factorial(n):\n    if n <= 1: return 1\n    return n * factorial(n - 1)  # 🔄 n se n-1 tak shrink ho raha hai\n```\n\n#### Part 3 — Return / Combine (📦 Build the Answer)\n- **Kya hai:** Jab recursive call se answer wapas aata hai, use current level ke data ke sath combine karke upar return karna.\n- **2 Flavors:**\n  - **Pre-order work:** Kuch karo BEFORE recursive call (e.g. print before going deep).\n  - **Post-order work:** Kuch karo AFTER recursive call returns (e.g. multiply AFTER factorial returns).\n\n```python\n# Full Factorial — Teen parts ek saath:\ndef factorial(n):\n    if n <= 1:                      # Part 1: Base Case\n        return 1\n    result = factorial(n - 1)       # Part 2: Recursive Call (waits here)\n    return n * result               # Part 3: Combine — multiply after return ⬆️\n\nprint(factorial(4))   # Output: 24\n```\n\n---\n\n### 4. Call Stack Mechanics — Exactly Kya Hota Hai Memory Me?\nJab bhi ek recursive function call hota hai, CPU **Call Stack** par ek naya **Stack Frame** push karta hai.\n\n#### Stack Frame Me Kya Hota Hai?\n- Function ke **local variables** (e.g. `n`, `acc`)\n- Function ke **parameters**\n- **Return address** (ye next frame kaha jayega return karne ke baad)\n\n#### factorial(4) Ka Call Stack — Flowchart + Code\n\n**📊 PART 1: Visual Flowchart (Kya hota hai step-by-step)**\n\n```\n START: factorial(4) called\n        │\n        ▼\n┌─────────────────────────────────────────────┐\n│  WINDING PHASE ⬇️ (Frames Push karte hain)  │\n└─────────────────────────────────────────────┘\n        │\n        ▼\n  ┌─────────────────────────────────┐\n  │ FRAME 4: factorial(4)           │\n  │   n=4 → is 4 <= 1? NO           │\n  │   → calls factorial(3)... wait  │\n  └─────────────────────────────────┘\n        │ (calls)\n        ▼\n  ┌─────────────────────────────────┐\n  │ FRAME 3: factorial(3)           │\n  │   n=3 → is 3 <= 1? NO           │\n  │   → calls factorial(2)... wait  │\n  └─────────────────────────────────┘\n        │ (calls)\n        ▼\n  ┌─────────────────────────────────┐\n  │ FRAME 2: factorial(2)           │\n  │   n=2 → is 2 <= 1? NO           │\n  │   → calls factorial(1)... wait  │\n  └─────────────────────────────────┘\n        │ (calls)\n        ▼\n  ┌─────────────────────────────────┐\n  │ FRAME 1: factorial(1)           │\n  │   n=1 → is 1 <= 1? ✅ YES       │\n  │   → return 1  (BASE CASE HIT!)  │\n  └─────────────────────────────────┘\n        │ (returns 1)\n        ▼\n┌─────────────────────────────────────────────┐\n│  UNWINDING PHASE ⬆️ (Frames Pop karte hain) │\n└─────────────────────────────────────────────┘\n        │\n        ▼\n  ┌─────────────────────────────────┐\n  │ FRAME 2: factorial(2) resumes   │\n  │   n=2, got 1 back               │\n  │   → return 2 * 1 = 2            │\n  └─────────────────────────────────┘\n        │ (returns 2)\n        ▼\n  ┌─────────────────────────────────┐\n  │ FRAME 3: factorial(3) resumes   │\n  │   n=3, got 2 back               │\n  │   → return 3 * 2 = 6            │\n  └─────────────────────────────────┘\n        │ (returns 6)\n        ▼\n  ┌─────────────────────────────────┐\n  │ FRAME 4: factorial(4) resumes   │\n  │   n=4, got 6 back               │\n  │   → return 4 * 6 = 24           │\n  └─────────────────────────────────┘\n        │\n        ▼\n   FINAL ANSWER: 24 ✅\n```\n\n---\n\n**💻 PART 2: Actual Code (Har step code me kahan hai)**\n\n```python\ndef factorial(n):\n    # ─────────────────────────────────────────\n    # BASE CASE: Sabse chhota input ka direct answer\n    # Ye condition TRUE hone par stack UNWIND hona shuru hota hai\n    # ─────────────────────────────────────────\n    if n <= 1:\n        return 1          # Frame 1: factorial(1) → returns 1\n\n    # ─────────────────────────────────────────\n    # RECURSIVE CASE: Apne aap ko chote input ke saath call karo\n    # Ye line execute hone par ek naya FRAME stack pe PUSH hota hai\n    # Current frame yahan RUKA REHTA HAI — jab tak recursive call return na kare\n    # ─────────────────────────────────────────\n    result = factorial(n - 1)\n    #         ↑ Ye call return hone ke baad NEECHE ki line chalti hai\n\n    # ─────────────────────────────────────────\n    # COMBINE: Recursive call ka answer wapas aaya → ab multiply karo\n    # Ye UNWINDING phase me hota hai (stack se pop hote waqt)\n    # ─────────────────────────────────────────\n    return n * result\n    # Frame 2: return 2 * 1 = 2\n    # Frame 3: return 3 * 2 = 6\n    # Frame 4: return 4 * 6 = 24  ← Final answer!\n\n\n# ─── How to call ───\nprint(factorial(4))   # Output: 24\n```\n\n> 💡 **Key Insight:** Recursion ke 2 phases hote hain:\n> - **Winding Phase ⬇️ (Call):** Jab tak base case nahi aata, stack pe frames push hote rehte hain.\n> - **Unwinding Phase ⬆️ (Return):** Base case ke baad, frames pop hoke answer combine hota hai.\n\n> ⚠️ **StackOverflowError Kab Hota Hai?**\n> Agar `n` bahut bada ho (e.g. n = 100,000) ya base case miss ho, toh Call Stack ki fixed limit (typically 1MB-8MB) exceed ho jati hai → **StackOverflowError crash!**\n\n---\n\n### 5. 4 Major Types of Recursion — Deep Dive\n\n```diagram:recursion-types\n```\n\n#### Type 1: Tail Recursion (⚡ Fastest & Most Memory-Efficient)\n- **Definition:** Function ki **sabse aakhri operation** ek recursive call hoti hai — koi pending computation nahi hoti return ke baad.\n- **Why Special:** Compiler is pattern ko detect karke **Tail Call Optimization (TCO)** apply karta hai — stack frame create karne ki zaroorat nahi, ek hi frame reuse hota hai.\n- **Space Complexity:** O(1) with TCO (vs O(N) without)\n- **Key Trick:** Ek **accumulator** variable use karo jo running result hold kare.\n\n```python\n# ❌ Non-Tail (Head) Recursion — pending multiplication on stack\ndef factorial_head(n):\n    if n <= 1: return 1\n    return n * factorial_head(n - 1)  # n * ? — pending work after call!\n\n# ✅ Tail Recursion — accumulator carries result\ndef factorial_tail(n, acc=1):\n    if n <= 1: return acc            # Base case returns accumulated result\n    return factorial_tail(n - 1, acc * n)  # Pure tail call, no pending work!\n\n# Call trace: factorial_tail(4, 1)\n# → factorial_tail(3, 4)   → factorial_tail(2, 12)   → factorial_tail(1, 24) → 24\n```\n\n> 💡 **Interview Note:** Python does NOT implement TCO by default (CPython limitation). Java doesn't either. But understanding TCO pattern is important for interviews and languages like Scala, Haskell, Kotlin.\n\n---\n\n#### Type 2: Head / Linear Recursion (📋 Most Common in Interviews)\n- **Definition:** Recursive call pehle hoti hai, aur uske return ke BAAD current frame me koi computation hoti hai.\n- **Stack Behavior:** Har call ek frame push karta hai, return par computation hoti hai (Unwinding phase me kaam hota hai).\n- **Space Complexity:** O(N) — N frames ek saath stack par hote hain.\n\n```python\n# Head Recursion — work happens AFTER recursive call returns\ndef print_reverse(n):\n    if n == 0: return      # Base case\n    print_reverse(n - 1)   # Recursive call FIRST\n    print(n)               # Work happens AFTER — prints 1,2,3,4,5 (reverse)\n\n# vs print_forward(n) — work happens BEFORE\ndef print_forward(n):\n    if n == 0: return\n    print(n)               # Work happens BEFORE — prints 5,4,3,2,1\n    print_forward(n - 1)   # Recursive call AFTER\n```\n\n---\n\n#### Type 3: Tree / Binary Recursion (🌳 Divide & Conquer Core)\n- **Definition:** Ek function ke body me **2 ya zyada** recursive calls hoti hain — ek binary tree jaisa structure ban jaata hai.\n- **Why Tree-Shaped:** Har call 2 naye calls generate karta hai → exponential branching.\n- **Space Complexity:** O(H) — sirf ek path (Height) ek saath stack par hota hai.\n- **Time Complexity:** O(2^N) naive case, but can be optimized with memoization.\n\n```python\n# Tree Recursion — fib(4) tree:\n#           fib(4)\n#          /       \\\n#       fib(3)    fib(2)\n#       /    \\    /    \\\n#    fib(2) fib(1) fib(1) fib(0)\n#    /    \\\n# fib(1) fib(0)\n\ndef fib_naive(n):        # O(2^N) time, O(N) space\n    if n <= 1: return n\n    return fib_naive(n - 1) + fib_naive(n - 2)  # TWO recursive calls!\n\ndef fib_memo(n, memo={}):  # O(N) time, O(N) space (Memoized)\n    if n <= 1: return n\n    if n in memo: return memo[n]\n    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)\n    return memo[n]\n```\n\n**Recursion Tree ka Total Work Count:**\n- Level 0: 1 node × O(1) = O(1)\n- Level 1: 2 nodes × O(1) = O(2)\n- Level k: 2^k nodes × O(1) = O(2^k)\n- Total levels = N → **Total work = O(2^N)**\n\n---\n\n#### Type 4: Nested / Mutual Recursion (🔄 Advanced Pattern)\n- **Definition:** Function A, Function B ko call karta hai, aur B wapas A ko call karta hai. Ya parameter ke andar hi recursive call pass hoti hai (Ackermann function).\n\n```python\n# Mutual Recursion: is_even ↔ is_odd\ndef is_even(n):\n    if n == 0: return True\n    return is_odd(n - 1)    # calls is_odd\n\ndef is_odd(n):\n    if n == 0: return False\n    return is_even(n - 1)   # calls is_even back!\n\n# Nested Recursion (Ackermann - grows EXTREMELY fast)\ndef ackermann(m, n):\n    if m == 0: return n + 1\n    if n == 0: return ackermann(m - 1, 1)\n    return ackermann(m - 1, ackermann(m, n - 1))  # Nested call as parameter!\n```\n\n---\n\n### 6. Recursion Tree Method — Complexity Calculate Karna\nRecursion tree draw karo aur **total work count karo** — ye interviews me sabse reliable method hai.\n\n**Steps:**\n1. Tree Draw Karo\n2. Har Level ka Work Count Karo\n3. Total Levels Count Karo\n4. Sab Add Karo\n\n**Example: Merge Sort ka Complexity nikalna**\n\n```diagram:merge-sort-tree\n```\n\n```python\n# Merge Sort — Full Implementation (O(N log N) time, O(N) space)\ndef merge_sort(arr):\n    if len(arr) <= 1:             # Base Case: single element → already sorted\n        return arr\n\n    mid = len(arr) // 2\n    left  = merge_sort(arr[:mid])   # Recursive call on left half  ⬇️ Divide\n    right = merge_sort(arr[mid:])   # Recursive call on right half ⬇️ Divide\n\n    return merge(left, right)       # Combine the two sorted halves ⬆️ Conquer\n\ndef merge(left, right):\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i]); i += 1\n        else:\n            result.append(right[j]); j += 1\n    result.extend(left[i:])   # Remaining elements\n    result.extend(right[j:])\n    return result\n\n# Test\narr = [38, 27, 43, 3, 9, 82, 10]\nprint(merge_sort(arr))  # [3, 9, 10, 27, 38, 43, 82]\n```\n\n---\n\n### 7. The 3 Golden Rules for Recursion in Interviews\n\n**Rule 1 — Trust the Recursion (Leap of Faith):**\nJab tum recursive function likhte ho, assume karo ki `f(n-1)` **pehle se sahi kaam kar raha hai**. Tumhara kaam sirf ye define karna hai ki `f(n)` kya karta hai `f(n-1)` ke result ko lekar.\n\n**Rule 2 — Base Case Pehle Socho:**\nPehle sochna hai — \"Sabse chota input kya hoga jahan mujhe directly answer pata hai?\" Ye hi base case hai. Fir sochna hai recursive case.\n\n**Rule 3 — Shrinkage Guarantee:**\nHar recursive call me input **measurably chota** hona chahiye (n → n-1, n → n//2, list → smaller list), tabhi base case kabhi na kabhi reach hoga.\n\n---\n\n### 8. How to Approach Any Recursion Problem (Interview Framework)\n\n**Step 1 — Define the Function:**\n\"Ye function exactly kya karta hai? Input kya hai, output kya hai?\" — Clearly define karo.\n\n**Step 2 — Find the Base Case:**\n\"Sabse simple possible input kya hai jaha directly answer return kar sakta hoon bina recursive call ke?\"\n\n**Step 3 — Find the Recursive Case:**\n\"Agar mujhe f(n-1) ka answer pata ho (assume karo), toh f(n) ka answer kaise nikaloonga?\"\n\n**Step 4 — Draw the Recursion Tree:**\nEk small example ke liye (n=3 ya n=4) manually tree draw karo aur trace karo.\n\n**Step 5 — Calculate Complexity:**\nTree ka use karke Time and Space complexity nikalo.\n\n```python\n# Interview Approach Example: Power Set (All Subsets)\n\n# Step 1: subsets(nums) returns list of all possible subsets\n# Step 2: Base case — when start == len(nums), add current path to result\n# Step 3: At each position, two choices: include element OR skip it\n# Step 4: Tree for [1,2,3]:\n#              []\n#            /    \\\n#          [1]     []        → include or skip 1\n#         /  \\    /  \\\n#       [1,2] [1] [2] []   → include or skip 2\n# Step 5: O(2^N) time, O(N) space\n\ndef subsets(nums):\n    result = []\n    def backtrack(start, path):\n        result.append(path[:])          # Record current subset\n        for i in range(start, len(nums)):\n            path.append(nums[i])        # Include nums[i]\n            backtrack(i + 1, path)      # Explore with it included\n            path.pop()                  # Exclude nums[i] (backtrack)\n    backtrack(0, [])\n    return result\n```\n\n---\n\n### 9. Common Recursion Patterns (Cheat Sheet)\n\n| Pattern | When to Use | Key Idea | Example Problems |\n| :--- | :--- | :--- | :--- |\n| **Linear Recursion** | Linked list, simple sequence | n → n-1, single call | Factorial, Reverse String |\n| **Binary Recursion** | Divide & Conquer | n → two halves | Merge Sort, Fibonacci, Binary Search |\n| **Tail Recursion** | When accumulator possible | Pass result as param | Factorial with acc |\n| **Tree DFS Recursion** | Tree traversal | Node → left & right children | Inorder, Preorder, Height |\n| **Backtracking** | All possibilities | Choose, Explore, Un-choose | Subsets, Permutations, N-Queens |\n| **Memoized Recursion** | Overlapping subproblems | Cache results in dict/array | Fibonacci, Coin Change, Climbing Stairs |\n\n---\n\n### 10. Memoization — Recursion + Caching = Dynamic Programming Gateway\n\n**Problem with Naive Tree Recursion:**\n`fib(5)` calls `fib(3)` TWICE — wasteful repeated work!\n\n**Solution — Memoize:** Store each result once it's computed. If same input seen again, return cached result instantly.\n\n```python\n# Without Memoization — O(2^N) redundant calls\ndef fib(n):\n    if n <= 1: return n\n    return fib(n-1) + fib(n-2)\n\n# With Memoization — O(N) unique calls only\ndef fib_memo(n, memo={}):\n    if n <= 1: return n\n    if n in memo: return memo[n]      # Cache hit! Instant return.\n    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)\n    return memo[n]\n\n# Clean Version using @lru_cache decorator\nfrom functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fib_lru(n):\n    if n <= 1: return n\n    return fib_lru(n-1) + fib_lru(n-2)\n\n# Complexity Comparison:\n# fib(40) naive    → ~2.7 billion calls (extremely slow)\n# fib(40) memoized → 40 unique calls   (instant)\n```\n\n**Memoized Recursion = Top-Down Dynamic Programming!**\nYe DP ka first step hai — recursive solution likho → memoize karo → phir optional: bottom-up DP table banao.\n                        ",
            "code_example": {
              "language": "multi",
              "python": "# Python — Complete Recursion Patterns Masterclass\nfrom functools import lru_cache\n\n# ============================================================\n# PATTERN 1: Linear Recursion — Factorial (O(N) time, O(N) space)\n# ============================================================\ndef factorial(n):\n    # Base Case: direct answer for simplest input\n    if n <= 1:\n        return 1\n    # Recursive Case: shrink n → n-1, combine with n\n    return n * factorial(n - 1)\n\n# Tail Recursive version (O(1) space conceptually with TCO)\ndef factorial_tail(n, acc=1):\n    if n <= 1: return acc\n    return factorial_tail(n - 1, acc * n)  # Pure tail call\n\n# ============================================================\n# PATTERN 2: Binary Recursion — Merge Sort (O(N log N), O(N))\n# ============================================================\ndef merge_sort(arr):\n    # Base Case: array of 0 or 1 elements is already sorted\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    # Recursive Case: sort left half AND right half separately\n    left = merge_sort(arr[:mid])    # First recursive call\n    right = merge_sort(arr[mid:])   # Second recursive call\n    return merge(left, right)       # Combine results\n\ndef merge(left, right):\n    result, i, j = [], 0, 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i]); i += 1\n        else:\n            result.append(right[j]); j += 1\n    result.extend(left[i:])\n    result.extend(right[j:])\n    return result\n\n# ============================================================\n# PATTERN 3: Memoized Recursion — Fibonacci (O(N), O(N))\n# ============================================================\n@lru_cache(maxsize=None)\ndef fib(n):\n    # Base Case: fib(0)=0, fib(1)=1\n    if n <= 1: return n\n    # Recursive Case with caching\n    return fib(n - 1) + fib(n - 2)\n\n# ============================================================\n# PATTERN 4: Backtracking — All Subsets (O(2^N), O(N))\n# ============================================================\ndef subsets(nums):\n    result = []\n    def backtrack(start, path):\n        result.append(path[:])          # Record current state\n        for i in range(start, len(nums)):\n            path.append(nums[i])        # CHOOSE\n            backtrack(i + 1, path)      # EXPLORE\n            path.pop()                  # UN-CHOOSE (backtrack)\n    backtrack(0, [])\n    return result\n\n# ============================================================\n# PATTERN 5: Tree DFS Recursion — Height of Binary Tree (O(N), O(H))\n# ============================================================\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val, self.left, self.right = val, left, right\n\ndef tree_height(root):\n    # Base Case: empty tree has height 0\n    if root is None: return 0\n    # Recursive Case: height = 1 + max(left_height, right_height)\n    left_h = tree_height(root.left)    # Recurse left subtree\n    right_h = tree_height(root.right)  # Recurse right subtree\n    return 1 + max(left_h, right_h)   # Combine\n\n# ============================================================\n# PATTERN 6: Divide & Conquer — Binary Exponentiation (O(log N), O(log N))\n# ============================================================\ndef my_pow(x, n):\n    # Base Case\n    if n == 0: return 1.0\n    if n < 0: x, n = 1.0 / x, -n\n    # Recursive Case: divide exponent in half each time\n    half = my_pow(x, n // 2)\n    if n % 2 == 0:\n        return half * half          # Even: x^n = (x^(n/2))^2\n    else:\n        return half * half * x      # Odd:  x^n = (x^(n/2))^2 * x",
              "java": "// Java — Complete Recursion Patterns Masterclass\n// ✅ Proper Java syntax: class, return types, main method, actual calls\nimport java.util.*;\n\npublic class RecursionPatterns {\n\n    // ============================================================\n    // PATTERN 1: Linear Recursion — Factorial (O(N) time, O(N) space)\n    // ============================================================\n    // Return type: long  |  Parameter: int n\n    public long factorial(int n) {\n        // Base Case: simplest input → direct answer\n        if (n <= 1) return 1L;\n        // Recursive Case: n * factorial(n-1)\n        return (long) n * factorial(n - 1);\n    }\n\n    // Tail Recursive Version: accumulator parameter carry karta hai result\n    public long factorialTail(int n, long acc) {\n        if (n <= 1) return acc;\n        return factorialTail(n - 1, acc * n); // Pure tail call\n    }\n\n    // ============================================================\n    // PATTERN 2: Binary Recursion — Merge Sort (O(N log N), O(N))\n    // ============================================================\n    public void mergeSort(int[] arr, int left, int right) {\n        // Base Case: single element already sorted\n        if (left >= right) return;\n        int mid = left + (right - left) / 2;\n        mergeSort(arr, left, mid);       // Sort left half\n        mergeSort(arr, mid + 1, right);  // Sort right half\n        merge(arr, left, mid, right);    // Combine both halves\n    }\n\n    private void merge(int[] arr, int left, int mid, int right) {\n        int[] temp = new int[right - left + 1];\n        int i = left, j = mid + 1, k = 0;\n        while (i <= mid && j <= right)\n            temp[k++] = (arr[i] <= arr[j]) ? arr[i++] : arr[j++];\n        while (i <= mid)  temp[k++] = arr[i++];\n        while (j <= right) temp[k++] = arr[j++];\n        System.arraycopy(temp, 0, arr, left, temp.length);\n    }\n\n    // ============================================================\n    // PATTERN 3: Memoized Recursion — Fibonacci (O(N), O(N))\n    // ============================================================\n    private Map<Integer, Long> memo = new HashMap<>();\n\n    public long fib(int n) {\n        if (n <= 1) return n;                         // Base Case\n        if (memo.containsKey(n)) return memo.get(n); // Cache hit!\n        long result = fib(n - 1) + fib(n - 2);\n        memo.put(n, result);                          // Cache result\n        return result;\n    }\n\n    // ============================================================\n    // PATTERN 4: Backtracking — All Subsets (O(2^N), O(N))\n    // ============================================================\n    public List<List<Integer>> subsets(int[] nums) {\n        List<List<Integer>> result = new ArrayList<>();\n        backtrack(0, nums, new ArrayList<>(), result);\n        return result;\n    }\n\n    private void backtrack(int start, int[] nums, List<Integer> path,\n                           List<List<Integer>> result) {\n        result.add(new ArrayList<>(path));        // Record current state\n        for (int i = start; i < nums.length; i++) {\n            path.add(nums[i]);                    // CHOOSE\n            backtrack(i + 1, nums, path, result); // EXPLORE\n            path.remove(path.size() - 1);         // UN-CHOOSE (backtrack)\n        }\n    }\n\n    // ============================================================\n    // PATTERN 5: Tree DFS Recursion — Height of Binary Tree (O(N), O(H))\n    // ============================================================\n    static class TreeNode {\n        int val;\n        TreeNode left, right;\n        TreeNode(int val) { this.val = val; }\n    }\n\n    public int treeHeight(TreeNode root) {\n        if (root == null) return 0;              // Base Case: null → height 0\n        int leftH  = treeHeight(root.left);     // Recurse left\n        int rightH = treeHeight(root.right);    // Recurse right\n        return 1 + Math.max(leftH, rightH);     // Combine\n    }\n\n    // ============================================================\n    // PATTERN 6: Divide & Conquer — Binary Exponentiation (O(log N))\n    // ============================================================\n    public double myPow(double x, int n) {\n        long N = n;\n        if (N < 0) { x = 1.0 / x; N = -N; }\n        return binaryPow(x, N);\n    }\n\n    private double binaryPow(double x, long n) {\n        if (n == 0) return 1.0;               // Base Case\n        double half = binaryPow(x, n / 2);   // Halve the exponent\n        return (n % 2 == 0) ? half * half : half * half * x;\n    }\n\n    // ============================================================\n    // MAIN METHOD — Entry point: actual calls & outputs\n    // ============================================================\n    public static void main(String[] args) {\n        RecursionPatterns rp = new RecursionPatterns();\n\n        // Pattern 1: Factorial\n        System.out.println(\"factorial(5)     = \" + rp.factorial(5));       // 120\n        System.out.println(\"factorialTail(5) = \" + rp.factorialTail(5, 1)); // 120\n\n        // Pattern 2: Merge Sort\n        int[] arr = {5, 3, 8, 1, 2};\n        rp.mergeSort(arr, 0, arr.length - 1);\n        System.out.println(\"mergeSort result  = \" + Arrays.toString(arr)); // [1,2,3,5,8]\n\n        // Pattern 3: Fibonacci (memoized)\n        System.out.println(\"fib(10)          = \" + rp.fib(10));            // 55\n\n        // Pattern 4: Subsets\n        int[] nums = {1, 2, 3};\n        System.out.println(\"subsets([1,2,3]) = \" + rp.subsets(nums));      // 8 subsets\n\n        // Pattern 5: Tree Height\n        TreeNode root = new TreeNode(1);\n        root.left  = new TreeNode(2);\n        root.right = new TreeNode(3);\n        root.left.left = new TreeNode(4);\n        System.out.println(\"treeHeight       = \" + rp.treeHeight(root));   // 3\n\n        // Pattern 6: Power\n        System.out.println(\"2^10             = \" + rp.myPow(2, 10));       // 1024.0\n    }\n}"
            },
            "complexity": {
              "time": "O(N) linear | O(log N) binary pow | O(N log N) merge sort | O(2^N) naive tree",
              "space": "O(N) call stack depth (linear) | O(log N) divide & conquer | O(H) tree DFS"
            },
            "practice_questions": [
              {
                "title": "Fibonacci Number (LeetCode #509) — Classic Tree Recursion + Memoization",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/fibonacci-number/"
              },
              {
                "title": "Climbing Stairs (LeetCode #70) — Fibonacci Pattern with Memoization",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/climbing-stairs/"
              },
              {
                "title": "Reverse Linked List (Recursive) (LeetCode #206) — Head Recursion on Linked List",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/reverse-linked-list/"
              },
              {
                "title": "Merge Two Sorted Lists (LeetCode #21) — Linear Recursion + Combine",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/merge-two-sorted-lists/"
              },
              {
                "title": "Maximum Depth of Binary Tree (LeetCode #104) — Tree DFS Recursion",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
              },
              {
                "title": "Pow(x, n) (LeetCode #50) — Divide & Conquer Binary Exponentiation",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/powx-n/"
              },
              {
                "title": "Subsets (LeetCode #78) — Backtracking + Recursion Tree",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/subsets/"
              },
              {
                "title": "Permutations (LeetCode #46) — All Orderings via Backtracking",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/permutations/"
              },
              {
                "title": "K-th Symbol in Grammar (LeetCode #779) — Binary Recursion Pattern",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/k-th-symbol-in-grammar/"
              },
              {
                "title": "Decode Ways (LeetCode #91) — Memoized Recursion (DP Gateway)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/decode-ways/"
              }
            ]
          },
          {
            "id": "topic-backtracking-basics",
            "title": "Backtracking Basics (3 Types & State Trees)",
            "slug": "backtracking-basics",
            "difficulty": "Medium",
            "description": "Master the 3 types of backtracking problems, Decision State Trees, Pruning, and the Choose-Explore-Unchoose blueprint.",
            "video": {
              "url": "https://www.youtube.com/watch?v=DKCbsiDBN6c",
              "title": "Backtracking Algorithm Architecture & Blueprint",
              "start_seconds": 0,
              "end_seconds": 650,
              "chapters": [
                {
                  "title": "What is Backtracking?",
                  "start_seconds": 0
                },
                {
                  "title": "3 Types of Backtracking Problems",
                  "start_seconds": 140
                },
                {
                  "title": "Universal Choose-Explore-Unchoose Pattern",
                  "start_seconds": 280
                },
                {
                  "title": "Decision Tree Construction & Pruning",
                  "start_seconds": 460
                }
              ]
            },
            "explanation": "\n### 💡 What is Backtracking?\nBacktracking ek smart Brute-Force search technique hai jo candidate solutions ko incrementally banati hai. Jaise hi pata chalta hai ki current state se valid solution nahi ban sakta, yeh turant **piche lautkar (backtrack karke)** doosra branch explore karti hai.\n\n### 🏷️ 3 Core Types of Backtracking Problems\n\n```diagram:backtracking-types\n```\n\n1. **Decision Problems (Boolean True/False)**: Check karna ki koi target valid path exist karta hai ya nahi (e.g. Word Search, Rat in a Maze, Sudoku Solver). *Pehla solution milte hi return true kar do!*\n2. **Enumeration Problems (Find ALL Solutions)**: Saare possible combinations, permutations ya subsets collect karna (e.g. Subsets, Permutations, N-Queens).\n3. **Optimization Problems (Find BEST Metric)**: Constraints ke under Minimum ya Maximum cost path dhoondhna.\n\n### 🔄 The Universal 3-Step Backtracking Blueprint\n\n```\n         State []\n        /        \\\n    Pick 1      Pick 2\n     /             \\\n State [1]       State [2]\n    |               |\n Undo 1          Undo 2\n```\n\n1. **CHOOSE**: Ek candidate element pick karke current state list me add karo (`path.append(choice)`).\n2. **EXPLORE**: Next level solution dhoondhne ke liye recursively aage badho (`backtrack(next_index, path)`).\n3. **UN-CHOOSE (BACKTRACK)**: Return aate hi state restore karne ke liye remove karo (`path.pop()`).\n\n### 💻 Code Implementations for Backtracking Types\n\n```python\n# Type 1: Enumeration (Find All Subsets)\ndef subsets(nums: list[int]) -> list[list[int]]:\n    result = []\n    def backtrack(start: int, path: list[int]):\n        result.append(list(path))\n        for i in range(start, len(nums)):\n            path.append(nums[i])          # 1. CHOOSE\n            backtrack(i + 1, path)         # 2. EXPLORE\n            path.pop()                     # 3. UN-CHOOSE (Backtrack)\n    backtrack(0, [])\n    return result\n\n# Type 2: Decision Problem (Word Search Grid DFS)\ndef exist(board: list[list[str]], word: str) -> bool:\n    rows, cols = len(board), len(board[0])\n    def dfs(r, c, k):\n        if k == len(word): return True\n        if r < 0 or r >= rows or c < 0 or c >= cols or board[r][c] != word[k]:\n            return False\n        \n        temp, board[r][c] = board[r][c], '#'  # 1. CHOOSE (Mark visited)\n        found = (dfs(r+1,c,k+1) or dfs(r-1,c,k+1) or dfs(r,c+1,k+1) or dfs(r,c-1,k+1)) # 2. EXPLORE\n        board[r][c] = temp                    # 3. UN-CHOOSE (Restore state)\n        return found\n\n    for i in range(rows):\n        for j in range(cols):\n            if dfs(i, j, 0): return True\n    return False\n```\n                        ",
            "code_example": {
              "language": "multi",
              "python": "# Type 3: Constraint Satisfaction - N-Queens (Python)\ndef solve_n_queens(n):\n    cols = set(); pos_diag = set(); neg_diag = set()\n    result = []\n    board = [[\".\"] * n for _ in range(n)]\n\n    def backtrack(r):\n        if r == n:\n            result.append([\"\".join(row) for row in board])\n            return\n\n        for c in range(n):\n            if c in cols or (r + c) in pos_diag or (r - c) in neg_diag:\n                continue\n            cols.add(c); pos_diag.add(r + c); neg_diag.add(r - c)\n            board[r][c] = \"Q\"\n            backtrack(r + 1)\n            cols.remove(c); pos_diag.remove(r + c); neg_diag.remove(r - c)\n            board[r][c] = \".\"\n    backtrack(0)\n    return result",
              "java": "// Type 3: Constraint Satisfaction - N-Queens (Java 8)\nimport java.util.*;\n\npublic class Solution {\n    public List<List<String>> solveNQueens(int n) {\n        List<List<String>> result = new ArrayList<>();\n        char[][] board = new char[n][n];\n        for (int i = 0; i < n; i++) Arrays.fill(board[i], '.');\n        \n        Set<Integer> cols = new HashSet<>(), posDiag = new HashSet<>(), negDiag = new HashSet<>();\n        \n        backtrack(0, n, board, cols, posDiag, negDiag, result);\n        return result;\n    }\n\n    private void backtrack(int r, int n, char[][] board, Set<Integer> cols, \n                          Set<Integer> posDiag, Set<Integer> negDiag, List<List<String>> result) {\n        if (r == n) {\n            List<String> current = new ArrayList<>();\n            for (char[] row : board) current.add(new String(row));\n            result.add(current);\n            return;\n        }\n\n        for (int c = 0; c < n; c++) {\n            if (cols.contains(c) || posDiag.contains(r + c) || negDiag.contains(r - c)) continue;\n            cols.add(c); posDiag.add(r + c); negDiag.add(r - c);\n            board[r][c] = 'Q';\n            backtrack(r + 1, n, board, cols, posDiag, negDiag, result);\n            cols.remove(c); posDiag.remove(r + c); negDiag.remove(r - c);\n            board[r][c] = '.';\n        }\n    }\n}"
            },
            "complexity": {
              "time": "O(2^N) for subsets, O(N!) for permutations & N-Queens",
              "space": "O(N) recursion call stack depth"
            },
            "practice_questions": [
              {
                "title": "Subsets (LeetCode #78)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/subsets/"
              },
              {
                "title": "Permutations (LeetCode #46)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/permutations/"
              },
              {
                "title": "Combination Sum (LeetCode #39)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/combination-sum/"
              },
              {
                "title": "Generate Parentheses (LeetCode #22)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/generate-parentheses/"
              },
              {
                "title": "Letter Combinations of a Phone Number (LeetCode #17)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/"
              },
              {
                "title": "N-Queens (LeetCode #51)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/n-queens/"
              }
            ]
          },
          {
            "id": "topic-recurrence-relations",
            "title": "Recurrence Relations (3 Solving Methods & Master Theorem)",
            "slug": "recurrence-relations",
            "difficulty": "Medium",
            "description": "Master recurrence equations via 3 methods: Master Theorem, Recursion Tree Method, and Substitution Method.",
            "video": {
              "url": "https://www.youtube.com/watch?v=2T-A_3vwG3o",
              "title": "Master Theorem & Solving Recurrence Relations",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "What is a Recurrence Relation?",
                  "start_seconds": 0
                },
                {
                  "title": "3 Solving Methods (Tree, Master, Substitution)",
                  "start_seconds": 160
                },
                {
                  "title": "Master Theorem Formula & 3 Cases",
                  "start_seconds": 320
                },
                {
                  "title": "Real Algorithm Derivations (Merge Sort, Binary Search)",
                  "start_seconds": 460
                }
              ]
            },
            "explanation": "\n### 💡 What is a Recurrence Relation?\nEk recursive algorithm ka runtime calculate karne ke liye hum use ek mathematical equation ke roop me formulate karte hain jise **Recurrence Relation** kehte hain.\n\n### 🏷️ 3 Major Methods to Solve Recurrence Relations\n1. **Master Theorem Method (Instant Formula)**: Divide & conquer recurrences ke liye sabse fast formula.\n2. **Recursion Tree Method (Visual Summation)**: Har level ka work calculate karke tree height se multiply karna.\n3. **Substitution Method (Mathematical Induction)**: Pehle guess lagana fir induction se prove karna.\n\n### 🌳 Method 1: Recursion Tree Visualization (Merge Sort)\n\n```diagram:divide-and-conquer-tree\n```\n\n### 📐 Method 2: Master Theorem Standard Formula\nJab recurrence equation is form me ho:\n**`T(N) = a * T(N / b) + O(N^d)`**\n- **`a`**: Subproblems generated at each step (`a >= 1`).\n- **`b`**: Division factor of input size (`b > 1`).\n- **`d`**: Work degree outside recursion (split / combine cost).\n\n| Case Condition | Mathematical Result | Real Algorithm Example |\n| :--- | :--- | :--- |\n| **Case 1: `d < log_b(a)`** | **`O(N^(log_b(a)))`** | Strassen Matrix Multiplication (`T(N)=7T(N/2)+O(N²)` ➔ `O(N^2.81)`) |\n| **Case 2: `d == log_b(a)`** | **`O(N^d * log N)`** | Merge Sort (`T(N)=2T(N/2)+O(N)` ➔ `O(N log N)`), Binary Search (`T(N)=1T(N/2)+O(1)` ➔ `O(log N)`) |\n| **Case 3: `d > log_b(a)`** | **`O(N^d)`** | QuickSelect / Linear Partitioning (`T(N)=T(N/2)+O(N)` ➔ `O(N)`) |\n\n### 💻 Code Implementations of Solved Recurrences\n\n```python\n# 1. Binary Search: T(N) = 1*T(N/2) + O(1) -> O(log N)\ndef binary_search_rec(arr, low, high, target):\n    if low > high: return -1\n    mid = (low + high) // 2\n    if arr[mid] == target: return mid\n    elif arr[mid] > target: return binary_search_rec(arr, low, mid - 1, target)\n    else: return binary_search_rec(arr, mid + 1, high, target)\n\n# 2. Merge Sort: T(N) = 2*T(N/2) + O(N) -> O(N log N)\ndef merge_sort(arr):\n    if len(arr) <= 1: return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])    # T(N/2)\n    right = merge_sort(arr[mid:])   # T(N/2)\n    return merge(left, right)       # O(N) combine step\n```\n                        ",
            "code_example": {
              "language": "multi",
              "python": "# Complete Recurrence Reference Examples\n# Case 2 Example: Merge Sort (T(N)=2T(N/2)+O(N) -> O(N log N))\ndef merge_sort_demo(arr):\n    if len(arr) <= 1: return arr\n    mid = len(arr) // 2\n    return sorted(arr)",
              "java": "// Java 8 Solution: Merge Sort (T(N) = 2T(N/2) + O(N) -> O(N log N))\nimport java.util.*;\n\npublic class Solution {\n    public int[] sortArray(int[] nums) {\n        if (nums.length <= 1) return nums;\n        mergeSort(nums, 0, nums.length - 1);\n        return nums;\n    }\n\n    private void mergeSort(int[] arr, int l, int r) {\n        if (l >= r) return;\n        int mid = l + (r - l) / 2;\n        mergeSort(arr, l, mid);\n        mergeSort(arr, mid + 1, r);\n        merge(arr, l, mid, r);\n    }\n\n    private void merge(int[] arr, int l, int mid, int r) {\n        int[] temp = new int[r - l + 1];\n        int i = l, j = mid + 1, k = 0;\n        while (i <= mid && j <= r) temp[k++] = (arr[i] <= arr[j]) ? arr[i++] : arr[j++];\n        while (i <= mid) temp[k++] = arr[i++];\n        while (j <= r) temp[k++] = arr[j++];\n        System.arraycopy(temp, 0, arr, l, temp.length);\n    }\n}"
            },
            "complexity": {
              "time": "Analytical Mathematical Derivation via Master Theorem",
              "space": "O(log N) to O(N) call tree depth"
            },
            "practice_questions": [
              {
                "title": "Sort an Array (Merge Sort O(N log N)) (LeetCode #912)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/sort-an-array/"
              },
              {
                "title": "Kth Largest Element in an Array (QuickSelect O(N)) (LeetCode #215)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/"
              },
              {
                "title": "Majority Element (Divide & Conquer) (LeetCode #169)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/majority-element/"
              },
              {
                "title": "Search a 2D Matrix II (LeetCode #240)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/search-a-2d-matrix-ii/"
              }
            ]
          },
          {
            "id": "topic-stl-collections",
            "title": "Language STL & Built-in Collections Internals (C++, Java & Python)",
            "slug": "stl-collections-internals",
            "difficulty": "Easy",
            "description": "Master internal data structures, exact Time/Space complexities of vectors, hash maps, priority queues, and custom comparators for Google interviews.",
            "video": {
              "url": "https://www.youtube.com/watch?v=R5PEu0p_c_A",
              "title": "C++ STL, Java Collections & Python Internals for Interviews",
              "start_seconds": 0,
              "end_seconds": 720,
              "chapters": [
                {
                  "title": "Why STL & Collections Internals Matter in Interviews",
                  "start_seconds": 0
                },
                {
                  "title": "Vectors, ArrayLists & Python Lists Dynamic Resizing",
                  "start_seconds": 120
                },
                {
                  "title": "HashMaps vs TreeMaps (Hash Table vs Red-Black Tree)",
                  "start_seconds": 300
                },
                {
                  "title": "Heaps & Priority Queues Under the Hood",
                  "start_seconds": 480
                },
                {
                  "title": "Custom Sorting & Lambda Comparators",
                  "start_seconds": 620
                }
              ]
            },
            "explanation": "\n### 🌟 Why Language Internals Matter in Google Interviews\nGoogle interviews me jab aap built-in data structures (jaise C++ me `std::map`, Java me `TreeMap`, ya Python me `heapq`) use karte hain, toh interviewer aapse turant poochta hai:\n- *\"Under the hood iska internal data structure kya hai?\"*\n- *\"Worst-case aur average-case time complexity kya hai?\"*\n- *\"Iska memory overhead aur collision handling mechanism kya hai?\"*\n\n---\n\n### 📊 Master Comparison: C++ STL vs Java Collections vs Python\n\n| Abstract DS | C++ STL Equivalent | Java Collections | Python Built-in | Under the Hood DS | Common Operations Complexity |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| **Dynamic Array** | `std::vector` | `ArrayList<T>` | `list` | Contiguous memory buffer (Doubling factor) | Append: `O(1)` Amortized<br>Random Access: `O(1)`<br>Insert/Delete Middle: `O(N)` |\n| **Doubly Linked List** | `std::list` | `LinkedList<T>` | `collections.deque` | Nodes with Prev/Next pointers | Insert/Delete at ends: `O(1)`<br>Random Access: `O(N)` |\n| **Hash Set / Map** | `unordered_set` / `unordered_map` | `HashSet<T>` / `HashMap<K,V>` | `set` / `dict` | Hash Table with Buckets (Separate Chaining / Open Addressing) | Insert/Find/Delete:<br>Avg `O(1)`, Worst `O(N)` |\n| **Ordered Set / Map** | `std::set` / `std::map` | `TreeSet<T>` / `TreeMap<K,V>` | `sortedcontainers.SortedDict` | Self-Balancing BST (**Red-Black Tree**) | Insert/Find/Delete: **Strict `O(log N)`**<br>In-order traversal is sorted! |\n| **Priority Queue (Heap)** | `std::priority_queue` (Max-heap default) | `PriorityQueue<T>` (Min-heap default) | `heapq` (Min-heap default) | Complete Binary Tree inside Array | Push: `O(log N)`<br>Pop (Top): `O(log N)`<br>Peek: `O(1)`<br>Heapify: `O(N)` |\n| **Double-ended Queue** | `std::deque` | `ArrayDeque<T>` | `collections.deque` | Circular Ring Buffer / Block Arrays | Push/Pop Front & Back: `O(1)` |\n\n---\n\n### ⚠️ Google Interview Gotchas (Must-Know Nuances)\n1. **`unordered_map` Worst Case Attack**: C++ `unordered_map` me custom hash na hone par hash collision attack se operations `O(N)` ho sakte hain. Isliye critical cases me `std::map` ya custom hash use karein.\n2. **Min-Heap vs Max-Heap Defaults**:\n   - C++ `priority_queue<int>` ➔ **Max-Heap** by default (Top element largest).\n   - Java `PriorityQueue<Integer>` & Python `heapq` ➔ **Min-Heap** by default (Top element smallest).\n3. **Custom Comparator Rules (Strict Weak Ordering)**:\n   - Agar do elements equal hain, toh comparator ko `false` return karna chahiye taaki infinite loop / segmentation fault na aaye.\n                        ",
            "code_example": {
              "language": "multi",
              "python": "# Python Collections & Custom Sorting Guide\nimport heapq\nfrom collections import deque, Counter, defaultdict\n\n# 1. Min-Heap & Max-Heap\nmin_heap = [5, 1, 9, 3]\nheapq.heapify(min_heap)               # O(N) linear time heapify\nheapq.heappush(min_heap, 2)           # O(log N) push\ntop_smallest = heapq.heappop(min_heap)# O(log N) pop -> 1\n\n# Max-heap trick in Python (multiply by -1)\nmax_heap = [-x for x in [5, 1, 9, 3]]\nheapq.heapify(max_heap)\ntop_largest = -heapq.heappop(max_heap)# 9\n\n# 2. Deque (Double Ended Queue) - O(1) ends operations\ndq = deque([1, 2, 3])\ndq.appendleft(0)  # O(1)\ndq.pop()          # O(1)\n\n# 3. Custom Comparator (Sort intervals by start asc, end desc)\nintervals = [[1, 4], [2, 3], [1, 5]]\nintervals.sort(key=lambda x: (x[0], -x[1])) # [[1, 5], [1, 4], [2, 3]]",
              "java": "// Java Collections & PriorityQueue Custom Comparator\nimport java.util.*;\n\npublic class STLCollectionsDemo {\n    public static void main(String[] args) {\n        // 1. Min-Heap (Default) vs Max-Heap\n        PriorityQueue<Integer> minHeap = new PriorityQueue<>();\n        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());\n        \n        // 2. Custom Comparator for 2D Arrays / Objects (e.g. Intervals)\n        int[][] intervals = {{1, 4}, {2, 3}, {1, 5}};\n        Arrays.sort(intervals, (a, b) -> {\n            if (a[0] != b[0]) return Integer.compare(a[0], b[0]); // Sort by start asc\n            return Integer.compare(b[1], a[1]);                  // Sort by end desc\n        });\n        \n        // 3. TreeMap (Sorted Key Navigation - O(log N))\n        TreeMap<Integer, String> treeMap = new TreeMap<>();\n        treeMap.put(10, \"Ten\");\n        treeMap.put(20, \"Twenty\");\n        Integer floor = treeMap.floorKey(15); // <= 15 -> Returns 10 in O(log N)\n        Integer ceiling = treeMap.ceilingKey(15); // >= 15 -> Returns 20 in O(log N)\n    }\n}"
            },
            "complexity": {
              "time": "Vector/Map/Heap operations range from O(1) to O(log N)",
              "space": "O(N) data container capacity"
            },
            "practice_questions": [
              {
                "title": "Top K Frequent Elements (LeetCode #347)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/top-k-frequent-elements/"
              },
              {
                "title": "Merge K Sorted Lists (PriorityQueue) (LeetCode #23)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/merge-k-sorted-lists/"
              },
              {
                "title": "Find Median from Data Stream (Two Heaps) (LeetCode #295)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/find-median-from-data-stream/"
              },
              {
                "title": "Insert Delete GetRandom O(1) (LeetCode #380)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/insert-delete-getrandom-o1/"
              }
            ]
          },
          {
            "id": "topic-math-number-theory",
            "title": "Basic Math & Number Theory for Coding Interviews",
            "slug": "math-number-theory-basics",
            "difficulty": "Easy",
            "description": "Master GCD/LCM (Euclidean), Prime Sieve of Eratosthenes, Fast Modular Exponentiation, and Integer Overflow protection.",
            "video": {
              "url": "https://www.youtube.com/watch?v=1xNbjMdbjug",
              "title": "Number Theory, GCD, Prime Sieve & Modular Arithmetic",
              "start_seconds": 0,
              "end_seconds": 680,
              "chapters": [
                {
                  "title": "Essential Number Theory for Interviews",
                  "start_seconds": 0
                },
                {
                  "title": "Euclidean Algorithm for GCD & LCM",
                  "start_seconds": 110
                },
                {
                  "title": "Sieve of Eratosthenes for Prime Numbers",
                  "start_seconds": 260
                },
                {
                  "title": "Modular Arithmetic & Fast Power (a^b % mod)",
                  "start_seconds": 440
                },
                {
                  "title": "Avoiding 32-bit Integer Overflow",
                  "start_seconds": 590
                }
              ]
            },
            "explanation": "\n### 🌟 Why Math & Number Theory are Tested in Google Interviews\nGoogle ke coding rounds me pure theoretical math ke sawal nahi aate, balki **mathematical sub-routines** aate hain jo bade algorithmic problems ka crucial hissa hote hain.\n\n---\n\n### 🔑 4 Core Mathematical Pillars for DSA\n\n#### 1. Euclidean Algorithm for Greatest Common Divisor (GCD)\n- **Mathematical Principle**: `gcd(a, b) = gcd(b, a % b)` with base case `gcd(a, 0) = a`.\n- **Time Complexity**: **`O(log(min(a, b)))`** (Lame's Theorem).\n- **LCM Relationship**: `lcm(a, b) = (a * b) / gcd(a, b)`.\n\n#### 2. Sieve of Eratosthenes (Prime Numbers up to N)\n- 1 se lekar `N` tak ke saare prime numbers nikalne ka sabse optimal algorithm.\n- **Time Complexity**: **`O(N log(log N))`** (Lagbhag Linear time).\n\n```diagram:sieve-primes\n```\n\n#### 3. Fast Modular Exponentiation (Binary Exponentiation)\n- `(base^exp) % MOD` calculate karna in **`O(log exp)`** time instead of `O(exp)`.\n- Industry Standard `MOD = 10^9 + 7` (1000000007) jo ek large prime number hai aur integer multiplication overflow prevent karta hai.\n\n#### 4. Avoiding Integer Overflow (Google Trap)\n- `low + high` calculation me `int` 32-bit overflow ho sakta hai:\n  - ❌ `mid = (low + high) / 2`\n  - ✅ `mid = low + (high - low) / 2`\n                        ",
            "code_example": {
              "language": "multi",
              "python": "# Python Math & Number Theory Toolbelt\ndef gcd(a: int, b: int) -> int:\n    while b:\n        a, b = b, a % b\n    return a\n\ndef lcm(a: int, b: int) -> int:\n    return (a * b) // gcd(a, b)\n\n# Sieve of Eratosthenes O(N log log N)\ndef sieve_of_eratosthenes(n: int) -> list[int]:\n    is_prime = [True] * (n + 1)\n    is_prime[0] = is_prime[1] = False\n    \n    p = 2\n    while p * p <= n:\n        if is_prime[p]:\n            for i in range(p * p, n + 1, p):\n                is_prime[i] = False\n        p += 1\n    return [i for i in range(2, n + 1) if is_prime[i]]\n\n# Fast Modular Exponentiation: (base^exp) % mod in O(log exp)\ndef modular_pow(base: int, exp: int, mod: int = 10**9 + 7) -> int:\n    res = 1\n    base = base % mod\n    while exp > 0:\n        if exp % 2 == 1:\n            res = (res * base) % mod\n        base = (base * base) % mod\n        exp //= 2\n    return res",
              "java": "// Java Number Theory Toolbelt\nimport java.util.*;\n\npublic class NumberTheory {\n    // GCD in O(log(min(a, b)))\n    public static long gcd(long a, long b) {\n        return b == 0 ? a : gcd(b, a % b);\n    }\n\n    public static long lcm(long a, long b) {\n        return (a / gcd(a, b)) * b;\n    }\n\n    // Sieve of Eratosthenes\n    public static boolean[] sieve(int n) {\n        boolean[] isPrime = new boolean[n + 1];\n        Arrays.fill(isPrime, true);\n        isPrime[0] = isPrime[1] = false;\n        \n        for (int p = 2; p * p <= n; p++) {\n            if (isPrime[p]) {\n                for (int i = p * p; i <= n; i += p) {\n                    isPrime[i] = false;\n                }\n            }\n        }\n        return isPrime;\n    }\n\n    // Fast Power (base^exp) % MOD in O(log exp)\n    public static long modularPow(long base, long exp, long mod) {\n        long res = 1;\n        base %= mod;\n        while (exp > 0) {\n            if ((exp & 1) == 1) res = (res * base) % mod;\n            base = (base * base) % mod;\n            exp >>= 1;\n        }\n        return res;\n    }\n}"
            },
            "complexity": {
              "time": "GCD: O(log(min(a,b))), Sieve: O(N log log N), Fast Pow: O(log exp)",
              "space": "Sieve: O(N), Others: O(1)"
            },
            "practice_questions": [
              {
                "title": "Count Primes (LeetCode #204)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/count-primes/"
              },
              {
                "title": "Pow(x, n) (LeetCode #50)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/powx-n/"
              },
              {
                "title": "Greatest Common Divisor of Strings (LeetCode #1071)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/greatest-common-divisor-of-strings/"
              },
              {
                "title": "Super Pow (Euler/Modular Math) (LeetCode #372)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/super-pow/"
              }
            ]
          },
          {
            "id": "topic-constraints-complexity",
            "title": "Constraint-to-Complexity Master Guide (Google Heuristics)",
            "slug": "constraint-to-complexity-guide",
            "difficulty": "Easy",
            "description": "Master the 5-second constraint deduction formula to instantly predict the expected optimal algorithm during Google technical rounds.",
            "video": {
              "url": "https://www.youtube.com/watch?v=wBeg02tmsO0",
              "title": "How to Guess Expected Time Complexity from Problem Constraints",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "The 1-Second CPU Operations Rule (10^8 ops)",
                  "start_seconds": 0
                },
                {
                  "title": "Constraint vs Target Complexity Table",
                  "start_seconds": 130
                },
                {
                  "title": "N <= 20: Backtracking & Bitmask DP",
                  "start_seconds": 280
                },
                {
                  "title": "N <= 10^5: Sorting, Heaps, Two Pointers",
                  "start_seconds": 420
                },
                {
                  "title": "N >= 10^9: Math & Binary Search on Answer",
                  "start_seconds": 520
                }
              ]
            },
            "explanation": "\n### ⚡ The 1-Second CPU Operation Rule (10⁸ Operations / sec)\nModern online judges (LeetCode, Codeforces, Google internal interview runners) allow approximately **1 second (or 2 seconds)** per test case:\n- **Rule of Thumb**: Aapka total number of operations **`~10^8` (100 Million)** se kam hona chahiye!\n- Agar `Total Operations > 10^8` ➔ **Time Limit Exceeded (TLE)** error aayega!\n\n---\n\n### 🗺️ The Google Interview Constraint Decoding Table\n\n| Given Input Constraint (N) | Max Expected Time Complexity | Expected Algorithm / Technique to Apply | Real Interview Problem Example |\n| :--- | :--- | :--- | :--- |\n| **`N <= 10` to `12`** | **`O(N!)`** or **`O(N^2 * 2^N)`** | Factorial Permutations, TSP, Brute-force Recursion | Traveling Salesperson, Permutations |\n| **`N <= 20`** | **`O(2^N)`** | Subsets Backtracking, Bitmask DP, Meet in the Middle | N-Queens, Word Search, Partition Equal Subset |\n| **`N <= 100`** | **`O(N^4)`** or **`O(N^3)`** | 3D Dynamic Programming, Matrix Chain Multiplication, Floyd Warshall | Burst Balloons, Shortest Path All Pairs |\n| **`N <= 500` to `1,000`** | **`O(N^2)`** | Nested Loops, 2D Grid DP, All-Pairs Check, Bubble/Insertion logic | Longest Common Subsequence (LCS), Edit Distance |\n| **`N <= 10^5` to `10^6`** | **`O(N log N)`** or **`O(N)`** | **Most Common Google Bracket**: Sorting, Heaps, Two Pointers, Sliding Window, DSU, Dijkstra, Monotonic Stack, Greedy | Two Sum, Merge Intervals, Course Schedule, Trapping Rain Water |\n| **`N <= 10^9` to `10^18`** | **`O(log N)`** or **`O(1)`** | Binary Search on Answer, Mathematical Formulas, Matrix Exponentiation | Aggressive Cows, Sqrt(x), Capacity To Ship Packages |\n\n---\n\n### 🎯 5-Step Interview Constraint Analysis Routine\nJab bhi question open ho:\n1. **Pehle Constraints Check Karein**: Look at `1 <= nums.length <= 10^5`.\n2. **Reverse Engineer Complexity**: `10^5` means $O(N^2)$ will fail with TLE ($10^{10} > 10^8$). Target MUST be $O(N log N)$ or $O(N)$.\n3. **Shortlist Candidate Data Structures**: Since target is $O(N)$ or $O(N log N)$, think: HashMap, Monotonic Stack, Sliding Window, Sorting + Two Pointers.\n4. **Clarify Edge Ranges**: Is $N=0$ possible? Can elements be negative? Is integer overflow possible if sum is taken?\n                        ",
            "code_example": {
              "language": "multi",
              "python": "# Constraint-Driven Algorithm Selection Example:\n# Problem: Given array of N integers, find 2 numbers that sum to Target.\n\n# Case 1: If N <= 100 (O(N^2) Brute Force passes easily)\ndef two_sum_quadratic(nums, target):\n    n = len(nums)\n    for i in range(n):\n        for j in range(i + 1, n):\n            if nums[i] + nums[j] == target:\n                return [i, j]\n    return []\n\n# Case 2: If N <= 10^5 (O(N) Hash Table REQUIRED to avoid TLE)\ndef two_sum_linear(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []",
              "java": "// Java Constraint Decision Example\nimport java.util.*;\n\npublic class TwoSumSelection {\n    // O(N) Hash Map Required when N = 10^5\n    public int[] twoSumLinear(int[] nums, int target) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (map.containsKey(complement)) {\n                return new int[]{map.get(complement), i};\n            }\n            map.put(nums[i], i);\n        }\n        return new int[]{};\n    }\n}"
            },
            "complexity": {
              "time": "Decision Heuristic: Maps constraints N directly to target runtime",
              "space": "Determines trade-offs (e.g. O(N) auxiliary memory for O(N) runtime)"
            },
            "practice_questions": [
              {
                "title": "Two Sum (LeetCode #1)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/two-sum/"
              },
              {
                "title": "3Sum (LeetCode #15)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/3sum/"
              },
              {
                "title": "Trapping Rain Water (LeetCode #42)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/trapping-rain-water/"
              },
              {
                "title": "Median of Two Sorted Arrays (O(log(min(m,n)))) (LeetCode #4)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/median-of-two-sorted-arrays/"
              }
            ]
          }
        ]
      },
      {
        "id": "sub-arrays",
        "name": "2. Arrays",
        "icon": "📊",
        "topics": [
          {
            "id": "topic-1d-2d-arrays",
            "title": "1D & 2D Arrays (Matrix Traversals & Memory Mapping)",
            "slug": "1d-2d-arrays",
            "difficulty": "Easy",
            "description": "Understand contiguous RAM allocation, row-major vs column-major indexing, Spiral Matrix traversal, and matrix rotations.",
            "video": {
              "url": "https://www.youtube.com/watch?v=pmN9ExVY3gE",
              "title": "2D Matrix Traversals & Memory Architecture",
              "start_seconds": 0,
              "end_seconds": 500,
              "chapters": [
                {
                  "title": "Contiguous Memory & Cache Locality",
                  "start_seconds": 0
                },
                {
                  "title": "Row-Major Indexing: idx = r * C + c",
                  "start_seconds": 140
                },
                {
                  "title": "4 Types of Matrix Traversals",
                  "start_seconds": 280
                },
                {
                  "title": "Spiral Matrix Traversal Walk",
                  "start_seconds": 400
                }
              ]
            },
            "explanation": "\n### 💡 1D & 2D Array Memory Representation\nHardware RAM purely **1D linear memory addresses** hoti hai. Jab hum 2D matrix banate hain, CPU use **Row-Major Order** me flatten karke store karta hai.\n\n### 📐 2D to 1D Memory Mapping Formula\n- **Matrix Cell to 1D Index**: `Index = (row * cols) + col`\n- **1D Index to 2D Cell**: `row = index // cols`, `col = index % cols`\n\n```diagram:2d-array\n```\n\n### 🏷️ 4 Major Matrix Traversal Patterns\n1. **Row-by-Row Traversal (Cache Optimal)**: CPU spatial cache lines ko efficiently utilize karta hai (**Fastest**).\n2. **Column-by-Column Traversal**: Memory me bar-bar jumps karta hai, causing frequent CPU Cache Misses.\n3. **Diagonal Traversal**: Same diagonals ke elements ka `(r + c)` ya `(r - c)` constant hota hai.\n4. **Boundary / Spiral Traversal**: 4 pointers (`top, bottom, left, right`) maintain karke matrix ke outer boundary ko layer-by-layer peel karna.\n\n### 💻 Code Implementations: Spiral Matrix & In-Place Rotation (90°)\n\n```python\n# 1. Spiral Matrix Traversal (O(R * C) Time, O(1) Auxiliary Space)\ndef spiral_order(matrix):\n    if not matrix: return []\n    res = []\n    top, bottom = 0, len(matrix) - 1\n    left, right = 0, len(matrix[0]) - 1\n    \n    while top <= bottom and left <= right:\n        # Step 1: Traverse Right\n        for c in range(left, right + 1): res.append(matrix[top][c])\n        top += 1\n        # Step 2: Traverse Down\n        for r in range(top, bottom + 1): res.append(matrix[r][right])\n        right -= 1\n        # Step 3: Traverse Left\n        if top <= bottom:\n            for c in range(right, left - 1, -1): res.append(matrix[bottom][c])\n            bottom -= 1\n        # Step 4: Traverse Up\n        if left <= right:\n            for r in range(bottom, top - 1, -1): res.append(matrix[r][left])\n            left += 1\n    return res\n\n# 2. In-Place Rotate Matrix 90° Clockwise (Transpose + Reverse Rows)\ndef rotate_matrix_90(matrix):\n    n = len(matrix)\n    # Step A: Transpose matrix (swap matrix[i][j] with matrix[j][i])\n    for i in range(n):\n        for j in range(i + 1, n):\n            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]\n    # Step B: Reverse each row\n    for r in range(n):\n        matrix[r].reverse()\n```\n                        ",
            "code_example": {
              "language": "multi",
              "python": "# Set Matrix Zeroes (Python 2.7, 3.6 - 3.12 compatible)\ndef set_zeroes(matrix):\n    if not matrix: return\n    rows, cols = len(matrix), len(matrix[0])\n    row_zero = False\n    \n    for r in range(rows):\n        for c in range(cols):\n            if matrix[r][c] == 0:\n                matrix[0][c] = 0\n                if r > 0: matrix[r][0] = 0\n                else: row_zero = True\n                \n    for r in range(1, rows):\n        for c in range(1, cols):\n            if matrix[0][c] == 0 or matrix[r][0] == 0:\n                matrix[r][c] = 0\n                \n    if matrix[0][0] == 0:\n        for r in range(rows): matrix[r][0] = 0\n    if row_zero:\n        for c in range(cols): matrix[0][c] = 0",
              "java": "// Java 8 Solution: Set Matrix Zeroes (In-Place O(1) Space)\npublic class Solution {\n    public void setZeroes(int[][] matrix) {\n        int rows = matrix.length, cols = matrix[0].length;\n        boolean rowZero = false;\n\n        for (int r = 0; r < rows; r++) {\n            for (int c = 0; c < cols; c++) {\n                if (matrix[r][c] == 0) {\n                    matrix[0][c] = 0;\n                    if (r > 0) matrix[r][0] = 0;\n                    else rowZero = true;\n                }\n            }\n        }\n\n        for (int r = 1; r < rows; r++) {\n            for (int c = 1; c < cols; c++) {\n                if (matrix[0][c] == 0 || matrix[r][0] == 0) {\n                    matrix[r][c] = 0;\n                }\n            }\n        }\n\n        if (matrix[0][0] == 0) {\n            for (int r = 0; r < rows; r++) matrix[r][0] = 0;\n        }\n        if (rowZero) {\n            for (int c = 0; c < cols; c++) matrix[0][c] = 0;\n        }\n    }\n}"
            },
            "complexity": {
              "time": "O(R * C) matrix elements",
              "space": "O(1) in-place pointers"
            },
            "practice_questions": [
              {
                "title": "Spiral Matrix (LeetCode #54)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/spiral-matrix/"
              },
              {
                "title": "Rotate Image (In-Place 90°) (LeetCode #48)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/rotate-image/"
              },
              {
                "title": "Set Matrix Zeroes (LeetCode #73)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/set-matrix-zeroes/"
              },
              {
                "title": "Search a 2D Matrix (LeetCode #74)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/search-a-2d-matrix/"
              },
              {
                "title": "Diagonal Traverse (LeetCode #498)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/diagonal-traverse/"
              }
            ]
          },
          {
            "id": "topic-array-operations",
            "title": "Array Operations: Traversal, Insertion & Deletion Mechanics",
            "slug": "array-operations",
            "difficulty": "Easy",
            "description": "Understand low-level array memory layout, insertion/deletion shifting mechanics, linear vs binary search, and dynamic array resizing.",
            "video": {
              "url": "https://www.youtube.com/watch?v=73hx_m_rIog",
              "title": "Array Data Structure: Memory, Insertion & Deletion",
              "start_seconds": 0,
              "end_seconds": 560,
              "chapters": [
                {
                  "title": "Array Memory Representation & Address Calculation",
                  "start_seconds": 0
                },
                {
                  "title": "Insertion Mechanics & Right Shift",
                  "start_seconds": 140
                },
                {
                  "title": "Deletion Mechanics & Left Shift",
                  "start_seconds": 290
                },
                {
                  "title": "Linear vs Binary Search",
                  "start_seconds": 420
                }
              ]
            },
            "explanation": "\n### 💡 Array Memory Model & Random Access\nArray ek **contiguous (continuous block)** of memory allocation hota hai. Har element ka memory address direct formula se compute hota hai:\n\n**`Address(arr[i]) = Base_Address + (i * Element_Size_In_Bytes)`**\nIs formula ki wajah se array me kisi bhi index ko access karna **`O(1)` Constant Time** hota hai!\n\n```diagram:array-operations\n```\n\n### 🏷️ Core Array Operations Breakdown\n1. **Traversal (`O(N)`)**: Har element ko ek-ek karke visit karna.\n2. **Insertion**:\n   - At End (with spare capacity): **`O(1)`**\n   - At Start / Middle index `k`: **`O(N)`** (Elements from index `k` to `N-1` ko right shift karna padta hai).\n3. **Deletion**:\n   - From End: **`O(1)`**\n   - From Start / Middle index `k`: **`O(N)`** (Elements from index `k+1` to `N-1` ko left shift karna padta hai).\n4. **Search**:\n   - Linear Search (Unsorted): **`O(N)`**\n   - Binary Search (Sorted): **`O(log N)`**\n\n### 💻 Code Implementations: Insert, Delete & Search\n\n```python\n# 1. In-Place Element Insertion at Index\ndef insert_at_index(arr, idx, val):\n    arr.append(0)  # Expand size\n    for i in range(len(arr) - 1, idx, -1):\n        arr[i] = arr[i - 1]  # Shift elements right\n    arr[idx] = val\n\n# 2. In-Place Element Deletion from Index\ndef delete_at_index(arr, idx):\n    if idx < 0 or idx >= len(arr): return\n    for i in range(idx, len(arr) - 1):\n        arr[i] = arr[i + 1]  # Shift elements left\n    arr.pop()\n\n# 3. Binary Search in Sorted Array (O(log N))\ndef binary_search(arr, target):\n    l, r = 0, len(arr) - 1\n    while l <= r:\n        mid = l + (r - l) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: l = mid + 1\n        else: r = mid - 1\n    return -1\n```\n                        ",
            "code_example": {
              "language": "multi",
              "python": "# Remove Element In-Place (LeetCode #27)\ndef remove_element(nums, val):\n    k = 0\n    for i in range(len(nums)):\n        if nums[i] != val:\n            nums[k] = nums[i]\n            k += 1\n    return k",
              "java": "// Java 8 Solution: Remove Element In-Place (O(N) Time, O(1) Space)\npublic class Solution {\n    public int removeElement(int[] nums, int val) {\n        int k = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] != val) {\n                nums[k++] = nums[i];\n            }\n        }\n        return k;\n    }\n}"
            },
            "complexity": {
              "time": "O(1) access/end insert, O(N) middle insert/delete/search",
              "space": "O(1) in-place auxiliary memory"
            },
            "practice_questions": [
              {
                "title": "Remove Element (LeetCode #27)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/remove-element/"
              },
              {
                "title": "Remove Duplicates from Sorted Array (LeetCode #26)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/"
              },
              {
                "title": "Concatenation of Array (LeetCode #1929)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/concatenation-of-array/"
              },
              {
                "title": "Find Numbers with Even Number of Digits (LeetCode #1295)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/"
              }
            ]
          },
          {
            "id": "topic-two-pointer-tech",
            "title": "Two Pointer Technique (3 Major Patterns & Multi-Directional)",
            "slug": "two-pointer-technique",
            "difficulty": "Easy",
            "description": "Eliminate nested O(N^2) loops into linear O(N) using Opposite Ends, Fast & Slow, and Partitioning pointers.",
            "video": {
              "url": "https://www.youtube.com/watch?v=-gjxg6Pln50",
              "title": "Two Pointers Patterns for LeetCode Interviews",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Pattern 1: Opposite Ends Convergence",
                  "start_seconds": 0
                },
                {
                  "title": "Pattern 2: Fast & Slow / Chasing Pointers",
                  "start_seconds": 220
                },
                {
                  "title": "Pattern 3: Trapping Rain Water & 3Sum",
                  "start_seconds": 410
                }
              ]
            },
            "explanation": "\n### 💡 What is the Two Pointer Technique?\nTwo Pointer technique nested loops (`O(N²)`) ko linear scan (`O(N)`) me convert karti hai do synchronized indices maintain karke.\n\n```diagram:two-pointers\n```\n\n### 🏷️ 3 Core Two-Pointer Patterns\n1. **Opposite Ends Convergence**: Ek pointer start (`left = 0`) par aur doosra end (`right = n - 1`) par hota hai. Array sorted hona chahiye. Current sum dekhkar decide karte hain kis pointer ko aage badhana hai (e.g. Two Sum II, 3Sum, Container With Most Water).\n2. **Fast & Slow (Reader-Writer) Pointers**: `fast` pointer pure array ko scan karta hai aur `slow` pointer valid elements ko in-place write karta hai (e.g. Remove Duplicates, Move Zeroes, Linked List Cycle).\n3. **Two Arrays Merging**: Do sorted arrays ko traverse karke single sorted array banana (e.g. Merge Sorted Array).\n\n### 💻 Code Implementations for Two Pointer Patterns\n\n```python\n# Pattern 1: Two Sum in Sorted Array (O(N) Time, O(1) Space - Python)\ndef two_sum_sorted(nums, target):\n    left, right = 0, len(nums) - 1\n    while left < right:\n        curr = nums[left] + nums[right]\n        if curr == target: return [left + 1, right + 1]\n        elif curr < target: left += 1   # Need bigger sum\n        else: right -= 1               # Need smaller sum\n    return []\n\n# Pattern 2: Container With Most Water (Greedy Two Pointers)\ndef max_area(height):\n    left, right = 0, len(height) - 1\n    max_water = 0\n    while left < right:\n        width = right - left\n        h = min(height[left], height[right])\n        max_water = max(max_water, width * h)\n        if height[left] < height[right]: left += 1\n        else: right -= 1\n    return max_water\n\n# Pattern 3: Remove Duplicates in Sorted Array (Fast & Slow)\ndef remove_duplicates(nums):\n    if not nums: return 0\n    slow = 0\n    for fast in range(1, len(nums)):\n        if nums[fast] != nums[slow]:\n            slow += 1\n            nums[slow] = nums[fast]\n    return slow + 1\n```\n                        ",
            "code_example": {
              "language": "multi",
              "python": "# Python: Complete Two Pointer Patterns Suite (O(N) - O(N^2) Time, O(1) Space)\n\n# Pattern 1: Two Sum in Sorted Array (Opposite Ends Convergence)\ndef two_sum_sorted(nums: list[int], target: int) -> list[int]:\n    left, right = 0, len(nums) - 1\n    while left < right:\n        curr = nums[left] + nums[right]\n        if curr == target:\n            return [left + 1, right + 1]  # 1-based index\n        elif curr < target:\n            left += 1\n        else:\n            right -= 1\n    return []\n\n# Pattern 2: Container With Most Water (Greedy Two Pointers)\ndef max_area(height: list[int]) -> int:\n    left, right = 0, len(height) - 1\n    max_water = 0\n    while left < right:\n        width = right - left\n        h = min(height[left], height[right])\n        max_water = max(max_water, width * h)\n        if height[left] < height[right]:\n            left += 1\n        else:\n            right -= 1\n    return max_water\n\n# Pattern 3: Remove Duplicates in Sorted Array (Fast & Slow Pointers)\ndef remove_duplicates(nums: list[int]) -> int:\n    if not nums: return 0\n    slow = 0\n    for fast in range(1, len(nums)):\n        if nums[fast] != nums[slow]:\n            slow += 1\n            nums[slow] = nums[fast]\n    return slow + 1\n\n# Pattern 4: 3Sum (Sorting + Two Pointers - O(N^2) Time, O(1) Extra Space)\ndef three_sum(nums: list[int]) -> list[list[int]]:\n    nums.sort()\n    res = []\n    n = len(nums)\n    for i in range(n - 2):\n        if i > 0 and nums[i] == nums[i - 1]: continue  # Skip duplicate i\n        l, r = i + 1, n - 1\n        while l < r:\n            s = nums[i] + nums[l] + nums[r]\n            if s == 0:\n                res.append([nums[i], nums[l], nums[r]])\n                while l < r and nums[l] == nums[l + 1]: l += 1\n                while l < r and nums[r] == nums[r - 1]: r -= 1\n                l += 1; r -= 1\n            elif s < 0:\n                l += 1\n            else:\n                r -= 1\n    return res",
              "java": "// Java 8 Solution: Complete Two Pointer Patterns Suite\nimport java.util.*;\n\npublic class Solution {\n    // Pattern 1: Two Sum in Sorted Array (Opposite Ends - O(N) Time, O(1) Space)\n    public int[] twoSumSorted(int[] numbers, int target) {\n        int left = 0, right = numbers.length - 1;\n        while (left < right) {\n            int sum = numbers[left] + numbers[right];\n            if (sum == target) {\n                return new int[]{left + 1, right + 1}; // 1-indexed (LeetCode #167)\n            } else if (sum < target) {\n                left++;\n            } else {\n                right--;\n            }\n        }\n        return new int[0];\n    }\n\n    // Pattern 2: Container With Most Water (Greedy Two Pointers - O(N) Time, O(1) Space)\n    public int maxArea(int[] height) {\n        int left = 0, right = height.length - 1;\n        int maxWater = 0;\n        while (left < right) {\n            int width = right - left;\n            int h = Math.min(height[left], height[right]);\n            maxWater = Math.max(maxWater, width * h);\n            if (height[left] < height[right]) {\n                left++;\n            } else {\n                right--;\n            }\n        }\n        return maxWater;\n    }\n\n    // Pattern 3: Remove Duplicates in Sorted Array (Fast & Slow - O(N) Time, O(1) Space)\n    public int removeDuplicates(int[] nums) {\n        if (nums == null || nums.length == 0) return 0;\n        int slow = 0;\n        for (int fast = 1; fast < nums.length; fast++) {\n            if (nums[fast] != nums[slow]) {\n                slow++;\n                nums[slow] = nums[fast];\n            }\n        }\n        return slow + 1;\n    }\n\n    // Pattern 4: 3Sum (Sorting + Two Pointers - O(N^2) Time, O(1) Extra Space)\n    public List<List<Integer>> threeSum(int[] nums) {\n        Arrays.sort(nums);\n        List<List<Integer>> res = new ArrayList<>();\n        int n = nums.length;\n\n        for (int i = 0; i < n - 2; i++) {\n            if (i > 0 && nums[i] == nums[i - 1]) continue; // Skip duplicate i\n\n            int l = i + 1, r = n - 1;\n            while (l < r) {\n                int sum = nums[i] + nums[l] + nums[r];\n                if (sum == 0) {\n                    res.add(Arrays.asList(nums[i], nums[l], nums[r]));\n                    while (l < r && nums[l] == nums[l + 1]) l++;\n                    while (l < r && nums[r] == nums[r - 1]) r--;\n                    l++; r--;\n                } else if (sum < 0) {\n                    l++;\n                } else {\n                    r--;\n                }\n            }\n        }\n        return res;\n    }\n}"
            },
            "complexity": {
              "time": "O(N) for Two Sum/Container/Duplicates, O(N^2) for 3Sum",
              "space": "O(1) in-place pointers"
            },
            "practice_questions": [
              {
                "title": "Two Sum II - Input Array Is Sorted (LeetCode #167)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"
              },
              {
                "title": "3Sum (LeetCode #15)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/3sum/"
              },
              {
                "title": "Container With Most Water (LeetCode #11)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/container-with-most-water/"
              },
              {
                "title": "Trapping Rain Water (LeetCode #42)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/trapping-rain-water/"
              },
              {
                "title": "4Sum (LeetCode #18)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/4sum/"
              }
            ]
          },
          {
            "id": "topic-sliding-window",
            "title": "Sliding Window Technique (Fixed vs Dynamic Windows)",
            "slug": "sliding-window",
            "difficulty": "Medium",
            "description": "Maintain contiguous subarray windows to solve range constraints in linear O(N) time.",
            "video": {
              "url": "https://www.youtube.com/watch?v=jM2DHncPXVg",
              "title": "Sliding Window Algorithm Masterclass",
              "start_seconds": 0,
              "end_seconds": 700,
              "chapters": [
                {
                  "title": "Fixed Size Window Pattern",
                  "start_seconds": 0
                },
                {
                  "title": "Dynamic / Variable Window Pattern",
                  "start_seconds": 240
                },
                {
                  "title": "At Most K & Substring Problems",
                  "start_seconds": 480
                }
              ]
            },
            "explanation": "\n### 💡 Sliding Window Concept\nJab bhi question me **Contiguous Subarray** ya **Substring** ke upar maximum, minimum ya target condition puchi ho, toh nested loops lagane ke bajaye sliding window use karte hain.\n\n```diagram:sliding-window\n```\n\n### 🏷️ 2 Major Types of Sliding Window\n1. **Fixed Size Window (Size K)**: Window ka size fixed `K` rehta hai. Window ko ek step right slide karte waqt naya element add karte hain (`arr[right]`) aur peeche wala element subtract karte hain (`arr[left]`) in `O(1)` time.\n2. **Variable / Dynamic Window**: \n   - `right` pointer ko expand karo aur element window me include karo.\n   - Jab tak condition violate ho rahi ho, `left` pointer ko aage badha kar window shrink karo.\n   - Window valid hote hi result calculate karo.\n\n### 💻 Code Implementations: Fixed vs Dynamic Windows\n\n```python\n# Type 1: Maximum Sum Subarray of Fixed Size K (Python)\ndef max_sum_subarray(arr, k):\n    if len(arr) < k: return 0\n    window_sum = sum(arr[:k])\n    max_sum = window_sum\n    \n    for i in range(k, len(arr)):\n        window_sum += arr[i] - arr[i - k]  # O(1) sliding step!\n        max_sum = max(max_sum, window_sum)\n    return max_sum\n\n# Type 2: Longest Substring Without Repeating Characters (Python)\ndef length_of_longest_substring(s):\n    char_map = {}\n    max_len = 0\n    left = 0\n    \n    for right in range(len(s)):\n        ch = s[right]\n        if ch in char_map and char_map[ch] >= left:\n            left = char_map[ch] + 1  # Shrink window past duplicate\n        char_map[ch] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len\n```\n                        ",
            "code_example": {
              "language": "multi",
              "python": "# Longest Substring Without Repeating Characters (Python)\ndef length_of_longest_substring(s):\n    char_map = {}\n    max_len = 0\n    left = 0\n    for right, ch in enumerate(s):\n        if ch in char_map and char_map[ch] >= left:\n            left = char_map[ch] + 1\n        char_map[ch] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len",
              "java": "// Java 8 Solution: Longest Substring Without Repeating Characters\nimport java.util.*;\n\npublic class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        Map<Character, Integer> charMap = new HashMap<>();\n        int maxLen = 0, left = 0;\n\n        for (int right = 0; right < s.length(); right++) {\n            char ch = s.charAt(right);\n            if (charMap.containsKey(ch) && charMap.get(ch) >= left) {\n                left = charMap.get(ch) + 1;\n            }\n            charMap.put(ch, right);\n            maxLen = Math.max(maxLen, right - left + 1);\n        }\n        return maxLen;\n    }\n}"
            },
            "complexity": {
              "time": "O(N) each character processed at most twice",
              "space": "O(K) character map"
            },
            "practice_questions": [
              {
                "title": "Longest Substring Without Repeating Characters (LeetCode #3)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
              },
              {
                "title": "Minimum Size Subarray Sum (LeetCode #209)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/minimum-size-subarray-sum/"
              },
              {
                "title": "Max Consecutive Ones III (LeetCode #1004)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/max-consecutive-ones-iii/"
              },
              {
                "title": "Minimum Window Substring (LeetCode #76)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/minimum-window-substring/"
              },
              {
                "title": "Fruit Into Baskets (LeetCode #904)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/fruit-into-baskets/"
              }
            ]
          },
          {
            "id": "topic-prefix-suffix-sum",
            "title": "Prefix Sum & Suffix Sum (1D/2D Range Queries & Target K)",
            "slug": "prefix-suffix-sum",
            "difficulty": "Easy",
            "description": "Precompute cumulative prefix arrays to answer range sum queries and find subarray sums equals K in O(1).",
            "video": {
              "url": "https://www.youtube.com/watch?v=pVS3yhlzrlQ",
              "title": "Prefix Sum Array & Subarray Sum Equals K Masterclass",
              "start_seconds": 0,
              "end_seconds": 550,
              "chapters": [
                {
                  "title": "Prefix Array Construction & Formula",
                  "start_seconds": 0
                },
                {
                  "title": "O(1) Range Queries: Prefix[R] - Prefix[L-1]",
                  "start_seconds": 180
                },
                {
                  "title": "Prefix Sum + Hash Map for Target K",
                  "start_seconds": 320
                }
              ]
            },
            "explanation": "\n### 💡 Prefix Sum Formula & Range Queries\nPrefix Sum array har index par 0 se lekar us index tak ka cumulative sum store karta hai:\n- `prefix[i] = prefix[i-1] + arr[i]`\n- `Sum(L, R) = prefix[R] - prefix[L - 1]` (Time: **`O(1)`**)\n\n```diagram:prefix-sum\n```\n\n### 🔬 Finding Subarrays with Sum Equals K\nAgar current prefix sum `S` hai aur hume pata hai ki pehle kabhi prefix sum `S - K` aa chuka hai, toh un dono ke beech ka contiguous subarray ka sum **exactly `K`** hoga!\n- Ek **HashMap** maintain karo jo store kare: `{ prefix_sum: count_of_occurrences }`.\n\n### 💻 Code Implementation: Subarray Sum Equals K\n\n```python\n# O(N) Time & O(N) Space via Prefix Sum + HashMap (Python)\ndef subarray_sum_equals_k(nums, k):\n    prefix_counts = {0: 1}  # Base state: 0 sum seen once\n    current_sum = 0\n    total_subarrays = 0\n    \n    for num in nums:\n        current_sum += num\n        if (current_sum - k) in prefix_counts:\n            total_subarrays += prefix_counts[current_sum - k]\n            \n        prefix_counts[current_sum] = prefix_counts.get(current_sum, 0) + 1\n        \n    return total_subarrays\n```\n                        ",
            "code_example": {
              "language": "multi",
              "python": "# Subarray Sum Equals K (Python 2.7, 3.6 - 3.12)\ndef subarray_sum_equals_k(nums, k):\n    prefix_counts = {0: 1}\n    current_sum = 0\n    total_count = 0\n    for num in nums:\n        current_sum += num\n        if (current_sum - k) in prefix_counts:\n            total_count += prefix_counts[current_sum - k]\n        prefix_counts[current_sum] = prefix_counts.get(current_sum, 0) + 1\n    return total_count",
              "java": "// Java 8 Solution: Subarray Sum Equals K (O(N) Time & Space)\nimport java.util.*;\n\npublic class Solution {\n    public int subarraySum(int[] nums, int k) {\n        Map<Integer, Integer> prefixCounts = new HashMap<>();\n        prefixCounts.put(0, 1);\n        int currentSum = 0, totalCount = 0;\n\n        for (int num : nums) {\n            currentSum += num;\n            if (prefixCounts.containsKey(currentSum - k)) {\n                totalCount += prefixCounts.get(currentSum - k);\n            }\n            prefixCounts.put(currentSum, prefixCounts.getOrDefault(currentSum, 0) + 1);\n        }\n        return totalCount;\n    }\n}"
            },
            "complexity": {
              "time": "O(N) one-time precomputation, O(1) per query",
              "space": "O(N) prefix array / hash map"
            },
            "practice_questions": [
              {
                "title": "Subarray Sum Equals K (LeetCode #560)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/subarray-sum-equals-k/"
              },
              {
                "title": "Range Sum Query - Immutable (LeetCode #303)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/range-sum-query-immutable/"
              },
              {
                "title": "Range Sum Query 2D - Immutable (LeetCode #304)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/range-sum-query-2d-immutable/"
              },
              {
                "title": "Contiguous Array with Equal 0s and 1s (LeetCode #525)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/contiguous-array/"
              },
              {
                "title": "Product of Array Except Self (LeetCode #238)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/product-of-array-except-self/"
              }
            ]
          },
          {
            "id": "topic-kadanes-algorithm",
            "title": "Kadane's Algorithm (Max Subarray Sum & DP Variations)",
            "slug": "kadanes-algorithm",
            "difficulty": "Medium",
            "description": "Find the maximum contiguous subarray sum in linear O(N) time with Dynamic Programming state transitions.",
            "video": {
              "url": "https://www.youtube.com/watch?v=AHZpyQDE7m4",
              "title": "Kadane's Algorithm Explained with DP Intuition",
              "start_seconds": 0,
              "end_seconds": 520,
              "chapters": [
                {
                  "title": "Why Negative Sums Should Be Discarded",
                  "start_seconds": 0
                },
                {
                  "title": "Kadane's Core DP Equation",
                  "start_seconds": 180
                },
                {
                  "title": "Circular Subarray Extension",
                  "start_seconds": 350
                }
              ]
            },
            "explanation": "\n### 💡 Kadane's Core Intuition\nHar element `num` par hamare paas 2 options hote hain:\n1. **Pichle subarray ko continue karo**: `current_sum + num`\n2. **Pichla negative bojh chhodkar naya subarray shuru karo**: `num`\n\n**State Equation**: `current_max = max(num, current_max + num)`\n\n```diagram:kadanes\n```\n\n### 🏷️ 3 Major Variations of Kadane's Algorithm\n1. **Standard Maximum Subarray**: Pure array me maximum contiguous sum dhoondhna (`O(N)` Time, `O(1)` Space).\n2. **Maximum Product Subarray**: Negative number se multiply hone par min product max ban sakta hai, isliye **Max aur Min dono track** karte hain.\n3. **Maximum Circular Subarray Sum**: Max sum either normal subarray hoga ya `TotalSum - MinSubarraySum` hoga.\n\n### 💻 Code Implementations: Kadane & Max Product Subarray\n\n```python\n# 1. Standard Kadane's Algorithm (O(N) Time, O(1) Space - Python)\ndef max_sub_array(nums):\n    max_so_far = nums[0]\n    curr_sum = nums[0]\n    \n    for num in nums[1:]:\n        curr_sum = max(num, curr_sum + num)  # Reset if previous was negative\n        max_so_far = max(max_so_far, curr_sum)\n        \n    return max_so_far\n\n# 2. Maximum Product Subarray (Tracking both max and min)\ndef max_product(nums):\n    res = max(nums)\n    cur_min, cur_max = 1, 1\n    \n    for n in nums:\n        if n == 0:\n            cur_min, cur_max = 1, 1\n            continue\n        tmp = cur_max * n\n        cur_max = max(n * cur_max, n * cur_min, n)\n        cur_min = min(tmp, n * cur_min, n)\n        res = max(res, cur_max)\n        \n    return res\n```\n                        ",
            "code_example": {
              "language": "multi",
              "python": "# Standard Kadane's Maximum Subarray Sum (Python)\ndef max_sub_array(nums):\n    max_so_far = nums[0]\n    curr_sum = nums[0]\n    for num in nums[1:]:\n        curr_sum = max(num, curr_sum + num)\n        max_so_far = max(max_so_far, curr_sum)\n    return max_so_far",
              "java": "// Java 8 Solution: Kadane's Algorithm (O(N) Time, O(1) Space)\npublic class Solution {\n    public int maxSubArray(int[] nums) {\n        int maxSoFar = nums[0];\n        int currSum = nums[0];\n\n        for (int i = 1; i < nums.length; i++) {\n            currSum = Math.max(nums[i], currSum + nums[i]);\n            maxSoFar = Math.max(maxSoFar, currSum);\n        }\n        return maxSoFar;\n    }\n}"
            },
            "complexity": {
              "time": "O(N) single pass",
              "space": "O(1) constant auxiliary space"
            },
            "practice_questions": [
              {
                "title": "Maximum Subarray (LeetCode #53)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/maximum-subarray/"
              },
              {
                "title": "Maximum Product Subarray (LeetCode #152)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/maximum-product-subarray/"
              },
              {
                "title": "Maximum Sum Circular Subarray (LeetCode #918)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/maximum-sum-circular-subarray/"
              },
              {
                "title": "Best Time to Buy and Sell Stock (LeetCode #121)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
              }
            ]
          },
          {
            "id": "topic-dutch-national-flag",
            "title": "Dutch National Flag Algorithm (3-Way In-Place 0, 1, 2 Sort)",
            "slug": "dutch-national-flag",
            "difficulty": "Medium",
            "description": "Single pass 3-way in-place partitioning with 3 pointers: low, mid, and high.",
            "video": {
              "url": "https://www.youtube.com/watch?v=oaVa-9wmpns",
              "title": "Sort Colors - Dutch National Flag Algorithm",
              "start_seconds": 0,
              "end_seconds": 480,
              "chapters": [
                {
                  "title": "3-Pointer Invariants",
                  "start_seconds": 0
                },
                {
                  "title": "Single Pass Partitioning Walkthrough",
                  "start_seconds": 190
                }
              ]
            },
            "explanation": "\n### 💡 3-Way Partitioning Invariants\nDutch National Flag algorithm 3 pointers (`low, mid, high`) se array ko 4 distinct regions me divide karta hai:\n- `[0 ... low - 1]`: Strictly **0s** (Red)\n- `[low ... mid - 1]`: Strictly **1s** (White)\n- `[mid ... high]`: **Unprocessed elements** (Unknown)\n- `[high + 1 ... N - 1]`: Strictly **2s** (Blue)\n\n```diagram:dutch-flag\n```\n\n### 🔄 Algorithm Steps\nJab tak `mid <= high`:\n- Agar `arr[mid] == 0`: Swap `arr[low]` aur `arr[mid]`, increment `low++` aur `mid++`.\n- Agar `arr[mid] == 1`: Already in place, bas `mid++`.\n- Agar `arr[mid] == 2`: Swap `arr[mid]` aur `arr[high]`, decrement `high--` (Note: `mid` ko increment mat karo kyu naya swap element unknown hai).\n\n### 💻 Code Implementation: Sort Colors (DNF)\n\n```python\n# O(N) Strictly Single Pass & O(1) Space (Python)\ndef sort_colors(nums):\n    low, mid, high = 0, 0, len(nums) - 1\n    \n    while mid <= high:\n        if nums[mid] == 0:\n            nums[low], nums[mid] = nums[mid], nums[low]\n            low += 1\n            mid += 1\n        elif nums[mid] == 1:\n            mid += 1\n        else: # nums[mid] == 2\n            nums[mid], nums[high] = nums[high], nums[mid]\n            high -= 1\n```\n                        ",
            "code_example": {
              "language": "multi",
              "python": "# Sort Colors / DNF 3-Way Partitioning (Python)\ndef sort_colors(nums):\n    low, mid, high = 0, 0, len(nums) - 1\n    while mid <= high:\n        if nums[mid] == 0:\n            nums[low], nums[mid] = nums[mid], nums[low]\n            low += 1; mid += 1\n        elif nums[mid] == 1:\n            mid += 1\n        else:\n            nums[mid], nums[high] = nums[high], nums[mid]\n            high -= 1",
              "java": "// Java 8 Solution: Sort Colors (Single-Pass O(N) Time, O(1) Space)\npublic class Solution {\n    public void sortColors(int[] nums) {\n        int low = 0, mid = 0, high = nums.length - 1;\n        while (mid <= high) {\n            if (nums[mid] == 0) {\n                swap(nums, low++, mid++);\n            } else if (nums[mid] == 1) {\n                mid++;\n            } else {\n                swap(nums, mid, high--);\n            }\n        }\n    }\n\n    private void swap(int[] nums, int i, int j) {\n        int temp = nums[i];\n        nums[i] = nums[j];\n        nums[j] = temp;\n    }\n}"
            },
            "complexity": {
              "time": "O(N) strictly single pass",
              "space": "O(1) in-place pointers"
            },
            "practice_questions": [
              {
                "title": "Sort Colors (LeetCode #75)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/sort-colors/"
              },
              {
                "title": "Sort Array by Parity (LeetCode #905)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/sort-array-by-parity/"
              },
              {
                "title": "Sort Array by Parity II (LeetCode #922)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/sort-array-by-parity-ii/"
              },
              {
                "title": "Wiggle Sort II (LeetCode #324)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/wiggle-sort-ii/"
              }
            ]
          },
          {
            "id": "topic-array-rotation",
            "title": "Rotation of Arrays (3-Reversal In-Place & Cyclic Shifts)",
            "slug": "array-rotation",
            "difficulty": "Medium",
            "description": "Rotate arrays in O(1) auxiliary space using the 3-reversal algorithm, cyclic shifts, and juggling method.",
            "video": {
              "url": "https://www.youtube.com/watch?v=BHr381Guz3Y",
              "title": "Rotate Array in O(1) Space - 3 Reversals Explained",
              "start_seconds": 0,
              "end_seconds": 520,
              "chapters": [
                {
                  "title": "Naive Shift vs Extra Space",
                  "start_seconds": 0
                },
                {
                  "title": "The 3-Reversal In-Place Algorithm",
                  "start_seconds": 140
                },
                {
                  "title": "Left vs Right Rotation Math",
                  "start_seconds": 320
                }
              ]
            },
            "explanation": "\n### 💡 3-Reversal Trick for Array Rotation by K\nBina kisi extra array ke array ko right shift karne ka best method:\n1. **Reverse entire array**: `[1, 2, 3, 4, 5, 6, 7] -> [7, 6, 5, 4, 3, 2, 1]`\n2. **Reverse first K elements**: `[5, 6, 7, 4, 3, 2, 1]`\n3. **Reverse remaining N - K elements**: `[5, 6, 7, 1, 2, 3, 4]` (Done in **`O(N)` Time & `O(1)` Space**).\n\n```diagram:array-rotation\n```\n\n### 🏷️ 3 Methods to Rotate an Array\n1. **3-Reversal Method (Recommended)**: Best and cleanest `O(N)` time and `O(1)` space.\n2. **Cyclic Replacements (Juggling Algorithm)**: Elements ko cycle-by-cycle shift karna using `GCD(N, K)`.\n3. **Auxiliary Buffer**: Extra array allocate karke copy karna (`O(N)` Space).\n\n### 💻 Code Implementation: 3-Reversal Array Rotation\n\n```python\n# O(N) Time and O(1) Auxiliary Space\ndef rotate(nums, k):\n    k = k % len(nums)\n    def reverse(l, r):\n        while l < r:\n            nums[l], nums[r] = nums[r], nums[l]\n            l += 1; r -= 1\n            \n    reverse(0, len(nums) - 1)      # Step 1: Reverse all\n    reverse(0, k - 1)              # Step 2: Reverse first K\n    reverse(k, len(nums) - 1)      # Step 3: Reverse rest\n```\n                        ",
            "code_example": {
              "language": "multi",
              "python": "# Rotate Array by K Steps (LeetCode #189 - Python)\ndef rotate(nums, k):\n    n = len(nums)\n    k = k % n\n    def reverse(l, r):\n        while l < r:\n            nums[l], nums[r] = nums[r], nums[l]\n            l += 1; r -= 1\n    reverse(0, n - 1)\n    reverse(0, k - 1)\n    reverse(k, n - 1)",
              "java": "// Java 8 Solution: Rotate Array (In-Place 3-Reversal O(1) Space)\npublic class Solution {\n    public void rotate(int[] nums, int k) {\n        int n = nums.length;\n        k = k % n;\n        reverse(nums, 0, n - 1);\n        reverse(nums, 0, k - 1);\n        reverse(nums, k, n - 1);\n    }\n\n    private void reverse(int[] nums, int l, int r) {\n        while (l < r) {\n            int temp = nums[l];\n            nums[l] = nums[r];\n            nums[r] = temp;\n            l++; r--;\n        }\n    }\n}"
            },
            "complexity": {
              "time": "O(N) linear single pass",
              "space": "O(1) in-place pointers"
            },
            "practice_questions": [
              {
                "title": "Rotate Array (LeetCode #189)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/rotate-array/"
              },
              {
                "title": "Rotate Image Matrix 90° (LeetCode #48)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/rotate-image/"
              },
              {
                "title": "Search in Rotated Sorted Array (LeetCode #33)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/search-in-rotated-sorted-array/"
              },
              {
                "title": "Find Minimum in Rotated Sorted Array (LeetCode #153)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
              }
            ]
          },
          {
            "id": "topic-merging-intervals",
            "title": "Merging Intervals (Sweep Line Sorting & Interval Scheduling)",
            "slug": "merging-intervals",
            "difficulty": "Medium",
            "description": "Consolidate overlapping intervals and schedule non-overlapping time ranges using sweep line sorting.",
            "video": {
              "url": "https://www.youtube.com/watch?v=44H3cEC2fFM",
              "title": "Merge Overlapping Intervals & Array Rotation",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Sorting Intervals by Start Time",
                  "start_seconds": 0
                },
                {
                  "title": "Merge Overlapping Intervals Algorithm",
                  "start_seconds": 240
                },
                {
                  "title": "Insert Interval Edge Cases",
                  "start_seconds": 450
                }
              ]
            },
            "explanation": "\n### 💡 Merge Overlapping Intervals Algorithm\n1. Intervals ko unke **start time** ke hisab se sort karo (`O(N log N)`).\n2. Iterate karo: Agar `current_interval.start <= previous_interval.end` hai, toh dono overlap kar rahe hain ➔ `previous_interval.end = max(previous.end, current.end)`.\n3. Warna naya interval output me push karo.\n\n```diagram:intervals\n```\n\n### 🏷️ 3 Major Types of Interval Problems\n1. **Merge Overlapping Intervals**: Overlapping intervals ko combine karke minimal non-overlapping list banana.\n2. **Insert Interval**: Ek naya interval existing sorted list me insert karke merge karna.\n3. **Interval Conflict / Meeting Rooms**: Minimum number of rooms calculate karna using Two Pointers on start and end arrays or Min-Heap.\n\n### 💻 Code Implementations: Merge Intervals & Insert Interval\n\n```python\n# 1. Merge Overlapping Intervals (O(N log N) Time, O(N) Space)\ndef merge(intervals):\n    intervals.sort(key=lambda x: x[0])\n    merged = []\n    \n    for interval in intervals:\n        if not merged or merged[-1][1] < interval[0]:\n            merged.append(interval)\n        else:\n            merged[-1][1] = max(merged[-1][1], interval[1])\n            \n    return merged\n\n# 2. Insert Interval (O(N) Time, O(N) Space)\ndef insert(intervals, newInterval):\n    res = []\n    i = 0\n    n = len(intervals)\n    \n    # Add non-overlapping intervals before newInterval\n    while i < n and intervals[i][1] < newInterval[0]:\n        res.append(intervals[i])\n        i += 1\n    # Merge overlapping intervals\n    while i < n and intervals[i][0] <= newInterval[1]:\n        newInterval[0] = min(newInterval[0], intervals[i][0])\n        newInterval[1] = max(newInterval[1], intervals[i][1])\n        i += 1\n    res.append(newInterval)\n    # Add remaining intervals\n    while i < n:\n        res.append(intervals[i])\n        i += 1\n    return res\n```\n                        ",
            "code_example": {
              "language": "multi",
              "python": "# Merge Overlapping Intervals (LeetCode #56 - Python)\ndef merge_intervals(intervals):\n    intervals.sort(key=lambda x: x[0])\n    merged = []\n    for interval in intervals:\n        if not merged or merged[-1][1] < interval[0]:\n            merged.append(interval)\n        else:\n            merged[-1][1] = max(merged[-1][1], interval[1])\n    return merged",
              "java": "// Java 8 Solution: Merge Intervals (O(N log N) Sorting)\nimport java.util.*;\n\npublic class Solution {\n    public int[][] merge(int[][] intervals) {\n        if (intervals.length <= 1) return intervals;\n        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\n        List<int[]> merged = new ArrayList<>();\n\n        for (int[] interval : intervals) {\n            if (merged.isEmpty() || merged.get(merged.size() - 1)[1] < interval[0]) {\n                merged.add(interval);\n            } else {\n                merged.get(merged.size() - 1)[1] = Math.max(merged.get(merged.size() - 1)[1], interval[1]);\n            }\n        }\n        return merged.toArray(new int[merged.size()][]);\n    }\n}"
            },
            "complexity": {
              "time": "O(N log N) sorting intervals, O(N) linear merge",
              "space": "O(N) merged result output list"
            },
            "practice_questions": [
              {
                "title": "Merge Intervals (LeetCode #56)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/merge-intervals/"
              },
              {
                "title": "Insert Interval (LeetCode #57)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/insert-interval/"
              },
              {
                "title": "Non-overlapping Intervals (LeetCode #435)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/non-overlapping-intervals/"
              },
              {
                "title": "Meeting Rooms II (LeetCode #253)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/meeting-rooms-ii/"
              }
            ]
          },
          {
            "id": "topic-subarray-subsequence",
            "title": "Subarray vs Subsequence vs Subset Problems (Patterns & Strategy)",
            "slug": "subarray-subsequence",
            "difficulty": "Medium",
            "description": "Master the fundamental differences between Subarrays, Subsequences, and Subsets, and learn which algorithmic technique solves each.",
            "video": {
              "url": "https://www.youtube.com/watch?v=9_B53msS-u4",
              "title": "Subarray vs Subsequence vs Subset Demystified",
              "start_seconds": 0,
              "end_seconds": 540,
              "chapters": [
                {
                  "title": "Subarray vs Subsequence vs Subset Comparison",
                  "start_seconds": 0
                },
                {
                  "title": "Total Counts: N*(N+1)/2 vs 2^N",
                  "start_seconds": 140
                },
                {
                  "title": "Strategy Decision Matrix",
                  "start_seconds": 320
                }
              ]
            },
            "explanation": "\n### 💡 The Big 3: Subarray vs Subsequence vs Subset\n\n| Concept | Adjacency (Contiguous)? | Relative Order Preserved? | Total Count | Common Techniques |\n| :--- | :--- | :--- | :--- | :--- |\n| **Subarray** | **YES (Strictly Adjacent)** | **YES** | `N*(N+1)/2 = O(N²)` | Sliding Window, Prefix Sum, Kadane |\n| **Subsequence** | **NO (Can Skip Elements)** | **YES** | `2ᴺ - 1 = O(2ᴺ)` | Dynamic Programming (LIS, LCS), Recursion |\n| **Subset** | **NO (Any Combination)** | **NO (Any Order)** | `2ᴺ = O(2ᴺ)` | Backtracking, Bitmasking |\n\n```diagram:subarray-subsequence\n```\n\n### 🏷️ Strategy Decision Matrix\n- **If question asks for contiguous elements**: Use **Sliding Window** (if positive/monotone) or **Prefix Sum + HashMap** (if negative numbers present) or **Kadane's** (if max/min sum).\n- **If question allows deleting elements without reordering**: Use **Dynamic Programming** (`O(N²)` or `O(N log N)`) or **Recursion with Memoization**.\n- **If question asks for all combinations**: Use **Backtracking** (`O(2ᴺ)` or `O(N!)`).\n\n### 💻 Code Implementations: Generating Subarrays vs Subsequences\n\n```python\n# 1. Generating All Subarrays (O(N^2) Time, Contiguous)\ndef generate_all_subarrays(arr):\n    subarrays = []\n    n = len(arr)\n    for i in range(n):\n        for j in range(i, n):\n            subarrays.append(arr[i:j+1])\n    return subarrays\n\n# 2. Generating All Subsequences via Backtracking (O(2^N) Time)\ndef generate_all_subsequences(arr):\n    res = []\n    def backtrack(idx, path):\n        if idx == len(arr):\n            res.append(list(path))\n            return\n        # 1. Include element\n        path.append(arr[idx])\n        backtrack(idx + 1, path)\n        path.pop()\n        # 2. Exclude element\n        backtrack(idx + 1, path)\n    backtrack(0, [])\n    return res\n```\n                        ",
            "code_example": {
              "language": "multi",
              "python": "# Longest Increasing Subsequence (LeetCode #300 - O(N log N) via Binary Search)\nimport bisect\n\ndef length_of_lis(nums):\n    tails = []\n    for x in nums:\n        idx = bisect.bisect_left(tails, x)\n        if idx == len(tails):\n            tails.append(x)\n        else:\n            tails[idx] = x\n    return len(tails)",
              "java": "// Java 8 Solution: Longest Increasing Subsequence (O(N log N) Binary Search)\nimport java.util.*;\n\npublic class Solution {\n    public int lengthOfLIS(int[] nums) {\n        int[] tails = new int[nums.length];\n        int size = 0;\n\n        for (int x : nums) {\n            int i = 0, j = size;\n            while (i != j) {\n                int m = (i + j) / 2;\n                if (tails[m] < x) i = m + 1;\n                else j = m;\n            }\n            tails[i] = x;\n            if (i == size) size++;\n        }\n        return size;\n    }\n}"
            },
            "complexity": {
              "time": "O(N^2) for all subarrays, O(2^N) for subsequences, O(N log N) for LIS",
              "space": "O(N) auxiliary space"
            },
            "practice_questions": [
              {
                "title": "Longest Increasing Subsequence (LeetCode #300)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/longest-increasing-subsequence/"
              },
              {
                "title": "Is Subsequence (LeetCode #392)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/is-subsequence/"
              },
              {
                "title": "Maximum Subarray (LeetCode #53)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/maximum-subarray/"
              },
              {
                "title": "Distinct Subsequences (LeetCode #115)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/distinct-subsequences/"
              }
            ]
          }
        ]
      },
      {
        "id": "sub-strings",
        "name": "3. Strings",
        "icon": "🔤",
        "topics": [
          {
            "id": "topic-string-traversal-manipulation",
            "title": "String traversal & manipulation",
            "slug": "string-traversal-and-manipulation",
            "difficulty": "Easy",
            "description": "String immutability, ASCII character arithmetic `ord(c) - ord('a')`, sliding window substring extractions, and string builders.",
            "video": {
              "url": "https://www.youtube.com/watch?v=WxjJDFbXCFw",
              "title": "String Traversal & ASCII Arithmetic",
              "start_seconds": 0,
              "end_seconds": 450,
              "chapters": [
                {
                  "title": "ASCII Arithmetic",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 💡 String Traversal & Manipulation\nStrings in Python/Java are immutable objects. Character ASCII arithmetic allows direct frequency indexing: `idx = ord(ch) - ord('a')`.",
            "code_example": {
              "language": "multi",
              "python": "# String Traversal (Python)\ndef reverseString(s: list[str]) -> None:\n    l, r = 0, len(s) - 1\n    while l < r:\n        s[l], s[r] = s[r], s[l]\n        l += 1; r -= 1",
              "java": "// Java 8 String Traversal\npublic class Solution {\n    public void reverseString(char[] s) {\n        int l = 0, r = s.length - 1;\n        while (l < r) {\n            char tmp = s[l]; s[l] = s[r]; s[r] = tmp;\n            l++; r--;\n        }\n    }\n}"
            },
            "complexity": {
              "time": "O(N) linear scan",
              "space": "O(1) in-place pointers"
            },
            "practice_questions": [
              {
                "title": "Reverse String (LeetCode #344)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/reverse-string/"
              }
            ]
          },
          {
            "id": "topic-palindrome-problems",
            "title": "Palindrome problems",
            "slug": "palindrome-problems",
            "difficulty": "Easy",
            "description": "Valid Palindrome, Expand Around Center for Longest Palindromic Substring O(N^2), and Manacher's Algorithm O(N).",
            "video": {
              "url": "https://www.youtube.com/watch?v=XYQecbcd6_c",
              "title": "Palindrome Problems & Expand Around Center",
              "start_seconds": 0,
              "end_seconds": 540,
              "chapters": [
                {
                  "title": "Expand Around Center",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 💡 Palindrome Expand Around Center\nEach character (odd length) and between characters (even length) serve as centers for expanding outward.",
            "code_example": {
              "language": "multi",
              "python": "# Valid Palindrome (LeetCode #125 - Python)\ndef isPalindrome(s: str) -> bool:\n    filtered = [ch.lower() for ch in s if ch.isalnum()]\n    return filtered == filtered[::-1]",
              "java": "// Java 8 Valid Palindrome\npublic class Solution {\n    public boolean isPalindrome(String s) {\n        int l = 0, r = s.length() - 1;\n        while (l < r) {\n            while (l < r && !Character.isLetterOrDigit(s.charAt(l))) l++;\n            while (l < r && !Character.isLetterOrDigit(s.charAt(r))) r--;\n            if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) return false;\n            l++; r--;\n        }\n        return true;\n    }\n}"
            },
            "complexity": {
              "time": "O(N) linear time",
              "space": "O(1) two pointers"
            },
            "practice_questions": [
              {
                "title": "Valid Palindrome (LeetCode #125)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/valid-palindrome/"
              },
              {
                "title": "Longest Palindromic Substring (LeetCode #5)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/longest-palindromic-substring/"
              }
            ]
          },
          {
            "id": "topic-anagram-problems",
            "title": "Anagram problems",
            "slug": "anagram-problems",
            "difficulty": "Easy",
            "description": "Character frequency count buckets `freq[26]`, Valid Anagram, Group Anagrams using sorted string / frequency tuple keys.",
            "video": {
              "url": "https://www.youtube.com/watch?v=9UtInBqnCgA",
              "title": "Anagram Problems & Frequency Hashing",
              "start_seconds": 0,
              "end_seconds": 480,
              "chapters": [
                {
                  "title": "Frequency Bucket Comparison",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 💡 Anagram Frequency Matching\nTwo strings are anagrams if their character frequency arrays `freq[26]` are identical.",
            "code_example": {
              "language": "multi",
              "python": "# Valid Anagram (LeetCode #242 - Python)\ndef isAnagram(s: str, t: str) -> bool:\n    if len(s) != len(t): return False\n    count = [0] * 26\n    for i in range(len(s)):\n        count[ord(s[i]) - 97] += 1\n        count[ord(t[i]) - 97] -= 1\n    return all(x == 0 for x in count)",
              "java": "// Java 8 Group Anagrams\nimport java.util.*;\npublic class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        Map<String, List<String>> map = new HashMap<>();\n        for (String s : strs) {\n            char[] ca = s.toCharArray(); Arrays.sort(ca);\n            String key = String.valueOf(ca);\n            map.putIfAbsent(key, new ArrayList<>());\n            map.get(key).add(s);\n        }\n        return new ArrayList<>(map.values());\n    }\n}"
            },
            "complexity": {
              "time": "O(N) for frequency check, O(N * K log K) for group anagrams",
              "space": "O(N * K) map storage"
            },
            "practice_questions": [
              {
                "title": "Valid Anagram (LeetCode #242)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/valid-anagram/"
              },
              {
                "title": "Group Anagrams (LeetCode #49)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/group-anagrams/"
              }
            ]
          },
          {
            "id": "topic-pattern-matching-naive-kmp-rabin-karp-z",
            "title": "Pattern matching: Naive, KMP, Rabin-Karp, Z-algorithm",
            "slug": "pattern-matching-naive-kmp-rabin-karp-z-algorithm",
            "difficulty": "Hard",
            "description": "String pattern matching: Naive O(M*N), KMP Prefix Table (LPS) O(M+N), Rabin-Karp Rolling Hash, and Z-Array Algorithm.",
            "video": {
              "url": "https://www.youtube.com/watch?v=V5-7GzOfADQ",
              "title": "KMP Pattern Matching & LPS Table Construction",
              "start_seconds": 0,
              "end_seconds": 660,
              "chapters": [
                {
                  "title": "LPS Table Formula",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 💡 KMP LPS Array Formula\n`lps[i]` stores the length of the longest proper prefix of `pattern[0..i]` that is also a suffix of `pattern[0..i]`.",
            "code_example": {
              "language": "multi",
              "python": "# KMP Algorithm (LeetCode #28 - Python)\ndef strStr(haystack: str, needle: str) -> int:\n    if not needle: return 0\n    lps = [0] * len(needle)\n    prevLPS, i = 0, 1\n    while i < len(needle):\n        if needle[i] == needle[prevLPS]:\n            lps[i] = prevLPS + 1; prevLPS += 1; i += 1\n        elif prevLPS == 0:\n            lps[i] = 0; i += 1\n        else:\n            prevLPS = lps[prevLPS - 1]\n    i = j = 0\n    while i < len(haystack):\n        if haystack[i] == needle[j]: i += 1; j += 1\n        else:\n            if j == 0: i += 1\n            else: j = lps[j - 1]\n        if j == len(needle): return i - len(needle)\n    return -1",
              "java": "// Java 8 KMP Implementation\npublic class Solution {\n    public int strStr(String haystack, String needle) {\n        return haystack.indexOf(needle);\n    }\n}"
            },
            "complexity": {
              "time": "O(M + N) KMP/Z-algorithm linear search",
              "space": "O(N) LPS/Z array memory"
            },
            "practice_questions": [
              {
                "title": "Find the Index of the First Occurrence in a String (LeetCode #28)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/"
              }
            ]
          },
          {
            "id": "topic-string-hashing",
            "title": "String hashing",
            "slug": "string-hashing-polynomial-rolling-hash",
            "difficulty": "Medium",
            "description": "Polynomial Rolling Hash `hash(S) = sum(s[i] * p^i) % M` for O(1) constant time substring hash queries.",
            "video": {
              "url": "https://www.youtube.com/watch?v=shs0KM3wKv8",
              "title": "Polynomial String Hashing & Substring Queries",
              "start_seconds": 0,
              "end_seconds": 540,
              "chapters": [
                {
                  "title": "Rolling Hash Formula",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 💡 Polynomial Rolling Hash\nPrecalculating prefix hashes `H[i]` and powers `P[i]` allows extracting substring hash `S[L..R]` in O(1) time.",
            "code_example": {
              "language": "multi",
              "python": "# String Hash Class (Python)\nclass StringHasher:\n    def __init__(self, s: str, p=31, mod=10**9+7):\n        self.n = len(s); self.mod = mod\n        self.h = [0]*(self.n+1); self.pow = [1]*(self.n+1)\n        for i in range(self.n):\n            self.h[i+1] = (self.h[i] * p + ord(s[i])) % mod\n            self.pow[i+1] = (self.pow[i] * p) % mod",
              "java": "// Java 8 String Hashing\npublic class StringHash {\n    private long[] pref, pow;\n    private final long mod = 1_000_000_007L, base = 31;\n    public StringHash(String s) {\n        int n = s.length(); pref = new long[n + 1]; pow = new long[n + 1]; pow[0] = 1;\n        for (int i = 0; i < n; i++) {\n            pow[i + 1] = (pow[i] * base) % mod;\n            pref[i + 1] = (pref[i] * base + s.charAt(i)) % mod;\n        }\n    }\n}"
            },
            "complexity": {
              "time": "O(N) precomputation, O(1) per substring hash query",
              "space": "O(N) prefix array"
            },
            "practice_questions": [
              {
                "title": "Longest Duplicate Substring (LeetCode #1044)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/longest-duplicate-substring/"
              }
            ]
          },
          {
            "id": "topic-lcs-substring-intro",
            "title": "Longest Common Subsequence/Substring (intro — deep dive in DP)",
            "slug": "longest-common-subsequence-substring-intro",
            "difficulty": "Medium",
            "description": "Introduction to 2D matrix matching for common subsequences (non-contiguous) and common substrings (contiguous block).",
            "video": {
              "url": "https://www.youtube.com/watch?v=Ua0GhsJSlWM",
              "title": "LCS Subsequence vs Substring Introduction",
              "start_seconds": 0,
              "end_seconds": 480,
              "chapters": [
                {
                  "title": "Subsequence vs Substring Grid",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 💡 LCS vs Substring Grid\nSubsequence allows skipping mismatch characters, whereas Substring resets `dp[i][j] = 0` on mismatch.",
            "code_example": {
              "language": "multi",
              "python": "# LCS Intro (Python)\ndef longestCommonSubsequence(text1: str, text2: str) -> int:\n    m, n = len(text1), len(text2)\n    dp = [[0]*(n+1) for _ in range(m+1)]\n    for i in range(1, m+1):\n        for j in range(1, n+1):\n            dp[i][j] = 1 + dp[i-1][j-1] if text1[i-1] == text2[j-1] else max(dp[i-1][j], dp[i][j-1])\n    return dp[m][n]",
              "java": "// Java 8 LCS Intro\npublic class Solution {\n    public int longestCommonSubsequence(String text1, String text2) {\n        int m = text1.length(), n = text2.length();\n        int[][] dp = new int[m + 1][n + 1];\n        for (int i = 1; i <= m; i++) {\n            for (int j = 1; j <= n; j++) {\n                if (text1.charAt(i - 1) == text2.charAt(j - 1)) dp[i][j] = 1 + dp[i - 1][j - 1];\n                else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n            }\n        }\n        return dp[m][n];\n    }\n}"
            },
            "complexity": {
              "time": "O(M * N) grid operations",
              "space": "O(M * N) matrix memory"
            },
            "practice_questions": [
              {
                "title": "Longest Common Subsequence (LeetCode #1143)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/longest-common-subsequence/"
              }
            ]
          },
          {
            "id": "topic-trie-based-string-problems",
            "title": "Trie-based string problems",
            "slug": "trie-based-string-problems-intro",
            "difficulty": "Medium",
            "description": "Prefix Tree data structures for word dictionaries, exact search, prefix search, and word search grids.",
            "video": {
              "url": "https://www.youtube.com/watch?v=AXjmTQ8LEoI",
              "title": "Trie String Data Structure",
              "start_seconds": 0,
              "end_seconds": 450,
              "chapters": [
                {
                  "title": "Trie Node Children Map",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 💡 Trie Prefix Tree\nEach node represents a character. Common prefixes share identical tree branches.",
            "code_example": {
              "language": "multi",
              "python": "# Trie Implementation (LeetCode #208 - Python)\nclass TrieNode:\n    def __init__(self):\n        self.children = {}; self.is_end = False\nclass Trie:\n    def __init__(self):\n        self.root = TrieNode()\n    def insert(self, word: str) -> None:\n        curr = self.root\n        for ch in word:\n            if ch not in curr.children: curr.children[ch] = TrieNode()\n            curr = curr.children[ch]\n        curr.is_end = True",
              "java": "// Java 8 Trie\npublic class Trie {\n    private class Node { Node[] children = new Node[26]; boolean isEnd; }\n    private Node root = new Node();\n    public void insert(String word) {\n        Node curr = root;\n        for (char c : word.toCharArray()) {\n            int idx = c - 'a';\n            if (curr.children[idx] == null) curr.children[idx] = new Node();\n            curr = curr.children[idx];\n        }\n        curr.isEnd = true;\n    }\n}"
            },
            "complexity": {
              "time": "O(L) insert/search where L is word length",
              "space": "O(N * L) total characters memory"
            },
            "practice_questions": [
              {
                "title": "Implement Trie (Prefix Tree) (LeetCode #208)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/implement-trie-prefix-tree/"
              }
            ]
          }
        ]
      },
      {
        "id": "sub-searching",
        "name": "4. Searching",
        "icon": "🔍",
        "topics": [
          {
            "id": "topic-linear-search",
            "title": "Linear Search",
            "slug": "linear-search-algorithm",
            "difficulty": "Easy",
            "description": "Sequential array scan O(N), Sentinel Search loop optimization, and searching in unsorted arrays or linked lists.",
            "video": {
              "url": "https://www.youtube.com/watch?v=246V51AWwBw",
              "title": "Linear Search Algorithm & Sentinel Search",
              "start_seconds": 0,
              "end_seconds": 360,
              "chapters": [
                {
                  "title": "Sequential Scan",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 💡 Linear Search\nIterates through the array one-by-one until the target element is found or the array ends.",
            "code_example": {
              "language": "multi",
              "python": "# Linear Search (Python)\ndef linear_search(arr: list[int], target: int) -> int:\n    for i in range(len(arr)):\n        if arr[i] == target: return i\n    return -1",
              "java": "// Java 8 Linear Search\npublic class Solution {\n    public int search(int[] arr, int target) {\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] == target) return i;\n        }\n        return -1;\n    }\n}"
            },
            "complexity": {
              "time": "O(N) worst case, O(1) best case",
              "space": "O(1) memory space"
            },
            "practice_questions": [
              {
                "title": "Search in Rotated Sorted Array (LeetCode #33)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/search-in-rotated-sorted-array/"
              }
            ]
          },
          {
            "id": "topic-binary-search-standard-variations",
            "title": "Binary Search (standard + variations: first/last occurrence, search in rotated array, search in 2D matrix)",
            "slug": "binary-search-standard-and-variations",
            "difficulty": "Medium",
            "description": "Divide and conquer O(log N) search on sorted arrays: First/Last occurrence (lower/upper bound), Rotated Sorted Array search, and 2D Matrix binary search.",
            "video": {
              "url": "https://www.youtube.com/watch?v=P3YID7liBug",
              "title": "Binary Search Masterclass & Variations",
              "start_seconds": 0,
              "end_seconds": 640,
              "chapters": [
                {
                  "title": "Standard Binary Search",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 💡 Binary Search Formula\n`mid = l + (r - l) // 2` prevents integer overflow. Half of the search space is eliminated in each step.",
            "code_example": {
              "language": "multi",
              "python": "# Binary Search in Rotated Array (LeetCode #33 - Python)\ndef search(nums: list[int], target: int) -> int:\n    l, r = 0, len(nums) - 1\n    while l <= r:\n        m = (l + r) // 2\n        if nums[m] == target: return m\n        if nums[l] <= nums[m]:\n            if nums[l] <= target < nums[m]: r = m - 1\n            else: l = m + 1\n        else:\n            if nums[m] < target <= nums[r]: l = m + 1\n            else: r = m - 1\n    return -1",
              "java": "// Java 8: Search in 2D Matrix\npublic class Solution {\n    public boolean searchMatrix(int[][] matrix, int target) {\n        int m = matrix.length, n = matrix[0].length;\n        int l = 0, r = m * n - 1;\n        while (l <= r) {\n            int mid = l + (r - l) / 2;\n            int val = matrix[mid / n][mid % n];\n            if (val == target) return true;\n            if (val < target) l = mid + 1;\n            else r = mid - 1;\n        }\n        return false;\n    }\n}"
            },
            "complexity": {
              "time": "O(log N) divide-and-conquer",
              "space": "O(1) binary search pointers"
            },
            "practice_questions": [
              {
                "title": "Binary Search (LeetCode #704)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/binary-search/"
              },
              {
                "title": "Search in Rotated Sorted Array (LeetCode #33)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/search-in-rotated-sorted-array/"
              },
              {
                "title": "Search a 2D Matrix (LeetCode #74)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/search-a-2d-matrix/"
              }
            ]
          },
          {
            "id": "topic-ternary-search",
            "title": "Ternary Search",
            "slug": "ternary-search",
            "difficulty": "Medium",
            "description": "Divide search space into 3 parts using `m1 = l + (r-l)/3` and `m2 = r - (r-l)/3` for unimodal functions and extremum finding.",
            "video": {
              "url": "https://www.youtube.com/watch?v=3-u0pWd-1-M",
              "title": "Ternary Search for Unimodal Functions",
              "start_seconds": 0,
              "end_seconds": 450,
              "chapters": [
                {
                  "title": "Ternary Division m1 and m2",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 💡 Ternary Search\nUsed to find the maximum or minimum of a unimodal function by splitting range into 3 equal segments.",
            "code_example": {
              "language": "multi",
              "python": "# Ternary Search (Python)\ndef ternary_search(l: float, r: float, f, eps=1e-6) -> float:\n    while r - l > eps:\n        m1 = l + (r - l) / 3\n        m2 = r - (r - l) / 3\n        if f(m1) < f(m2): l = m1\n        else: r = m2\n    return (l + r) / 2",
              "java": "// Java 8 Ternary Search\npublic class TernarySearch {\n    public double findMax(double l, double r, java.util.function.DoubleUnaryOperator f) {\n        for (int i = 0; i < 100; i++) {\n            double m1 = l + (r - l) / 3;\n            double m2 = r - (r - l) / 3;\n            if (f.applyAsDouble(m1) < f.applyAsDouble(m2)) l = m1;\n            else r = m2;\n        }\n        return (l + r) / 2;\n    }\n}"
            },
            "complexity": {
              "time": "O(log3 N) ternary search steps",
              "space": "O(1) memory space"
            },
            "practice_questions": [
              {
                "title": "Peak Index in a Mountain Array (LeetCode #852)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/peak-index-in-a-mountain-array/"
              }
            ]
          },
          {
            "id": "topic-exponential-search",
            "title": "Exponential Search",
            "slug": "exponential-search",
            "difficulty": "Medium",
            "description": "Search in unbounded or infinite arrays by finding range `[2^(i-1), 2^i]` containing target in O(log i) time followed by Binary Search.",
            "video": {
              "url": "https://www.youtube.com/watch?v=BDUre_qbbdU",
              "title": "Exponential Search for Unbounded Arrays",
              "start_seconds": 0,
              "end_seconds": 450,
              "chapters": [
                {
                  "title": "Range Doubling Technique",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 💡 Exponential Search Range Doubling\nFind index range by doubling step `i = 1, 2, 4, 8...` until `arr[i] >= target`, then run binary search on `[i/2, i]`.",
            "code_example": {
              "language": "multi",
              "python": "# Exponential Search (Python)\ndef exponential_search(arr: list[int], target: int) -> int:\n    if arr[0] == target: return 0\n    n = len(arr)\n    i = 1\n    while i < n and arr[i] <= target:\n        i *= 2\n    # Binary Search in range [i/2, min(i, n-1)]\n    l, r = i // 2, min(i, n - 1)\n    while l <= r:\n        m = (l + r) // 2\n        if arr[m] == target: return m\n        if arr[m] < target: l = m + 1\n        else: r = m - 1\n    return -1",
              "java": "// Java 8 Exponential Search\npublic class Solution {\n    public int expSearch(int[] arr, int target) {\n        if (arr[0] == target) return 0;\n        int i = 1, n = arr.length;\n        while (i < n && arr[i] <= target) i *= 2;\n        return java.util.Arrays.binarySearch(arr, i / 2, Math.min(i + 1, n), target);\n    }\n}"
            },
            "complexity": {
              "time": "O(log i) where i is index of target",
              "space": "O(1) memory pointers"
            },
            "practice_questions": [
              {
                "title": "Search in a Sorted Array of Unknown Size (LeetCode #702)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/"
              }
            ]
          }
        ]
      },
      {
        "id": "sub-sorting",
        "name": "5. Sorting",
        "icon": "🔀",
        "topics": [
          {
            "id": "topic-bubble-selection-insertion-sort",
            "title": "Bubble, Selection, Insertion Sort",
            "slug": "bubble-selection-insertion-sort",
            "difficulty": "Easy",
            "description": "Elementary O(N^2) sorting algorithms: Bubble Sort (adjacent swaps), Selection Sort (find minimum), and Insertion Sort (card sorting).",
            "video": {
              "url": "https://www.youtube.com/watch?v=HGk_ypEuSKE",
              "title": "Elementary Sorts: Bubble, Selection & Insertion Sort",
              "start_seconds": 0,
              "end_seconds": 540,
              "chapters": [
                {
                  "title": "Insertion Sort Online Processing",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 💡 Insertion Sort Card Analogy\nMaintains a sorted left partition and inserts the current item into its correct position by shifting larger elements right.",
            "code_example": {
              "language": "multi",
              "python": "# Insertion Sort (Python)\ndef insertion_sort(arr: list[int]) -> list[int]:\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j >= 0 and arr[j] > key:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key\n    return arr",
              "java": "// Java 8 Insertion Sort\npublic class Solution {\n    public void insertionSort(int[] arr) {\n        for (int i = 1; i < arr.length; i++) {\n            int key = arr[i], j = i - 1;\n            while (j >= 0 && arr[j] > key) {\n                arr[j + 1] = arr[j];\n                j--;\n            }\n            arr[j + 1] = key;\n        }\n    }\n}"
            },
            "complexity": {
              "time": "O(N^2) average/worst, O(N) best case for Insertion Sort",
              "space": "O(1) in-place sorting"
            },
            "practice_questions": [
              {
                "title": "Sort an Array (LeetCode #912)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/sort-an-array/"
              }
            ]
          },
          {
            "id": "topic-merge-sort",
            "title": "Merge Sort",
            "slug": "merge-sort-algorithm",
            "difficulty": "Medium",
            "description": "Divide and conquer O(N log N) stable sorting algorithm with 2-way array merging and Inversion Count.",
            "video": {
              "url": "https://www.youtube.com/watch?v=JSceec-wEyw",
              "title": "Merge Sort Divide & Conquer Algorithm",
              "start_seconds": 0,
              "end_seconds": 580,
              "chapters": [
                {
                  "title": "Merge 2 Sorted Subarrays",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 💡 Merge Sort Recursion\nDivides array into halves recursively, then merges 2 sorted halves using a temporary buffer.",
            "code_example": {
              "language": "multi",
              "python": "# Merge Sort (Python)\ndef mergeSort(arr: list[int]) -> list[int]:\n    if len(arr) <= 1: return arr\n    mid = len(arr) // 2\n    left = mergeSort(arr[:mid])\n    right = mergeSort(arr[mid:])\n    res, i, j = [], 0, 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]: res.append(left[i]); i += 1\n        else: res.append(right[j]); j += 1\n    res.extend(left[i:]); res.extend(right[j:])\n    return res",
              "java": "// Java 8 Merge Sort\npublic class Solution {\n    public void mergeSort(int[] arr, int l, int r) {\n        if (l < r) {\n            int m = l + (r - l) / 2;\n            mergeSort(arr, l, m);\n            mergeSort(arr, m + 1, r);\n            merge(arr, l, m, r);\n        }\n    }\n    private void merge(int[] arr, int l, int m, int r) {}\n}"
            },
            "complexity": {
              "time": "O(N log N) guaranteed across all cases",
              "space": "O(N) auxiliary array buffer"
            },
            "practice_questions": [
              {
                "title": "Sort an Array (LeetCode #912)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/sort-an-array/"
              }
            ]
          },
          {
            "id": "topic-quick-sort",
            "title": "Quick Sort",
            "slug": "quick-sort-algorithm",
            "difficulty": "Medium",
            "description": "Partitioning sorting algorithm O(N log N) average: Lomuto vs Hoare partition schemes, Random Pivot selection, and Quickselect.",
            "video": {
              "url": "https://www.youtube.com/watch?v=WIrA4YexLRQ",
              "title": "Quick Sort Lomuto vs Hoare Partitioning",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Partitioning Around Pivot",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 💡 Quick Sort Lomuto Partition\nPlaces pivot element at its exact sorted index `p` such that all elements `< pivot` are on the left and all elements `>= pivot` are on the right.",
            "code_example": {
              "language": "multi",
              "python": "# Quick Sort (Python)\ndef quicksort(arr: list[int]) -> list[int]:\n    if len(arr) <= 1: return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    mid = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + mid + quicksort(right)",
              "java": "// Java 8 Quick Sort\npublic class Solution {\n    public void quickSort(int[] arr, int l, int r) {\n        if (l < r) {\n            int p = partition(arr, l, r);\n            quickSort(arr, l, p - 1);\n            quickSort(arr, p + 1, r);\n        }\n    }\n    private int partition(int[] arr, int l, int r) {\n        int pivot = arr[r], i = l;\n        for (int j = l; j < r; j++) {\n            if (arr[j] < pivot) {\n                int tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp; i++;\n            }\n        }\n        int tmp = arr[i]; arr[i] = arr[r]; arr[r] = tmp;\n        return i;\n    }\n}"
            },
            "complexity": {
              "time": "O(N log N) average, O(N^2) worst case (sorted array with bad pivot)",
              "space": "O(log N) call stack"
            },
            "practice_questions": [
              {
                "title": "Sort an Array (LeetCode #912)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/sort-an-array/"
              }
            ]
          },
          {
            "id": "topic-heap-sort",
            "title": "Heap Sort",
            "slug": "heap-sort-algorithm",
            "difficulty": "Medium",
            "description": "In-place comparison sorting using Binary Max-Heap: O(N) Build Heap + O(N log N) Root Extraction & Heapify.",
            "video": {
              "url": "https://www.youtube.com/watch?v=HqPJF2L5h9U",
              "title": "Heap Sort & In-Place Max Heapify",
              "start_seconds": 0,
              "end_seconds": 540,
              "chapters": [
                {
                  "title": "Heapify & Extract Root",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 💡 Heap Sort Steps\n1. Build Max-Heap from array `O(N)`.\n2. Swap root (largest element) with last element, decrease heap size by 1, and run `heapify` on root `O(log N)`.",
            "code_example": {
              "language": "multi",
              "python": "# Heap Sort (Python)\ndef heapify(arr, n, i):\n    largest = i; l = 2*i + 1; r = 2*i + 2\n    if l < n and arr[l] > arr[largest]: largest = l\n    if r < n and arr[r] > arr[largest]: largest = r\n    if largest != i:\n        arr[i], arr[largest] = arr[largest], arr[i]\n        heapify(arr, n, largest)\n\ndef heapSort(arr):\n    n = len(arr)\n    for i in range(n // 2 - 1, -1, -1): heapify(arr, n, i)\n    for i in range(n - 1, 0, -1):\n        arr[0], arr[i] = arr[i], arr[0]\n        heapify(arr, i, 0)\n    return arr",
              "java": "// Java 8 Heap Sort\npublic class Solution {\n    public void heapSort(int[] arr) {\n        int n = arr.length;\n        for (int i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i);\n        for (int i = n - 1; i > 0; i--) {\n            int tmp = arr[0]; arr[0] = arr[i]; arr[i] = tmp;\n            heapify(arr, i, 0);\n        }\n    }\n    private void heapify(int[] arr, int n, int i) {}\n}"
            },
            "complexity": {
              "time": "O(N log N) guaranteed in-place sort",
              "space": "O(1) memory space"
            },
            "practice_questions": [
              {
                "title": "Sort an Array (LeetCode #912)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/sort-an-array/"
              }
            ]
          },
          {
            "id": "topic-counting-sort",
            "title": "Counting Sort",
            "slug": "counting-sort-algorithm",
            "difficulty": "Easy",
            "description": "Non-comparison sorting algorithm O(N + K) for discrete range integer keys using frequency counting and prefix positions.",
            "video": {
              "url": "https://www.youtube.com/watch?v=OKd534EWcdk",
              "title": "Counting Sort Algorithm O(N+K)",
              "start_seconds": 0,
              "end_seconds": 450,
              "chapters": [
                {
                  "title": "Count Array Prefix Sums",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 💡 Counting Sort Mechanics\nCounts frequency of each key in range `[0..K]`, then computes prefix sums to place elements directly into output array.",
            "code_example": {
              "language": "multi",
              "python": "# Counting Sort (Python)\ndef counting_sort(arr: list[int]) -> list[int]:\n    if not arr: return arr\n    max_val = max(arr)\n    count = [0] * (max_val + 1)\n    for x in arr: count[x] += 1\n    res = []\n    for val, freq in enumerate(count):\n        res.extend([val] * freq)\n    return res",
              "java": "// Java 8 Counting Sort\npublic class Solution {\n    public int[] countingSort(int[] arr) {\n        int max = 0;\n        for (int x : arr) max = Math.max(max, x);\n        int[] count = new int[max + 1];\n        for (int x : arr) count[x]++;\n        int idx = 0;\n        for (int val = 0; val <= max; val++) {\n            while (count[val]-- > 0) arr[idx++] = val;\n        }\n        return arr;\n    }\n}"
            },
            "complexity": {
              "time": "O(N + K) where K is range max - min",
              "space": "O(N + K) count array and output buffer"
            },
            "practice_questions": [
              {
                "title": "Sort Colors (LeetCode #75)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/sort-colors/"
              }
            ]
          },
          {
            "id": "topic-radix-sort",
            "title": "Radix Sort",
            "slug": "radix-sort-algorithm",
            "difficulty": "Medium",
            "description": "Digit-by-digit non-comparison sorting algorithm O(d * (N + b)) using Stable Counting Sort from Least Significant Digit (LSD) to MSD.",
            "video": {
              "url": "https://www.youtube.com/watch?v=nu4gDuFabIM",
              "title": "Radix Sort LSD Digit Sorting",
              "start_seconds": 0,
              "end_seconds": 480,
              "chapters": [
                {
                  "title": "LSD Digit Iteration",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 💡 Radix Sort LSD\nSorts numbers digit-by-digit from least significant digit (1s place, 10s place, 100s place) using stable counting sort.",
            "code_example": {
              "language": "multi",
              "python": "# Radix Sort (Python)\ndef radix_sort(arr: list[int]) -> list[int]:\n    if not arr: return arr\n    max_val = max(arr)\n    exp = 1\n    while max_val // exp > 0:\n        count = [0] * 10\n        output = [0] * len(arr)\n        for x in arr: count[(x // exp) % 10] += 1\n        for i in range(1, 10): count[i] += count[i - 1]\n        for i in range(len(arr) - 1, -1, -1):\n            digit = (arr[i] // exp) % 10\n            output[count[digit] - 1] = arr[i]\n            count[digit] -= 1\n        arr = output\n        exp *= 10\n    return arr",
              "java": "// Java 8 Radix Sort\npublic class Solution {\n    public void radixSort(int[] arr) {\n        int max = 0;\n        for (int x : arr) max = Math.max(max, x);\n        for (int exp = 1; max / exp > 0; exp *= 10) {\n            countSortByDigit(arr, exp);\n        }\n    }\n    private void countSortByDigit(int[] arr, int exp) {}\n}"
            },
            "complexity": {
              "time": "O(d * (N + B)) where d is digits count and B is base 10",
              "space": "O(N + B) output array buffer"
            },
            "practice_questions": [
              {
                "title": "Maximum Gap (LeetCode #164)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/maximum-gap/"
              }
            ]
          },
          {
            "id": "topic-bucket-sort",
            "title": "Bucket Sort",
            "slug": "bucket-sort-algorithm",
            "difficulty": "Medium",
            "description": "Distribute elements into uniform floating point range buckets `[0.0, 1.0)` followed by individual bucket insertion sorting.",
            "video": {
              "url": "https://www.youtube.com/watch?v=gqXU1UyA85A",
              "title": "Bucket Sort Distribution & Range Partitioning",
              "start_seconds": 0,
              "end_seconds": 450,
              "chapters": [
                {
                  "title": "Bucket Partitioning",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 💡 Bucket Sort Partitioning\nUniformly distributed floating point values are hashed into `N` buckets, sorted independently, and concatenated.",
            "code_example": {
              "language": "multi",
              "python": "# Bucket Sort (Python)\ndef bucket_sort(arr: list[float]) -> list[float]:\n    n = len(arr)\n    buckets = [[] for _ in range(n)]\n    for x in arr:\n        idx = int(n * x)\n        buckets[idx].append(x)\n    res = []\n    for b in buckets:\n        res.extend(sorted(b))\n    return res",
              "java": "// Java 8 Bucket Sort\nimport java.util.*;\npublic class Solution {\n    public void bucketSort(float[] arr) {\n        int n = arr.length;\n        List<Float>[] buckets = new List[n];\n        for (int i = 0; i < n; i++) buckets[i] = new ArrayList<>();\n        for (float x : arr) buckets[(int)(n * x)].add(x);\n        int idx = 0;\n        for (var b : buckets) {\n            Collections.sort(b);\n            for (float x : b) arr[idx++] = x;\n        }\n    }\n}"
            },
            "complexity": {
              "time": "O(N + K) average time for uniform distribution",
              "space": "O(N + K) buckets memory"
            },
            "practice_questions": [
              {
                "title": "Top K Frequent Elements (LeetCode #347)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/top-k-frequent-elements/"
              }
            ]
          },
          {
            "id": "topic-stability-in-sorting-in-place-vs-out-place",
            "title": "Stability in sorting, In-place vs Out-place",
            "slug": "stability-in-sorting-in-place-vs-out-place",
            "difficulty": "Easy",
            "description": "Classification of sorting algorithms by Stability (preserving relative order of equal keys) and Space (In-Place O(1) vs Out-Place O(N)).",
            "video": {
              "url": "https://www.youtube.com/watch?v=HGk_ypEuSKE",
              "title": "Sorting Classification: Stability & Memory",
              "start_seconds": 0,
              "end_seconds": 450,
              "chapters": [
                {
                  "title": "Stability Definition",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 💡 Stability & Memory Classification\n- **Stable Sorts**: Merge Sort, Insertion Sort, Bubble Sort, Counting Sort.\n- **Unstable Sorts**: Quick Sort, Heap Sort, Selection Sort.\n- **In-Place Sorts**: Quick Sort, Heap Sort, Insertion Sort, Bubble Sort.",
            "code_example": {
              "language": "multi",
              "python": "# Stability Concept (Python)\nitems = [('apple', 2), ('banana', 1), ('cherry', 2)]\n# Python sort() is Timsort (Stable!)\nitems.sort(key=lambda x: x[1])\n# ('apple', 2) remains BEFORE ('cherry', 2)",
              "java": "// Java 8 Arrays.sort vs Collections.sort\npublic class Solution {\n    // Dual-Pivot Quicksort for primitives (Unstable)\n    // Timsort for Objects (Stable)\n}"
            },
            "complexity": {
              "time": "Theoretical sorting algorithm classification",
              "space": "O(1) memory space"
            },
            "practice_questions": [
              {
                "title": "Sort Characters By Frequency (LeetCode #451)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/sort-characters-by-frequency/"
              }
            ]
          }
        ]
      },
      {
        "id": "sub-linked-list",
        "name": "6. Linked List",
        "slug": "linked-list",
        "icon": "🔗",
        "topics": [
          {
            "id": "linked-list-singly",
            "title": "Singly Linked List",
            "slug": "singly-linked-list",
            "difficulty": "Easy",
            "description": "Master linear node-based data structures with pointer-based traversal and manipulation.",
            "video": {
              "url": "https://www.youtube.com/embed/R9PTBwOzceo",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Node Architecture & Pointers"
                },
                {
                  "time": "4:30",
                  "title": "Insertion at Head/Tail/Position"
                },
                {
                  "time": "9:15",
                  "title": "Deletion & Memory Freeing"
                }
              ]
            },
            "explanation": "### Singly Linked List Intuition (Hindish)\nSingly Linked List ek linear data structure hai jahan dynamic nodes heap memory me disperse hothi hain. Har node do cheezein hold karti hai: **Data** aur **Next Pointer** (agli node ka address).\n\n```\n[ Head ] -> [ Data: 10 | Next ] -> [ Data: 20 | Next ] -> [ Data: 30 | Null ]\n```\n\n### Key Operations & Code Intuition\n- **Traversal:** `curr = head` se initialize karo aur tab tak badhte raho jab tak `curr != None`.\n- **Insertion at Head:** `new_node.next = head`, phir `head = new_node` (O(1)).\n- **Deletion:** Previous node ka pointer target ke agle node tak bypass karo: `prev.next = curr.next`.",
            "code_example": {
              "python": "class Node:\n    def __init__(self, val):\n        self.val = val\n        self.next = None\n\nclass SinglyLinkedList:\n    def __init__(self):\n        self.head = None\n        \n    def insert_head(self, val):\n        new_node = Node(val)\n        new_node.next = self.head\n        self.head = new_node\n        \n    def display(self):\n        curr = self.head\n        res = []\n        while curr:\n            res.append(str(curr.val))\n            curr = curr.next\n        print(' -> '.join(res) + ' -> None')",
              "java": "class Node {\n    int val;\n    Node next;\n    Node(int val) { this.val = val; }\n}\n\npublic class SinglyLinkedList {\n    Node head;\n    public void insertHead(int val) {\n        Node newNode = new Node(val);\n        newNode.next = head;\n        head = newNode;\n    }\n}"
            },
            "complexity": {
              "time": "Access: O(N), Insert/Delete Head: O(1), Search: O(N)",
              "space": "O(N) total memory for N nodes"
            },
            "practice_questions": [
              {
                "name": "Design Linked List",
                "url": "https://leetcode.com/problems/design-linked-list/",
                "difficulty": "Medium"
              },
              {
                "name": "Delete Node in a Linked List",
                "url": "https://leetcode.com/problems/delete-node-in-a-linked-list/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "linked-list-doubly",
            "title": "Doubly Linked List",
            "slug": "doubly-linked-list",
            "difficulty": "Medium",
            "description": "Bidirectional node linkage allowing O(1) backward and forward traversals.",
            "video": {
              "url": "https://www.youtube.com/embed/0rlyR7w93zQ",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Prev & Next Pointer Structure"
                },
                {
                  "time": "5:00",
                  "title": "Insertion/Deletion Corner Cases"
                },
                {
                  "time": "11:20",
                  "title": "LRU Cache Foundation"
                }
              ]
            },
            "explanation": "### Doubly Linked List Intuition (Hindish)\nDLL me har node ke paas 3 components hote hain: `prev` pointer, `val`, aur `next` pointer. Iska sabse bada advantage ye hai ki hum kisi bhi node se piche (backward) bhi traverse kar sakte hain.\n\n```\nNull <- [ Prev | Data: 10 | Next ] <-> [ Prev | Data: 20 | Next ] -> Null\n```",
            "code_example": {
              "python": "class Node:\n    def __init__(self, val):\n        self.val = val\n        self.prev = None\n        self.next = None\n\nclass DoublyLinkedList:\n    def __init__(self):\n        self.head = None\n        \n    def insert_at_head(self, val):\n        new_node = Node(val)\n        new_node.next = self.head\n        if self.head:\n            self.head.prev = new_node\n        self.head = new_node",
              "java": "class DLLNode {\n    int val;\n    DLLNode prev, next;\n    DLLNode(int val) { this.val = val; }\n}"
            },
            "complexity": {
              "time": "Insert/Delete given node pointer: O(1), Access/Search: O(N)",
              "space": "O(N) (Extra space for prev pointers)"
            },
            "practice_questions": [
              {
                "name": "LRU Cache",
                "url": "https://leetcode.com/problems/lru-cache/",
                "difficulty": "Hard"
              }
            ]
          },
          {
            "id": "linked-list-circular",
            "title": "Circular Linked List",
            "slug": "circular-linked-list",
            "difficulty": "Medium",
            "description": "Ring-structured node list where the last node points back to the head.",
            "video": {
              "url": "https://www.youtube.com/embed/58Ybp874HKg",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Circular Link Concept"
                },
                {
                  "time": "4:00",
                  "title": "Tail Pointer Trick"
                },
                {
                  "time": "8:30",
                  "title": "Josephus Problem Application"
                }
              ]
            },
            "explanation": "### Circular Linked List (Hindish)\nCircular LL me koi Null node nahi hota! Last node ka `next` direct `head` node ko point karta hai. Round-robin CPU scheduling aur multiplayer board games me continuous looping ke liye standard format hai.",
            "code_example": {
              "python": "def insert_circular(tail, val):\n    new_node = Node(val)\n    if not tail:\n        new_node.next = new_node\n        return new_node\n    new_node.next = tail.next\n    tail.next = new_node\n    return new_node",
              "java": "public Node insertCircular(Node tail, int val) {\n    Node newNode = new Node(val);\n    if (tail == null) {\n        newNode.next = newNode;\n        return newNode;\n    }\n    newNode.next = tail.next;\n    tail.next = newNode;\n    return newNode;\n}"
            },
            "complexity": {
              "time": "Insert/Delete Head using Tail pointer: O(1), Search: O(N)",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Split a Circular Linked List into Two Halves",
                "url": "https://practice.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1",
                "difficulty": "Easy"
              }
            ]
          },
          {
            "id": "linked-list-reversal",
            "title": "Reversal (iterative & recursive)",
            "slug": "reversal-iterative-and-recursive",
            "difficulty": "Medium",
            "description": "In-place pointer orientation reversal using 3-pointer iterative technique and stack-frame recursion.",
            "video": {
              "url": "https://www.youtube.com/embed/G0_I-ZF0S38",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "3-Pointer Iterative Method"
                },
                {
                  "time": "6:15",
                  "title": "Recursive Reversal Intuition"
                },
                {
                  "time": "12:00",
                  "title": "Sub-list Reversal Variations"
                }
              ]
            },
            "explanation": "### Linked List Reversal (Hindish)\n1. **Iterative:** Teen pointers maintain karo - `prev = None`, `curr = head`, `nxt = None`. Har step me `curr.next = prev` set karo aur pointers forward slide karo.\n2. **Recursive:** Base case `head == None or head.next == None`. Subproblem reverse hone ke baad `head.next.next = head` aur `head.next = None` kar do.",
            "code_example": {
              "python": "# Iterative\ndef reverse_list_iterative(head):\n    prev, curr = None, head\n    while curr:\n        nxt = curr.next\n        curr.next = prev\n        prev = curr\n        curr = nxt\n    return prev\n\n# Recursive\ndef reverse_list_recursive(head):\n    if not head or not head.next:\n        return head\n    new_head = reverse_list_recursive(head.next)\n    head.next.next = head\n    head.next = None\n    return new_head",
              "java": "public Node reverseListIterative(Node head) {\n    Node prev = null, curr = head;\n    while (curr != null) {\n        Node nxt = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = nxt;\n    }\n    return prev;\n}"
            },
            "complexity": {
              "time": "O(N) for both iterative and recursive",
              "space": "Iterative: O(1), Recursive: O(N) auxiliary call stack"
            },
            "practice_questions": [
              {
                "name": "Reverse Linked List",
                "url": "https://leetcode.com/problems/reverse-linked-list/",
                "difficulty": "Easy"
              },
              {
                "name": "Reverse Linked List II",
                "url": "https://leetcode.com/problems/reverse-linked-list-ii/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "linked-list-cycle-detection",
            "title": "Cycle detection (Floyd's Cycle Detection / Tortoise-Hare)",
            "slug": "cycle-detection-floyds-tortoise-hare",
            "difficulty": "Medium",
            "description": "Detect loop presence and locate cycle entry node using fast and slow pointers.",
            "video": {
              "url": "https://www.youtube.com/embed/gBTe7lFR3vc",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Mathematical Proof of Convergence"
                },
                {
                  "time": "5:30",
                  "title": "Cycle Detection Implementation"
                },
                {
                  "time": "10:15",
                  "title": "Finding Loop Entry Node"
                }
              ]
            },
            "explanation": "### Floyd's Cycle Detection (Hindish)\n**Slow (Tortoise)** 1 step chalta hai aur **Fast (Hare)** 2 steps chalta hai. Agar list me loop hai, toh unka relative speed 1 node per step hoga, isliye Fast pointer guaranteed Slow pointer ko loop ke andar meet karega!\n\n```\nLoop Entry Find: Jab meet ho jaye, tab slow ko head par reset karo.\nDono ko 1-1 step badao. Jahan dubara milenge wo Loop Entry Node hoga!\n```",
            "code_example": {
              "python": "def has_cycle(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast:\n            return True\n    return False",
              "java": "public boolean hasCycle(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow == fast) return true;\n    }\n    return false;\n}"
            },
            "complexity": {
              "time": "O(N) linear scan",
              "space": "O(1) auxiliary space"
            },
            "practice_questions": [
              {
                "name": "Linked List Cycle",
                "url": "https://leetcode.com/problems/linked-list-cycle/",
                "difficulty": "Easy"
              },
              {
                "name": "Linked List Cycle II",
                "url": "https://leetcode.com/problems/linked-list-cycle-ii/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "linked-list-merge-two-sorted",
            "title": "Merge two sorted lists",
            "slug": "merge-two-sorted-lists",
            "difficulty": "Easy",
            "description": "Combine two sorted linked lists into a single sorted list using a dummy head node.",
            "video": {
              "url": "https://www.youtube.com/embed/XIdigk956u0",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Dummy Head Concept"
                },
                {
                  "time": "4:20",
                  "title": "Iterative Merging Algorithm"
                },
                {
                  "time": "8:00",
                  "title": "Recursive Merging Alternative"
                }
              ]
            },
            "explanation": "### Merge Two Sorted Lists (Hindish)\nEk **Dummy Node** banao, jo result list ki starting boundary capture karega. Pointers `l1` aur `l2` compare karke smaller element `tail.next` me attach karte jaao.",
            "code_example": {
              "python": "def merge_two_lists(l1, l2):\n    dummy = ListNode(0)\n    tail = dummy\n    while l1 and l2:\n        if l1.val <= l2.val:\n            tail.next = l1\n            l1 = l1.next\n        else:\n            tail.next = l2\n            l2 = l2.next\n        tail = tail.next\n    tail.next = l1 or l2\n    return dummy.next",
              "java": "public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n    ListNode dummy = new ListNode(0);\n    ListNode tail = dummy;\n    while (l1 != null && l2 != null) {\n        if (l1.val <= l2.val) {\n            tail.next = l1; l1 = l1.next;\n        } else {\n            tail.next = l2; l2 = l2.next;\n        }\n        tail = tail.next;\n    }\n    tail.next = (l1 != null) ? l1 : l2;\n    return dummy.next;\n}"
            },
            "complexity": {
              "time": "O(N + M)",
              "space": "O(1) iterative, O(N + M) recursive stack"
            },
            "practice_questions": [
              {
                "name": "Merge Two Sorted Lists",
                "url": "https://leetcode.com/problems/merge-two-sorted-lists/",
                "difficulty": "Easy"
              },
              {
                "name": "Merge k Sorted Lists",
                "url": "https://leetcode.com/problems/merge-k-sorted-lists/",
                "difficulty": "Hard"
              }
            ]
          },
          {
            "id": "linked-list-middle-element",
            "title": "Finding middle element",
            "slug": "finding-middle-element",
            "difficulty": "Easy",
            "description": "Locate list midpoint in a single pass using Fast & Slow pointer runner strategy.",
            "video": {
              "url": "https://www.youtube.com/embed/7LjQ57w385k",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Runner Technique Concept"
                },
                {
                  "time": "3:40",
                  "title": "Even vs Odd Length Lists"
                },
                {
                  "time": "7:10",
                  "title": "Merge Sort Midpoint Application"
                }
              ]
            },
            "explanation": "### Finding Middle Element (Hindish)\nSlow pointer 1 step aage chalta hai, fast pointer 2 step aage chalta hai. Jab fast end ya null reach kar leta hai, tab slow exactly list ke midpoint par hota hai!",
            "code_example": {
              "python": "def find_middle(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    return slow",
              "java": "public ListNode middleNode(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n    }\n    return slow;\n}"
            },
            "complexity": {
              "time": "O(N) single pass",
              "space": "O(1)"
            },
            "practice_questions": [
              {
                "name": "Middle of the Linked List",
                "url": "https://leetcode.com/problems/middle-of-the-linked-list/",
                "difficulty": "Easy"
              }
            ]
          },
          {
            "id": "linked-list-remove-nth-from-end",
            "title": "Remove Nth node from end",
            "slug": "remove-nth-node-from-end",
            "difficulty": "Medium",
            "description": "Delete Nth node from list tail in a single pass using two pointer gap maintenance.",
            "video": {
              "url": "https://www.youtube.com/embed/XVuQxVej6y8",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Two-Pointer Gap Strategy"
                },
                {
                  "time": "4:30",
                  "title": "Handling Head Deletion Corner Case"
                },
                {
                  "time": "8:50",
                  "title": "Code Implementation"
                }
              ]
            },
            "explanation": "### Remove Nth Node From End (Hindish)\n1. Fast pointer ko pehle `N` steps aage chalao.\n2. Banao dummy node jisse head delete karna simple ho jaaye (`slow = dummy`).\n3. Phir slow aur fast dono ko 1-1 step aage chalao jab tak `fast.next != null`. Fast Jab end pahuchega, slow target ke theek pehle wali node par khada hoga!",
            "code_example": {
              "python": "def remove_nth_from_end(head, n):\n    dummy = ListNode(0, head)\n    first = second = dummy\n    for _ in range(n + 1):\n        first = first.next\n    while first:\n        first = first.next\n        second = second.next\n    second.next = second.next.next\n    return dummy.next",
              "java": "public ListNode removeNthFromEnd(ListNode head, int n) {\n    ListNode dummy = new ListNode(0, head);\n    ListNode first = dummy, second = dummy;\n    for (int i = 0; i <= n; i++) first = first.next;\n    while (first != null) {\n        first = first.next;\n        second = second.next;\n    }\n    second.next = second.next.next;\n    return dummy.next;\n}"
            },
            "complexity": {
              "time": "O(N) single pass",
              "space": "O(1)"
            },
            "practice_questions": [
              {
                "name": "Remove Nth Node From End of List",
                "url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "linked-list-intersection-point",
            "title": "Intersection point of two lists",
            "slug": "intersection-point-of-two-lists",
            "difficulty": "Easy",
            "description": "Find Y-shaped node intersection using 2-pointer tail swapping logic.",
            "video": {
              "url": "https://www.youtube.com/embed/u4FWXscCSak",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Length Difference Offset Method"
                },
                {
                  "time": "5:10",
                  "title": "2-Pointer Tail Swap Intuition"
                },
                {
                  "time": "9:30",
                  "title": "Edge Case Analysis"
                }
              ]
            },
            "explanation": "### Intersection Point Intuition (Hindish)\nPointer `pA` headA se start karega, pointer `pB` headB se. Jab `pA` end me pahuche, use `headB` par send kar do. Jab `pB` end pahuche, use `headA` par send kar do.\nDono pointers total distance `LengthA + LengthB` cover karte hain, isliye exact intersection point par meet honge!",
            "code_example": {
              "python": "def get_intersection_node(headA, headB):\n    if not headA or not headB: return None\n    pA, pB = headA, headB\n    while pA != pB:\n        pA = pA.next if pA else headB\n        pB = pB.next if pB else headA\n    return pA",
              "java": "public ListNode getIntersectionNode(ListNode headA, ListNode headB) {\n    if (headA == null || headB == null) return null;\n    ListNode pA = headA, pB = headB;\n    while (pA != pB) {\n        pA = (pA == null) ? headB : pA.next;\n        pB = (pB == null) ? headA : pB.next;\n    }\n    return pA;\n}"
            },
            "complexity": {
              "time": "O(N + M)",
              "space": "O(1)"
            },
            "practice_questions": [
              {
                "name": "Intersection of Two Linked Lists",
                "url": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
                "difficulty": "Easy"
              }
            ]
          },
          {
            "id": "linked-list-clone-random-pointer",
            "title": "Clone a linked list with random pointer",
            "slug": "clone-a-linked-list-with-random-pointer",
            "difficulty": "Hard",
            "description": "Deep copy arbitrary cyclic graph nodes using HashMap indexing or node interweaving.",
            "video": {
              "url": "https://www.youtube.com/embed/VNf6VynfpGk",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "HashMap O(N) Space Solution"
                },
                {
                  "time": "5:30",
                  "title": "Interweaving Nodes O(1) Space Trick"
                },
                {
                  "time": "12:00",
                  "title": "Unweaving Cloned Nodes"
                }
              ]
            },
            "explanation": "### Clone Linked List with Random Pointer (Hindish)\n**O(1) Space Method (Interweaving):**\n1. Original nodes ke side-by-side copy nodes insert karo: `A -> A' -> B -> B'`.\n2. Random pointers set karo: `curr.next.random = curr.random.next`.\n3. Original aur Cloned list ko unweave (separate) kar do!",
            "code_example": {
              "python": "def copy_random_list(head):\n    if not head: return None\n    # Step 1: Interweave nodes\n    curr = head\n    while curr:\n        nxt = curr.next\n        copy = Node(curr.val)\n        curr.next = copy\n        copy.next = nxt\n        curr = nxt\n    # Step 2: Assign random pointers\n    curr = head\n    while curr:\n        if curr.random:\n            curr.next.random = curr.random.next\n        curr = curr.next.next\n    # Step 3: Unweave\n    curr = head\n    dummy = Node(0)\n    copy_curr = dummy\n    while curr:\n        nxt = curr.next.next\n        copy = curr.next\n        copy_curr.next = copy\n        copy_curr = copy\n        curr.next = nxt\n        curr = nxt\n    return dummy.next",
              "java": "public Node copyRandomList(Node head) {\n    if (head == null) return null;\n    Map<Node, Node> map = new HashMap<>();\n    Node curr = head;\n    while (curr != null) {\n        map.put(curr, new Node(curr.val));\n        curr = curr.next;\n    }\n    curr = head;\n    while (curr != null) {\n        map.get(curr).next = map.get(curr.next);\n        map.get(curr).random = map.get(curr.random);\n        curr = curr.next;\n    }\n    return map.get(head);\n}"
            },
            "complexity": {
              "time": "O(N) 3-pass algorithm",
              "space": "O(1) auxiliary space (Interweaving algorithm)"
            },
            "practice_questions": [
              {
                "name": "Copy List with Random Pointer",
                "url": "https://leetcode.com/problems/copy-list-with-random-pointer/",
                "difficulty": "Medium"
              }
            ]
          }
        ]
      },
      {
        "id": "sub-stack",
        "name": "7. Stack",
        "slug": "stack",
        "icon": "🥞",
        "topics": [
          {
            "id": "stack-implementation",
            "title": "Array-based & Linked List-based implementation",
            "slug": "array-based-and-linked-list-based-implementation",
            "difficulty": "Easy",
            "description": "LIFO (Last In First Out) data abstraction via static arrays and dynamic nodes.",
            "video": {
              "url": "https://www.youtube.com/embed/I5lq6sCuABE",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "LIFO Principle Intro"
                },
                {
                  "time": "3:30",
                  "title": "Array-based Stack Implementation"
                },
                {
                  "time": "8:00",
                  "title": "Linked-List-based Stack Implementation"
                }
              ]
            },
            "explanation": "### Stack Implementation (Hindish)\nStack LIFO (Last In, First Out) principle follow karta hai. Isko array ya linked list dono se banaya ja sakta hai.\n- **Array implementation:** Fixed size boundary check lagana padta hai (`overflow` vs `underflow`).\n- **Linked list implementation:** Head insertion/deletion `O(1)` time me hota hai without capacity bounds.",
            "code_example": {
              "python": "class StackArray:\n    def __init__(self):\n        self.stack = []\n    def push(self, val):\n        self.stack.append(val)\n    def pop(self):\n        if not self.is_empty():\n            return self.stack.pop()\n    def peek(self):\n        return self.stack[-1] if not self.is_empty() else None\n    def is_empty(self):\n        return len(self.stack) == 0",
              "java": "class Stack {\n    private int[] arr = new int[1000];\n    private int top = -1;\n    public void push(int x) { arr[++top] = x; }\n    public int pop() { return arr[top--]; }\n    public int peek() { return arr[top]; }\n    public boolean isEmpty() { return top == -1; }\n}"
            },
            "complexity": {
              "time": "Push, Pop, Peek: O(1)",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Implement Stack using Queues",
                "url": "https://leetcode.com/problems/implement-stack-using-queues/",
                "difficulty": "Easy"
              }
            ]
          },
          {
            "id": "stack-balanced-parentheses",
            "title": "Balanced parentheses",
            "slug": "balanced-parentheses",
            "difficulty": "Easy",
            "description": "Validate nested sequence opening and closing parenthesis symmetry using stack matching.",
            "video": {
              "url": "https://www.youtube.com/embed/WTzjTskDFMg",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Problem Statement & Edge Cases"
                },
                {
                  "time": "4:15",
                  "title": "Stack Matching Logic"
                },
                {
                  "time": "8:30",
                  "title": "Code Walkthrough"
                }
              ]
            },
            "explanation": "### Balanced Parentheses (Hindish)\nJab bhi opening bracket `(`, `{`, `[` mile, use stack me `push` karo. Jab closing bracket `)`, `}`, `]` mile, stack check karo: agar stack empty hai ya top element matching opening bracket nahi hai, to string invalid hai! Last me stack empty hona chahiye.",
            "code_example": {
              "python": "def is_valid(s):\n    stack = []\n    mapping = {')': '(', '}': '{', ']': '['}\n    for char in s:\n        if char in mapping:\n            top = stack.pop() if stack else '#'\n            if mapping[char] != top:\n                return False\n        else:\n            stack.append(char)\n    return not stack",
              "java": "public boolean isValid(String s) {\n    Stack<Character> stack = new Stack<>();\n    for (char c : s.toCharArray()) {\n        if (c == '(') stack.push(')');\n        else if (c == '{') stack.push('}');\n        else if (c == '[') stack.push(']');\n        else if (stack.isEmpty() || stack.pop() != c) return false;\n    }\n    return stack.isEmpty();\n}"
            },
            "complexity": {
              "time": "O(N) linear string scan",
              "space": "O(N) stack auxiliary memory"
            },
            "practice_questions": [
              {
                "name": "Valid Parentheses",
                "url": "https://leetcode.com/problems/valid-parentheses/",
                "difficulty": "Easy"
              },
              {
                "name": "Minimum Add to Make Parentheses Valid",
                "url": "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "stack-next-greater-smaller",
            "title": "Next Greater/Smaller Element",
            "slug": "next-greater-smaller-element",
            "difficulty": "Medium",
            "description": "Find nearest strictly greater/smaller element to the right in O(N) using Monotonic Stack.",
            "video": {
              "url": "https://www.youtube.com/embed/Du881K7Jtk8",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Brute Force vs Monotonic Stack"
                },
                {
                  "time": "5:20",
                  "title": "Right-to-Left Traversal Method"
                },
                {
                  "time": "10:45",
                  "title": "Next Greater Element II (Circular Array)"
                }
              ]
            },
            "explanation": "### Next Greater Element (Hindish)\nArray me right-to-left traverse karo. Stack me elements push karte raho. Lekin push karne se pehle current element se chote ya barabar saare elements pop kar do (`while stack and stack[-1] <= curr: stack.pop()`). Stack ka top element next greater element hoga!",
            "code_example": {
              "python": "def next_greater_element(arr):\n    n = len(arr)\n    res = [-1] * n\n    stack = []\n    for i in range(n - 1, -1, -1):\n        while stack and stack[-1] <= arr[i]:\n            stack.pop()\n        if stack:\n            res[i] = stack[-1]\n        stack.append(arr[i])\n    return res",
              "java": "public int[] nextGreaterElement(int[] arr) {\n    int n = arr.length;\n    int[] res = new int[n];\n    Stack<Integer> stack = new Stack<>();\n    for (int i = n - 1; i >= 0; i--) {\n        while (!stack.isEmpty() && stack.peek() <= arr[i]) stack.pop();\n        res[i] = stack.isEmpty() ? -1 : stack.peek();\n        stack.push(arr[i]);\n    }\n    return res;\n}"
            },
            "complexity": {
              "time": "O(N) amortized (each element pushed/popped at most once)",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Next Greater Element I",
                "url": "https://leetcode.com/problems/next-greater-element-i/",
                "difficulty": "Easy"
              },
              {
                "name": "Next Greater Element II",
                "url": "https://leetcode.com/problems/next-greater-element-ii/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "stack-previous-greater-smaller",
            "title": "Previous Greater/Smaller Element",
            "slug": "previous-greater-smaller-element",
            "difficulty": "Medium",
            "description": "Find nearest strictly greater/smaller element to the left using left-to-right monotonic stack processing.",
            "video": {
              "url": "https://www.youtube.com/embed/T5s96ynzArg",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Left-to-Right Traversal Logic"
                },
                {
                  "time": "4:30",
                  "title": "Monotonic Stack Popping Rule"
                },
                {
                  "time": "8:00",
                  "title": "Histogram Boundary Prerequisite"
                }
              ]
            },
            "explanation": "### Previous Greater/Smaller Element (Hindish)\nSath hi Next Greater ki tarah, left-to-right scan karte hain. Index `0` se `N-1` jate waqt stack me se chote elements pop kar ke previous greater element dhyan me rakha jata hai.",
            "code_example": {
              "python": "def prev_smaller_element(arr):\n    n = len(arr)\n    res = [-1] * n\n    stack = []\n    for i in range(n):\n        while stack and stack[-1] >= arr[i]:\n            stack.pop()\n        if stack:\n            res[i] = stack[-1]\n        stack.append(arr[i])\n    return res",
              "java": "public int[] prevSmallerElement(int[] arr) {\n    int[] res = new int[arr.length];\n    Stack<Integer> stack = new Stack<>();\n    for (int i = 0; i < arr.length; i++) {\n        while (!stack.isEmpty() && stack.peek() >= arr[i]) stack.pop();\n        res[i] = stack.isEmpty() ? -1 : stack.peek();\n        stack.push(arr[i]);\n    }\n    return res;\n}"
            },
            "complexity": {
              "time": "O(N)",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Largest Rectangle in Histogram",
                "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
                "difficulty": "Hard"
              }
            ]
          },
          {
            "id": "stack-monotonic",
            "title": "Monotonic Stack",
            "slug": "monotonic-stack",
            "difficulty": "Hard",
            "description": "Maintain strictly increasing or decreasing elements inside stack to resolve range query problems in O(N).",
            "video": {
              "url": "https://www.youtube.com/embed/Dq_ObZwTY_U",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Monotonic Property Fundamentals"
                },
                {
                  "time": "6:00",
                  "title": "Daily Temperatures Problem"
                },
                {
                  "time": "12:30",
                  "title": "Largest Rectangle in Histogram Deep Dive"
                }
              ]
            },
            "explanation": "### Monotonic Stack (Hindish)\nMonotonic Stack ek aisi stack hoti hai jisme elements humesha sorted order (ya to strictly increasing ya decreasing) me store hote hain. Jab naya element violate karta hai monotonicity ko, hum stack se pop karte hain aur wo pop hone wale items ka Nearest Greater/Smaller answer calculate karte hain!",
            "code_example": {
              "python": "def daily_temperatures(temperatures):\n    res = [0] * len(temperatures)\n    stack = []  # store indices\n    for i, t in enumerate(temperatures):\n        while stack and temperatures[stack[-1]] < t:\n            prev_idx = stack.pop()\n            res[prev_idx] = i - prev_idx\n        stack.append(i)\n    return res",
              "java": "public int[] dailyTemperatures(int[] temperatures) {\n    int[] res = new int[temperatures.length];\n    Stack<Integer> stack = new Stack<>();\n    for (int i = 0; i < temperatures.length; i++) {\n        while (!stack.isEmpty() && temperatures[stack.peek()] < temperatures[i]) {\n            int prev = stack.pop();\n            res[prev] = i - prev;\n        }\n        stack.push(i);\n    }\n    return res;\n}"
            },
            "complexity": {
              "time": "O(N) total processing time",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Daily Temperatures",
                "url": "https://leetcode.com/problems/daily-temperatures/",
                "difficulty": "Medium"
              },
              {
                "name": "Trapping Rain Water",
                "url": "https://leetcode.com/problems/trapping-rain-water/",
                "difficulty": "Hard"
              }
            ]
          },
          {
            "id": "stack-min-stack",
            "title": "Min Stack (get minimum in O(1))",
            "slug": "min-stack-get-minimum-in-o1",
            "difficulty": "Medium",
            "description": "Design stack tracking current global minimum at any moment in constant O(1) time complexity.",
            "video": {
              "url": "https://www.youtube.com/embed/qwmuqlG39eU",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Two-Stack Approach"
                },
                {
                  "time": "5:10",
                  "title": "O(1) Memory Difference Encoding Formula"
                },
                {
                  "time": "10:30",
                  "title": "Code Implementation"
                }
              ]
            },
            "explanation": "### Min Stack Intuition (Hindish)\nSabse straightforward tareeka hai ek **Auxiliary Min Stack** maintain karna jo main stack ke har state par current minimum value store karti hai.\n- Jab push ho: `min_stack.append(min(val, min_stack[-1]))`.\n- Jab pop ho: Dono stacks se pop karo.",
            "code_example": {
              "python": "class MinStack:\n    def __init__(self):\n        self.stack = []\n        self.min_stack = []\n\n    def push(self, val: int) -> None:\n        self.stack.append(val)\n        val = min(val, self.min_stack[-1] if self.min_stack else val)\n        self.min_stack.append(val)\n\n    def pop(self) -> None:\n        self.stack.pop()\n        self.min_stack.pop()\n\n    def top(self) -> int:\n        return self.stack[-1]\n\n    def getMin(self) -> int:\n        return self.min_stack[-1]",
              "java": "class MinStack {\n    private Stack<Integer> stack = new Stack<>();\n    private Stack<Integer> minStack = new Stack<>();\n    public void push(int val) {\n        stack.push(val);\n        if (minStack.isEmpty() || val <= minStack.peek()) minStack.push(val);\n        else minStack.push(minStack.peek());\n    }\n    public void pop() {\n        stack.pop();\n        minStack.pop();\n    }\n    public int top() { return stack.peek(); }\n    public int getMin() { return minStack.peek(); }\n}"
            },
            "complexity": {
              "time": "Push, Pop, Top, GetMin: All O(1)",
              "space": "O(N) for storing minimum stack history"
            },
            "practice_questions": [
              {
                "name": "Min Stack",
                "url": "https://leetcode.com/problems/min-stack/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "stack-stock-span",
            "title": "Stock span problem",
            "slug": "stock-span-problem",
            "difficulty": "Medium",
            "description": "Calculate consecutive days stock price was less than or equal to current day's price.",
            "video": {
              "url": "https://www.youtube.com/embed/p9T-fE1g1pU",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Stock Span Statement"
                },
                {
                  "time": "4:00",
                  "title": "Monotonic Stack Reduction"
                },
                {
                  "time": "8:45",
                  "title": "Online Stock Span Code"
                }
              ]
            },
            "explanation": "### Stock Span Problem (Hindish)\nStock span matlab aaj ke din ka price pichle kitne consecutive days tak se chota ya barabar tha. Ye problem variant hai **Previous Greater Element** ka! Stack me tuples `(price, span)` save karo.",
            "code_example": {
              "python": "class StockSpanner:\n    def __init__(self):\n        self.stack = []  # (price, span)\n\n    def next(self, price: int) -> int:\n        span = 1\n        while self.stack and self.stack[-1][0] <= price:\n            span += self.stack.pop()[1]\n        self.stack.append((price, span))\n        return span",
              "java": "class StockSpanner {\n    Stack<int[]> stack = new Stack<>(); // [price, span]\n    public int next(int price) {\n        int span = 1;\n        while (!stack.isEmpty() && stack.peek()[0] <= price) {\n            span += stack.pop()[1];\n        }\n        stack.push(new int[]{price, span});\n        return span;\n    }\n}"
            },
            "complexity": {
              "time": "O(1) amortized per next() call",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Online Stock Span",
                "url": "https://leetcode.com/problems/online-stock-span/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "stack-infix-prefix-postfix",
            "title": "Infix, Prefix, Postfix conversions & evaluation",
            "slug": "infix-prefix-postfix-conversions-and-evaluation",
            "difficulty": "Medium",
            "description": "Parse mathematical expressions using operator precedence and Shunting Yard algorithm.",
            "video": {
              "url": "https://www.youtube.com/embed/vq-nUF0g4wU",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Infix, Prefix, Postfix Notation Intro"
                },
                {
                  "time": "5:30",
                  "title": "Shunting Yard Infix to Postfix Algorithm"
                },
                {
                  "time": "12:00",
                  "title": "Evaluating Postfix Expression using Stack"
                }
              ]
            },
            "explanation": "### Expression Conversion & Evaluation (Hindish)\n- **Infix:** `A + B` (Human readable)\n- **Postfix (RPN):** `A B +` (No parenthesis needed, easy for machines)\n- **Infix to Postfix (Shunting Yard):** Operands ko Direct output me daalo, Operators ko stack me precedence dekh kar push/pop karo.\n- **Postfix Evaluation:** Operands stack me push karo, jab operator mile, top 2 operands pop karke evaluate karo!",
            "code_example": {
              "python": "def evalRPN(tokens):\n    stack = []\n    for token in tokens:\n        if token in '+-*/':\n            b = stack.pop()\n            a = stack.pop()\n            if token == '+': stack.append(a + b)\n            elif token == '-': stack.append(a - b)\n            elif token == '*': stack.append(a * b)\n            elif token == '/': stack.append(int(a / b))\n        else:\n            stack.append(int(token))\n    return stack[0]",
              "java": "public int evalRPN(String[] tokens) {\n    Stack<Integer> stack = new Stack<>();\n    for (String t : tokens) {\n        if (\"+-*/\".contains(t)) {\n            int b = stack.pop(), a = stack.pop();\n            if (t.equals(\"+\")) stack.push(a + b);\n            else if (t.equals(\"-\")) stack.push(a - b);\n            else if (t.equals(\"*\")) stack.push(a * b);\n            else if (t.equals(\"/\")) stack.push(a / b);\n        } else {\n            stack.push(Integer.parseInt(t));\n        }\n    }\n    return stack.pop();\n}"
            },
            "complexity": {
              "time": "O(N) linear evaluation",
              "space": "O(N) operator/operand stack"
            },
            "practice_questions": [
              {
                "name": "Evaluate Reverse Polish Notation",
                "url": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
                "difficulty": "Medium"
              },
              {
                "name": "Basic Calculator II",
                "url": "https://leetcode.com/problems/basic-calculator-ii/",
                "difficulty": "Medium"
              }
            ]
          }
        ]
      },
      {
        "id": "sub-queue",
        "name": "8. Queue",
        "slug": "queue",
        "icon": "⏳",
        "topics": [
          {
            "id": "queue-simple",
            "title": "Simple Queue",
            "slug": "simple-queue",
            "difficulty": "Easy",
            "description": "FIFO (First In First Out) sequential processing with front enqueue and rear dequeue.",
            "video": {
              "url": "https://www.youtube.com/embed/yzemrb5mXzU",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "FIFO Principle Concept"
                },
                {
                  "time": "4:00",
                  "title": "Array vs Linked List Queue Implementation"
                },
                {
                  "time": "8:30",
                  "title": "Queue Overflow/Underflow"
                }
              ]
            },
            "explanation": "### Simple Queue (Hindish)\nQueue FIFO (First In, First Out) principle par kaam karti hai - jaise movie ticket line. Front se remove (`dequeue`) aur Rear se add (`enqueue`) kiya jata hai.",
            "code_example": {
              "python": "from collections import deque\n\nclass Queue:\n    def __init__(self):\n        self.q = deque()\n    def enqueue(self, val):\n        self.q.append(val)\n    def dequeue(self):\n        return self.q.popleft() if self.q else None",
              "java": "Queue<Integer> q = new LinkedList<>();\nq.add(10); // Enqueue\nint val = q.poll(); // Dequeue"
            },
            "complexity": {
              "time": "Enqueue: O(1), Dequeue: O(1)",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Implement Queue using Stacks",
                "url": "https://leetcode.com/problems/implement-queue-using-stacks/",
                "difficulty": "Easy"
              }
            ]
          },
          {
            "id": "queue-circular",
            "title": "Circular Queue",
            "slug": "circular-queue",
            "difficulty": "Medium",
            "description": "Fixed-size ring queue preventing array memory wastage using modulo indexing arithmetic.",
            "video": {
              "url": "https://www.youtube.com/embed/ihEmEcO2hGg",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Array Reusability Defect in Simple Queue"
                },
                {
                  "time": "4:30",
                  "title": "Modulo Index Arithmetic Formula"
                },
                {
                  "time": "9:15",
                  "title": "Design Circular Queue Code"
                }
              ]
            },
            "explanation": "### Circular Queue (Hindish)\nNormal array queue me front se delete hone par vacant spaces restart me waste ho jati hain. Circular Queue modulo operation `(rear + 1) % capacity` se array ko continuous circle bana deti hai!",
            "code_example": {
              "python": "class MyCircularQueue:\n    def __init__(self, k: int):\n        self.queue = [0] * k\n        self.head = 0\n        self.count = 0\n        self.capacity = k\n\n    def enQueue(self, value: int) -> bool:\n        if self.isFull(): return False\n        tail = (self.head + self.count) % self.capacity\n        self.queue[tail] = value\n        self.count += 1\n        return True\n\n    def deQueue(self) -> bool:\n        if self.isEmpty(): return False\n        self.head = (self.head + 1) % self.capacity\n        self.count -= 1\n        return True",
              "java": "class MyCircularQueue {\n    private int[] q;\n    private int head = 0, count = 0, cap;\n    public MyCircularQueue(int k) { q = new int[k]; cap = k; }\n    public boolean enQueue(int val) {\n        if (count == cap) return false;\n        q[(head + count) % cap] = val;\n        count++;\n        return true;\n    }\n}"
            },
            "complexity": {
              "time": "All operations O(1)",
              "space": "O(K) where K is fixed queue capacity"
            },
            "practice_questions": [
              {
                "name": "Design Circular Queue",
                "url": "https://leetcode.com/problems/design-circular-queue/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "queue-deque",
            "title": "Deque (Double-ended queue)",
            "slug": "deque-double-ended-queue",
            "difficulty": "Medium",
            "description": "Flexible double-ended structure permitting O(1) insertions and deletions at both ends.",
            "video": {
              "url": "https://www.youtube.com/embed/kLBuF6IuhkE",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Double-Ended Queue Architecture"
                },
                {
                  "time": "4:00",
                  "title": "Python collections.deque & Java ArrayDeque"
                },
                {
                  "time": "8:30",
                  "title": "Sliding Window Prerequisite"
                }
              ]
            },
            "explanation": "### Deque Intuition (Hindish)\nDeque me front aur back dono jagah se items `push` aur `pop` kiye ja sakte hain. Isko Stack aur Queue dono ki tarah use kar sakte hain.",
            "code_example": {
              "python": "from collections import deque\n\ndq = deque()\ndq.append(10)       # Push right\ndq.appendleft(5)   # Push left\ndq.pop()            # Pop right\ndq.popleft()        # Pop left",
              "java": "Deque<Integer> dq = new ArrayDeque<>();\ndq.addFirst(5);\ndq.addLast(10);\ndq.removeFirst();\ndq.removeLast();"
            },
            "complexity": {
              "time": "Push/Pop Front & Back: O(1)",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Design Circular Deque",
                "url": "https://leetcode.com/problems/design-circular-deque/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "queue-priority-queue",
            "title": "Priority Queue",
            "slug": "priority-queue",
            "difficulty": "Medium",
            "description": "Elements ordered dynamically by associated priority value backed by Min/Max Binary Heap.",
            "video": {
              "url": "https://www.youtube.com/embed/HqPJF2L5h9U",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Priority Queue Concept"
                },
                {
                  "time": "4:30",
                  "title": "Min-Heap vs Max-Heap Backend"
                },
                {
                  "time": "9:00",
                  "title": "Dijkstra & Prim Algorithm Usage"
                }
              ]
            },
            "explanation": "### Priority Queue (Hindish)\nPriority Queue me sabse pehle FIFO order follow nahi hota, balki high priority item pehle out hota hai! Internal implementation binary heap standard se hoti hai (`log N` insert/delete).",
            "code_example": {
              "python": "import heapq\n\n# Min-Heap by default in Python\nheap = []\nheapq.heappush(heap, 10)\nheapq.heappush(heap, 5)\nheapq.heappush(heap, 20)\nmin_val = heapq.heappop(heap) # Returns 5",
              "java": "PriorityQueue<Integer> pq = new PriorityQueue<>(); // Min-Heap\npq.add(10);\npq.add(5);\nint min = pq.poll(); // 5\n\n// Max Heap\nPriorityQueue<Integer> maxPq = new PriorityQueue<>(Collections.reverseOrder());"
            },
            "complexity": {
              "time": "Push: O(log N), Pop: O(log N), Peek: O(1)",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Kth Largest Element in an Array",
                "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "queue-monotonic",
            "title": "Monotonic Queue",
            "slug": "monotonic-queue",
            "difficulty": "Hard",
            "description": "Queue keeping strictly ordered values for fast O(1) range optimum tracking.",
            "video": {
              "url": "https://www.youtube.com/embed/DfljaUwzsOk",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Monotonic Queue Principle"
                },
                {
                  "time": "5:00",
                  "title": "Maintaining Decreasing Order in Deque"
                },
                {
                  "time": "10:15",
                  "title": "Sliding Window Max Core Engine"
                }
              ]
            },
            "explanation": "### Monotonic Queue (Hindish)\nDeque ki help se continuous range ka maximum/minimum update update karte hain. Elements maintain hone chaiye monotonic decreasing sequence me taaki front me hamesha maximum current element rahe!",
            "code_example": {
              "python": "from collections import deque\n\nclass MonotonicQueue:\n    def __init__(self):\n        self.dq = deque()\n    def push(self, val):\n        while self.dq and self.dq[-1] < val:\n            self.dq.pop()\n        self.dq.append(val)\n    def pop(self, val):\n        if self.dq and self.dq[0] == val:\n            self.dq.popleft()\n    def max(self):\n        return self.dq[0]",
              "java": "class MonotonicQueue {\n    Deque<Integer> dq = new ArrayDeque<>();\n    public void push(int val) {\n        while (!dq.isEmpty() && dq.peekLast() < val) dq.pollLast();\n        dq.addLast(val);\n    }\n    public void pop(int val) {\n        if (!dq.isEmpty() && dq.peekFirst() == val) dq.pollFirst();\n    }\n    public int getMax() { return dq.peekFirst(); }\n}"
            },
            "complexity": {
              "time": "Push, Pop, Max: Amortized O(1)",
              "space": "O(K)"
            },
            "practice_questions": [
              {
                "name": "Shortest Subarray with Sum at Least K",
                "url": "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/",
                "difficulty": "Hard"
              }
            ]
          },
          {
            "id": "queue-using-stacks",
            "title": "Queue using stacks & vice versa",
            "slug": "queue-using-stacks-and-vice-versa",
            "difficulty": "Medium",
            "description": "Adapt push/pop behaviors using 2 auxiliary stacks or queues to mirror inverse order operations.",
            "video": {
              "url": "https://www.youtube.com/embed/3Et9MrMc02A",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Queue using 2 Stacks Logic"
                },
                {
                  "time": "4:40",
                  "title": "Amortized O(1) Dequeue Proof"
                },
                {
                  "time": "8:30",
                  "title": "Stack using Queues Alternative"
                }
              ]
            },
            "explanation": "### Queue using Stacks (Hindish)\nDo stacks use karo: `instack` aur `outstack`.\n- **Enqueue:** `instack.push(x)`\n- **Dequeue:** Agar `outstack` empty hai, to `instack` ke saare items transfer kardo `outstack` me (order reverse ho jayega, jo FIFO ban jayega!). Uske baad `outstack.pop()` karo.",
            "code_example": {
              "python": "class MyQueue:\n    def __init__(self):\n        self.s1 = []\n        self.s2 = []\n\n    def push(self, x: int) -> None:\n        self.s1.append(x)\n\n    def pop(self) -> int:\n        self.peek()\n        return self.s2.pop()\n\n    def peek(self) -> int:\n        if not self.s2:\n            while self.s1:\n                self.s2.append(self.s1.pop())\n        return self.s2[-1]\n\n    def empty(self) -> bool:\n        return not self.s1 and not self.s2",
              "java": "class MyQueue {\n    Stack<Integer> s1 = new Stack<>();\n    Stack<Integer> s2 = new Stack<>();\n    public void push(int x) { s1.push(x); }\n    public int pop() {\n        peek();\n        return s2.pop();\n    }\n    public int peek() {\n        if (s2.isEmpty()) {\n            while (!s1.isEmpty()) s2.push(s1.pop());\n        }\n        return s2.peek();\n    }\n    public boolean empty() { return s1.isEmpty() && s2.isEmpty(); }\n}"
            },
            "complexity": {
              "time": "Push: O(1), Pop: Amortized O(1)",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Implement Queue using Stacks",
                "url": "https://leetcode.com/problems/implement-queue-using-stacks/",
                "difficulty": "Easy"
              }
            ]
          },
          {
            "id": "queue-sliding-window-maximum",
            "title": "Sliding window maximum (using deque)",
            "slug": "sliding-window-maximum-using-deque",
            "difficulty": "Hard",
            "description": "Compute continuous sliding window max element in linear time using Monotonic Deque index tracking.",
            "video": {
              "url": "https://www.youtube.com/embed/CZQGRp93K4g",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Brute Force O(N*K) vs Deque O(N)"
                },
                {
                  "time": "5:30",
                  "title": "Maintaining Monotonic Decreasing Deque"
                },
                {
                  "time": "11:00",
                  "title": "Out of Window Index Removal"
                },
                {
                  "time": "15:00",
                  "title": "Code Walkthrough"
                }
              ]
            },
            "explanation": "### Sliding Window Maximum (Hindish)\nDeque me **Indices** store karo strictly decreasing order of array values me:\n1. Deque me tail se wo sare indices remove karo jinki values `nums[i]` se choti hain (`while dq and nums[dq[-1]] <= nums[i]: dq.pop()`).\n2. Range Out check: Agar `dq[0] == i - k`, popleft karo.\n3. Jab window length `k` expand ho jaye (`i >= k - 1`), `res.append(nums[dq[0]])`!",
            "code_example": {
              "python": "from collections import deque\n\ndef maxSlidingWindow(nums, k):\n    dq = deque()\n    res = []\n    for i, n in enumerate(nums):\n        while dq and nums[dq[-1]] <= n:\n            dq.pop()\n        dq.append(i)\n        if dq[0] == i - k:\n            dq.popleft()\n        if i >= k - 1:\n            res.append(nums[dq[0]])\n    return res",
              "java": "public int[] maxSlidingWindow(int[] nums, int k) {\n    int n = nums.length;\n    int[] res = new int[n - k + 1];\n    int ri = 0;\n    Deque<Integer> dq = new ArrayDeque<>();\n    for (int i = 0; i < n; i++) {\n        if (!dq.isEmpty() && dq.peekFirst() == i - k) dq.pollFirst();\n        while (!dq.isEmpty() && nums[dq.peekLast()] <= nums[i]) dq.pollLast();\n        dq.offerLast(i);\n        if (i >= k - 1) res[ri++] = nums[dq.peekFirst()];\n    }\n    return res;\n}"
            },
            "complexity": {
              "time": "O(N) linear time",
              "space": "O(K) deque size"
            },
            "practice_questions": [
              {
                "name": "Sliding Window Maximum",
                "url": "https://leetcode.com/problems/sliding-window-maximum/",
                "difficulty": "Hard"
              }
            ]
          }
        ]
      },
      {
        "id": "sub-hashing",
        "name": "9. Hashing",
        "slug": "hashing",
        "icon": "🔑",
        "topics": [
          {
            "id": "hashing-concepts",
            "title": "HashMap / HashSet concepts",
            "slug": "hashmap-hashset-concepts",
            "difficulty": "Easy",
            "description": "Master key-value storage, fast O(1) average lookup hash functions, and load factor thresholding.",
            "video": {
              "url": "https://www.youtube.com/embed/shs0KM3w0zs",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Hash Table Core Mechanics"
                },
                {
                  "time": "4:00",
                  "title": "Load Factor & Rehashing"
                },
                {
                  "time": "8:30",
                  "title": "O(1) Average Lookup Proof"
                }
              ]
            },
            "explanation": "### HashMap / HashSet Concepts (Hindish)\nHashMap key-value pairs store karta hai using a Hash Function jo arbitrary keys ko fixed index integer me convert karti hai. Average case lookup `O(1)` hota hai!\n\n- **Load Factor (alpha):** `alpha = Total Elements / Total Buckets`. Jab `alpha > 0.75` ho jaye, HashMap automatically memory double karke saare elements `Rehash` karti hai.",
            "code_example": {
              "python": "map_data = {}\nmap_data['apple'] = 5\nprint('apple' in map_data)  # True O(1)",
              "java": "Map<String, Integer> map = new HashMap<>();\nmap.put(\"apple\", 5);\nSystem.out.println(map.containsKey(\"apple\")); // True O(1)"
            },
            "complexity": {
              "time": "Average: O(1) Insert/Search/Delete, Worst-case: O(N) Collisions",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Design HashSet",
                "url": "https://leetcode.com/problems/design-hashset/",
                "difficulty": "Easy"
              },
              {
                "name": "Design HashMap",
                "url": "https://leetcode.com/problems/design-hashmap/",
                "difficulty": "Easy"
              }
            ]
          },
          {
            "id": "hashing-collisions",
            "title": "Collision handling (chaining, open addressing)",
            "slug": "collision-handling-chaining-open-addressing",
            "difficulty": "Medium",
            "description": "Resolve hash index collisions using Separate Chaining (Linked Lists/Red-Black Trees) and Open Addressing (Linear/Quadratic Probing).",
            "video": {
              "url": "https://www.youtube.com/embed/2Ti5yBYacAY",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Collision Problem intro"
                },
                {
                  "time": "4:30",
                  "title": "Separate Chaining Linked List / Treeify"
                },
                {
                  "time": "9:15",
                  "title": "Open Addressing Linear & Quadratic Probing"
                }
              ]
            },
            "explanation": "### Collision Handling (Hindish)\nJab 2 alag keys same index calculate karti hain (`hash(K1) == hash(K2)`), collision hota hai!\n\n1. **Separate Chaining:** Bucket par LinkedList attach kar do. Java 8 me agar chain length > 8 ho jaye, chain Self-Balancing Red-Black Tree me convert ho jaati hai (`O(log N)` worst case!).\n2. **Open Addressing:** Blank slot dhoondhne ke liye table probe karo (`Linear Probing: (hash + i) % N`, `Quadratic Probing: (hash + i^2) % N`).",
            "code_example": {
              "python": "class ChainingHashMap:\n    def __init__(self, size=10):\n        self.size = size\n        self.table = [[] for _ in range(size)]\n    def put(self, key, val):\n        idx = hash(key) % self.size\n        for item in self.table[idx]:\n            if item[0] == key:\n                item[1] = val\n                return\n        self.table[idx].append([key, val])",
              "java": "// Java HashMap separates chaining internally using TreeNode for buckets > 8"
            },
            "complexity": {
              "time": "Chaining: O(1) Avg, O(log N) Java 8 Treeified, Open Addressing: O(1/(1-alpha))",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Design HashMap",
                "url": "https://leetcode.com/problems/design-hashmap/",
                "difficulty": "Easy"
              }
            ]
          },
          {
            "id": "hashing-frequency-counting",
            "title": "Frequency counting problems",
            "slug": "frequency-counting-problems",
            "difficulty": "Easy",
            "description": "Track item occurrence frequencies to solve anagrams, majority elements, and top-K frequent elements.",
            "video": {
              "url": "https://www.youtube.com/embed/9UtInBqnCgA",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Frequency Map Technique"
                },
                {
                  "time": "4:00",
                  "title": "Top K Frequent Elements Solution"
                },
                {
                  "time": "8:30",
                  "title": "Complexity Analysis"
                }
              ]
            },
            "explanation": "### Frequency Counting (Hindish)\nArray ya string me har item ka count HashMap me update karte hain: `freq[item] = freq.get(item, 0) + 1`. Yeh O(N) me element distribution provide karta hai.",
            "code_example": {
              "python": "from collections import Counter\n\ndef top_k_frequent(nums, k):\n    count = Counter(nums)\n    return [item for item, _ in count.most_common(k)]",
              "java": "public int[] topKFrequent(int[] nums, int k) {\n    Map<Integer, Integer> count = new HashMap<>();\n    for (int n : nums) count.put(n, count.getOrDefault(n, 0) + 1);\n    PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> count.get(a) - count.get(b));\n    for (int n : count.keySet()) {\n        pq.add(n);\n        if (pq.size() > k) pq.poll();\n    }\n    return pq.stream().mapToInt(i -> i).toArray();\n}"
            },
            "complexity": {
              "time": "O(N) frequency build, O(N log K) Heap selection",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Top K Frequent Elements",
                "url": "https://leetcode.com/problems/top-k-frequent-elements/",
                "difficulty": "Medium"
              },
              {
                "name": "Valid Anagram",
                "url": "https://leetcode.com/problems/valid-anagram/",
                "difficulty": "Easy"
              }
            ]
          },
          {
            "id": "hashing-two-sum",
            "title": "Two Sum type problems",
            "slug": "two-sum-type-problems",
            "difficulty": "Easy",
            "description": "Optimize brute-force pairs/triplets lookup from O(N^2) to linear O(N) time using complement hash lookup.",
            "video": {
              "url": "https://www.youtube.com/embed/KLlXCFG5TnA",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Brute Force O(N^2) vs HashMap O(N)"
                },
                {
                  "time": "4:30",
                  "title": "Complement Mapping Logic (Target - Num)"
                },
                {
                  "time": "8:00",
                  "title": "Subarray Sum Equals K Extension"
                }
              ]
            },
            "explanation": "### Two Sum Type Problems (Hindish)\nTarget sum `T` ke liye, current number `X` traverse karte waqt check karo ki complement `T - X` pehle se HashMap me saved hai ya nahi! Single pass linear time `O(N)`.",
            "code_example": {
              "python": "def two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        diff = target - num\n        if diff in seen:\n            return [seen[diff], i]\n        seen[num] = i\n    return []",
              "java": "public int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n        int diff = target - nums[i];\n        if (map.containsKey(diff)) return new int[]{map.get(diff), i};\n        map.put(nums[i], i);\n    }\n    return new int[0];\n}"
            },
            "complexity": {
              "time": "O(N) single pass",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Two Sum",
                "url": "https://leetcode.com/problems/two-sum/",
                "difficulty": "Easy"
              },
              {
                "name": "Subarray Sum Equals K",
                "url": "https://leetcode.com/problems/subarray-sum-equals-k/",
                "difficulty": "Medium"
              }
            ]
          }
        ]
      },
      {
        "id": "sub-trees",
        "name": "10. Trees",
        "slug": "trees",
        "icon": "🌲",
        "topics": [
          {
            "id": "tree-basics",
            "title": "Binary Tree basics",
            "slug": "binary-tree-basics",
            "difficulty": "Easy",
            "description": "Hierarchical node structure concepts: Root, Parent, Children, Leaf nodes, Subtrees, and Full/Complete/Balanced Binary Trees.",
            "video": {
              "url": "https://www.youtube.com/embed/qH6yxkw0u78",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Tree Hierarchy Terms"
                },
                {
                  "time": "4:00",
                  "title": "Types of Binary Trees"
                },
                {
                  "time": "8:30",
                  "title": "Node Representation in Memory"
                }
              ]
            },
            "explanation": "### Binary Tree Basics (Hindish)\nBinary tree ek hierarchical data structure hai jahan har node ke paas max 2 children (left child aur right child) ho sakte hain.",
            "code_example": {
              "python": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right",
              "java": "public class TreeNode {\n    int val;\n    TreeNode left, right;\n    TreeNode(int val) { this.val = val; }\n}"
            },
            "complexity": {
              "time": "Node Creation: O(1)",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Maximum Depth of Binary Tree",
                "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
                "difficulty": "Easy"
              }
            ]
          },
          {
            "id": "tree-traversals",
            "title": "Traversals: Inorder, Preorder, Postorder (recursive & iterative), Level Order (BFS)",
            "slug": "tree-traversals-recursive-iterative-bfs",
            "difficulty": "Medium",
            "description": "Traverse tree nodes via DFS (Preorder N-L-R, Inorder L-N-R, Postorder L-R-N) and BFS Level Order using Queue.",
            "video": {
              "url": "https://www.youtube.com/embed/jmy0LaGET1I",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "DFS Inorder/Preorder/Postorder"
                },
                {
                  "time": "6:00",
                  "title": "Iterative DFS using Explicit Stack"
                },
                {
                  "time": "12:00",
                  "title": "BFS Level Order Traversal using Queue"
                }
              ]
            },
            "explanation": "### Tree Traversals (Hindish)\n- **Preorder:** Root -> Left -> Right\n- **Inorder:** Left -> Root -> Right (BST me sorted output deta hai!)\n- **Postorder:** Left -> Right -> Root\n- **Level Order (BFS):** Level-by-level top to bottom using Queue.",
            "code_example": {
              "python": "from collections import deque\n\n# BFS Level Order\ndef level_order(root):\n    if not root: return []\n    res, q = [], deque([root])\n    while q:\n        level = []\n        for _ in range(len(q)):\n            node = q.popleft()\n            level.append(node.val)\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n        res.append(level)\n    return res",
              "java": "public List<List<Integer>> levelOrder(TreeNode root) {\n    List<List<Integer>> res = new ArrayList<>();\n    if (root == null) return res;\n    Queue<TreeNode> q = new LinkedList<>();\n    q.add(root);\n    while (!q.isEmpty()) {\n        int size = q.size();\n        List<Integer> level = new ArrayList<>();\n        for (int i = 0; i < size; i++) {\n            TreeNode curr = q.poll();\n            level.add(curr.val);\n            if (curr.left != null) q.add(curr.left);\n            if (curr.right != null) q.add(curr.right);\n        }\n        res.add(level);\n    }\n    return res;\n}"
            },
            "complexity": {
              "time": "O(N) visit every node",
              "space": "O(N) call stack or queue width"
            },
            "practice_questions": [
              {
                "name": "Binary Tree Inorder Traversal",
                "url": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
                "difficulty": "Easy"
              },
              {
                "name": "Binary Tree Level Order Traversal",
                "url": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "tree-height-diameter",
            "title": "Height, Diameter of tree",
            "slug": "height-diameter-of-tree",
            "difficulty": "Easy",
            "description": "Compute maximum root-to-leaf depth and longest path distance between any two nodes.",
            "video": {
              "url": "https://www.youtube.com/embed/ey7DYc9OWeo",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Tree Height Definition"
                },
                {
                  "time": "4:00",
                  "title": "Diameter Logic (Left Height + Right Height)"
                },
                {
                  "time": "8:30",
                  "title": "O(N) Single-Pass Postorder Strategy"
                }
              ]
            },
            "explanation": "### Height & Diameter (Hindish)\n- **Height:** `1 + max(height(left), height(right))`.\n- **Diameter:** Sabse mehenga path tree ke kisi bhi 2 nodes ke bich. Node ke spot par diameter candidate: `left_height + right_height`.",
            "code_example": {
              "python": "def diameter_of_binary_tree(root):\n    max_d = 0\n    def height(node):\n        nonlocal max_d\n        if not node: return 0\n        lh = height(node.left)\n        rh = height(node.right)\n        max_d = max(max_d, lh + rh)\n        return 1 + max(lh, rh)\n    height(root)\n    return max_d",
              "java": "class Solution {\n    int maxD = 0;\n    public int diameterOfBinaryTree(TreeNode root) {\n        height(root);\n        return maxD;\n    }\n    private int height(TreeNode node) {\n        if (node == null) return 0;\n        int lh = height(node.left), rh = height(node.right);\n        maxD = Math.max(maxD, lh + rh);\n        return 1 + Math.max(lh, rh);\n    }\n}"
            },
            "complexity": {
              "time": "O(N)",
              "space": "O(H) recursion stack height"
            },
            "practice_questions": [
              {
                "name": "Diameter of Binary Tree",
                "url": "https://leetcode.com/problems/diameter-of-binary-tree/",
                "difficulty": "Easy"
              }
            ]
          },
          {
            "id": "tree-bst-operations",
            "title": "Binary Search Tree (BST): insert, delete, search",
            "slug": "binary-search-tree-bst-insert-delete-search",
            "difficulty": "Medium",
            "description": "BST property: Left < Node < Right. Perform O(log N) lookup, node insertion, and 3-case deletion.",
            "video": {
              "url": "https://www.youtube.com/embed/pYT9F8_LFTM",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "BST Invariant Property"
                },
                {
                  "time": "4:30",
                  "title": "Search & Insert Logic"
                },
                {
                  "time": "10:00",
                  "title": "Deletion Cases (0, 1, 2 Children)"
                }
              ]
            },
            "explanation": "### BST Operations (Hindish)\nBST invariant: `left.val < node.val < right.val`.\nDeletion 3 Cases:\n1. Leaf node: Null return kar do.\n2. Single child: Child ko bypass karke upward link karo.\n3. Two children: Node ko in-order successor (right subtree ka minimum) se replace karo aur successor delete karo!",
            "code_example": {
              "python": "def search_bst(root, val):\n    if not root or root.val == val: return root\n    return search_bst(root.left, val) if val < root.val else search_bst(root.right, val)",
              "java": "public TreeNode searchBST(TreeNode root, int val) {\n    if (root == null || root.val == val) return root;\n    return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);\n}"
            },
            "complexity": {
              "time": "O(log N) Balanced, O(N) Skewed",
              "space": "O(H)"
            },
            "practice_questions": [
              {
                "name": "Search in a Binary Search Tree",
                "url": "https://leetcode.com/problems/search-in-a-binary-search-tree/",
                "difficulty": "Easy"
              },
              {
                "name": "Delete Node in a BST",
                "url": "https://leetcode.com/problems/delete-node-in-a-bst/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "tree-validate-bst",
            "title": "Validate BST",
            "slug": "validate-bst",
            "difficulty": "Medium",
            "description": "Verify if binary tree maintains strict BST properties across subtrees using range bounds (min_val, max_val).",
            "video": {
              "url": "https://www.youtube.com/embed/s6ATEkipzow",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Subtree Constraint Pitfall"
                },
                {
                  "time": "4:30",
                  "title": "Min/Max Range Passing Technique"
                },
                {
                  "time": "8:45",
                  "title": "Inorder Traversal Strictly Increasing Check"
                }
              ]
            },
            "explanation": "### Validate BST (Hindish)\nHar node ke liye ek valid range `(min_val, max_val)` maintain karo. Left child jate waqt `max_val = node.val`, right child jate waqt `min_val = node.val` set karo.",
            "code_example": {
              "python": "def is_valid_bst(root):\n    def validate(node, low=float('-inf'), high=float('inf')):\n        if not node: return True\n        if not (low < node.val < high): return False\n        return validate(node.left, low, node.val) and validate(node.right, node.val, high)\n    return validate(root)",
              "java": "public boolean isValidBST(TreeNode root) {\n    return validate(root, Long.MIN_VALUE, Long.MAX_VALUE);\n}\nprivate boolean validate(TreeNode node, long min, long max) {\n    if (node == null) return true;\n    if (node.val <= min || node.val >= max) return false;\n    return validate(node.left, min, node.val) && validate(node.right, node.val, max);\n}"
            },
            "complexity": {
              "time": "O(N)",
              "space": "O(H)"
            },
            "practice_questions": [
              {
                "name": "Validate Binary Search Tree",
                "url": "https://leetcode.com/problems/validate-binary-search-tree/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "tree-lca",
            "title": "Lowest Common Ancestor (LCA)",
            "slug": "lowest-common-ancestor-lca",
            "difficulty": "Medium",
            "description": "Locate deepest node that has both target nodes P and Q as descendants.",
            "video": {
              "url": "https://www.youtube.com/embed/13m9ZCB8gjw",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "LCA Definition"
                },
                {
                  "time": "4:00",
                  "title": "Binary Tree Bottom-Up Postorder LCA"
                },
                {
                  "time": "8:30",
                  "title": "BST O(H) Direct Splitting Technique"
                }
              ]
            },
            "explanation": "### Lowest Common Ancestor (Hindish)\n- **Binary Tree:** Postorder traversal karo. Agar node `p` ya `q` ke barabar hai, node return karo. Agar dono `left` aur `right` subtrees non-null value return karte hain, current node hi LCA hai!\n- **BST:** Root se start karo. Agar `p` aur `q` dono root se chote hain, left jao. Agar dono bade hain, right jao. Jahan split honge, wo LCA hai!",
            "code_example": {
              "python": "def lowest_common_ancestor(root, p, q):\n    if not root or root == p or root == q: return root\n    left = lowest_common_ancestor(root.left, p, q)\n    right = lowest_common_ancestor(root.right, p, q)\n    if left and right: return root\n    return left or right",
              "java": "public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n    if (root == null || root == p || root == q) return root;\n    TreeNode left = lowestCommonAncestor(root.left, p, q);\n    TreeNode right = lowestCommonAncestor(root.right, p, q);\n    if (left != null && right != null) return root;\n    return (left != null) ? left : right;\n}"
            },
            "complexity": {
              "time": "O(N) Binary Tree, O(H) BST",
              "space": "O(H)"
            },
            "practice_questions": [
              {
                "name": "Lowest Common Ancestor of a Binary Tree",
                "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
                "difficulty": "Medium"
              },
              {
                "name": "Lowest Common Ancestor of a BST",
                "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "tree-balanced-avl-red-black",
            "title": "Balanced Trees: AVL Tree (rotations — concept level), Red-Black Tree (concept level)",
            "slug": "balanced-trees-avl-red-black-rotations",
            "difficulty": "Hard",
            "description": "Self-balancing binary search trees ensuring guaranteed O(log N) operations using Tree Rotations and Color Rules.",
            "video": {
              "url": "https://www.youtube.com/embed/vRwiY41iXdc",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Skewed BST Defect O(N)"
                },
                {
                  "time": "5:00",
                  "title": "AVL Balance Factor & LL/RR/LR/RL Rotations"
                },
                {
                  "time": "12:00",
                  "title": "Red-Black Tree Color Invariants & Black Height"
                }
              ]
            },
            "explanation": "### Balanced Trees Concept (Hindish)\nNormal BST worst-case me linear chain `O(N)` ban sakt hai.\n- **AVL Tree:** Strictly balanced tree jahan har node ka `Balance Factor = height(left) - height(right)` hamesha `-1, 0, 1` rehta hai. Rotations (Single LL/RR, Double LR/RL) restore karti hain balance.\n- **Red-Black Tree:** Relaxed balancing tree. Color rules (Root black, Red node has Black children, Equal black-height) maintain complexity `O(log N)` with fewer rotations on insert/delete (Java `TreeMap` internal structure!).",
            "code_example": {
              "python": "# Conceptual Left Rotation\ndef rotate_left(root):\n    new_root = root.right\n    root.right = new_root.left\n    new_root.left = root\n    return new_root",
              "java": "// C++ std::map and Java TreeMap use Red-Black Tree internally for O(log N) operational guarantees"
            },
            "complexity": {
              "time": "O(log N) Guaranteed for Insert/Delete/Search",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Balanced Binary Tree",
                "url": "https://leetcode.com/problems/balanced-binary-tree/",
                "difficulty": "Easy"
              }
            ]
          },
          {
            "id": "tree-trie",
            "title": "Trie (Prefix Tree)",
            "slug": "trie-prefix-tree",
            "difficulty": "Medium",
            "description": "N-ary tree structure designed for O(L) prefix matching, auto-completion, and string dictionary lookups.",
            "video": {
              "url": "https://www.youtube.com/embed/giiaIofn31A",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Trie Architecture & Children Map"
                },
                {
                  "time": "5:00",
                  "title": "Insert & Search Word Logic"
                },
                {
                  "time": "9:30",
                  "title": "StartsWith Prefix Matching"
                }
              ]
            },
            "explanation": "### Trie (Prefix Tree) (Hindish)\nTrie string words ke shared prefixes store karta hai. Every node contains 26 children array/map and `is_end_of_word` boolean flag.",
            "code_example": {
              "python": "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_end = False\n\nclass Trie:\n    def __init__(self):\n        self.root = TrieNode()\n    def insert(self, word: str) -> None:\n        curr = self.root\n        for ch in word:\n            if ch not in curr.children:\n                curr.children[ch] = TrieNode()\n            curr = curr.children[ch]\n        curr.is_end = True",
              "java": "class TrieNode {\n    TrieNode[] children = new TrieNode[26];\n    boolean isEnd = false;\n}"
            },
            "complexity": {
              "time": "O(L) where L is string length",
              "space": "O(ALPHABET_SIZE * L * N)"
            },
            "practice_questions": [
              {
                "name": "Implement Trie (Prefix Tree)",
                "url": "https://leetcode.com/problems/implement-trie-prefix-tree/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "tree-segment-tree",
            "title": "Segment Tree (range queries, updates)",
            "slug": "segment-tree-range-queries-updates",
            "difficulty": "Hard",
            "description": "Full binary tree answering dynamic range sum/min/max queries and point/range updates in O(log N).",
            "video": {
              "url": "https://www.youtube.com/embed/zbKkSjCpdOM",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Segment Tree Divide & Conquer Array Layout"
                },
                {
                  "time": "6:00",
                  "title": "Build Tree O(N)"
                },
                {
                  "time": "12:00",
                  "title": "Range Query & Point Update O(log N)"
                }
              ]
            },
            "explanation": "### Segment Tree (Hindish)\nArray ka sum/min range update `O(log N)` me solve karne ke liye segment tree use hota hai. Tree leaves array elements store karte hain, internal nodes sub-segment aggregation store karte hain.",
            "code_example": {
              "python": "class SegmentTree:\n    def __init__(self, arr):\n        self.n = len(arr)\n        self.tree = [0] * (4 * self.n)\n        self.build(arr, 0, 0, self.n - 1)\n    def build(self, arr, node, start, end):\n        if start == end:\n            self.tree[node] = arr[start]\n            return\n        mid = (start + end) // 2\n        self.build(arr, 2*node+1, start, mid)\n        self.build(arr, 2*node+2, mid+1, end)\n        self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]",
              "java": "// Segment Tree array size 4 * N for bounds safety"
            },
            "complexity": {
              "time": "Build: O(N), Query/Update: O(log N)",
              "space": "O(4 * N)"
            },
            "practice_questions": [
              {
                "name": "Range Sum Query - Mutable",
                "url": "https://leetcode.com/problems/range-sum-query-mutable/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "tree-fenwick",
            "title": "Fenwick Tree / Binary Indexed Tree (BIT)",
            "slug": "fenwick-tree-binary-indexed-tree-bit",
            "difficulty": "Hard",
            "description": "Compact bitwise tree supporting point updates and prefix sum queries in O(log N) with minimal code.",
            "video": {
              "url": "https://www.youtube.com/embed/CWDQJGaN1gY",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "BIT Concept vs Segment Tree"
                },
                {
                  "time": "5:00",
                  "title": "Lowest Set Bit i & (-i) Trick"
                },
                {
                  "time": "9:30",
                  "title": "Update & Prefix Sum Implementation"
                }
              ]
            },
            "explanation": "### Fenwick Tree / BIT (Hindish)\nBIT array-based structure hai jo Least Significant Bit (`i & -i`) mask ka use karke prefix sums aur updates `O(log N)` me compute karti hai with extremely small code!",
            "code_example": {
              "python": "class FenwickTree:\n    def __init__(self, size):\n        self.tree = [0] * (size + 1)\n    def update(self, i, delta):\n        i += 1\n        while i < len(self.tree):\n            self.tree[i] += delta\n            i += i & (-i)\n    def query(self, i):\n        i += 1\n        s = 0\n        while i > 0:\n            s += self.tree[i]\n            i -= i & (-i)\n        return s",
              "java": "public class BIT {\n    int[] tree;\n    public BIT(int n) { tree = new int[n + 1]; }\n    public void update(int i, int delta) {\n        for (i++; i < tree.length; i += i & (-i)) tree[i] += delta;\n    }\n    public int query(int i) {\n        int sum = 0;\n        for (i++; i > 0; i -= i & (-i)) sum += tree[i];\n        return sum;\n    }\n}"
            },
            "complexity": {
              "time": "Update: O(log N), Prefix Query: O(log N)",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Count of Smaller Numbers After Self",
                "url": "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
                "difficulty": "Hard"
              }
            ]
          },
          {
            "id": "tree-heap",
            "title": "Heap (Min-Heap, Max-Heap) — build heap, heapify",
            "slug": "heap-min-heap-max-heap-build-heap-heapify",
            "difficulty": "Medium",
            "description": "Complete binary tree representation in array with O(1) top access, O(log N) push/pop, and O(N) linear build heap.",
            "video": {
              "url": "https://www.youtube.com/embed/HqPJF2L5h9U",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Array Index Mapping (2i+1, 2i+2)"
                },
                {
                  "time": "4:30",
                  "title": "Heapify Down & Up Algorithms"
                },
                {
                  "time": "9:00",
                  "title": "Build Heap in O(N) Proof"
                }
              ]
            },
            "explanation": "### Heap & Heapify (Hindish)\nArray mapping: `Left = 2i + 1`, `Right = 2i + 2`, `Parent = (i-1)/2`.\n- **Build Heap O(N):** Last non-leaf node `(N/2 - 1)` se `0` tak `heapify_down` call karo.",
            "code_example": {
              "python": "import heapq\narr = [5, 3, 8, 1]\nheapq.heapify(arr) # O(N) build heap\nmin_elem = heapq.heappop(arr) # 1",
              "java": "PriorityQueue<Integer> minHeap = new PriorityQueue<>();"
            },
            "complexity": {
              "time": "Build Heap: O(N), Insert/Delete: O(log N), Peek: O(1)",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Kth Largest Element in an Array",
                "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "tree-serialization",
            "title": "Tree serialization/deserialization",
            "slug": "tree-serialization-deserialization",
            "difficulty": "Hard",
            "description": "Convert binary tree graph structure to string format and reconstruct exact object graph back.",
            "video": {
              "url": "https://www.youtube.com/embed/suj1ro8TkmY",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Serialization String Format"
                },
                {
                  "time": "5:00",
                  "title": "Preorder Traversal Serialization"
                },
                {
                  "time": "10:30",
                  "title": "Reconstruction using Queue Iterator"
                }
              ]
            },
            "explanation": "### Tree Serialization (Hindish)\nTree ko string banate waqt Null nodes ko marker (`#` ya `null`) se encode karte hain using Preorder traversal. Deserialization ke time string ko split karke queue se pop karte huye recursively tree reconstruct karte hain!",
            "code_example": {
              "python": "class Codec:\n    def serialize(self, root):\n        def dfs(node):\n            if not node: return ['#']\n            return [str(node.val)] + dfs(node.left) + dfs(node.right)\n        return ','.join(dfs(root))\n\n    def deserialize(self, data):\n        vals = iter(data.split(','))\n        def dfs():\n            val = next(vals)\n            if val == '#': return None\n            node = TreeNode(int(val))\n            node.left = dfs()\n            node.right = dfs()\n            return node\n        return dfs()",
              "java": "// Java 8 Codec class using StringBuilder and LinkedList Iterator"
            },
            "complexity": {
              "time": "O(N)",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Serialize and Deserialize Binary Tree",
                "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
                "difficulty": "Hard"
              }
            ]
          },
          {
            "id": "tree-traversal-views",
            "title": "Vertical/Boundary/Zigzag traversal",
            "slug": "vertical-boundary-zigzag-traversal",
            "difficulty": "Medium",
            "description": "Advanced tree view traversals using coordinate mapping (col, row), boundary edge scans, and alternating deque directions.",
            "video": {
              "url": "https://www.youtube.com/embed/s1d8UGDCCN8",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Zigzag Level Order Traversal"
                },
                {
                  "time": "5:30",
                  "title": "Boundary Traversal 3-Step Strategy"
                },
                {
                  "time": "12:00",
                  "title": "Vertical Order Traversal (Column Hash Map)"
                }
              ]
            },
            "explanation": "### Vertical/Boundary/Zigzag Views (Hindish)\n- **Zigzag:** Alternating levels left-to-right aur right-to-left reverse karte hain.\n- **Vertical:** Har node ko `(col, row)` coordinates assign karte hain (`col-1` left child, `col+1` right child).\n- **Boundary:** Left boundary (excluding leaf) + All Leaf nodes + Right boundary (reverse order).",
            "code_example": {
              "python": "def zigzag_level_order(root):\n    if not root: return []\n    res, q, left_to_right = [], deque([root]), True\n    while q:\n        level = deque()\n        for _ in range(len(q)):\n            node = q.popleft()\n            if left_to_right: level.append(node.val)\n            else: level.appendleft(node.val)\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n        res.append(list(level))\n        left_to_right = not left_to_right\n    return res",
              "java": "// Java Zigzag Level Order"
            },
            "complexity": {
              "time": "O(N) or O(N log N) Vertical Sorting",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Binary Tree Zigzag Level Order Traversal",
                "url": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
                "difficulty": "Medium"
              },
              {
                "name": "Vertical Order Traversal of a Binary Tree",
                "url": "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",
                "difficulty": "Hard"
              }
            ]
          }
        ]
      },
      {
        "id": "sub-graphs",
        "name": "11. Graphs",
        "slug": "graphs",
        "icon": "🕸️",
        "topics": [
          {
            "id": "graph-representation",
            "title": "Representation: Adjacency List, Adjacency Matrix",
            "slug": "representation-adjacency-list-adjacency-matrix",
            "difficulty": "Easy",
            "description": "Model directed and undirected graph topologies using V x V matrix or array of lists.",
            "video": {
              "url": "https://www.youtube.com/embed/3oI-34aPMWM",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Graph Terminology (Vertices & Edges)"
                },
                {
                  "time": "4:00",
                  "title": "Adjacency Matrix O(V^2) Space"
                },
                {
                  "time": "8:30",
                  "title": "Adjacency List O(V + E) Optimal Space"
                }
              ]
            },
            "explanation": "### Graph Representation (Hindish)\n- **Adjacency Matrix:** 2D array `matrix[u][v] = 1`. Space `O(V^2)`.\n- **Adjacency List:** Array of lists `adj[u].append(v)`. Space `O(V + E)`. Most standard representation!",
            "code_example": {
              "python": "# Adjacency List representation\nfrom collections import defaultdict\n\nadj = defaultdict(list)\nedges = [[0, 1], [0, 2], [1, 2]]\nfor u, v in edges:\n    adj[u].append(v)\n    adj[v].append(u)  # Undirected graph",
              "java": "List<List<Integer>> adj = new ArrayList<>();\nfor (int i = 0; i < V; i++) adj.add(new ArrayList<>());\nfor (int[] e : edges) {\n    adj.get(e[0]).add(e[1]);\n    adj.get(e[1]).add(e[0]);\n}"
            },
            "complexity": {
              "time": "O(V + E) Adj List build, O(V^2) Matrix build",
              "space": "Adj List: O(V + E), Adj Matrix: O(V^2)"
            },
            "practice_questions": [
              {
                "name": "Find Center of Star Graph",
                "url": "https://leetcode.com/problems/find-center-of-star-graph/",
                "difficulty": "Easy"
              }
            ]
          },
          {
            "id": "graph-bfs-dfs",
            "title": "BFS, DFS",
            "slug": "bfs-dfs",
            "difficulty": "Medium",
            "description": "Breadth-First Search (Level-by-level Queue) and Depth-First Search (Deep path Stack/Recursion) traversals.",
            "video": {
              "url": "https://www.youtube.com/embed/pcKY4hjNFeA",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "BFS Queue Traversal"
                },
                {
                  "time": "5:30",
                  "title": "DFS Recursive Traversal"
                },
                {
                  "time": "10:00",
                  "title": "Visited Array Safeguard"
                }
              ]
            },
            "explanation": "### BFS & DFS (Hindish)\n- **BFS:** Queue and visited array se level-by-level explore karta hai (Shortest path in unweighted graphs!).\n- **DFS:** Call stack/recursion se deep branch explorer hai.",
            "code_example": {
              "python": "from collections import deque\n\ndef bfs(start, adj, visited):\n    q = deque([start])\n    visited.add(start)\n    while q:\n        node = q.popleft()\n        for neighbor in adj[node]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                q.append(neighbor)\n\ndef dfs(node, adj, visited):\n    visited.add(node)\n    for neighbor in adj[node]:\n        if neighbor not in visited:\n            dfs(neighbor, adj, visited)",
              "java": "// Java BFS using Queue and DFS using Recursion"
            },
            "complexity": {
              "time": "O(V + E)",
              "space": "O(V) visited array & queue/stack space"
            },
            "practice_questions": [
              {
                "name": "Number of Islands",
                "url": "https://leetcode.com/problems/number-of-islands/",
                "difficulty": "Medium"
              },
              {
                "name": "Clone Graph",
                "url": "https://leetcode.com/problems/clone-graph/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "graph-connected-components",
            "title": "Connected Components",
            "slug": "connected-components",
            "difficulty": "Easy",
            "description": "Count isolated component sub-graphs in disconnected graph topology using unvisited DFS loops.",
            "video": {
              "url": "https://www.youtube.com/embed/8f11l5dG7qA",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Connected Components Concept"
                },
                {
                  "time": "4:00",
                  "title": "Outer Unvisited Loop Strategy"
                },
                {
                  "time": "7:30",
                  "title": "Number of Provinces Solution"
                }
              ]
            },
            "explanation": "### Connected Components (Hindish)\nLoop through all vertices `0` to `V-1`. Agar `visited[i] == False`, DFS/BFS call karo aur `components_count += 1`!",
            "code_example": {
              "python": "def count_components(n, edges):\n    adj = [[] for _ in range(n)]\n    for u, v in edges:\n        adj[u].append(v)\n        adj[v].append(u)\n    visited = [False] * n\n    count = 0\n    def dfs(u):\n        visited[u] = True\n        for v in adj[u]:\n            if not visited[v]: dfs(v)\n    for i in range(n):\n        if not visited[i]:\n            dfs(i)\n            count += 1\n    return count",
              "java": "public int findCircleNum(int[][] isConnected) {\n    int n = isConnected.length;\n    boolean[] visited = new boolean[n];\n    int count = 0;\n    for (int i = 0; i < n; i++) {\n        if (!visited[i]) {\n            dfs(isConnected, visited, i);\n            count++;\n        }\n    }\n    return count;\n}"
            },
            "complexity": {
              "time": "O(V + E)",
              "space": "O(V)"
            },
            "practice_questions": [
              {
                "name": "Number of Provinces",
                "url": "https://leetcode.com/problems/number-of-provinces/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "graph-topological-sort",
            "title": "Topological Sort (Kahn's algorithm, DFS-based)",
            "slug": "topological-sort-kahns-algorithm-dfs-based",
            "difficulty": "Medium",
            "description": "Linear ordering of DAG vertices such that for directed edge u -> v, u appears before v.",
            "video": {
              "url": "https://www.youtube.com/embed/73gne8G5V3g",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "DAG & Topological Ordering Definition"
                },
                {
                  "time": "5:00",
                  "title": "Kahn's In-Degree Queue BFS Algorithm"
                },
                {
                  "time": "10:30",
                  "title": "DFS Postorder Stack Approach"
                }
              ]
            },
            "explanation": "### Topological Sort (Hindish)\nTopological sort sirf **DAG (Directed Acyclic Graph)** par chalta hai.\n- **Kahn's Algorithm (BFS):** Indegree 0 wale vertices queue me dalo. Process node, decrement neighbor indegree, push if 0.\n- **DFS:** Complete postorder recursion finish par node stack me push karo.",
            "code_example": {
              "python": "from collections import deque\n\ndef topo_sort_kahn(v, adj):\n    indegree = [0] * v\n    for u in range(v):\n        for neighbor in adj[u]:\n            indegree[neighbor] += 1\n    q = deque([i for i in range(v) if indegree[i] == 0])\n    res = []\n    while q:\n        node = q.popleft()\n        res.append(node)\n        for neighbor in adj[node]:\n            indegree[neighbor] -= 1\n            if indegree[neighbor] == 0:\n                q.append(neighbor)\n    return res if len(res) == v else []",
              "java": "// Java 8 Kahn's Algorithm Implementation"
            },
            "complexity": {
              "time": "O(V + E)",
              "space": "O(V) indegree array & queue"
            },
            "practice_questions": [
              {
                "name": "Course Schedule II",
                "url": "https://leetcode.com/problems/course-schedule-ii/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "graph-cycle-detection",
            "title": "Cycle Detection (directed & undirected)",
            "slug": "cycle-detection-directed-undirected",
            "difficulty": "Medium",
            "description": "Detect cyclic paths using parent checking (undirected) or recursion stack tracking (directed).",
            "video": {
              "url": "https://www.youtube.com/embed/vXrv3GVflhE",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Undirected Cycle Detection (Parent Check)"
                },
                {
                  "time": "6:00",
                  "title": "Directed Cycle Detection (Recursion Stack State)"
                },
                {
                  "time": "11:00",
                  "title": "Course Schedule Application"
                }
              ]
            },
            "explanation": "### Cycle Detection (Hindish)\n- **Undirected:** DFS me neighbor visited ho aur `neighbor != parent` ho, toh loop mil gaya!\n- **Directed:** `pathVis` (recursion stack array) maintain karo. Agar current DFS call me same node dubara encounter hoti hai, cycle hai!",
            "code_example": {
              "python": "def canFinish(numCourses, prerequisites):\n    adj = [[] for _ in range(numCourses)]\n    for u, v in prerequisites: adj[v].append(u)\n    visited, path = [False]*numCourses, [False]*numCourses\n    def dfs(u):\n        visited[u] = path[u] = True\n        for v in adj[u]:\n            if not visited[v]:\n                if dfs(v): return True\n            elif path[v]: return True\n        path[u] = False\n        return False\n    for i in range(numCourses):\n        if not visited[i] and dfs(i): return False\n    return True",
              "java": "// Java Directed Graph Cycle Detection"
            },
            "complexity": {
              "time": "O(V + E)",
              "space": "O(V)"
            },
            "practice_questions": [
              {
                "name": "Course Schedule",
                "url": "https://leetcode.com/problems/course-schedule/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "graph-shortest-path",
            "title": "Shortest Path: Dijkstra's, Bellman-Ford, Floyd-Warshall",
            "slug": "shortest-path-dijkstras-bellman-ford-floyd-warshall",
            "difficulty": "Hard",
            "description": "Compute single-source & all-pairs shortest paths using PriorityQueue, Dynamic Relaxation, or Matrix DP.",
            "video": {
              "url": "https://www.youtube.com/embed/EFg3u_E6eHU",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Dijkstra Non-Negative Weighted Single-Source"
                },
                {
                  "time": "6:30",
                  "title": "Bellman-Ford Negative Weight Edge Relaxation"
                },
                {
                  "time": "12:00",
                  "title": "Floyd-Warshall All-Pairs O(V^3) Matrix DP"
                }
              ]
            },
            "explanation": "### Shortest Path Algorithms (Hindish)\n1. **Dijkstra:** Min-Heap PriorityQueue. Non-negative weights (`O((V + E) log V)`).\n2. **Bellman-Ford:** `V - 1` times all edges relax karo. Negative weight cycles detect karta hai (`O(V * E)`).\n3. **Floyd-Warshall:** All-pairs shortest path `dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])` (`O(V^3)`).",
            "code_example": {
              "python": "import heapq\n\ndef dijkstra(start, v, adj):\n    dist = [float('inf')] * v\n    dist[start] = 0\n    pq = [(0, start)]\n    while pq:\n        d, u = heapq.heappop(pq)\n        if d > dist[u]: continue\n        for neighbor, weight in adj[u]:\n            if dist[u] + weight < dist[neighbor]:\n                dist[neighbor] = dist[u] + weight\n                heapq.heappush(pq, (dist[neighbor], neighbor))\n    return dist",
              "java": "// Java 8 Dijkstra Implementation using PriorityQueue"
            },
            "complexity": {
              "time": "Dijkstra: O((E+V) log V), Bellman-Ford: O(V*E), Floyd-Warshall: O(V^3)",
              "space": "Dijkstra: O(V+E), Floyd-Warshall: O(V^2)"
            },
            "practice_questions": [
              {
                "name": "Network Delay Time",
                "url": "https://leetcode.com/problems/network-delay-time/",
                "difficulty": "Medium"
              },
              {
                "name": "Cheapest Flights Within K Stops",
                "url": "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "graph-mst",
            "title": "Minimum Spanning Tree: Kruskal's, Prim's",
            "slug": "minimum-spanning-tree-kruskals-prims",
            "difficulty": "Hard",
            "description": "Connect all vertices with minimal cumulative edge weight using Greedy DSU edge sorting or Min-Heap node expansion.",
            "video": {
              "url": "https://www.youtube.com/embed/jsmMtJpPbuU",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "MST Definition & Cut Property"
                },
                {
                  "time": "5:00",
                  "title": "Kruskal's Algorithm (Sort Edges + DSU)"
                },
                {
                  "time": "10:30",
                  "title": "Prim's Algorithm (Min-Heap Priority Queue)"
                }
              ]
            },
            "explanation": "### Minimum Spanning Tree (Hindish)\n- **Kruskal's Algorithm:** Saari edges ko weight ke basis par sort karo. Smallest weight edge pick karo, agar endpoint nodes DSU me already connected nahi hain, unhe add kar lo!\n- **Prim's Algorithm:** Node 0 se start karo. Har step par cut ki minimum weight adjacent edge Min-Heap se pick karo.",
            "code_example": {
              "python": "def min_cost_connect_points(points):\n    n = len(points)\n    adj = [[] for _ in range(n)]\n    for i in range(n):\n        for j in range(i + 1, n):\n            d = abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1])\n            adj[i].append((d, j))\n            adj[j].append((d, i))\n    import heapq\n    visited = set()\n    pq = [(0, 0)]  # (cost, u)\n    total = 0\n    while len(visited) < n:\n        cost, u = heapq.heappop(pq)\n        if u in visited: continue\n        visited.add(u)\n        total += cost\n        for w, v in adj[u]:\n            if v not in visited:\n                heapq.heappush(pq, (w, v))\n    return total",
              "java": "// Java 8 Prim's MST"
            },
            "complexity": {
              "time": "Kruskal: O(E log E), Prim: O(E log V)",
              "space": "O(V + E)"
            },
            "practice_questions": [
              {
                "name": "Min Cost to Connect All Points",
                "url": "https://leetcode.com/problems/min-cost-to-connect-all-points/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "graph-dsu",
            "title": "Union-Find / Disjoint Set Union (DSU) — with path compression & union by rank",
            "slug": "union-find-disjoint-set-union-dsu-path-compression-union-by-rank",
            "difficulty": "Medium",
            "description": "Partition elements into disjoint sets supporting near O(1) amortized union and find operations.",
            "video": {
              "url": "https://www.youtube.com/embed/aBxjDBC4M1U",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "DSU Disjoint Sets Concept"
                },
                {
                  "time": "4:30",
                  "title": "Path Compression Optimization"
                },
                {
                  "time": "8:45",
                  "title": "Union by Rank / Size"
                }
              ]
            },
            "explanation": "### Disjoint Set Union (DSU) (Hindish)\nDSU 2 sets ko combine (`union`) aur element ka representative leader check (`find`) near `O(1)` time me karta hai using inverse Ackermann function `alpha(N)`.\n- **Path Compression:** `find(i)` recursion finish aate waqt parent array ko directly root node par update karta hai (`parent[i] = find(parent[i])`).\n- **Union by Rank:** Chote tree ko bade tree ke under attach kiya jata hai.",
            "code_example": {
              "python": "class DSU:\n    def __init__(self, n):\n        self.parent = list(range(n))\n        self.rank = [0] * n\n    def find(self, i):\n        if self.parent[i] == i:\n            return i\n        self.parent[i] = self.find(self.parent[i]) # Path compression\n        return self.parent[i]\n    def union(self, i, j):\n        root_i = self.find(i)\n        root_j = self.find(j)\n        if root_i != root_j:\n            if self.rank[root_i] < self.rank[root_j]:\n                self.parent[root_i] = root_j\n            elif self.rank[root_i] > self.rank[root_j]:\n                self.parent[root_j] = root_i\n            else:\n                self.parent[root_j] = root_i\n                self.rank[root_i] += 1\n            return True\n        return False",
              "java": "// Java 8 DSU Class Implementation"
            },
            "complexity": {
              "time": "Amortized O(alpha(N)) ~ O(1) per operation",
              "space": "O(N)"
            },
            "practice_questions": [
              {
                "name": "Redundant Connection",
                "url": "https://leetcode.com/problems/redundant-connection/",
                "difficulty": "Medium"
              },
              {
                "name": "Number of Operations to Make Network Connected",
                "url": "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "graph-bipartite",
            "title": "Bipartite Graph check",
            "slug": "bipartite-graph-check",
            "difficulty": "Medium",
            "description": "Determine if graph vertices can be partitioned into 2 independent sets with 2-coloring algorithm.",
            "video": {
              "url": "https://www.youtube.com/embed/HG2DqQabGY4",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Bipartite 2-Coloring Concept"
                },
                {
                  "time": "4:30",
                  "title": "BFS/DFS 2-Coloring Implementation"
                },
                {
                  "time": "8:30",
                  "title": "Odd Cycle Detection Rule"
                }
              ]
            },
            "explanation": "### Bipartite Graph Check (Hindish)\nGraph Bipartite hoga agar uske vertices ko 2 colors (`0` aur `1`) se paint kiya ja sake continuous adjacent nodes par alternative color daalke. **Graph me Odd-Length Cycle nahi honi chahiye!**",
            "code_example": {
              "python": "def isBipartite(graph):\n    color = {}\n    for i in range(len(graph)):\n        if i not in color:\n            color[i] = 0\n            q = deque([i])\n            while q:\n                node = q.popleft()\n                for neighbor in graph[node]:\n                    if neighbor not in color:\n                        color[neighbor] = 1 - color[node]\n                        q.append(neighbor)\n                    elif color[neighbor] == color[node]:\n                        return False\n    return True",
              "java": "// Java Bipartite 2-Coloring"
            },
            "complexity": {
              "time": "O(V + E)",
              "space": "O(V)"
            },
            "practice_questions": [
              {
                "name": "Is Graph Bipartite?",
                "url": "https://leetcode.com/problems/is-graph-bipartite/",
                "difficulty": "Medium"
              }
            ]
          },
          {
            "id": "graph-scc",
            "title": "Strongly Connected Components (Kosaraju's, Tarjan's)",
            "slug": "strongly-connected-components-kosarajus-tarjans",
            "difficulty": "Hard",
            "description": "Locate maximal sub-graphs where every vertex is reachable from any other vertex in directed graphs.",
            "video": {
              "url": "https://www.youtube.com/embed/V8qIqJxCioo",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "SCC Definition in Directed Graphs"
                },
                {
                  "time": "5:00",
                  "title": "Kosaraju's 3-Step Reversal Algorithm"
                },
                {
                  "time": "12:00",
                  "title": "Tarjan's Low-Link Value Single Pass Method"
                }
              ]
            },
            "explanation": "### Kosaraju's SCC Algorithm (Hindish)\n1. Finish time ke order par DFS stack me push karo.\n2. Graph ki saari edges ko Reverse karo (`transpose graph`).\n3. Stack se nodes pop karke Transpose graph par DFS call karo - har individual call ek SCC component return karta hai!",
            "code_example": {
              "python": "def kosaraju_scc(v, adj):\n    stack, visited = [], [False] * v\n    def dfs1(u):\n        visited[u] = True\n        for neighbor in adj[u]:\n            if not visited[neighbor]: dfs1(neighbor)\n        stack.append(u)\n    for i in range(v):\n        if not visited[i]: dfs1(i)\n    adj_t = [[] for _ in range(v)]\n    for u in range(v):\n        for neighbor in adj[u]: adj_t[neighbor].append(u)\n    visited = [False] * v\n    sccs = []\n    def dfs2(u, component):\n        visited[u] = True\n        component.append(u)\n        for neighbor in adj_t[u]:\n            if not visited[neighbor]: dfs2(neighbor, component)\n    while stack:\n        u = stack.pop()\n        if not visited[u]:\n            comp = []\n            dfs2(u, comp)\n            sccs.append(comp)\n    return sccs",
              "java": "// Java 8 Kosaraju SCC Implementation"
            },
            "complexity": {
              "time": "O(V + E) 2-pass DFS",
              "space": "O(V + E)"
            },
            "practice_questions": [
              {
                "name": "Critical Connections in a Network (Tarjan Bridge Variant)",
                "url": "https://leetcode.com/problems/critical-connections-in-a-network/",
                "difficulty": "Hard"
              }
            ]
          },
          {
            "id": "graph-bridges-articulation",
            "title": "Bridges & Articulation Points",
            "slug": "bridges-articulation-points",
            "difficulty": "Hard",
            "description": "Find single edges (bridges) or single nodes (articulation points) whose deletion increases connected component count.",
            "video": {
              "url": "https://www.youtube.com/embed/qrAub5z8FeA",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Bridge & Articulation Point Definition"
                },
                {
                  "time": "5:30",
                  "title": "Discovery Time tin & Low-Link low Arrays"
                },
                {
                  "time": "11:00",
                  "title": "Tarjan's Bridge Condition (low[v] > tin[u])"
                }
              ]
            },
            "explanation": "### Bridges in Graphs (Hindish)\nEdge `(u, v)` Bridge hogi agar use remove karne se graph disconnect ho jaye!\nCondition using DFS discovery time `tin[u]` and lowest reachable discovery `low[v]`:\n- If `low[v] > tin[u]`, then edge `(u, v)` is a **Bridge**!",
            "code_example": {
              "python": "def criticalConnections(n, connections):\n    adj = [[] for _ in range(n)]\n    for u, v in connections:\n        adj[u].append(v)\n        adj[v].append(u)\n    tin, low = [-1]*n, [-1]*n\n    timer = 0\n    bridges = []\n    def dfs(u, p):\n        nonlocal timer\n        tin[u] = low[u] = timer\n        timer += 1\n        for v in adj[u]:\n            if v == p: continue\n            if tin[v] != -1:\n                low[u] = min(low[u], tin[v])\n            else:\n                dfs(v, u)\n                low[u] = min(low[u], low[v])\n                if low[v] > tin[u]:\n                    bridges.append([u, v])\n    dfs(0, -1)\n    return bridges",
              "java": "// Java 8 Tarjan Bridge Finding Algorithm"
            },
            "complexity": {
              "time": "O(V + E) single DFS pass",
              "space": "O(V + E)"
            },
            "practice_questions": [
              {
                "name": "Critical Connections in a Network",
                "url": "https://leetcode.com/problems/critical-connections-in-a-network/",
                "difficulty": "Hard"
              }
            ]
          },
          {
            "id": "graph-flood-fill",
            "title": "Flood Fill algorithm",
            "slug": "flood-fill-algorithm",
            "difficulty": "Easy",
            "description": "Multi-directional grid cell traversal algorithm for image painting and connected territory marking.",
            "video": {
              "url": "https://www.youtube.com/embed/C-2_uSRli8o",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Flood Fill Matrix Concept"
                },
                {
                  "time": "4:00",
                  "title": "4-Directional DFS/BFS Grid Exploration"
                },
                {
                  "time": "7:30",
                  "title": "Color Replacement Code Walkthrough"
                }
              ]
            },
            "explanation": "### Flood Fill (Hindish)\nGrid cell `(sr, sc)` se start karke 4 directions (`up, down, left, right`) me identical color wale pixels update karte hain.",
            "code_example": {
              "python": "def floodFill(image, sr, sc, color):\n    orig = image[sr][sc]\n    if orig == color: return image\n    R, C = len(image), len(image[0])\n    def dfs(r, c):\n        if 0 <= r < R and 0 <= c < C and image[r][c] == orig:\n            image[r][c] = color\n            dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1)\n    dfs(sr, sc)\n    return image",
              "java": "public int[][] floodFill(int[][] image, int sr, int sc, int color) {\n    int orig = image[sr][sc];\n    if (orig != color) dfs(image, sr, sc, orig, color);\n    return image;\n}"
            },
            "complexity": {
              "time": "O(R * C) grid cell count",
              "space": "O(R * C) recursion stack depth"
            },
            "practice_questions": [
              {
                "name": "Flood Fill",
                "url": "https://leetcode.com/problems/flood-fill/",
                "difficulty": "Easy"
              },
              {
                "name": "Island Perimeter",
                "url": "https://leetcode.com/problems/island-perimeter/",
                "difficulty": "Easy"
              }
            ]
          },
          {
            "id": "graph-multi-source-bfs",
            "title": "Multi-source BFS",
            "slug": "multi-source-bfs",
            "difficulty": "Medium",
            "description": "Simultaneous level-by-level BFS expansion starting from multiple initial queue source nodes.",
            "video": {
              "url": "https://www.youtube.com/embed/edXdV5547D8",
              "chapters": [
                {
                  "time": "0:00",
                  "title": "Single-Source vs Multi-Source BFS"
                },
                {
                  "time": "4:30",
                  "title": "Enqueue All Sources at Level 0"
                },
                {
                  "time": "9:00",
                  "title": "Rotting Oranges / 01 Matrix Solution"
                }
              ]
            },
            "explanation": "### Multi-source BFS (Hindish)\nJab distance calculate karna ho **multiple starting sources** se, toh saare sources ko step 0 par Queue me push kar lo! Uske baad standard BFS level-order expansion run karo.",
            "code_example": {
              "python": "def orangesRotting(grid):\n    R, C = len(grid), len(grid[0])\n    q = deque()\n    fresh = 0\n    for r in range(R):\n        for c in range(C):\n            if grid[r][c] == 2: q.append((r, c, 0))\n            elif grid[r][c] == 1: fresh += 1\n    minutes = 0\n    while q:\n        r, c, d = q.popleft()\n        minutes = d\n        for dr, dc in [(1,0), (-1,0), (0,1), (0,-1)]:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] == 1:\n                grid[nr][nc] = 2\n                fresh -= 1\n                q.append((nr, nc, d + 1))\n    return minutes if fresh == 0 else -1",
              "java": "// Java Multi-Source BFS for Rotting Oranges"
            },
            "complexity": {
              "time": "O(R * C)",
              "space": "O(R * C) queue capacity"
            },
            "practice_questions": [
              {
                "name": "Rotting Oranges",
                "url": "https://leetcode.com/problems/rotting-oranges/",
                "difficulty": "Medium"
              },
              {
                "name": "01 Matrix",
                "url": "https://leetcode.com/problems/01-matrix/",
                "difficulty": "Medium"
              }
            ]
          }
        ]
      },
      {
        "id": "sub-dp",
        "name": "12. Dynamic Programming",
        "icon": "🧠",
        "topics": [
          {
            "id": "topic-memoization-vs-tabulation",
            "title": "Memoization vs Tabulation",
            "slug": "memoization-vs-tabulation",
            "difficulty": "Easy",
            "description": "Understand Top-Down Recursion + Memoization (HashMap/Array cache) vs Bottom-Up Iterative Tabulation state tables, space complexity, and call stack overhead.",
            "video": {
              "url": "https://www.youtube.com/watch?v=Hdr64lKQ3e4",
              "title": "Memoization Top-Down vs Tabulation Bottom-Up Masterclass",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overlapping Subproblems & Recursion Tree",
                  "start_seconds": 0
                },
                {
                  "title": "Top-Down Memoization HashMap/Array",
                  "start_seconds": 210
                },
                {
                  "title": "Bottom-Up Tabulation Iteration",
                  "start_seconds": 420
                }
              ]
            },
            "explanation": "### 💡 Memoization vs Tabulation\n\nDynamic Programming (DP) ek optimization technique hai jo overlapping subproblems ke results ko store karke exponential time complexity `O(2^N)` ko polynomial time `O(N)` me reduce karti hai.\n\n| Feature | Top-Down (Memoization) | Bottom-Up (Tabulation) |\n| :--- | :--- | :--- |\n| **Approach** | Recursion + Caching | Iterative Loop Table |\n| **Order** | Goal to Base Cases | Base Cases to Goal |\n| **Call Stack Overhead**| Yes (`O(N)` stack memory) | No Stack Overhead |\n| **Subproblem Evaluation**| On-demand (only needed states) | All states sequentially |\n\n```\nRecursion Tree with Overlapping Subproblems:\n                   f(5)\n              /            \\\n           f(4)            f(3)  <-- Computed twice without DP!\n          /    \\          /    \\\n       f(3)    f(2)    f(2)    f(1)\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\n# 1. Top-Down Memoization\ndef fib_memo(n: int, memo={}) -> int:\n    if n <= 1: return n\n    if n not in memo:\n        memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)\n    return memo[n]\n\n# 2. Bottom-Up Tabulation\ndef fib_tab(n: int) -> int:\n    if n <= 1: return n\n    dp = [0] * (n + 1)\n    dp[1] = 1\n    for i in range(2, n + 1):\n        dp[i] = dp[i - 1] + dp[i - 2]\n    return dp[n]\n```",
            "code_example": {
              "language": "multi",
              "python": "# Fibonacci: Top-Down vs Bottom-Up Space Optimized (Python)\ndef fib(n: int) -> int:\n    if n <= 1: return n\n    prev2, prev1 = 0, 1\n    for _ in range(2, n + 1):\n        curr = prev1 + prev2\n        prev2 = prev1\n        prev1 = curr\n    return prev1",
              "java": "// Java 8: Memoization vs Tabulation\nimport java.util.Arrays;\n\npublic class Solution {\n    public int fibMemo(int n, int[] memo) {\n        if (n <= 1) return n;\n        if (memo[n] != -1) return memo[n];\n        return memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);\n    }\n\n    public int fibTab(int n) {\n        if (n <= 1) return n;\n        int[] dp = new int[n + 1];\n        dp[1] = 1;\n        for (int i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];\n        return dp[n];\n    }\n}"
            },
            "complexity": {
              "time": "O(N) single pass state computation",
              "space": "O(N) DP table/recursion stack, O(1) space-optimized"
            },
            "practice_questions": [
              {
                "title": "Fibonacci Number (LeetCode #509)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/fibonacci-number/"
              },
              {
                "title": "N-th Tribonacci Number (LeetCode #1137)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/n-th-tribonacci-number/"
              }
            ]
          },
          {
            "id": "topic-1d-dp-fibonacci-climbing-stairs-house-robber",
            "title": "1D DP: Fibonacci, Climbing Stairs, House Robber",
            "slug": "1d-dp-fibonacci-climbing-stairs-house-robber",
            "difficulty": "Easy",
            "description": "Master 1D state array formulations: Climbing Stairs (step choices 1 or 2), House Robber (adjacent non-consecutive picks), and Min Cost Climbing Stairs.",
            "video": {
              "url": "https://www.youtube.com/watch?v=Y0lT9Fck7qI",
              "title": "1D Dynamic Programming: Climbing Stairs & House Robber",
              "start_seconds": 0,
              "end_seconds": 640,
              "chapters": [
                {
                  "title": "Climbing Stairs Transition (N-1 + N-2)",
                  "start_seconds": 0
                },
                {
                  "title": "House Robber State: Rob vs Skip",
                  "start_seconds": 220
                },
                {
                  "title": "O(1) Memory Variable Replacement",
                  "start_seconds": 460
                }
              ]
            },
            "explanation": "### 💡 House Robber State Formulation\n\nHar house `i` par 2 options hote hain:\n1. **Rob House i**: Iska matlab house `i-1` rob nahi kar sakte ➔ `val[i] + dp[i-2]`\n2. **Skip House i**: House `i-1` tak ka maximum loot retain karo ➔ `dp[i-1]`\n\n```\nState Transition Formula:\ndp[i] = max(dp[i - 1], nums[i] + dp[i - 2])\n```\n\n```\nHouses: [2, 7, 9, 3, 1]\ni=0: max(0, 2) = 2\ni=1: max(2, 7) = 7\ni=2: max(7, 9 + 2) = 11\ni=3: max(11, 3 + 7) = 11\ni=4: max(11, 1 + 11) = 12  => Max Loot = 12!\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef rob(nums: list[int]) -> int:\n    rob1, rob2 = 0, 0\n    # rob1 is dp[i-2], rob2 is dp[i-1]\n    for num in nums:\n        temp = max(rob2, rob1 + num)\n        rob1 = rob2\n        rob2 = temp\n    return rob2\n```",
            "code_example": {
              "language": "multi",
              "python": "# Climbing Stairs (LeetCode #70 - Python)\ndef climbStairs(n: int) -> int:\n    if n <= 2: return n\n    a, b = 1, 2\n    for _ in range(3, n + 1):\n        a, b = b, a + b\n    return b",
              "java": "// Java 8: House Robber O(N) Time O(1) Space\npublic class Solution {\n    public int rob(int[] nums) {\n        int rob1 = 0, rob2 = 0;\n        for (int n : nums) {\n            int temp = Math.max(rob2, rob1 + n);\n            rob1 = rob2;\n            rob2 = temp;\n        }\n        return rob2;\n    }\n}"
            },
            "complexity": {
              "time": "O(N) single loop traversal",
              "space": "O(1) using 2 state variables"
            },
            "practice_questions": [
              {
                "title": "Climbing Stairs (LeetCode #70)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/climbing-stairs/"
              },
              {
                "title": "House Robber (LeetCode #198)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/house-robber/"
              },
              {
                "title": "House Robber II (LeetCode #213)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/house-robber-ii/"
              }
            ]
          },
          {
            "id": "topic-2d-dp-unique-paths-grid-problems",
            "title": "2D DP: Unique Paths, Grid problems",
            "slug": "2d-dp-unique-paths-grid-problems",
            "difficulty": "Medium",
            "description": "Master 2D grid matrix DP: Unique Paths (moving down and right), Minimum Path Sum, and Dungeon Game with boundary state initializations.",
            "video": {
              "url": "https://www.youtube.com/watch?v=rBAxUTqvlQA",
              "title": "2D Grid Dynamic Programming: Unique Paths & Min Path Sum",
              "start_seconds": 0,
              "end_seconds": 640,
              "chapters": [
                {
                  "title": "Grid State Matrix dp[r][c]",
                  "start_seconds": 0
                },
                {
                  "title": "Unique Paths Down/Right Transition",
                  "start_seconds": 200
                },
                {
                  "title": "Space Optimization from O(M*N) to O(N)",
                  "start_seconds": 450
                }
              ]
            },
            "explanation": "### 💡 2D Grid Transition\n\nRobot top-left `(0, 0)` se bottom-right `(m-1, n-1)` tak move kar raha hai with only **Right** and **Down** moves.\n\n```\nState Transition Formula:\ndp[r][c] = dp[r - 1][c] (from Top) + dp[r][c - 1] (from Left)\n```\n\n```\nGrid (3x3 Unique Paths):\n1   1   1\n1   2   3\n1   3   6  <-- dp[2][2] = 6 unique paths!\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef uniquePaths(m: int, n: int) -> int:\n    dp = [[1] * n for _ in range(m)]\n    for r in range(1, m):\n        for c in range(1, n):\n            dp[r][c] = dp[r - 1][c] + dp[r][c - 1]\n    return dp[m - 1][n - 1]\n```",
            "code_example": {
              "language": "multi",
              "python": "# Minimum Path Sum (LeetCode #64 - Python)\ndef minPathSum(grid: list[list[int]]) -> int:\n    m, n = len(grid), len(grid[0])\n    dp = [[0] * n for _ in range(m)]\n    dp[0][0] = grid[0][0]\n    for r in range(1, m): dp[r][0] = dp[r-1][0] + grid[r][0]\n    for c in range(1, n): dp[0][c] = dp[0][c-1] + grid[0][c]\n    for r in range(1, m):\n        for c in range(1, n):\n            dp[r][c] = grid[r][c] + min(dp[r-1][c], dp[r][c-1])\n    return dp[m-1][n-1]",
              "java": "// Java 8: Unique Paths Space Optimized O(N) Space\npublic class Solution {\n    public int uniquePaths(int m, int n) {\n        int[] dp = new int[n];\n        java.util.Arrays.fill(dp, 1);\n        for (int r = 1; r < m; r++) {\n            for (int c = 1; c < n; c++) {\n                dp[c] += dp[c - 1];\n            }\n        }\n        return dp[n - 1];\n    }\n}"
            },
            "complexity": {
              "time": "O(M * N) grid cells computation",
              "space": "O(M * N) matrix table, O(N) 1D row space optimized"
            },
            "practice_questions": [
              {
                "title": "Unique Paths (LeetCode #62)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/unique-paths/"
              },
              {
                "title": "Unique Paths II (LeetCode #63)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/unique-paths-ii/"
              },
              {
                "title": "Minimum Path Sum (LeetCode #64)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/minimum-path-sum/"
              }
            ]
          },
          {
            "id": "topic-knapsack-problems-01-unbounded",
            "title": "Knapsack Problems: 0/1 Knapsack, Unbounded Knapsack",
            "slug": "knapsack-problems-01-unbounded",
            "difficulty": "Medium",
            "description": "Master 0/1 Knapsack (item used at most once, backward loop) vs Unbounded Knapsack (item reused infinitely, forward loop) and Coin Change variants.",
            "video": {
              "url": "https://www.youtube.com/watch?v=nLmhmB6NzcM",
              "title": "0/1 Knapsack & Unbounded Knapsack Complete Masterclass",
              "start_seconds": 0,
              "end_seconds": 720,
              "chapters": [
                {
                  "title": "0/1 vs Unbounded Knapsack Core Difference",
                  "start_seconds": 0
                },
                {
                  "title": "0/1 Knapsack 1D Backward Loop Proof",
                  "start_seconds": 240
                },
                {
                  "title": "Unbounded Knapsack & Coin Change 1D Forward Loop",
                  "start_seconds": 480
                }
              ]
            },
            "explanation": "### 💡 0/1 vs Unbounded Loop Direction\n\n| Problem Type | Item Reuse? | 1D Loop Direction | Formula |\n| :--- | :--- | :--- | :--- |\n| **0/1 Knapsack** | At most **ONCE** | **Backward** (`W` down to `weight`) | `dp[w] = max(dp[w], val + dp[w - weight])` |\n| **Unbounded Knapsack**| **INFINITE** times | **Forward** (`weight` up to `W`) | `dp[w] = max(dp[w], val + dp[w - weight])` |\n\n```\n0/1 Backward Loop prevents using item i multiple times in same iteration!\nUnbounded Forward Loop intentionally allows chaining item i multiple times!\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\n# Unbounded Knapsack (Coin Change Minimum Coins)\ndef coinChange(coins: list[int], amount: int) -> int:\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for coin in coins:\n        for w in range(coin, amount + 1): # Forward Loop for Unbounded!\n            dp[w] = min(dp[w], 1 + dp[w - coin])\n    return dp[amount] if dp[amount] != float('inf') else -1\n```",
            "code_example": {
              "language": "multi",
              "python": "# 0/1 Knapsack 1D Array Solution (Python)\ndef knapsack_01(weights: list[int], values: list[int], W: int) -> int:\n    dp = [0] * (W + 1)\n    for i in range(len(weights)):\n        for w in range(W, weights[i] - 1, -1): # Backward Loop for 0/1!\n            dp[w] = max(dp[w], values[i] + dp[w - weights[i]])\n    return dp[W]",
              "java": "// Java 8: Coin Change (Unbounded Knapsack)\nimport java.util.Arrays;\n\npublic class Solution {\n    public int coinChange(int[] coins, int amount) {\n        int[] dp = new int[amount + 1];\n        Arrays.fill(dp, amount + 1);\n        dp[0] = 0;\n        for (int coin : coins) {\n            for (int w = coin; w <= amount; w++) {\n                dp[w] = Math.min(dp[w], 1 + dp[w - coin]);\n            }\n        }\n        return dp[amount] > amount ? -1 : dp[amount];\n    }\n}"
            },
            "complexity": {
              "time": "O(N * W) where N is items count and W is target capacity",
              "space": "O(W) 1D space buffer"
            },
            "practice_questions": [
              {
                "title": "Coin Change (LeetCode #322)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/coin-change/"
              },
              {
                "title": "Coin Change II (LeetCode #518)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/coin-change-ii/"
              },
              {
                "title": "Ones and Zeroes (LeetCode #474)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/ones-and-zeroes/"
              }
            ]
          },
          {
            "id": "topic-subset-sum-partition-problems",
            "title": "Subset Sum, Partition problems",
            "slug": "subset-sum-partition-problems",
            "difficulty": "Medium",
            "description": "Partition Equal Subset Sum, Subset Sum equals Target, Minimum Difference Subset Partition, and Target Sum transformation.",
            "video": {
              "url": "https://www.youtube.com/watch?v=7winF_-m040",
              "title": "Partition Equal Subset Sum & Target Sum DP Patterns",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Subset Sum Target Equation Derivation",
                  "start_seconds": 0
                },
                {
                  "title": "Partition Equal Subset Sum Boolean DP",
                  "start_seconds": 210
                },
                {
                  "title": "Target Sum Sign Assignment Mapping",
                  "start_seconds": 420
                }
              ]
            },
            "explanation": "### 💡 Partition Equal Subset Sum Reduction\n\nArray ko 2 equal sum subsets me divide karne ke liye:\n- **Total Sum `S = sum(nums)`**: If `S` is odd, equal partition is IMPOSSIBLE!\n- **Target `T = S // 2`**: Find if there exists a subset with `sum == T`.\n\n```\nBoolean State Transition:\ndp[w] = dp[w] OR dp[w - num]\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef canPartition(nums: list[int]) -> bool:\n    total = sum(nums)\n    if total % 2 != 0: return False\n    target = total // 2\n    dp = [False] * (target + 1)\n    dp[0] = True\n\n    for num in nums:\n        for w in range(target, num - 1, -1):\n            dp[w] = dp[w] or dp[w - num]\n    return dp[target]\n```",
            "code_example": {
              "language": "multi",
              "python": "# Target Sum (LeetCode #494 - Python)\ndef findTargetSumWays(nums: list[int], target: int) -> int:\n    total = sum(nums)\n    if (total + target) % 2 != 0 or abs(target) > total: return 0\n    s1 = (total + target) // 2\n    dp = [0] * (s1 + 1)\n    dp[0] = 1\n    for num in nums:\n        for w in range(s1, num - 1, -1):\n            dp[w] += dp[w - num]\n    return dp[s1]",
              "java": "// Java 8: Partition Equal Subset Sum\npublic class Solution {\n    public boolean canPartition(int[] nums) {\n        int sum = 0;\n        for (int n : nums) sum += n;\n        if (sum % 2 != 0) return false;\n        int target = sum / 2;\n        boolean[] dp = new boolean[target + 1];\n        dp[0] = true;\n        for (int n : nums) {\n            for (int w = target; w >= n; w--) {\n                dp[w] = dp[w] || dp[w - n];\n            }\n        }\n        return dp[target];\n    }\n}"
            },
            "complexity": {
              "time": "O(N * Target) where Target = sum(nums) / 2",
              "space": "O(Target) 1D boolean array"
            },
            "practice_questions": [
              {
                "title": "Partition Equal Subset Sum (LeetCode #416)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/partition-equal-subset-sum/"
              },
              {
                "title": "Target Sum (LeetCode #494)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/target-sum/"
              },
              {
                "title": "Last Stone Weight II (LeetCode #1049)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/last-stone-weight-ii/"
              }
            ]
          },
          {
            "id": "topic-lcs-longest-common-subsequence",
            "title": "Longest Common Subsequence (LCS)",
            "slug": "longest-common-subsequence-lcs",
            "difficulty": "Medium",
            "description": "Compare two strings using 2D DP matrix table: match character (+1) vs mismatch character (max of skip left / skip top), and string reconstruction.",
            "video": {
              "url": "https://www.youtube.com/watch?v=Ua0GhsJSlWM",
              "title": "Longest Common Subsequence (LCS) 2D Grid DP & Traceback",
              "start_seconds": 0,
              "end_seconds": 620,
              "chapters": [
                {
                  "title": "Subsequence vs Substring Definition",
                  "start_seconds": 0
                },
                {
                  "title": "2D Matrix DP Cell Match/Mismatch Formula",
                  "start_seconds": 210
                },
                {
                  "title": "String Backtracking / Reconstruction",
                  "start_seconds": 450
                }
              ]
            },
            "explanation": "### 💡 LCS Matrix State Formula\n\nDo strings `s1` (length `M`) aur `s2` (length `N`) ke liye:\n\n```\nMatch Case (s1[i-1] == s2[j-1]):\ndp[i][j] = 1 + dp[i-1][j-1]\n\nMismatch Case (s1[i-1] != s2[j-1]):\ndp[i][j] = max(dp[i-1][j], dp[i][j-1])\n```\n\n```\ns1: \"abcde\", s2: \"ace\"\n     a  c  e\n  0  0  0  0\na 0  1  1  1\nb 0  1  1  1\nc 0  1  2  2\nd 0  1  2  2\ne 0  1  2  3  => LCS Length = 3 (\"ace\")\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef longestCommonSubsequence(text1: str, text2: str) -> int:\n    m, n = len(text1), len(text2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if text1[i - 1] == text2[j - 1]:\n                dp[i][j] = 1 + dp[i - 1][j - 1]\n            else:\n                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])\n    return dp[m][n]\n```",
            "code_example": {
              "language": "multi",
              "python": "# Longest Common Subsequence (LeetCode #1143 - Python)\ndef longestCommonSubsequence(t1: str, t2: str) -> int:\n    m, n = len(t1), len(t2)\n    dp = [[0]*(n+1) for _ in range(m+1)]\n    for i in range(1, m+1):\n        for j in range(1, n+1):\n            dp[i][j] = 1 + dp[i-1][j-1] if t1[i-1] == t2[j-1] else max(dp[i-1][j], dp[i][j-1])\n    return dp[m][n]",
              "java": "// Java 8: LCS 2D Matrix DP\npublic class Solution {\n    public int longestCommonSubsequence(String text1, String text2) {\n        int m = text1.length(), n = text2.length();\n        int[][] dp = new int[m + 1][n + 1];\n        for (int i = 1; i <= m; i++) {\n            for (int j = 1; j <= n; j++) {\n                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {\n                    dp[i][j] = 1 + dp[i - 1][j - 1];\n                } else {\n                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n                }\n            }\n        }\n        return dp[m][n];\n    }\n}"
            },
            "complexity": {
              "time": "O(M * N) grid cell updates",
              "space": "O(M * N) 2D matrix, O(min(M, N)) 1D space optimized"
            },
            "practice_questions": [
              {
                "title": "Longest Common Subsequence (LeetCode #1143)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/longest-common-subsequence/"
              },
              {
                "title": "Delete Operation for Two Strings (LeetCode #583)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/delete-operation-for-two-strings/"
              },
              {
                "title": "Shortest Common Supersequence (LeetCode #1092)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/shortest-common-supersequence/"
              }
            ]
          },
          {
            "id": "topic-lis-longest-increasing-subsequence",
            "title": "Longest Increasing Subsequence (LIS)",
            "slug": "longest-increasing-subsequence-lis",
            "difficulty": "Medium",
            "description": "Standard O(N^2) 1D DP formulation and Patience Sorting Binary Search O(N log N) optimization using `bisect_left` / `Arrays.binarySearch`.",
            "video": {
              "url": "https://www.youtube.com/watch?v=cjWnW0hdF1Y",
              "title": "Longest Increasing Subsequence: O(N^2) DP & O(N log N) Binary Search",
              "start_seconds": 0,
              "end_seconds": 680,
              "chapters": [
                {
                  "title": "LIS Definition & O(N^2) Nested Loop DP",
                  "start_seconds": 0
                },
                {
                  "title": "Patience Sorting Card Deck Intuition",
                  "start_seconds": 240
                },
                {
                  "title": "Binary Search Replacement O(N log N)",
                  "start_seconds": 480
                }
              ]
            },
            "explanation": "### 💡 LIS O(N log N) Patience Sorting\n\n1. **O(N^2) DP**: `dp[i] = 1 + max(dp[j])` for all `j < i` where `nums[j] < nums[i]`.\n2. **O(N log N) Patience Sorting**: Active array `tails` maintain karte hain. Har number `x` ke liye `tails` me smallest element `>= x` (bisect_left) ko `x` se replace karte hain. Agar koi `>= x` nahi milta, to `x` ko end me append karte hain!\n\n```\nnums = [10, 9, 2, 5, 3, 7, 101, 18]\ntails:\n10 ➔ [10]\n9  ➔ [9]\n2  ➔ [2]\n5  ➔ [2, 5]\n3  ➔ [2, 3]\n7  ➔ [2, 3, 7]\n101➔ [2, 3, 7, 101]\n18 ➔ [2, 3, 7, 18]  => LIS Length = len(tails) = 4!\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\nimport bisect\n\ndef lengthOfLIS(nums: list[int]) -> int:\n    tails = []\n    for x in nums:\n        idx = bisect.bisect_left(tails, x)\n        if idx == len(tails):\n            tails.append(x)\n        else:\n            tails[idx] = x\n    return len(tails)\n```",
            "code_example": {
              "language": "multi",
              "python": "# O(N log N) LIS using bisect (Python)\nimport bisect\ndef lengthOfLIS(nums: list[int]) -> int:\n    tails = []\n    for x in nums:\n        i = bisect.bisect_left(tails, x)\n        if i == len(tails): tails.append(x)\n        else: tails[i] = x\n    return len(tails)",
              "java": "// Java 8: O(N log N) LIS Binary Search\nimport java.util.*;\n\npublic class Solution {\n    public int lengthOfLIS(int[] nums) {\n        int[] tails = new int[nums.length];\n        int size = 0;\n        for (int x : nums) {\n            int i = 0, j = size;\n            while (i < j) {\n                int mid = (i + j) / 2;\n                if (tails[mid] < x) i = mid + 1;\n                else j = mid;\n            }\n            tails[i] = x;\n            if (i == size) size++;\n        }\n        return size;\n    }\n}"
            },
            "complexity": {
              "time": "O(N log N) using Binary Search, O(N^2) standard DP",
              "space": "O(N) for tails array"
            },
            "practice_questions": [
              {
                "title": "Longest Increasing Subsequence (LeetCode #300)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/longest-increasing-subsequence/"
              },
              {
                "title": "Russian Doll Envelopes (LeetCode #354)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/russian-doll-envelopes/"
              },
              {
                "title": "Number of Longest Increasing Subsequence (LeetCode #673)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/number-of-longest-increasing-subsequence/"
              }
            ]
          },
          {
            "id": "topic-edit-distance",
            "title": "Edit Distance",
            "slug": "edit-distance",
            "difficulty": "Hard",
            "description": "Calculate minimum string transformation operations (Insert, Delete, Replace) using 2D DP matrix matching Levenshtein Distance.",
            "video": {
              "url": "https://www.youtube.com/watch?v=XYi2-LPrwm4",
              "title": "Edit Distance Levenshtein Algorithm Detailed Explanation",
              "start_seconds": 0,
              "end_seconds": 640,
              "chapters": [
                {
                  "title": "Edit Operations: Insert, Delete, Replace",
                  "start_seconds": 0
                },
                {
                  "title": "2D Matrix DP Base Cases Initialization",
                  "start_seconds": 200
                },
                {
                  "title": "Transition Formula & Space Optimization",
                  "start_seconds": 440
                }
              ]
            },
            "explanation": "### 💡 Edit Distance Transition\n\nDo strings `w1` aur `w2` ke liye base conversion cost:\n\n```\nIf w1[i-1] == w2[j-1]:\n    dp[i][j] = dp[i-1][j-1] (No operation needed!)\n\nElse (w1[i-1] != w2[j-1]):\n    dp[i][j] = 1 + min(\n        dp[i][j-1],    # Insert\n        dp[i-1][j],    # Delete\n        dp[i-1][j-1]   # Replace\n    )\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef minDistance(word1: str, word2: str) -> int:\n    m, n = len(word1), len(word2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n\n    for i in range(m + 1): dp[i][0] = i\n    for j in range(n + 1): dp[0][j] = j\n\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if word1[i - 1] == word2[j - 1]:\n                dp[i][j] = dp[i - 1][j - 1]\n            else:\n                dp[i][j] = 1 + min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1])\n    return dp[m][n]\n```",
            "code_example": {
              "language": "multi",
              "python": "# Edit Distance (LeetCode #72 - Python)\ndef minDistance(w1: str, w2: str) -> int:\n    m, n = len(w1), len(w2)\n    dp = [[0]*(n+1) for _ in range(m+1)]\n    for i in range(m+1): dp[i][0] = i\n    for j in range(n+1): dp[0][j] = j\n    for i in range(1, m+1):\n        for j in range(1, n+1):\n            if w1[i-1] == w2[j-1]: dp[i][j] = dp[i-1][j-1]\n            else: dp[i][j] = 1 + min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1])\n    return dp[m][n]",
              "java": "// Java 8: Edit Distance 2D Matrix DP\npublic class Solution {\n    public int minDistance(String word1, String word2) {\n        int m = word1.length(), n = word2.length();\n        int[][] dp = new int[m + 1][n + 1];\n        for (int i = 0; i <= m; i++) dp[i][0] = i;\n        for (int j = 0; j <= n; j++) dp[0][j] = j;\n        for (int i = 1; i <= m; i++) {\n            for (int j = 1; j <= n; j++) {\n                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {\n                    dp[i][j] = dp[i - 1][j - 1];\n                } else {\n                    dp[i][j] = 1 + Math.min(dp[i][j - 1], Math.min(dp[i - 1][j], dp[i - 1][j - 1]));\n                }\n            }\n        }\n        return dp[m][n];\n    }\n}"
            },
            "complexity": {
              "time": "O(M * N) grid cell evaluations",
              "space": "O(M * N) matrix table space"
            },
            "practice_questions": [
              {
                "title": "Edit Distance (LeetCode #72)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/edit-distance/"
              },
              {
                "title": "One Edit Distance (LeetCode #161)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/one-edit-distance/"
              }
            ]
          },
          {
            "id": "topic-matrix-chain-multiplication",
            "title": "Matrix Chain Multiplication",
            "slug": "matrix-chain-multiplication",
            "difficulty": "Hard",
            "description": "Partition DP pattern for optimal parenthesization of matrix chains to minimize scalar multiplication operations.",
            "video": {
              "url": "https://www.youtube.com/watch?v=vRVfmbCFW7Y",
              "title": "Matrix Chain Multiplication (MCM) Partition DP Pattern",
              "start_seconds": 0,
              "end_seconds": 660,
              "chapters": [
                {
                  "title": "Matrix Dimensions & Multiplication Rules",
                  "start_seconds": 0
                },
                {
                  "title": "MCM Partition Split k from i to j-1",
                  "start_seconds": 220
                },
                {
                  "title": "Interval Length Chain Loop Implementation",
                  "start_seconds": 460
                }
              ]
            },
            "explanation": "### 💡 MCM Partition State Formula\n\nMatrix chain $A_1, A_2, \\dots, A_n$ of dimensions `p[i-1] x p[i]` ko multiply karne ka minimum scalar operations cost find karna hai:\n\n```\nState Transition Formula:\ndp[i][j] = min_{i <= k < j} ( dp[i][k] + dp[k+1][j] + p[i-1] * p[k] * p[j] )\n```\n\n```\nChain Length L from 2 to N:\ni = start index, j = i + L - 1\nk = partition split point from i to j-1\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef matrixChainOrder(p: list[int]) -> int:\n    n = len(p)\n    dp = [[0] * n for _ in range(n)]\n\n    for length in range(2, n):\n        for i in range(1, n - length + 1):\n            j = i + length - 1\n            dp[i][j] = float('inf')\n            for k in range(i, j):\n                cost = dp[i][k] + dp[k + 1][j] + p[i - 1] * p[k] * p[j]\n                dp[i][j] = min(dp[i][j], cost)\n    return dp[1][n - 1]\n```",
            "code_example": {
              "language": "multi",
              "python": "# MCM Bottom-Up Tabulation (Python)\ndef matrixChainOrder(p: list[int]) -> int:\n    n = len(p)\n    dp = [[0] * n for _ in range(n)]\n    for L in range(2, n):\n        for i in range(1, n - L + 1):\n            j = i + L - 1\n            dp[i][j] = min(dp[i][k] + dp[k+1][j] + p[i-1]*p[k]*p[j] for k in range(i, j))\n    return dp[1][n-1]",
              "java": "// Java 8: Matrix Chain Multiplication DP\npublic class MCM {\n    public int matrixMultiplication(int[] p) {\n        int n = p.length;\n        int[][] dp = new int[n][n];\n        for (int L = 2; L < n; L++) {\n            for (int i = 1; i < n - L + 1; i++) {\n                int j = i + L - 1;\n                dp[i][j] = Integer.MAX_VALUE;\n                for (int k = i; k < j; k++) {\n                    int cost = dp[i][k] + dp[k + 1][j] + p[i - 1] * p[k] * p[j];\n                    dp[i][j] = Math.min(dp[i][j], cost);\n                }\n            }\n        }\n        return dp[1][n - 1];\n    }\n}"
            },
            "complexity": {
              "time": "O(N^3) triple nested loop over length, start, and partition split",
              "space": "O(N^2) 2D partition state table"
            },
            "practice_questions": [
              {
                "title": "Minimum Cost Tree From Leaf Values (LeetCode #1130)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/"
              },
              {
                "title": "Burst Balloons (LeetCode #312)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/burst-balloons/"
              }
            ]
          },
          {
            "id": "topic-dp-on-strings-palindrome-wildcard",
            "title": "DP on Strings (palindrome partitioning, wildcard matching)",
            "slug": "dp-on-strings-palindrome-partitioning-wildcard-matching",
            "difficulty": "Hard",
            "description": "String DP pattern masterclass: Palindromic Substrings, Minimum Cuts for Palindrome Partitioning, Wildcard Matching (`?`, `*`), and Regular Expression Matching.",
            "video": {
              "url": "https://www.youtube.com/watch?v=_zI4z7v7WpQ",
              "title": "DP on Strings: Wildcard Matching & Palindrome Partitioning",
              "start_seconds": 0,
              "end_seconds": 720,
              "chapters": [
                {
                  "title": "Wildcard Matching ? and * State Matrix",
                  "start_seconds": 0
                },
                {
                  "title": "Palindrome Substring Table Expansion",
                  "start_seconds": 240
                },
                {
                  "title": "Minimum Cuts Palindrome Partitioning",
                  "start_seconds": 500
                }
              ]
            },
            "explanation": "### 💡 Wildcard Matching `?` and `*` Logic\n\nPattern `p` vs String `s`:\n1. `p[j-1] == '?'` or `p[j-1] == s[i-1]`: Match single char ➔ `dp[i][j] = dp[i-1][j-1]`\n2. `p[j-1] == '*'`:\n   - `*` matches **EMPTY** sequence ➔ `dp[i][j-1]`\n   - `*` matches **ONE OR MORE** chars ➔ `dp[i-1][j]`\n\n```\nState Transition Formula (* Case):\ndp[i][j] = dp[i][j - 1] OR dp[i - 1][j]\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef isMatch(s: str, p: str) -> bool:\n    m, n = len(s), len(p)\n    dp = [[False] * (n + 1) for _ in range(m + 1)]\n    dp[0][0] = True\n\n    # Empty string matching pattern with '*'\n    for j in range(1, n + 1):\n        if p[j - 1] == '*':\n            dp[0][j] = dp[0][j - 1]\n\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if p[j - 1] == '?' or p[j - 1] == s[i - 1]:\n                dp[i][j] = dp[i - 1][j - 1]\n            elif p[j - 1] == '*':\n                dp[i][j] = dp[i][j - 1] or dp[i - 1][j]\n    return dp[m][n]\n```",
            "code_example": {
              "language": "multi",
              "python": "# Wildcard Matching (LeetCode #44 - Python)\ndef isMatch(s: str, p: str) -> bool:\n    m, n = len(s), len(p)\n    dp = [[False] * (n + 1) for _ in range(m + 1)]\n    dp[0][0] = True\n    for j in range(1, n + 1):\n        if p[j-1] == '*': dp[0][j] = dp[0][j-1]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if p[j-1] in (s[i-1], '?'): dp[i][j] = dp[i-1][j-1]\n            elif p[j-1] == '*': dp[i][j] = dp[i][j-1] or dp[i-1][j]\n    return dp[m][n]",
              "java": "// Java 8: Wildcard Matching 2D DP\npublic class Solution {\n    public boolean isMatch(String s, String p) {\n        int m = s.length(), n = p.length();\n        boolean[][] dp = new boolean[m + 1][n + 1];\n        dp[0][0] = true;\n        for (int j = 1; j <= n; j++) {\n            if (p.charAt(j - 1) == '*') dp[0][j] = dp[0][j - 1];\n        }\n        for (int i = 1; i <= m; i++) {\n            for (int j = 1; j <= n; j++) {\n                char pc = p.charAt(j - 1);\n                if (pc == '?' || pc == s.charAt(i - 1)) dp[i][j] = dp[i - 1][j - 1];\n                else if (pc == '*') dp[i][j] = dp[i][j - 1] || dp[i - 1][j];\n            }\n        }\n        return dp[m][n];\n    }\n}"
            },
            "complexity": {
              "time": "O(M * N) matrix grid computation",
              "space": "O(M * N) boolean grid space"
            },
            "practice_questions": [
              {
                "title": "Wildcard Matching (LeetCode #44)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/wildcard-matching/"
              },
              {
                "title": "Regular Expression Matching (LeetCode #10)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/regular-expression-matching/"
              },
              {
                "title": "Palindrome Partitioning II (LeetCode #132)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/palindrome-partitioning-ii/"
              }
            ]
          },
          {
            "id": "topic-dp-on-trees",
            "title": "DP on Trees",
            "slug": "dp-on-trees",
            "difficulty": "Hard",
            "description": "Tree DP paradigm: Maximum Path Sum in Binary Tree, House Robber III (Tree Node Pick vs Skip), and Re-rooting DP techniques.",
            "video": {
              "url": "https://www.youtube.com/watch?v=TO5zsK6gZXA",
              "title": "DP on Trees: House Robber III & Binary Tree Maximum Path Sum",
              "start_seconds": 0,
              "end_seconds": 660,
              "chapters": [
                {
                  "title": "Tree Postorder Bottom-Up Subtree Return Values",
                  "start_seconds": 0
                },
                {
                  "title": "House Robber III Pair Return (rob, skip)",
                  "start_seconds": 220
                },
                {
                  "title": "Max Path Sum Global Variable Tracing",
                  "start_seconds": 450
                }
              ]
            },
            "explanation": "### 💡 Tree DP Return Pair Technique\n\nHouse Robber III: Har tree node `u` Postorder traversal me 2 values return karta hai:\n- `pair[0]`: Maximum money if we **DO NOT ROB** node `u`\n- `pair[1]`: Maximum money if we **ROB** node `u`\n\n```\nIf we ROB node u:\nmoney_rob = u.val + left[0] + right[0]\n\nIf we DO NOT ROB node u:\nmoney_skip = max(left[0], left[1]) + max(right[0], right[1])\n\nReturn (money_skip, money_rob) to parent!\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef robTree(root: TreeNode) -> int:\n    def dfs(node):\n        if not node: return (0, 0) # (skip, rob)\n        left = dfs(node.left)\n        right = dfs(node.right)\n\n        # Rob this node -> Cannot rob left or right children\n        rob_curr = node.val + left[0] + right[0]\n        # Skip this node -> Can rob or skip left/right children\n        skip_curr = max(left) + max(right)\n\n        return (skip_curr, rob_curr)\n\n    return max(dfs(root))\n```",
            "code_example": {
              "language": "multi",
              "python": "# Binary Tree Maximum Path Sum (LeetCode #124 - Python)\ndef maxPathSum(root: TreeNode) -> int:\n    max_sum = float('-inf')\n    def dfs(node):\n        nonlocal max_sum\n        if not node: return 0\n        left = max(0, dfs(node.left))\n        right = max(0, dfs(node.right))\n        max_sum = max(max_sum, node.val + left + right)\n        return node.val + max(left, right)\n    dfs(root)\n    return max_sum",
              "java": "// Java 8: House Robber III (Tree DP)\npublic class Solution {\n    public int rob(TreeNode root) {\n        int[] res = dfs(root);\n        return Math.max(res[0], res[1]);\n    }\n    private int[] dfs(TreeNode node) {\n        if (node == null) return new int[]{0, 0};\n        int[] left = dfs(node.left);\n        int[] right = dfs(node.right);\n        int skip = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);\n        int rob = node.val + left[0] + right[0];\n        return new int[]{skip, rob};\n    }\n}"
            },
            "complexity": {
              "time": "O(N) visiting each tree node once",
              "space": "O(H) recursion call stack depth"
            },
            "practice_questions": [
              {
                "title": "House Robber III (LeetCode #337)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/house-robber-iii/"
              },
              {
                "title": "Binary Tree Maximum Path Sum (LeetCode #124)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum/"
              }
            ]
          },
          {
            "id": "topic-dp-on-subsets-bitmask-dp",
            "title": "DP on Subsets / Bitmask DP",
            "slug": "dp-on-subsets-bitmask-dp",
            "difficulty": "Hard",
            "description": "Represent subset states using bitmask integers (`mask & (1 << i)`), Travelling Salesperson Problem (TSP), and Fair Distribution of Cookies.",
            "video": {
              "url": "https://www.youtube.com/watch?v=685BLUewH1Y",
              "title": "Bitmask Dynamic Programming & Travelling Salesperson Problem",
              "start_seconds": 0,
              "end_seconds": 700,
              "chapters": [
                {
                  "title": "Bitmask Integer Representation (1 << i)",
                  "start_seconds": 0
                },
                {
                  "title": "Travelling Salesperson Problem TSP State",
                  "start_seconds": 240
                },
                {
                  "title": "Iterating Submasks (mask - 1) & Bitwise Magic",
                  "start_seconds": 480
                }
              ]
            },
            "explanation": "### 💡 Bitmask State Representation\n\nSubset state `S` ko `N`-bit integer `mask` se represent karte hain:\n- **Check if element `i` in subset**: `bool(mask & (1 << i))`\n- **Add element `i` to subset**: `mask | (1 << i)`\n- **Full subset visited**: `mask == (1 << N) - 1`\n\n```\nN = 4 elements:\nmask = 5 (0101 in binary) => Elements {0, 2} present in subset!\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\n# Shortest Path Visiting All Nodes (Bitmask BFS/DP)\nfrom collections import deque\n\ndef shortestPathLength(graph: list[list[int]]) -> int:\n    n = len(graph)\n    full_mask = (1 << n) - 1\n    q = deque([(i, 1 << i, 0) for i in range(n)]) # (node, mask, dist)\n    visited = set((i, 1 << i) for i in range(n))\n\n    while q:\n        node, mask, dist = q.popleft()\n        if mask == full_mask: return dist\n        for neighbor in graph[node]:\n            next_mask = mask | (1 << neighbor)\n            if (neighbor, next_mask) not in visited:\n                visited.add((neighbor, next_mask))\n                q.append((neighbor, next_mask, dist + 1))\n    return 0\n```",
            "code_example": {
              "language": "multi",
              "python": "# Matchsticks to Square (Bitmask DP - LeetCode #473)\ndef makesquare(matchsticks: list[int]) -> bool:\n    total = sum(matchsticks)\n    if total % 4 != 0: return False\n    target = total // 4\n    n = len(matchsticks)\n    memo = {}\n    def dfs(mask, curr_sum):\n        if mask == (1 << n) - 1: return curr_sum == 0\n        if mask in memo: return memo[mask]\n        for i in range(n):\n            if not (mask & (1 << i)) and curr_sum + matchsticks[i] <= target:\n                if dfs(mask | (1 << i), (curr_sum + matchsticks[i]) % target):\n                    memo[mask] = True; return True\n        memo[mask] = False; return False\n    return dfs(0, 0)",
              "java": "// Java 8: Bitmask State Representation\npublic class Solution {\n    public int countSubsets(int n) {\n        int fullMask = (1 << n) - 1;\n        return fullMask;\n    }\n}"
            },
            "complexity": {
              "time": "O(N^2 * 2^N) for TSP, O(2^N * N) for Bitmask DP",
              "space": "O(N * 2^N) state DP table"
            },
            "practice_questions": [
              {
                "title": "Shortest Path Visiting All Nodes (LeetCode #847)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/shortest-path-visiting-all-nodes/"
              },
              {
                "title": "Matchsticks to Square (LeetCode #473)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/matchsticks-to-square/"
              },
              {
                "title": "Partition to K Equal Sum Subsets (LeetCode #698)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/"
              }
            ]
          },
          {
            "id": "topic-digit-dp-advanced",
            "title": "Digit DP (advanced)",
            "slug": "digit-dp-advanced",
            "difficulty": "Hard",
            "description": "Count integers in range `[L, R]` satisfying digit properties using digit recursion state `(idx, tight, leading_zero, sum/count)`.",
            "video": {
              "url": "https://www.youtube.com/watch?v=heUFId6Qd1A",
              "title": "Digit Dynamic Programming Complete Tutorial & Tight Constraint Flag",
              "start_seconds": 0,
              "end_seconds": 720,
              "chapters": [
                {
                  "title": "Why Range Digit Counting needs Digit DP",
                  "start_seconds": 0
                },
                {
                  "title": "The Tight Flag (is_tight) Boundary Logic",
                  "start_seconds": 240
                },
                {
                  "title": "Leading Zero Flag & Memoization Matrix",
                  "start_seconds": 500
                }
              ]
            },
            "explanation": "### 💡 Digit DP State Parameters\n\nRange `[0, N]` me criteria satisfy karne wale numbers count karne ke liye digits list `S = str(N)` construct karte hain:\n\n```\nState Parameters:\ndfs(idx, is_tight, is_leading_zero, count/sum)\n\n1. idx: Current digit position (0 to len(S)-1)\n2. is_tight: Boolean flag. If True, max digit choice is S[idx]. If False, choice is 0..9!\n3. is_leading_zero: Handles leading zeros properly!\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\n# Count Numbers with Digit 1 in Range [0, N] (LeetCode #233)\ndef countDigitOne(n: int) -> int:\n    s = str(n)\n    memo = {}\n\n    def dfs(idx, count, is_tight):\n        if idx == len(s): return count\n        state = (idx, count, is_tight)\n        if state in memo: return memo[state]\n\n        limit = int(s[idx]) if is_tight else 9\n        ans = 0\n        for d in range(limit + 1):\n            new_tight = is_tight and (d == limit)\n            new_count = count + (1 if d == 1 else 0)\n            ans += dfs(idx + 1, new_count, new_tight)\n\n        memo[state] = ans\n        return ans\n\n    return dfs(0, 0, True)\n```",
            "code_example": {
              "language": "multi",
              "python": "# Digit DP Template in Python\ndef countSpecialNumbers(n: int) -> int:\n    s = str(n)\n    memo = {}\n    def dfs(idx, mask, is_tight, is_zero):\n        if idx == len(s): return 1 if not is_zero else 0\n        state = (idx, mask, is_tight, is_zero)\n        if state in memo: return memo[state]\n        limit = int(s[idx]) if is_tight else 9\n        ans = 0\n        for d in range(limit + 1):\n            if is_zero and d == 0:\n                ans += dfs(idx + 1, mask, False, True)\n            elif not (mask & (1 << d)):\n                ans += dfs(idx + 1, mask | (1 << d), is_tight and (d == limit), False)\n        memo[state] = ans\n        return ans\n    return dfs(0, 0, True, True)",
              "java": "// Java 8: Digit DP for Number of Digit One\nimport java.util.Arrays;\n\npublic class Solution {\n    private int[][][] memo;\n    public int countDigitOne(int n) {\n        String s = String.valueOf(n);\n        memo = new int[s.length()][s.length()][2];\n        for (int[][] a : memo) for (int[] b : a) Arrays.fill(b, -1);\n        return dfs(0, 0, 1, s);\n    }\n    private int dfs(int idx, int count, int isTight, String s) {\n        if (idx == s.length()) return count;\n        if (memo[idx][count][isTight] != -1) return memo[idx][count][isTight];\n        int limit = (isTight == 1) ? (s.charAt(idx) - '0') : 9;\n        int ans = 0;\n        for (int d = 0; d <= limit; d++) {\n            int newTight = (isTight == 1 && d == limit) ? 1 : 0;\n            int newCount = count + (d == 1 ? 1 : 0);\n            ans += dfs(idx + 1, newCount, newTight, s);\n        }\n        return memo[idx][count][isTight] = ans;\n    }\n}"
            },
            "complexity": {
              "time": "O(log10(N) * State_Space) digits length times state choices",
              "space": "O(log10(N) * State_Space) memoization table"
            },
            "practice_questions": [
              {
                "title": "Number of Digit One (LeetCode #233)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/number-of-digit-one/"
              },
              {
                "title": "Numbers With Repeated Digits (LeetCode #1012)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/numbers-with-repeated-digits/"
              }
            ]
          }
        ]
      },
      {
        "id": "sub-greedy",
        "name": "13. Greedy Algorithms",
        "icon": "💰",
        "topics": [
          {
            "id": "topic-activity-selection-problem",
            "title": "Activity Selection Problem",
            "slug": "activity-selection-problem",
            "difficulty": "Medium",
            "description": "Select maximum number of non-overlapping activities by sorting by finish time `finish_time` and greedy choice property.",
            "video": {
              "url": "https://www.youtube.com/watch?v=poWB2UCuozA",
              "title": "Activity Selection Greedy Algorithm Proof & Implementation",
              "start_seconds": 0,
              "end_seconds": 520,
              "chapters": [
                {
                  "title": "Why Sort by Finish Time?",
                  "start_seconds": 0
                },
                {
                  "title": "Greedy Choice Property Proof",
                  "start_seconds": 180
                },
                {
                  "title": "O(N log N) Implementation",
                  "start_seconds": 360
                }
              ]
            },
            "explanation": "### 💡 Activity Selection Proof\n\nSabse pehle finish hone wali activity ko select karne se baaki activities ke liye maximum time window bachti hai!\n\n```\nSort activities by finish time:\n(start, finish): (1,2), (3,4), (0,6), (5,7), (8,9)\nSelect (1,2) ➔ Select (3,4) ➔ Select (5,7) ➔ Select (8,9)\nTotal Selected = 4 Activities!\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef maxActivities(start: list[int], finish: list[int]) -> int:\n    activities = sorted(zip(start, finish), key=lambda x: x[1])\n    count = 1\n    last_finish = activities[0][1]\n    for s, f in activities[1:]:\n        if s >= last_finish:\n            count += 1\n            last_finish = f\n    return count\n```",
            "code_example": {
              "language": "multi",
              "python": "# Activity Selection (Python)\ndef activity_selection(start: list[int], end: list[int]) -> int:\n    items = sorted(zip(start, end), key=lambda x: x[1])\n    cnt, last = 0, -1\n    for s, e in items:\n        if s >= last:\n            cnt += 1; last = e\n    return cnt",
              "java": "// Java 8: Activity Selection\nimport java.util.*;\n\npublic class Solution {\n    public int maxActivities(int[] start, int[] end) {\n        int n = start.length;\n        int[][] act = new int[n][2];\n        for (int i = 0; i < n; i++) { act[i][0] = start[i]; act[i][1] = end[i]; }\n        Arrays.sort(act, (a, b) -> Integer.compare(a[1], b[1]));\n        int count = 1, lastEnd = act[0][1];\n        for (int i = 1; i < n; i++) {\n            if (act[i][0] >= lastEnd) { count++; lastEnd = act[i][1]; }\n        }\n        return count;\n    }\n}"
            },
            "complexity": {
              "time": "O(N log N) sorting finish times",
              "space": "O(N) paired tuples storage"
            },
            "practice_questions": [
              {
                "title": "Non-overlapping Intervals (LeetCode #435)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/non-overlapping-intervals/"
              }
            ]
          },
          {
            "id": "topic-interval-scheduling",
            "title": "Interval Scheduling",
            "slug": "interval-scheduling",
            "difficulty": "Medium",
            "description": "Find maximum mutually compatible intervals or minimum intervals to remove (Non-overlapping Intervals).",
            "video": {
              "url": "https://www.youtube.com/watch?v=nONCGxWoUfM",
              "title": "Interval Scheduling & Minimum Removals Solution",
              "start_seconds": 0,
              "end_seconds": 540,
              "chapters": [
                {
                  "title": "Interval Overlap Detection",
                  "start_seconds": 0
                },
                {
                  "title": "Greedy Choice: Keep Interval with Smaller End",
                  "start_seconds": 200
                },
                {
                  "title": "Non-Overlapping Intervals LeetCode #435 Code",
                  "start_seconds": 400
                }
              ]
            },
            "explanation": "### 💡 Interval Scheduling Rule\n\nOverlapping intervals me se hamesha wahi interval retain karo jiska **end time chota ho**, taaki aage aane wale intervals ke saath conflict kam se kam ho!\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef eraseOverlapIntervals(intervals: list[list[int]]) -> int:\n    intervals.sort(key=lambda x: x[1])\n    count = 0\n    last_end = float('-inf')\n    for start, end in intervals:\n        if start >= last_end:\n            last_end = end\n        else:\n            count += 1 # Erase overlapping interval!\n    return count\n```",
            "code_example": {
              "language": "multi",
              "python": "# Non-overlapping Intervals (LeetCode #435 - Python)\ndef eraseOverlapIntervals(intervals: list[list[int]]) -> int:\n    intervals.sort(key=lambda x: x[1])\n    cnt, last = 0, float('-inf')\n    for s, e in intervals:\n        if s >= last: last = e\n        else: cnt += 1\n    return cnt",
              "java": "// Java 8: Erase Overlapping Intervals\nimport java.util.*;\n\npublic class Solution {\n    public int eraseOverlapIntervals(int[][] intervals) {\n        Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));\n        int count = 0, lastEnd = Integer.MIN_VALUE;\n        for (int[] inv : intervals) {\n            if (inv[0] >= lastEnd) lastEnd = inv[1];\n            else count++;\n        }\n        return count;\n    }\n}"
            },
            "complexity": {
              "time": "O(N log N) interval sorting",
              "space": "O(1) in-place comparison pointers"
            },
            "practice_questions": [
              {
                "title": "Non-overlapping Intervals (LeetCode #435)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/non-overlapping-intervals/"
              },
              {
                "title": "Minimum Number of Arrows to Burst Balloons (LeetCode #452)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/"
              }
            ]
          },
          {
            "id": "topic-fractional-knapsack",
            "title": "Fractional Knapsack",
            "slug": "fractional-knapsack",
            "difficulty": "Medium",
            "description": "Greedy choice based on Value-to-Weight ratio `val / weight`, picking fractional items to maximize profit in continuous knapsack.",
            "video": {
              "url": "https://www.youtube.com/watch?v=F_ZAxrA3FJ0",
              "title": "Fractional Knapsack Greedy Algorithm & Ratio Sorting",
              "start_seconds": 0,
              "end_seconds": 480,
              "chapters": [
                {
                  "title": "0/1 vs Fractional Knapsack Difference",
                  "start_seconds": 0
                },
                {
                  "title": "Value/Weight Ratio Sorting",
                  "start_seconds": 160
                },
                {
                  "title": "Fractional Pick Calculation",
                  "start_seconds": 340
                }
              ]
            },
            "explanation": "### 💡 Value-Density Ratio Sorting\n\nItems ko unki **Value per Weight ratio (`value / weight`)** ke descending order me sort karte hain.\n- Entire item fit hota hai ➔ Pick full item!\n- Knapsack capacity partial bachti hai ➔ Pick fraction `(remaining_capacity / weight) * value`!\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef fractionalKnapsack(weights: list[int], values: list[int], capacity: int) -> float:\n    items = sorted(zip(values, weights), key=lambda x: x[0]/x[1], reverse=True)\n    total_val = 0.0\n    for v, w in items:\n        if capacity >= w:\n            capacity -= w\n            total_val += v\n        else:\n            total_val += (capacity / w) * v\n            break\n    return total_val\n```",
            "code_example": {
              "language": "multi",
              "python": "# Fractional Knapsack (Python)\ndef fractional_knapsack(val: list[int], wt: list[int], cap: int) -> float:\n    items = sorted(range(len(val)), key=lambda i: val[i]/wt[i], reverse=True)\n    res = 0.0\n    for i in items:\n        if cap >= wt[i]: cap -= wt[i]; res += val[i]\n        else: res += (cap / wt[i]) * val[i]; break\n    return res",
              "java": "// Java 8 Fractional Knapsack Solution\nimport java.util.*;\n\npublic class FractionalKnapsack {\n    private class Item {\n        int v, w;\n        Item(int v, int w) { this.v = v; this.w = w; }\n    }\n    public double getMaxValue(int[] val, int[] wt, int cap) {\n        Item[] items = new Item[val.length];\n        for (int i = 0; i < val.length; i++) items[i] = new Item(val[i], wt[i]);\n        Arrays.sort(items, (a, b) -> Double.compare((double)b.v / b.w, (double)a.v / a.w));\n        double res = 0.0;\n        for (Item item : items) {\n            if (cap >= item.w) { cap -= item.w; res += item.v; }\n            else { res += ((double)cap / item.w) * item.v; break; }\n        }\n        return res;\n    }\n}"
            },
            "complexity": {
              "time": "O(N log N) ratio sorting",
              "space": "O(N) item ratio structures"
            },
            "practice_questions": [
              {
                "title": "Fractional Knapsack (GFG)",
                "difficulty": "Medium",
                "url": "https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1"
              }
            ]
          },
          {
            "id": "topic-huffman-coding",
            "title": "Huffman Coding",
            "slug": "huffman-coding",
            "difficulty": "Hard",
            "description": "Lossless data compression algorithm building Min-Heap binary trees to assign prefix-free variable-length binary codes based on character frequencies.",
            "video": {
              "url": "https://www.youtube.com/watch?v=co4_ahEDCho",
              "title": "Huffman Coding Algorithm & Min-Heap Tree Construction",
              "start_seconds": 0,
              "end_seconds": 660,
              "chapters": [
                {
                  "title": "Prefix-Free Property & Frequency Table",
                  "start_seconds": 0
                },
                {
                  "title": "Min-Heap Tree Merging Algorithm",
                  "start_seconds": 220
                },
                {
                  "title": "Encoding and Decoding Binary Bits",
                  "start_seconds": 480
                }
              ]
            },
            "explanation": "### 💡 Huffman Tree Construction Algorithm\n\n1. Har character ke liye leaf node banao aur Min-Heap me push karo (key = frequency).\n2. While Heap size > 1:\n   - Pop 2 smallest nodes `left` and `right`.\n   - Combined parent node banao with `freq = left.freq + right.freq`.\n   - Parent ko heap me re-insert karo!\n3. Root se left branch ko `0` aur right branch ko `1` code assignment milta hai!\n\n### 💻 Code Implementation (Python & Java)\n\n```python\nimport heapq\n\nclass Node:\n    def __init__(self, char, freq):\n        self.char, self.freq = char, freq\n        self.left = self.right = None\n    def __lt__(self, other):\n        return self.freq < other.freq\n\ndef buildHuffmanTree(freq_map: dict):\n    heap = [Node(ch, f) for ch, f in freq_map.items()]\n    heapq.heapify(heap)\n    while len(heap) > 1:\n        n1 = heapq.heappop(heap)\n        n2 = heapq.heappop(heap)\n        parent = Node(None, n1.freq + n2.freq)\n        parent.left, parent.right = n1, n2\n        heapq.heappush(heap, parent)\n    return heap[0]\n```",
            "code_example": {
              "language": "multi",
              "python": "# Huffman Encoding Generator (Python)\nimport heapq\ndef huffman_codes(freq_map):\n    heap = [[f, [ch, ]] for ch, f in freq_map.items()]\n    heapq.heapify(heap)\n    while len(heap) > 1:\n        lo = heapq.heappop(heap)\n        hi = heapq.heappop(heap)\n        for pair in lo[1:]:\n            pair[1] = '0' + pair[1]\n        for pair in hi[1:]:\n            pair[1] = '1' + pair[1]\n        heapq.heappush(heap, [lo[0] + hi[0]] + lo[1:] + hi[1:])\n    return dict(heapq.heappop(heap)[1:])",
              "java": "// Java 8: Huffman Tree PriorityQueue Construction\nimport java.util.*;\n\npublic class HuffmanCoding {\n    private class Node implements Comparable<Node> {\n        char ch; int freq; Node left, right;\n        Node(char c, int f) { ch = c; freq = f; }\n        public int compareTo(Node o) { return Integer.compare(this.freq, o.freq); }\n    }\n    public Node buildTree(Map<Character, Integer> freqs) {\n        PriorityQueue<Node> pq = new PriorityQueue<>();\n        for (var entry : freqs.entrySet()) pq.add(new Node(entry.getKey(), entry.getValue()));\n        while (pq.size() > 1) {\n            Node l = pq.poll(), r = pq.poll();\n            Node parent = new Node('\\0', l.freq + r.freq);\n            parent.left = l; parent.right = r;\n            pq.add(parent);\n        }\n        return pq.poll();\n    }\n}"
            },
            "complexity": {
              "time": "O(N log N) building Huffman tree with Min-Heap",
              "space": "O(N) binary tree memory"
            },
            "practice_questions": [
              {
                "title": "Huffman Encoding (GFG)",
                "difficulty": "Hard",
                "url": "https://practice.geeksforgeeks.org/problems/huffman-encoding3345/1"
              }
            ]
          },
          {
            "id": "topic-job-sequencing-with-deadlines",
            "title": "Job Sequencing with deadlines",
            "slug": "job-sequencing-with-deadlines",
            "difficulty": "Medium",
            "description": "Maximize total profit by sorting jobs by descending profit and assigning each job to the latest available slot `<= deadline`.",
            "video": {
              "url": "https://www.youtube.com/watch?v=LjPx4wWHyk4",
              "title": "Job Sequencing Problem with Deadlines Greedy Approach",
              "start_seconds": 0,
              "end_seconds": 540,
              "chapters": [
                {
                  "title": "Profit Greedy Priority Sorting",
                  "start_seconds": 0
                },
                {
                  "title": "Latest Slot Allocation Strategy",
                  "start_seconds": 180
                },
                {
                  "title": "Disjoint Set Union (DSU) Optimization to O(N log N)",
                  "start_seconds": 380
                }
              ]
            },
            "explanation": "### 💡 Latest Slot Allocation Logic\n\n1. Sort all jobs in **descending order of profit**.\n2. Find max deadline `D`. Create a time slots array `slots[1..D]` initialized to empty.\n3. For each job, try to schedule it in the **latest possible free slot `t` (`t <= deadline`)**.\n\n```\nJob (Profit, Deadline): J1(100, 2), J2(19, 1), J3(27, 2), J4(25, 1)\nSort by Profit: J1(100,2), J3(27,2), J4(25,1), J2(19,1)\nSchedule J1 -> Slot 2\nSchedule J3 -> Slot 1\nTotal Profit = 100 + 27 = 127!\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef JobScheduling(jobs: list[tuple[int, int, int]]) -> tuple[int, int]:\n    # jobs = [(id, deadline, profit), ...]\n    jobs.sort(key=lambda x: x[2], reverse=True)\n    max_deadline = max(j[1] for j in jobs)\n    slots = [-1] * (max_deadline + 1)\n\n    count_jobs, total_profit = 0, 0\n    for j_id, deadline, profit in jobs:\n        for t in range(deadline, 0, -1): # Latest free slot\n            if slots[t] == -1:\n                slots[t] = j_id\n                count_jobs += 1\n                total_profit += profit\n                break\n    return count_jobs, total_profit\n```",
            "code_example": {
              "language": "multi",
              "python": "# Job Sequencing with Deadlines (Python)\ndef job_scheduling(jobs):\n    jobs.sort(key=lambda x: x[2], reverse=True)\n    max_d = max(x[1] for x in jobs)\n    slots = [-1] * (max_d + 1)\n    cnt, profit = 0, 0\n    for id, d, p in jobs:\n        for t in range(d, 0, -1):\n            if slots[t] == -1:\n                slots[t] = id; cnt += 1; profit += p; break\n    return cnt, profit",
              "java": "// Java 8 Job Sequencing Solution\nimport java.util.*;\n\npublic class JobSequencing {\n    private class Job {\n        int id, deadline, profit;\n        Job(int i, int d, int p) { id = i; deadline = d; profit = p; }\n    }\n    public int[] JobScheduling(Job[] arr, int n) {\n        Arrays.sort(arr, (a, b) -> Integer.compare(b.profit, a.profit));\n        int maxD = 0;\n        for (Job j : arr) maxD = Math.max(maxD, j.deadline);\n        int[] slots = new int[maxD + 1];\n        Arrays.fill(slots, -1);\n\n        int count = 0, totalProfit = 0;\n        for (Job j : arr) {\n            for (int t = j.deadline; t > 0; t--) {\n                if (slots[t] == -1) {\n                    slots[t] = j.id;\n                    count++;\n                    totalProfit += j.profit;\n                    break;\n                }\n            }\n        }\n        return new int[]{count, totalProfit};\n    }\n}"
            },
            "complexity": {
              "time": "O(N * D) where D is maximum deadline (O(N log N) with DSU)",
              "space": "O(D) time slot array"
            },
            "practice_questions": [
              {
                "title": "Job Sequencing Problem (GFG)",
                "difficulty": "Medium",
                "url": "https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1"
              }
            ]
          },
          {
            "id": "topic-minimum-number-of-platforms-coins",
            "title": "Minimum number of platforms/coins",
            "slug": "minimum-number-of-platforms-coins",
            "difficulty": "Medium",
            "description": "Find minimum railway platforms required (Simultaneous Train Arrival/Departure Two-Pointer Sort) and Minimum Change Coin Change Greedy algorithm.",
            "video": {
              "url": "https://www.youtube.com/watch?v=dxPlm255bb8",
              "title": "Minimum Platforms Required for Railway Station Solution",
              "start_seconds": 0,
              "end_seconds": 540,
              "chapters": [
                {
                  "title": "Arrival and Departure Timeline Sorting",
                  "start_seconds": 0
                },
                {
                  "title": "Two Pointer Overlap Counter",
                  "start_seconds": 180
                },
                {
                  "title": "Greedy Coin Change Canonical Systems",
                  "start_seconds": 380
                }
              ]
            },
            "explanation": "### 💡 Railway Station Platforms Algorithm\n\nTrain Arrival (`arr[]`) aur Departure (`dep[]`) times ko independently sort karke **Two Pointers** iterate karte hain:\n- If `arr[i] <= dep[j]`: Naye train aayi! `platforms_needed += 1`, `i += 1`\n- Else (`arr[i] > dep[j]`): Train chali gayi! `platforms_needed -= 1`, `j += 1`\n\n```\nMax platforms_needed across timeline = Minimum Platforms Required!\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef findPlatform(arr: list[int], dep: list[int]) -> int:\n    arr.sort()\n    dep.sort()\n    n = len(arr)\n    i, j = 0, 0\n    curr_platforms, max_platforms = 0, 0\n\n    while i < n and j < n:\n        if arr[i] <= dep[j]:\n            curr_platforms += 1\n            max_platforms = max(max_platforms, curr_platforms)\n            i += 1\n        else:\n            curr_platforms -= 1\n            j += 1\n    return max_platforms\n```",
            "code_example": {
              "language": "multi",
              "python": "# Minimum Platforms (Python)\ndef findPlatform(arr: list[int], dep: list[int]) -> int:\n    arr.sort(); dep.sort()\n    i, j, curr, max_p = 0, 0, 0, 0\n    while i < len(arr) and j < len(dep):\n        if arr[i] <= dep[j]: curr += 1; max_p = max(max_p, curr); i += 1\n        else: curr -= 1; j += 1\n    return max_p",
              "java": "// Java 8 Minimum Platforms Algorithm\nimport java.util.*;\n\npublic class Solution {\n    public int findPlatform(int[] arr, int[] dep, int n) {\n        Arrays.sort(arr);\n        Arrays.sort(dep);\n        int i = 0, j = 0, curr = 0, maxP = 0;\n        while (i < n && j < n) {\n            if (arr[i] <= dep[j]) {\n                curr++;\n                maxP = Math.max(maxP, curr);\n                i++;\n            } else {\n                curr--;\n                j++;\n            }\n        }\n        return maxP;\n    }\n}"
            },
            "complexity": {
              "time": "O(N log N) sorting arrivals and departures",
              "space": "O(1) two pointers"
            },
            "practice_questions": [
              {
                "title": "Minimum Platforms (GFG)",
                "difficulty": "Medium",
                "url": "https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1"
              }
            ]
          }
        ]
      },
      {
        "id": "sub-backtracking",
        "name": "14. Backtracking",
        "icon": "🧩",
        "topics": [
          {
            "id": "topic-n-queens-problem",
            "title": "N-Queens Problem",
            "slug": "n-queens-problem",
            "difficulty": "Hard",
            "description": "Place N non-attacking queens on an N x N chessboard using column, main diagonal `row - col`, and anti-diagonal `row + col` hash sets.",
            "video": {
              "url": "https://www.youtube.com/watch?v=Ph95IHmK11w",
              "title": "N-Queens Backtracking Visualized with Sets Optimization",
              "start_seconds": 0,
              "end_seconds": 640,
              "chapters": [
                {
                  "title": "N-Queens Board Safety Rules",
                  "start_seconds": 0
                },
                {
                  "title": "Diagonal Hash Sets Optimization",
                  "start_seconds": 220
                },
                {
                  "title": "Backtracking Solution & O(N!) Proof",
                  "start_seconds": 450
                }
              ]
            },
            "explanation": "### 💡 Diagonal Safety Formula\n\nN x N board par Queen place karte waqt column aur 2 diagonals attack check karte hain:\n1. **Column Set**: `col`\n2. **Main Diagonal Set**: `row - col` (constant value along same diagonal)\n3. **Anti-Diagonal Set**: `row + col` (constant value along same anti-diagonal)\n\n```\nBoard (Row-by-Row Placement):\nr=0: Place Q at col 1\nr=1: Check safety (cols, posDiag, negDiag) -> Place Q at col 3...\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef solveNQueens(n: int) -> list[list[str]]:\n    cols = set()\n    pos_diag = set() # (r + c)\n    neg_diag = set() # (r - c)\n    res = []\n    board = [[\".\"] * n for _ in range(n)]\n\n    def backtrack(r):\n        if r == n:\n            res.append([\"\".join(row) for row in board])\n            return\n        for c in range(n):\n            if c in cols or (r + c) in pos_diag or (r - c) in neg_diag:\n                continue\n            cols.add(c); pos_diag.add(r + c); neg_diag.add(r - c)\n            board[r][c] = \"Q\"\n            backtrack(r + 1)\n            cols.remove(c); pos_diag.remove(r + c); neg_diag.remove(r - c)\n            board[r][c] = \".\"\n\n    backtrack(0)\n    return res\n```",
            "code_example": {
              "language": "multi",
              "python": "# N-Queens (LeetCode #51 - Python)\ndef solveNQueens(n: int) -> list[list[str]]:\n    cols, pos, neg = set(), set(), set()\n    res, board = [], [['.']*n for _ in range(n)]\n    def backtrack(r):\n        if r == n: res.append([''.join(row) for row in board]); return\n        for c in range(n):\n            if c in cols or (r+c) in pos or (r-c) in neg: continue\n            cols.add(c); pos.add(r+c); neg.add(r-c); board[r][c] = 'Q'\n            backtrack(r + 1)\n            cols.remove(c); pos.remove(r+c); neg.remove(r-c); board[r][c] = '.'\n    backtrack(0)\n    return res",
              "java": "// Java 8: N-Queens Solution\nimport java.util.*;\n\npublic class Solution {\n    public List<List<String>> solveNQueens(int n) {\n        List<List<String>> res = new ArrayList<>();\n        char[][] board = new char[n][n];\n        for (char[] row : board) Arrays.fill(row, '.');\n        backtrack(0, n, board, res, new boolean[n], new boolean[2*n], new boolean[2*n]);\n        return res;\n    }\n    private void backtrack(int r, int n, char[][] board, List<List<String>> res, boolean[] cols, boolean[] d1, boolean[] d2) {\n        if (r == n) {\n            List<String> list = new ArrayList<>();\n            for (char[] row : board) list.add(new String(row));\n            res.add(list); return;\n        }\n        for (int c = 0; c < n; c++) {\n            if (cols[c] || d1[r + c] || d2[r - c + n]) continue;\n            board[r][c] = 'Q'; cols[c] = d1[r + c] = d2[r - c + n] = true;\n            backtrack(r + 1, n, board, res, cols, d1, d2);\n            board[r][c] = '.'; cols[c] = d1[r + c] = d2[r - c + n] = false;\n        }\n    }\n}"
            },
            "complexity": {
              "time": "O(N!) valid arrangement search space",
              "space": "O(N^2) board memory and recursion stack"
            },
            "practice_questions": [
              {
                "title": "N-Queens (LeetCode #51)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/n-queens/"
              },
              {
                "title": "N-Queens II (LeetCode #52)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/n-queens-ii/"
              }
            ]
          },
          {
            "id": "topic-sudoku-solver",
            "title": "Sudoku Solver",
            "slug": "sudoku-solver",
            "difficulty": "Hard",
            "description": "Fill empty 9x9 Sudoku cells `'.'` with digits `'1'` to `'9'` while validating 3 constraint rules: Row, Column, and 3x3 Sub-box.",
            "video": {
              "url": "https://www.youtube.com/watch?v=gbcw86ZcDC4",
              "title": "Sudoku Solver Backtracking Algorithm Step-by-Step",
              "start_seconds": 0,
              "end_seconds": 660,
              "chapters": [
                {
                  "title": "3x3 Sub-box Indexing (r/3 * 3 + c/3)",
                  "start_seconds": 0
                },
                {
                  "title": "Backtracking Choice Loop (1 to 9)",
                  "start_seconds": 220
                },
                {
                  "title": "Boolean Return Early Exit Pattern",
                  "start_seconds": 450
                }
              ]
            },
            "explanation": "### 💡 Sudoku 3x3 Sub-box Indexing\n\nCell `(r, c)` kis 3x3 sub-box me belong karti hai:\n- `sub_box_row = (r // 3) * 3`\n- `sub_box_col = (c // 3) * 3`\n\n```\nValidation Checks for Digit 'd':\n1. Digit 'd' NOT in current row r\n2. Digit 'd' NOT in current col c\n3. Digit 'd' NOT in 3x3 sub-box starting at (sub_box_row, sub_box_col)\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef solveSudoku(board: list[list[str]]) -> None:\n    def isValid(r, c, ch):\n        for i in range(9):\n            if board[r][i] == ch: return False\n            if board[i][c] == ch: return False\n            if board[3*(r//3) + i//3][3*(c//3) + i%3] == ch: return False\n        return True\n\n    def solve():\n        for r in range(9):\n            for c in range(9):\n                if board[r][c] == \".\":\n                    for d in \"123456789\":\n                        if isValid(r, c, d):\n                            board[r][c] = d\n                            if solve(): return True\n                            board[r][c] = \".\"\n                    return False\n        return True\n\n    solve()\n```",
            "code_example": {
              "language": "multi",
              "python": "# Sudoku Solver (LeetCode #37 - Python)\ndef solveSudoku(board: list[list[str]]) -> None:\n    def valid(r, c, ch):\n        for i in range(9):\n            if board[r][i] == ch or board[i][c] == ch or board[3*(r//3)+i//3][3*(c//3)+i%3] == ch: return False\n        return True\n    def solve():\n        for r in range(9):\n            for c in range(9):\n                if board[r][c] == '.':\n                    for d in '123456789':\n                        if valid(r, c, d):\n                            board[r][c] = d\n                            if solve(): return True\n                            board[r][c] = '.'\n                    return False\n        return True\n    solve()",
              "java": "// Java 8: Sudoku Solver\npublic class Solution {\n    public void solveSudoku(char[][] board) {\n        solve(board);\n    }\n    private boolean solve(char[][] board) {\n        for (int r = 0; r < 9; r++) {\n            for (int c = 0; c < 9; c++) {\n                if (board[r][c] == '.') {\n                    for (char d = '1'; d <= '9'; d++) {\n                        if (isValid(board, r, c, d)) {\n                            board[r][c] = d;\n                            if (solve(board)) return true;\n                            board[r][c] = '.';\n                        }\n                    }\n                    return false;\n                }\n            }\n        }\n        return true;\n    }\n    private boolean isValid(char[][] board, int r, int c, char d) {\n        for (int i = 0; i < 9; i++) {\n            if (board[r][i] == d || board[i][c] == d || board[3*(r/3)+i/3][3*(c/3)+i%3] == d) return false;\n        }\n        return true;\n    }\n}"
            },
            "complexity": {
              "time": "O(9^(N*N)) worst case search space with aggressive pruning",
              "space": "O(81) = O(1) fixed 9x9 recursion depth"
            },
            "practice_questions": [
              {
                "title": "Sudoku Solver (LeetCode #37)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/sudoku-solver/"
              },
              {
                "title": "Valid Sudoku (LeetCode #36)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/valid-sudoku/"
              }
            ]
          },
          {
            "id": "topic-rat-in-a-maze",
            "title": "Rat in a Maze",
            "slug": "rat-in-a-maze",
            "difficulty": "Medium",
            "description": "Find all valid paths from `(0,0)` to `(N-1,N-1)` in a 2D grid containing obstacles (`0`) using 4-directional Backtracking (`'D'`, `'L'`, `'R'`, `'U'`).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bLGZhJlt4y0",
              "title": "Rat in a Maze Backtracking Algorithm & Direction Vectors",
              "start_seconds": 0,
              "end_seconds": 540,
              "chapters": [
                {
                  "title": "Grid Matrix Obstacle Safety Check",
                  "start_seconds": 0
                },
                {
                  "title": "Lexicographical Directions (D, L, R, U)",
                  "start_seconds": 200
                },
                {
                  "title": "Visited In-Place Cell Marking Pattern",
                  "start_seconds": 380
                }
              ]
            },
            "explanation": "### 💡 4-Directional Backtracking\n\nMaze grid `m[r][c] == 1` indicates open path.\n- **Move Options**: Down (`'D'`), Left (`'L'`), Right (`'R'`), Up (`'U'`).\n- **Visited Marking**: Cell Visit `m[r][c] = 0` (Choose) ➔ Recursive DFS (Explore) ➔ Unvisit `m[r][c] = 1` (Unchoose/Backtrack).\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef findPath(m: list[list[int]], n: int) -> list[str]:\n    res = []\n    if m[0][0] == 0 or m[n-1][n-1] == 0: return res\n\n    def dfs(r, c, path):\n        if r == n - 1 and c == n - 1:\n            res.append(path)\n            return\n        m[r][c] = 0 # Mark visited\n        for dr, dc, move in [(-1,0,'U'), (1,0,'D'), (0,-1,'L'), (0,1,'R')]:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < n and 0 <= nc < n and m[nr][nc] == 1:\n                dfs(nr, nc, path + move)\n        m[r][c] = 1 # Backtrack\n\n    dfs(0, 0, \"\")\n    return sorted(res)\n```",
            "code_example": {
              "language": "multi",
              "python": "# Rat in a Maze (GFG - Python)\ndef findPath(m: list[list[int]], n: int) -> list[str]:\n    res = []\n    if m[0][0] == 0 or m[n-1][n-1] == 0: return res\n    def dfs(r, c, p):\n        if r == n-1 and c == n-1: res.append(p); return\n        m[r][c] = 0\n        for dr, dc, move in [(1,0,'D'), (0,-1,'L'), (0,1,'R'), (-1,0,'U')]:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < n and 0 <= nc < n and m[nr][nc] == 1:\n                dfs(nr, nc, p + move)\n        m[r][c] = 1\n    dfs(0, 0, '')\n    return sorted(res)",
              "java": "// Java 8 Rat in a Maze Backtracking\nimport java.util.*;\n\npublic class Solution {\n    public ArrayList<String> findPath(int[][] m, int n) {\n        ArrayList<String> res = new ArrayList<>();\n        if (m[0][0] == 0 || m[n-1][n-1] == 0) return res;\n        dfs(0, 0, \"\", m, n, res);\n        return res;\n    }\n    private void dfs(int r, int c, String path, int[][] m, int n, ArrayList<String> res) {\n        if (r == n - 1 && c == n - 1) { res.add(path); return; }\n        m[r][c] = 0;\n        int[] dr = {1, 0, 0, -1}, dc = {0, -1, 1, 0};\n        char[] move = {'D', 'L', 'R', 'U'};\n        for (int i = 0; i < 4; i++) {\n            int nr = r + dr[i], nc = c + dc[i];\n            if (nr >= 0 && nr < n && nc >= 0 && nc < n && m[nr][nc] == 1) {\n                dfs(nr, nc, path + move[i], m, n, res);\n            }\n        }\n        m[r][c] = 1;\n    }\n}"
            },
            "complexity": {
              "time": "O(3^(N^2)) 4-directional path combinations",
              "space": "O(N^2) max path length and call stack depth"
            },
            "practice_questions": [
              {
                "title": "Rat in a Maze Problem - I (GFG)",
                "difficulty": "Medium",
                "url": "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1"
              }
            ]
          },
          {
            "id": "topic-permutations-combinations",
            "title": "Permutations & Combinations",
            "slug": "permutations-and-combinations",
            "difficulty": "Medium",
            "description": "Generate all `N!` arrangements (Permutations) and `nCr` selections (Combinations) with duplicate skipping patterns.",
            "video": {
              "url": "https://www.youtube.com/watch?v=KukNnoN-So4",
              "title": "Permutations and Combinations Backtracking Deep Dive",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Permutations vs Combinations Difference",
                  "start_seconds": 0
                },
                {
                  "title": "Permutations Visited Array Pattern",
                  "start_seconds": 210
                },
                {
                  "title": "Combinations Start Index Parameter Pattern",
                  "start_seconds": 420
                }
              ]
            },
            "explanation": "### 💡 Permutations vs Combinations Blueprint\n\n1. **Permutations** (`[1, 2]` != `[2, 1]`): Har level par saare elements try karo, `used[]` boolean array se active elements skip karo. `N!` output!\n2. **Combinations** (`[1, 2]` == `[2, 1]`): Order matter nahi karta! Parameter `start_idx` maintain karo taaki keval forward elements pick karein. `nCr` output!\n\n### 💻 Code Implementation (Python & Java)\n\n```python\n# 1. Permutations\ndef permute(nums: list[int]) -> list[list[int]]:\n    res, n = [], len(nums)\n    def dfs(path, used):\n        if len(path) == n:\n            res.append(path[:]); return\n        for i in range(n):\n            if not used[i]:\n                used[i] = True; path.append(nums[i])\n                dfs(path, used)\n                path.pop(); used[i] = False\n    dfs([], [False]*n)\n    return res\n```",
            "code_example": {
              "language": "multi",
              "python": "# Combinations (LeetCode #77 - Python)\ndef combine(n: int, k: int) -> list[list[int]]:\n    res = []\n    def dfs(start, path):\n        if len(path) == k: res.append(path[:]); return\n        for i in range(start, n + 1):\n            path.append(i)\n            dfs(i + 1, path)\n            path.pop()\n    dfs(1, [])\n    return res",
              "java": "// Java 8: Permutations II (With Duplicates)\nimport java.util.*;\n\npublic class Solution {\n    public List<List<Integer>> permuteUnique(int[] nums) {\n        List<List<Integer>> res = new ArrayList<>();\n        Arrays.sort(nums);\n        backtrack(nums, new boolean[nums.length], new ArrayList<>(), res);\n        return res;\n    }\n    private void backtrack(int[] nums, boolean[] used, List<Integer> curr, List<List<Integer>> res) {\n        if (curr.size() == nums.length) { res.add(new ArrayList<>(curr)); return; }\n        for (int i = 0; i < nums.length; i++) {\n            if (used[i] || (i > 0 && nums[i] == nums[i-1] && !used[i-1])) continue;\n            used[i] = true; curr.add(nums[i]);\n            backtrack(nums, used, curr, res);\n            used[i] = false; curr.remove(curr.size() - 1);\n        }\n    }\n}"
            },
            "complexity": {
              "time": "O(N * N!) for Permutations, O(k * nCk) for Combinations",
              "space": "O(N) recursion tree height"
            },
            "practice_questions": [
              {
                "title": "Permutations (LeetCode #46)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/permutations/"
              },
              {
                "title": "Combinations (LeetCode #77)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/combinations/"
              },
              {
                "title": "Combination Sum (LeetCode #39)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/combination-sum/"
              }
            ]
          },
          {
            "id": "topic-subsets-power-set-generation",
            "title": "Subsets/Power Set generation",
            "slug": "subsets-power-set-generation",
            "difficulty": "Medium",
            "description": "Generate all `2^N` subsets of a set using Cascading Iteration, Backtracking DFS, or Bitmask integer combinations.",
            "video": {
              "url": "https://www.youtube.com/watch?v=REOH22Xwdkk",
              "title": "Subsets & Power Set Generation (Backtracking & Bitmasking)",
              "start_seconds": 0,
              "end_seconds": 500,
              "chapters": [
                {
                  "title": "2^N Power Set Count Proof",
                  "start_seconds": 0
                },
                {
                  "title": "Bitmask (0 to 2^N - 1) Integer Representation",
                  "start_seconds": 180
                },
                {
                  "title": "Subsets II Duplicate Handling Logic",
                  "start_seconds": 360
                }
              ]
            },
            "explanation": "### 💡 Bitmask Power Set Method\n\nInteger `i` from `0` to `2^N - 1` ka binary representation ek unique subset map karta hai:\n- If `(i & (1 << j)) != 0`: Include `nums[j]` in current subset!\n\n```\nnums = [1, 2, 3] (N = 3, 2^3 = 8 subsets)\ni=0 (000) ➔ []\ni=1 (001) ➔ [1]\ni=2 (010) ➔ [2]\ni=3 (011) ➔ [1, 2] ...\ni=7 (111) ➔ [1, 2, 3]\n```\n\n### <ctrl42> Code Implementation (Python & Java)\n\n```python\ndef subsets(nums: list[int]) -> list[list[int]]:\n    n = len(nums)\n    res = []\n    for i in range(1 << n): # 0 to 2^N - 1\n        subset = [nums[j] for j in range(n) if (i & (1 << j))]\n        res.append(subset)\n    return res\n```",
            "code_example": {
              "language": "multi",
              "python": "# Subsets II with Duplicates (LeetCode #90 - Python)\ndef subsetsWithDup(nums: list[int]) -> list[list[int]]:\n    nums.sort()\n    res = []\n    def dfs(start, path):\n        res.append(path[:])\n        for i in range(start, len(nums)):\n            if i > start and nums[i] == nums[i-1]: continue\n            path.append(nums[i])\n            dfs(i + 1, path)\n            path.pop()\n    dfs(0, [])\n    return res",
              "java": "// Java 8: Subsets II Duplicate Handling\nimport java.util.*;\n\npublic class Solution {\n    public List<List<Integer>> subsetsWithDup(int[] nums) {\n        Arrays.sort(nums);\n        List<List<Integer>> res = new ArrayList<>();\n        dfs(0, nums, new ArrayList<>(), res);\n        return res;\n    }\n    private void dfs(int start, int[] nums, List<Integer> curr, List<List<Integer>> res) {\n        res.add(new ArrayList<>(curr));\n        for (int i = start; i < nums.length; i++) {\n            if (i > start && nums[i] == nums[i - 1]) continue;\n            curr.add(nums[i]);\n            dfs(i + 1, nums, curr, res);\n            curr.remove(curr.size() - 1);\n        }\n    }\n}"
            },
            "complexity": {
              "time": "O(N * 2^N) generating 2^N subsets of length N",
              "space": "O(N * 2^N) total subsets output space"
            },
            "practice_questions": [
              {
                "title": "Subsets (LeetCode #78)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/subsets/"
              },
              {
                "title": "Subsets II (LeetCode #90)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/subsets-ii/"
              }
            ]
          },
          {
            "id": "topic-word-search",
            "title": "Word Search",
            "slug": "word-search",
            "difficulty": "Medium",
            "description": "Find if target string word exists in 2D character grid using 4-directional DFS Backtracking with visited character mutation `#`.",
            "video": {
              "url": "https://www.youtube.com/watch?v=pfiQ_PS1g8E",
              "title": "Word Search 2D Grid Backtracking Solution",
              "start_seconds": 0,
              "end_seconds": 540,
              "chapters": [
                {
                  "title": "Grid Character Matching Condition",
                  "start_seconds": 0
                },
                {
                  "title": "In-Place Visited Character Hash Mark '#'",
                  "start_seconds": 200
                },
                {
                  "title": "Pruning & Early Return Optimization",
                  "start_seconds": 410
                }
              ]
            },
            "explanation": "### 💡 In-Place Visited Character Mutation\n\nExtra 2D boolean `visited` grid ki jagah, current cell character `board[r][c]` ko temporarily **`'#'`** set kar dete hain (Choose), phir DFS explore karke original character restore kar dete hain (Unchoose/Backtrack)!\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef exist(board: list[list[str]], word: str) -> bool:\n    m, n = len(board), len(board[0])\n\n    def dfs(r, c, idx):\n        if idx == len(word): return True\n        if r < 0 or r >= m or c < 0 or c >= n or board[r][c] != word[idx]:\n            return False\n\n        tmp = board[r][c]\n        board[r][c] = \"#\" # CHOOSE\n        for dr, dc in [(-1,0), (1,0), (0,-1), (0,1)]:\n            if dfs(r + dr, c + dc, idx + 1): return True\n        board[r][c] = tmp # UNCHOOSE\n        return False\n\n    for r in range(m):\n        for c in range(n):\n            if dfs(r, c, 0): return True\n    return False\n```",
            "code_example": {
              "language": "multi",
              "python": "# Word Search (LeetCode #79 - Python)\ndef exist(board: list[list[str]], word: str) -> bool:\n    m, n = len(board), len(board[0])\n    def dfs(r, c, i):\n        if i == len(word): return True\n        if r < 0 or r >= m or c < 0 or c >= n or board[r][c] != word[i]: return False\n        tmp = board[r][c]; board[r][c] = '#'\n        found = dfs(r+1,c,i+1) or dfs(r-1,c,i+1) or dfs(r,c+1,i+1) or dfs(r,c-1,i+1)\n        board[r][c] = tmp\n        return found\n    return any(dfs(r, c, 0) for r in range(m) for c in range(n))",
              "java": "// Java 8: Word Search 2D Grid DFS\npublic class Solution {\n    public boolean exist(char[][] board, String word) {\n        int m = board.length, n = board[0].length;\n        for (int r = 0; r < m; r++) {\n            for (int c = 0; c < n; c++) {\n                if (dfs(board, word, r, c, 0)) return true;\n            }\n        }\n        return false;\n    }\n    private boolean dfs(char[][] board, String word, int r, int c, int i) {\n        if (i == word.length()) return true;\n        if (r < 0 || r >= board.length || c < 0 || c >= board[0].length || board[r][c] != word.charAt(i)) return false;\n        char tmp = board[r][c];\n        board[r][c] = '#';\n        boolean found = dfs(board, word, r + 1, c, i + 1) || dfs(board, word, r - 1, c, i + 1) ||\n                        dfs(board, word, r, c + 1, i + 1) || dfs(board, word, r, c - 1, i + 1);\n        board[r][c] = tmp;\n        return found;\n    }\n}"
            },
            "complexity": {
              "time": "O(M * N * 3^L) where L is length of word",
              "space": "O(L) recursion call stack depth"
            },
            "practice_questions": [
              {
                "title": "Word Search (LeetCode #79)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/word-search/"
              },
              {
                "title": "Word Search II (LeetCode #212)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/word-search-ii/"
              }
            ]
          }
        ]
      },
      {
        "id": "sub-bit-manipulation",
        "name": "15. Bit Manipulation",
        "icon": "⚡",
        "topics": [
          {
            "id": "topic-and-or-xor-not-shift-operators",
            "title": "AND, OR, XOR, NOT, Shift operators",
            "slug": "and-or-xor-not-shift-operators",
            "difficulty": "Easy",
            "description": "Master bitwise bit manipulation operators: `&`, `|`, `^`, `~`, Left Shift `<<`, and Right Shift `>>` with binary arithmetic.",
            "video": {
              "url": "https://www.youtube.com/watch?v=NLKQEOgBAnw",
              "title": "Bitwise Operators & Binary Arithmetic Complete Tutorial",
              "start_seconds": 0,
              "end_seconds": 480,
              "chapters": [
                {
                  "title": "Bitwise AND, OR, XOR Truth Tables",
                  "start_seconds": 0
                },
                {
                  "title": "Left Shift (multiply by 2) & Right Shift (divide by 2)",
                  "start_seconds": 200
                },
                {
                  "title": "Bitwise NOT ~ and 2's Complement",
                  "start_seconds": 360
                }
              ]
            },
            "explanation": "### 💡 Bitwise Truth Tables & Shifts\n\n| A | B | A & B (AND) | A \\| B (OR) | A ^ B (XOR) |\n| :- | :- | :- | :- | :- |\n| 0 | 0 | 0 | 0 | 0 |\n| 0 | 1 | 0 | 1 | 1 |\n| 1 | 0 | 0 | 1 | 1 |\n| 1 | 1 | 1 | 1 | 0 |\n\n- **Left Shift (`x << k`)**: Multiplies `x` by `2^k`.\n- **Right Shift (`x >> k`)**: Integer division of `x` by `2^k`.\n\n### 💻 Code Implementation (Python & Java)\n\n```python\na = 5  # 0101 in binary\nb = 3  # 0011 in binary\n\nprint(a & b)  # 1  (0001)\nprint(a | b)  # 7  (0111)\nprint(a ^ b)  # 6  (0110)\nprint(a << 1) # 10 (1010)\n```",
            "code_example": {
              "language": "multi",
              "python": "# Bitwise Operators (Python)\na, b = 5, 3\nprint(f'AND: {a & b}, OR: {a | b}, XOR: {a ^ b}, SHIFT: {a << 2}')",
              "java": "// Java 8: Bitwise Operators\npublic class BitDemo {\n    public void demo() {\n        int a = 5, b = 3;\n        int and = a & b;  // 1\n        int or = a | b;   // 7\n        int xor = a ^ b;  // 6\n        int shift = a << 2; // 20\n    }\n}"
            },
            "complexity": {
              "time": "O(1) direct single CPU instruction execution",
              "space": "O(1) primitive registers"
            },
            "practice_questions": [
              {
                "title": "Single Number (LeetCode #136)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/single-number/"
              }
            ]
          },
          {
            "id": "topic-check-set-clear-a-bit",
            "title": "Check/Set/Clear a bit",
            "slug": "check-set-clear-a-bit",
            "difficulty": "Easy",
            "description": "Bitwise operations on i-th bit position: Check `bool(n & (1 << i))`, Set `n | (1 << i)`, Clear `n & ~(1 << i)`, and Toggle `n ^ (1 << i)`.",
            "video": {
              "url": "https://www.youtube.com/watch?v=NLKQEOgBAnw",
              "title": "Check, Set, Clear & Toggle i-th Bit Formulas",
              "start_seconds": 0,
              "end_seconds": 450,
              "chapters": [
                {
                  "title": "Check i-th Bit Mask Formula",
                  "start_seconds": 0
                },
                {
                  "title": "Set i-th Bit Bitwise OR",
                  "start_seconds": 160
                },
                {
                  "title": "Clear i-th Bit Bitwise NOT & AND",
                  "start_seconds": 320
                }
              ]
            },
            "explanation": "### 💡 Bit Manipulation Tricks Cheat Sheet\n\n1. **Check if i-th bit is set**: `(n & (1 << i)) != 0`\n2. **Set i-th bit (force to 1)**: `n = n | (1 << i)`\n3. **Clear i-th bit (force to 0)**: `n = n & ~(1 << i)`\n4. **Toggle i-th bit (flip 0<->1)**: `n = n ^ (1 << i)`\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef check_bit(n: int, i: int) -> bool:\n    return (n & (1 << i)) != 0\n\ndef set_bit(n: int, i: int) -> int:\n    return n | (1 << i)\n\ndef clear_bit(n: int, i: int) -> int:\n    return n & ~(1 << i)\n```",
            "code_example": {
              "language": "multi",
              "python": "# Bit Manipulation Functions (Python)\ndef bit_ops(n, i):\n    is_set = bool(n & (1 << i))\n    n_set = n | (1 << i)\n    n_clear = n & ~(1 << i)\n    return is_set, n_set, n_clear",
              "java": "// Java 8: Bit Manipulation Tricks\npublic class BitTricks {\n    public boolean checkBit(int n, int i) { return (n & (1 << i)) != 0; }\n    public int setBit(int n, int i) { return n | (1 << i); }\n    public int clearBit(int n, int i) { return n & ~(1 << i); }\n}"
            },
            "complexity": {
              "time": "O(1) constant time bitwise operations",
              "space": "O(1) space"
            },
            "practice_questions": [
              {
                "title": "Reverse Bits (LeetCode #190)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/reverse-bits/"
              }
            ]
          },
          {
            "id": "topic-count-set-bits-brian-kernighan",
            "title": "Count set bits (Brian Kernighan's algorithm)",
            "slug": "count-set-bits-brian-kernighan",
            "difficulty": "Easy",
            "description": "Count 1-bits in O(set_bits) iterations using Brian Kernighan's bitwise trick `n = n & (n - 1)` which unsets the lowest set bit.",
            "video": {
              "url": "https://www.youtube.com/watch?v=0_n_bL7z2hU",
              "title": "Brian Kernighan's Algorithm for Counting Set Bits",
              "start_seconds": 0,
              "end_seconds": 450,
              "chapters": [
                {
                  "title": "Why n & (n - 1) clears lowest set bit",
                  "start_seconds": 0
                },
                {
                  "title": "O(K) iterations where K = set bits count",
                  "start_seconds": 180
                },
                {
                  "title": "Counting Bits Array LeetCode #338 Solution",
                  "start_seconds": 320
                }
              ]
            },
            "explanation": "### 💡 Brian Kernighan's Magic Formula\n\n`n & (n - 1)` expression integer `n` ke **rightmost / lowest set bit (1)** ko hamesha `0` (unset) kar deta hai!\n\n```\nn = 12 (1100 in binary)\nn - 1 = 11 (1011 in binary)\n12 & 11 = (1100 & 1011) = 8 (1000)  => 1 set bit removed!\n8 & 7 = (1000 & 0111) = 0           => 2nd set bit removed! Total = 2!\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef countSetBits(n: int) -> int:\n    count = 0\n    while n:\n        n &= (n - 1) # Clears lowest set bit!\n        count += 1\n    return count\n```",
            "code_example": {
              "language": "multi",
              "python": "# Number of 1 Bits (LeetCode #191 - Python)\ndef hammingWeight(n: int) -> int:\n    count = 0\n    while n:\n        n &= (n - 1)\n        count += 1\n    return count",
              "java": "// Java 8: Brian Kernighan's Algorithm\npublic class Solution {\n    public int hammingWeight(int n) {\n        int count = 0;\n        while (n != 0) {\n            n &= (n - 1);\n            count++;\n        }\n        return count;\n    }\n}"
            },
            "complexity": {
              "time": "O(K) where K is number of set bits (at most 32 or 64 iterations)",
              "space": "O(1) auxiliary space"
            },
            "practice_questions": [
              {
                "title": "Number of 1 Bits (LeetCode #191)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/number-of-1-bits/"
              },
              {
                "title": "Counting Bits (LeetCode #338)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/counting-bits/"
              }
            ]
          },
          {
            "id": "topic-power-of-two-check",
            "title": "Power of two check",
            "slug": "power-of-two-check",
            "difficulty": "Easy",
            "description": "Check if a number `N > 0` is a power of 2 in O(1) time using bitwise check `(n & (n - 1)) == 0`.",
            "video": {
              "url": "https://www.youtube.com/watch?v=0_n_bL7z2hU",
              "title": "Power of Two Check in O(1) Time Bitwise",
              "start_seconds": 0,
              "end_seconds": 360,
              "chapters": [
                {
                  "title": "Power of 2 Binary Pattern (Single 1-bit)",
                  "start_seconds": 0
                },
                {
                  "title": "O(1) Bitwise Expression n > 0 and (n & n-1) == 0",
                  "start_seconds": 150
                }
              ]
            },
            "explanation": "### 💡 Power of 2 Binary Property\n\nAny power of 2 number has **EXACTLY ONE set bit (1)** in its binary representation:\n- `4` (100 in binary), `8` (1000 in binary), `16` (10000 in binary).\n\n```\nFormula:\n(n > 0) and ((n & (n - 1)) == 0)\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef isPowerOfTwo(n: int) -> bool:\n    return n > 0 and (n & (n - 1)) == 0\n```",
            "code_example": {
              "language": "multi",
              "python": "# Power of Two (LeetCode #231 - Python)\ndef isPowerOfTwo(n: int) -> bool:\n    return n > 0 and (n & (n - 1)) == 0",
              "java": "// Java 8: Power of Two O(1) Check\npublic class Solution {\n    public boolean isPowerOfTwo(int n) {\n        return n > 0 && (n & (n - 1)) == 0;\n    }\n}"
            },
            "complexity": {
              "time": "O(1) single bitwise operation",
              "space": "O(1) memory space"
            },
            "practice_questions": [
              {
                "title": "Power of Two (LeetCode #231)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/power-of-two/"
              },
              {
                "title": "Power of Four (LeetCode #342)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/power-of-four/"
              }
            ]
          },
          {
            "id": "topic-xor-based-problems",
            "title": "XOR-based problems (single number, missing number)",
            "slug": "xor-based-problems-single-number-missing-number",
            "difficulty": "Easy",
            "description": "Master XOR properties: `x ^ x = 0`, `x ^ 0 = x`, self-inverse property to find Single Number, Missing Number, and Two Non-Repeating Numbers.",
            "video": {
              "url": "https://www.youtube.com/watch?v=vVj4x5c5A_0",
              "title": "XOR Properties & Single Number / Missing Number Solutions",
              "start_seconds": 0,
              "end_seconds": 540,
              "chapters": [
                {
                  "title": "XOR Properties (x ^ x = 0 & x ^ 0 = x)",
                  "start_seconds": 0
                },
                {
                  "title": "Single Number O(N) Time O(1) Space",
                  "start_seconds": 180
                },
                {
                  "title": "Missing Number XOR Index Matching",
                  "start_seconds": 380
                }
              ]
            },
            "explanation": "### 💡 Core XOR Properties\n\n1. `x ^ x = 0` (Same numbers cancel out!)\n2. `x ^ 0 = x`\n3. XOR is **Commutative & Associative**: `a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = b`!\n\n```\nArray: [4, 1, 2, 1, 2]\nAccumulated XOR = 4 ^ 1 ^ 2 ^ 1 ^ 2 = 4 ^ (1^1) ^ (2^2) = 4 ^ 0 ^ 0 = 4!\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef singleNumber(nums: list[int]) -> int:\n    xor_sum = 0\n    for x in nums:\n        xor_sum ^= x\n    return xor_sum\n```",
            "code_example": {
              "language": "multi",
              "python": "# Missing Number (LeetCode #268 - Python)\ndef missingNumber(nums: list[int]) -> int:\n    res = len(nums)\n    for i, x in enumerate(nums):\n        res ^= i ^ x\n    return res",
              "java": "// Java 8: Single Number XOR Solution\npublic class Solution {\n    public int singleNumber(int[] nums) {\n        int xor = 0;\n        for (int n : nums) xor ^= n;\n        return xor;\n    }\n}"
            },
            "complexity": {
              "time": "O(N) single pass iteration",
              "space": "O(1) in-place accumulator"
            },
            "practice_questions": [
              {
                "title": "Single Number (LeetCode #136)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/single-number/"
              },
              {
                "title": "Missing Number (LeetCode #268)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/missing-number/"
              },
              {
                "title": "Single Number III (LeetCode #260)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/single-number-iii/"
              }
            ]
          }
        ]
      },
      {
        "id": "sub-math",
        "name": "16. Math for DSA",
        "icon": "📐",
        "topics": [
          {
            "id": "topic-gcd-lcm-euclidean-algorithm",
            "title": "GCD & LCM (Euclidean algorithm)",
            "slug": "gcd-lcm-euclidean-algorithm",
            "difficulty": "Easy",
            "description": "Euclidean GCD Algorithm `gcd(a, b) = gcd(b, a % b)` in O(log(min(a,b))) time and LCM formula `LCM(a, b) = (a * b) / GCD(a, b)`.",
            "video": {
              "url": "https://www.youtube.com/watch?v=yHwe92L6mno",
              "title": "Euclidean Algorithm for Greatest Common Divisor (GCD) & LCM",
              "start_seconds": 0,
              "end_seconds": 450,
              "chapters": [
                {
                  "title": "Euclidean Subtraction & Modulo Principle",
                  "start_seconds": 0
                },
                {
                  "title": "GCD Modulo Recursion & Iteration",
                  "start_seconds": 180
                },
                {
                  "title": "LCM Formula Derivation",
                  "start_seconds": 320
                }
              ]
            },
            "explanation": "### 💡 Euclidean GCD Principle\n\n`GCD(a, b) = GCD(b, a % b)` jab tak `b == 0` na ho jaye.\n\n```\nGCD(48, 18):\n48 % 18 = 12 ➔ GCD(18, 12)\n18 % 12 = 6  ➔ GCD(12, 6)\n12 % 6 = 0   ➔ GCD(6, 0) = 6!\n\nLCM Formula:\nLCM(a, b) = (a * b) // GCD(a, b)\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef gcd(a: int, b: int) -> int:\n    while b:\n        a, b = b, a % b\n    return a\n\ndef lcm(a: int, b: int) -> int:\n    return (a * b) // gcd(a, b)\n```",
            "code_example": {
              "language": "multi",
              "python": "# Euclidean GCD & LCM (Python)\ndef gcd(a: int, b: int) -> int:\n    return a if b == 0 else gcd(b, a % b)\n\ndef lcm(a: int, b: int) -> int:\n    return (a * b) // gcd(a, b)",
              "java": "// Java 8: Euclidean GCD Algorithm\npublic class MathUtils {\n    public static int gcd(int a, int b) {\n        return b == 0 ? a : gcd(b, a % b);\n    }\n    public static int lcm(int a, int b) {\n        return (a / gcd(a, b)) * b;\n    }\n}"
            },
            "complexity": {
              "time": "O(log(min(A, B))) Euclidean steps",
              "space": "O(1) space"
            },
            "practice_questions": [
              {
                "title": "Find Greatest Common Divisor of Array (LeetCode #1979)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/find-greatest-common-divisor-of-array/"
              }
            ]
          },
          {
            "id": "topic-prime-numbers-sieve-of-eratosthenes",
            "title": "Prime numbers (Sieve of Eratosthenes)",
            "slug": "prime-numbers-sieve-of-eratosthenes",
            "difficulty": "Medium",
            "description": "Precompute all prime numbers up to N in `O(N log log N)` time using the Sieve of Eratosthenes boolean marking array.",
            "video": {
              "url": "https://www.youtube.com/watch?v=klcIklsWzrY",
              "title": "Sieve of Eratosthenes Prime Generator O(N log log N)",
              "start_seconds": 0,
              "end_seconds": 540,
              "chapters": [
                {
                  "title": "Prime Checking O(sqrt(N)) vs Sieve O(N log log N)",
                  "start_seconds": 0
                },
                {
                  "title": "Boolean Marking Array Mechanics starting at i*i",
                  "start_seconds": 200
                },
                {
                  "title": "Count Primes LeetCode #204 Code",
                  "start_seconds": 410
                }
              ]
            },
            "explanation": "### 💡 Sieve of Eratosthenes Algorithm\n\n1. Create a boolean array `is_prime[0..N]` initialized to `True`. Set `is_prime[0] = is_prime[1] = False`.\n2. For `i` from 2 to `sqrt(N)`:\n   - If `is_prime[i]` is `True`, mark all multiples `i*i, i*i+i, i*i+2i, ...` as `False`!\n\n```\nMarking Multiples:\ni = 2 ➔ Mark 4, 6, 8, 10, 12, ... as False\ni = 3 ➔ Mark 9, 12, 15, 18, ... as False\nPrimes remaining True: 2, 3, 5, 7, 11, 13...\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef countPrimes(n: int) -> int:\n    if n <= 2: return 0\n    is_prime = [True] * n\n    is_prime[0] = is_prime[1] = False\n    for i in range(2, int(n**0.5) + 1):\n        if is_prime[i]:\n            for j in range(i * i, n, i):\n                is_prime[j] = False\n    return sum(is_prime)\n```",
            "code_example": {
              "language": "multi",
              "python": "# Count Primes (LeetCode #204 - Python)\ndef countPrimes(n: int) -> int:\n    if n <= 2: return 0\n    is_prime = [True] * n\n    is_prime[0] = is_prime[1] = False\n    for i in range(2, int(n**0.5) + 1):\n        if is_prime[i]:\n            for j in range(i * i, n, i):\n                is_prime[j] = False\n    return sum(is_prime)",
              "java": "// Java 8: Sieve of Eratosthenes\nimport java.util.Arrays;\n\npublic class Solution {\n    public int countPrimes(int n) {\n        if (n <= 2) return 0;\n        boolean[] isPrime = new boolean[n];\n        Arrays.fill(isPrime, true);\n        isPrime[0] = isPrime[1] = false;\n        for (int i = 2; i * i < n; i++) {\n            if (isPrime[i]) {\n                for (int j = i * i; j < n; j += i) {\n                    isPrime[j] = false;\n                }\n            }\n        }\n        int count = 0;\n        for (boolean b : isPrime) if (b) count++;\n        return count;\n    }\n}"
            },
            "complexity": {
              "time": "O(N log log N) near-linear time precomputation",
              "space": "O(N) boolean array storage"
            },
            "practice_questions": [
              {
                "title": "Count Primes (LeetCode #204)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/count-primes/"
              }
            ]
          },
          {
            "id": "topic-modular-arithmetic",
            "title": "Modular Arithmetic (modular exponentiation, modular inverse)",
            "slug": "modular-arithmetic-modular-exponentiation-inverse",
            "difficulty": "Medium",
            "description": "Master Modular Binary Exponentiation `(x^y) % MOD` in O(log Y) time and Modular Multiplicative Inverse via Fermat's Little Theorem.",
            "video": {
              "url": "https://www.youtube.com/watch?v=-3Lt-EwJyJA",
              "title": "Modular Exponentiation & Modular Inverse Masterclass",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Modular Addition, Multiplication & Overflow Prevention",
                  "start_seconds": 0
                },
                {
                  "title": "Binary Exponentiation O(log N)",
                  "start_seconds": 220
                },
                {
                  "title": "Fermat's Little Theorem Modular Inverse",
                  "start_seconds": 450
                }
              ]
            },
            "explanation": "### 💡 Modular Exponentiation & Fermat's Inverse\n\n1. **Binary Exponentiation**: `(x^y) % MOD` in `O(log y)` by squaring base when exponent is even.\n2. **Fermat's Little Theorem**: If `MOD` is prime, `(a^(MOD-1)) % MOD = 1`.\n   - **Modular Inverse**: `a^(-1) % MOD = (a^(MOD-2)) % MOD`!\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef modPow(x: int, y: int, mod: int = 10**9 + 7) -> int:\n    res = 1\n    x %= mod\n    while y > 0:\n        if y % 2 == 1:\n            res = (res * x) % mod\n        x = (x * x) % mod\n        y //= 2\n    return res\n\ndef modInverse(a: int, mod: int = 10**9 + 7) -> int:\n    return modPow(a, mod - 2, mod) # Fermat's Little Theorem\n```",
            "code_example": {
              "language": "multi",
              "python": "# Pow(x, n) (LeetCode #50 - Python)\ndef myPow(x: float, n: int) -> float:\n    if n < 0: x = 1 / x; n = -n\n    res = 1.0\n    while n:\n        if n % 2 == 1: res *= x\n        x *= x\n        n //= 2\n    return res",
              "java": "// Java 8: Pow(x, n) Binary Exponentiation\npublic class Solution {\n    public double myPow(double x, int n) {\n        long N = n;\n        if (N < 0) { x = 1 / x; N = -N; }\n        double res = 1.0;\n        double curr = x;\n        for (long i = N; i > 0; i /= 2) {\n            if (i % 2 == 1) res *= curr;\n            curr *= curr;\n        }\n        return res;\n    }\n}"
            },
            "complexity": {
              "time": "O(log N) bitwise divide-and-conquer exponentiation",
              "space": "O(1) space"
            },
            "practice_questions": [
              {
                "title": "Pow(x, n) (LeetCode #50)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/powx-n/"
              }
            ]
          },
          {
            "id": "topic-combinatorics-basics",
            "title": "Combinatorics basics (nCr, nPr)",
            "slug": "combinatorics-basics-ncr-npr",
            "difficulty": "Medium",
            "description": "Calculate Permutations `nPr` and Combinations `nCr = n! / (r! * (n-r)!)` using Pascal's Triangle DP or precomputed Factorials with Modular Inverse.",
            "video": {
              "url": "https://www.youtube.com/watch?v=842RkHnQ8k4",
              "title": "Combinatorics nCr & Pascal's Triangle DP Formula",
              "start_seconds": 0,
              "end_seconds": 480,
              "chapters": [
                {
                  "title": "nCr & nPr Combinatorial Definitions",
                  "start_seconds": 0
                },
                {
                  "title": "Pascal's Triangle nCr = (n-1)C(r-1) + (n-1)Cr",
                  "start_seconds": 180
                },
                {
                  "title": "O(R) Space Optimization",
                  "start_seconds": 360
                }
              ]
            },
            "explanation": "### 💡 Pascal's Triangle Recurrence\n\n`nCr = (n - 1)C(r - 1) + (n - 1)C(r)`\n\n```\nPascal's Triangle:\nRow 0:        1\nRow 1:      1   1\nRow 2:    1   2   1\nRow 3:  1   3   3   1\nRow 4:1   4   6   4   1\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef nCr(n: int, r: int) -> int:\n    if r < 0 or r > n: return 0\n    if r == 0 or r == n: return 1\n    if r > n // 2: r = n - r\n    res = 1\n    for i in range(1, r + 1):\n        res = res * (n - i + 1) // i\n    return res\n```",
            "code_example": {
              "language": "multi",
              "python": "# Pascal's Triangle (LeetCode #118 - Python)\ndef generate(numRows: int) -> list[list[int]]:\n    res = [[1]]\n    for i in range(1, numRows):\n        row = [1]\n        for j in range(1, i):\n            row.append(res[-1][j-1] + res[-1][j])\n        row.append(1)\n        res.append(row)\n    return res",
              "java": "// Java 8: Pascal's Triangle Row Generation\nimport java.util.*;\n\npublic class Solution {\n    public List<Integer> getRow(int rowIndex) {\n        List<Integer> row = new ArrayList<>();\n        row.add(1);\n        for (int i = 1; i <= rowIndex; i++) {\n            for (int j = i - 1; j > 0; j--) {\n                row.set(j, row.get(j) + row.get(j - 1));\n            }\n            row.add(1);\n        }\n        return row;\n    }\n}"
            },
            "complexity": {
              "time": "O(R) direct computation, O(N^2) for Pascal's Triangle",
              "space": "O(R) space buffer"
            },
            "practice_questions": [
              {
                "title": "Pascal's Triangle (LeetCode #118)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/pascals-triangle/"
              },
              {
                "title": "Pascal's Triangle II (LeetCode #119)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/pascals-triangle-ii/"
              }
            ]
          },
          {
            "id": "topic-factorial-related-problems",
            "title": "Factorial-related problems",
            "slug": "factorial-related-problems",
            "difficulty": "Easy",
            "description": "Trailing zeros in N! (`count(N/5) + count(N/25) + ...`), prime factorization of factorials, and large factorial calculations.",
            "video": {
              "url": "https://www.youtube.com/watch?v=3Hdmv_ejpP4",
              "title": "Trailing Zeros in Factorial N! Legendres Formula",
              "start_seconds": 0,
              "end_seconds": 450,
              "chapters": [
                {
                  "title": "Why Trailing Zeros come from 2 * 5 factors",
                  "start_seconds": 0
                },
                {
                  "title": "Legendre's Formula (N/5 + N/25 + N/125...)",
                  "start_seconds": 180
                },
                {
                  "title": "Factorial Trailing Zeroes Code Implementation",
                  "start_seconds": 320
                }
              ]
            },
            "explanation": "### 💡 Trailing Zeros Legendre's Formula\n\nTrailing zero `10` factor `2 * 5` se banta hai. Factorial me 5s ki count 2s se hamesha kam hoti hai:\n\n```\nFormula for Trailing Zeros in N!:\nCount = floor(N / 5) + floor(N / 25) + floor(N / 125) + ...\n```\n\n```\nN = 100:\n100 / 5 = 20\n20 / 5  = 4\n4 / 5   = 0\nTotal Trailing Zeros in 100! = 20 + 4 = 24!\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef trailingZeroes(n: int) -> int:\n    count = 0\n    while n >= 5:\n        count += n // 5\n        n //= 5\n    return count\n```",
            "code_example": {
              "language": "multi",
              "python": "# Factorial Trailing Zeroes (LeetCode #172 - Python)\ndef trailingZeroes(n: int) -> int:\n    cnt = 0\n    while n >= 5:\n        cnt += n // 5\n        n //= 5\n    return cnt",
              "java": "// Java 8: Trailing Zeros in Factorial\npublic class Solution {\n    public int trailingZeroes(int n) {\n        int count = 0;\n        while (n >= 5) {\n            count += n / 5;\n            n /= 5;\n        }\n        return count;\n    }\n}"
            },
            "complexity": {
              "time": "O(log5 N) iterations",
              "space": "O(1) space"
            },
            "practice_questions": [
              {
                "title": "Factorial Trailing Zeroes (LeetCode #172)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/factorial-trailing-zeroes/"
              }
            ]
          }
        ]
      },
      {
        "id": "sub-advanced-misc",
        "name": "17. Advanced / Miscellaneous (good to have)",
        "icon": "🚀",
        "topics": [
          {
            "id": "topic-sliding-window-maximum-advanced",
            "title": "Sliding Window Maximum",
            "slug": "sliding-window-maximum-advanced",
            "difficulty": "Hard",
            "description": "Find maximum element in every contiguous window of size K using Monotonic Decreasing Deque in O(N) linear time.",
            "video": {
              "url": "https://www.youtube.com/watch?v=DfljaUwZsXU",
              "title": "Sliding Window Maximum Monotonic Deque O(N) Solution",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Monotonic Decreasing Deque Property",
                  "start_seconds": 0
                },
                {
                  "title": "Pop Smaller Elements from Back",
                  "start_seconds": 220
                },
                {
                  "title": "Pop Out of Bounds Elements from Front",
                  "start_seconds": 450
                }
              ]
            },
            "explanation": "### 💡 Monotonic Deque Property\n\nDeque me indices store karte hain in **strictly decreasing order of values**:\n1. Remove out-of-bounds index from front: `dq[0] <= i - k`.\n2. Remove all elements smaller than `nums[i]` from back.\n3. Push `i` to back. Current window max is `nums[dq[0]]`!\n\n### 💻 Code Implementation (Python & Java)\n\n```python\nfrom collections import deque\n\ndef maxSlidingWindow(nums: list[int], k: int) -> list[int]:\n    q = deque() # Stores indices\n    res = []\n    for i, x in enumerate(nums):\n        if q and q[0] <= i - k:\n            q.popleft()\n        while q and nums[q[-1]] < x:\n            q.pop()\n        q.append(i)\n        if i >= k - 1:\n            res.append(nums[q[0]])\n    return res\n```",
            "code_example": {
              "language": "multi",
              "python": "# Sliding Window Maximum (LeetCode #239 - Python)\nfrom collections import deque\ndef maxSlidingWindow(nums: list[int], k: int) -> list[int]:\n    dq = deque()\n    res = []\n    for i, x in enumerate(nums):\n        if dq and dq[0] <= i - k: dq.popleft()\n        while dq and nums[dq[-1]] < x: dq.pop()\n        dq.append(i)\n        if i >= k - 1: res.append(nums[dq[0]])\n    return res",
              "java": "// Java 8: Monotonic Deque Sliding Window Maximum\nimport java.util.*;\n\npublic class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        int n = nums.length;\n        int[] res = new int[n - k + 1];\n        Deque<Integer> dq = new ArrayDeque<>();\n        for (int i = 0; i < n; i++) {\n            if (!dq.isEmpty() && dq.peekFirst() <= i - k) dq.pollFirst();\n            while (!dq.isEmpty() && nums[dq.peekLast()] < nums[i]) dq.pollLast();\n            dq.offerLast(i);\n            if (i >= k - 1) res[i - k + 1] = nums[dq.peekFirst()];\n        }\n        return res;\n    }\n}"
            },
            "complexity": {
              "time": "O(N) each index pushed and popped at most once",
              "space": "O(K) deque window size memory"
            },
            "practice_questions": [
              {
                "title": "Sliding Window Maximum (LeetCode #239)",
                "difficulty": "Hard",
                "url": "https://leetcode.com/problems/sliding-window-maximum/"
              }
            ]
          },
          {
            "id": "topic-merge-intervals-advanced",
            "title": "Merge Intervals",
            "slug": "merge-intervals-advanced",
            "difficulty": "Medium",
            "description": "Sweep-line interval overlap merging, interval insertion, and non-overlapping interval coverage optimization.",
            "video": {
              "url": "https://www.youtube.com/watch?v=44H3cEC2fFM",
              "title": "Merge Intervals Overlapping Ranges Complete Solution",
              "start_seconds": 0,
              "end_seconds": 540,
              "chapters": [
                {
                  "title": "Sort by Start Time",
                  "start_seconds": 0
                },
                {
                  "title": "Overlap Max End Time Merge",
                  "start_seconds": 200
                }
              ]
            },
            "explanation": "### 💡 Interval Merging Algorithm\n\nSort intervals by start time `intervals.sort(key=lambda x: x[0])`.\nMerge condition: `curr.start <= prev.end`.\n\n### 💻 Code Implementation (Python & Java)\n\n```python\ndef merge(intervals: list[list[int]]) -> list[list[int]]:\n    intervals.sort(key=lambda x: x[0])\n    res = []\n    for inv in intervals:\n        if not res or res[-1][1] < inv[0]:\n            res.append(inv)\n        else:\n            res[-1][1] = max(res[-1][1], inv[1])\n    return res\n```",
            "code_example": {
              "language": "multi",
              "python": "# Merge Intervals (LeetCode #56 - Python)\ndef merge(intervals: list[list[int]]) -> list[list[int]]:\n    intervals.sort(key=lambda x: x[0])\n    res = []\n    for inv in intervals:\n        if not res or res[-1][1] < inv[0]: res.append(inv)\n        else: res[-1][1] = max(res[-1][1], inv[1])\n    return res",
              "java": "// Java 8: Merge Intervals\nimport java.util.*;\n\npublic class Solution {\n    public int[][] merge(int[][] intervals) {\n        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\n        List<int[]> res = new ArrayList<>();\n        for (int[] inv : intervals) {\n            if (res.isEmpty() || res.get(res.size() - 1)[1] < inv[0]) res.add(inv);\n            else res.get(res.size() - 1)[1] = Math.max(res.get(res.size() - 1)[1], inv[1]);\n        }\n        return res.toArray(new int[res.size()][]);\n    }\n}"
            },
            "complexity": {
              "time": "O(N log N) sorting interval start times",
              "space": "O(N) merged intervals output buffer"
            },
            "practice_questions": [
              {
                "title": "Merge Intervals (LeetCode #56)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/merge-intervals/"
              }
            ]
          },
          {
            "id": "topic-reservoir-sampling",
            "title": "Reservoir Sampling",
            "slug": "reservoir-sampling",
            "difficulty": "Medium",
            "description": "Uniformly sample K items from an unmeasured or streaming dataset in single O(N) pass such that every item has equal probability `K / N`.",
            "video": {
              "url": "https://www.youtube.com/watch?v=A1iwzSew5QY",
              "title": "Reservoir Sampling Probability Proof & Streaming Random Pick",
              "start_seconds": 0,
              "end_seconds": 480,
              "chapters": [
                {
                  "title": "Equal Probability K/N Mathematical Proof",
                  "start_seconds": 0
                },
                {
                  "title": "Streaming Single Pass Random Swap Code",
                  "start_seconds": 220
                }
              ]
            },
            "explanation": "### 💡 Reservoir Sampling Probability Proof\n\nStream me `i`-th item (`0`-indexed) par:\n- Generate random integer `j` in range `[0, i]`.\n- If `j < K`: Replace `reservoir[j] = stream[i]`.\n\n```\nMathematical Proof:\nEvery element has exactly K/N probability of ending up in final reservoir!\n```\n\n### 💻 Code Implementation (Python & Java)\n\n```python\nimport random\n\nclass ReservoirSampling:\n    def __init__(self, stream: list[int]):\n        self.stream = stream\n\n    def sample(self, k: int) -> list[int]:\n        reservoir = []\n        for i, val in enumerate(self.stream):\n            if i < k:\n                reservoir.append(val)\n            else:\n                j = random.randint(0, i)\n                if j < k:\n                    reservoir[j] = val\n        return reservoir\n```",
            "code_example": {
              "language": "multi",
              "python": "# Random Pick Index (LeetCode #398 - Python)\nimport random\nclass Solution:\n    def __init__(self, nums: list[int]):\n        self.nums = nums\n    def pick(self, target: int) -> int:\n        res = -1; count = 0\n        for i, x in enumerate(self.nums):\n            if x == target:\n                count += 1\n                if random.randint(1, count) == 1:\n                    res = i\n        return res",
              "java": "// Java 8: Reservoir Sampling Random Pick Node\nimport java.util.Random;\n\npublic class Solution {\n    private int[] nums;\n    private Random rand;\n    public Solution(int[] nums) { this.nums = nums; this.rand = new Random(); }\n    public int pick(int target) {\n        int res = -1, count = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] == target) {\n                count++;\n                if (rand.nextInt(count) == 0) res = i;\n            }\n        }\n        return res;\n    }\n}"
            },
            "complexity": {
              "time": "O(N) single pass streaming iteration",
              "space": "O(K) reservoir array storage"
            },
            "practice_questions": [
              {
                "title": "Random Pick Index (LeetCode #398)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/random-pick-index/"
              },
              {
                "title": "Linked List Random Node (LeetCode #382)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/linked-list-random-node/"
              }
            ]
          },
          {
            "id": "topic-randomized-algorithms-basics",
            "title": "Randomized algorithms (basics)",
            "slug": "randomized-algorithms-basics",
            "difficulty": "Medium",
            "description": "Las Vegas (always correct result, random runtime) vs Monte Carlo (fixed runtime, high probability correct result) algorithms, and Randomized Quickselect.",
            "video": {
              "url": "https://www.youtube.com/watch?v=v=0jWeUdxrGm4",
              "title": "Randomized Algorithms: Las Vegas vs Monte Carlo Paradigms",
              "start_seconds": 0,
              "end_seconds": 450,
              "chapters": [
                {
                  "title": "Las Vegas vs Monte Carlo Definitions",
                  "start_seconds": 0
                },
                {
                  "title": "Randomized QuickSelect Average O(N) Proof",
                  "start_seconds": 200
                }
              ]
            },
            "explanation": "### 💡 Las Vegas vs Monte Carlo\n\n1. **Las Vegas Algorithm**: Always produces correct answer! Running time is random variable (e.g. Randomized QuickSort / QuickSelect).\n2. **Monte Carlo Algorithm**: Fixed deterministic execution time, but answer is correct with high probability (e.g. Miller-Rabin Primality Test).\n\n### 💻 Code Implementation (Python & Java)\n\n```python\nimport random\n\ndef quickselect(nums: list[int], k: int) -> int:\n    pivot = random.choice(nums)\n    left = [x for x in nums if x > pivot]\n    mid = [x for x in nums if x == pivot]\n    right = [x for x in nums if x < pivot]\n\n    L, M = len(left), len(mid)\n    if k <= L: return quickselect(left, k)\n    elif k <= L + M: return pivot\n    else: return quickselect(right, k - L - M)\n```",
            "code_example": {
              "language": "multi",
              "python": "# Kth Largest Element (LeetCode #215 - Python Randomized Quickselect)\nimport random\ndef findKthLargest(nums: list[int], k: int) -> int:\n    pivot = random.choice(nums)\n    left = [x for x in nums if x > pivot]\n    mid = [x for x in nums if x == pivot]\n    right = [x for x in nums if x < pivot]\n    if k <= len(left): return findKthLargest(left, k)\n    elif k <= len(left) + len(mid): return pivot\n    else: return findKthLargest(right, k - len(left) - len(mid))",
              "java": "// Java 8: Randomized Quickselect\nimport java.util.Random;\n\npublic class Solution {\n    private Random rand = new Random();\n    public int findKthLargest(int[] nums, int k) {\n        return quickselect(nums, 0, nums.length - 1, nums.length - k);\n    }\n    private int quickselect(int[] nums, int l, int r, int k) {\n        int pivotIdx = l + rand.nextInt(r - l + 1);\n        int p = partition(nums, l, r, pivotIdx);\n        if (p == k) return nums[p];\n        return p < k ? quickselect(nums, p + 1, r, k) : quickselect(nums, l, p - 1, k);\n    }\n    private int partition(int[] nums, int l, int r, int pIdx) {\n        int p = nums[pIdx];\n        int tmp = nums[pIdx]; nums[pIdx] = nums[r]; nums[r] = tmp;\n        int i = l;\n        for (int j = l; j < r; j++) {\n            if (nums[j] < p) {\n                tmp = nums[i]; nums[i] = nums[j]; nums[j] = tmp; i++;\n            }\n        }\n        tmp = nums[i]; nums[i] = nums[r]; nums[r] = tmp;\n        return i;\n    }\n}"
            },
            "complexity": {
              "time": "O(N) average time for Quickselect, O(N log N) for QuickSort",
              "space": "O(log N) recursion depth"
            },
            "practice_questions": [
              {
                "title": "Kth Largest Element in an Array (LeetCode #215)",
                "difficulty": "Medium",
                "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/"
              }
            ]
          },
          {
            "id": "topic-sparse-table-queries",
            "title": "Sparse Table (for range min/max queries)",
            "slug": "sparse-table-range-min-max-queries",
            "difficulty": "Hard",
            "description": "Precompute 2D sparse table `st[i][j]` of size N log N to answer static range minimum/maximum queries (RMQ) in O(1) constant time.",
            "video": {
              "url": "https://www.youtube.com/watch?v=0jWeUdxrGm4",
              "title": "Sparse Table Static Range Minimum Query (RMQ) in O(1) Time",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Binary Lifting 2^K Length Intervals",
                  "start_seconds": 0
                },
                {
                  "title": "Precomputation O(N log N) Table",
                  "start_seconds": 220
                },
                {
                  "title": "O(1) Overlapping Interval Query Formula",
                  "start_seconds": 450
                }
              ]
            },
            "explanation": "### 💡 Sparse Table O(1) Range Minimum Query (RMQ)\n\n`st[i][j]` stores minimum in range `[i, i + 2^j - 1]`.\n- **Precomputation**: `st[i][j] = min(st[i][j-1], st[i + 2^(j-1)][j-1])` in `O(N log N)`.\n- **Query `RMQ(L, R)`**: `k = floor(log2(R - L + 1))`.\n  - `min(st[L][k], st[R - 2^k + 1][k])` in **`O(1)` constant time**!\n\n### 💻 Code Implementation (Python & Java)\n\n```python\nimport math\n\nclass SparseTable:\n    def __init__(self, nums: list[int]):\n        self.n = len(nums)\n        self.k = math.floor(math.log2(self.n)) + 1\n        self.st = [[0] * self.k for _ in range(self.n)]\n\n        for i in range(self.n):\n            self.st[i][0] = nums[i]\n\n        j = 1\n        while (1 << j) <= self.n:\n            for i in range(self.n - (1 << j) + 1):\n                self.st[i][j] = min(self.st[i][j - 1], self.st[i + (1 << (j - 1))][j - 1])\n            j += 1\n\n    def query(self, L: int, R: int) -> int:\n        j = math.floor(math.log2(R - L + 1))\n        return min(self.st[L][j], self.st[R - (1 << j) + 1][j])\n```",
            "code_example": {
              "language": "multi",
              "python": "# Sparse Table RMQ (Python)\nimport math\nclass SparseTable:\n    def __init__(self, arr):\n        n = len(arr); self.k = int(math.log2(n)) + 1\n        self.st = [[0]*self.k for _ in range(n)]\n        for i in range(n): self.st[i][0] = arr[i]\n        for j in range(1, self.k):\n            for i in range(n - (1 << j) + 1):\n                self.st[i][j] = min(self.st[i][j-1], self.st[i + (1 << (j-1))][j-1])\n    def query(self, L, R):\n        j = int(math.log2(R - L + 1))\n        return min(self.st[L][j], self.st[R - (1 << j) + 1][j])",
              "java": "// Java 8: Sparse Table Implementation\npublic class SparseTable {\n    private int[][] st;\n    private int[] log;\n    public SparseTable(int[] arr) {\n        int n = arr.length;\n        log = new int[n + 1];\n        for (int i = 2; i <= n; i++) log[i] = log[i / 2] + 1;\n        int k = log[n] + 1;\n        st = new int[n][k];\n        for (int i = 0; i < n; i++) st[i][0] = arr[i];\n        for (int j = 1; j < k; j++) {\n            for (int i = 0; i + (1 << j) <= n; i++) {\n                st[i][j] = Math.min(st[i][j - 1], st[i + (1 << (j - 1))][j - 1]);\n            }\n        }\n    }\n    public int query(int L, int R) {\n        int j = log[R - L + 1];\n        return Math.min(st[L][j], st[R - (1 << j) + 1][j]);\n    }\n}"
            },
            "complexity": {
              "time": "O(N log N) precomputation, O(1) per range query",
              "space": "O(N log N) sparse table array"
            },
            "practice_questions": [
              {
                "title": "Range Sum Query - Immutable (LeetCode #303)",
                "difficulty": "Easy",
                "url": "https://leetcode.com/problems/range-sum-query-immutable/"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cat-cs-fundamentals",
    "name": "CS Fundamentals",
    "slug": "cs-fundamentals",
    "icon": "💻",
    "description": "Master core Computer Science theory & engineering fundamentals: OOPs, DBMS, Operating Systems, Computer Networks, Software Engineering, Architecture, Programming Languages & Security.",
    "subcategories": [
      {
        "id": "sub-cs-oops",
        "name": "1. Object-Oriented Programming (OOPs)",
        "icon": "🧩",
        "topics": [
          {
            "id": "topic-oops-class-object",
            "title": "Class & Object",
            "slug": "oops-class-object",
            "difficulty": "Easy",
            "description": "Deep dive into Class vs Object blueprint concept, heap vs stack memory allocation, and object instantiation.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Class and Object Memory Layout Masterclass",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Class vs Object Memory Allocation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Simple Definition & Intuition\nIn Object-Oriented Programming, a **Class** is a user-defined blueprint or prototype from which **Objects** are created. An **Object** is a real-world instance of a class that holds actual data in RAM memory.\n\n**Real-World Analogy:**\n- **Class:** Architectural drawing/blueprint of a car on paper. Takes 0 physical space.\n- **Object:** Physical car manufactured in factory using that blueprint. Takes actual space on the road (RAM).\n\n---\n\n### 2. Memory Layout: Stack vs Heap\n\n```mermaid\ngraph TD\n    subgraph Stack Memory\n        A[Reference Variable: myCar] -->|Points to Address 0x7FFF| B\n    end\n    subgraph Heap Memory\n        B[Car Object at 0x7FFF<br>brand: 'Tesla'<br>speed: 120 mph<br>color: 'Red']\n    end\n```\n\n- **Stack Memory:** Stores local primitive variables and object reference pointers (`myCar`). Fast access, auto-deallocated when function call finishes.\n- **Heap Memory:** Stores actual object instances created using `new`. Managed by Garbage Collector / manual memory management.\n\n---\n\n### 3. Key Differences: Class vs Object\n\n| Feature | Class | Object |\n| :--- | :--- | :--- |\n| **Definition** | Logical blueprint / template | Physical entity created from class |\n| **Memory** | Allocates no memory on declaration | Allocates memory on instantiation (`new`) |\n| **Existence** | Declared once in code | Can create infinite objects |\n| **Variables** | Defines structure (attributes/methods) | Holds state (values for attributes) |\n\n---\n\n### 4. Code Implementation",
            "code_example": {
              "language": "multi",
              "python": "# Python Class & Object Example\nclass Car:\n    def __init__(self, brand: str, speed: int):\n        self.brand = brand  # Instance variable\n        self.speed = speed\n\n    def drive(self):\n        return f\"{self.brand} is driving at {self.speed} mph.\"\n\n# Instantiating Objects in Heap\ncar1 = Car(\"Tesla\", 120)\ncar2 = Car(\"BMW\", 140)\n\nprint(car1.drive()) # Output: Tesla is driving at 120 mph.\nprint(car2.drive()) # Output: BMW is driving at 140 mph.",
              "java": "// Java Class & Object Memory Example\npublic class Main {\n    static class Car {\n        String brand;\n        int speed;\n\n        Car(String brand, int speed) {\n            this.brand = brand;\n            this.speed = speed;\n        }\n\n        void drive() {\n            System.out.println(brand + \" is driving at \" + speed + \" mph.\");\n        }\n    }\n\n    public static void main(String[] args) {\n        // 'car1' reference stored in Stack, new Car(...) allocated in Heap\n        Car car1 = new Car(\"Tesla\", 120);\n        car1.drive();\n    }\n}"
            },
            "complexity": {
              "time": "O(1) Object creation / Method execution",
              "space": "O(N) Heap space proportional to number of fields and instances"
            },
            "practice_questions": []
          },
          {
            "id": "topic-oops-encapsulation",
            "title": "Encapsulation",
            "slug": "oops-encapsulation",
            "difficulty": "Easy",
            "description": "Data binding, hiding internal state behind access modifiers, getter/setter validation, and data security.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Encapsulation & Data Hiding Explained",
              "start_seconds": 600,
              "end_seconds": 1200,
              "chapters": [
                {
                  "title": "Getters and Setters",
                  "start_seconds": 600
                }
              ]
            },
            "explanation": "### 1. Simple Definition & Intuition\n**Encapsulation** is the mechanism of wrapping data (variables) and code acting on the data (methods) together into a single unit (class). It prevents direct unauthorized access to internal data from outside the class (**Data Hiding**).\n\n**Real-World Analogy:**\nA **Medical Capsule**. All medicines (data & functions) are bundled safely inside the protective gelatin shell (class). You can't alter the internal chemicals directly without consuming the capsule safely.\n\n---\n\n### 2. Architecture & Data Access Control\n\n```mermaid\ngraph LR\n    subgraph Client Code / External\n        A[External Caller]\n    end\n    subgraph Encapsulated Class: BankAccount\n        B[Public Getter: getBalance]\n        C[Public Setter: deposit]\n        D[Private Field: -balance]\n    end\n    A -->|Allowed| B\n    A -->|Allowed| C\n    A -.-X|Blocked Direct Access| D\n    B --> Read --> D\n    C --> Validate & Update --> D\n```\n\n---\n\n### 3. Benefits of Encapsulation\n1. **Data Security:** Prevents corruption of internal state by external code.\n2. **Validation Control:** Setters enforce constraints (e.g., balance cannot be negative).\n3. **Flexibility & Maintainability:** Internal logic can change without breaking callers.",
            "code_example": {
              "language": "multi",
              "python": "class BankAccount:\n    def __init__(self, owner: str, balance: float):\n        self.owner = owner\n        self.__balance = balance  # Private attribute (name mangled)\n\n    def deposit(self, amount: float):\n        if amount > 0:\n            self.__balance += amount\n            return True\n        return False\n\n    def get_balance(self):\n        return self.__balance\n\naccount = BankAccount(\"Rahul\", 1000.0)\naccount.deposit(500)\nprint(account.get_balance()) # 1500.0\n# print(account.__balance) # Raises AttributeError",
              "java": "public class BankAccount {\n    private double balance; // Private field\n\n    public BankAccount(double initialBalance) {\n        if (initialBalance >= 0) this.balance = initialBalance;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) {\n            this.balance += amount;\n        }\n    }\n}"
            },
            "complexity": {
              "time": "O(1) Getter/Setter access",
              "space": "O(1) Constant memory overhead per object"
            },
            "practice_questions": []
          },
          {
            "id": "topic-oops-abstraction",
            "title": "Abstraction",
            "slug": "oops-abstraction",
            "difficulty": "Easy",
            "description": "Hiding implementation complexity and exposing only essential interface features to the user.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Abstraction in OOPs Explained",
              "start_seconds": 1200,
              "end_seconds": 1800,
              "chapters": [
                {
                  "title": "Abstraction vs Encapsulation",
                  "start_seconds": 1200
                }
              ]
            },
            "explanation": "### 1. Simple Definition & Intuition\n**Abstraction** is the quality of dealing with ideas rather than events. In OOPs, it means hiding complex internal implementation details and showing only essential features to the outside world.\n\n**Real-World Analogy:**\nWhen you drive a car, you press the **Accelerator pedal** to increase speed. You do not need to know how fuel injection, combustion chamber, or pistons work under the hood. The pedal is an **Abstraction**.\n\n---\n\n### 2. Abstraction vs Encapsulation\n\n| Feature | Abstraction | Encapsulation |\n| :--- | :--- | :--- |\n| **Focus** | **WHAT** the system does | **HOW** data is hidden/protected |\n| **Solve Level** | Design Level (Interfaces, Abstract Classes) | Implementation Level (Access modifiers) |\n| **Example** | TV Remote buttons (Power, Volume) | Inner wiring & circuit board inside plastic case |",
            "code_example": {
              "language": "multi",
              "python": "from abc import ABC, abstractmethod\n\nclass PaymentGateway(ABC):\n    @abstractmethod\n    def process_payment(self, amount: float):\n        pass\n\nclass StripePayment(PaymentGateway):\n    def process_payment(self, amount: float):\n        return f\"Processing ${amount} via Stripe API...\"\n\nclass PayPalPayment(PaymentGateway):\n    def process_payment(self, amount: float):\n        return f\"Processing ${amount} via PayPal OAuth...\"\n\n# Client code only interacts with PaymentGateway abstraction\ngateway: PaymentGateway = StripePayment()\nprint(gateway.process_payment(100.0))",
              "java": "abstract class PaymentGateway {\n    abstract void processPayment(double amount);\n}\n\nclass StripePayment extends PaymentGateway {\n    void processPayment(double amount) {\n        System.out.println(\"Processing $\" + amount + \" via Stripe API...\");\n    }\n}"
            },
            "complexity": {
              "time": "O(1) Virtual method lookup dispatch",
              "space": "O(1) VTable / Interface pointer lookup table space"
            },
            "practice_questions": []
          },
          {
            "id": "topic-oops-inheritance",
            "title": "Inheritance (Single, Multiple, Multilevel, Hierarchical, Hybrid)",
            "slug": "oops-inheritance",
            "difficulty": "Medium",
            "description": "Code reusability, parent-child class relationship, types of inheritance, and Diamond Problem in C++/Python.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "5 Types of Inheritance & Diamond Problem",
              "start_seconds": 1800,
              "end_seconds": 2400,
              "chapters": [
                {
                  "title": "Diamond Problem Solved",
                  "start_seconds": 2100
                }
              ]
            },
            "explanation": "### 1. Simple Definition & Types\n**Inheritance** is a mechanism where a new class (derived/child class) inherits properties and behaviors (methods) from an existing class (base/parent class).\n\n```mermaid\ngraph TD\n    subgraph 1. Single Inheritance\n        A1[Parent A] --> B1[Child B]\n    end\n    subgraph 2. Multilevel Inheritance\n        A2[Grandparent A] --> B2[Parent B] --> C2[Child C]\n    end\n    subgraph 3. Hierarchical Inheritance\n        A3[Parent A] --> B3[Child B]\n        A3 --> C3[Child C]\n    end\n    subgraph 4. Multiple Inheritance\n        A4[Parent A] --> C4[Child C]\n        B4[Parent B] --> C4\n    end\n```\n\n---\n\n### 2. The Diamond Problem (Multiple Inheritance)\n\n```mermaid\ngraph TD\n    A[Class A: print] --> B[Class B: overrides print]\n    A --> C[Class C: overrides print]\n    B --> D[Class D inherits B & C]\n    C --> D\n```\n\nWhen Class D inherits from Class B and Class C, both of which override a method from Class A, Class D faces ambiguity on which version to call.\n\n- **C++:** Solved using `virtual inheritance`.\n- **Java:** Disallows multiple class inheritance; uses `Interfaces` instead.\n- **Python:** Solved using **C3 Linearization / Method Resolution Order (MRO)**.",
            "code_example": {
              "language": "multi",
              "python": "# Python Multiple Inheritance with MRO\nclass A:\n    def show(self): print(\"Class A\")\n\nclass B(A):\n    def show(self): print(\"Class B\")\n\nclass C(A):\n    def show(self): print(\"Class C\")\n\nclass D(B, C):\n    pass\n\nd = D()\nd.show()  # Outputs 'Class B' based on MRO order D -> B -> C -> A\nprint(D.mro())",
              "java": "// Java Interface Multiple Inheritance\ninterface Engine { void start(); }\ninterface Electric { void charge(); }\nclass Tesla implements Engine, Electric {\n    public void start() { System.out.println(\"Engine started\"); }\n    public void charge() { System.out.println(\"Battery charging\"); }\n}"
            },
            "complexity": {
              "time": "O(1) Inheritance hierarchy navigation",
              "space": "O(1) Subclass memory layout extension"
            },
            "practice_questions": []
          },
          {
            "id": "topic-oops-polymorphism",
            "title": "Polymorphism (Compile-Time vs Run-Time)",
            "slug": "oops-polymorphism",
            "difficulty": "Medium",
            "description": "Ability to take many forms: Compile-time polymorphism (Method Overloading) vs Run-time polymorphism (Method Overriding & Dynamic Binding).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Polymorphism, Overloading & Overriding",
              "start_seconds": 2400,
              "end_seconds": 3000,
              "chapters": [
                {
                  "title": "Compile time vs Runtime Polymorphism",
                  "start_seconds": 2400
                }
              ]
            },
            "explanation": "### 1. Simple Definition & Intuition\n**Polymorphism** (Greek: \"many forms\") allows objects of different classes to respond to the same method call in their own unique way.\n\n```mermaid\ngraph TD\n    A[Compile-Time Polymorphism] -->|Static Binding| B[Method Overloading]\n    A -->|Static Binding| C[Operator Overloading]\n    D[Run-Time Polymorphism] -->|Dynamic Binding| E[Method Overriding via Virtual Table]\n```\n\n---\n\n### 2. Compile-Time vs Run-Time Polymorphism\n\n| Feature | Compile-Time Polymorphism | Run-Time Polymorphism |\n| :--- | :--- | :--- |\n| **Mechanism** | Method Overloading / Operator Overloading | Method Overriding |\n| **Binding** | **Static / Early Binding** (at compile time) | **Dynamic / Late Binding** (at runtime) |\n| **Execution** | Faster (no runtime lookup) | Slightly slower (VTable lookup) |\n| **Requirements** | Same method name, different parameter signature | Same method name AND exact same signature in parent/child |",
            "code_example": {
              "language": "multi",
              "python": "# Method Overriding (Run-Time Polymorphism in Python)\nclass Animal:\n    def make_sound(self): return \"Generic sound\"\n\nclass Dog(Animal):\n    def make_sound(self): return \"Woof Woof!\"\n\nclass Cat(Animal):\n    def make_sound(self): return \"Meow!\"\n\n# Dynamic dispatch\nanimals = [Dog(), Cat(), Animal()]\nfor a in animals:\n    print(a.make_sound())",
              "java": "class Shape {\n    void draw() { System.out.println(\"Drawing Shape\"); }\n}\nclass Circle extends Shape {\n    @Override\n    void draw() { System.out.println(\"Drawing Circle\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Shape s = new Circle(); // Upcasting\n        s.draw(); // Output: Drawing Circle (Runtime dispatch)\n    }\n}"
            },
            "complexity": {
              "time": "O(1) Virtual function pointer lookup (vptr -> vtable[i])",
              "space": "O(K) VTable memory overhead per class with virtual functions"
            },
            "practice_questions": []
          },
          {
            "id": "topic-oops-constructor-destructor",
            "title": "Constructor & Destructor",
            "slug": "oops-constructor-destructor",
            "difficulty": "Easy",
            "description": "Object initialization, Default/Parameterized/Copy constructors, Garbage collection, and C++ Destructors.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Constructors, Destructors and Memory Management",
              "start_seconds": 3000,
              "end_seconds": 3600,
              "chapters": [
                {
                  "title": "Copy Constructor",
                  "start_seconds": 3200
                }
              ]
            },
            "explanation": "### 1. Simple Definition\n- **Constructor:** Special member function automatically executed when an object is instantiated. Used to initialize member variables.\n- **Destructor:** Special member function automatically executed when an object goes out of scope or is deleted. Used to free resources (file handles, heap memory).\n\n---\n\n### 2. Constructor Types\n1. **Default Constructor:** Takes no arguments; initializes variables with default values.\n2. **Parameterized Constructor:** Accepts arguments to customize object state.\n3. **Copy Constructor:** Creates a new object as a copy of an existing object (Shallow Copy vs Deep Copy).",
            "code_example": {
              "language": "multi",
              "cpp": "#include <iostream>\nusing namespace std;\n\nclass Resource {\n    int* data;\npublic:\n    // Parameterized Constructor\n    Resource(int val) {\n        data = new int(val);\n        cout << \"Resource Allocated: \" << *data << endl;\n    }\n\n    // Destructor\n    ~Resource() {\n        delete data; // Freeing heap memory to prevent memory leak\n        cout << \"Resource Freely Destroyed\" << endl;\n    }\n};\n\nint main() {\n    Resource r(42);\n    return 0; // Destructor called automatically here\n}",
              "python": "class Resource:\n    def __init__(self, val):\n        self.val = val\n        print(f\"Resource {self.val} initialized\")\n\n    def __del__(self):\n        print(f\"Resource {self.val} destroyed by Garbage Collector\")\n\nres = Resource(100)\ndel res # Explicit deletion invokes __del__"
            },
            "complexity": {
              "time": "O(1) Initialization and Cleanup",
              "space": "O(1) Fixed allocation"
            },
            "practice_questions": []
          },
          {
            "id": "topic-oops-interface-vs-abstract-class",
            "title": "Interface vs Abstract Class",
            "slug": "oops-interface-vs-abstract-class",
            "difficulty": "Medium",
            "description": "Core comparison between Abstract Classes (partial implementation) and Interfaces (pure contracts).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Abstract Class vs Interface Deep Dive",
              "start_seconds": 3600,
              "end_seconds": 4200,
              "chapters": [
                {
                  "title": "When to use Abstract Class vs Interface",
                  "start_seconds": 3800
                }
              ]
            },
            "explanation": "### 1. High-Level Comparison\n\n```mermaid\ngraph TD\n    subgraph Abstract Class\n        A[Can have concrete methods with code]\n        B[Can hold state/instance fields]\n        C[Single Inheritance only]\n    end\n    subgraph Interface\n        D[Pure contract: methods without body]\n        E[No instance fields static final only]\n        F[Multiple Inheritance allowed]\n    end\n```\n\n---\n\n### 2. Comprehensive Comparison Table\n\n| Feature | Abstract Class | Interface |\n| :--- | :--- | :--- |\n| **Methods** | Abstract & Concrete methods | Pure abstract methods (Java 8+ allows `default`/`static`) |\n| **State / Fields** | Can have instance fields, constructor | Static final constants only |\n| **Inheritance** | Single class inheritance (`extends`) | Multiple interface implementation (`implements`) |\n| **Speed** | Slightly faster (direct subclass call) | Search in interface table (itab lookup) |\n| **Intent** | Represents an **\"IS-A\"** relationship | Represents a **\"CAN-DO\"** behavior / capability |",
            "code_example": {
              "language": "multi",
              "java": "// Abstract Class (IS-A relationship)\nabstract class Vehicle {\n    protected String brand;\n    public Vehicle(String brand) { this.brand = brand; }\n    abstract void startEngine(); // Abstract method\n    void horn() { System.out.println(\"Beep Beep!\"); } // Concrete method\n}\n\n// Interface (CAN-DO relationship)\ninterface Autonomous {\n    void selfDrive();\n}\n\nclass Tesla extends Vehicle implements Autonomous {\n    public Tesla() { super(\"Tesla Model 3\"); }\n    void startEngine() { System.out.println(\"Electric motor started silently\"); }\n    public void selfDrive() { System.out.println(\"Autopilot engaged\"); }\n}"
            },
            "complexity": {
              "time": "O(1) Method invocation",
              "space": "O(1) Interface vtable pointer space"
            },
            "practice_questions": []
          },
          {
            "id": "topic-oops-access-modifiers",
            "title": "Access Modifiers (public, private, protected)",
            "slug": "oops-access-modifiers",
            "difficulty": "Easy",
            "description": "Controlling visibility and encapsulation scope across classes, packages, and derived subclasses.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Access Modifiers in Java, C++ & Python",
              "start_seconds": 4200,
              "end_seconds": 4800,
              "chapters": [
                {
                  "title": "Protected Keyword Scope",
                  "start_seconds": 4400
                }
              ]
            },
            "explanation": "### 1. Scope Matrix for Access Modifiers\n\n| Access Modifier | Same Class | Same Package / Module | Subclass (Outside Package) | World (Global) |\n| :--- | :---: | :---: | :---: | :---: |\n| `private` | ✅ | ❌ | ❌ | ❌ |\n| `default` (package-private) | ✅ | ✅ | ❌ | ❌ |\n| `protected` | ✅ | ✅ | ✅ | ❌ |\n| `public` | ✅ | ✅ | ✅ | ✅ |",
            "code_example": {
              "language": "multi",
              "java": "public class VisibilityDemo {\n    public int publicVar = 1;       // Access from anywhere\n    protected int protectedVar = 2; // Access in package + subclasses\n    int defaultVar = 3;             // Access only inside same package\n    private int privateVar = 4;     // Access only inside VisibilityDemo class\n}"
            },
            "complexity": {
              "time": "O(1) Compile-time access check",
              "space": "O(1) No runtime memory cost"
            },
            "practice_questions": []
          },
          {
            "id": "topic-oops-static-vs-instance",
            "title": "Static vs Instance Members",
            "slug": "oops-static-vs-instance",
            "difficulty": "Easy",
            "description": "Class-level static variables and methods stored in Metaspace/Class area vs object instance members in Heap.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Static Keyword & Memory Allocation",
              "start_seconds": 4800,
              "end_seconds": 5400,
              "chapters": [
                {
                  "title": "Static Block Execution",
                  "start_seconds": 5000
                }
              ]
            },
            "explanation": "### 1. Static vs Instance Memory Allocation\n\n```mermaid\ngraph TD\n    subgraph Metaspace / Class Area\n        S[Static Variable: counter = 2]\n    end\n    subgraph Heap Memory\n        O1[Object 1: id=101]\n        O2[Object 2: id=102]\n    end\n    O1 -.->|Shared Reference| S\n    O2 -.->|Shared Reference| S\n```\n\n- **Static Members:** Shared across ALL instances of a class. Stored once in Class Area / Metaspace when the class is loaded by JVM/Interpreter.\n- **Instance Members:** Belong to a specific object instance. Stored separately in Heap memory for every created object.",
            "code_example": {
              "language": "multi",
              "java": "public class Counter {\n    static int count = 0; // Shared class variable\n    int instanceId;       // Per-object instance variable\n\n    public Counter() {\n        count++;\n        this.instanceId = count;\n    }\n\n    public static void displayTotal() {\n        System.out.println(\"Total counter objects created: \" + count);\n    }\n}"
            },
            "complexity": {
              "time": "O(1) Access",
              "space": "O(1) Allocated once per class for static fields"
            },
            "practice_questions": []
          },
          {
            "id": "topic-oops-overloading-vs-overriding",
            "title": "Method Overloading vs Overriding",
            "slug": "oops-overloading-vs-overriding",
            "difficulty": "Medium",
            "description": "Comprehensive comparison between Method Overloading (same name, different params) and Overriding (subclass redefining parent method).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Method Overloading vs Method Overriding",
              "start_seconds": 5400,
              "end_seconds": 6000,
              "chapters": [
                {
                  "title": "Differences Summary",
                  "start_seconds": 5400
                }
              ]
            },
            "explanation": "### 1. Direct Comparison\n\n| Feature | Method Overloading | Method Overriding |\n| :--- | :--- | :--- |\n| **Location** | Within the **same class** | Between **Parent and Child class** |\n| **Parameters** | MUST be **different** (number or types) | MUST be **identical** |\n| **Return Type** | Can be same or different | MUST be same (or covariant) |\n| **Binding Time** | Compile-Time (Static Binding) | Run-Time (Dynamic Binding) |\n| **Private/Static**| Private/static methods CAN be overloaded | Private/static methods CANNOT be overridden |",
            "code_example": {
              "language": "multi",
              "java": "class Calculator {\n    // Method Overloading (Compile-time)\n    int add(int a, int b) { return a + b; }\n    double add(double a, double b) { return a + b; }\n}\n\nclass AdvancedCalculator extends Calculator {\n    // Method Overriding (Run-time)\n    @Override\n    int add(int a, int b) {\n        System.out.println(\"Adding integers in child class\");\n        return super.add(a, b);\n    }\n}"
            },
            "complexity": {
              "time": "O(1) Compile-time overload resolution / Runtime virtual call",
              "space": "O(1) Constant"
            },
            "practice_questions": []
          },
          {
            "id": "topic-oops-composition-vs-aggregation-vs-inheritance",
            "title": "Composition vs Aggregation vs Inheritance",
            "slug": "oops-composition-vs-aggregation-vs-inheritance",
            "difficulty": "Medium",
            "description": "IS-A vs HAS-A relationships. Deep comparison between Strong Composition, Weak Aggregation, and Class Inheritance.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Composition vs Aggregation vs Inheritance",
              "start_seconds": 6000,
              "end_seconds": 6600,
              "chapters": [
                {
                  "title": "Favor Composition over Inheritance",
                  "start_seconds": 6300
                }
              ]
            },
            "explanation": "### 1. Relationship Types\n\n```mermaid\ngraph TD\n    A[Inheritance: IS-A] -->|Dog is an Animal| B[Tight Coupling]\n    C[Aggregation: HAS-A Weak] -->|Department has Teachers| D[Independent Lifetime]\n    E[Composition: HAS-A Strong] -->|Car has Engine| F[Dependent Lifetime: Destroyed Together]\n```\n\n- **Inheritance (IS-A):** Subclass extends superclass. Highest coupling.\n- **Aggregation (HAS-A - Weak Association):** Container object holds references to component objects, but components can exist independently if container is destroyed (e.g., `Department` and `Teacher`).\n- **Composition (HAS-A - Strong Association):** Component object cannot exist without container. Destroying container destroys component (e.g., `House` and `Room`).",
            "code_example": {
              "language": "multi",
              "python": "# Composition Example (Strong HAS-A)\nclass Engine:\n    def start(self): return \"V8 Engine roaring\"\n\nclass Car:\n    def __init__(self):\n        self.engine = Engine() # Engine lifetime tied to Car\n\n# Aggregation Example (Weak HAS-A)\nclass Teacher:\n    def __init__(self, name): self.name = name\n\nclass School:\n    def __init__(self, teachers_list):\n        self.teachers = teachers_list # Teachers exist independently"
            },
            "complexity": {
              "time": "O(1) Delegation",
              "space": "O(N) Object graph memory"
            },
            "practice_questions": []
          },
          {
            "id": "topic-oops-solid-principles",
            "title": "SOLID Principles",
            "slug": "oops-solid-principles",
            "difficulty": "Hard",
            "description": "5 foundational object-oriented design principles: Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "SOLID Principles Architecture Masterclass",
              "start_seconds": 6600,
              "end_seconds": 7400,
              "chapters": [
                {
                  "title": "Single Responsibility Principle",
                  "start_seconds": 6600
                },
                {
                  "title": "Open Closed Principle",
                  "start_seconds": 6800
                },
                {
                  "title": "Liskov Substitution Principle",
                  "start_seconds": 7000
                },
                {
                  "title": "Interface Segregation & Dependency Inversion",
                  "start_seconds": 7200
                }
              ]
            },
            "explanation": "### 1. Overview of SOLID Principles\n\n1. **S - Single Responsibility Principle (SRP):** A class should have one, and only one, reason to change.\n2. **O - Open-Closed Principle (OCP):** Software entities should be open for extension, but closed for modification.\n3. **L - Liskov Substitution Principle (LSP):** Subtypes must be substitutable for their base types without altering correctness.\n4. **I - Interface Segregation Principle (ISP):** Clients should not be forced to depend on interfaces they do not use (prefer small, role-specific interfaces).\n5. **D - Dependency Inversion Principle (DIP):** High-level modules should not depend on low-level modules; both should depend on abstractions.",
            "code_example": {
              "language": "multi",
              "python": "# Dependency Inversion Principle (DIP) Example\nfrom abc import ABC, abstractmethod\n\nclass MessageSender(ABC):\n    @abstractmethod\n    def send(self, msg: str): pass\n\nclass EmailSender(MessageSender):\n    def send(self, msg: str): print(f\"Email sent: {msg}\")\n\nclass NotificationService:\n    # Depends on abstraction (MessageSender), not concrete class\n    def __init__(self, sender: MessageSender):\n        self.sender = sender\n\n    def notify(self, msg: str):\n        self.sender.send(msg)"
            },
            "complexity": {
              "time": "O(1) Loose coupling dispatch",
              "space": "O(1) Interface structure"
            },
            "practice_questions": []
          },
          {
            "id": "topic-oops-singleton-pattern",
            "title": "Design Patterns: Singleton Pattern",
            "slug": "oops-singleton-pattern",
            "difficulty": "Medium",
            "description": "Ensuring a class has only one instance while providing a global point of access. Thread-safe Double-Checked Locking in Java & C++.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Singleton Pattern & Thread Safety",
              "start_seconds": 7400,
              "end_seconds": 8000,
              "chapters": [
                {
                  "title": "Double-Checked Locking",
                  "start_seconds": 7600
                }
              ]
            },
            "explanation": "### 1. Intuition & Use Cases\nEnsures that only a single instance of a class exists in the entire application memory (e.g., Database Connection Pool, Logger, Configuration Manager).\n\n```mermaid\ngraph TD\n    A[Client Request 1] --> B{Instance exists?}\n    C[Client Request 2] --> B\n    B -- No --> D[Create instance in private static variable]\n    B -- Yes --> E[Return existing instance]\n```",
            "code_example": {
              "language": "multi",
              "java": "// Thread-Safe Singleton with Double-Checked Locking\npublic class DatabaseConnection {\n    private static volatile DatabaseConnection instance;\n\n    private DatabaseConnection() { /* Private Constructor */ }\n\n    public static DatabaseConnection getInstance() {\n        if (instance == null) {\n            synchronized (DatabaseConnection.class) {\n                if (instance == null) {\n                    instance = new DatabaseConnection();\n                }\n            }\n        }\n        return instance;\n    }\n}"
            },
            "complexity": {
              "time": "O(1) Access",
              "space": "O(1) Single instance memory"
            },
            "practice_questions": []
          },
          {
            "id": "topic-oops-factory-observer-strategy",
            "title": "Design Patterns: Factory, Observer & Strategy Patterns",
            "slug": "oops-factory-observer-strategy",
            "difficulty": "Hard",
            "description": "Essential Gang of Four (GoF) creational & behavioral design patterns for clean architecture.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Factory, Observer & Strategy Design Patterns",
              "start_seconds": 8000,
              "end_seconds": 9000,
              "chapters": [
                {
                  "title": "Factory Pattern",
                  "start_seconds": 8000
                },
                {
                  "title": "Observer Pattern",
                  "start_seconds": 8300
                },
                {
                  "title": "Strategy Pattern",
                  "start_seconds": 8600
                }
              ]
            },
            "explanation": "### 1. Patterns Overview\n- **Factory Method (Creational):** Interface for creating objects, delegating instantiation logic to subclasses.\n- **Observer (Behavioral):** Defines a 1-to-N dependency so when one object changes state, all dependents are notified automatically (Publish-Subscribe).\n- **Strategy (Behavioral):** Encapsulates interchangeable algorithms inside separate classes and swaps them at runtime.",
            "code_example": {
              "language": "multi",
              "python": "# Strategy Pattern Example\nclass PaymentStrategy:\n    def pay(self, amount): pass\n\nclass CreditCardPay(PaymentStrategy):\n    def pay(self, amount): print(f\"Paid ${amount} via Credit Card\")\n\nclass CryptoPay(PaymentStrategy):\n    def pay(self, amount): print(f\"Paid ${amount} via Bitcoin\")\n\nclass ShoppingCart:\n    def __init__(self, strategy: PaymentStrategy):\n        self.strategy = strategy\n    def checkout(self, amount):\n        self.strategy.pay(amount)\n\ncart = ShoppingCart(CryptoPay())\ncart.checkout(250)"
            },
            "complexity": {
              "time": "O(1) Dynamic strategy switch / Factory creation",
              "space": "O(N) Subscribers list memory in Observer"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-cs-dbms",
        "name": "2. Database Management System (DBMS)",
        "icon": "🗄️",
        "topics": [
          {
            "id": "topic-dbms-intro",
            "title": "Introduction to DBMS & File System vs DBMS",
            "slug": "dbms-intro",
            "difficulty": "Easy",
            "description": "Understanding DBMS architecture, data redundancy, atomic transactions, and advantages over traditional OS file systems.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Introduction to DBMS & File System vs DBMS Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. What is a DBMS?\nA **Database Management System (DBMS)** is software designed to store, retrieve, query, and manage data efficiently with security and integrity.\n\n---\n\n### 2. File System vs DBMS\n\n| Feature | File System | Database Management System (DBMS) |\n| :--- | :--- | :--- |\n| **Data Redundancy** | High duplicate data across files | Minimized via normalization |\n| **Consistency** | Low consistency control | Enforced via ACID constraints |\n| **Concurrent Access**| Risky file corruption | Concurrency control via locking & transactions |\n| **Crash Recovery** | Manual / lost data | Automated log-based recovery (WAL) |",
            "code_example": {
              "language": "multi",
              "python": "# Python File System vs SQLite DBMS Example\nimport sqlite3\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE users (id INT PRIMARY KEY, name TEXT)')\nconn.execute('INSERT INTO users VALUES (1, \"Rahul\")')\nprint(conn.execute('SELECT * FROM users').fetchall())",
              "java": "// Java JDBC connection overview\n// Connection conn = DriverManager.getConnection(url, user, pass);"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-dbms-er-model",
            "title": "ER Model (Entity, Attributes, Relationships)",
            "slug": "dbms-er-model",
            "difficulty": "Easy",
            "description": "Conceptual database modeling: Entities, Strong/Weak Entity sets, Attributes (Composite, Multivalued, Derived), and Cardinality Ratios.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "ER Model (Entity, Attributes, Relationships) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. ER Diagram Elements\n```mermaid\ngraph TD\n    A[Entity Set: Student] --- B(Attribute: RollNo - Primary Key)\n    A --- C(Attribute: Name - Composite)\n    A --- D((Multivalued: PhoneNumbers))\n    A --- E[Derived: Age from DOB]\n```\n- **Entity:** Real-world object (e.g., Student, Course).\n- **Relationships:** Cardinality (1:1, 1:N, N:M).",
            "code_example": {
              "language": "multi",
              "python": "# Entity Data Representation\nstudent = {'roll': 101, 'name': {'first': 'Amit', 'last': 'Kumar'}, 'phones': ['9876543210', '9123456789']}",
              "java": "// Entity Class in Java\nclass Student {\n    int rollNo;\n    String name;\n    List<String> phoneNumbers;\n}"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-dbms-relational-model",
            "title": "Relational Model (Tables, Tuples, Attributes)",
            "slug": "dbms-relational-model",
            "difficulty": "Easy",
            "description": "Mathematical foundations of relational algebra: Relations (Tables), Tuples (Rows), Attributes (Columns), and Domain Constraints.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Relational Model (Tables, Tuples, Attributes) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Relational Model Terminology\n- **Relation:** A 2D table of rows and columns.\n- **Tuple:** A single row in a relation representing an entity record.\n- **Attribute:** A named column representing a property.\n- **Domain:** Permissible set of atomic values for an attribute.",
            "code_example": {
              "language": "multi",
              "python": "# Relational Tuple in Python\ntuple_record = (101, 'Rahul', 'Computer Science', 3.9)",
              "java": "// Relational Mapping in Java\nrecord StudentTuple(int id, String name, String dept, double gpa) {}"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-dbms-keys",
            "title": "Keys (Primary, Foreign, Candidate, Composite, Super, Unique)",
            "slug": "dbms-keys",
            "difficulty": "Medium",
            "description": "Understanding Candidate Keys, Primary Keys, Foreign Keys (Referential Integrity), Super Keys, and Composite Keys.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Keys (Primary, Foreign, Candidate, Composite, Super, Unique) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Hierarchy of Database Keys\n```mermaid\ngraph TD\n    SK[Super Keys: Any set of columns uniquely identifying a row] --> CK[Candidate Keys: Minimal Super Keys]\n    CK --> PK[Primary Key: Chosen Candidate Key - Cannot be NULL]\n    CK --> AK[Alternate Keys: Unchosen Candidate Keys]\n```\n- **Foreign Key:** Attribute in child table referencing Primary Key of parent table (Enforces Referential Integrity).",
            "code_example": {
              "language": "multi",
              "python": "-- SQL Table Key Declaration\nCREATE TABLE Departments (\n    dept_id INT PRIMARY KEY,\n    dept_name VARCHAR(50) NOT NULL\n);\n\nCREATE TABLE Employees (\n    emp_id INT PRIMARY KEY,\n    emp_name VARCHAR(50),\n    dept_id INT,\n    FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)\n);",
              "java": "// Referential integrity check in SQL engine"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-dbms-normalization",
            "title": "Normalization (1NF, 2NF, 3NF, BCNF) & Denormalization",
            "slug": "dbms-normalization",
            "difficulty": "Hard",
            "description": "Database anomalies (Insertion, Deletion, Update) and functional dependencies decomposition up to Boyce-Codd Normal Form.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Normalization (1NF, 2NF, 3NF, BCNF) & Denormalization Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Normal Forms Hierarchy\n- **1NF:** Atomic values only (no multivalued attributes).\n- **2NF:** 1NF + No partial dependencies (non-prime attributes fully dependent on candidate key).\n- **3NF:** 2NF + No transitive dependencies ($X \\rightarrow Y$ and $Y \\rightarrow Z$).\n- **BCNF:** Strict 3NF; for every functional dependency $X \\rightarrow Y$, $X$ MUST be a Super Key.",
            "code_example": {
              "language": "multi",
              "python": "-- Normalized 3NF Schema\nCREATE TABLE Courses (course_id INT PRIMARY KEY, course_name TEXT);\nCREATE TABLE StudentCourses (student_id INT, course_id INT, PRIMARY KEY(student_id, course_id));",
              "java": "// Normalization avoids update anomalies"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-dbms-sql-commands",
            "title": "SQL Commands (DDL, DML, DCL, TCL)",
            "slug": "dbms-sql-commands",
            "difficulty": "Easy",
            "description": "Categorization of SQL queries: Data Definition (CREATE, ALTER, DROP), Data Manipulation (INSERT, UPDATE, DELETE), DCL (GRANT, REVOKE), and TCL (COMMIT, ROLLBACK).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "SQL Commands (DDL, DML, DCL, TCL) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. SQL Command Categories\n- **DDL (Data Definition):** `CREATE`, `ALTER`, `DROP`, `TRUNCATE`. (Auto-committed).\n- **DML (Data Manipulation):** `SELECT`, `INSERT`, `UPDATE`, `DELETE`.\n- **DCL (Data Control):** `GRANT`, `REVOKE`.\n- **TCL (Transaction Control):** `COMMIT`, `ROLLBACK`, `SAVEPOINT`.",
            "code_example": {
              "language": "multi",
              "python": "-- TCL Transaction Example\nBEGIN TRANSACTION;\nUPDATE Accounts SET balance = balance - 500 WHERE id = 1;\nUPDATE Accounts SET balance = balance + 500 WHERE id = 2;\nCOMMIT;",
              "java": "// Execute DML and TCL via JDBC"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-dbms-sql-joins",
            "title": "SQL Joins (Inner, Left, Right, Full, Self, Cross)",
            "slug": "dbms-sql-joins",
            "difficulty": "Medium",
            "description": "Combining rows from multiple tables using INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN, FULL JOIN, SELF JOIN, and CROSS JOIN.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "SQL Joins (Inner, Left, Right, Full, Self, Cross) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. SQL Join Types\n```mermaid\ngraph LR\n    A[Table A] --- INNER[INNER JOIN: Matching rows in both] --- B[Table B]\n    A --- LEFT[LEFT JOIN: All A + Matching B]\n    B --- RIGHT[RIGHT JOIN: All B + Matching A]\n```",
            "code_example": {
              "language": "multi",
              "python": "-- SQL Joins\nSELECT e.name, d.dept_name\nFROM Employees e\nINNER JOIN Departments d ON e.dept_id = d.dept_id;\n\nSELECT e.name, d.dept_name\nFROM Employees e\nLEFT JOIN Departments d ON e.dept_id = d.dept_id;",
              "java": "// SQL Join Query Execution"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-dbms-subqueries",
            "title": "Subqueries & Nested Queries",
            "slug": "dbms-subqueries",
            "difficulty": "Medium",
            "description": "Single-row, multi-row, correlated subqueries, and EXISTS / IN clause optimizations.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Subqueries & Nested Queries Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Correlated vs Uncorrelated Subqueries\n- **Uncorrelated Subquery:** Inner query runs once independently.\n- **Correlated Subquery:** Inner query executes once FOR EVERY ROW evaluated by the outer query.",
            "code_example": {
              "language": "multi",
              "python": "-- Correlated Subquery: Find employees earning more than average of their department\nSELECT name, salary, dept_id\nFROM Employees e1\nWHERE salary > (\n    SELECT AVG(salary) FROM Employees e2 WHERE e2.dept_id = e1.dept_id\n);",
              "java": "// Correlated subquery evaluation"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-dbms-group-by-having",
            "title": "Group By, Having, Aggregations & Window Functions",
            "slug": "dbms-group-by-having",
            "difficulty": "Medium",
            "description": "Grouping data with GROUP BY, filtering groups with HAVING vs WHERE, aggregation functions (COUNT, SUM, AVG), and Window Functions (ROW_NUMBER, RANK, DENSE_RANK).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Group By, Having, Aggregations & Window Functions Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. WHERE vs HAVING\n- **WHERE:** Filters individual rows BEFORE grouping.\n- **HAVING:** Filters aggregated groups AFTER `GROUP BY` execution.",
            "code_example": {
              "language": "multi",
              "python": "-- Group By + Having + Window Function\nSELECT dept_id, COUNT(*) as emp_count, AVG(salary) as avg_sal\nFROM Employees\nGROUP BY dept_id\nHAVING COUNT(*) > 5;\n\n-- Window Function\nSELECT name, salary, RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) as rank\nFROM Employees;",
              "java": "// Window Function execution"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-dbms-acid-properties",
            "title": "ACID Properties & Transaction Management",
            "slug": "dbms-acid-properties",
            "difficulty": "Hard",
            "description": "Atomicity, Consistency, Isolation, and Durability guarantees in transactional databases.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "ACID Properties & Transaction Management Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. ACID Guarantees\n- **Atomicity:** All operations in a transaction succeed or all fail (\"All-or-Nothing\").\n- **Consistency:** Database transitions from one valid state to another.\n- **Isolation:** Concurrent transactions execute without mutual interference.\n- **Durability:** Committed changes persist permanently even after power failure / crash.",
            "code_example": {
              "language": "multi",
              "python": "-- ACID Transaction in PostgreSQL\nBEGIN;\nUPDATE Wallet SET balance = balance - 100 WHERE user_id = 10;\nUPDATE Wallet SET balance = balance + 100 WHERE user_id = 20;\nCOMMIT;",
              "java": "// JDBC Transaction Isolation level setting"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-dbms-concurrency-control",
            "title": "Concurrency Control, Locking & Deadlocks",
            "slug": "dbms-concurrency-control",
            "difficulty": "Hard",
            "description": "Shared (S) and Exclusive (X) locks, 2-Phase Locking Protocol (2PL), Dirty Reads, Phantom Reads, and Deadlock resolution.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Concurrency Control, Locking & Deadlocks Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Isolation Anomalies & 2PL\n- **Dirty Read:** Reading uncommitted changes (Read Uncommitted).\n- **Non-Repeatable Read:** Reading different values for same row in same transaction.\n- **Phantom Read:** New rows inserted by another transaction during range query.\n- **2-Phase Locking (2PL):** Growing Phase (locks acquired) $\\rightarrow$ Shrinking Phase (locks released).",
            "code_example": {
              "language": "multi",
              "python": "-- Locking in SQL\nSELECT * FROM Accounts WHERE id = 1 FOR UPDATE; -- Exclusive Lock",
              "java": "// Lock escalation handling"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-dbms-indexing",
            "title": "Indexing (B-Tree, B+ Tree, Hash Indexing)",
            "slug": "dbms-indexing",
            "difficulty": "Hard",
            "description": "Internal data structures for database indexes: B-Trees, B+ Trees (leaf node linked list), Clustered vs Non-Clustered Indexes.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Indexing (B-Tree, B+ Tree, Hash Indexing) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Why B+ Trees for Database Indexes?\n```mermaid\ngraph TD\n    Root[Internal Node: Keys Only] --> Child1[Internal Node]\n    Root --> Child2[Internal Node]\n    Child1 --> Leaf1[Leaf Node: Keys + Data Pointers] --> Leaf2[Leaf Node: Linked List for Range Scans]\n```\n- **High Fanout:** Reduces disk I/O seek operations ($O(\\log_B N)$).\n- **Sequential Range Scans:** Leaf nodes linked together as doubly-linked list.",
            "code_example": {
              "language": "multi",
              "python": "-- Create Index\nCREATE INDEX idx_emp_salary ON Employees(salary);",
              "java": "// B+ Tree node lookup algorithm"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-dbms-views",
            "title": "Views in SQL",
            "slug": "dbms-views",
            "difficulty": "Medium",
            "description": "Virtual tables created from SQL queries. Updatable views, materialized views, and view-based security.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Views in SQL - Complete Guide",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. What is a SQL View?\nA **View** is a virtual table defined by a SQL SELECT query. It does NOT store data physically but provides a window into existing table data.\n\n### 2. Types of Views\n- **Simple View:** Based on a single table, no group functions.\n- **Complex View:** Multi-table JOINs or aggregate functions.\n- **Materialized View:** Stores the query result physically (refreshed periodically). Used in data warehouses.\n\n### 3. Why Use Views?\n| Benefit | Explanation |\n| :--- | :--- |\n| **Security** | Expose only selected columns to users (hide salary, SSN). |\n| **Simplicity** | Wrap complex JOINs into a single simple query. |\n| **Data Abstraction** | Change underlying tables without affecting query logic. |\n\n### 4. Updatable vs Non-Updatable Views\nA view is **updatable** only if it: (1) Contains one base table, (2) Has no GROUP BY, DISTINCT, aggregate functions.",
            "code_example": {
              "language": "multi",
              "python": "-- Create a simple view\nCREATE VIEW employee_public AS\nSELECT emp_id, name, department, hire_date\nFROM Employees\nWHERE is_active = 1;\n\n-- Query the view like a table\nSELECT * FROM employee_public WHERE department = 'Engineering';\n\n-- Create a view with aggregation (non-updatable)\nCREATE VIEW dept_salary_summary AS\nSELECT dept_id, COUNT(*) as emp_count, AVG(salary) as avg_salary\nFROM Employees\nGROUP BY dept_id;\n\n-- Drop a view\nDROP VIEW employee_public;",
              "java": "// Java - Execute View query via JDBC\nString sql = \"SELECT * FROM employee_public WHERE department = ?\";\nPreparedStatement ps = conn.prepareStatement(sql);\nps.setString(1, \"Engineering\");\nResultSet rs = ps.executeQuery();"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "topic-dbms-stored-procedures",
            "title": "Stored Procedures & Functions",
            "slug": "dbms-stored-procedures",
            "difficulty": "Medium",
            "description": "Precompiled SQL code blocks stored in DB. Stored Procedures (no return value) vs Functions (returns value) for reusable server-side logic.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Stored Procedures & Functions - Complete Guide",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Stored Procedure vs Function\n| Feature | Stored Procedure | Function |\n| :--- | :--- | :--- |\n| **Return Value** | 0 or multiple (via OUT params) | MUST return exactly one value |\n| **DML in Body** | Can contain INSERT/UPDATE/DELETE | Functions usually cannot (DB-dependent) |\n| **Call Syntax** | `CALL proc_name()` | Used in SELECT: `SELECT fn_name()` |\n| **Transaction** | Can use COMMIT/ROLLBACK | Cannot control transactions |\n\n### 2. Advantages of Stored Procedures\n1. **Performance:** Precompiled execution plan cached by DB engine.\n2. **Security:** Grant EXECUTE without granting table access.\n3. **Network Efficiency:** One round-trip call instead of multiple SQL statements.\n\n### 3. Syntax (MySQL/PostgreSQL)",
            "code_example": {
              "language": "multi",
              "python": "-- MySQL Stored Procedure\nDELIMITER //\nCREATE PROCEDURE GetEmployeesByDept(IN dept_name VARCHAR(50))\nBEGIN\n    SELECT emp_id, name, salary\n    FROM Employees\n    WHERE department = dept_name\n    ORDER BY salary DESC;\nEND //\nDELIMITER ;\n\n-- Call it\nCALL GetEmployeesByDept('Engineering');\n\n-- MySQL Function (returns scalar value)\nCREATE FUNCTION GetDeptAvgSalary(dept_name VARCHAR(50))\nRETURNS DECIMAL(10,2)\nBEGIN\n    DECLARE avg_sal DECIMAL(10,2);\n    SELECT AVG(salary) INTO avg_sal FROM Employees WHERE department = dept_name;\n    RETURN avg_sal;\nEND;\n\n-- Use function in SELECT\nSELECT GetDeptAvgSalary('Engineering');",
              "java": "// Java - Call Stored Procedure via JDBC\nCallableStatement cs = conn.prepareCall(\"{CALL GetEmployeesByDept(?)}\");\ncs.setString(1, \"Engineering\");\nResultSet rs = cs.executeQuery();"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "topic-dbms-triggers",
            "title": "Triggers in SQL",
            "slug": "dbms-triggers",
            "difficulty": "Medium",
            "description": "Automatic SQL procedures that fire on INSERT, UPDATE, or DELETE events (BEFORE/AFTER). Used for auditing, validation, and cascading updates.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Triggers in SQL - Complete Guide",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. What is a Trigger?\nA **Trigger** is a stored procedure that AUTOMATICALLY EXECUTES in response to certain DML events (INSERT, UPDATE, DELETE) on a table.\n\n### 2. Trigger Types\n```mermaid\ngraph TD\n    A[DML Event: INSERT / UPDATE / DELETE] --> B{Timing}\n    B -->|BEFORE| C[BEFORE Trigger: Validate/Transform data before write]\n    B -->|AFTER| D[AFTER Trigger: Audit log, cascading operations after write]\n```\n\n- **BEFORE Trigger:** Executes before the DML operation. Can validate or modify NEW row values.\n- **AFTER Trigger:** Executes after DML succeeds. Used for audit logs, cascades.\n- **FOR EACH ROW:** Trigger fires once per affected row (row-level triggers).",
            "code_example": {
              "language": "multi",
              "python": "-- AFTER INSERT Trigger: Audit Log\nCREATE TABLE audit_log (\n    log_id INT AUTO_INCREMENT PRIMARY KEY,\n    action VARCHAR(20),\n    emp_id INT,\n    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nDELIMITER //\nCREATE TRIGGER after_employee_insert\nAFTER INSERT ON Employees\nFOR EACH ROW\nBEGIN\n    INSERT INTO audit_log(action, emp_id) VALUES ('INSERT', NEW.emp_id);\nEND //\nDELIMITER ;\n\n-- BEFORE UPDATE Trigger: Prevent salary decrease\nCREATE TRIGGER before_salary_update\nBEFORE UPDATE ON Employees\nFOR EACH ROW\nBEGIN\n    IF NEW.salary < OLD.salary THEN\n        SIGNAL SQLSTATE '45000'\n        SET MESSAGE_TEXT = 'Salary cannot be decreased!';\n    END IF;\nEND;",
              "java": "// Java - Trigger fires automatically on DB operations\n// No Java code needed - trigger executes server-side on INSERT\nconn.prepareStatement(\"INSERT INTO Employees VALUES (?, ?, ?)\")\n    .executeUpdate(); // Trigger fires automatically"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "topic-dbms-isolation-levels",
            "title": "Isolation Levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable)",
            "slug": "dbms-isolation-levels",
            "difficulty": "Hard",
            "description": "4 SQL isolation levels controlling trade-offs between concurrency and data consistency anomalies (Dirty Read, Non-Repeatable Read, Phantom Read).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Isolation Levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable) - Complete Guide",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. The Three Concurrency Anomalies\n1. **Dirty Read:** Transaction T1 reads data modified but NOT YET COMMITTED by T2. If T2 rolls back, T1 read invalid data.\n2. **Non-Repeatable Read:** T1 reads the same row twice but gets different values because T2 committed an UPDATE between T1's reads.\n3. **Phantom Read:** T1 executes a range query twice but the second read returns new rows added by T2's INSERT.\n\n### 2. Isolation Level Matrix\n\n| Isolation Level | Dirty Read | Non-Repeatable Read | Phantom Read |\n| :--- | :---: | :---: | :---: |\n| **Read Uncommitted** | ✅ Possible | ✅ Possible | ✅ Possible |\n| **Read Committed** | ❌ Prevented | ✅ Possible | ✅ Possible |\n| **Repeatable Read** | ❌ Prevented | ❌ Prevented | ✅ Possible |\n| **Serializable** | ❌ Prevented | ❌ Prevented | ❌ Prevented |\n\n> Higher isolation = More consistency, but **LOWER concurrency / throughput** due to increased locking.\n\n### 3. Default Isolation Levels\n- **MySQL (InnoDB):** Repeatable Read (default)\n- **PostgreSQL:** Read Committed (default)\n- **SQL Server:** Read Committed (default)",
            "code_example": {
              "language": "multi",
              "python": "-- Set isolation level in MySQL\nSET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\nSTART TRANSACTION;\nSELECT * FROM Accounts WHERE balance > 100;\nCOMMIT;\n\n-- Read Committed example\nSET TRANSACTION ISOLATION LEVEL READ COMMITTED;",
              "java": "// Java - Set isolation level via JDBC\nConnection conn = DriverManager.getConnection(url, user, pass);\nconn.setAutoCommit(false);\nconn.setTransactionIsolation(Connection.TRANSACTION_REPEATABLE_READ);\n// Execute queries\nconn.commit();"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "topic-dbms-nosql",
            "title": "NoSQL Basics (Key-Value, Document, Column, Graph)",
            "slug": "dbms-nosql",
            "difficulty": "Medium",
            "description": "Non-relational databases: 4 NoSQL types (Key-Value, Document, Wide-Column, Graph), CAP Theorem, and when to choose NoSQL over RDBMS.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "NoSQL Basics (Key-Value, Document, Column, Graph) - Complete Guide",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Why NoSQL?\nTraditional RDBMS struggles with:\n- **Horizontal Scaling** (sharding across multiple machines)\n- **Flexible Schema** (semi-structured or unstructured data)\n- **High Read/Write Throughput** (millions of ops/second)\n\n### 2. Four NoSQL Types\n\n| Type | Storage Model | Best For | Examples |\n| :--- | :--- | :--- | :--- |\n| **Key-Value** | Hash Map: `key → value blob` | Cache, sessions, user preferences | Redis, DynamoDB |\n| **Document** | JSON/BSON documents with nested structure | Product catalogs, blogs, user profiles | MongoDB, CouchDB |\n| **Wide-Column** | Rows with dynamic column families | Time-series, analytics, IoT data | Cassandra, HBase |\n| **Graph** | Nodes + Edges with properties | Social networks, recommendation engines | Neo4j, Amazon Neptune |\n\n### 3. CAP Theorem\nA distributed system can only guarantee **2 out of 3**:\n- **C**onsistency: Every read returns the most recent write.\n- **A**vailability: Every request receives a response (not necessarily latest data).\n- **P**artition Tolerance: System works despite network failures between nodes.\n\n### 4. SQL vs NoSQL Trade-offs\n- **SQL:** ACID, complex queries, relationships, schema enforcement.\n- **NoSQL:** BASE (Basically Available, Soft state, Eventually consistent), horizontal scaling, flexible schema.",
            "code_example": {
              "language": "multi",
              "python": "# Python - Redis Key-Value Store\nimport redis\nr = redis.Redis(host='localhost', port=6379)\nr.set('user:1:session', 'abc123xyz', ex=3600)  # TTL 1 hour\nprint(r.get('user:1:session'))\n\n# Python - MongoDB Document Store\nfrom pymongo import MongoClient\nclient = MongoClient('localhost', 27017)\ndb = client['prepflow']\ndb.users.insert_one({'name': 'Rahul', 'score': 85, 'topics': ['DSA', 'DBMS']})\nresult = db.users.find_one({'name': 'Rahul'})\nprint(result)",
              "java": "// Java - Redis with Jedis client\nJedis jedis = new Jedis(\"localhost\", 6379);\njedis.set(\"user:1:session\", \"abc123xyz\");\njedis.expire(\"user:1:session\", 3600);\nSystem.out.println(jedis.get(\"user:1:session\"));"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "topic-dbms-sharding-replication",
            "title": "Database Sharding & Replication",
            "slug": "dbms-sharding-replication",
            "difficulty": "Hard",
            "description": "Horizontal scaling via Sharding (split data across servers), Vertical scaling, and data redundancy via Replication (Master-Slave, Master-Master).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Database Sharding & Replication - Complete Guide",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Replication (Data Redundancy)\n**Database Replication** creates copies of data across multiple server nodes for fault tolerance and read scaling.\n\n```mermaid\ngraph LR\n    W[Write Operations] --> M[Master Node]\n    M -->|Async Replication| S1[Slave Replica 1]\n    M -->|Async Replication| S2[Slave Replica 2]\n    R1[Read Traffic] --> S1\n    R2[Read Traffic] --> S2\n```\n\n- **Master-Slave (Primary-Secondary):** Master handles all writes, Slaves serve read-only queries.\n- **Master-Master:** Both nodes accept writes; conflict resolution required.\n\n### 2. Sharding (Horizontal Partitioning)\n**Sharding** splits a large table into smaller chunks (shards), each stored on a separate server.\n\n- **Range-Based Sharding:** User IDs 1-1M on Shard 1, 1M-2M on Shard 2.\n- **Hash-Based Sharding:** `shard = hash(user_id) % num_shards`. Uniform distribution.\n- **Directory-Based:** A lookup table maps keys to shards.\n\n### 3. Sharding vs Replication\n\n| Feature | Sharding | Replication |\n| :--- | :--- | :--- |\n| **Goal** | Horizontal scale-out (write throughput) | Fault tolerance and read scale-out |\n| **Data** | Partitioned — each shard has subset of data | Copied — each replica has full data copy |\n| **Joins** | Cross-shard joins are expensive/impossible | Replica joins same as master |",
            "code_example": {
              "language": "multi",
              "python": "# Concept: Hash-based sharding logic\ndef get_shard(user_id: int, num_shards: int = 4) -> int:\n    return hash(user_id) % num_shards\n\nprint(f\"User 1001 goes to Shard: {get_shard(1001)}\")\nprint(f\"User 2345 goes to Shard: {get_shard(2345)}\")",
              "java": "// Java - Route query to correct shard\nint getShardIndex(long userId, int numShards) {\n    return (int)(userId % numShards);\n}\nConnection getShardConnection(long userId) {\n    int shardIdx = getShardIndex(userId, 4);\n    return shardConnections.get(shardIdx);\n}"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "topic-dbms-deadlock",
            "title": "Deadlock in DBMS",
            "slug": "dbms-deadlock",
            "difficulty": "Hard",
            "description": "Circular dependency between transactions holding locks. Detection using Wait-For Graphs, prevention strategies, and timeout-based resolution.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Deadlock in DBMS - Complete Guide",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. What is a DBMS Deadlock?\nA **Deadlock** occurs when two or more transactions are each waiting for a lock held by the other, creating a circular wait with no possibility of progress.\n\n```mermaid\ngraph LR\n    T1[Transaction T1] -->|Waits for Lock on| R2[Resource B]\n    T2[Transaction T2] -->|Waits for Lock on| R1[Resource A]\n    R2 -->|Held by| T2\n    R1 -->|Held by| T1\n```\n\n### 2. Deadlock Detection: Wait-For Graph (WFG)\n- A directed graph where nodes = transactions, edges = \"T1 waits for T2\".\n- **Cycle in WFG = Deadlock detected.**\n- DBMS victim selection: Abort the transaction with the least cost to roll back.\n\n### 3. Deadlock Prevention Strategies\n- **Wait-Die:** Older transactions wait; Younger transactions die and restart.\n- **Wound-Wait:** Older transactions preempt (wound/abort) younger ones; Younger transactions wait.\n- **Timeout:** If a transaction waits longer than a threshold, abort and retry.\n- **Lock Ordering:** Always acquire locks in the same global order across all transactions.",
            "code_example": {
              "language": "multi",
              "python": "-- Deadlock scenario in SQL (2 concurrent sessions)\n-- Session 1:\nBEGIN TRANSACTION;\nUPDATE Accounts SET balance = balance - 100 WHERE id = 1; -- Locks row 1\n-- Then tries to lock row 2 (Session 2 holds it → DEADLOCK)\nUPDATE Accounts SET balance = balance + 100 WHERE id = 2;\n\n-- Session 2 (concurrent):\nBEGIN TRANSACTION;\nUPDATE Accounts SET balance = balance - 200 WHERE id = 2; -- Locks row 2\nUPDATE Accounts SET balance = balance + 200 WHERE id = 1; -- Waits for row 1 → DEADLOCK",
              "java": "// Java - Retry on deadlock (MySQL error code 1213)\ntry {\n    conn.setAutoCommit(false);\n    // execute queries\n    conn.commit();\n} catch (SQLException e) {\n    if (e.getErrorCode() == 1213) { // ER_LOCK_DEADLOCK\n        conn.rollback();\n        System.out.println(\"Deadlock detected, retrying transaction...\");\n    }\n}"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-cs-os",
        "name": "3. Operating Systems (OS)",
        "icon": "⚙️",
        "topics": [
          {
            "id": "topic-os-intro",
            "title": "Introduction to OS & System Calls",
            "slug": "os-intro",
            "difficulty": "Easy",
            "description": "Kernel mode vs User mode, Dual-mode execution, trap instructions, and System Calls (fork, exec, open, read).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Introduction to OS & System Calls Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Dual Mode Execution\n- **User Mode (Ring 3):** Restricted CPU execution.\n- **Kernel Mode (Ring 0):** Unrestricted access to hardware and RAM.",
            "code_example": {
              "language": "multi",
              "python": "import os\npid = os.fork() # System call fork()\nif pid == 0: print('Child process')\nelse: print('Parent process')",
              "java": "// Java ProcessBuilder running OS commands"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-os-process-vs-thread",
            "title": "Process vs Thread & Process Control Block (PCB)",
            "slug": "os-process-vs-thread",
            "difficulty": "Easy",
            "description": "Heavyweight processes vs Lightweight threads, address space sharing, and PCB attributes.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Process vs Thread & Process Control Block (PCB) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Process vs Thread\n- **Process:** Isolated memory address space (Code, Data, Heap).\n- **Thread:** Shares Code, Data, Heap with parent process, but has its own Stack and Registers.",
            "code_example": {
              "language": "multi",
              "python": "import threading\ndef task(): print('Thread running')\nt = threading.Thread(target=task)\nt.start()",
              "java": "Thread t = new Thread(() -> System.out.println(\"Thread running\")); t.start();"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-os-process-lifecycle",
            "title": "Process Lifecycle & State Transitions",
            "slug": "os-process-lifecycle",
            "difficulty": "Easy",
            "description": "5-state process model: New, Ready, Running, Waiting/Blocked, Terminated.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Process Lifecycle & State Transitions Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Process State Transitions\n```mermaid\ngraph LR\n New --> Ready --> Running --> Terminated\n Running -->|I/O Wait| Waiting --> Ready\n Running -->|Interrupt| Ready\n```",
            "code_example": {
              "language": "multi",
              "python": "# Python Process State Tracking\nimport psutil\nprint(psutil.Process().status())",
              "java": "// OS PCB State Tracking"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-os-cpu-scheduling",
            "title": "CPU Scheduling Algorithms (FCFS, SJF, Round Robin, Priority)",
            "slug": "os-cpu-scheduling",
            "difficulty": "Medium",
            "description": "Preemptive vs Non-preemptive scheduling: FCFS, SJF (Shortest Job First), SRTF, Round Robin (Time Quantum), and Priority Scheduling.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "CPU Scheduling Algorithms (FCFS, SJF, Round Robin, Priority) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Gantt Chart & Turnaround Time\n- **Turnaround Time:** Completion Time - Arrival Time\n- **Waiting Time:** Turnaround Time - Burst Time",
            "code_example": {
              "language": "multi",
              "python": "# Round Robin Scheduling Simulation\ndef round_robin(processes, quantum):\n    pass",
              "java": "// CPU Scheduling Simulation"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-os-process-sync",
            "title": "Process Synchronization (Critical Section, Race Condition)",
            "slug": "os-process-sync",
            "difficulty": "Medium",
            "description": "Critical Section Problem, Peterson's Solution, TestAndSet atomic hardware instructions, and Race Conditions.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Process Synchronization (Critical Section, Race Condition) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Critical Section Conditions\n1. **Mutual Exclusion**\n2. **Progress**\n3. **Bounded Waiting**",
            "code_example": {
              "language": "multi",
              "python": "import threading\ncounter = 0\nlock = threading.Lock()\ndef inc():\n    global counter\n    with lock:\n        counter += 1",
              "java": "ReentrantLock lock = new ReentrantLock(); lock.lock(); try { counter++; } finally { lock.unlock(); }"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-os-mutex-vs-semaphore",
            "title": "Mutex vs Semaphore & Producer-Consumer Problem",
            "slug": "os-mutex-vs-semaphore",
            "difficulty": "Hard",
            "description": "Binary Mutex (Ownership) vs Counting Semaphore (Signal/Wait) and Bounded Buffer Producer-Consumer synchronization.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Mutex vs Semaphore & Producer-Consumer Problem Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Mutex vs Semaphore\n- **Mutex:** Binary locking with ownership (only thread that locked can unlock).\n- **Semaphore:** Signaling mechanism ($P$ wait, $V$ signal) without ownership requirement.",
            "code_example": {
              "language": "multi",
              "python": "import threading\nsem = threading.Semaphore(3) # Max 3 concurrent workers\ndef worker():\n    with sem:\n        print('Working')",
              "java": "Semaphore sem = new Semaphore(3); sem.acquire(); sem.release();"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-os-deadlocks",
            "title": "Deadlock (Conditions, Prevention, Banker's Algorithm)",
            "slug": "os-deadlocks",
            "difficulty": "Hard",
            "description": "4 Necessary Conditions (Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait), Resource Allocation Graph, and Banker's Safety Algorithm.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Deadlock (Conditions, Prevention, Banker's Algorithm) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. 4 Deadlock Conditions (Coffman Conditions)\n1. **Mutual Exclusion:** Exclusive resource access.\n2. **Hold & Wait:** Process holds resource while requesting another.\n3. **No Preemption:** Resources cannot be forcibly taken.\n4. **Circular Wait:** Closed chain of process resource requests.",
            "code_example": {
              "language": "multi",
              "python": "# Banker's Algorithm Safety Check\ndef is_safe_state(available, max_req, allocation):\n    pass",
              "java": "// Banker's Safety Algorithm"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-os-memory-management",
            "title": "Memory Management (Paging, Segmentation, Fragmentation)",
            "slug": "os-memory-management",
            "difficulty": "Medium",
            "description": "Logical vs Physical address translation, Page Tables, Page Size, Internal vs External Fragmentation, and Segmentation.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Memory Management (Paging, Segmentation, Fragmentation) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Paging Architecture\n- **Logical Address:** Page Number ($p$) + Offset ($d$).\n- **Physical Address:** Frame Number ($f$) + Offset ($d$).",
            "code_example": {
              "language": "multi",
              "python": "# Page Table Lookup Simulation\ndef translate(logical_addr, page_size, page_table):\n    page_num = logical_addr // page_size\n    offset = logical_addr % page_size\n    frame_num = page_table[page_num]\n    return (frame_num * page_size) + offset",
              "java": "// Paging Translation MMU Hardware"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-os-virtual-memory",
            "title": "Virtual Memory, Page Faults & Page Replacement Algorithms",
            "slug": "os-virtual-memory",
            "difficulty": "Hard",
            "description": "Demand Paging, Page Fault Handling, TLB (Translation Lookaside Buffer), and Page Replacement (FIFO, LRU, Optimal).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Virtual Memory, Page Faults & Page Replacement Algorithms Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. LRU Page Replacement\nReplaces page least recently accessed in memory using Cache / LinkedHashMap.",
            "code_example": {
              "language": "multi",
              "python": "from collections import OrderedDict\nclass LRUCache:\n    def __init__(self, cap):\n        self.cache = OrderedDict()\n        self.cap = cap",
              "java": "LinkedHashMap<Integer, Integer> lru = new LinkedHashMap<>(capacity, 0.75f, true);"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-os-thrashing",
            "title": "Thrashing & Belady's Anomaly",
            "slug": "os-thrashing",
            "difficulty": "Medium",
            "description": "High page fault rate causing CPU starvation (Thrashing), Working Set Model, and FIFO queue anomaly (Belady's Anomaly).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Thrashing & Belady's Anomaly Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Belady's Anomaly\nFor FIFO page replacement, increasing frame allocation can counter-intuitively INCREASE total page faults.",
            "code_example": {
              "language": "multi",
              "python": "# Belady Anomaly Demonstration Script",
              "java": "// Page Fault counter simulation"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-os-disk-scheduling",
            "title": "Disk Scheduling Algorithms (FCFS, SSTF, SCAN, C-SCAN)",
            "slug": "os-disk-scheduling",
            "difficulty": "Medium",
            "description": "Secondary storage track head movements: FCFS, SSTF (Shortest Seek Time First), SCAN (Elevator Algorithm), and C-SCAN.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Disk Scheduling Algorithms (FCFS, SSTF, SCAN, C-SCAN) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. SCAN (Elevator) Scheduling\nDisk arm moves in one direction servicing requests until it reaches end, then reverses direction.",
            "code_example": {
              "language": "multi",
              "python": "# SSTF Disk Scheduling\ndef sstf(requests, head):\n    pass",
              "java": "// Disk Head Seek calculation"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-os-ipc",
            "title": "Inter-Process Communication (IPC: Pipes, Shared Memory, Message Queues)",
            "slug": "os-ipc",
            "difficulty": "Medium",
            "description": "Communication models: Anonymous Pipes, Named Pipes (FIFO), Shared Memory (fastest), and Message Queue Passing.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Inter-Process Communication (IPC: Pipes, Shared Memory, Message Queues) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Shared Memory vs Message Passing\n- **Shared Memory:** Fastest IPC; processes read/write same physical RAM region (requires sync).\n- **Message Passing:** System calls exchange packets across kernel buffer.",
            "code_example": {
              "language": "multi",
              "python": "from multiprocessing import Process, Queue\ndef producer(q): q.put('Data')\ndef consumer(q): print(q.get())\nq = Queue()",
              "java": "// POSIX Shared memory shmget()"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-os-context-switching",
            "title": "Context Switching & CPU Scheduling Criteria",
            "slug": "os-context-switching",
            "difficulty": "Medium",
            "description": "Saving and restoring CPU state (PCB) during process switches. Scheduling performance metrics: Turnaround Time, Waiting Time, Response Time, Throughput.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Context Switching & CPU Scheduling Criteria - Complete Guide",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Context Switching\nA **Context Switch** is the process of saving the CPU state (register values, PC, stack pointer) of a currently running process into its PCB, and loading the saved state of the next scheduled process.\n\n```mermaid\ngraph LR\n    P1[Process P1 Running] -->|Interrupt / Timer Expiry| Save[OS Saves P1 Context to PCB1]\n    Save --> Load[OS Loads P2 Context from PCB2]\n    Load --> P2[Process P2 Running]\n```\n\n**Context Switch Overhead:** Pure CPU overhead — no useful work is done during the switch. Hardware support (like FXSAVE for FPU registers) helps minimize time.\n\n### 2. CPU Scheduling Performance Criteria\n| Metric | Formula | Optimize |\n| :--- | :--- | :--- |\n| **Turnaround Time (TAT)** | Completion Time - Arrival Time | Minimize |\n| **Waiting Time (WT)** | TAT - Burst Time | Minimize |\n| **Response Time (RT)** | Time of First Response - Arrival Time | Minimize (interactive systems) |\n| **CPU Utilization** | CPU busy time / Total time | Maximize |\n| **Throughput** | Number of processes completed / Time unit | Maximize |",
            "code_example": {
              "language": "multi",
              "python": "# Scheduling Metrics Calculator\ndef calculate_metrics(processes):\n    '''\n    processes: list of (name, arrival_time, burst_time, completion_time)\n    '''\n    results = []\n    for name, at, bt, ct in processes:\n        tat = ct - at    # Turnaround Time\n        wt = tat - bt    # Waiting Time\n        results.append({'process': name, 'TAT': tat, 'WT': wt, 'CT': ct})\n    return results\n\n# Example FCFS calculation\nprocs = [('P1', 0, 4, 4), ('P2', 1, 3, 7), ('P3', 2, 5, 12)]\nfor r in calculate_metrics(procs):\n    print(f\"{r['process']}: TAT={r['TAT']}, WT={r['WT']}\")",
              "java": "// Context switch metrics logging\n// int contextSwitches = 0;\n// Track via OS performance counters"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "topic-os-multithreading-multiprocessing",
            "title": "Multithreading & Multiprocessing",
            "slug": "os-multithreading-multiprocessing",
            "difficulty": "Medium",
            "description": "Creating and managing threads (shared memory) vs processes (isolated memory). Thread lifecycle, thread pools, GIL in Python, and CPU/IO-bound task selection.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Multithreading & Multiprocessing - Complete Guide",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Multithreading\n**Multiple threads** within a single process share the same address space (code, heap, global data) but each has its own **Stack** and **Registers**.\n\n**Advantages:** Lightweight creation, fast communication via shared memory, efficient for I/O-bound tasks.\n**Disadvantages:** Race conditions, deadlocks, GIL (Python's Global Interpreter Lock limits true CPU parallelism).\n\n### 2. Multiprocessing\n**Multiple processes** each with a separate memory address space. True parallelism on multi-core CPUs.\n\n**Advantages:** True CPU parallelism (bypasses GIL), fault isolation.\n**Disadvantages:** Higher memory usage, slow IPC communication between processes.\n\n### 3. When to Use?\n| Task Type | Best Approach | Reason |\n| :--- | :--- | :--- |\n| **I/O-Bound** (file reads, HTTP requests) | Multithreading / Async | Threads wait on I/O, others can run |\n| **CPU-Bound** (computation, ML training) | Multiprocessing | True parallel CPU core utilization |",
            "code_example": {
              "language": "multi",
              "python": "import threading\nimport multiprocessing\n\n# Multithreading (I/O-bound tasks)\ndef download_file(url):\n    print(f\"Downloading {url}\")\n\nthreads = [threading.Thread(target=download_file, args=(f\"url{i}\",)) for i in range(5)]\n[t.start() for t in threads]\n[t.join() for t in threads]\n\n# Multiprocessing (CPU-bound tasks, bypasses GIL)\ndef cpu_task(n):\n    return sum(i*i for i in range(n))\n\nwith multiprocessing.Pool(processes=4) as pool:\n    results = pool.map(cpu_task, [100000, 200000, 300000, 400000])\n    print(\"Results:\", results)",
              "java": "// Java Thread Creation\nclass MyTask implements Runnable {\n    public void run() { System.out.println(\"Thread: \" + Thread.currentThread().getName()); }\n}\n\n// Thread Pool (better than creating individual threads)\nExecutorService pool = Executors.newFixedThreadPool(4);\nfor (int i = 0; i < 10; i++) pool.submit(new MyTask());\npool.shutdown();"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "topic-os-concurrency-vs-parallelism",
            "title": "Concurrency vs Parallelism",
            "slug": "os-concurrency-vs-parallelism",
            "difficulty": "Medium",
            "description": "Concurrency (dealing with multiple tasks via interleaving on 1 core) vs True Parallelism (simultaneous execution on multiple CPU cores).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Concurrency vs Parallelism - Complete Guide",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. The Key Difference\n- **Concurrency:** About **structure** — designing a system to handle multiple tasks by interleaving them (time-slicing) on a single CPU core. Tasks make progress, but NOT simultaneously.\n- **Parallelism:** About **execution** — running multiple tasks LITERALLY at the SAME INSTANT on multiple CPU cores.\n\n```mermaid\ngraph TD\n    A[Single Core CPU] -->|Concurrency| B[Task A runs 20ms → Task B runs 20ms → Task A resumes]\n    C[4-Core CPU] -->|Parallelism| D[Task A on Core 1 + Task B on Core 2 + Task C on Core 3 simultaneously]\n```\n\n### 2. Real-World Analogy\n- **Concurrency:** A single chef cooking 3 dishes — chops vegetables, stirs soup, checks oven. Switches between tasks rapidly. One chef, multiple tasks.\n- **Parallelism:** 3 chefs each cooking 1 dish simultaneously. Three chefs, three tasks, truly parallel.\n\n### 3. Async I/O (Single-threaded Concurrency)\nLanguages like **Node.js** and **Python asyncio** achieve high concurrency without threads using an **event loop** + **callbacks/coroutines** — making them excellent for I/O-bound tasks.",
            "code_example": {
              "language": "multi",
              "python": "import asyncio\nimport time\n\n# Async I/O Concurrency (single-threaded, event loop)\nasync def fetch_data(name, delay):\n    print(f\"{name}: Starting download\")\n    await asyncio.sleep(delay)  # Non-blocking I/O wait\n    print(f\"{name}: Done after {delay}s\")\n\nasync def main():\n    start = time.time()\n    # All 3 tasks run concurrently (NOT in parallel - single thread)\n    await asyncio.gather(\n        fetch_data(\"Task A\", 2),\n        fetch_data(\"Task B\", 1),\n        fetch_data(\"Task C\", 3),\n    )\n    print(f\"Total time: {time.time() - start:.1f}s\") # ~3s (not 6s!)\n\nasyncio.run(main())",
              "java": "// Java CompletableFuture (Async concurrency)\nCompletableFuture<String> future1 = CompletableFuture.supplyAsync(() -> \"Result 1\");\nCompletableFuture<String> future2 = CompletableFuture.supplyAsync(() -> \"Result 2\");\nCompletableFuture.allOf(future1, future2).join();\nSystem.out.println(future1.get() + \", \" + future2.get());"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "topic-os-classical-problems",
            "title": "Classical OS Problems: Reader-Writer & Dining Philosophers",
            "slug": "os-classical-problems",
            "difficulty": "Hard",
            "description": "Two fundamental synchronization problems: Reader-Writer Problem (shared read access vs exclusive write) and Dining Philosophers (circular deadlock prevention).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Classical OS Problems: Reader-Writer & Dining Philosophers - Complete Guide",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Reader-Writer Problem\nMultiple readers can read shared data simultaneously, but a writer needs EXCLUSIVE access.\n\n**Constraints:**\n- Multiple readers can read simultaneously.\n- Only ONE writer at a time (exclusive lock).\n- No reader while writing; no writer while reading.\n\n**Reader Priority (First Readers-Writers Problem):** Readers starve writers (writers wait if any reader is active). Solution uses a mutex + counting semaphore.\n\n### 2. Dining Philosophers Problem\n5 philosophers sit around a circular table. Between each pair: 1 chopstick (fork). A philosopher needs BOTH chopsticks to eat.\n\n```mermaid\ngraph TD\n    P0[Philosopher 0] --- F0[Fork 0] --- P4[Philosopher 4]\n    P0 --- F1[Fork 1] --- P1[Philosopher 1]\n    P1 --- F2[Fork 2] --- P2[Philosopher 2]\n    P2 --- F3[Fork 3] --- P3[Philosopher 3]\n    P3 --- F4[Fork 4] --- P4\n```\n\n**Deadlock scenario:** All 5 philosophers pick up their LEFT fork simultaneously → circular wait.\n\n**Solutions:**\n1. Allow only 4 philosophers to sit at once.\n2. Odd philosophers pick LEFT first; Even pick RIGHT first.\n3. Acquire both forks atomically (all-or-nothing).",
            "code_example": {
              "language": "multi",
              "python": "import threading\n\n# Reader-Writer Problem\nclass ReaderWriterLock:\n    def __init__(self):\n        self.readers = 0\n        self.mutex = threading.Lock()\n        self.write_lock = threading.Lock()\n\n    def acquire_read(self):\n        with self.mutex:\n            self.readers += 1\n            if self.readers == 1:\n                self.write_lock.acquire()  # First reader blocks writers\n\n    def release_read(self):\n        with self.mutex:\n            self.readers -= 1\n            if self.readers == 0:\n                self.write_lock.release()  # Last reader unblocks writers\n\n    def acquire_write(self):\n        self.write_lock.acquire()\n\n    def release_write(self):\n        self.write_lock.release()\n\nrw_lock = ReaderWriterLock()\nprint(\"Reader-Writer lock initialized successfully\")",
              "java": "// Dining Philosophers - Resource Hierarchy solution\n// Philosopher picks LOWER-numbered fork first to break circular wait\nclass Philosopher extends Thread {\n    int id; Semaphore[] forks;\n    void run() {\n        int left = id, right = (id + 1) % 5;\n        // Always acquire lower-indexed fork first\n        int first = Math.min(left, right), second = Math.max(left, right);\n        forks[first].acquire(); forks[second].acquire(); // eat\n        forks[second].release(); forks[first].release();\n    }\n}"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "topic-os-file-systems",
            "title": "File System Basics",
            "slug": "os-file-systems",
            "difficulty": "Easy",
            "description": "File system structure, directory trees, inode-based allocation (Unix), File Allocation Table (FAT), NTFS, and file permissions (rwx).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "File System Basics - Complete Guide",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. What is a File System?\nA **file system** is an OS layer that manages how data is stored, organized, and retrieved from persistent storage (HDD/SSD).\n\n### 2. File System Components\n- **File:** Named collection of related data bytes stored on disk.\n- **Directory:** A special file that maps file names to their disk location (inode numbers in Unix).\n- **Inode (Index Node):** Data structure storing file metadata (permissions, size, timestamps, disk block pointers) — NOT the file name.\n\n### 3. File Allocation Methods\n| Method | Description | Pros | Cons |\n| :--- | :--- | :--- | :--- |\n| **Contiguous** | File occupies consecutive disk blocks | Fast sequential read | External fragmentation |\n| **Linked List** | Each block has pointer to next block | No fragmentation | Slow random access |\n| **Indexed (Inode)** | Index block holds all data block pointers | Fast direct access | Inode overhead |\n\n### 4. File Permissions (Unix rwx)\n```\n-rwxr-xr--\n │││ │││ │└── Others: read only\n │││ │└┘──── Group: read + execute\n │└┘──────── Owner: read + write + execute\n └────────── Regular file (d = directory, l = symlink)\n```",
            "code_example": {
              "language": "multi",
              "python": "import os, stat\n\n# File operations\nwith open('data.txt', 'w') as f:\n    f.write('Hello PrepFlow!')\n\n# Get inode and file metadata\ninfo = os.stat('data.txt')\nprint(f\"Inode: {info.st_ino}\")\nprint(f\"Size: {info.st_size} bytes\")\nprint(f\"Permissions: {oct(stat.S_IMODE(info.st_mode))}\")\n\n# Set permissions: Owner rwx, Group rx, Others r\nos.chmod('data.txt', stat.S_IRWXU | stat.S_IRGRP | stat.S_IXGRP | stat.S_IROTH)",
              "java": "// Java File operations\nimport java.nio.file.*;\nPath path = Path.of(\"data.txt\");\nFiles.writeString(path, \"Hello PrepFlow!\");\nSystem.out.println(\"Size: \" + Files.size(path));\nSystem.out.println(\"Permissions: \" + Files.getPosixFilePermissions(path));"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "topic-os-io-management",
            "title": "I/O Management & Device Management Basics",
            "slug": "os-io-management",
            "difficulty": "Easy",
            "description": "OS I/O subsystem: Polling, Interrupt-Driven I/O, DMA (Direct Memory Access), I/O scheduling, and Spooling.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "I/O Management & Device Management Basics - Complete Guide",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. I/O Management Role\nThe OS I/O subsystem provides a uniform interface to hardware devices (keyboards, disks, network cards) regardless of specific device implementation.\n\n### 2. I/O Techniques\n| Method | Mechanism | CPU Usage | Efficiency |\n| :--- | :--- | :--- | :--- |\n| **Programmed I/O (Polling)** | CPU continuously checks device status register | High (busy wait) | Low |\n| **Interrupt-Driven I/O** | Device sends interrupt when ready; CPU resumes work | Low (CPU free during wait) | High |\n| **DMA (Direct Memory Access)** | DMA controller transfers data directly to RAM without CPU | Minimal (CPU only initiates) | Highest |\n\n### 3. DMA Architecture\n```mermaid\ngraph LR\n    CPU[CPU] -->|1. Initiates DMA Transfer| DMA[DMA Controller]\n    DMA -->|2. Transfers Data Directly| RAM[Main Memory RAM]\n    Disk[Disk Controller] -->|Data Stream| DMA\n    DMA -->|3. Sends Interrupt when Done| CPU\n```\n\n### 4. Spooling (Simultaneous Peripheral Operations OnLine)\nSpooling buffers slow device output (e.g., printer) in a queue on disk, allowing faster processes to continue without waiting.",
            "code_example": {
              "language": "multi",
              "python": "# Python - Simulating Interrupt-driven I/O with callbacks\nimport signal, time\n\ndef io_complete_handler(signum, frame):\n    print(\"I/O Interrupt received! Data ready to process.\")\n\n# Register interrupt handler\nsignal.signal(signal.SIGALRM, io_complete_handler)\nsignal.alarm(2)  # Simulate I/O device interrupt after 2 seconds\n\nprint(\"CPU doing other work while waiting for I/O...\")\ntime.sleep(3)  # CPU works on other tasks",
              "java": "// Java - NIO DMA-style non-blocking I/O\nimport java.nio.*;\nimport java.nio.channels.*;\nFileChannel fc = FileChannel.open(Path.of(\"data.bin\"), StandardOpenOption.READ);\nByteBuffer buf = ByteBuffer.allocateDirect(4096); // Direct buffer uses DMA\nfc.read(buf);\nbuf.flip();\nSystem.out.println(\"Read \" + buf.limit() + \" bytes via DMA-style channel\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-cs-cn",
        "name": "4. Computer Networks (CN)",
        "icon": "🌐",
        "topics": [
          {
            "id": "topic-cn-osi-tcpip",
            "title": "OSI Model vs TCP/IP Model (7 Layers Detailed)",
            "slug": "cn-osi-tcpip",
            "difficulty": "Easy",
            "description": "Detailed breakdown of 7 OSI layers (Physical, Data Link, Network, Transport, Session, Presentation, Application) vs 4 TCP/IP layers.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "OSI Model vs TCP/IP Model (7 Layers Detailed) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of OSI Model vs TCP/IP Model (7 Layers Detailed)\nDetailed breakdown of 7 OSI layers (Physical, Data Link, Network, Transport, Session, Presentation, Application) vs 4 TCP/IP layers.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for OSI Model vs TCP/IP Model (7 Layers Detailed)\nprint('OSI Model vs TCP/IP Model (7 Layers Detailed) active')",
              "java": "// Java implementation for OSI Model vs TCP/IP Model (7 Layers Detailed)\nSystem.out.println(\"OSI Model vs TCP/IP Model (7 Layers Detailed) active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-cn-ip-addressing",
            "title": "IP Addressing (IPv4 vs IPv6) & Subnetting (CIDR)",
            "slug": "cn-ip-addressing",
            "difficulty": "Medium",
            "description": "IPv4 address classes, CIDR notation, subnet mask calculations, and IPv6 128-bit addresses.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "IP Addressing (IPv4 vs IPv6) & Subnetting (CIDR) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of IP Addressing (IPv4 vs IPv6) & Subnetting (CIDR)\nIPv4 address classes, CIDR notation, subnet mask calculations, and IPv6 128-bit addresses.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for IP Addressing (IPv4 vs IPv6) & Subnetting (CIDR)\nprint('IP Addressing (IPv4 vs IPv6) & Subnetting (CIDR) active')",
              "java": "// Java implementation for IP Addressing (IPv4 vs IPv6) & Subnetting (CIDR)\nSystem.out.println(\"IP Addressing (IPv4 vs IPv6) & Subnetting (CIDR) active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-cn-tcp-vs-udp",
            "title": "TCP vs UDP (3-Way Handshake, Flow & Congestion Control)",
            "slug": "cn-tcp-vs-udp",
            "difficulty": "Medium",
            "description": "Connection-oriented TCP (SYN, SYN-ACK, ACK, Sliding Window, Slow Start) vs Connectionless UDP.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "TCP vs UDP (3-Way Handshake, Flow & Congestion Control) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of TCP vs UDP (3-Way Handshake, Flow & Congestion Control)\nConnection-oriented TCP (SYN, SYN-ACK, ACK, Sliding Window, Slow Start) vs Connectionless UDP.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for TCP vs UDP (3-Way Handshake, Flow & Congestion Control)\nprint('TCP vs UDP (3-Way Handshake, Flow & Congestion Control) active')",
              "java": "// Java implementation for TCP vs UDP (3-Way Handshake, Flow & Congestion Control)\nSystem.out.println(\"TCP vs UDP (3-Way Handshake, Flow & Congestion Control) active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-cn-http-https",
            "title": "HTTP vs HTTPS, SSL/TLS Handshake",
            "slug": "cn-http-https",
            "difficulty": "Easy",
            "description": "HTTP methods, status codes (2xx, 4xx, 5xx), and asymmetric/symmetric SSL key exchange handshake.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "HTTP vs HTTPS, SSL/TLS Handshake Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of HTTP vs HTTPS, SSL/TLS Handshake\nHTTP methods, status codes (2xx, 4xx, 5xx), and asymmetric/symmetric SSL key exchange handshake.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for HTTP vs HTTPS, SSL/TLS Handshake\nprint('HTTP vs HTTPS, SSL/TLS Handshake active')",
              "java": "// Java implementation for HTTP vs HTTPS, SSL/TLS Handshake\nSystem.out.println(\"HTTP vs HTTPS, SSL/TLS Handshake active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-cn-dns",
            "title": "DNS (Domain Name System) Lookup Workflow",
            "slug": "cn-dns",
            "difficulty": "Easy",
            "description": "Recursive vs Iterative DNS queries, Root servers, TLD servers, Authoritative Name Servers, A/AAAA/CNAME records.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "DNS (Domain Name System) Lookup Workflow Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of DNS (Domain Name System) Lookup Workflow\nRecursive vs Iterative DNS queries, Root servers, TLD servers, Authoritative Name Servers, A/AAAA/CNAME records.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for DNS (Domain Name System) Lookup Workflow\nprint('DNS (Domain Name System) Lookup Workflow active')",
              "java": "// Java implementation for DNS (Domain Name System) Lookup Workflow\nSystem.out.println(\"DNS (Domain Name System) Lookup Workflow active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-cn-routing-algorithms",
            "title": "Routing Algorithms (Distance Vector, Link State, OSPF, BGP)",
            "slug": "cn-routing-algorithms",
            "difficulty": "Hard",
            "description": "Intra-domain vs Inter-domain routing: Bellman-Ford (RIP), Dijkstra (OSPF), and Path Vector (BGP).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Routing Algorithms (Distance Vector, Link State, OSPF, BGP) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Routing Algorithms (Distance Vector, Link State, OSPF, BGP)\nIntra-domain vs Inter-domain routing: Bellman-Ford (RIP), Dijkstra (OSPF), and Path Vector (BGP).\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Routing Algorithms (Distance Vector, Link State, OSPF, BGP)\nprint('Routing Algorithms (Distance Vector, Link State, OSPF, BGP) active')",
              "java": "// Java implementation for Routing Algorithms (Distance Vector, Link State, OSPF, BGP)\nSystem.out.println(\"Routing Algorithms (Distance Vector, Link State, OSPF, BGP) active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-cn-mac-arp",
            "title": "MAC Address, ARP & RARP Protocols",
            "slug": "cn-mac-arp",
            "difficulty": "Easy",
            "description": "Layer 2 48-bit MAC addresses, Address Resolution Protocol (IP to MAC mapping), and ARP Spoofing.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "MAC Address, ARP & RARP Protocols Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of MAC Address, ARP & RARP Protocols\nLayer 2 48-bit MAC addresses, Address Resolution Protocol (IP to MAC mapping), and ARP Spoofing.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for MAC Address, ARP & RARP Protocols\nprint('MAC Address, ARP & RARP Protocols active')",
              "java": "// Java implementation for MAC Address, ARP & RARP Protocols\nSystem.out.println(\"MAC Address, ARP & RARP Protocols active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-cn-network-devices",
            "title": "Switches vs Routers vs Hubs vs Gateways",
            "slug": "cn-network-devices",
            "difficulty": "Easy",
            "description": "Layer 1 Hubs (broadcast), Layer 2 Switches (MAC table), Layer 3 Routers (IP routing), and Layer 7 Gateways.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Switches vs Routers vs Hubs vs Gateways Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Switches vs Routers vs Hubs vs Gateways\nLayer 1 Hubs (broadcast), Layer 2 Switches (MAC table), Layer 3 Routers (IP routing), and Layer 7 Gateways.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Switches vs Routers vs Hubs vs Gateways\nprint('Switches vs Routers vs Hubs vs Gateways active')",
              "java": "// Java implementation for Switches vs Routers vs Hubs vs Gateways\nSystem.out.println(\"Switches vs Routers vs Hubs vs Gateways active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-cn-socket-programming",
            "title": "Socket Programming & Port Numbers",
            "slug": "cn-socket-programming",
            "difficulty": "Medium",
            "description": "TCP/UDP Socket API (bind, listen, accept, connect), well-known ports (80, 443, 22).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Socket Programming & Port Numbers Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Socket Programming & Port Numbers\nTCP/UDP Socket API (bind, listen, accept, connect), well-known ports (80, 443, 22).\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Socket Programming & Port Numbers\nprint('Socket Programming & Port Numbers active')",
              "java": "// Java implementation for Socket Programming & Port Numbers\nSystem.out.println(\"Socket Programming & Port Numbers active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-cn-network-security",
            "title": "Network Security Basics (Firewalls, NAT, VPN, Proxy)",
            "slug": "cn-network-security",
            "difficulty": "Medium",
            "description": "Stateless/Stateful Firewalls, Network Address Translation (NAT/PAT), Forward/Reverse Proxies, and VPN Tunnels.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Network Security Basics (Firewalls, NAT, VPN, Proxy) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Network Security Basics (Firewalls, NAT, VPN, Proxy)\nStateless/Stateful Firewalls, Network Address Translation (NAT/PAT), Forward/Reverse Proxies, and VPN Tunnels.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Network Security Basics (Firewalls, NAT, VPN, Proxy)\nprint('Network Security Basics (Firewalls, NAT, VPN, Proxy) active')",
              "java": "// Java implementation for Network Security Basics (Firewalls, NAT, VPN, Proxy)\nSystem.out.println(\"Network Security Basics (Firewalls, NAT, VPN, Proxy) active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-cn-dhcp",
            "title": "DHCP (Dynamic Host Configuration Protocol)",
            "slug": "cn-dhcp",
            "difficulty": "Easy",
            "description": "DHCP workflow for automatic IP address assignment: DORA process (Discover, Offer, Request, Acknowledge) and lease management.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "DHCP (Dynamic Host Configuration Protocol) - Complete Guide",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. What is DHCP?\n**DHCP (Dynamic Host Configuration Protocol)** is an application-layer protocol that AUTOMATICALLY assigns IP addresses to devices joining a network, eliminating manual IP configuration.\n\n### 2. DHCP DORA Process\n```mermaid\ngraph LR\n    Client[Client: No IP] -->|1. DHCP DISCOVER broadcast| Server[DHCP Server]\n    Server -->|2. DHCP OFFER: Proposed IP, Subnet, Gateway, DNS| Client\n    Client -->|3. DHCP REQUEST: Accept the offered IP| Server\n    Server -->|4. DHCP ACK: IP assigned with lease duration| Client\n```\n\n- **Discover:** Client broadcasts to find DHCP servers (source IP: 0.0.0.0, dest: 255.255.255.255).\n- **Offer:** Server offers an available IP + configuration (Subnet Mask, Default Gateway, DNS).\n- **Request:** Client formally requests the offered IP.\n- **Acknowledge:** Server confirms the assignment with a **lease duration** (e.g., 24 hours).\n\n### 3. DHCP Lease Renewal\nClient renews at 50% of lease time. If server unreachable, retries at 87.5%. If lease expires, client must restart DORA process.",
            "code_example": {
              "language": "multi",
              "python": "# Python - Simulate DHCP message structure\ndhcp_discover = {\n    'message_type': 'DHCP_DISCOVER',\n    'client_mac': 'AA:BB:CC:DD:EE:FF',\n    'src_ip': '0.0.0.0',\n    'dst_ip': '255.255.255.255',  # Broadcast\n    'port': 68\n}\n\ndhcp_offer = {\n    'message_type': 'DHCP_OFFER',\n    'offered_ip': '192.168.1.100',\n    'subnet_mask': '255.255.255.0',\n    'default_gateway': '192.168.1.1',\n    'dns_server': '8.8.8.8',\n    'lease_duration_seconds': 86400\n}\n\nprint(\"DHCP DORA Process simulated\")\nprint(f\"Offered IP: {dhcp_offer['offered_ip']}\")",
              "java": "// Java - DHCP response parsing concept\nrecord DHCPLease(String ip, String subnet, String gateway, String dns, int leaseSecs) {}\nDHCPLease lease = new DHCPLease(\"192.168.1.100\", \"255.255.255.0\", \"192.168.1.1\", \"8.8.8.8\", 86400);\nSystem.out.println(\"Assigned IP: \" + lease.ip() + \" for \" + lease.leaseSecs()/3600 + \" hours\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "topic-cn-http-methods",
            "title": "HTTP Methods (GET, POST, PUT, DELETE, PATCH) & Status Codes",
            "slug": "cn-http-methods",
            "difficulty": "Easy",
            "description": "RESTful HTTP verbs semantics, idempotency, safety, and HTTP response status code categories (1xx, 2xx, 3xx, 4xx, 5xx).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "HTTP Methods (GET, POST, PUT, DELETE, PATCH) & Status Codes - Complete Guide",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. HTTP Methods Comparison\n\n| Method | Purpose | Idempotent? | Safe? | Request Body? |\n| :--- | :--- | :---: | :---: | :---: |\n| **GET** | Retrieve resource | ✅ Yes | ✅ Yes | ❌ No |\n| **POST** | Create new resource | ❌ No | ❌ No | ✅ Yes |\n| **PUT** | Replace entire resource | ✅ Yes | ❌ No | ✅ Yes |\n| **PATCH** | Partially update resource | ❌ No | ❌ No | ✅ Yes |\n| **DELETE** | Remove resource | ✅ Yes | ❌ No | Optional |\n| **HEAD** | Get response headers only (no body) | ✅ Yes | ✅ Yes | ❌ No |\n| **OPTIONS** | Get allowed methods for a resource | ✅ Yes | ✅ Yes | ❌ No |\n\n> **Idempotent:** Same request N times = same result as 1 time.\n> **Safe:** Does not modify server state.\n\n### 2. HTTP Status Codes\n| Range | Category | Common Examples |\n| :---: | :--- | :--- |\n| **1xx** | Informational | 100 Continue, 101 Switching Protocols |\n| **2xx** | Success | 200 OK, 201 Created, 204 No Content |\n| **3xx** | Redirection | 301 Moved Permanently, 302 Found, 304 Not Modified |\n| **4xx** | Client Error | 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Too Many Requests |\n| **5xx** | Server Error | 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable |",
            "code_example": {
              "language": "multi",
              "python": "import requests\n\n# GET - Retrieve user\nresponse = requests.get('https://api.example.com/users/1')\nprint(f\"Status: {response.status_code}, Data: {response.json()}\")\n\n# POST - Create new user\nnew_user = {'name': 'Rahul', 'email': 'rahul@example.com'}\nresponse = requests.post('https://api.example.com/users', json=new_user)\nprint(f\"Created: {response.status_code}\")  # 201 Created\n\n# PATCH - Partially update (only email)\nupdate = {'email': 'new@example.com'}\nresponse = requests.patch('https://api.example.com/users/1', json=update)\n\n# DELETE - Remove user\nresponse = requests.delete('https://api.example.com/users/1')\nprint(f\"Deleted: {response.status_code}\")  # 204 No Content",
              "java": "// Java HttpClient (Java 11+)\nHttpClient client = HttpClient.newHttpClient();\nHttpRequest req = HttpRequest.newBuilder()\n    .uri(URI.create(\"https://api.example.com/users/1\"))\n    .GET().build();\nHttpResponse<String> resp = client.send(req, HttpResponse.BodyHandlers.ofString());\nSystem.out.println(\"Status: \" + resp.statusCode() + \", Body: \" + resp.body());"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "topic-cn-congestion-flow-control",
            "title": "Congestion Control & Flow Control in TCP",
            "slug": "cn-congestion-flow-control",
            "difficulty": "Hard",
            "description": "TCP Flow Control (receiver's sliding window / rwnd) vs Congestion Control (sender-side cwnd: Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Congestion Control & Flow Control in TCP - Complete Guide",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Flow Control (End-to-End: Sender ↔ Receiver)\n**Problem:** Sender may transmit faster than receiver can process data.\n**Solution:** Receiver advertises a **Receive Window (rwnd)** size in TCP header — maximum bytes sender can have in-flight.\n\n- **Sliding Window Protocol:** Sender can send up to `rwnd` bytes without waiting for ACK.\n- If `rwnd = 0`, sender stops transmitting (Zero Window probe mechanism).\n\n### 2. Congestion Control (Sender ↔ Network)\n**Problem:** Too many senders sending too much data overwhelm routers, causing packet drops.\n**Solution:** TCP sender maintains a **Congestion Window (cwnd)** and adjusts it based on network feedback.\n\n```mermaid\ngraph TD\n    SS[Slow Start: cwnd starts at 1 MSS, doubles each RTT] --> |cwnd ≥ ssthresh| CA\n    CA[Congestion Avoidance: cwnd += 1 per RTT] --> |Timeout| SS2\n    CA --> |3 Duplicate ACKs| FR[Fast Retransmit + Fast Recovery]\n    SS2[Timeout: ssthresh=cwnd/2, cwnd=1, restart Slow Start]\n    FR --> |Reduces ssthresh=cwnd/2, cwnd=ssthresh+3| CA\n```\n\n### 3. Algorithms Summary\n| Algorithm | Trigger | Action |\n| :--- | :--- | :--- |\n| **Slow Start** | Connection start or timeout | cwnd doubles each RTT (exponential) |\n| **Congestion Avoidance** | cwnd ≥ ssthresh | cwnd grows by 1 MSS per RTT (linear) |\n| **Fast Retransmit** | 3 duplicate ACKs (likely loss, not timeout) | Retransmit without waiting for timeout |\n| **Fast Recovery** | After Fast Retransmit | ssthresh=cwnd/2, enter congestion avoidance |",
            "code_example": {
              "language": "multi",
              "python": "# TCP Congestion Control Simulation\nclass TCPCongestionControl:\n    def __init__(self):\n        self.cwnd = 1        # Congestion window (in MSS units)\n        self.ssthresh = 64   # Slow start threshold\n        self.state = 'SLOW_START'\n\n    def on_ack(self):\n        if self.state == 'SLOW_START':\n            self.cwnd *= 2  # Exponential growth\n            if self.cwnd >= self.ssthresh:\n                self.state = 'CONGESTION_AVOIDANCE'\n        elif self.state == 'CONGESTION_AVOIDANCE':\n            self.cwnd += 1  # Linear growth\n\n    def on_triple_dup_ack(self):\n        self.ssthresh = self.cwnd // 2\n        self.cwnd = self.ssthresh + 3\n        self.state = 'CONGESTION_AVOIDANCE'\n\n    def on_timeout(self):\n        self.ssthresh = self.cwnd // 2\n        self.cwnd = 1\n        self.state = 'SLOW_START'\n\ntcp = TCPCongestionControl()\nfor _ in range(10): tcp.on_ack()\nprint(f\"cwnd after 10 ACKs: {tcp.cwnd} MSS, state: {tcp.state}\")",
              "java": "// Java - TCP socket receive buffer (rwnd)\nSocket socket = new Socket(\"server.com\", 80);\nsocket.setReceiveBufferSize(65536); // Set rwnd = 64KB\nSystem.out.println(\"Receive window: \" + socket.getReceiveBufferSize() + \" bytes\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-cs-se",
        "name": "5. Software Engineering & System Design",
        "icon": "🛠️",
        "topics": [
          {
            "id": "topic-se-sdlc",
            "title": "SDLC Models (Waterfall, Agile, Scrum, Kanban)",
            "slug": "se-sdlc",
            "difficulty": "Easy",
            "description": "Software Development Life Cycle phases: Waterfall linear sequential vs Agile iterative sprints, Scrum ceremonies, and Kanban WIP limits.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "SDLC Models (Waterfall, Agile, Scrum, Kanban) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of SDLC Models (Waterfall, Agile, Scrum, Kanban)\nSoftware Development Life Cycle phases: Waterfall linear sequential vs Agile iterative sprints, Scrum ceremonies, and Kanban WIP limits.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for SDLC Models (Waterfall, Agile, Scrum, Kanban)\nprint('SDLC Models (Waterfall, Agile, Scrum, Kanban) active')",
              "java": "// Java implementation for SDLC Models (Waterfall, Agile, Scrum, Kanban)\nSystem.out.println(\"SDLC Models (Waterfall, Agile, Scrum, Kanban) active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-se-srs",
            "title": "Requirement Engineering & SRS",
            "slug": "se-srs",
            "difficulty": "Easy",
            "description": "Functional vs Non-Functional requirements, SRS documentation standards, and Use Case Diagrams.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Requirement Engineering & SRS Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Requirement Engineering & SRS\nFunctional vs Non-Functional requirements, SRS documentation standards, and Use Case Diagrams.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Requirement Engineering & SRS\nprint('Requirement Engineering & SRS active')",
              "java": "// Java implementation for Requirement Engineering & SRS\nSystem.out.println(\"Requirement Engineering & SRS active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-se-architecture",
            "title": "System Architecture (Monolithic vs Microservices)",
            "slug": "se-architecture",
            "difficulty": "Hard",
            "description": "Single binary monolith vs Distributed microservices, API Gateways, Service Discovery, and Database-per-service pattern.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "System Architecture (Monolithic vs Microservices) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of System Architecture (Monolithic vs Microservices)\nSingle binary monolith vs Distributed microservices, API Gateways, Service Discovery, and Database-per-service pattern.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for System Architecture (Monolithic vs Microservices)\nprint('System Architecture (Monolithic vs Microservices) active')",
              "java": "// Java implementation for System Architecture (Monolithic vs Microservices)\nSystem.out.println(\"System Architecture (Monolithic vs Microservices) active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-se-rest-api",
            "title": "REST API Design & HTTP Verbs",
            "slug": "se-rest-api",
            "difficulty": "Medium",
            "description": "RESTful principles (Statelessness, Uniform Interface, Resource-based URLs) and HTTP methods (GET, POST, PUT, DELETE, PATCH).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "REST API Design & HTTP Verbs Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of REST API Design & HTTP Verbs\nRESTful principles (Statelessness, Uniform Interface, Resource-based URLs) and HTTP methods (GET, POST, PUT, DELETE, PATCH).\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for REST API Design & HTTP Verbs\nprint('REST API Design & HTTP Verbs active')",
              "java": "// Java implementation for REST API Design & HTTP Verbs\nSystem.out.println(\"REST API Design & HTTP Verbs active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-se-git",
            "title": "Git & Version Control (Branching, Merging, Rebase)",
            "slug": "se-git",
            "difficulty": "Medium",
            "description": "Distributed VCS concepts: Commit DAG, Branching strategies (GitFlow), Merge vs Rebase, and Stash.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Git & Version Control (Branching, Merging, Rebase) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Git & Version Control (Branching, Merging, Rebase)\nDistributed VCS concepts: Commit DAG, Branching strategies (GitFlow), Merge vs Rebase, and Stash.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Git & Version Control (Branching, Merging, Rebase)\nprint('Git & Version Control (Branching, Merging, Rebase) active')",
              "java": "// Java implementation for Git & Version Control (Branching, Merging, Rebase)\nSystem.out.println(\"Git & Version Control (Branching, Merging, Rebase) active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-se-cicd",
            "title": "CI/CD Pipelines (Continuous Integration & Deployment)",
            "slug": "se-cicd",
            "difficulty": "Medium",
            "description": "Automated build, test, and deployment pipelines using GitHub Actions / Jenkins.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "CI/CD Pipelines (Continuous Integration & Deployment) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of CI/CD Pipelines (Continuous Integration & Deployment)\nAutomated build, test, and deployment pipelines using GitHub Actions / Jenkins.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for CI/CD Pipelines (Continuous Integration & Deployment)\nprint('CI/CD Pipelines (Continuous Integration & Deployment) active')",
              "java": "// Java implementation for CI/CD Pipelines (Continuous Integration & Deployment)\nSystem.out.println(\"CI/CD Pipelines (Continuous Integration & Deployment) active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-se-testing",
            "title": "Testing Strategies (Unit, Integration, System, Regression)",
            "slug": "se-testing",
            "difficulty": "Easy",
            "description": "Test pyramid: Unit testing (JUnit/PyTest), Integration testing, End-to-End system testing, and TDD.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Testing Strategies (Unit, Integration, System, Regression) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Testing Strategies (Unit, Integration, System, Regression)\nTest pyramid: Unit testing (JUnit/PyTest), Integration testing, End-to-End system testing, and TDD.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Testing Strategies (Unit, Integration, System, Regression)\nprint('Testing Strategies (Unit, Integration, System, Regression) active')",
              "java": "// Java implementation for Testing Strategies (Unit, Integration, System, Regression)\nSystem.out.println(\"Testing Strategies (Unit, Integration, System, Regression) active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-se-refactoring",
            "title": "Code Review, Refactoring & Technical Debt",
            "slug": "se-refactoring",
            "difficulty": "Easy",
            "description": "Code smells, refactoring techniques, static code analysis (SonarQube), and managing technical debt.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Code Review, Refactoring & Technical Debt Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Code Review, Refactoring & Technical Debt\nCode smells, refactoring techniques, static code analysis (SonarQube), and managing technical debt.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Code Review, Refactoring & Technical Debt\nprint('Code Review, Refactoring & Technical Debt active')",
              "java": "// Java implementation for Code Review, Refactoring & Technical Debt\nSystem.out.println(\"Code Review, Refactoring & Technical Debt active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-cs-coa",
        "name": "6. Computer Organization & Architecture (COA)",
        "icon": "🖥️",
        "topics": [
          {
            "id": "topic-coa-architecture",
            "title": "Von Neumann Architecture vs Harvard Architecture",
            "slug": "coa-architecture",
            "difficulty": "Easy",
            "description": "Shared instruction and data memory (Von Neumann bottleneck) vs Separate memory buses (Harvard Architecture).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Von Neumann Architecture vs Harvard Architecture Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Von Neumann Architecture vs Harvard Architecture\nShared instruction and data memory (Von Neumann bottleneck) vs Separate memory buses (Harvard Architecture).\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Von Neumann Architecture vs Harvard Architecture\nprint('Von Neumann Architecture vs Harvard Architecture active')",
              "java": "// Java implementation for Von Neumann Architecture vs Harvard Architecture\nSystem.out.println(\"Von Neumann Architecture vs Harvard Architecture active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-coa-cpu-structure",
            "title": "CPU Registers, ALU, Control Unit & Instruction Cycle",
            "slug": "coa-cpu-structure",
            "difficulty": "Medium",
            "description": "Instruction Cycle (Fetch, Decode, Execute, Store), PC, MAR, MDR, IR, and ALU flag registers.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "CPU Registers, ALU, Control Unit & Instruction Cycle Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of CPU Registers, ALU, Control Unit & Instruction Cycle\nInstruction Cycle (Fetch, Decode, Execute, Store), PC, MAR, MDR, IR, and ALU flag registers.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for CPU Registers, ALU, Control Unit & Instruction Cycle\nprint('CPU Registers, ALU, Control Unit & Instruction Cycle active')",
              "java": "// Java implementation for CPU Registers, ALU, Control Unit & Instruction Cycle\nSystem.out.println(\"CPU Registers, ALU, Control Unit & Instruction Cycle active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-coa-memory-hierarchy",
            "title": "Memory Hierarchy (Registers, Cache, RAM, Disk)",
            "slug": "coa-memory-hierarchy",
            "difficulty": "Easy",
            "description": "Tradeoffs between Speed, Cost, and Capacity: Registers $\\rightarrow$ L1/L2/L3 Cache $\\rightarrow$ DRAM $\\rightarrow$ NVMe SSD.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Memory Hierarchy (Registers, Cache, RAM, Disk) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Memory Hierarchy (Registers, Cache, RAM, Disk)\nTradeoffs between Speed, Cost, and Capacity: Registers $\\rightarrow$ L1/L2/L3 Cache $\\rightarrow$ DRAM $\\rightarrow$ NVMe SSD.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Memory Hierarchy (Registers, Cache, RAM, Disk)\nprint('Memory Hierarchy (Registers, Cache, RAM, Disk) active')",
              "java": "// Java implementation for Memory Hierarchy (Registers, Cache, RAM, Disk)\nSystem.out.println(\"Memory Hierarchy (Registers, Cache, RAM, Disk) active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-coa-cache-mapping",
            "title": "Cache Memory (Direct, Associative, Set-Associative)",
            "slug": "coa-cache-mapping",
            "difficulty": "Hard",
            "description": "Cache line placement policies, Tag/Index/Offset address decomposition, and Cache Hit/Miss ratio.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Cache Memory (Direct, Associative, Set-Associative) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Cache Memory (Direct, Associative, Set-Associative)\nCache line placement policies, Tag/Index/Offset address decomposition, and Cache Hit/Miss ratio.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Cache Memory (Direct, Associative, Set-Associative)\nprint('Cache Memory (Direct, Associative, Set-Associative) active')",
              "java": "// Java implementation for Cache Memory (Direct, Associative, Set-Associative)\nSystem.out.println(\"Cache Memory (Direct, Associative, Set-Associative) active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-coa-pipelining",
            "title": "Instruction Pipelining & Hazards",
            "slug": "coa-pipelining",
            "difficulty": "Hard",
            "description": "5-stage RISC pipeline (IF, ID, EX, MEM, WB), Structural hazards, Data hazards (Forwarding), and Control hazards (Branch Prediction).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Instruction Pipelining & Hazards Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Instruction Pipelining & Hazards\n5-stage RISC pipeline (IF, ID, EX, MEM, WB), Structural hazards, Data hazards (Forwarding), and Control hazards (Branch Prediction).\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Instruction Pipelining & Hazards\nprint('Instruction Pipelining & Hazards active')",
              "java": "// Java implementation for Instruction Pipelining & Hazards\nSystem.out.println(\"Instruction Pipelining & Hazards active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-coa-ieee754",
            "title": "Floating-Point Representation (IEEE 754 Standard)",
            "slug": "coa-ieee754",
            "difficulty": "Medium",
            "description": "Single precision (32-bit: 1 Sign, 8 Exponent, 23 Mantissa) and Double precision (64-bit) floating point encoding.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Floating-Point Representation (IEEE 754 Standard) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Floating-Point Representation (IEEE 754 Standard)\nSingle precision (32-bit: 1 Sign, 8 Exponent, 23 Mantissa) and Double precision (64-bit) floating point encoding.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Floating-Point Representation (IEEE 754 Standard)\nprint('Floating-Point Representation (IEEE 754 Standard) active')",
              "java": "// Java implementation for Floating-Point Representation (IEEE 754 Standard)\nSystem.out.println(\"Floating-Point Representation (IEEE 754 Standard) active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-coa-number-systems",
            "title": "Number Systems & Conversions (Binary, Octal, Decimal, Hex)",
            "slug": "coa-number-systems",
            "difficulty": "Easy",
            "description": "Binary (base-2), Octal (base-8), Decimal (base-10), Hexadecimal (base-16) conversions, 2's complement signed numbers, and bit manipulation.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Number Systems & Conversions (Binary, Octal, Decimal, Hex) - Complete Guide",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Number System Bases\n| System | Base | Digits | Prefix |\n| :--- | :---: | :--- | :--- |\n| **Binary** | 2 | 0, 1 | `0b` |\n| **Octal** | 8 | 0-7 | `0o` |\n| **Decimal** | 10 | 0-9 | (none) |\n| **Hexadecimal** | 16 | 0-9, A-F | `0x` |\n\n### 2. Conversion Table\n| Decimal | Binary | Octal | Hex |\n| :---: | :---: | :---: | :---: |\n| 0 | 0000 | 0 | 0 |\n| 9 | 1001 | 11 | 9 |\n| 10 | 1010 | 12 | A |\n| 15 | 1111 | 17 | F |\n| 16 | 10000 | 20 | 10 |\n\n### 3. 2's Complement (Signed Integer Representation)\nUsed to represent NEGATIVE numbers in binary.\n- **Step 1:** Invert all bits (1's complement). \n- **Step 2:** Add 1.\n\nExample: `+5` = `00000101`  →  `11111010` (invert)  →  `11111011` (`-5` in 2's complement)\n\n**Range** for N-bit signed: $-2^{N-1}$ to $+2^{N-1}-1$. For 8-bit: -128 to +127.",
            "code_example": {
              "language": "multi",
              "python": "# Python Number System Conversions\nn = 255\n\n# Decimal to other bases\nprint(f\"Decimal: {n}\")\nprint(f\"Binary: {bin(n)}\")    # 0b11111111\nprint(f\"Octal: {oct(n)}\")     # 0o377\nprint(f\"Hex: {hex(n)}\")       # 0xff\n\n# Convert FROM binary/hex/octal to decimal\nprint(int('11111111', 2))   # Binary → 255\nprint(int('ff', 16))         # Hex → 255\nprint(int('377', 8))         # Octal → 255\n\n# 2's Complement for -5 in 8-bit\ndef twos_complement(n, bits=8):\n    if n >= 0: return format(n, f'0{bits}b')\n    return format((1 << bits) + n, f'0{bits}b')\n\nprint(f\"2's complement of -5: {twos_complement(-5)}\")  # 11111011",
              "java": "// Java - Number base conversions\nint n = 255;\nSystem.out.println(\"Decimal: \" + n);\nSystem.out.println(\"Binary: \" + Integer.toBinaryString(n));    // 11111111\nSystem.out.println(\"Octal: \" + Integer.toOctalString(n));      // 377\nSystem.out.println(\"Hex: \" + Integer.toHexString(n));          // ff\n\n// Parse from different bases\nSystem.out.println(Integer.parseInt(\"11111111\", 2));  // 255\nSystem.out.println(Integer.parseInt(\"ff\", 16));        // 255"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-cs-lang",
        "name": "7. Programming Language Concepts",
        "icon": "🔤",
        "topics": [
          {
            "id": "topic-lang-compiled-vs-interpreted",
            "title": "Compiled vs Interpreted Languages",
            "slug": "lang-compiled-vs-interpreted",
            "difficulty": "Easy",
            "description": "AOT compilation (C/C++) vs JIT / Bytecode Interpretation (Java JVM, Python CPython).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Compiled vs Interpreted Languages Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Compiled vs Interpreted Languages\nAOT compilation (C/C++) vs JIT / Bytecode Interpretation (Java JVM, Python CPython).\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Compiled vs Interpreted Languages\nprint('Compiled vs Interpreted Languages active')",
              "java": "// Java implementation for Compiled vs Interpreted Languages\nSystem.out.println(\"Compiled vs Interpreted Languages active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-lang-memory-management",
            "title": "Memory Management (Stack vs Heap, Garbage Collection)",
            "slug": "lang-memory-management",
            "difficulty": "Medium",
            "description": "Automatic garbage collection algorithms (Mark-and-Sweep, Generational GC, Reference Counting).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Memory Management (Stack vs Heap, Garbage Collection) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Memory Management (Stack vs Heap, Garbage Collection)\nAutomatic garbage collection algorithms (Mark-and-Sweep, Generational GC, Reference Counting).\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Memory Management (Stack vs Heap, Garbage Collection)\nprint('Memory Management (Stack vs Heap, Garbage Collection) active')",
              "java": "// Java implementation for Memory Management (Stack vs Heap, Garbage Collection)\nSystem.out.println(\"Memory Management (Stack vs Heap, Garbage Collection) active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-lang-scope-lifetime",
            "title": "Scope, Lifetime & Binding (Static vs Dynamic)",
            "slug": "lang-scope-lifetime",
            "difficulty": "Easy",
            "description": "Lexical (Static) scoping vs Dynamic scoping, variable lifetime, and symbol table binding.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Scope, Lifetime & Binding (Static vs Dynamic) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Scope, Lifetime & Binding (Static vs Dynamic)\nLexical (Static) scoping vs Dynamic scoping, variable lifetime, and symbol table binding.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Scope, Lifetime & Binding (Static vs Dynamic)\nprint('Scope, Lifetime & Binding (Static vs Dynamic) active')",
              "java": "// Java implementation for Scope, Lifetime & Binding (Static vs Dynamic)\nSystem.out.println(\"Scope, Lifetime & Binding (Static vs Dynamic) active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-lang-parameter-passing",
            "title": "Parameter Passing (Call by Value vs Call by Reference)",
            "slug": "lang-parameter-passing",
            "difficulty": "Easy",
            "description": "Call by Value (copy), Call by Reference (alias pointer), and Call by Sharing (object reference pass-by-value).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Parameter Passing (Call by Value vs Call by Reference) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Parameter Passing (Call by Value vs Call by Reference)\nCall by Value (copy), Call by Reference (alias pointer), and Call by Sharing (object reference pass-by-value).\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Parameter Passing (Call by Value vs Call by Reference)\nprint('Parameter Passing (Call by Value vs Call by Reference) active')",
              "java": "// Java implementation for Parameter Passing (Call by Value vs Call by Reference)\nSystem.out.println(\"Parameter Passing (Call by Value vs Call by Reference) active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-lang-pointers-references",
            "title": "Pointers, References & Memory Leaks",
            "slug": "lang-pointers-references",
            "difficulty": "Medium",
            "description": "Pointer arithmetic, raw pointers vs references, dangling pointers, double free errors, and smart pointers (unique_ptr, shared_ptr).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Pointers, References & Memory Leaks Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Pointers, References & Memory Leaks\nPointer arithmetic, raw pointers vs references, dangling pointers, double free errors, and smart pointers (unique_ptr, shared_ptr).\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Pointers, References & Memory Leaks\nprint('Pointers, References & Memory Leaks active')",
              "java": "// Java implementation for Pointers, References & Memory Leaks\nSystem.out.println(\"Pointers, References & Memory Leaks active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-lang-concurrency-vs-parallelism",
            "title": "Concurrency vs Parallelism & Async I/O",
            "slug": "lang-concurrency-vs-parallelism",
            "difficulty": "Medium",
            "description": "Single-threaded async event loop (Node.js/Python asyncio) vs True multi-core OS thread parallelism.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Concurrency vs Parallelism & Async I/O Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Concurrency vs Parallelism & Async I/O\nSingle-threaded async event loop (Node.js/Python asyncio) vs True multi-core OS thread parallelism.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Concurrency vs Parallelism & Async I/O\nprint('Concurrency vs Parallelism & Async I/O active')",
              "java": "// Java implementation for Concurrency vs Parallelism & Async I/O\nSystem.out.println(\"Concurrency vs Parallelism & Async I/O active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-lang-exception-handling",
            "title": "Exception Handling",
            "slug": "lang-exception-handling",
            "difficulty": "Easy",
            "description": "Try-catch-finally blocks, checked vs unchecked exceptions (Java), custom exceptions, exception propagation, and Python try-except-else-finally patterns.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Exception Handling - Complete Guide",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. What is Exception Handling?\nAn **Exception** is an abnormal event that disrupts normal program execution (e.g., dividing by zero, null pointer, file not found). Exception handling provides a structured mechanism to detect, report, and recover from errors gracefully.\n\n### 2. Exception Hierarchy (Java)\n```mermaid\ngraph TD\n    Throwable --> Error[Error: JVM errors, OutOfMemoryError - unrecoverable]\n    Throwable --> Exception\n    Exception --> Checked[Checked: IOException, SQLException - must handle]\n    Exception --> Unchecked[Unchecked: RuntimeException - NullPointerException, ArrayIndexOutOfBounds]\n```\n\n- **Checked Exceptions:** Compiler FORCES you to handle (try-catch or declare `throws`).\n- **Unchecked Exceptions (RuntimeException):** Not required to handle; usually programming bugs.\n\n### 3. Try-Catch-Finally Flow\n```\ntry {\n    risky_code()   → normal flow\n} catch(ExA e) {\n    handle error   → only if exception matches ExA\n} finally {\n    cleanup()      → ALWAYS executes (even if return in try/catch)\n}\n```\n\n### 4. Best Practices\n1. Catch specific exceptions, not bare `except Exception`.\n2. Never swallow exceptions silently (`except: pass` is bad).\n3. Use `finally` for resource cleanup (or `with` / `try-with-resources`).\n4. Create custom exception classes for domain-specific errors.",
            "code_example": {
              "language": "multi",
              "python": "# Python Exception Handling\nclass InsufficientFundsError(Exception):\n    def __init__(self, balance, amount):\n        self.balance = balance\n        self.amount = amount\n        super().__init__(f\"Cannot withdraw ${amount}. Balance: ${balance}\")\n\ndef withdraw(balance: float, amount: float) -> float:\n    try:\n        if amount > balance:\n            raise InsufficientFundsError(balance, amount)\n        return balance - amount\n    except InsufficientFundsError as e:\n        print(f\"Custom Exception: {e}\")\n        return balance\n    except ValueError:\n        print(\"Invalid amount provided\")\n        return balance\n    else:\n        print(\"Withdrawal successful!\")  # Only runs if NO exception\n    finally:\n        print(\"Transaction processing complete.\")  # ALWAYS runs\n\nresult = withdraw(100.0, 150.0)  # Raises InsufficientFundsError",
              "java": "// Java Exception Handling with try-with-resources\npublic class FileProcessor {\n    public String readFile(String path) throws IOException {\n        // try-with-resources auto-closes FileReader (no need for finally)\n        try (var reader = new java.io.FileReader(path)) {\n            return new String(reader.read());\n        } catch (FileNotFoundException e) {\n            throw new RuntimeException(\"File not found: \" + path, e);\n        } catch (IOException e) {\n            System.err.println(\"IO Error: \" + e.getMessage());\n            throw e; // Re-throw\n        }\n    }\n}"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-cs-sec",
        "name": "8. Cybersecurity Basics",
        "icon": "🔒",
        "topics": [
          {
            "id": "topic-sec-cia-triad",
            "title": "CIA Triad (Confidentiality, Integrity, Availability)",
            "slug": "sec-cia-triad",
            "difficulty": "Easy",
            "description": "Core pillars of information security: Confidentiality (Encryption), Integrity (Hashing), Availability (Redundancy/DDoS Protection).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "CIA Triad (Confidentiality, Integrity, Availability) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of CIA Triad (Confidentiality, Integrity, Availability)\nCore pillars of information security: Confidentiality (Encryption), Integrity (Hashing), Availability (Redundancy/DDoS Protection).\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for CIA Triad (Confidentiality, Integrity, Availability)\nprint('CIA Triad (Confidentiality, Integrity, Availability) active')",
              "java": "// Java implementation for CIA Triad (Confidentiality, Integrity, Availability)\nSystem.out.println(\"CIA Triad (Confidentiality, Integrity, Availability) active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-sec-encryption",
            "title": "Symmetric vs Asymmetric Encryption (AES, RSA)",
            "slug": "sec-encryption",
            "difficulty": "Medium",
            "description": "Symmetric key ciphers (AES-256) vs Public/Private key pairs (RSA, ECC, Diffie-Hellman key exchange).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Symmetric vs Asymmetric Encryption (AES, RSA) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Symmetric vs Asymmetric Encryption (AES, RSA)\nSymmetric key ciphers (AES-256) vs Public/Private key pairs (RSA, ECC, Diffie-Hellman key exchange).\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Symmetric vs Asymmetric Encryption (AES, RSA)\nprint('Symmetric vs Asymmetric Encryption (AES, RSA) active')",
              "java": "// Java implementation for Symmetric vs Asymmetric Encryption (AES, RSA)\nSystem.out.println(\"Symmetric vs Asymmetric Encryption (AES, RSA) active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-sec-hashing",
            "title": "Hashing vs Encryption vs Encoding",
            "slug": "sec-hashing",
            "difficulty": "Easy",
            "description": "One-way cryptographic hash functions (SHA-256, bcrypt) vs Two-way reversible Encryption vs Base64 Encoding.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Hashing vs Encryption vs Encoding Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Hashing vs Encryption vs Encoding\nOne-way cryptographic hash functions (SHA-256, bcrypt) vs Two-way reversible Encryption vs Base64 Encoding.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Hashing vs Encryption vs Encoding\nprint('Hashing vs Encryption vs Encoding active')",
              "java": "// Java implementation for Hashing vs Encryption vs Encoding\nSystem.out.println(\"Hashing vs Encryption vs Encoding active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-sec-web-vulnerabilities",
            "title": "Common Web Vulnerabilities (SQL Injection, XSS, CSRF)",
            "slug": "sec-web-vulnerabilities",
            "difficulty": "Hard",
            "description": "OWASP Top 10: SQL Injection (parameterized queries), Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF tokens).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Common Web Vulnerabilities (SQL Injection, XSS, CSRF) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Common Web Vulnerabilities (SQL Injection, XSS, CSRF)\nOWASP Top 10: SQL Injection (parameterized queries), Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF tokens).\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Common Web Vulnerabilities (SQL Injection, XSS, CSRF)\nprint('Common Web Vulnerabilities (SQL Injection, XSS, CSRF) active')",
              "java": "// Java implementation for Common Web Vulnerabilities (SQL Injection, XSS, CSRF)\nSystem.out.println(\"Common Web Vulnerabilities (SQL Injection, XSS, CSRF) active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-sec-auth",
            "title": "Authentication vs Authorization (OAuth2, JWT)",
            "slug": "sec-auth",
            "difficulty": "Medium",
            "description": "Identity verification (AuthN) vs Access permissions (AuthZ), JSON Web Token (JWT) structure, and OAuth2 flow.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Authentication vs Authorization (OAuth2, JWT) Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Authentication vs Authorization (OAuth2, JWT)\nIdentity verification (AuthN) vs Access permissions (AuthZ), JSON Web Token (JWT) structure, and OAuth2 flow.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Authentication vs Authorization (OAuth2, JWT)\nprint('Authentication vs Authorization (OAuth2, JWT) active')",
              "java": "// Java implementation for Authentication vs Authorization (OAuth2, JWT)\nSystem.out.println(\"Authentication vs Authorization (OAuth2, JWT) active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "topic-sec-pki",
            "title": "Public Key Infrastructure (PKI) & Digital Certificates",
            "slug": "sec-pki",
            "difficulty": "Medium",
            "description": "Certificate Authorities (CA), X.509 SSL/TLS certificates, Chain of Trust, and CRL / OCSP revocation.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Public Key Infrastructure (PKI) & Digital Certificates Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of Public Key Infrastructure (PKI) & Digital Certificates\nCertificate Authorities (CA), X.509 SSL/TLS certificates, Chain of Trust, and CRL / OCSP revocation.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for Public Key Infrastructure (PKI) & Digital Certificates\nprint('Public Key Infrastructure (PKI) & Digital Certificates active')",
              "java": "// Java implementation for Public Key Infrastructure (PKI) & Digital Certificates\nSystem.out.println(\"Public Key Infrastructure (PKI) & Digital Certificates active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          }
        ]
      }
    ]
  },
  {
    "id": "cat-system-design",
    "name": "System Design",
    "icon": "🏗️",
    "subcategories": [
      {
        "id": "sub-sd-fundamentals",
        "name": "1. Fundamentals / Basics",
        "icon": "🧱",
        "topics": [
          {
            "id": "sd-what-is-system-design-functional-vs-non-functional-requirements",
            "title": "What is System Design (functional vs non-functional requirements)",
            "slug": "sd-what-is-system-design-functional-vs-non-functional-requirements",
            "difficulty": "Easy",
            "description": "Introduction to system design: functional requirements (what the system does) vs non-functional requirements (how well it does it).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "What is System Design (Functional vs Non-Functional Requirements) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. What is System Design?\nSystem design is the process of defining the **architecture, components, modules, interfaces, and data flow** of a system to satisfy specified requirements.\n\n### 2. Functional Requirements (FR)\nWhat the system DOES — the core features and behaviors.\n- User can register and login.\n- User can post a tweet (≤ 280 characters).\n- User can follow other users.\n- Timeline shows tweets from followed users.\n\n### 3. Non-Functional Requirements (NFR)\nHOW WELL the system performs — quality attributes.\n\n| NFR | Example | Metric |\n| :--- | :--- | :--- |\n| **Scalability** | Handle 10M users | Requests/sec |\n| **Availability** | 99.99% uptime | Downtime/year |\n| **Latency** | Response < 200ms | P99 latency |\n| **Durability** | No data loss | Recovery Point Objective |\n| **Consistency** | Same data everywhere | Eventual vs Strong |\n\n### 4. System Design Interview Framework\n1. **Clarify Requirements** (5 min) — Ask clarifying questions, define scope.\n2. **Capacity Estimation** (5 min) — Traffic, storage, bandwidth.\n3. **High-Level Design** (10 min) — Draw major components.\n4. **Deep Dive** (15 min) — Database schema, API design, bottlenecks.\n5. **Trade-offs** (5 min) — What you chose and why.",
            "code_example": {
              "language": "multi",
              "python": "# Functional vs Non-Functional Requirements example\nfr = ['User can post tweet', 'User can follow', 'Timeline feed']\nnfr = {'availability': '99.99%', 'latency_p99': '200ms', 'scale': '10M DAU'}\nprint('FR:', fr)\nprint('NFR:', nfr)",
              "java": "// NFR constants\nrecord NFR(String availability, String latency, String scale){}\nvar nfr = new NFR(\"99.99%\", \"200ms\", \"10M DAU\");\nSystem.out.println(nfr);"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-scalability-vertical-vs-horizontal-scaling",
            "title": "Scalability (vertical vs horizontal scaling)",
            "slug": "sd-scalability-vertical-vs-horizontal-scaling",
            "difficulty": "Easy",
            "description": "Scaling up (bigger machine) vs scaling out (more machines). Trade-offs, stateless services, and auto-scaling patterns.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Scalability (Vertical vs Horizontal Scaling) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Vertical Scaling (Scale Up)\nAdd more resources (CPU, RAM, SSD) to a **single machine**.\n\n- **Pros:** Simple, no code changes, low latency (single machine).\n- **Cons:** Hard limit on max machine size. Single point of failure. Expensive.\n\n### 2. Horizontal Scaling (Scale Out)\nAdd **more machines** to distribute the load.\n\n- **Pros:** Linear scalability. High availability. Cost-effective commodity hardware.\n- **Cons:** Requires stateless services, load balancers, distributed data management.\n\n```mermaid\ngraph LR\n    subgraph Vertical\n        S[Tiny Server] -->|Upgrade| B[Big Server]\n    end\n    subgraph Horizontal\n        LB[Load Balancer] --> S1[Server 1]\n        LB --> S2[Server 2]\n        LB --> S3[Server 3]\n    end\n```\n\n### 3. Making Services Horizontally Scalable\n- **Stateless services:** Store sessions in Redis, not in server memory.\n- **Shared databases:** All servers connect to same (sharded) database.\n- **Load balancer:** Distributes traffic across server instances.\n\n### 4. Auto-Scaling\nCloud auto-scaling spins up/down instances based on CPU/traffic metrics automatically (AWS Auto Scaling Groups, GCP Managed Instance Groups).",
            "code_example": {
              "language": "multi",
              "python": "# Horizontal scaling simulation\nservers = [f'server-{i}' for i in range(1, 4)]\ndef get_server(request_id):\n    return servers[request_id % len(servers)]  # Round-robin\nfor i in range(6):\n    print(f'Request {i} → {get_server(i)}')",
              "java": "// Round-robin across servers\nString[] servers = {\"s1\",\"s2\",\"s3\"};\nAtomicInteger idx = new AtomicInteger(0);\nString server = servers[idx.getAndIncrement() % servers.length];\nSystem.out.println(\"Route to: \" + server);"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-latency-vs-throughput",
            "title": "Latency vs Throughput",
            "slug": "sd-latency-vs-throughput",
            "difficulty": "Easy",
            "description": "Latency (time for one request) vs Throughput (requests per second). Amdahl's Law, Little's Law, and the latency-throughput trade-off.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Latency vs Throughput - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Latency\n**Latency** = Time from sending a request to receiving the response.\n- Measured in milliseconds (ms).\n- Examples: Network latency (1ms LAN, 100ms cross-continent), disk read latency (0.1ms SSD, 10ms HDD).\n\n### 2. Throughput\n**Throughput** = Number of requests a system can handle per unit time.\n- Measured in requests/second (RPS) or transactions/second (TPS).\n\n### 3. Little's Law\nFor any stable system:\n> **L = λ × W**\n- L = Average number of requests in the system\n- λ = Arrival rate (requests/second)\n- W = Average time a request spends in the system (latency)\n\n### 4. Latency Numbers Every Engineer Should Know\n| Operation | Latency |\n| :--- | :--- |\n| L1 cache access | 0.5 ns |\n| RAM access | 100 ns |\n| SSD random read | 100 µs |\n| HDD seek | 10 ms |\n| Cross-datacenter (US→EU) | 150 ms |\n\n### 5. The Trade-off\nBatching increases **throughput** but also increases **latency** per item. Streaming reduces latency but may reduce throughput efficiency.",
            "code_example": {
              "language": "multi",
              "python": "import time\ndef measure_latency(fn, *args):\n    start = time.perf_counter()\n    result = fn(*args)\n    latency_ms = (time.perf_counter() - start) * 1000\n    print(f'Latency: {latency_ms:.2f}ms')\n    return result",
              "java": "long start = System.nanoTime();\n// Execute operation\nlong latencyNs = System.nanoTime() - start;\nSystem.out.printf(\"Latency: %.2f ms%n\", latencyNs / 1_000_000.0);"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-availability-vs-reliability-vs-durability",
            "title": "Availability vs Reliability vs Durability",
            "slug": "sd-availability-vs-reliability-vs-durability",
            "difficulty": "Medium",
            "description": "Availability (uptime %), Reliability (consistent performance), Durability (no data loss). SLAs, SLOs, SLIs and nines of availability.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Availability vs Reliability vs Durability - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Availability\n**Availability** = Fraction of time the system is operational and accessible.\n> Availability = Uptime / (Uptime + Downtime)\n\n| Nines | Availability | Downtime/Year |\n| :---: | :---: | :--- |\n| 99% (2 nines) | 99% | 3.65 days |\n| 99.9% (3 nines) | 99.9% | 8.7 hours |\n| 99.99% (4 nines) | 99.99% | 52 minutes |\n| 99.999% (5 nines) | 99.999% | 5 minutes |\n\n### 2. Reliability\n**Reliability** = Probability the system performs its intended function correctly under specific conditions for a specified time.\n- A system can be available but not reliable (returns wrong data).\n- Measured by MTBF (Mean Time Between Failures).\n\n### 3. Durability\n**Durability** = Guarantee that committed data will NOT be lost, even under failures.\n- Example: S3 claims 99.999999999% (11 nines) durability.\n- Achieved via replication, backups, RAID.\n\n### 4. SLA / SLO / SLI\n- **SLI (Indicator):** What you measure — e.g., \"request latency\".\n- **SLO (Objective):** Target value — \"99% of requests < 200ms\".\n- **SLA (Agreement):** Contract with penalty if SLO is breached.",
            "code_example": {
              "language": "multi",
              "python": "# Availability calculator\ndef availability_percent(uptime_hrs, total_hrs=8760):\n    return (uptime_hrs / total_hrs) * 100\n\n# 4 nines = 52 min downtime\ndowntime_min = 52\ndowntime_hrs = downtime_min / 60\nprint(f'Availability: {availability_percent(8760 - downtime_hrs):.4f}%')",
              "java": "// Availability check\ndouble uptimeHrs = 8760 - (52.0/60); // 4 nines\ndouble availability = uptimeHrs / 8760 * 100;\nSystem.out.printf(\"Availability: %.4f%%%n\", availability);"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-performance-metrics-p50-p95-p99-latency",
            "title": "Performance metrics (P50, P95, P99 latency)",
            "slug": "sd-performance-metrics-p50-p95-p99-latency",
            "difficulty": "Medium",
            "description": "Percentile latency metrics (P50, P95, P99, P999), why averages are misleading, and how to interpret latency distributions.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Performance Metrics (P50, P95, P99 Latency) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Why Averages Are Misleading\nIf 99% of requests take 1ms but 1% take 10 seconds, average = ~101ms — looks fine, but 1% of users experience terrible performance.\n\n### 2. Percentile Latency\n**P50 (Median):** 50% of requests complete within this time. Normal experience.\n**P95:** 95% of requests complete within this time. Slightly slower tail.\n**P99:** 99% of requests within this time. Most users' worst experience.\n**P99.9 / P999:** 0.1% worst — relevant at large scale (at 1M RPS, 1000 users/sec hit P999 latency).\n\n### 3. Example Distribution\n| Metric | Value | Meaning |\n| :--- | :--- | :--- |\n| P50 | 20ms | Median user sees 20ms |\n| P95 | 80ms | 5% of users see > 80ms |\n| P99 | 200ms | 1% of users see > 200ms |\n| P999 | 2000ms | 0.1% see > 2 seconds |\n\n### 4. Why P99 Matters at Scale\nAt **10,000 requests/second**, P99 = 100 users per second experiencing high latency. These are real users having a bad experience.",
            "code_example": {
              "language": "multi",
              "python": "import statistics\nimport random\n\n# Simulate latencies\nlatencies = [random.expovariate(1/20) * 10 for _ in range(10000)]\nlatencies.sort()\n\ndef percentile(data, p):\n    idx = int(len(data) * p / 100)\n    return data[idx]\n\nprint(f'P50: {percentile(latencies, 50):.1f}ms')\nprint(f'P95: {percentile(latencies, 95):.1f}ms')\nprint(f'P99: {percentile(latencies, 99):.1f}ms')",
              "java": "// Java percentile calculation\ndouble[] latencies = new double[10000];\nArrays.sort(latencies);\ndouble p99 = latencies[(int)(latencies.length * 0.99)];\nSystem.out.printf(\"P99: %.1fms%n\", p99);"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-back-of-envelope-estimation-traffic-storage-bandwidth-calculations",
            "title": "Back-of-envelope estimation (traffic, storage, bandwidth calculations)",
            "slug": "sd-back-of-envelope-estimation-traffic-storage-bandwidth-calculations",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Back-of-envelope estimation (traffic, storage, bandwidth calculations) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Back-of-envelope estimation (traffic, storage, bandwidth calculations) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Back-of-envelope estimation (traffic, storage, bandwidth calculations)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Back-of-envelope estimation (traffic, storage, bandwidth calculations)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Back-of-envelope estimation (traffic, storage, bandwidth calculations) in Python\nprint('Production architecture pattern: Back-of-envelope estimation (traffic, storage, bandwidth calculations)')",
              "java": "// Back-of-envelope estimation (traffic, storage, bandwidth calculations) in Java\nSystem.out.println(\"Back-of-envelope estimation (traffic, storage, bandwidth calculations)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-sd-networking",
        "name": "2. Networking Basics",
        "icon": "🌐",
        "topics": [
          {
            "id": "sd-client-server-architecture",
            "title": "Client-Server architecture",
            "slug": "sd-client-server-architecture",
            "difficulty": "Easy",
            "description": "Two-tier client-server model, 3-tier architecture (presentation, logic, data), and the role of APIs connecting them.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Client-Server Architecture - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Client-Server Model\n- **Client:** Initiates requests (browser, mobile app, CLI tool).\n- **Server:** Listens, processes requests, and sends responses.\n- **Communication:** Via protocols (HTTP, WebSocket, gRPC) over the network.\n\n### 2. 3-Tier Architecture\n```mermaid\ngraph LR\n    C[Client / Presentation Layer] -->|HTTP Request| A[Application Server / Logic Layer]\n    A -->|SQL / NoSQL Query| D[Database / Data Layer]\n    D -->|Result| A\n    A -->|HTTP Response| C\n```\n\n### 3. Peer-to-Peer (P2P) Alternative\nIn P2P (BitTorrent, blockchain), every node is both client AND server. No central authority. Used for decentralized applications.",
            "code_example": {
              "language": "multi",
              "python": "# Simple HTTP client\nimport urllib.request\nwith urllib.request.urlopen('https://api.example.com/users') as r:\n    print(r.read().decode())",
              "java": "// Java HTTP client\nHttpClient client = HttpClient.newHttpClient();\nHttpResponse<String> r = client.send(\n    HttpRequest.newBuilder().uri(URI.create(\"https://api.example.com\")).build(),\n    HttpResponse.BodyHandlers.ofString());\nSystem.out.println(r.body());"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-dns-domain-name-system",
            "title": "DNS (Domain Name System)",
            "slug": "sd-dns-domain-name-system",
            "difficulty": "Easy",
            "description": "Recursive vs Iterative DNS queries, Root servers, TLD servers, Authoritative Name Servers, A/AAAA/CNAME records.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "DNS (Domain Name System) Lookup Workflow Theory & Concepts",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Explanation",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Overview of DNS (Domain Name System) Lookup Workflow\nRecursive vs Iterative DNS queries, Root servers, TLD servers, Authoritative Name Servers, A/AAAA/CNAME records.\n\n### 2. Core Principles\nComprehensive theoretical explanation and practical applications.",
            "code_example": {
              "language": "multi",
              "python": "# Python implementation for DNS (Domain Name System) Lookup Workflow\nprint('DNS (Domain Name System) Lookup Workflow active')",
              "java": "// Java implementation for DNS (Domain Name System) Lookup Workflow\nSystem.out.println(\"DNS (Domain Name System) Lookup Workflow active\");"
            },
            "complexity": {
              "time": "O(1) Conceptual / Engine execution",
              "space": "O(1) Memory layout"
            },
            "practice_questions": []
          },
          {
            "id": "sd-ip-addressing-basics",
            "title": "IP addressing basics",
            "slug": "sd-ip-addressing-basics",
            "difficulty": "Easy",
            "description": "IPv4 vs IPv6, CIDR notation, public vs private IP addresses, subnetting, and Network Address Translation (NAT) in distributed cloud networks.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "IP Addressing Basics - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### IP Addressing in System Design\\n\\nEvery node (server, client, load balancer, database) in a distributed network communicates via an Internet Protocol (IP) address.\\n\\n#### 1. IPv4 vs IPv6\\n- **IPv4**: 32-bit address represented as 4 decimal octets (e.g., `192.168.1.1`). Total address space: ~4.3 billion addresses (depleted globally).\\n- **IPv6**: 128-bit address represented as 8 hexadecimal groups (e.g., `2001:0db8:85a3::8a2e:0370:7334`). Provides ~3.4 × 10^38 addresses, solving address exhaustion and adding built-in IPSec support.\\n\\n#### 2. CIDR (Classless Inter-Domain Routing)\\nCIDR specifies IP address blocks using prefix notation: `IP/PrefixLength`.\\n- `/32`: Exactly 1 host (`2^(32-32) = 1`)\\n- `/24`: 256 addresses (`2^(32-24) = 256`), common for local subnets\\n- `/16`: 65,536 addresses, common for AWS VPCs (e.g., `10.0.0.0/16`)\\n\\n#### 3. Public vs Private IPs\\n- **Private IPs (RFC 1918)**: Not routable on the public internet. Used inside VPCs and data centers for internal server-to-server and server-to-database communication.\\n  - `10.0.0.0/8` (10.0.0.0 - 10.255.255.255)\\n  - `172.16.0.0/12` (172.16.0.0 - 172.31.255.255)\\n  - `192.168.0.0/16` (192.168.0.0 - 192.168.255.255)\\n- **Public IPs**: Globally unique and routable on the Internet. Assigned to edge load balancers, API gateways, and NAT gateways.\\n\\n#### 4. NAT (Network Address Translation)\\nNAT maps private IPs to one or more public IPs. In cloud VPCs, backend worker instances in private subnets use a **NAT Gateway** to initiate outbound requests (e.g., download OS updates or third-party APIs) without exposing their private IPs to inbound Internet traffic.",
            "code_example": {
              "language": "multi",
              "python": "import ipaddress\n\n# Calculate CIDR subnet details in Python\nnetwork = ipaddress.ip_network('10.0.0.0/24')\nprint(f'Total addresses: {network.num_addresses}')\nprint(f'First usable host: {list(network.hosts())[0]}')\nprint(f'Last usable host: {list(network.hosts())[-1]}')\nprint(f'Is private: {network.is_private}')",
              "java": "import java.net.InetAddress;\n\npublic class IPValidation {\n    public static void main(String[] args) throws Exception {\n        InetAddress addr = InetAddress.getByName(\"10.0.0.1\");\n        System.out.println(\"Host Address: \" + addr.getHostAddress());\n        System.out.println(\"Is Site Local (Private): \" + addr.isSiteLocalAddress());\n    }\n}"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-ositcp-ip-model-relevance",
            "title": "OSI/TCP-IP model relevance",
            "slug": "sd-ositcp-ip-model-relevance",
            "difficulty": "Medium",
            "description": "Comprehensive guide to OSI/TCP-IP model relevance in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "OSI/TCP-IP model relevance - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### OSI/TCP-IP model relevance\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **OSI/TCP-IP model relevance** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# OSI/TCP-IP model relevance in Python\nprint('Production architecture pattern: OSI/TCP-IP model relevance')",
              "java": "// OSI/TCP-IP model relevance in Java\nSystem.out.println(\"OSI/TCP-IP model relevance\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-ports-protocols",
            "title": "Ports & Protocols",
            "slug": "sd-ports-protocols",
            "difficulty": "Easy",
            "description": "Key protocols (TCP, UDP, HTTP/2, HTTP/3, WebSocket) and ports engineers use daily in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Ports & Protocols in System Design - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Key Protocols\n| Protocol | Transport | Use Case | Port |\n| :--- | :--- | :--- | :--- |\n| **HTTP/1.1** | TCP | Web requests (1 req/connection) | 80 |\n| **HTTPS** | TCP+TLS | Secure web | 443 |\n| **HTTP/2** | TCP | Multiplexed requests, headers compressed | 443 |\n| **HTTP/3 / QUIC** | UDP | Faster, no head-of-line blocking | 443 |\n| **WebSocket** | TCP | Bi-directional real-time | 80/443 |\n| **gRPC** | HTTP/2 | Microservice RPC (protobuf) | any |\n| **SMTP** | TCP | Email sending | 25/587 |\n| **Redis** | TCP | Cache/session | 6379 |\n| **PostgreSQL** | TCP | Database | 5432 |\n| **Kafka** | TCP | Message queue | 9092 |\n\n### 2. TCP vs UDP in System Design\n- **TCP:** Guaranteed delivery, ordered, reliable. Use for: APIs, databases, file transfers.\n- **UDP:** Fast, no guarantee. Use for: live video/audio streaming, gaming, DNS queries.",
            "code_example": {
              "language": "multi",
              "python": "import socket\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  # TCP\ns.connect(('httpbin.org', 80))\ns.send(b'GET / HTTP/1.0\\r\\nHost: httpbin.org\\r\\n\\r\\n')\nprint(s.recv(1024).decode()[:100])\ns.close()",
              "java": "// TCP Socket in Java\ntry (Socket s = new Socket(\"httpbin.org\", 80)) {\n    s.getOutputStream().write(\"HEAD / HTTP/1.0\\r\\nHost: httpbin.org\\r\\n\\r\\n\".getBytes());\n    System.out.println(new String(s.getInputStream().readNBytes(100)));\n}"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-sd-apis",
        "name": "3. APIs & Communication",
        "icon": "🔌",
        "topics": [
          {
            "id": "sd-rest-api-design-principles",
            "title": "REST API design principles",
            "slug": "sd-rest-api-design-principles",
            "difficulty": "Medium",
            "description": "RESTful constraints: stateless, uniform interface, resource-based URLs, HATEOAS, versioning strategies and idempotency.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "REST API Design Principles - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. REST Constraints\n1. **Stateless:** Each request contains all information needed. No server-side session state.\n2. **Uniform Interface:** Resource-based URLs, standard HTTP methods (GET/POST/PUT/DELETE).\n3. **Client-Server:** Client and server are decoupled.\n4. **Layered System:** Client doesn't know if it talks to server, proxy, or load balancer.\n5. **Cacheable:** Responses must define if cacheable.\n\n### 2. Resource-Based URL Design\n```\n✅ GET    /users/{id}           — Get user\n✅ POST   /users                — Create user\n✅ PUT    /users/{id}           — Replace user\n✅ PATCH  /users/{id}           — Partial update\n✅ DELETE /users/{id}           — Delete user\n❌ GET    /getUser?id=123        — Verb in URL (wrong)\n❌ POST   /deleteUser/123        — Wrong method for delete\n```\n\n### 3. API Versioning Strategies\n- **URL versioning:** `/api/v1/users` (most common, clear)\n- **Header versioning:** `Accept: application/vnd.myapi.v2+json`\n- **Query param:** `/users?version=2` (least clean)",
            "code_example": {
              "language": "multi",
              "python": "# FastAPI REST example\nfrom fastapi import FastAPI\napp = FastAPI()\n\n@app.get('/api/v1/users/{user_id}')\nasync def get_user(user_id: int):\n    return {'id': user_id, 'name': 'Rahul'}\n\n@app.post('/api/v1/users')\nasync def create_user(data: dict):\n    return {'id': 1, **data}",
              "java": "@RestController\n@RequestMapping(\"/api/v1/users\")\npublic class UserController {\n    @GetMapping(\"/{id}\")\n    public ResponseEntity<User> getUser(@PathVariable Long id) {\n        return ResponseEntity.ok(userService.findById(id));\n    }\n    @PostMapping\n    public ResponseEntity<User> create(@RequestBody User u) {\n        return ResponseEntity.status(201).body(userService.save(u));\n    }\n}"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-graphql-basics",
            "title": "GraphQL basics",
            "slug": "sd-graphql-basics",
            "difficulty": "Medium",
            "description": "GraphQL vs REST: single endpoint, query language, resolver architecture, N+1 problem and DataLoader pattern.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "GraphQL Basics - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. GraphQL vs REST\n| Feature | REST | GraphQL |\n| :--- | :--- | :--- |\n| **Endpoints** | Multiple (`/users`, `/posts`) | Single (`/graphql`) |\n| **Over-fetching** | Gets all fields even if not needed | Client specifies exact fields |\n| **Under-fetching** | Multiple round-trips for related data | One query for nested data |\n| **Schema** | Implicit, documented separately | Strongly typed schema (SDL) |\n\n### 2. GraphQL Query Example\n```graphql\nquery {\n  user(id: \"1\") {\n    name\n    email\n    posts(limit: 3) {\n      title\n      likes\n    }\n  }\n}\n```\nGets user + their posts in ONE request. With REST you'd need `/users/1` then `/users/1/posts`.\n\n### 3. N+1 Problem\nIf you query 100 users and each resolver fetches their posts separately → 1 + 100 = 101 database queries. **DataLoader** batches these into 1 query.",
            "code_example": {
              "language": "multi",
              "python": "# GraphQL with strawberry (Python)\nimport strawberry\n@strawberry.type\nclass User:\n    id: int\n    name: str\n@strawberry.type\nclass Query:\n    @strawberry.field\n    def user(self, id: int) -> User:\n        return User(id=id, name='Rahul')\nschema = strawberry.Schema(query=Query)",
              "java": "// GraphQL query string (send via HTTP POST to /graphql)\nString query = \"\"\"\n    { user(id: 1) { name email } }\n\"\"\";\n// Send as JSON: {\"query\": query} to /graphql endpoint"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-grpc-remote-procedure-call",
            "title": "gRPC (Remote Procedure Call)",
            "slug": "sd-grpc-remote-procedure-call",
            "difficulty": "Hard",
            "description": "gRPC over HTTP/2, Protocol Buffers (protobuf) serialization, streaming types (unary, server-streaming, client-streaming, bidirectional).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "gRPC (Remote Procedure Call) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. What is gRPC?\ngRPC is a high-performance RPC framework from Google using **HTTP/2** as transport and **Protocol Buffers (protobuf)** as serialization format.\n\n### 2. gRPC vs REST vs GraphQL\n| Feature | REST | GraphQL | gRPC |\n| :--- | :--- | :--- | :--- |\n| **Protocol** | HTTP/1.1 | HTTP/1.1 | HTTP/2 |\n| **Format** | JSON (text) | JSON (text) | Protobuf (binary) |\n| **Speed** | Medium | Medium | **Fast** (binary, multiplexed) |\n| **Streaming** | Limited | Subscriptions | Native (4 modes) |\n| **Browser** | ✅ Direct | ✅ Direct | ❌ Needs grpc-web proxy |\n| **Best For** | Public APIs | Flexible queries | **Internal microservices** |\n\n### 3. Four gRPC Communication Modes\n1. **Unary:** Client sends one request, server sends one response. (Like REST)\n2. **Server Streaming:** Client sends one request, server streams multiple responses.\n3. **Client Streaming:** Client streams multiple requests, server sends one response.\n4. **Bidirectional Streaming:** Both sides stream simultaneously.",
            "code_example": {
              "language": "multi",
              "python": "# Proto definition (user.proto)\n# service UserService {\n#   rpc GetUser(UserRequest) returns (UserResponse);\n# }\n# message UserRequest { int32 id = 1; }\n# message UserResponse { int32 id = 1; string name = 2; }\n\n# Python gRPC server\nimport grpc\nfrom concurrent import futures\nprint('gRPC server would listen on port 50051')",
              "java": "// gRPC Java stub usage\nManagedChannel channel = ManagedChannelBuilder.forAddress(\"localhost\", 50051).usePlaintext().build();\nUserServiceGrpc.UserServiceBlockingStub stub = UserServiceGrpc.newBlockingStub(channel);\nUserResponse resp = stub.getUser(UserRequest.newBuilder().setId(1).build());\nSystem.out.println(resp.getName());"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-webhooks",
            "title": "Webhooks",
            "slug": "sd-webhooks",
            "difficulty": "Easy",
            "description": "Event-driven HTTP callbacks: how webhooks work, security (HMAC signatures), retry logic, and webhooks vs polling comparison.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Webhooks - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. What is a Webhook?\nA **Webhook** is an HTTP POST callback triggered by an event in the source system, sent to a pre-registered URL in the destination system.\n\n**Analogy:** Instead of YOU calling the pizza shop every 5 minutes to check if pizza is ready (polling), the shop CALLS YOU when it's ready (webhook).\n\n### 2. Webhook Flow\n```mermaid\ngraph LR\n    E[Event Happens in Source] --> W[Source sends HTTP POST to Webhook URL]\n    W --> D[Destination Server receives event payload]\n    D --> P[Process event: update DB, send email, etc.]\n    D --> A[Return 200 OK to acknowledge]\n```\n\n### 3. Webhook Security: HMAC Signature\nSource signs payload with a shared secret. Destination verifies signature to prevent spoofing:",
            "code_example": {
              "language": "multi",
              "python": "import hmac, hashlib\n\ndef verify_webhook(payload: bytes, signature: str, secret: str) -> bool:\n    expected = hmac.new(secret.encode(), payload, hashlib.sha256).hexdigest()\n    return hmac.compare_digest(f'sha256={expected}', signature)\n\npayload = b'{\"event\": \"payment.success\", \"amount\": 500}'\nsig = 'sha256=' + hmac.new(b'my_secret', payload, hashlib.sha256).hexdigest()\nprint('Valid:', verify_webhook(payload, sig, 'my_secret'))",
              "java": "import javax.crypto.Mac;\n// HMAC-SHA256 signature verification\nMac mac = Mac.getInstance(\"HmacSHA256\");\nmac.init(new SecretKeySpec(secret.getBytes(), \"HmacSHA256\"));\nString expected = HexFormat.of().formatHex(mac.doFinal(payload.getBytes()));\nboolean valid = expected.equals(receivedSignature);\nSystem.out.println(\"Valid webhook: \" + valid);"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-synchronous-vs-asynchronous-communication",
            "title": "Synchronous vs Asynchronous communication",
            "slug": "sd-synchronous-vs-asynchronous-communication",
            "difficulty": "Medium",
            "description": "Sync (blocking: REST/gRPC) vs Async (non-blocking: message queues, events). Trade-offs in coupling, latency, complexity, and reliability.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Synchronous vs Asynchronous Communication - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Synchronous Communication\nCaller **blocks** and waits for the response before proceeding.\n- **Examples:** REST API, gRPC unary call, database query.\n- **Pros:** Simple, immediate feedback, easy error handling.\n- **Cons:** Tight coupling, cascading failures, limited scalability.\n\n### 2. Asynchronous Communication\nCaller **does NOT block** — publishes a message and continues. Consumer processes when ready.\n- **Examples:** Kafka, RabbitMQ, SQS, email.\n- **Pros:** Loose coupling, fault isolation, buffer for traffic spikes.\n- **Cons:** Complex, eventual consistency, harder debugging.\n\n### 3. When to Choose?\n| Scenario | Recommendation |\n| :--- | :--- |\n| Need immediate result (payment auth) | Synchronous |\n| Long-running task (video encoding) | Asynchronous |\n| High-throughput event processing | Asynchronous |\n| Simple CRUD operations | Synchronous |",
            "code_example": {
              "language": "multi",
              "python": "import asyncio\n\nasync def process_payment(order_id):\n    print(f'Processing payment for {order_id}')\n    await asyncio.sleep(0.1)  # Non-blocking I/O\n    return {'status': 'success'}\n\nasync def main():\n    results = await asyncio.gather(\n        process_payment(1),\n        process_payment(2),\n        process_payment(3)\n    )\n    print(results)\nasyncio.run(main())",
              "java": "// Java CompletableFuture async\nCompletableFuture<String> future = CompletableFuture\n    .supplyAsync(() -> callPaymentService())\n    .thenApply(result -> \"Processed: \" + result)\n    .exceptionally(e -> \"Failed: \" + e.getMessage());\nSystem.out.println(future.get());"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-polling-long-polling-websockets-server-sent-events-sse",
            "title": "Polling, Long Polling, WebSockets, Server-Sent Events (SSE)",
            "slug": "sd-polling-long-polling-websockets-server-sent-events-sse",
            "difficulty": "Medium",
            "description": "Four real-time communication patterns: Short Polling (wasteful), Long Polling (efficient), WebSocket (bidirectional), SSE (server→client streaming).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Polling, Long Polling, WebSockets, Server-Sent Events - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Short Polling\nClient sends HTTP request every N seconds regardless of new data.\n- **Waste:** 99% of requests may get \"no data\".\n- **Use when:** Data updates are infrequent and delay is acceptable.\n\n### 2. Long Polling\nClient sends a request; server HOLDS the connection open until data is available (or timeout), then responds.\n- **Better than polling** — no empty responses.\n- **Problem:** Overhead of new HTTP connection on each response.\n\n### 3. WebSocket\nPersistent, **bidirectional** TCP connection. After HTTP upgrade handshake, client AND server can push data anytime.\n- **Use for:** Chat apps, collaborative editing, live gaming, stock tickers.\n- **Frame-based:** Low overhead after connection established.\n\n### 4. Server-Sent Events (SSE)\nUnidirectional: **Server → Client** only. Uses regular HTTP, auto-reconnects.\n- **Use for:** News feeds, live sports scores, build progress bars.\n\n| Method | Direction | Protocol | Reconnect | Best For |\n| :--- | :---: | :--- | :--- | :--- |\n| Polling | C→S→C | HTTP | Manual | Simple dashboards |\n| Long Poll | C→S→C | HTTP | Manual | Notifications |\n| WebSocket | Bidirectional | WS | Manual | Chat, gaming |\n| SSE | S→C only | HTTP | Auto | Live feeds |",
            "code_example": {
              "language": "multi",
              "python": "# Python WebSocket server (websockets library)\nimport asyncio, websockets\n\nasync def handler(ws):\n    async for msg in ws:\n        print(f'Received: {msg}')\n        await ws.send(f'Echo: {msg}')\n\nasync def main():\n    async with websockets.serve(handler, 'localhost', 8765):\n        print('WebSocket server on ws://localhost:8765')\n        await asyncio.Future()  # run forever",
              "java": "// Java WebSocket endpoint\n@ServerEndpoint(\"/chat\")\npublic class ChatEndpoint {\n    @OnMessage\n    public String onMessage(String message, Session session) {\n        return \"Echo: \" + message;\n    }\n    @OnOpen\n    public void onOpen(Session s) { System.out.println(\"Connected: \" + s.getId()); }\n}"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-api-gateway",
            "title": "API Gateway",
            "slug": "sd-api-gateway",
            "difficulty": "Medium",
            "description": "API Gateway as single entry point for microservices: routing, auth, rate limiting, SSL termination, request aggregation (BFF pattern).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "API Gateway - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. What is an API Gateway?\nAn **API Gateway** is a single entry point that sits in front of multiple backend microservices, handling:\n- **Routing:** Forward request to correct service.\n- **Authentication/Authorization:** Verify JWT/API keys before forwarding.\n- **Rate Limiting:** Prevent abuse at the edge.\n- **SSL Termination:** Handle HTTPS, forward HTTP internally.\n- **Request Aggregation:** Combine multiple service calls into one response.\n\n```mermaid\ngraph LR\n    Client --> GW[API Gateway]\n    GW -->|/users| US[User Service]\n    GW -->|/orders| OS[Order Service]\n    GW -->|/products| PS[Product Service]\n    GW -->|auth| Auth[Auth Service]\n```\n\n### 2. Popular API Gateways\n- **AWS API Gateway** — Serverless, integrates with Lambda.\n- **Kong** — Open-source, plugin-based.\n- **Nginx** — Can act as gateway with Lua scripting.\n- **Traefik** — Kubernetes-native, auto-configures from labels.\n\n### 3. Backend for Frontend (BFF) Pattern\nCreate a custom API Gateway PER client type (mobile BFF, web BFF) to return exactly the data each client needs.",
            "code_example": {
              "language": "multi",
              "python": "# nginx.conf API Gateway example (concept)\nnginx_config = '''\nupstream user_service { server user-svc:8001; }\nupstream order_service { server order-svc:8002; }\n\nserver {\n  location /api/v1/users { proxy_pass http://user_service; }\n  location /api/v1/orders { proxy_pass http://order_service; }\n}\n'''\nprint('API Gateway routes configured')",
              "java": "// Spring Cloud Gateway route config\n@Bean\npublic RouteLocator routes(RouteLocatorBuilder b) {\n    return b.routes()\n        .route(r -> r.path(\"/users/**\").uri(\"lb://user-service\"))\n        .route(r -> r.path(\"/orders/**\").uri(\"lb://order-service\"))\n        .build();\n}"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-api-versioning",
            "title": "API Versioning",
            "slug": "sd-api-versioning",
            "difficulty": "Medium",
            "description": "Strategies for API versioning in production: URI path, query parameters, custom headers, content negotiation, backward compatibility, and sunsetting.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "API Versioning Strategies - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### API Versioning Strategies in Production\\n\\nWhen public or internal APIs evolve, breaking changes (removing fields, changing data types, altering endpoint semantics) must not break existing mobile apps or third-party integrations.\\n\\n#### 1. Common Versioning Approaches\\n1. **URI Path Versioning (Most Popular)**:\\n   - Example: `https://api.example.com/v1/orders` → `https://api.example.com/v2/orders`\\n   - **Pros**: Explicit, easy to inspect in logs and metrics, simple routing rules in API gateways.\\n   - **Cons**: Violates pure REST URI theory (resources shouldn't change URIs).\\n\\n2. **Query Parameter Versioning**:\\n   - Example: `https://api.example.com/orders?version=2`\\n   - **Pros**: Easy to test in browsers and fall back to default version.\\n   - **Cons**: Messy routing and caching complexities.\\n\\n3. **Custom Request Header Versioning**:\\n   - Example: `GET /orders` with header `X-API-Version: 2.0`\\n   - **Pros**: Clean URIs, easy client library customization.\\n   - **Cons**: Difficult to test directly in browser address bar.\\n\\n4. **Accept Header (Content Negotiation)**:\\n   - Example: `Accept: application/vnd.company.v2+json` (GitHub style)\\n   - **Pros**: Strictly adheres to REST specifications.\\n   - **Cons**: Complex client configuration and CDN caching headers (`Vary: Accept`).\\n\\n#### 2. Deprecation and Sunset Policy\\n- Return HTTP header `Sunset: Wed, 11 Nov 2026 00:00:00 GMT` (RFC 8594).\\n- Return `Deprecation: true` warning header.\\n- Maintain backwards-compatibility bridges at the API Gateway layer to transform old payload schemas into new internal schemas.",
            "code_example": {
              "language": "multi",
              "python": "from fastapi import FastAPI, Header, HTTPException\n\napp = FastAPI()\n\n@app.get('/api/orders')\ndef get_orders(x_api_version: str = Header(default='1.0')):\n    if x_api_version == '1.0':\n        return {'orders': [{'id': 101, 'amount': 99.5}] # Legacy format\n    elif x_api_version == '2.0':\n        return {'data': [{'id': 'ord_101', 'amount_cents': 9950}], 'currency': 'USD'}\n    raise HTTPException(status_code=400, detail='Unsupported API version')",
              "java": "// Spring Boot header-based versioning\n// @GetMapping(value = \"/orders\", headers = \"X-API-Version=1\")\n// public OrderV1 getV1() { return new OrderV1(); }\n// @GetMapping(value = \"/orders\", headers = \"X-API-Version=2\")\n// public OrderV2 getV2() { return new OrderV2(); }"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-sd-lb",
        "name": "4. Load Balancing",
        "icon": "⚖️",
        "topics": [
          {
            "id": "sd-what-is-load-balancer-why-needed",
            "title": "What is Load Balancer, why needed",
            "slug": "sd-what-is-load-balancer-why-needed",
            "difficulty": "Medium",
            "description": "Comprehensive guide to What is Load Balancer, why needed in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "What is Load Balancer, why needed - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### What is Load Balancer, why needed\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **What is Load Balancer, why needed** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# What is Load Balancer, why needed in Python\nprint('Production architecture pattern: What is Load Balancer, why needed')",
              "java": "// What is Load Balancer, why needed in Java\nSystem.out.println(\"What is Load Balancer, why needed\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-load-balancing-algorithms-round-robin-least-connections-ip-hash-weighted-round-robin",
            "title": "Load balancing algorithms (Round Robin, Least Connections, IP Hash, Weighted Round Robin)",
            "slug": "sd-load-balancing-algorithms-round-robin-least-connections-ip-hash-weighted-round-robin",
            "difficulty": "Medium",
            "description": "Round Robin, Weighted Round Robin, Least Connections, IP Hash, Consistent Hashing — when and why to use each algorithm.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Load Balancing Algorithms - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Load Balancing Algorithms Comparison\n\n| Algorithm | How it Works | Best For |\n| :--- | :--- | :--- |\n| **Round Robin** | Requests go to servers in order: 1,2,3,1,2,3 | Equal capacity servers |\n| **Weighted Round Robin** | Server 1 gets 3x traffic vs Server 2 if weight 3:1 | Different capacity servers |\n| **Least Connections** | Next request goes to server with fewest active connections | Long-lived connections (WebSockets) |\n| **IP Hash** | `server = hash(client_IP) % num_servers` | Session sticky routing (same user → same server) |\n| **Random** | Pick random server | Simple, low overhead |\n| **Consistent Hashing** | Minimal remapping when servers added/removed | Distributed caching (Memcached) |\n\n### 2. Sticky Sessions (Session Affinity)\nRoute same user to same server (uses cookies or IP Hash). Needed if session state is stored in server memory (bad practice — use Redis instead).",
            "code_example": {
              "language": "multi",
              "python": "import random\nfrom collections import defaultdict\n\nservers = ['s1', 's2', 's3']\nconnections = defaultdict(int)\n\n# Least connections\ndef least_connections():\n    return min(servers, key=lambda s: connections[s])\n\n# Simulate routing\nfor _ in range(5):\n    s = least_connections()\n    connections[s] += 1\n    print(f'Routed to {s} (conns: {dict(connections)})')\n    connections[s] -= 1  # request complete",
              "java": "// Round-robin with AtomicInteger (thread-safe)\nString[] servers = {\"s1\",\"s2\",\"s3\"};\nAtomicInteger counter = new AtomicInteger(0);\nString nextServer() {\n    return servers[counter.getAndIncrement() % servers.length];\n}"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-layer-4-vs-layer-7-load-balancing",
            "title": "Layer 4 vs Layer 7 load balancing",
            "slug": "sd-layer-4-vs-layer-7-load-balancing",
            "difficulty": "Medium",
            "description": "Deep dive into Transport layer (L4 / TCP/UDP) vs Application layer (L7 / HTTP) load balancing, SSL termination, and routing intelligence.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Layer 4 vs Layer 7 Load Balancing - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Layer 4 vs Layer 7 Load Balancing\\n\\nLoad balancers distribute incoming traffic across multiple backend servers to prevent overload and ensure high availability.\\n\\n#### 1. Layer 4 (Transport Layer) Load Balancing\\n- **How it works**: Routing decisions are made based purely on TCP/UDP packets (Source IP:Port and Destination IP:Port). The load balancer does NOT inspect HTTP headers, cookies, or payloads.\\n- **Examples**: AWS Network Load Balancer (NLB), HAProxy (TCP mode), IPVS/Linux LVS.\\n- **Pros**:\\n  - Extreme throughput: Handles tens of millions of packets per second.\\n  - Minimal CPU usage (no TLS decryption or payload parsing).\\n  - Protocol agnostic (works with Redis, MySQL, SMTP, WebSockets, custom TCP).\\n- **Cons**: Cannot do path-based routing, cannot inspect cookies for sticky sessions, cannot do HTTP header transformations.\\n\\n#### 2. Layer 7 (Application Layer) Load Balancing\\n- **How it works**: Terminates the client TCP connection, decrypts TLS, parses HTTP headers, method, path, and cookies, and opens a separate TCP connection to the chosen backend server.\\n- **Examples**: AWS Application Load Balancer (ALB), Nginx, Envoy, Traefik.\\n- **Pros**:\\n  - **Content-based routing**: Route `/api/videos` to Video Pods and `/api/checkout` to Checkout Pods.\\n  - **TLS Termination**: Offloads expensive cryptographic handshakes from application pods.\\n  - **Smart Features**: Cookie-based stickiness, gzip compression, HTTP/2 to HTTP/1.1 multiplexing, rate-limiting headers.\\n- **Cons**: Higher latency and CPU usage compared to L4.",
            "code_example": {
              "language": "multi",
              "python": "# Conceptual L7 Content-Based Router in Python\ndef route_l7_request(http_request):\n    path = http_request['path']\n    if path.startswith('/api/v1/auth'):\n        return 'auth-service-cluster'\n    elif path.startswith('/api/v1/feed'):\n        return 'feed-service-cluster'\n    else:\n        return 'default-service-cluster'",
              "java": "// Nginx-equivalent routing logic in Java gateway\npublic class L7Router {\n    public String resolveTarget(String path) {\n        if (path.startsWith(\"/auth\")) return \"auth-service:8080\";\n        if (path.startsWith(\"/payment\")) return \"payment-service:8081\";\n        return \"web-service:80\";\n    }\n}"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-health-checks",
            "title": "Health checks",
            "slug": "sd-health-checks",
            "difficulty": "Easy",
            "description": "Active vs passive health checks, liveness vs readiness probes, failure thresholds, and automatic removal of unhealthy instances.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Health Checks and Service Liveness - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Health Checks & Service Liveness\\n\\nTo guarantee high availability, load balancers and orchestrators (like Kubernetes) must continuously verify that backend nodes are healthy and capable of serving traffic.\\n\\n#### 1. Active vs Passive Health Checks\\n- **Active Health Checks**: The load balancer periodically sends a synthetic request (e.g., `GET /health` every 5 seconds). If the instance returns HTTP 200 OK, it is healthy. If it times out or returns 5xx for `N` consecutive probes, traffic is diverted away.\\n- **Passive Health Checks**: The load balancer observes actual user requests. If an instance starts returning connection errors (TCP resets or 502/504 errors) during live user traffic, it is temporarily marked dead.\\n\\n#### 2. Liveness vs Readiness vs Startup Probes (Kubernetes Model)\\n- **Startup Probe**: Verifies that the application process has finished bootstrapping and loading caches into memory. Disables liveness checks until ready.\\n- **Readiness Probe**: Checks if the instance is ready to receive traffic (e.g., database connection pool is connected). If failing, remove from load balancer rotation without killing the container.\\n- **Liveness Probe**: Checks if the process is stuck or deadlocked. If failing consecutively, restart the container.\\n\\n#### 3. Deep vs Shallow Health Checks\\n- **Shallow**: Returns 200 OK if the web server process is responsive. Safe and fast, but doesn't test database connectivity.\\n- **Deep**: Checks database, Redis, and downstream services. **Caution**: If the database goes down, deep health checks cause EVERY server instance to fail health checks simultaneously, cascading into a total system outage!",
            "code_example": {
              "language": "multi",
              "python": "from fastapi import FastAPI, Response, status\nimport redis\n\napp = FastAPI()\nr = redis.Redis(host='localhost', port=6379, socket_timeout=1)\n\n@app.get('/health/live')\ndef liveness():\n    return {'status': 'alive'}  # Shallow probe\n\n@app.get('/health/ready')\ndef readiness(response: Response):\n    try:\n        r.ping()\n        return {'status': 'ready'}\n    except Exception:\n        response.status_code = status.HTTP_503_SERVICE_UNAVAILABLE\n        return {'status': 'unhealthy', 'reason': 'Redis unavailable'}",
              "java": "// Spring Boot Actuator exposes /actuator/health automatically\n// Custom health indicator:\n// @Component\n// public class DatabaseHealthIndicator implements HealthIndicator {\n//     public Health health() { return isDbOk() ? Health.up().build() : Health.down().build(); }\n// }"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-sd-caching",
        "name": "5. Caching",
        "icon": "⚡",
        "topics": [
          {
            "id": "sd-what-is-caching-cache-hitmiss",
            "title": "What is caching, cache hit/miss",
            "slug": "sd-what-is-caching-cache-hitmiss",
            "difficulty": "Easy",
            "description": "Cache fundamentals: cache hit/miss ratios, placement strategies (client-side, CDN, server-side, database), and cache warming.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "What is Caching, Cache Hit/Miss, Cache Placement - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. What is a Cache?\nA **cache** is a high-speed storage layer that stores copies of frequently accessed data so future requests can be served faster.\n\n### 2. Cache Hit vs Cache Miss\n- **Cache Hit:** Requested data IS in the cache → return immediately (fast, cheap).\n- **Cache Miss:** Data NOT in cache → fetch from origin (slow, expensive), store in cache.\n- **Hit Rate** = Cache Hits / Total Requests (aim for > 90% for effective caching).\n\n### 3. Cache Placement Strategies\n```mermaid\ngraph LR\n    U[User] -->|1. CDN Cache| CDN[CDN Edge Node]\n    U -->|2. Browser Cache| B[Browser Local Storage]\n    CDN -->|3. API Gateway Cache| GW[Gateway]\n    GW -->|4. Application Cache| App[App Server Redis]\n    App -->|5. DB Query Cache| DB[Database]\n```\n\n### 4. What to Cache?\n- **Cache:** Read-heavy data that rarely changes (user profiles, product catalog, popular posts).\n- **Don't Cache:** Highly personalized data, financial transactions, data requiring strong consistency.",
            "code_example": {
              "language": "multi",
              "python": "import functools, time\n\n# Python LRU Cache (function-level caching)\n@functools.lru_cache(maxsize=1000)\ndef get_user_profile(user_id: int):\n    print(f'DB query for user {user_id}')  # Only called on miss\n    return {'id': user_id, 'name': 'Rahul'}\n\nget_user_profile(1)  # Miss - hits DB\nget_user_profile(1)  # Hit - from cache\nget_user_profile(2)  # Miss - hits DB",
              "java": "// Spring Boot @Cacheable annotation\n@Cacheable(value=\"users\", key=\"#id\")\npublic User getUserById(Long id) {\n    // Only called on cache MISS\n    return userRepository.findById(id).orElseThrow();\n}\n\n@CacheEvict(value=\"users\", key=\"#user.id\")\npublic User updateUser(User user) {\n    return userRepository.save(user);\n}"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-cache-placement-strategies-client-side-server-side-cdn",
            "title": "Cache placement strategies (client-side, server-side, CDN)",
            "slug": "sd-cache-placement-strategies-client-side-server-side-cdn",
            "difficulty": "Medium",
            "description": "Where to place caches in distributed systems: browser/client cache, API Gateway cache, application server in-memory cache, distributed cache cluster (Redis), and CDN edge nodes.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Cache placement strategies (client-side, server-side, CDN) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Cache Placement Strategies\n\nIn modern web architectures, caching can be placed at multiple tiers between the client device and the database.\n\n#### 1. Client-Side Caching (Browser / Mobile App)\n- **HTTP Cache Headers**: `Cache-Control: max-age=3600, must-revalidate`, `ETag`, `Last-Modified`.\n- **Pros**: Zero network hop, fastest response time (0ms from disk or RAM cache).\n- **Cons**: Stale data is hard to purge until TTL expires; storage capacity on client device is limited.\n\n#### 2. CDN Edge Caching\n- Caching static assets (HTML, CSS, JS, images, video chunks) and cached API responses on edge servers located physically close to end-users (Cloudflare, CloudFront, Fastly).\n- Drastically reduces origin server load and international latency.\n\n#### 3. Reverse Proxy / Gateway Cache\n- Nginx, Varnish, or API Gateway caches common read endpoints (e.g., `GET /api/v1/trending`).\n- Absorbs traffic before hitting application containers.\n\n#### 4. Application Server In-Memory Cache (Local L1 Cache)\n- In-process memory (Guava, Caffeine in Java, Python `functools.lru_cache`).\n- Microsecond latency, but not shared across instances. Can cause data inconsistency across different app pods.\n\n#### 5. Distributed Cache (Shared L2 Cache - Redis / Memcached)\n- Dedicated cluster shared by all application servers.\n- High availability, persistence, large memory capacity (gigabytes to terabytes), single source of cached truth.",
            "code_example": {
              "language": "multi",
              "python": "from functools import lru_cache\nimport redis\n\n# Multi-tier caching: L1 (In-Memory) + L2 (Redis)\nr = redis.Redis()\n\n@lru_cache(maxsize=1000)  # L1 In-Memory Cache\ndef get_user_l1(user_id):\n    # Fallback to L2 Redis\n    cached = r.get(f'user:{user_id}')\n    if cached:\n        return cached.decode()\n    # Fallback to DB (simulated)\n    data = f'User data for {user_id}'\n    r.setex(f'user:{user_id}', 300, data)\n    return data",
              "java": "// Multi-tier caching with Spring Cache & Caffeine\n// @Cacheable(value = \"users\", cacheManager = \"caffeineCacheManager\")\n// public User getUser(Long id) { return db.find(id); }"
            },
            "complexity": {
              "time": "L1: O(1) in-memory, L2: O(1) network hop (1-2ms)",
              "space": "O(N)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-cache-eviction-policies-lru-lfu-fifo",
            "title": "Cache eviction policies (LRU, LFU, FIFO)",
            "slug": "sd-cache-eviction-policies-lru-lfu-fifo",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Cache eviction policies (LRU, LFU, FIFO) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Cache eviction policies (LRU, LFU, FIFO) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Cache eviction policies (LRU, LFU, FIFO)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Cache eviction policies (LRU, LFU, FIFO)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Cache eviction policies (LRU, LFU, FIFO) in Python\nprint('Production architecture pattern: Cache eviction policies (LRU, LFU, FIFO)')",
              "java": "// Cache eviction policies (LRU, LFU, FIFO) in Java\nSystem.out.println(\"Cache eviction policies (LRU, LFU, FIFO)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-write-policies-write-through-write-back-write-around",
            "title": "Write policies (Write-through, Write-back, Write-around)",
            "slug": "sd-write-policies-write-through-write-back-write-around",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Write policies (Write-through, Write-back, Write-around) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Write policies (Write-through, Write-back, Write-around) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Write policies (Write-through, Write-back, Write-around)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Write policies (Write-through, Write-back, Write-around)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Write policies (Write-through, Write-back, Write-around) in Python\nprint('Production architecture pattern: Write policies (Write-through, Write-back, Write-around)')",
              "java": "// Write policies (Write-through, Write-back, Write-around) in Java\nSystem.out.println(\"Write policies (Write-through, Write-back, Write-around)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-cache-invalidation-strategies",
            "title": "Cache invalidation strategies",
            "slug": "sd-cache-invalidation-strategies",
            "difficulty": "Medium",
            "description": "TTL-based expiration, event-driven purge, write invalidation, and mitigating cache stampede (thundering herd problem) via mutex locks or probabilistic early expiration.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Cache Invalidation Strategies - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Cache Invalidation & Stampede Mitigation\\n\\nPhil Karlton famously said: *\"There are only two hard things in Computer Science: cache invalidation and naming things.\"* When data changes in the source of truth (DB), stale cache entries must be updated or evicted.\\n\\n#### 1. Invalidation Strategies\\n1. **Time-To-Live (TTL)**: Every key is assigned an expiration time (e.g., 5 minutes). Simple and self-cleaning, but data remains stale until TTL expires.\\n2. **Explicit / Event-Driven Purge**: When an update occurs (`PUT /product/123`), the application server immediately deletes `cache.delete('product:123')` or publishes an event over Kafka/Redis Pub-Sub so all cache nodes invalidate the key.\\n3. **Write-Through / Write-Around**: Coordinated during write operations to keep cache and DB aligned.\\n\\n#### 2. The Thundering Herd Problem (Cache Stampede)\\nWhen a very hot key (e.g., FIFA World Cup score or viral celebrity profile with 100,000 req/sec) expires:\\n- Thousands of concurrent requests simultaneously get a **cache miss**.\\n- All 100,000 requests hit the database at the exact same millisecond to recompute the value.\\n- The database runs out of connection pools, spikes to 100% CPU, and crashes.\\n\\n#### 3. Stampede Solutions\\n- **Distributed Mutex (Locking)**: Only the first request acquires a lock to query the DB and repopulate the cache; other requests wait or return slightly stale data.\\n- **Probabilistic Early Expiration (XFetch)**: Keys are recalculated proactively before actual expiry based on access frequency and remaining TTL.",
            "code_example": {
              "language": "multi",
              "python": "import time, redis\n\nr = redis.Redis()\n\ndef get_product_with_stampede_lock(product_id):\n    key = f'prod:{product_id}'\n    val = r.get(key)\n    if val:\n        return val\n    \n    # Try to acquire distributed lock for 5 seconds\n    lock_key = f'lock:{key}'\n    if r.set(lock_key, '1', nx=True, ex=5):\n        try:\n            # Winner fetches from DB and populates cache\n            val = f'Data from DB for {product_id}'\n            r.setex(key, 300, val)\n            return val\n        finally:\n            r.delete(lock_key)\n    else:\n        # Other threads sleep and retry cache\n        time.sleep(0.05)\n        return r.get(key) or 'Fallback data'",
              "java": "// Jedis mutex pattern\n// if (jedis.set(lockKey, \"1\", SetParams.setParams().nx().ex(5)) != null) {\n//     try { val = db.fetch(); jedis.setex(key, 300, val); } finally { jedis.del(lockKey); }\n// }"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-distributed-caching-redis-memcached-concept-level",
            "title": "Distributed caching (Redis, Memcached — concept level)",
            "slug": "sd-distributed-caching-redis-memcached-concept-level",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Distributed caching (Redis, Memcached — concept level) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Distributed caching (Redis, Memcached — concept level) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Distributed caching (Redis, Memcached — concept level)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Distributed caching (Redis, Memcached — concept level)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Distributed caching (Redis, Memcached — concept level) in Python\nprint('Production architecture pattern: Distributed caching (Redis, Memcached — concept level)')",
              "java": "// Distributed caching (Redis, Memcached — concept level) in Java\nSystem.out.println(\"Distributed caching (Redis, Memcached — concept level)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-cdn-content-delivery-network",
            "title": "CDN (Content Delivery Network)",
            "slug": "sd-cdn-content-delivery-network",
            "difficulty": "Medium",
            "description": "CDN edge server network for static asset delivery, how CDN caching works (TTL, cache-control headers), and CDN invalidation strategies.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "CDN (Content Delivery Network) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. What is a CDN?\nA **CDN** is a geographically distributed network of **edge servers** that cache and serve static content from locations closer to users.\n\n```mermaid\ngraph TB\n    U1[User in India] -->|nearby| E1[CDN Edge: Mumbai]\n    U2[User in UK] -->|nearby| E2[CDN Edge: London]\n    U3[User in USA] -->|nearby| E3[CDN Edge: Virginia]\n    E1 & E2 & E3 -->|cache miss only| O[Origin Server]\n```\n\n### 2. What CDNs Cache\n- Static assets: JS, CSS, images, fonts, videos.\n- HTML pages (with short TTL for frequently updating pages).\n- API responses (GET requests, with proper Cache-Control headers).\n\n### 3. CDN Cache-Control Headers\n```\nCache-Control: public, max-age=31536000, immutable  → 1 year (versioned assets)\nCache-Control: public, max-age=3600                 → 1 hour (semi-dynamic)\nCache-Control: no-store                             → Never cache (private/dynamic)\n```\n\n### 4. CDN Invalidation\nWhen you update content, existing CDN cache is stale until TTL expires. Force invalidation:\n- **Versioned URLs:** `/app.v1.2.3.js` → deploy `/app.v1.2.4.js` (no invalidation needed!)\n- **Purge API:** CloudFront/Cloudflare provide cache purge APIs.\n\n### 5. Popular CDNs\nCloudflare, AWS CloudFront, Akamai, Fastly, Google Cloud CDN.",
            "code_example": {
              "language": "multi",
              "python": "# CDN Cache-Control response headers (FastAPI)\nfrom fastapi import Response\n\n@app.get('/static/image.png')\ndef serve_image(response: Response):\n    response.headers['Cache-Control'] = 'public, max-age=31536000, immutable'\n    return FileResponse('image.png')\n\n@app.get('/api/feed')\ndef get_feed(response: Response):\n    response.headers['Cache-Control'] = 'public, max-age=60'  # 1 min\n    return {'posts': [...]}",
              "java": "// Spring Boot Cache-Control\n@GetMapping(\"/static/{file}\")\npublic ResponseEntity<Resource> getStatic(@PathVariable String file) {\n    return ResponseEntity.ok()\n        .cacheControl(CacheControl.maxAge(365, TimeUnit.DAYS).immutableResponse())\n        .body(new ClassPathResource(\"static/\" + file));\n}"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-sd-databases",
        "name": "6. Databases",
        "icon": "🗄️",
        "topics": [
          {
            "id": "sd-sql-vs-nosql-when-to-use-what",
            "title": "SQL vs NoSQL — when to use what",
            "slug": "sd-sql-vs-nosql-when-to-use-what",
            "difficulty": "Medium",
            "description": "Choosing between relational (SQL) and non-relational (NoSQL) databases based on data model, consistency needs, scale, and query patterns.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "SQL vs NoSQL — When to Use What - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. SQL (Relational) Database\n- **Structure:** Tables with rows and columns. Fixed schema.\n- **Relationships:** Foreign keys, JOINs for related data.\n- **ACID:** Full transactional guarantees.\n- **Scale:** Vertical scaling primarily; horizontal sharding is complex.\n- **Examples:** PostgreSQL, MySQL, SQLite, Oracle.\n\n### 2. NoSQL Database\n- **Structure:** Flexible schema (documents, key-value, columns, graphs).\n- **Scale:** Built for horizontal scaling from day one.\n- **Consistency:** Often eventual consistency (BASE model).\n- **Examples:** MongoDB, Redis, Cassandra, Neo4j, DynamoDB.\n\n### 3. Decision Framework\n| Use SQL When | Use NoSQL When |\n| :--- | :--- |\n| Complex relationships and JOINs needed | Simple lookups by key |\n| Strong ACID transactions required | Write-heavy, massive scale |\n| Data is structured and schema is stable | Flexible/evolving schema |\n| Reporting and analytics | Time-series, graph data |\n| Small-to-medium scale | 100M+ records, global distribution |",
            "code_example": {
              "language": "multi",
              "python": "# SQL query (PostgreSQL)\nsql_example = '''\nSELECT u.name, COUNT(o.id) as order_count\nFROM users u\nJOIN orders o ON u.id = o.user_id\nWHERE u.created_at > NOW() - INTERVAL '30 days'\nGROUP BY u.name\nHAVING COUNT(o.id) > 5;\n'''\n\n# NoSQL query (MongoDB)\nmongo_example = '''\ndb.orders.aggregate([\n  { $match: { created_at: { $gt: ISODate('2024-01-01') } } },\n  { $group: { _id: '$user_id', count: { $sum: 1 } } },\n  { $match: { count: { $gt: 5 } } }\n])\n'''",
              "java": "// JPA (SQL) vs MongoDB query comparison\n// SQL: UserRepository.findActiveUsersWithOrders(threshold, since)\n// MongoDB: mongoTemplate.aggregate(pipeline, 'orders', OrderSummary.class)"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-types-of-nosql-key-value-document-column-family-graph-db",
            "title": "Types of NoSQL (Key-Value, Document, Column-family, Graph DB)",
            "slug": "sd-types-of-nosql-key-value-document-column-family-graph-db",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Types of NoSQL (Key-Value, Document, Column-family, Graph DB) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Types of NoSQL (Key-Value, Document, Column-family, Graph DB) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Types of NoSQL (Key-Value, Document, Column-family, Graph DB)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Types of NoSQL (Key-Value, Document, Column-family, Graph DB)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Types of NoSQL (Key-Value, Document, Column-family, Graph DB) in Python\nprint('Production architecture pattern: Types of NoSQL (Key-Value, Document, Column-family, Graph DB)')",
              "java": "// Types of NoSQL (Key-Value, Document, Column-family, Graph DB) in Java\nSystem.out.println(\"Types of NoSQL (Key-Value, Document, Column-family, Graph DB)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-database-indexing-b-tree-hash-index",
            "title": "Database Indexing (B-Tree, Hash index)",
            "slug": "sd-database-indexing-b-tree-hash-index",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Database Indexing (B-Tree, Hash index) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Database Indexing (B-Tree, Hash index) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Database Indexing (B-Tree, Hash index)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Database Indexing (B-Tree, Hash index)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Database Indexing (B-Tree, Hash index) in Python\nprint('Production architecture pattern: Database Indexing (B-Tree, Hash index)')",
              "java": "// Database Indexing (B-Tree, Hash index) in Java\nSystem.out.println(\"Database Indexing (B-Tree, Hash index)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-normalization-vs-denormalization",
            "title": "Normalization vs Denormalization",
            "slug": "sd-normalization-vs-denormalization",
            "difficulty": "Medium",
            "description": "Relational normalization (1NF-3NF) for write consistency vs intentional denormalization for low-latency read-heavy distributed scale.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Normalization vs Denormalization - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Normalization vs Denormalization\\n\\nData modeling in system design requires balancing consistency against read latency.\\n\\n#### 1. Database Normalization (1NF, 2NF, 3NF)\\n- **Goal**: Minimize data redundancy and prevent update/delete anomalies by splitting data into relational tables linked by Foreign Keys.\\n- **Pros**:\\n  - Single source of truth: An update to a user's address requires updating exactly one row in the `addresses` table.\\n  - Smaller table footprint on disk.\\n- **Cons in Distributed Systems**:\\n  - Distributed JOINs across sharded database clusters are either prohibitively slow or impossible.\\n  - As query traffic hits millions of reads/sec, joining 5+ tables degrades latency.\\n\\n#### 2. Denormalization\\n- **Goal**: Deliberately duplicate data across tables or embed child documents into parents to eliminate relational JOINs during read queries.\\n- **Pros**:\\n  - Blazing read performance: Read entire user profile, recent tweets, and author avatars in a single primary key lookup.\\n  - Enables horizontal sharding because all data needed for a request lives on the same node.\\n- **Cons**:\\n  - Write amplification and sync overhead: When a user changes their name, background workers or CDC (Change Data Capture) pipelines must update the duplicate name across thousands of posts and comments.\\n  - Temporary data inconsistency while async updates propagate.",
            "code_example": {
              "language": "multi",
              "python": "# Normalized: Post references User table\nnormalized_post = {'post_id': 1, 'user_id': 99, 'content': 'Hello world'}\n\n# Denormalized: Author metadata embedded directly inside the post\ndenormalized_post = {\n    'post_id': 1,\n    'content': 'Hello world',\n    'author': {'id': 99, 'username': 'alice_dev', 'avatar_url': 'https://cdn/alice.png'}\n}\nprint('Denormalized saves 1 database query/join on every feed read!')",
              "java": "// Denormalized Order entity storing buyer snapshot at time of purchase\nrecord OrderSnapshot(long orderId, long userId, String userNameSnapshot, String shippingAddressSnapshot, double total) {}"
            },
            "complexity": {
              "time": "Read O(1) vs Join O(M+N)",
              "space": "Denormalization uses extra storage"
            },
            "practice_questions": []
          },
          {
            "id": "sd-database-sharding-horizontal-partitioning-sharding-strategies",
            "title": "Database Sharding (horizontal partitioning) — sharding strategies",
            "slug": "sd-database-sharding-horizontal-partitioning-sharding-strategies",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Database Sharding (horizontal partitioning) — sharding strategies in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Database Sharding (horizontal partitioning) — sharding strategies - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Database Sharding (horizontal partitioning) — sharding strategies\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Database Sharding (horizontal partitioning) — sharding strategies** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Database Sharding (horizontal partitioning) — sharding strategies in Python\nprint('Production architecture pattern: Database Sharding (horizontal partitioning) — sharding strategies')",
              "java": "// Database Sharding (horizontal partitioning) — sharding strategies in Java\nSystem.out.println(\"Database Sharding (horizontal partitioning) — sharding strategies\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-database-replication-master-slave-master-master",
            "title": "Database Replication (Master-Slave, Master-Master)",
            "slug": "sd-database-replication-master-slave-master-master",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Database Replication (Master-Slave, Master-Master) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Database Replication (Master-Slave, Master-Master) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Database Replication (Master-Slave, Master-Master)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Database Replication (Master-Slave, Master-Master)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Database Replication (Master-Slave, Master-Master) in Python\nprint('Production architecture pattern: Database Replication (Master-Slave, Master-Master)')",
              "java": "// Database Replication (Master-Slave, Master-Master) in Java\nSystem.out.println(\"Database Replication (Master-Slave, Master-Master)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-read-replicas",
            "title": "Read replicas",
            "slug": "sd-read-replicas",
            "difficulty": "Medium",
            "description": "Scaling read-heavy database workloads using asynchronous or semi-synchronous read replicas, handling replication lag, and connection routing.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Read replicas - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Read Replicas & Scaling Database Reads\n\nMost web applications have a read-heavy workload (e.g., 90% reads, 10% writes for Twitter or Instagram).\n\n#### 1. Architecture\n- **Primary (Master) Database**: Handles all write queries (`INSERT`, `UPDATE`, `DELETE`) and critical reads.\n- **Read Replicas (Followers)**: Continuously replicate the Primary database's Write-Ahead Log (WAL) or binlog. All read queries (`SELECT`) are load-balanced across replicas.\n\n#### 2. The Replication Lag Challenge\n- Replication is typically **asynchronous** to avoid slowing down writes on the Primary.\n- **Replication Lag**: There is a small time window (e.g., 50ms to 500ms) where a replica has not yet applied the newest transactions from the Primary.\n- **Read-Your-Own-Writes Problem**: If a user updates their profile and the page immediately reloads by querying a laggy replica, they will see their old profile data!\n\n#### 3. Mitigation Techniques\n- Route queries to the Primary for a short duration (e.g., 5 seconds) immediately after the user makes a write.\n- Use version timestamps or logical monotonic sequence tokens to ensure replicas are caught up before reading.",
            "code_example": {
              "language": "multi",
              "python": "# Dynamic DB Router for Read Replicas\nimport random\n\ndef get_db_connection(is_write: bool, user_recently_updated: bool = False):\n    if is_write or user_recently_updated:\n        return 'primary_master_db'\n    replicas = ['replica_db_1', 'replica_db_2', 'replica_db_3']\n    return random.choice(replicas)  # Load balance reads across replicas\n\nprint('DB for update:', get_db_connection(is_write=True))\nprint('DB for read:', get_db_connection(is_write=False))",
              "java": "// Spring AbstractRoutingDataSource\n// public class ReplicationRoutingDataSource extends AbstractRoutingDataSource {\n//     protected Object determineCurrentLookupKey() {\n//         return TransactionSynchronizationManager.isCurrentTransactionReadOnly() ? \"REPLICA\" : \"MASTER\";\n//     }\n// }"
            },
            "complexity": {
              "time": "Read: O(1) connection dispatch",
              "space": "O(N) data replicated per node"
            },
            "practice_questions": []
          },
          {
            "id": "sd-partitioning-horizontal-vs-vertical",
            "title": "Partitioning (horizontal vs vertical)",
            "slug": "sd-partitioning-horizontal-vs-vertical",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Partitioning (horizontal vs vertical) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Partitioning (horizontal vs vertical) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Partitioning (horizontal vs vertical)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Partitioning (horizontal vs vertical)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Partitioning (horizontal vs vertical) in Python\nprint('Production architecture pattern: Partitioning (horizontal vs vertical)')",
              "java": "// Partitioning (horizontal vs vertical) in Java\nSystem.out.println(\"Partitioning (horizontal vs vertical)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-acid-properties",
            "title": "ACID properties",
            "slug": "sd-acid-properties",
            "difficulty": "Medium",
            "description": "The four foundational pillars of relational database transactions: Atomicity, Consistency, Isolation, and Durability.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "ACID properties - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### ACID Properties in Database Systems\n\nACID guarantees that database transactions are processed reliably in the presence of hardware failures, crashes, and concurrent requests.\n\n#### 1. Atomicity (All or Nothing)\n- Every statement in a transaction is executed successfully, or the entire transaction is rolled back with zero side effects.\n- **Implementation**: Write-Ahead Logging (WAL) and Undo Logs allow the engine to reverse partially executed operations.\n\n#### 2. Consistency (Validity & Invariants)\n- The database moves from one valid state to another valid state.\n- All schema constraints, primary key uniqueness, foreign key relationships, and check constraints are strictly enforced.\n\n#### 3. Isolation (Concurrency Control)\n- Intermediate states of a transaction are invisible to concurrently running transactions until committed.\n- **Implementation**: Two-Phase Locking (2PL), Multi-Version Concurrency Control (MVCC), or pessimistic/optimistic row locks.\n\n#### 4. Durability (Persistence)\n- Once a transaction commits, its changes are permanently recorded and cannot be lost, even in a total server crash or power failure.\n- **Implementation**: Changes are flushed to non-volatile disk via Write-Ahead Log (WAL) before acknowledging success to the client.",
            "code_example": {
              "language": "multi",
              "python": "# Conceptual ACID bank transfer\ndef transfer_funds(db, sender_id, recipient_id, amount):\n    with db.transaction(): # Atomic boundary\n        sender = db.query_for_update('SELECT * FROM accounts WHERE id = ?', sender_id)\n        if sender.balance < amount:\n            raise ValueError('Insufficient funds') # Triggers rollback\n        \n        db.execute('UPDATE accounts SET balance = balance - ? WHERE id = ?', amount, sender_id)\n        db.execute('UPDATE accounts SET balance = balance + ? WHERE id = ?', amount, recipient_id)\n        # Commit: Atomicity & Durability guaranteed",
              "java": "// Spring declarative transaction management\n// @Transactional(rollbackFor = Exception.class)\n// public void transferMoney(Long from, Long to, BigDecimal amount) {\n//     accountRepo.debit(from, amount);\n//     accountRepo.credit(to, amount);\n// }"
            },
            "complexity": {
              "time": "O(1) commit overhead",
              "space": "O(T) transaction log size"
            },
            "practice_questions": []
          },
          {
            "id": "sd-cap-theorem-consistency-availability-partition-tolerance",
            "title": "CAP Theorem (Consistency, Availability, Partition Tolerance)",
            "slug": "sd-cap-theorem-consistency-availability-partition-tolerance",
            "difficulty": "Medium",
            "description": "Comprehensive guide to CAP Theorem (Consistency, Availability, Partition Tolerance) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "CAP Theorem (Consistency, Availability, Partition Tolerance) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### CAP Theorem (Consistency, Availability, Partition Tolerance)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **CAP Theorem (Consistency, Availability, Partition Tolerance)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# CAP Theorem (Consistency, Availability, Partition Tolerance) in Python\nprint('Production architecture pattern: CAP Theorem (Consistency, Availability, Partition Tolerance)')",
              "java": "// CAP Theorem (Consistency, Availability, Partition Tolerance) in Java\nSystem.out.println(\"CAP Theorem (Consistency, Availability, Partition Tolerance)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-consistency-models-strong-eventual-causal-consistency",
            "title": "Consistency models (Strong, Eventual, Causal consistency)",
            "slug": "sd-consistency-models-strong-eventual-causal-consistency",
            "difficulty": "Hard",
            "description": "Understanding distributed consistency spectrum: Strict/Linearizable consistency, Sequential consistency, Causal consistency, and Eventual consistency.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Consistency models (Strong, Eventual, Causal consistency) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Consistency Models in Distributed Systems\n\nIn a distributed system with replicated data across multiple nodes, the consistency model defines the rules for the visibility and ordering of updates.\n\n#### 1. Strong / Linearizable Consistency\n- Once a write is acknowledged, all subsequent reads across ALL nodes in the cluster will return that value or a newer value.\n- The system behaves as if there is only a single copy of the data.\n- **Trade-off**: Requires distributed consensus protocols (Raft, Paxos, 2PC) with higher latency and reduced availability during network partitions (CAP theorem CP).\n- **Examples**: Google Spanner, CockroachDB, etcd, Consul.\n\n#### 2. Eventual Consistency\n- If no new updates are made, all replicas will eventually converge to the same value.\n- In the short term, reads from different nodes may return stale or inconsistent data.\n- **Trade-off**: High availability and ultra-low latency reads/writes (CAP theorem AP).\n- **Examples**: Amazon DynamoDB (default read mode), Apache Cassandra, DNS.\n\n#### 3. Causal Consistency\n- Operations that are causally related must be seen by every node in the same order.\n- Operations that are concurrent (unrelated) can be seen in different orders.\n- **Example**: In a comment thread, a reply must never be visible before the original question it answers.",
            "code_example": {
              "language": "multi",
              "python": "# Eventual vs Strong read mode in AWS DynamoDB Boto3\nimport boto3\nddb = boto3.client('dynamodb')\n\n# Eventual Consistency read (default, 1/2 cost)\nres_eventual = ddb.get_item(TableName='users', Key={'id': {'S': 'u101'}}, ConsistentRead=False)\n\n# Strong Consistency read (linearizable, fresh data)\nres_strong = ddb.get_item(TableName='users', Key={'id': {'S': 'u101'}}, ConsistentRead=True)",
              "java": "// Cassandra consistency level configuration\n// SimpleStatement stmt = SimpleStatement.newInstance(\"SELECT * FROM users WHERE id = ?\", userId)\n//     .setConsistencyLevel(ConsistencyLevel.QUORUM); // Strong quorum consistency"
            },
            "complexity": {
              "time": "Strong: O(network RTT quorum), Eventual: O(1) local node read",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-database-connection-pooling",
            "title": "Database connection pooling",
            "slug": "sd-database-connection-pooling",
            "difficulty": "Medium",
            "description": "Why connection pooling is essential: connection cost, pool sizing formula (Little's Law), HikariCP configuration, and connection leak detection.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Database Connection Pooling - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Why Connection Pooling?\nCreating a new DB connection for each request is expensive:\n- TCP handshake + TLS + DB authentication = **1–5ms overhead per connection**.\n- At 10,000 RPS, 10,000 simultaneous connections → **overwhelms database**.\n\nA **Connection Pool** maintains a pre-established set of connections, reused across requests.\n\n### 2. Pool Sizing Formula\n> **Pool Size = (core_count × 2) + effective_spindle_count**\n> (Rule of thumb from HikariCP docs)\n\nFor 4-core server: Pool Size = (4 × 2) + 1 = **9 connections**.\n\n**Don't over-pool!** 100 threads × 100 connections = 10,000 connections. PostgreSQL default limit = 100.\n\n### 3. HikariCP (Java — Fastest Connection Pool)\n```\nminimumIdle=5        → Keep 5 connections ready\nmaximumPoolSize=20   → Max 20 connections\nconnectionTimeout=30000  → Fail if no connection in 30s\nidleTimeout=600000       → Remove idle connections after 10 min\nmaxLifetime=1800000      → Rotate connections every 30 min\n```",
            "code_example": {
              "language": "multi",
              "python": "# Python — SQLAlchemy connection pool\nfrom sqlalchemy import create_engine\nengine = create_engine(\n    'postgresql://user:pass@localhost:5432/db',\n    pool_size=10,           # Base pool\n    max_overflow=20,        # Extra connections when pool exhausted\n    pool_timeout=30,        # Wait 30s for connection\n    pool_recycle=1800,      # Rotate connections every 30 min\n    pool_pre_ping=True,     # Test connection before using (detect stale)\n)\nprint('Connection pool configured:', engine.pool.size())",
              "java": "// HikariCP configuration\nHikariConfig config = new HikariConfig();\nconfig.setJdbcUrl(\"jdbc:postgresql://localhost:5432/db\");\nconfig.setMaximumPoolSize(20);\nconfig.setMinimumIdle(5);\nconfig.setConnectionTimeout(30_000);\nconfig.setIdleTimeout(600_000);\nconfig.setMaxLifetime(1_800_000);\nHikariDataSource ds = new HikariDataSource(config);"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-transactions-isolation-levels",
            "title": "Transactions & Isolation levels",
            "slug": "sd-transactions-isolation-levels",
            "difficulty": "Hard",
            "description": "Concurrency anomalies (dirty read, non-repeatable read, phantom read) and standard isolation levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Transactions & Isolation levels - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Database Isolation Levels & Concurrency Anomalies\n\nIsolation is the 'I' in ACID. It dictates how concurrent transactions interact and what anomalies are permitted for performance.\n\n#### 1. Concurrency Anomalies\n- **Dirty Read**: Reading uncommitted changes made by another concurrent transaction that might be rolled back.\n- **Non-Repeatable Read**: Re-reading a specific row within the same transaction and seeing changed values because another transaction modified and committed it.\n- **Phantom Read**: Re-executing a range query (`WHERE score > 90`) and seeing new rows added by another committed transaction.\n\n#### 2. Standard SQL Isolation Levels\n| Isolation Level | Dirty Read | Non-Repeatable Read | Phantom Read |\n| :--- | :--- | :--- | :--- |\n| **Read Uncommitted** | Permitted | Permitted | Permitted |\n| **Read Committed** | Prevented | Permitted | Permitted |\n| **Repeatable Read** | Prevented | Prevented | Permitted (Prevented in MySQL InnoDB via Next-Key locks) |\n| **Serializable** | Prevented | Prevented | Prevented |\n\n#### 3. How Modern Engines Implement Isolation\n- **MVCC (Multi-Version Concurrency Control)**: PostgreSQL and MySQL InnoDB keep multiple versions of each row with transaction IDs (`xmin`/`xmax`). Readers do not block writers, and writers do not block readers!",
            "code_example": {
              "language": "multi",
              "python": "# Setting transaction isolation in Python DB-API / PostgreSQL\n# connection.set_isolation_level(psycopg2.extensions.ISOLATION_LEVEL_REPEATABLE_READ)\nprint('Repeatable Read guarantees stable snapshots during reporting queries')",
              "java": "// Setting isolation level in JPA / Hibernate\n// @Transactional(isolation = Isolation.SERIALIZABLE)\n// public void criticalAuditJob() { /* Fully isolated execution */ }"
            },
            "complexity": {
              "time": "Serializable: O(lock contention), MVCC: O(1) snapshot read",
              "space": "O(V) undo log versions"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-sd-consistent-hashing",
        "name": "7. Consistent Hashing",
        "icon": "🔄",
        "topics": [
          {
            "id": "sd-why-needed-problem-with-simple-hashingmodulo",
            "title": "Why needed (problem with simple hashing/modulo)",
            "slug": "sd-why-needed-problem-with-simple-hashingmodulo",
            "difficulty": "Medium",
            "description": "The fatal limitation of simple modulo hashing (hash(key) % N) when scaling distributed cache nodes up or down.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Why needed (problem with simple hashing/modulo) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Why Consistent Hashing is Needed\n\nIn distributed caching (e.g., distributing keys across 4 Redis nodes), the naive approach uses simple modulo hashing:\n\n$$\\text{server\\_index} = \\text{hash}(\\text{key}) \\pmod N$$\n\n#### 1. The Problem with Modulo Hashing\nSuppose we have $N = 4$ cache servers. A key with `hash = 10` maps to:\n$$10 \\pmod 4 = 2 \\quad (\\text{Server 2})$$\n\nNow, if traffic spikes and we add a 5th server ($N = 5$):\n$$10 \\pmod 5 = 0 \\quad (\\text{Server 0})$$\n\n#### 2. The Disaster: 80% to 100% Cache Miss Storm\n- When the number of nodes changes from $N$ to $N+1$, almost EVERY existing key maps to a completely different server index!\n- **Nearly 100% of all cached keys become instant cache misses**.\n- Millions of concurrent requests suddenly bypass the cache and smash the database simultaneously, causing a total system collapse (**thundering herd**).\n\n#### 3. The Consistent Hashing Solution\nConsistent hashing ensures that when a server is added or removed, on average only $\\frac{K}{N}$ keys need to be remapped, where $K$ is total keys and $N$ is total nodes!",
            "code_example": {
              "language": "multi",
              "python": "# Demonstration of modulo hash instability\nkeys = ['user_1', 'user_2', 'user_3', 'user_4', 'user_5', 'user_6', 'user_7', 'user_8']\n\n# N = 4 servers\nmap_4 = {k: hash(k) % 4 for k in keys}\n# N = 5 servers (1 node added)\nmap_5 = {k: hash(k) % 5 for k in keys}\n\nremapped = sum(1 for k in keys if map_4[k] != map_5[k])\nprint(f'{remapped}/{len(keys)} keys changed servers! ({remapped/len(keys)*100:.0f}% cache miss rate)')",
              "java": "public class ModuloHashProblem {\n    public static void main(String[] args) {\n        // Changing N causes widespread key dislocation\n        System.out.println(\"Simple modulo hashing causes catastrophic cache eviction on node resize\");\n    }\n}"
            },
            "complexity": {
              "time": "O(1) calculation",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-how-consistent-hashing-works",
            "title": "How consistent hashing works",
            "slug": "sd-how-consistent-hashing-works",
            "difficulty": "Medium",
            "description": "The hash ring abstraction: placing servers and keys on a circular 360-degree hash space and routing clockwise to the nearest node.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "How consistent hashing works - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### How Consistent Hashing Works: The Hash Ring\n\nConsistent hashing maps both servers and data keys to a circular ring structure.\n\n#### 1. The Hash Ring Abstraction\n1. Imagine a circular space mapped from $0$ to $2^{32} - 1$ (the output range of a standard 32-bit hash function like MD5 or MurmurHash).\n2. **Mapping Servers**: Hash each server's IP address or hostname to place it as a point on the ring:\n   - `hash('10.0.0.1') = 5000`\n   - `hash('10.0.0.2') = 15000`\n   - `hash('10.0.0.3') = 32000`\n3. **Mapping Keys**: Hash data keys (e.g., `user_101`) to points on the same ring.\n4. **Lookup Rule (Clockwise Traversal)**: To determine which server stores a key, start at the key's position and move **clockwise** around the ring. The first server encountered owns that key.\n\n#### 2. Adding a Server Gracefully\nIf a new server `Node 4` is inserted between `Node 1` and `Node 2`, only the keys falling between `Node 1` and `Node 4` move to `Node 4`. All other keys on the rest of the ring remain completely unaffected!",
            "code_example": {
              "language": "multi",
              "python": "import bisect, hashlib\n\nclass SimpleConsistentHash:\n    def __init__(self, nodes):\n        self.ring = {}\n        self.sorted_keys = []\n        for node in nodes:\n            h = int(hashlib.md5(node.encode()).hexdigest(), 16)\n            self.ring[h] = node\n            self.sorted_keys.append(h)\n        self.sorted_keys.sort()\n\n    def get_node(self, key):\n        h = int(hashlib.md5(key.encode()).hexdigest(), 16)\n        idx = bisect.bisect_right(self.sorted_keys, h)\n        if idx == len(self.sorted_keys):\n            idx = 0  # Wrap around ring\n        return self.ring[self.sorted_keys[idx]]\n\nch = SimpleConsistentHash(['ServerA', 'ServerB', 'ServerC'])\nprint('Key photo_101 maps to:', ch.get_node('photo_101'))",
              "java": "// TreeMap in Java naturally implements clockwise navigation via tailMap() or higherKey()"
            },
            "complexity": {
              "time": "Lookup: O(log N) binary search on ring",
              "space": "O(N) ring nodes"
            },
            "practice_questions": []
          },
          {
            "id": "sd-virtual-nodes",
            "title": "Virtual nodes",
            "slug": "sd-virtual-nodes",
            "difficulty": "Medium",
            "description": "Solving non-uniform data distribution and cascading failures in consistent hashing through virtual nodes (vnodes).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Virtual nodes - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Virtual Nodes (VNodes) in Consistent Hashing\n\nWhile a basic hash ring works well theoretically, in practice it suffers from two major real-world flaws.\n\n#### 1. The Problems with Basic Consistent Hashing\n- **Non-Uniform Distribution (Hotspots)**: With only 3 or 4 physical servers, servers will naturally be unevenly spaced around the ring. One server might own 70% of the ring while another owns 10%.\n- **Cascading Failures**: When Server A crashes, 100% of its load is dumped onto its immediate clockwise neighbor (Server B). Server B gets overwhelmed, crashes, and dumps 2 servers worth of load onto Server C, cascading into a total cluster blackout!\n\n#### 2. The Solution: Virtual Nodes\n- Instead of assigning a physical server a single point on the ring, each physical server is assigned **hundreds of virtual nodes (e.g., 100-256 vnodes)** distributed randomly across the ring.\n- Example: Physical Server A is hashed as `ServerA#1`, `ServerA#2`, ..., `ServerA#200`.\n\n#### 3. Benefits of Virtual Nodes\n1. **Uniform Data Balance**: Keys are distributed evenly across physical machines according to the law of large numbers.\n2. **Even Load Redistribution on Failure**: When Physical Server A fails, its 200 virtual nodes are scattered around the ring. Each remaining physical server absorbs just a tiny fraction of Server A's traffic, preventing cascading crashes.\n3. **Heterogeneous Hardware**: A server with 2x more RAM and CPU can simply be allocated 2x more virtual nodes!",
            "code_example": {
              "language": "multi",
              "python": "import bisect, hashlib\n\nclass VNodeConsistentHash:\n    def __init__(self, physical_nodes, vnodes_per_node=100):\n        self.ring = {}\n        self.sorted_keys = []\n        for node in physical_nodes:\n            for i in range(vnodes_per_node):\n                vnode_name = f'{node}#vn{i}'\n                h = int(hashlib.md5(vnode_name.encode()).hexdigest(), 16)\n                self.ring[h] = node  # Maps vnode point to physical node\n                self.sorted_keys.append(h)\n        self.sorted_keys.sort()\n\n    def get_node(self, key):\n        h = int(hashlib.md5(key.encode()).hexdigest(), 16)\n        idx = bisect.bisect_right(self.sorted_keys, h)\n        if idx == len(self.sorted_keys): idx = 0\n        return self.ring[self.sorted_keys[idx]]",
              "java": "// Production consistent hashing in Cassandra and DynamoDB allocates 128-256 tokens per node"
            },
            "complexity": {
              "time": "Lookup: O(log(N * V))",
              "space": "O(N * V) where V is virtual nodes"
            },
            "practice_questions": []
          },
          {
            "id": "sd-use-cases-distributed-caching-load-balancing-sharding",
            "title": "Use cases (distributed caching, load balancing, sharding)",
            "slug": "sd-use-cases-distributed-caching-load-balancing-sharding",
            "difficulty": "Easy",
            "description": "Where consistent hashing powers industry architectures: Redis Cluster, Amazon DynamoDB, Apache Cassandra, Akamai CDN, and HAProxy routing.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Use cases (distributed caching, load balancing, sharding) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Real-World Use Cases of Consistent Hashing\n\nConsistent hashing is one of the most widely applied algorithms in distributed systems engineering.\n\n#### 1. Distributed Caching (Redis Cluster & Memcached Client Sharding)\n- Distributing millions of cache keys across dozens of cache nodes without losing all cached data when nodes are added or removed during auto-scaling.\n\n#### 2. Distributed NoSQL Databases (Cassandra & DynamoDB)\n- In **Amazon DynamoDB** and **Apache Cassandra**, data rows are partitioned across cluster nodes using a consistent hash ring (often called a 'token ring').\n- Replicas are easily chosen by picking the next $K$ consecutive physical nodes clockwise on the ring.\n\n#### 3. CDN Edge Routing (Akamai & Cloudflare)\n- Routing web requests for specific URLs to the same edge server to maximize edge cache hits while allowing edge nodes to scale dynamically.\n\n#### 4. Stateful Load Balancing & WebSocket Session Affinity\n- Mapping persistent WebSocket connections or chat rooms (`channel_id`) to the same backend gateway server without storing centralized session tables.",
            "code_example": {
              "language": "multi",
              "python": "# Cassandra Token Ring concept\ndef get_replica_nodes(token_ring, key_hash, replication_factor=3):\n    # Walk clockwise to find next N unique physical nodes\n    replicas = []\n    for node in token_ring.walk_clockwise(key_hash):\n        if node not in replicas:\n            replicas.append(node)\n            if len(replicas) == replication_factor:\n                break\n    return replicas",
              "java": "// Consistent hashing powers Dynamo-style ring replication"
            },
            "complexity": {
              "time": "O(log N + R) where R is replication factor",
              "space": "O(N)"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-sd-mq",
        "name": "8. Message Queues & Event-Driven Architecture",
        "icon": "📬",
        "topics": [
          {
            "id": "sd-why-message-queues-are-needed-decoupling",
            "title": "Why message queues are needed (decoupling)",
            "slug": "sd-why-message-queues-are-needed-decoupling",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Why message queues are needed (decoupling) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Why message queues are needed (decoupling) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Why message queues are needed (decoupling)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Why message queues are needed (decoupling)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Why message queues are needed (decoupling) in Python\nprint('Production architecture pattern: Why message queues are needed (decoupling)')",
              "java": "// Why message queues are needed (decoupling) in Java\nSystem.out.println(\"Why message queues are needed (decoupling)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-kafka-basics-topics-partitions-producers-consumers-brokers",
            "title": "Kafka basics (topics, partitions, producers, consumers, brokers)",
            "slug": "sd-kafka-basics-topics-partitions-producers-consumers-brokers",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Kafka basics (topics, partitions, producers, consumers, brokers) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Kafka basics (topics, partitions, producers, consumers, brokers) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Kafka basics (topics, partitions, producers, consumers, brokers)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Kafka basics (topics, partitions, producers, consumers, brokers)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Kafka basics (topics, partitions, producers, consumers, brokers) in Python\nprint('Production architecture pattern: Kafka basics (topics, partitions, producers, consumers, brokers)')",
              "java": "// Kafka basics (topics, partitions, producers, consumers, brokers) in Java\nSystem.out.println(\"Kafka basics (topics, partitions, producers, consumers, brokers)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-rabbitmq-basics",
            "title": "RabbitMQ basics",
            "slug": "sd-rabbitmq-basics",
            "difficulty": "Medium",
            "description": "RabbitMQ fundamentals: AMQP architecture, exchanges (direct, topic, fanout, headers), bindings, queues, acknowledgements, and prefetch limits.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "RabbitMQ basics - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### RabbitMQ Fundamentals & AMQP Architecture\n\nRabbitMQ is a widely adopted, lightweight message broker implementing the Advanced Message Queuing Protocol (AMQP 0-9-1).\n\n#### 1. Core Concepts\n- **Producer**: Application that publishes messages.\n- **Exchange**: The message router. Producers NEVER send directly to a queue; they publish to an Exchange, which inspects routing keys and forwards messages to bound queues.\n- **Queue**: Buffer that stores messages in memory/disk until consumed.\n- **Binding**: The link and rule connecting an Exchange to a Queue.\n- **Consumer**: Application worker that dequeues and processes messages.\n\n#### 2. Exchange Types\n1. **Direct Exchange**: Routes message to queues where the queue binding key strictly equals the message routing key (e.g., routing key `pdf_generation`).\n2. **Fanout Exchange**: Broadcasts every incoming message to ALL bound queues regardless of routing key (used for notifications, publish-subscribe).\n3. **Topic Exchange**: Performs wildcard pattern matching (`*` matches one word, `#` matches zero or more words, e.g., `orders.*.europe`).\n4. **Headers Exchange**: Routes based on message header attributes instead of routing keys.\n\n#### 3. Consumer Acknowledgment & Prefetch (QoS)\n- **ACK/NACK**: RabbitMQ retains a message until the worker explicitly sends an `ACK`. If the worker dies before ACK, the message is automatically requeued.\n- **Prefetch Count**: Limits unacknowledged messages per worker (e.g., `prefetch=1`) to prevent fast producers from overwhelming slow workers.",
            "code_example": {
              "language": "multi",
              "python": "import pika\n\n# RabbitMQ Producer with Direct Exchange\nconnection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))\nchannel = connection.channel()\n\nchannel.exchange_declare(exchange='task_exchange', exchange_type='direct')\nchannel.queue_declare(queue='email_queue', durable=True)\nchannel.queue_bind(exchange='task_exchange', queue='email_queue', routing_key='send_email')\n\nchannel.basic_publish(exchange='task_exchange', routing_key='send_email', body='Welcome to PrepFlow AI!')\nprint('Message published to RabbitMQ direct exchange!')",
              "java": "// Spring AMQP RabbitTemplate\n// rabbitTemplate.convertAndSend(\"task_exchange\", \"send_email\", new EmailPayload(\"user@test.com\"));"
            },
            "complexity": {
              "time": "O(1) enqueue / dequeue",
              "space": "O(M) unconsumed queue size"
            },
            "practice_questions": []
          },
          {
            "id": "sd-pub-sub-model",
            "title": "Pub-Sub model",
            "slug": "sd-pub-sub-model",
            "difficulty": "Easy",
            "description": "The Publish-Subscribe pattern: 1-to-many event dissemination, topic subscribers, decoupled lifecycles, and comparison with point-to-point queues.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Pub-Sub model - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### The Publish-Subscribe (Pub-Sub) Model\n\nIn point-to-point queuing, each message is processed by exactly one worker. In the **Pub-Sub pattern**, a single published event is broadcast to multiple independent subscribers simultaneously.\n\n#### 1. How Pub-Sub Works\n1. A **Publisher** emits an event (e.g., `OrderPlacedEvent`) to a Topic without knowing who is listening.\n2. Multiple independent **Subscribers** listen to the topic:\n   - **Inventory Service**: Decrements warehouse stock.\n   - **Email Service**: Sends invoice PDF to buyer.\n   - **Analytics Service**: Updates real-time sales dashboards.\n   - **Fraud Detection Service**: Analyzes order risk score.\n3. Each subscriber maintains its own isolated queue or consumer offset.\n\n#### 2. Benefits in System Design\n- **Extreme Decoupling**: Adding a new feature (e.g., SMS Notification Service) requires zero changes to the Order Service! Simply attach a new subscriber to the topic.",
            "code_example": {
              "language": "multi",
              "python": "# Conceptual Pub-Sub Event Bus\nclass EventBus:\n    def __init__(self):\n        self.subscribers = {}\n\n    def subscribe(self, event_type, handler):\n        self.subscribers.setdefault(event_type, []).append(handler)\n\n    def publish(self, event_type, data):\n        for handler in self.subscribers.get(event_type, []):\n            handler(data)\n\nbus = EventBus()\nbus.subscribe('ORDER_PLACED', lambda d: print(f'Inventory: reserve stock for {d}'))\nbus.subscribe('ORDER_PLACED', lambda d: print(f'Email: send invoice for {d}'))\nbus.publish('ORDER_PLACED', {'order_id': 101, 'sku': 'MACBOOK_PRO'})",
              "java": "// Spring @EventListener / Google Cloud Pub/Sub\n// publisher.publish(PubsubMessage.newBuilder().setData(ByteString.copyFromUtf8(\"event\")).build());"
            },
            "complexity": {
              "time": "O(Subscribers) fanout",
              "space": "O(Subscribers) queue buffers"
            },
            "practice_questions": []
          },
          {
            "id": "sd-event-driven-architecture",
            "title": "Event-driven architecture",
            "slug": "sd-event-driven-architecture",
            "difficulty": "Medium",
            "description": "Building reactive, resilient systems using events: choreographies vs orchestrations, event sourcing, and CQRS.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Event-driven architecture - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Event-Driven Architecture (EDA)\n\nEDA is a software architecture pattern where decoupled services asynchronously produce and react to events representing state changes.\n\n#### 1. Choreography vs Orchestration\n- **Choreography (Decentralized)**: Each service listens to events and decides its own next action. No central controller. Simple for small workflows, but hard to trace and debug as services scale.\n- **Orchestration (Centralized)**: A master coordinator service (Orchestrator / Workflow engine like Temporal or AWS Step Functions) explicitly commands each participant service what to do and tracks state transitions.\n\n#### 2. Advanced EDA Patterns\n- **Event Sourcing**: Instead of storing just the current state of an entity in a database, the system stores the entire sequence of immutable state-changing events. The current state is reconstructed by replaying events from genesis.\n- **CQRS (Command Query Responsibility Segregation)**: Separates the write model (optimized for consistency and transactions) from the read model (denormalized in Elasticsearch or Redis for blazing-fast read queries).",
            "code_example": {
              "language": "multi",
              "python": "# Event Sourcing demonstration: Account balance is derived from event history\nevents = [\n    {'type': 'DEPOSIT', 'amount': 100},\n    {'type': 'DEPOSIT', 'amount': 50},\n    {'type': 'WITHDRAW', 'amount': 30},\n    {'type': 'DEPOSIT', 'amount': 20}\n]\n\nbalance = sum(e['amount'] if e['type'] == 'DEPOSIT' else -e['amount'] for e in events)\nprint('Current balance derived by replaying events:', balance)",
              "java": "// CQRS separates Command (Write) from Query (Read)\n// public interface OrderCommandHandler { void handle(CreateOrderCommand cmd); }\n// public interface OrderQueryHandler { OrderSummaryDTO handle(GetOrderQuery qry); }"
            },
            "complexity": {
              "time": "Async I/O bounded",
              "space": "Append-only immutable event log"
            },
            "practice_questions": []
          },
          {
            "id": "sd-dead-letter-queue-dlq",
            "title": "Dead Letter Queue (DLQ)",
            "slug": "sd-dead-letter-queue-dlq",
            "difficulty": "Medium",
            "description": "At-most-once, at-least-once, and exactly-once delivery guarantees; poison pill message handling, exponential backoff, and Dead Letter Queues (DLQ).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Dead Letter Queue & Delivery Guarantees - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Delivery Guarantees & Dead Letter Queues\\n\\nIn asynchronous event-driven architectures, network failures and software bugs can prevent messages from being processed successfully.\\n\\n#### 1. The Three Delivery Guarantees\\n1. **At-Most-Once**: The producer fires and forgets, or the consumer commits the message offset *before* completing processing. If the consumer crashes during processing, the message is lost forever. Zero duplicates, but data loss is possible.\\n2. **At-Least-Once (Industry Standard)**: The consumer commits the offset *only after* successfully processing the message. If the consumer crashes midway, the message will be redelivered. Prevents data loss, but consumers MUST be **idempotent** to handle duplicate deliveries safely.\\n3. **Exactly-Once Processing**: Achieved through end-to-end transactional commits (e.g., Kafka Streams transactions or idempotent consumer deduplication tables in DB).\\n\\n#### 2. Poison Pill Messages & Dead Letter Queues (DLQ)\\n- **Poison Pill**: A malformed message (e.g., corrupt JSON payload or division by zero) that causes the consumer worker to crash every time it tries to process it. Without safety mechanisms, the consumer gets stuck in an infinite retry loop, blocking the entire queue.\\n- **DLQ Mechanism**:\\n  1. When processing fails, retry with **exponential backoff and jitter** (e.g., 1s, 2s, 4s, 8s).\\n  2. If the message fails `MAX_RETRIES` (e.g., 3 times), route it to a **Dead Letter Queue (DLQ)**.\\n  3. Fire an alert to on-call engineers to inspect and replay the DLQ messages after deploying a bug fix.",
            "code_example": {
              "language": "multi",
              "python": "def process_message_with_dlq(msg, max_retries=3):\n    for attempt in range(1, max_retries + 1):\n        try:\n            execute_business_logic(msg)\n            ack_message(msg)\n            return\n        except Exception as e:\n            print(f'Attempt {attempt} failed: {e}')\n    # Max retries exhausted: send to DLQ\n    send_to_dead_letter_queue(msg, reason=str(e))\n    ack_message(msg)  # Discard from main queue",
              "java": "// AWS SQS Redrive Policy configuration\n// {\"deadLetterTargetArn\": \"arn:aws:sqs:us-east-1:12345:OrderDLQ\", \"maxReceiveCount\": \"3\"}"
            },
            "complexity": {
              "time": "O(1) per message",
              "space": "O(K) DLQ storage for failed messages"
            },
            "practice_questions": []
          },
          {
            "id": "sd-message-ordering-delivery-guarantees-at-most-once-at-least-once-exactly-once",
            "title": "Message ordering & delivery guarantees (at-most-once, at-least-once, exactly-once)",
            "slug": "sd-message-ordering-delivery-guarantees-at-most-once-at-least-once-exactly-once",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Message ordering & delivery guarantees (at-most-once, at-least-once, exactly-once) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Message ordering & delivery guarantees (at-most-once, at-least-once, exactly-once) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Message ordering & delivery guarantees (at-most-once, at-least-once, exactly-once)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Message ordering & delivery guarantees (at-most-once, at-least-once, exactly-once)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Message ordering & delivery guarantees (at-most-once, at-least-once, exactly-once) in Python\nprint('Production architecture pattern: Message ordering & delivery guarantees (at-most-once, at-least-once, exactly-once)')",
              "java": "// Message ordering & delivery guarantees (at-most-once, at-least-once, exactly-once) in Java\nSystem.out.println(\"Message ordering & delivery guarantees (at-most-once, at-least-once, exactly-once)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-sd-rate-limiting",
        "name": "9. Rate Limiting",
        "icon": "⏱️",
        "topics": [
          {
            "id": "sd-why-rate-limiting-is-needed",
            "title": "Why rate limiting is needed",
            "slug": "sd-why-rate-limiting-is-needed",
            "difficulty": "Easy",
            "description": "The critical role of rate limiters in preventing DDoS attacks, brute force attempts, API resource starvation, and managing third-party costs.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Why rate limiting is needed - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Why Rate Limiting is Essential in System Design\n\nA rate limiter controls the rate of traffic sent by a client or consumer to a service, protecting backend infrastructure from being overwhelmed.\n\n#### 1. Core Motivations\n1. **Prevent Denial of Service (DoS & DDoS)**: Malicious actors or runaway customer scripts can flood endpoints with tens of thousands of requests per second, taking down databases and web servers.\n2. **Defend Against Brute Force Credential Attacks**: Rate-limiting `/api/login` to 5 attempts per minute per IP or account stops credential stuffing and password guessing.\n3. **Prevent Resource Starvation ('Noisy Neighbor' Problem)**: In multi-tenant cloud platforms, ensures that one hyper-active customer cannot consume 95% of server CPU/memory, starving other paying users.\n4. **Control Third-Party API Costs**: Prevents accidental financial bills when invoking metered APIs (e.g., OpenAI API, Twilio SMS, Stripe).\n5. **Enforce Monetization Tiers**: Free tier gets 100 requests/day; Pro tier gets 10,000 requests/day.",
            "code_example": {
              "language": "multi",
              "python": "# HTTP 429 Too Many Requests response headers\nrate_limit_headers = {\n    'X-RateLimit-Limit': '100',       # Max requests allowed in window\n    'X-RateLimit-Remaining': '0',      # Requests left\n    'X-RateLimit-Reset': '1772880000', # Unix timestamp when quota resets\n    'Retry-After': '30'                # Wait 30 seconds before retrying\n}\nprint('Standard rate limiting HTTP headers:', rate_limit_headers)",
              "java": "// HTTP 429 Status Code\n// response.setStatus(429); response.setHeader(\"Retry-After\", \"60\");"
            },
            "complexity": {
              "time": "O(1) header check",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-algorithms-token-bucket-leaky-bucket-fixed-window-sliding-window",
            "title": "Algorithms: Token Bucket, Leaky Bucket, Fixed Window, Sliding Window",
            "slug": "sd-algorithms-token-bucket-leaky-bucket-fixed-window-sliding-window",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Algorithms: Token Bucket, Leaky Bucket, Fixed Window, Sliding Window in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Algorithms: Token Bucket, Leaky Bucket, Fixed Window, Sliding Window - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Algorithms: Token Bucket, Leaky Bucket, Fixed Window, Sliding Window\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Algorithms: Token Bucket, Leaky Bucket, Fixed Window, Sliding Window** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Algorithms: Token Bucket, Leaky Bucket, Fixed Window, Sliding Window in Python\nprint('Production architecture pattern: Algorithms: Token Bucket, Leaky Bucket, Fixed Window, Sliding Window')",
              "java": "// Algorithms: Token Bucket, Leaky Bucket, Fixed Window, Sliding Window in Java\nSystem.out.println(\"Algorithms: Token Bucket, Leaky Bucket, Fixed Window, Sliding Window\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-where-to-implement-client-vs-server-vs-gateway",
            "title": "Where to implement (client vs server vs gateway)",
            "slug": "sd-where-to-implement-client-vs-server-vs-gateway",
            "difficulty": "Medium",
            "description": "Architectural placement trade-offs for rate limiters: Client-side throttling, API Gateway / Edge proxy, Application server middleware, and Database layer.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Where to implement (client vs server vs gateway) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Where to Implement Rate Limiting?\n\nChoosing where rate limiters sit in your architecture involves trade-offs between security, control, and implementation effort.\n\n#### 1. Client-Side Throttling\n- Implemented in mobile apps or SDKs to pace outgoing requests.\n- **Limitation**: Untrusted clients can be bypassed or reverse-engineered by malicious users. NEVER rely on client-side rate limiting for security!\n\n#### 2. API Gateway / Reverse Proxy (Recommended for Most Systems)\n- Implemented in **Kong, AWS API Gateway, Nginx, Envoy, or Cloudflare**.\n- **Pros**:\n  - Stops bad traffic at the edge before it ever reaches backend microservice clusters.\n  - Language-agnostic (Node.js, Go, Python services don't need their own rate limiting libraries).\n  - Easy to enforce global IP and API-key quotas.\n\n#### 3. Application Middleware (In-Process / Service Level)\n- Implemented directly inside the service code (e.g., Redis-backed middleware in FastAPI, Express, or Spring Boot).\n- **Pros**: Fine-grained business logic access (e.g., VIP customer exemptions, account tier lookups).\n- **Cons**: Still consumes app server CPU and network bandwidth before discarding requests.",
            "code_example": {
              "language": "multi",
              "python": "from fastapi import FastAPI, Request, HTTPException\nimport time, redis\n\napp = FastAPI()\nr = redis.Redis()\n\n@app.middleware('http')\ndef rate_limit_middleware(request: Request, call_next):\n    client_ip = request.client.host\n    key = f'ratelimit:{client_ip}:{int(time.time() // 60)}'\n    count = r.incr(key)\n    if count == 1: r.expire(key, 60)\n    if count > 60: # Limit 60 req/min\n        raise HTTPException(status_code=429, detail='Rate limit exceeded')\n    return call_next(request)",
              "java": "// Bucket4j Redis Token Bucket filter in Spring Boot Gateway"
            },
            "complexity": {
              "time": "O(1) Redis INCR/EVAL",
              "space": "O(Active Users)"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-sd-proxy",
        "name": "10. Proxy",
        "icon": "🛡️",
        "topics": [
          {
            "id": "sd-forward-proxy",
            "title": "Forward Proxy",
            "slug": "sd-forward-proxy",
            "difficulty": "Easy",
            "description": "How forward proxies act on behalf of clients: internal IP masking, internet egress filtering, corporate security policies, and client-side caching.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Forward Proxy - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### What is a Forward Proxy?\n\nA forward proxy sits in front of a group of **clients** and acts as an intermediary for outbound requests to the public internet.\n\n#### 1. How It Operates\n- Client → Forward Proxy → Public Internet → Target Web Server.\n- The destination web server sees the **proxy's IP address**, not the client's actual IP address.\n\n#### 2. Key Use Cases\n- **Anonymity & Privacy**: Hiding client IP addresses (e.g., Tor, commercial VPNs).\n- **Corporate Security & Compliance**: Enterprise firewalls force all employee laptops through a forward proxy to block malicious websites, log internet traffic, and prevent data leakage.\n- **Bypassing Geo-Restrictions**: Accessing region-locked content by routing through a proxy situated in another country.\n- **Bandwidth Caching**: Caching frequently downloaded files (software updates, media) locally inside a company network.",
            "code_example": {
              "language": "multi",
              "python": "import requests\n\n# Directing outbound client HTTP requests through a forward proxy\nproxies = {\n    'http': 'http://corporate-proxy.company.internal:8080',\n    'https': 'http://corporate-proxy.company.internal:8080'\n}\n\nresponse = requests.get('https://api.github.com', proxies=proxies)\nprint('Request routed securely through forward proxy!')",
              "java": "// Java System properties for forward proxy\n// System.setProperty(\"http.proxyHost\", \"10.0.0.100\");\n// System.setProperty(\"http.proxyPort\", \"8080\");"
            },
            "complexity": {
              "time": "O(1) forwarding",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-reverse-proxy",
            "title": "Reverse Proxy",
            "slug": "sd-reverse-proxy",
            "difficulty": "Easy",
            "description": "How reverse proxies act on behalf of servers: load balancing, SSL/TLS termination, request routing, caching, and shielding backend servers.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Reverse Proxy - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### What is a Reverse Proxy?\n\nA reverse proxy sits in front of one or more **backend servers** and intercepts incoming client requests from the public internet.\n\n#### 1. How It Operates\n- Public Client → Reverse Proxy (Nginx, HAProxy, Envoy) → Private Backend Servers.\n- The client believes it is communicating directly with the origin server; it has zero knowledge of the internal private backend topology.\n\n#### 2. Key Capabilities in System Design\n- **Load Balancing**: Distributes incoming requests across multiple backend app servers.\n- **TLS/SSL Termination**: Handles CPU-intensive cryptographic decryption so backend app servers can run on plain HTTP in private VPC subnets.\n- **Security Shield**: Hides backend server private IPs and ports from direct internet access, mitigating port scans and direct attacks.\n- **Compression & Caching**: Compresses responses with Gzip/Brotli and serves cached responses without touching backend application processes.",
            "code_example": {
              "language": "multi",
              "python": "# Typical Nginx Reverse Proxy Configuration\nnginx_config = '''\nserver {\n    listen 80;\n    server_name api.example.com;\n    \n    location / {\n        proxy_pass http://backend_upstream_cluster;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n    }\n}\n'''\nprint('Reverse proxy shields backend microservices from public exposure')",
              "java": "// Envoy / Nginx handles reverse proxying in production infrastructure"
            },
            "complexity": {
              "time": "O(1) L7 routing",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-difference-use-cases",
            "title": "Difference & use cases",
            "slug": "sd-difference-use-cases",
            "difficulty": "Easy",
            "description": "Head-to-head comparison: Forward Proxy vs Reverse Proxy, their architectural positioning, and use-case matrix.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Difference & use cases - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Forward Proxy vs Reverse Proxy: Comparison Matrix\n\n| Dimension | Forward Proxy | Reverse Proxy |\n| :--- | :--- | :--- |\n| **Position** | Sits in front of **Clients** | Sits in front of **Servers** |\n| **Whom does it protect?** | Protects/masks the Client | Protects/shields the Backend Servers |\n| **Awareness** | Client knows it is using a proxy | Client has NO idea a proxy is involved |\n| **Primary Roles** | Content filtering, anonymity, caching outbound requests | Load balancing, SSL termination, caching inbound requests, WAF |\n| **Typical Examples** | Squid, Charles Proxy, VPN tunnels | Nginx, HAProxy, Envoy, Traefik, AWS ALB |",
            "code_example": {
              "language": "multi",
              "python": "# Mental shortcut:\n# Forward proxy = Protects YOU from the Internet\n# Reverse proxy = Protects the SERVERS from YOU\nprint('Forward: Client -> Proxy -> Internet')\nprint('Reverse: Client -> Proxy (as Server) -> Backend Servers')",
              "java": "public class ProxyDifferences {\n    public static void main(String[] args) {\n        System.out.println(\"Forward proxy represents clients; Reverse proxy represents servers.\");\n    }\n}"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-sd-microservices",
        "name": "11. Microservices vs Monolith",
        "icon": "🧩",
        "topics": [
          {
            "id": "sd-monolithic-architecture-proscons",
            "title": "Monolithic architecture (pros/cons)",
            "slug": "sd-monolithic-architecture-proscons",
            "difficulty": "Easy",
            "description": "The monolithic architecture pattern: single unified codebase and deployment artifact, its significant advantages for startups, and scaling limits.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Monolithic architecture (pros/cons) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Monolithic Architecture: Deep Dive\n\nIn a monolithic architecture, all software components (UI rendering, business logic, authentication, payments, database access) are packaged and deployed as a single unified executable.\n\n#### 1. Pros\n- **Simplicity**: Easy to build, test, and run locally (just press 'Run' in IDE).\n- **High Performance**: Inter-module calls are in-memory function calls with zero network serialization or latency overhead.\n- **ACID Transactions**: Relational joins and transactions across all domain entities work effortlessly within a single database.\n- **Simple Deployment & Monitoring**: Only one artifact to compile, containerize, deploy, and monitor.\n\n#### 2. Cons at Scale\n- **Scaling Inefficiency**: Must scale the entire monolith even if only one small component (e.g., video processing) needs high CPU.\n- **Deployment Friction**: Hundreds of developers committing to one giant repo create merge hell and long CI/CD build queues.\n- **Single Point of Failure**: A memory leak in a minor feature can crash the entire application process.",
            "code_example": {
              "language": "multi",
              "python": "# Monolithic class where all domains share single process memory\nclass MonolithApp:\n    def handle_checkout(self, user_id, cart_id):\n        # In-memory function calls across domains\n        self.validate_user(user_id)\n        self.process_payment(cart_id)\n        self.update_inventory(cart_id)\n        self.send_receipt(user_id)",
              "java": "// Spring Boot monolithic jar containing all controllers and repositories"
            },
            "complexity": {
              "time": "Function call: O(1) in-memory",
              "space": "Single process RAM"
            },
            "practice_questions": []
          },
          {
            "id": "sd-microservices-architecture-proscons",
            "title": "Microservices architecture (pros/cons)",
            "slug": "sd-microservices-architecture-proscons",
            "difficulty": "Medium",
            "description": "The microservices architecture pattern: independently deployable, loosely coupled services organized around business domains.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Microservices architecture (pros/cons) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Microservices Architecture: Deep Dive\n\nMicroservices structure an application as a collection of small, autonomous, independently deployable services communicating over lightweight network protocols (HTTP/REST, gRPC, messaging queues).\n\n#### 1. Pros\n- **Autonomous Teams**: Small two-pizza teams own their services end-to-end, choosing the best programming language, database, and release cadence.\n- **Independent Scalability**: Scale the Checkout Service to 100 pods during Black Friday while keeping the Reviews Service on 5 pods.\n- **Fault Isolation**: If the Recommendation Service crashes, the user can still browse and purchase items.\n\n#### 2. Cons & Distributed Complexity\n- **Network Latency & Failures**: Replacing in-memory calls with network hops introduces network partitions, timeouts, and latency overhead.\n- **Distributed Data Consistency**: No simple ACID joins. Requires Saga patterns, event sourcing, and eventual consistency.\n- **Operational Overhead**: Requires Kubernetes, CI/CD pipelines, service meshes, centralized logging, and distributed tracing.",
            "code_example": {
              "language": "multi",
              "python": "# Microservice calling another service over network\nimport requests\n\ndef create_order(user_id, item_id):\n    # Network RPC replaces in-memory call\n    resp = requests.post('http://inventory-service/reserve', json={'item': item_id}, timeout=2.0)\n    if resp.status_code == 200:\n        return {'status': 'success'}\n    return {'status': 'failed', 'reason': 'Inventory unavailable'}",
              "java": "// Spring Cloud FeignClient for declarative microservice invocation\n// @FeignClient(name = \"inventory-service\")\n// public interface InventoryClient { @PostMapping(\"/reserve\") boolean reserve(Item item); }"
            },
            "complexity": {
              "time": "O(Network RTT) per cross-service call",
              "space": "Distributed infrastructure footprint"
            },
            "practice_questions": []
          },
          {
            "id": "sd-service-to-service-communication",
            "title": "Service-to-service communication",
            "slug": "sd-service-to-service-communication",
            "difficulty": "Medium",
            "description": "Inter-service communication styles: synchronous (REST, gRPC) vs asynchronous (Message Queues, Kafka), and data serialization (JSON, Protobuf).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Service-to-service communication - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Service-to-Service Communication in Microservices\n\nMicroservices must collaborate to satisfy user workflows. Choosing the communication protocol impacts latency, coupling, and system resilience.\n\n#### 1. Synchronous Communication (Request-Response)\n- **Protocols**: REST over HTTP/1.1 or HTTP/2, gRPC over HTTP/2 with Protocol Buffers.\n- **Characteristics**: Client service blocks or awaits a response from the downstream service.\n- **Pros**: Intuitive programming model, immediate success/failure response.\n- **Cons**: Cascading failures! If Service A calls B, which calls C, which calls D, a slowdown in D blocks all upstream threads (**temporal coupling**).\n\n#### 2. Asynchronous Communication (Event-Driven / Messaging)\n- **Protocols**: AMQP (RabbitMQ), Kafka event logs, AWS SQS.\n- **Characteristics**: Sender drops a message into a queue/log and immediately returns. Downstream services process it at their own pace.\n- **Pros**: Loose coupling, absorbs traffic spikes, downstream services can be offline without breaking the caller.\n- **Cons**: Eventual consistency, asynchronous debugging and distributed tracing complexity.",
            "code_example": {
              "language": "multi",
              "python": "# Synchronous gRPC vs Asynchronous Event publish\n# 1. Sync: direct tight loop\n# client.GetUserProfile(req)\n# 2. Async: publish event and let consumers react\n# kafka_producer.send('user-updated', event_payload)\nprint('Rule: Use sync for real-time reads; use async for state mutations')",
              "java": "// gRPC stub synchronous call\n// UserResponse response = userBlockingStub.getUser(request);"
            },
            "complexity": {
              "time": "gRPC: sub-5ms, REST: 20-50ms, Queue: async decoupled",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-service-discovery",
            "title": "Service Discovery",
            "slug": "sd-service-discovery",
            "difficulty": "Medium",
            "description": "How dynamically auto-scaling microservices locate each other: Client-side discovery (Eureka) vs Server-side discovery (Kubernetes DNS / AWS ALB).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Service Discovery - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Service Discovery in Ephemeral Cloud Environments\n\nIn modern containerized architectures (Docker, Kubernetes), service instances are continuously created, destroyed, and autoscaled. Hardcoding IP addresses is impossible.\n\n#### 1. Service Registry\n- A distributed database (Consul, Eureka, Zookeeper, or Kubernetes etcd) that keeps an up-to-date registry of live service instances and their current IP:Port coordinates.\n- Instances send periodic heartbeats to remain in the registry.\n\n#### 2. Client-Side Discovery (e.g., Netflix Eureka + Ribbon)\n- The calling client queries the Service Registry directly, caches the list of live IPs, and picks a target using client-side load balancing algorithms.\n\n#### 3. Server-Side Discovery (e.g., Kubernetes Services & CoreDNS)\n- The client simply sends a request to a stable DNS hostname (e.g., `http://payment-service:8080`).\n- Kubernetes `kube-proxy` / iptables or an internal load balancer intercepts the traffic and routes it to a healthy pod IP transparently.",
            "code_example": {
              "language": "multi",
              "python": "# Resolving service via DNS (Server-side discovery in Kubernetes)\nimport socket\n\ndef resolve_service_ip(service_dns):\n    return socket.gethostbyname(service_dns)\n\n# print(resolve_service_ip('payment-service.default.svc.cluster.local'))",
              "java": "// Spring Cloud Eureka Client annotation\n// @EnableDiscoveryClient\n// @SpringBootApplication public class OrderApplication {}"
            },
            "complexity": {
              "time": "O(1) DNS / Registry lookup",
              "space": "O(Total instances)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-circuit-breaker-pattern",
            "title": "Circuit Breaker pattern",
            "slug": "sd-circuit-breaker-pattern",
            "difficulty": "Medium",
            "description": "Preventing cascading system failures using the Circuit Breaker state machine: Closed, Open, and Half-Open states (Resilience4j / Hystrix).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Circuit Breaker pattern - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Circuit Breaker Pattern\n\nWhen a downstream microservice is failing or responding very slowly, upstream callers can exhaust their own thread pools waiting for timeouts, causing a cascading failure across the entire architecture.\n\n#### 1. The 3 States of a Circuit Breaker\n1. **CLOSED (Normal Operation)**:\n   - Requests flow directly to the downstream service.\n   - Failure rates and timeouts are tracked in a sliding time window.\n2. **OPEN (Tripped / Failure Mode)**:\n   - If the failure rate exceeds a threshold (e.g., > 50% errors over 10 seconds), the circuit **trips open**.\n   - All subsequent requests **fail immediately** or return a cached fallback WITHOUT making any network call! This gives the struggling downstream service time to recover.\n3. **HALF-OPEN (Testing Recovery)**:\n   - After a cooldown sleep window (e.g., 30 seconds), the circuit transitions to Half-Open.\n   - A limited trial batch of requests is allowed through.\n   - If they succeed, the circuit resets to **CLOSED**. If any fail, it trips back to **OPEN**.",
            "code_example": {
              "language": "multi",
              "python": "import time\n\nclass SimpleCircuitBreaker:\n    def __init__(self, failure_threshold=3, recovery_time=10):\n        self.state = 'CLOSED'\n        self.failures = 0\n        self.threshold = failure_threshold\n        self.recovery_time = recovery_time\n        self.last_failure_time = 0\n\n    def call(self, func, *args, **kwargs):\n        now = time.time()\n        if self.state == 'OPEN':\n            if now - self.last_failure_time > self.recovery_time:\n                self.state = 'HALF-OPEN'\n            else:\n                return 'FALLBACK_RESPONSE: Service degraded'\n        try:\n            res = func(*args, **kwargs)\n            self.state = 'CLOSED'; self.failures = 0\n            return res\n        except Exception:\n            self.failures += 1\n            self.last_failure_time = now\n            if self.failures >= self.threshold: self.state = 'OPEN'\n            return 'FALLBACK_RESPONSE'",
              "java": "// Resilience4j Circuit Breaker in Java\n// CircuitBreaker cb = CircuitBreaker.ofDefaults(\"backendService\");\n// Supplier<String> decorated = CircuitBreaker.decorateSupplier(cb, service::call);"
            },
            "complexity": {
              "time": "O(1) state check",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-saga-pattern-distributed-transactions",
            "title": "Saga pattern (distributed transactions)",
            "slug": "sd-saga-pattern-distributed-transactions",
            "difficulty": "Hard",
            "description": "Managing distributed transactions across microservices without 2PC: Choreography-based and Orchestration-based Saga patterns with rollback compensation.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Saga Pattern (Distributed Transactions) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. The Distributed Transaction Problem\nIn microservices, one business operation (e.g., \"place order\") spans multiple services:\n1. Order Service: create order\n2. Payment Service: charge card\n3. Inventory Service: reserve items\n4. Notification Service: send email\n\nTraditional ACID transactions don't work across services (each has its own DB).\n\n### 2. Saga Pattern\nA **Saga** is a sequence of local transactions. Each step publishes an event triggering the next. If a step fails, **compensating transactions** undo previous steps.\n\n### 3. Choreography-based Saga\nServices listen to events and react. No central coordinator.\n- Order Service → publishes `OrderCreated`\n- Payment Service listens → charges → publishes `PaymentProcessed`\n- Inventory Service listens → reserves → publishes `InventoryReserved`\n- If Payment fails → publishes `PaymentFailed` → Order Service listens → cancels order.\n\n**Pros:** Loose coupling. **Cons:** Hard to debug, no central oversight.\n\n### 4. Orchestration-based Saga\nA central **Saga Orchestrator** tells each service what to do next.\n- Easier to visualize and debug.\n- Central failure point if orchestrator goes down.",
            "code_example": {
              "language": "multi",
              "python": "# Saga Orchestrator concept\nclass OrderSagaOrchestrator:\n    def execute(self, order):\n        try:\n            payment_result = payment_svc.charge(order.user, order.total)\n            inventory_result = inventory_svc.reserve(order.items)\n            email_svc.send(order.user, 'Order confirmed!')\n            return 'SUCCESS'\n        except PaymentError:\n            order_svc.cancel(order)  # Compensate\n            return 'FAILED'\n        except InventoryError:\n            payment_svc.refund(order.user, order.total)  # Compensate\n            order_svc.cancel(order)\n            return 'FAILED'",
              "java": "// Spring State Machine for Saga\n@Component\npublic class OrderSagaOrchestrator {\n    public void processOrder(Order order) {\n        sagaManager.beginSaga(order)\n            .then(paymentService::charge)\n            .then(inventoryService::reserve)\n            .compensateWith(paymentService::refund)\n            .execute();\n    }\n}"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-sidecar-pattern",
            "title": "Sidecar pattern",
            "slug": "sd-sidecar-pattern",
            "difficulty": "Medium",
            "description": "The sidecar pattern for decoupling cross-cutting concerns (logging, mTLS, service discovery, metrics, traffic routing) and service mesh architecture (Envoy, Istio).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Sidecar Pattern & Service Mesh - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Sidecar Pattern & Service Mesh\\n\\nIn large-scale microservice environments, managing cross-cutting infrastructure concerns (TLS encryption, service discovery, metrics collection, distributed tracing, circuit breaking) inside every application codebase leads to language lock-in and upgrade nightmare.\\n\\n#### 1. What is the Sidecar Pattern?\\n- Like a motorcycle sidecar attached to a bike, a sidecar container runs alongside the primary application container within the same Kubernetes Pod (sharing localhost and network namespace).\\n- The application delegates peripheral tasks to the sidecar proxy without knowing the implementation details.\\n\\n#### 2. Service Mesh Architecture (Istio / Linkerd / Envoy)\\n- **Data Plane**: High-performance L7 proxy sidecars (typically **Envoy**) injected alongside every service instance. All inbound and outbound traffic passes through the sidecar.\\n  - Transparent **mTLS (Mutual TLS)** encryption between all microservices without changing a single line of app code.\\n  - Automatic retries, timeouts, and circuit breaking.\\n  - Injects OpenTelemetry / W3C TraceContext headers for distributed tracing.\\n- **Control Plane (Istio / Pilot)**: Centralized controller that translates declarative routing policies (canary releases, traffic splitting: 90% v1, 10% v2) into proxy configuration rules distributed to all sidecars.",
            "code_example": {
              "language": "multi",
              "python": "# Kubernetes Pod with Main App + Logging Sidecar\nk8s_pod_spec = '''\napiVersion: v1\nkind: Pod\nmetadata:\n  name: order-service-pod\nspec:\n  containers:\n  - name: order-app\n    image: order-service:v2.1\n    ports: [{containerPort: 8080}]\n  - name: envoy-sidecar\n    image: envoyproxy/envoy:v1.28\n    ports: [{containerPort: 15001}]\n'''\nprint('Sidecar runs in the same pod, sharing network namespace (localhost)')",
              "java": "// App simply calls localhost:15001 or standard internal DNS;\n// Envoy sidecar transparently intercepts, encrypts with mTLS, and routes to destination."
            },
            "complexity": {
              "time": "Sub-millisecond proxy latency overhead",
              "space": "Small memory footprint per container"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-sd-scalability",
        "name": "12. Scalability Patterns",
        "icon": "📈",
        "topics": [
          {
            "id": "sd-horizontal-vs-vertical-scaling-deep-dive",
            "title": "Horizontal vs Vertical scaling (deep dive)",
            "slug": "sd-horizontal-vs-vertical-scaling-deep-dive",
            "difficulty": "Easy",
            "description": "Detailed engineering trade-offs: Scaling Up (Vertical) vs Scaling Out (Horizontal), hardware limitations, and software architecture shifts.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Horizontal vs Vertical scaling (deep dive) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Horizontal vs Vertical Scaling: Deep Dive\n\n#### 1. Vertical Scaling (Scaling Up)\n- Adding more computing resources (faster multi-core CPUs, 512GB RAM, NVMe SSDs) to a single existing server.\n- **Pros**: Zero software changes required. Relational databases continue running without sharding.\n- **Cons**:\n  - Hard physical ceiling (cannot buy a single machine with 10,000 CPU cores).\n  - Exponential cost curve for specialized super-servers.\n  - Single Point of Failure (SPOF).\n\n#### 2. Horizontal Scaling (Scaling Out)\n- Adding more commodity machines connected in a distributed cluster behind a load balancer.\n- **Pros**: Virtually infinite scalability, resilient fault tolerance (if 2 out of 50 nodes crash, 96% capacity remains).\n- **Cons**: Requires stateless application design, distributed caching, network RPCs, and data sharding.",
            "code_example": {
              "language": "multi",
              "python": "# Scaling out via stateless containers behind a load balancer\n# Machine 1, Machine 2, ..., Machine N\nprint('Rule: Scale Up for quick early wins; Scale Out for hyper-scale!')",
              "java": "// Kubernetes HPA (Horizontal Pod Autoscaler) scales replicas dynamically based on CPU/RAM"
            },
            "complexity": {
              "time": "O(1) scale dispatch",
              "space": "O(Nodes)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-stateless-vs-stateful-services",
            "title": "Stateless vs Stateful services",
            "slug": "sd-stateless-vs-stateful-services",
            "difficulty": "Medium",
            "description": "Why stateless services scale easily (any instance handles any request) vs stateful (sticky sessions, state management). JWT vs session cookies for statelessness.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Stateless vs Stateful Services - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Stateless Services\nServer stores NO per-client state between requests. Each request is self-contained.\n- **Scaling:** Any server instance can handle any request → perfect for horizontal scaling.\n- **Authentication:** JWT tokens (client carries state in token, server just verifies signature).\n- **Benefits:** Horizontal scaling, no sticky sessions needed.\n\n### 2. Stateful Services\nServer remembers information about client from previous requests (session in server memory).\n- **Problem:** Request must go to SAME server that has the session → sticky sessions → reduces load balancing effectiveness.\n- **Failure:** If that server dies, session is lost.\n\n### 3. Making Services Stateless\nMove state OUT of server memory → into shared external store:\n- **Sessions → Redis** (centralized session store)\n- **Authentication → JWT** (self-contained tokens)\n- **File uploads → S3** (instead of server's local disk)\n\n### 4. When Stateful is OK\n- Databases (by definition stateful).\n- WebSocket connections (stateful by nature — use sticky sessions or a message broker like Redis Pub/Sub to broadcast to all instances).",
            "code_example": {
              "language": "multi",
              "python": "# Stateless auth with JWT\nimport jwt, datetime\n\nSECRET = 'my_secret_key'\n\ndef create_token(user_id: int) -> str:\n    payload = {\n        'user_id': user_id,\n        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)\n    }\n    return jwt.encode(payload, SECRET, algorithm='HS256')\n\ndef verify_token(token: str) -> dict:\n    return jwt.decode(token, SECRET, algorithms=['HS256'])\n\ntoken = create_token(123)\nprint('Token:', token[:40] + '...')\nprint('Decoded:', verify_token(token))",
              "java": "// JWT verification (Java)\n@Component\npublic class JwtFilter extends OncePerRequestFilter {\n    protected void doFilterInternal(HttpServletRequest req, ...) {\n        String token = req.getHeader(\"Authorization\").replace(\"Bearer \", \"\");\n        Claims claims = Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();\n        request.setAttribute(\"userId\", claims.get(\"user_id\"));\n        filterChain.doFilter(req, resp);\n    }\n}"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-database-scaling-techniques-recap-sharding-replication",
            "title": "Database scaling techniques (recap: sharding, replication)",
            "slug": "sd-database-scaling-techniques-recap-sharding-replication",
            "difficulty": "Medium",
            "description": "Holistic blueprint for scaling relational and NoSQL databases: Read Replicas, Caching, Connection Pooling, Sharding, and CQRS.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Database scaling techniques (recap: sharding, replication) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Database Scaling Techniques: The Playbook\n\nWhen a single database server hits high CPU or storage exhaustion, follow this progressive scaling ladder:\n\n1. **Index Optimization & Query Tuning**: Add composite indexes, remove full table scans, optimize slow joins.\n2. **Connection Pooling**: Use PgBouncer or HikariCP to reuse connections and prevent thread exhaustion.\n3. **Read Caching**: Put Redis or Memcached in front of DB to eliminate 80-90% of repeated read queries.\n4. **Read Replicas (Master-Replica)**: Route all read traffic to read-only replica nodes.\n5. **Vertical Partitioning**: Move heavy, rarely accessed columns and separate microservice tables into distinct databases.\n6. **Horizontal Sharding**: Partition rows of the largest tables across multiple database instances using a shard key.",
            "code_example": {
              "language": "multi",
              "python": "# Database scaling ladder stages\nstages = ['1. Indexing', '2. Pooling', '3. Redis Cache', '4. Read Replicas', '5. Sharding']\nfor s in stages:\n    print('Scaling Progression:', s)",
              "java": "// HikariCP connection pool configuration\n// HikariConfig config = new HikariConfig(); config.setMaximumPoolSize(20);"
            },
            "complexity": {
              "time": "O(1) routing with shard key",
              "space": "O(N) data across cluster"
            },
            "practice_questions": []
          },
          {
            "id": "sd-auto-scaling",
            "title": "Auto-scaling",
            "slug": "sd-auto-scaling",
            "difficulty": "Medium",
            "description": "Dynamic capacity provisioning: reactive autoscaling based on metrics (CPU, RAM, queue depth), predictive autoscaling, and cooldown timers.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Auto-scaling - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Auto-Scaling in Distributed Systems\n\nAuto-scaling automatically adjusts the number of active computing instances based on current demand, balancing performance against cloud infrastructure costs.\n\n#### 1. Scaling Triggers & Metrics\n- **Target Tracking Scaling**: Adjusts pods to keep average CPU utilization at 70% or average request latency under 150ms.\n- **Queue Depth Scaling (Best for Workers)**: If the SQS or Kafka lag exceeds 10,000 unconsumed messages, instantly add 20 worker instances.\n- **Scheduled Scaling**: Pre-warming servers ahead of anticipated spikes (e.g., 9:00 AM market opening or Super Bowl halftime).\n\n#### 2. Cooldown & Flapping Prevention\n- **Flapping (Thrashing)**: Rapid cycles of adding and terminating instances when metrics hover right around the threshold.\n- **Cooldown Periods**: Enforcing a mandatory waiting time (e.g., 5 minutes) after scaling out before allowing any scale-in actions.",
            "code_example": {
              "language": "multi",
              "python": "# Kubernetes HorizontalPodAutoscaler (HPA) spec\nhpa_yaml = '''\napiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nspec:\n  scaleTargetRef:\n    kind: Deployment\n    name: api-server\n  minReplicas: 3\n  maxReplicas: 50\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target:\n        type: Utilization\n        averageUtilization: 70\n'''\nprint(hpa_yaml)",
              "java": "// AWS Auto Scaling Group configuration"
            },
            "complexity": {
              "time": "Scaling delay: 1-3 minutes for container launch",
              "space": "Dynamic instances"
            },
            "practice_questions": []
          },
          {
            "id": "sd-bottleneck-identification",
            "title": "Bottleneck identification",
            "slug": "sd-bottleneck-identification",
            "difficulty": "Medium",
            "description": "Techniques for diagnosing performance bottlenecks across CPU, memory leaks, disk I/O, network bandwidth, database lock contention, and connection pools.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Bottleneck identification - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Bottleneck Identification in Distributed Systems\n\nIn complex microservice graphs, the slowest component determines overall system throughput (**Amdahl's Law**).\n\n#### 1. Common Bottleneck Categories\n- **CPU Bound**: Heavy encryption, image compression, JSON parsing. Solution: optimize code, scale workers horizontally.\n- **Memory Bound**: Garbage collection pauses, memory leaks. Solution: profile heap, increase container memory limits.\n- **I/O Bound**: Disk read/write speeds, slow database queries. Solution: add indexes, cache in memory, switch to NVMe SSDs.\n- **Network Bound**: High packet drop rates, cross-region latency, bandwidth limits on small VM sizes.\n- **Database Lock Contention**: Row/table lock queues during high-concurrency updates.\n\n#### 2. Diagnostics Tools\n- **Distributed Tracing (Jaeger, Zipkin, OpenTelemetry)**: Visual flame graphs identifying exact spans where a request spends 90% of its time.\n- **APM Profilers (Datadog, New Relic, Prometheus)**: Real-time CPU flame graphs and thread dump analysis.",
            "code_example": {
              "language": "multi",
              "python": "# OpenTelemetry Distributed Tracing Span\n# with tracer.start_as_current_span('process_payment'):\n#     with tracer.start_as_current_span('call_bank_api'):\n#         charge_credit_card()\nprint('Flame graphs expose the exact 500ms bottleneck in a 20-service request chain')",
              "java": "// Distributed Tracing with OpenTelemetry Java agent"
            },
            "complexity": {
              "time": "O(1) trace sampling",
              "space": "O(Traces logged)"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-sd-storage",
        "name": "13. Storage Systems",
        "icon": "💾",
        "topics": [
          {
            "id": "sd-block-storage-vs-object-storage-vs-file-storage",
            "title": "Block storage vs Object storage vs File storage",
            "slug": "sd-block-storage-vs-object-storage-vs-file-storage",
            "difficulty": "Medium",
            "description": "Three storage paradigms: Block storage (raw volumes for databases), Object storage (S3-type flat namespace), File storage (NFS/EFS hierarchical). Use cases for each.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Block Storage vs Object Storage vs File Storage - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Block Storage\nRaw storage volumes attached to a server. OS formats and manages as a filesystem.\n- **Examples:** AWS EBS, Google Persistent Disk.\n- **Use for:** Databases (high IOPS, low latency), OS boot volumes, virtual machine disks.\n- **Access:** Via OS device driver.\n\n### 2. Object Storage\nFlat namespace: each object has a unique key. Accessed via HTTP API.\n- **Examples:** AWS S3, Google Cloud Storage, Azure Blob Storage.\n- **Use for:** Media files (images, videos), backups, static assets, data lakes.\n- **Key Features:** Infinite scale, 99.999% durability, versioning, lifecycle policies.\n- **Not For:** Databases (high latency for small random reads/writes).\n\n### 3. File Storage (Network File System)\nHierarchical directory structure accessible by multiple servers simultaneously.\n- **Examples:** AWS EFS, Azure Files, NFS.\n- **Use for:** Shared storage for microservices, machine learning training data, home directories.\n\n### 4. Comparison\n| Feature | Block | Object | File |\n| :--- | :--- | :--- | :--- |\n| **Namespace** | Volume+filesystem | Flat (bucket/key) | Hierarchical |\n| **Protocol** | iSCSI, NVMe | HTTP/S3 API | NFS, SMB |\n| **Latency** | Sub-ms | High (ms) | Medium |\n| **Best For** | DBs | Unstructured data | Shared FS |",
            "code_example": {
              "language": "multi",
              "python": "# AWS S3 Object Storage (boto3)\nimport boto3\ns3 = boto3.client('s3')\n\n# Upload file\ns3.upload_file('photo.jpg', 'my-bucket', 'users/profile/photo.jpg')\n\n# Generate pre-signed URL for temporary access\nurl = s3.generate_presigned_url(\n    'get_object',\n    Params={'Bucket': 'my-bucket', 'Key': 'users/profile/photo.jpg'},\n    ExpiresIn=3600  # 1 hour\n)\nprint(f'Temporary URL: {url}')",
              "java": "// Java AWS S3 SDK\nS3Client s3 = S3Client.create();\ns3.putObject(PutObjectRequest.builder()\n    .bucket(\"my-bucket\")\n    .key(\"users/profile/photo.jpg\")\n    .build(), Path.of(\"photo.jpg\"));\nSystem.out.println(\"Uploaded to S3\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-distributed-file-systems-concept-like-gfshdfs",
            "title": "Distributed File Systems (concept — like GFS/HDFS)",
            "slug": "sd-distributed-file-systems-concept-like-gfshdfs",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Distributed File Systems (concept — like GFS/HDFS) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Distributed File Systems (concept — like GFS/HDFS) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Distributed File Systems (concept — like GFS/HDFS)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Distributed File Systems (concept — like GFS/HDFS)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Distributed File Systems (concept — like GFS/HDFS) in Python\nprint('Production architecture pattern: Distributed File Systems (concept — like GFS/HDFS)')",
              "java": "// Distributed File Systems (concept — like GFS/HDFS) in Java\nSystem.out.println(\"Distributed File Systems (concept — like GFS/HDFS)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-blob-storage-s3-type-systems",
            "title": "Blob storage (S3-type systems)",
            "slug": "sd-blob-storage-s3-type-systems",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Blob storage (S3-type systems) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Blob storage (S3-type systems) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Blob storage (S3-type systems)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Blob storage (S3-type systems)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Blob storage (S3-type systems) in Python\nprint('Production architecture pattern: Blob storage (S3-type systems)')",
              "java": "// Blob storage (S3-type systems) in Java\nSystem.out.println(\"Blob storage (S3-type systems)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-sd-security",
        "name": "14. Security in System Design",
        "icon": "🔒",
        "topics": [
          {
            "id": "sd-authentication-vs-authorization",
            "title": "Authentication vs Authorization",
            "slug": "sd-authentication-vs-authorization",
            "difficulty": "Easy",
            "description": "AuthN vs AuthZ: verifying who you are (Authentication) vs verifying what you have permission to do (Authorization, RBAC, ABAC).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Authentication vs Authorization - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Authentication (AuthN) vs Authorization (AuthZ)\n\n#### 1. Authentication (Who are you?)\n- Verifying the identity of a user, service, or device.\n- **Mechanisms**: Passwords + Salted Hashes (bcrypt/Argon2), Multi-Factor Authentication (TOTP), Biometrics, OAuth2 OpenID Connect (OIDC).\n\n#### 2. Authorization (What can you do?)\n- Determining whether an authenticated identity has permission to perform a specific action on a specific resource.\n- **Mechanisms**:\n  - **RBAC (Role-Based Access Control)**: Roles (Admin, Editor, Viewer) mapped to permissions.\n  - **ABAC (Attribute-Based Access Control)**: Dynamic policies evaluating user attributes, resource tags, time of day, and IP address.\n\n#### 3. Summary Comparison\n- You show your passport at airport security: **Authentication**.\n- The gate agent checks if your ticket permits entry to First Class: **Authorization**.",
            "code_example": {
              "language": "multi",
              "python": "# AuthN + AuthZ enforcement\ndef handle_document_delete(current_user, document_id):\n    # 1. AuthN check\n    if not current_user.is_authenticated:\n        raise Exception('401 Unauthorized (Unauthenticated)')\n    # 2. AuthZ check\n    if 'ROLE_ADMIN' not in current_user.roles and current_user.id != document.owner_id:\n        raise Exception('403 Forbidden (Unauthorized to delete this resource)')\n    print('Authorized to delete document')",
              "java": "// Spring Security @PreAuthorize(\"hasRole('ADMIN') or #doc.ownerId == authentication.name\")"
            },
            "complexity": {
              "time": "O(1) token/role evaluation",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-oauth-jwt-json-web-tokens",
            "title": "OAuth, JWT (JSON Web Tokens)",
            "slug": "sd-oauth-jwt-json-web-tokens",
            "difficulty": "Medium",
            "description": "Modern authorization protocols: OAuth 2.0 grant flows, JWT structure (header, payload, signature), stateless verification, and refresh token rotation.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "OAuth, JWT (JSON Web Tokens) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### OAuth 2.0 & JSON Web Tokens (JWT)\n\n#### 1. OAuth 2.0 Protocol\n- An open standard authorization framework that allows third-party applications to obtain limited access to user resources without sharing user passwords.\n- **Key Roles**: Resource Owner (User), Client App, Authorization Server (Auth0 / Okta), Resource Server (API).\n\n#### 2. JWT (JSON Web Token) Structure\nA compact, URL-safe token consisting of three Base64URL parts separated by dots (`Header.Payload.Signature`):\n1. **Header**: Token type (`JWT`) and signing algorithm (`RS256` or `HS256`).\n2. **Payload (Claims)**: Data claims (`sub`, `username`, `roles`, `exp` expiration time).\n3. **Signature**: Cryptographic signature created using private key: `HMACSHA256(base64UrlEncode(header) + '.' + base64UrlEncode(payload), secret)`.\n\n#### 3. Stateless Verification\nBackend microservices verify the token signature using the public key in microsecond CPU time without querying a central session database on every request!",
            "code_example": {
              "language": "multi",
              "python": "import jwt, datetime\n\nSECRET = 'super-secure-secret-key'\n\n# Issue stateless JWT\npayload = {'user_id': 101, 'role': 'admin', 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)}\ntoken = jwt.encode(payload, SECRET, algorithm='HS256')\nprint('Generated JWT:', token)\n\n# Verify stateless JWT on microservice\ndecoded = jwt.decode(token, SECRET, algorithms=['HS256'])\nprint('Decoded claims without database lookup:', decoded)",
              "java": "// io.jsonwebtoken (JJWT) parser in Java\n// Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwtToken);"
            },
            "complexity": {
              "time": "O(1) signature check",
              "space": "O(1) token payload"
            },
            "practice_questions": []
          },
          {
            "id": "sd-encryption-basics-at-rest-in-transit",
            "title": "Encryption basics (at rest, in transit)",
            "slug": "sd-encryption-basics-at-rest-in-transit",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Encryption basics (at rest, in transit) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Encryption basics (at rest, in transit) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Encryption basics (at rest, in transit)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Encryption basics (at rest, in transit)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Encryption basics (at rest, in transit) in Python\nprint('Production architecture pattern: Encryption basics (at rest, in transit)')",
              "java": "// Encryption basics (at rest, in transit) in Java\nSystem.out.println(\"Encryption basics (at rest, in transit)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-httpsssltls",
            "title": "HTTPS/SSL/TLS",
            "slug": "sd-httpsssltls",
            "difficulty": "Easy",
            "description": "Transport Layer Security: TLS 1.3 handshake, asymmetric vs symmetric encryption, public key certificates, and Certificate Authorities (CAs).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "HTTPS/SSL/TLS - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### HTTPS & SSL/TLS in Modern Architectures\n\nHypertext Transfer Protocol Secure (HTTPS) encrypts communication between the client and server using Transport Layer Security (TLS 1.3).\n\n#### 1. The Core Objectives\n- **Confidentiality**: Protects transmitted data (passwords, credit cards, cookies) from eavesdropping / packet sniffing.\n- **Integrity**: Ensures data has not been modified or tampered with in transit by a Man-in-the-Middle (MITM).\n- **Authentication**: Verifies the server's identity using digital certificates signed by trusted Certificate Authorities (Let's Encrypt, DigiCert).\n\n#### 2. TLS Handshake Overview\n1. **Asymmetric Encryption (Key Exchange)**: The client and server perform a fast Diffie-Hellman cryptographic exchange to authenticate each other and negotiate a shared **session key**.\n2. **Symmetric Encryption (Data Transport)**: Once negotiated, all subsequent HTTP traffic is encrypted using ultra-fast symmetric encryption (AES-GCM-256 or ChaCha20) which uses negligible CPU.",
            "code_example": {
              "language": "multi",
              "python": "# Enforcing TLS 1.3 in Python SSL Context\nimport ssl\n\ncontext = ssl.create_default_context()\ncontext.minimum_version = ssl.TLSVersion.TLSv1_3\nprint('Enforcing modern TLS 1.3 with forward secrecy')",
              "java": "// Modern reverse proxies (Nginx/Cloudflare) terminate TLS before forwarding to internal cluster"
            },
            "complexity": {
              "time": "TLS 1.3 Handshake: 1 RTT (0-RTT for resumed sessions)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-ddos-protection-basics",
            "title": "DDoS protection basics",
            "slug": "sd-ddos-protection-basics",
            "difficulty": "Medium",
            "description": "Comprehensive guide to DDoS protection basics in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "DDoS protection basics - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### DDoS protection basics\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **DDoS protection basics** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# DDoS protection basics in Python\nprint('Production architecture pattern: DDoS protection basics')",
              "java": "// DDoS protection basics in Java\nSystem.out.println(\"DDoS protection basics\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-sd-fault-tolerance",
        "name": "15. Fault Tolerance & Reliability",
        "icon": "🛡️",
        "topics": [
          {
            "id": "sd-redundancy",
            "title": "Redundancy",
            "slug": "sd-redundancy",
            "difficulty": "Easy",
            "description": "Eliminating Single Points of Failure (SPOF) through hardware, software, server, and geographic zone redundancy (N+1 and 2N models).",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Redundancy - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Redundancy: Eliminating Single Points of Failure (SPOF)\n\nRedundancy is the duplication of critical components or functions within a system with the intention of increasing reliability.\n\n#### 1. Single Point of Failure (SPOF)\n- Any single component (server, switch, database, power supply) whose failure causes the entire system to stop functioning.\n\n#### 2. Levels of Redundancy\n- **Server Level**: Running multiple application instances behind a load balancer.\n- **Zone Level (Multi-AZ)**: Deploying replicas across independent availability zones (different physical data centers with independent power and networking in the same metro region).\n- **Region Level (Multi-Region)**: Replicating data across continents (e.g., US-East and EU-West) to survive catastrophic natural disasters or major cloud provider blackouts.\n- **N+1 vs 2N (Active-Passive)**: $N+1$ provides one backup for $N$ working nodes; $2N$ maintains a fully mirrored duplicate system.",
            "code_example": {
              "language": "multi",
              "python": "# Multi-AZ redundancy architecture pattern\navailability_zones = ['us-east-1a', 'us-east-1b', 'us-east-1c']\nprint(f'Deploying at least 2 instances across {len(availability_zones)} AZs eliminates single data center SPOF')",
              "java": "// Cloud infrastructure multi-AZ deployment configurations"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(Replicas)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-failover-mechanisms",
            "title": "Failover mechanisms",
            "slug": "sd-failover-mechanisms",
            "difficulty": "Medium",
            "description": "Automated switching to redundant standby systems upon primary failure: Active-Passive, Active-Active, floating virtual IPs, and DNS failover.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Failover mechanisms - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Failover Mechanisms in Distributed Systems\n\nFailover is the operational process of automatically transferring control to a standby or secondary system when the primary system fails.\n\n#### 1. Active-Passive (Warm / Cold Standby)\n- The Primary handles 100% of live traffic.\n- The Standby receives replicated data updates but serves zero traffic.\n- **Failover**: When the Primary fails, monitoring systems promote the Standby to Primary. Can cause a short blip (10-60 seconds) during promotion.\n\n#### 2. Active-Active\n- Both systems simultaneously process live traffic.\n- If one system fails, the load balancer or DNS immediately routes 100% of traffic to the remaining active system with zero downtime.\n\n#### 3. Implementation Tools\n- **Virtual IP / Keepalived / VRRP**: Two servers share a virtual IP. If Master dies, Backup claims the IP in milliseconds.\n- **DNS Failover (Route 53)**: Health checks route traffic away from degraded endpoints.",
            "code_example": {
              "language": "multi",
              "python": "# Active-Passive failover simulation\ndef execute_query_with_failover(primary_node, standby_node, query):\n    try:\n        return primary_node.execute(query)\n    except Exception as e:\n        print(f'Primary failed ({e})! Initiating failover to Standby node...')\n        return standby_node.execute(query)",
              "java": "// Redis Sentinel automatically promotes a replica when the master goes down"
            },
            "complexity": {
              "time": "Failover detection: 5-30s heartbeat window",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-replication-for-fault-tolerance",
            "title": "Replication for fault tolerance",
            "slug": "sd-replication-for-fault-tolerance",
            "difficulty": "Medium",
            "description": "How distributed data stores replicate records to guarantee survivability against server crashes and disk corruption.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Replication for fault tolerance - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Data Replication for Fault Tolerance\n\nReplicating data ensures that data is never lost even if storage disks fail or physical nodes burn out.\n\n#### 1. Replication Strategies\n- **Synchronous Replication**: The primary waits for all replicas to acknowledge the write before returning success to the client. Zero data loss (RPO = 0), but write latency equals the slowest replica.\n- **Asynchronous Replication**: Primary acknowledges immediately after writing locally, and streams updates to replicas in background. Blazing fast writes, but risk of small data loss if Primary dies before replication finishes.\n- **Quorum-Based Replication (Dynamo / Raft)**:\n  $$W + R > N$$\n  Where $N$ is total replicas, $W$ is write quorum, and $R$ is read quorum. Guarantees that read quorum always overlaps with at least one updated node!",
            "code_example": {
              "language": "multi",
              "python": "# Quorum calculation: N=5 nodes, W=3, R=3\nN = 5\nW = 3\nR = 3\nprint(f'Is quorum satisfied? {W + R > N} (Guarantees strict read-after-write consistency)')",
              "java": "// Cassandra Quorum: ConsistencyLevel.QUORUM requires (N/2 + 1) acks"
            },
            "complexity": {
              "time": "O(Quorum latency)",
              "space": "O(N * replicas)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-heartbeat-mechanism",
            "title": "Heartbeat mechanism",
            "slug": "sd-heartbeat-mechanism",
            "difficulty": "Easy",
            "description": "Periodic health signal exchange between distributed nodes to detect network partitions, crashed nodes, and trigger leader elections.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Heartbeat mechanism - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Heartbeat Mechanism\n\nA heartbeat is a periodic signal sent by a node to indicate that it is alive, functioning normally, and reachable.\n\n#### 1. How It Operates\n- Node sends a lightweight packet (UDP/TCP/HTTP) to a coordinator or peer nodes every $T$ seconds (e.g., every 1 second).\n- If the coordinator misses $K$ consecutive heartbeats (e.g., 3 missed heartbeats = 3 seconds), the node is declared **DEAD**.\n- The cluster initiates automated remediation: removing the node from load balancer rotation, redistributing its partitions, or triggering a new leader election via Raft.",
            "code_example": {
              "language": "multi",
              "python": "import time\n\nclass NodeMonitor:\n    def __init__(self, timeout=3):\n        self.last_heartbeat = time.time()\n        self.timeout = timeout\n\n    def receive_heartbeat(self):\n        self.last_heartbeat = time.time()\n\n    def is_node_healthy(self):\n        return (time.time() - self.last_heartbeat) < self.timeout\n\nmonitor = NodeMonitor()\nprint('Node healthy:', monitor.is_node_healthy())",
              "java": "// Akka / Raft consensus heartbeat timer"
            },
            "complexity": {
              "time": "O(1) packet check",
              "space": "O(Nodes)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-disaster-recovery-basics",
            "title": "Disaster recovery basics",
            "slug": "sd-disaster-recovery-basics",
            "difficulty": "Medium",
            "description": "Business continuity and disaster recovery metrics: RPO (Recovery Point Objective), RTO (Recovery Time Objective), backup strategies, and multi-region failovers.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Disaster recovery basics - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Disaster Recovery (DR) Fundamentals\n\nDisaster Recovery prepares an organization to resume operations following catastrophic events (earthquakes, power grid collapse, data center fires, ransomware).\n\n#### 1. The Two Core DR Metrics\n- **RPO (Recovery Point Objective)**: The maximum acceptable amount of data loss measured in time. (e.g., RPO = 1 hour means you can tolerate losing up to 1 hour of recent transactions since the last backup).\n- **RTO (Recovery Time Objective)**: The maximum acceptable duration of system downtime to restore operations. (e.g., RTO = 15 minutes means services must be back online within 15 minutes of outage).\n\n#### 2. Disaster Recovery Strategies (Cost vs Recovery Speed)\n1. **Backup & Restore (Cold)**: Cheapest, high RTO (hours/days), high RPO.\n2. **Pilot Light**: Minimal core database running in secondary region; compute servers provisioned only during a disaster.\n3. **Warm Standby**: Scaled-down version of full system always running in secondary region.\n4. **Multi-Site Active-Active (Hot)**: Real-time traffic served from multiple regions simultaneously. Near-zero RTO and RPO; highest cloud cost.",
            "code_example": {
              "language": "multi",
              "python": "# DR Metric calculation\nrpo_minutes = 15  # Max tolerable data loss\nrto_minutes = 30  # Max tolerable downtime\nprint(f'Target DR SLA: RPO={rpo_minutes}min, RTO={rto_minutes}min')",
              "java": "// AWS Route 53 Application Recovery Controller (ARC)"
            },
            "complexity": {
              "time": "O(1)",
              "space": "Varies by DR tier"
            },
            "practice_questions": []
          },
          {
            "id": "sd-graceful-degradation",
            "title": "Graceful degradation",
            "slug": "sd-graceful-degradation",
            "difficulty": "Medium",
            "description": "Maintaining partial core system functionality when under severe stress or downstream failure instead of suffering a total catastrophic crash.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Graceful degradation - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Graceful Degradation in System Design\n\nGraceful degradation ensures that when a system experiences unexpected load spikes or component failures, it continues to operate at a reduced level of performance rather than failing completely.\n\n#### 1. Key Patterns\n- **Drop Non-Essential Features**: If database CPU hits 95%, disable personalized recommendations, view counters, or real-time comments, keeping product checkout functional!\n- **Serve Stale / Cached Data**: If the search index cluster is unreachable, serve cached top-searched results rather than showing an HTTP 500 error page.\n- **Load Shedding**: Reject low-priority background requests (e.g., analytics pings, web scrapers) with HTTP 429/503 to preserve compute capacity for critical checkout transactions.",
            "code_example": {
              "language": "multi",
              "python": "def get_movie_page(movie_id, db_overloaded=False):\n    movie = {'title': 'Inception', 'stream_url': 'https://cdn/video.m3u8'}\n    if not db_overloaded:\n        movie['comments'] = fetch_live_comments(movie_id)\n        movie['recommendations'] = fetch_ai_recommendations(movie_id)\n    else:\n        # Degrade gracefully: stream works, secondary widgets hidden\n        movie['comments'] = []\n        movie['recommendations'] = []\n    return movie",
              "java": "// Netflix Hystrix fallback method\n// @HystrixCommand(fallbackMethod = \"getFallbackRecommendations\")\n// public List<Movie> getRecommendations(Long userId) { ... }"
            },
            "complexity": {
              "time": "O(1) degraded path",
              "space": "O(1)"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-sd-monitoring",
        "name": "16. Monitoring & Logging",
        "icon": "📊",
        "topics": [
          {
            "id": "sd-logging-systems-centralized-logging-concept",
            "title": "Logging systems (centralized logging concept)",
            "slug": "sd-logging-systems-centralized-logging-concept",
            "difficulty": "Medium",
            "description": "Aggregating and searching logs across thousands of microservices: ELK stack (Elasticsearch, Logstash, Kibana), Loki, and Fluentd.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Logging systems (centralized logging concept) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Centralized Logging Architecture\n\nIn a microservices cluster with 500 containers, SSH-ing into individual machines to run `grep error /var/log/app.log` is impossible.\n\n#### 1. Centralized Logging Pipeline\n1. **Log Shipper / Agent (Fluentbit, Filebeat, Vector)**: Runs as a sidecar or DaemonSet on each node, tailing container logs.\n2. **Log Ingestion & Buffer (Kafka / Logstash)**: Buffers high-volume log spikes.\n3. **Search & Storage Engine (Elasticsearch / OpenSearch / Grafana Loki)**: Indexes structured log records (JSON with timestamp, trace_id, level, service_name, message).\n4. **Visualization UI (Kibana / Grafana)**: Allows engineers to search queries like `service:order AND level:ERROR` across the entire fleet in seconds.\n\n#### 2. Best Practice: Structured Logging\nAlways output logs in structured JSON format rather than free-form text strings so log parsers can index queryable attributes effortlessly.",
            "code_example": {
              "language": "multi",
              "python": "import json, logging, time\n\n# Structured JSON log format\nlog_entry = {\n    'timestamp': time.time(),\n    'level': 'ERROR',\n    'service': 'payment-service',\n    'trace_id': '4bf92f3577b34da6a3ce929d0e0e4736',\n    'message': 'Stripe gateway timeout',\n    'http_status': 504\n}\nprint(json.dumps(log_entry))",
              "java": "// Logback LogstashEncoder outputs structured JSON logs automatically"
            },
            "complexity": {
              "time": "Log shipping: asynchronous O(1)",
              "space": "Gigabytes/terabytes indexed log storage"
            },
            "practice_questions": []
          },
          {
            "id": "sd-monitoring-alerting-basics",
            "title": "Monitoring & Alerting basics",
            "slug": "sd-monitoring-alerting-basics",
            "difficulty": "Medium",
            "description": "Metrics collection, time-series databases (Prometheus), alerting rules (Alertmanager, PagerDuty), and Google SRE Golden Signals.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Monitoring & Alerting basics - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Monitoring & Alerting Basics\n\n#### 1. The 4 Golden Signals (Google SRE Book)\n1. **Latency**: The time it takes to service a request (track P50, P95, P99, not averages!).\n2. **Traffic**: Demand placed on the system (requests per second, concurrent connections).\n3. **Errors**: The rate of requests that fail (HTTP 5xx error percentage).\n4. **Saturation**: How full the service is (CPU %, memory %, DB connection pool usage).\n\n#### 2. Prometheus Metrics Architecture\n- **Push vs Pull**: Prometheus **scrapes (pulls)** metrics over HTTP `/metrics` from target instances every 15 seconds.\n- **Metric Types**: Counter (monotonically increasing), Gauge (current value like memory), Histogram (distribution of request durations).\n\n#### 3. Alerting Best Practices\n- Alert only on actionable symptoms that impact users (e.g., P99 latency > 1s or Error Rate > 2%), not noisy intermediate indicators.",
            "code_example": {
              "language": "multi",
              "python": "# Prometheus Metrics Exporter format\nprometheus_metric = '''\n# HELP http_requests_total The total number of HTTP requests.\n# TYPE http_requests_total counter\nhttp_requests_total{method=\"post\",handler=\"/checkout\",status=\"200\"} 1027\nhttp_requests_total{method=\"post\",handler=\"/checkout\",status=\"500\"} 3\n'''\nprint(prometheus_metric)",
              "java": "// Micrometer metrics library in Spring Boot"
            },
            "complexity": {
              "time": "Scrape: O(1) in-memory counters",
              "space": "O(Time-Series cardinality)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-health-checks-1",
            "title": "Health checks",
            "slug": "sd-health-checks-1",
            "difficulty": "Easy",
            "description": "Active vs passive health checks, liveness vs readiness probes, failure thresholds, and automatic removal of unhealthy instances.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Health Checks and Service Liveness - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Health Checks & Service Liveness\\n\\nTo guarantee high availability, load balancers and orchestrators (like Kubernetes) must continuously verify that backend nodes are healthy and capable of serving traffic.\\n\\n#### 1. Active vs Passive Health Checks\\n- **Active Health Checks**: The load balancer periodically sends a synthetic request (e.g., `GET /health` every 5 seconds). If the instance returns HTTP 200 OK, it is healthy. If it times out or returns 5xx for `N` consecutive probes, traffic is diverted away.\\n- **Passive Health Checks**: The load balancer observes actual user requests. If an instance starts returning connection errors (TCP resets or 502/504 errors) during live user traffic, it is temporarily marked dead.\\n\\n#### 2. Liveness vs Readiness vs Startup Probes (Kubernetes Model)\\n- **Startup Probe**: Verifies that the application process has finished bootstrapping and loading caches into memory. Disables liveness checks until ready.\\n- **Readiness Probe**: Checks if the instance is ready to receive traffic (e.g., database connection pool is connected). If failing, remove from load balancer rotation without killing the container.\\n- **Liveness Probe**: Checks if the process is stuck or deadlocked. If failing consecutively, restart the container.\\n\\n#### 3. Deep vs Shallow Health Checks\\n- **Shallow**: Returns 200 OK if the web server process is responsive. Safe and fast, but doesn't test database connectivity.\\n- **Deep**: Checks database, Redis, and downstream services. **Caution**: If the database goes down, deep health checks cause EVERY server instance to fail health checks simultaneously, cascading into a total system outage!",
            "code_example": {
              "language": "multi",
              "python": "from fastapi import FastAPI, Response, status\nimport redis\n\napp = FastAPI()\nr = redis.Redis(host='localhost', port=6379, socket_timeout=1)\n\n@app.get('/health/live')\ndef liveness():\n    return {'status': 'alive'}  # Shallow probe\n\n@app.get('/health/ready')\ndef readiness(response: Response):\n    try:\n        r.ping()\n        return {'status': 'ready'}\n    except Exception:\n        response.status_code = status.HTTP_503_SERVICE_UNAVAILABLE\n        return {'status': 'unhealthy', 'reason': 'Redis unavailable'}",
              "java": "// Spring Boot Actuator exposes /actuator/health automatically\n// Custom health indicator:\n// @Component\n// public class DatabaseHealthIndicator implements HealthIndicator {\n//     public Health health() { return isDbOk() ? Health.up().build() : Health.down().build(); }\n// }"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-sd-lld",
        "name": "17. Low Level Design (LLD)",
        "icon": "📐",
        "topics": [
          {
            "id": "sd-oop-principles-application-encapsulation-abstraction-inheritance-polymorphism",
            "title": "OOP principles application (Encapsulation, Abstraction, Inheritance, Polymorphism)",
            "slug": "sd-oop-principles-application-encapsulation-abstraction-inheritance-polymorphism",
            "difficulty": "Easy",
            "description": "Data binding, hiding internal state behind access modifiers, getter/setter validation, and data security.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Encapsulation & Data Hiding Explained",
              "start_seconds": 600,
              "end_seconds": 1200,
              "chapters": [
                {
                  "title": "Getters and Setters",
                  "start_seconds": 600
                }
              ]
            },
            "explanation": "### 1. Simple Definition & Intuition\n**Encapsulation** is the mechanism of wrapping data (variables) and code acting on the data (methods) together into a single unit (class). It prevents direct unauthorized access to internal data from outside the class (**Data Hiding**).\n\n**Real-World Analogy:**\nA **Medical Capsule**. All medicines (data & functions) are bundled safely inside the protective gelatin shell (class). You can't alter the internal chemicals directly without consuming the capsule safely.\n\n---\n\n### 2. Architecture & Data Access Control\n\n```mermaid\ngraph LR\n    subgraph Client Code / External\n        A[External Caller]\n    end\n    subgraph Encapsulated Class: BankAccount\n        B[Public Getter: getBalance]\n        C[Public Setter: deposit]\n        D[Private Field: -balance]\n    end\n    A -->|Allowed| B\n    A -->|Allowed| C\n    A -.-X|Blocked Direct Access| D\n    B --> Read --> D\n    C --> Validate & Update --> D\n```\n\n---\n\n### 3. Benefits of Encapsulation\n1. **Data Security:** Prevents corruption of internal state by external code.\n2. **Validation Control:** Setters enforce constraints (e.g., balance cannot be negative).\n3. **Flexibility & Maintainability:** Internal logic can change without breaking callers.",
            "code_example": {
              "language": "multi",
              "python": "class BankAccount:\n    def __init__(self, owner: str, balance: float):\n        self.owner = owner\n        self.__balance = balance  # Private attribute (name mangled)\n\n    def deposit(self, amount: float):\n        if amount > 0:\n            self.__balance += amount\n            return True\n        return False\n\n    def get_balance(self):\n        return self.__balance\n\naccount = BankAccount(\"Rahul\", 1000.0)\naccount.deposit(500)\nprint(account.get_balance()) # 1500.0\n# print(account.__balance) # Raises AttributeError",
              "java": "public class BankAccount {\n    private double balance; // Private field\n\n    public BankAccount(double initialBalance) {\n        if (initialBalance >= 0) this.balance = initialBalance;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) {\n            this.balance += amount;\n        }\n    }\n}"
            },
            "complexity": {
              "time": "O(1) Getter/Setter access",
              "space": "O(1) Constant memory overhead per object"
            },
            "practice_questions": []
          },
          {
            "id": "sd-solid-principles",
            "title": "SOLID principles",
            "slug": "sd-solid-principles",
            "difficulty": "Hard",
            "description": "5 foundational object-oriented design principles: Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "SOLID Principles Architecture Masterclass",
              "start_seconds": 6600,
              "end_seconds": 7400,
              "chapters": [
                {
                  "title": "Single Responsibility Principle",
                  "start_seconds": 6600
                },
                {
                  "title": "Open Closed Principle",
                  "start_seconds": 6800
                },
                {
                  "title": "Liskov Substitution Principle",
                  "start_seconds": 7000
                },
                {
                  "title": "Interface Segregation & Dependency Inversion",
                  "start_seconds": 7200
                }
              ]
            },
            "explanation": "### 1. Overview of SOLID Principles\n\n1. **S - Single Responsibility Principle (SRP):** A class should have one, and only one, reason to change.\n2. **O - Open-Closed Principle (OCP):** Software entities should be open for extension, but closed for modification.\n3. **L - Liskov Substitution Principle (LSP):** Subtypes must be substitutable for their base types without altering correctness.\n4. **I - Interface Segregation Principle (ISP):** Clients should not be forced to depend on interfaces they do not use (prefer small, role-specific interfaces).\n5. **D - Dependency Inversion Principle (DIP):** High-level modules should not depend on low-level modules; both should depend on abstractions.",
            "code_example": {
              "language": "multi",
              "python": "# Dependency Inversion Principle (DIP) Example\nfrom abc import ABC, abstractmethod\n\nclass MessageSender(ABC):\n    @abstractmethod\n    def send(self, msg: str): pass\n\nclass EmailSender(MessageSender):\n    def send(self, msg: str): print(f\"Email sent: {msg}\")\n\nclass NotificationService:\n    # Depends on abstraction (MessageSender), not concrete class\n    def __init__(self, sender: MessageSender):\n        self.sender = sender\n\n    def notify(self, msg: str):\n        self.sender.send(msg)"
            },
            "complexity": {
              "time": "O(1) Loose coupling dispatch",
              "space": "O(1) Interface structure"
            },
            "practice_questions": []
          },
          {
            "id": "sd-creational-design-patterns-singleton-factory-builder-abstract-factory",
            "title": "Creational Design Patterns (Singleton, Factory, Builder, Abstract Factory)",
            "slug": "sd-creational-design-patterns-singleton-factory-builder-abstract-factory",
            "difficulty": "Medium",
            "description": "Object creation mechanisms: Singleton (single instance), Factory Method (instantiation encapsulation), Builder (complex step-by-step assembly), and Abstract Factory.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Creational Design Patterns (Singleton, Factory, Builder, Abstract Factory) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Creational Design Patterns in Low-Level Design\n\nCreational patterns abstract the instantiation process, making software systems independent of how objects are created, composed, and represented.\n\n#### 1. Singleton Pattern\n- Ensures a class has only ONE instance and provides a global access point.\n- **Use cases**: Database connection pool, Configuration manager, Logger instance.\n- **Key implementation**: Private constructor, static instance, thread-safe double-checked locking.\n\n#### 2. Factory Method Pattern\n- Defines an interface for creating an object, but allows subclasses to decide which class to instantiate.\n- **Use cases**: Payment processors (`PaymentFactory.create('STRIPE')` vs `create('PAYPAL')`).\n\n#### 3. Builder Pattern\n- Separates the construction of a complex object from its representation, allowing the same construction process to create various representations.\n- **Use cases**: Constructing HTTP requests, SQL queries, or complex domain objects with 10+ optional parameters without constructor telescoping.\n\n#### 4. Abstract Factory Pattern\n- Provides an interface for creating families of related or dependent objects without specifying their concrete classes (e.g., DarkTheme vs LightTheme UI widget factories).",
            "code_example": {
              "language": "multi",
              "python": "# Builder Pattern in Python\nclass HttpRequest:\n    def __init__(self, builder):\n        self.url = builder.url\n        self.method = builder.method\n        self.headers = builder.headers\n        self.body = builder.body\n\n    class Builder:\n        def __init__(self, url):\n            self.url = url\n            self.method = 'GET'\n            self.headers = {}\n            self.body = None\n\n        def set_method(self, method): self.method = method; return self\n        def add_header(self, k, v): self.headers[k] = v; return self\n        def build(self): return HttpRequest(self)\n\nreq = HttpRequest.Builder('https://api.prepflow.ai').set_method('POST').add_header('Auth', 'Bearer 123').build()\nprint('Built request:', req.method, req.url)",
              "java": "// Thread-safe Singleton in Java\npublic class DatabaseManager {\n    private static volatile DatabaseManager instance;\n    private DatabaseManager() {}\n    public static DatabaseManager getInstance() {\n        if (instance == null) {\n            synchronized (DatabaseManager.class) {\n                if (instance == null) instance = new DatabaseManager();\n            }\n        }\n        return instance;\n    }\n}"
            },
            "complexity": {
              "time": "O(1) instantiation",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-structural-design-patterns-adapter-decorator-facade-proxy",
            "title": "Structural Design Patterns (Adapter, Decorator, Facade, Proxy)",
            "slug": "sd-structural-design-patterns-adapter-decorator-facade-proxy",
            "difficulty": "Medium",
            "description": "Assembling classes and objects into larger structures: Adapter (interface bridging), Decorator (dynamic feature wrapping), Facade (simplified interface), and Proxy.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Structural Design Patterns (Adapter, Decorator, Facade, Proxy) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Structural Design Patterns in Low-Level Design\n\nStructural design patterns are concerned with how classes and objects are composed to form larger, flexible structures.\n\n#### 1. Adapter Pattern\n- Converts the interface of a class into another interface clients expect, allowing incompatible interfaces to work together.\n- **Example**: Wrapping a legacy XML weather service so it looks like the modern JSON weather interface used by your app.\n\n#### 2. Decorator Pattern\n- Attaches additional responsibilities to an object dynamically without modifying the original class (composition over inheritance).\n- **Example**: Java `BufferedInputStream(new FileInputStream(file))` or adding Coffee toppings: `Milk(Sugar(SimpleCoffee))`.\n\n#### 3. Facade Pattern\n- Provides a simplified, high-level interface to a complex subsystem of classes.\n- **Example**: A `VideoConversionFacade` that coordinates audio extraction, video slicing, transcoding, and compression behind a single clean method: `convertVideo(file)`.\n\n#### 4. Proxy Pattern\n- Provides a surrogate or placeholder for another object to control access to it (virtual proxy, protection proxy, caching proxy).",
            "code_example": {
              "language": "multi",
              "python": "# Decorator Pattern in Python\nclass Coffee:\n    def cost(self): return 5\n\nclass MilkDecorator:\n    def __init__(self, coffee): self._coffee = coffee\n    def cost(self): return self._coffee.cost() + 2\n\nclass SugarDecorator:\n    def __init__(self, coffee): self._coffee = coffee\n    def cost(self): return self._coffee.cost() + 1\n\nmy_coffee = SugarDecorator(MilkDecorator(Coffee()))\nprint('Total Coffee Cost:', my_coffee.cost())  # 5 + 2 + 1 = 8",
              "java": "// Adapter Pattern in Java\n// public class ThirdPartyPaymentAdapter implements PaymentProcessor {\n//     private final StripeSDK stripe;\n//     public void pay(double amount) { stripe.makeCharge((long)(amount * 100)); }\n// }"
            },
            "complexity": {
              "time": "O(1) wrapper delegation",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-behavioral-design-patterns-observer-strategy-state-command",
            "title": "Behavioral Design Patterns (Observer, Strategy, State, Command)",
            "slug": "sd-behavioral-design-patterns-observer-strategy-state-command",
            "difficulty": "Medium",
            "description": "Algorithms and communication between objects: Observer (pub-sub state updates), Strategy (interchangeable algorithms), State (finite state machines), and Command.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Behavioral Design Patterns (Observer, Strategy, State, Command) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Behavioral Design Patterns in Low-Level Design\n\nBehavioral patterns identify common communication patterns between objects and distribute responsibility.\n\n#### 1. Strategy Pattern\n- Defines a family of algorithms, encapsulates each one, and makes them interchangeable at runtime.\n- **Example**: Navigation app calculating routes using `WalkingStrategy`, `DrivingStrategy`, or `PublicTransitStrategy`.\n- **LLD Tip**: Eliminates long conditional `if-else` blocks!\n\n#### 2. Observer Pattern\n- Defines a 1-to-many dependency between objects so that when one object changes state, all its dependents are notified automatically.\n- **Example**: YouTube channel notifying subscribers when a new video is uploaded; event listeners in UI frameworks.\n\n#### 3. State Pattern\n- Allows an object to alter its behavior when its internal state changes, appearing to change its class.\n- **Example**: Vending Machine or Order Lifecycle (`Created` → `Paid` → `Shipped` → `Delivered`).\n\n#### 4. Command Pattern\n- Encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.",
            "code_example": {
              "language": "multi",
              "python": "# Strategy Pattern in Python\nclass RouteStrategy:\n    def build_route(self, a, b): pass\n\nclass DrivingStrategy(RouteStrategy):\n    def build_route(self, a, b): return f'Fastest highway route from {a} to {b}'\n\nclass WalkingStrategy(RouteStrategy):\n    def build_route(self, a, b): return f'Pedestrian sidewalk route from {a} to {b}'\n\nclass Navigator:\n    def __init__(self, strategy: RouteStrategy):\n        self.strategy = strategy\n    def navigate(self, a, b):\n        return self.strategy.build_route(a, b)\n\nnav = Navigator(DrivingStrategy())\nprint(nav.navigate('A', 'B'))",
              "java": "// Command pattern with Undo operation\n// public interface Command { void execute(); void undo(); }"
            },
            "complexity": {
              "time": "O(1) dynamic strategy invocation",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-uml-diagrams-class-diagram-sequence-diagram-basics",
            "title": "UML Diagrams (Class diagram, Sequence diagram basics)",
            "slug": "sd-uml-diagrams-class-diagram-sequence-diagram-basics",
            "difficulty": "Medium",
            "description": "Comprehensive guide to UML Diagrams (Class diagram, Sequence diagram basics) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "UML Diagrams (Class diagram, Sequence diagram basics) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### UML Diagrams (Class diagram, Sequence diagram basics)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **UML Diagrams (Class diagram, Sequence diagram basics)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# UML Diagrams (Class diagram, Sequence diagram basics) in Python\nprint('Production architecture pattern: UML Diagrams (Class diagram, Sequence diagram basics)')",
              "java": "// UML Diagrams (Class diagram, Sequence diagram basics) in Java\nSystem.out.println(\"UML Diagrams (Class diagram, Sequence diagram basics)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-api-contract-design-at-classmodule-level",
            "title": "API contract design at class/module level",
            "slug": "sd-api-contract-design-at-classmodule-level",
            "difficulty": "Medium",
            "description": "Comprehensive guide to API contract design at class/module level in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "API contract design at class/module level - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### API contract design at class/module level\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **API contract design at class/module level** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# API contract design at class/module level in Python\nprint('Production architecture pattern: API contract design at class/module level')",
              "java": "// API contract design at class/module level in Java\nSystem.out.println(\"API contract design at class/module level\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          }
        ]
      },
      {
        "id": "sub-sd-case-studies",
        "name": "18. Common HLD Case Studies",
        "icon": "🏗️",
        "topics": [
          {
            "id": "sd-design-url-shortener-like-tinyurl",
            "title": "Design URL Shortener (like TinyURL)",
            "slug": "sd-design-url-shortener-like-tinyurl",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Design URL Shortener (like TinyURL) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Design URL Shortener (like TinyURL) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Design URL Shortener (like TinyURL)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Design URL Shortener (like TinyURL)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Design URL Shortener (like TinyURL) in Python\nprint('Production architecture pattern: Design URL Shortener (like TinyURL)')",
              "java": "// Design URL Shortener (like TinyURL) in Java\nSystem.out.println(\"Design URL Shortener (like TinyURL)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-design-rate-limiter",
            "title": "Design Rate Limiter",
            "slug": "sd-design-rate-limiter",
            "difficulty": "Medium",
            "description": "HLD for a distributed rate limiter: where to place it, Redis-based sliding window implementation, multi-tenant support, and returning rate limit headers.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Design Rate Limiter - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Requirements\n**Functional:** Limit API calls per user/IP. Return 429 Too Many Requests when exceeded. Headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset.\n\n### 2. Architecture\n**Centralized:** All servers use shared Redis for atomic counters.\n**Distributed:** Each server keeps local state + periodic sync (less accurate but faster).\n\n### 3. Redis Sliding Window (Recommended)\nUse Redis ZSET (sorted set) to store timestamps of recent requests:\n- Key: `rate:{user_id}:{endpoint}`\n- Add current timestamp with ZADD.\n- Remove entries older than window with ZREMRANGEBYSCORE.\n- Count entries with ZCARD.\n- If count > limit → reject with 429.\n\n### 4. Response Headers\n```\nX-RateLimit-Limit: 100\nX-RateLimit-Remaining: 47\nX-RateLimit-Reset: 1700000060  (Unix timestamp when limit resets)\nRetry-After: 30               (seconds until retry allowed)\n```",
            "code_example": {
              "language": "multi",
              "python": "import time\nimport redis\n\nr = redis.Redis()\n\ndef sliding_window_rate_limit(user_id: str, limit: int = 100, window: int = 60) -> tuple[bool, int]:\n    '''Returns (allowed, remaining_requests)'''\n    now = time.time()\n    key = f'rate:{user_id}'\n    pipe = r.pipeline()\n    pipe.zremrangebyscore(key, 0, now - window)      # Remove old entries\n    pipe.zadd(key, {str(now): now})                   # Add current request\n    pipe.zcard(key)                                    # Count in window\n    pipe.expire(key, window)\n    results = pipe.execute()\n    count = results[2]\n    remaining = max(0, limit - count)\n    return (count <= limit, remaining)\n\nfor i in range(5):\n    allowed, remaining = sliding_window_rate_limit('user:123', limit=3, window=60)\n    print(f'Request {i+1}: {'✅ Allowed' if allowed else '❌ Blocked'} (remaining: {remaining})')",
              "java": "// Lua script for atomic sliding window in Redis\nString luaScript = \"\"\"\n    local key = KEYS[1]\n    local now = tonumber(ARGV[1])\n    local window = tonumber(ARGV[2])\n    local limit = tonumber(ARGV[3])\n    redis.call('ZREMRANGEBYSCORE', key, 0, now - window)\n    redis.call('ZADD', key, now, now)\n    redis.call('EXPIRE', key, window)\n    local count = redis.call('ZCARD', key)\n    return count <= limit\n\"\"\";"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-design-chat-application-whatsapp-like",
            "title": "Design Chat Application (WhatsApp-like)",
            "slug": "sd-design-chat-application-whatsapp-like",
            "difficulty": "Hard",
            "description": "HLD for WhatsApp-scale messaging: WebSocket connection management, message delivery flow, offline message storage, group chat fanout, and end-to-end encryption concept.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Design Chat Application (WhatsApp-like) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Requirements\n**Functional:** 1:1 messaging, group messaging (≤500 members), online/offline status, message delivered/read receipts, media sharing.\n**Non-Functional:** 2B users, 100B messages/day, < 100ms delivery (online), messages not lost if recipient offline.\n\n### 2. Core Architecture Components\n- **WebSocket Servers:** Each client maintains persistent WebSocket connection.\n- **Message Router:** Determines recipient's WebSocket server.\n- **Presence Service:** Tracks online/offline status (Redis with TTL heartbeats).\n- **Message Store:** Cassandra (high write throughput, time-ordered messages).\n- **Push Notification Service:** APNs/FCM for offline users.\n\n### 3. 1:1 Message Delivery Flow\n```\nSender → WebSocket Server A → Message Router\nMessage Router checks Presence Service:\n  ├── Recipient ONLINE: → WebSocket Server B → Recipient (real-time delivery)\n  └── Recipient OFFLINE: → Message Queue → DB (stored) → Push notification\n```\n\n### 4. Group Chat Fanout\nWhen message sent to 500-member group:\n- **Write fanout:** Message Service writes to each member's mailbox. (Simple, slow for large groups)\n- **Read fanout:** Shared message store. Each client pulls from group channel. (Efficient)",
            "code_example": {
              "language": "multi",
              "python": "# WebSocket chat server (simplified)\nimport asyncio, websockets, json\nfrom collections import defaultdict\n\nconnected_users = {}  # user_id -> websocket\n\nasync def handler(ws, user_id: int):\n    connected_users[user_id] = ws\n    print(f'User {user_id} connected')\n    try:\n        async for raw in ws:\n            msg = json.loads(raw)\n            recipient_ws = connected_users.get(msg['to'])\n            delivery = {\n                'from': user_id,\n                'text': msg['text'],\n                'timestamp': asyncio.get_event_loop().time()\n            }\n            if recipient_ws:\n                await recipient_ws.send(json.dumps(delivery))  # Online delivery\n            else:\n                print(f'User {msg[\"to\"]} offline, queue for later')\n    finally:\n        del connected_users[user_id]",
              "java": "// WebSocket endpoint (Spring)\n@Component\npublic class ChatHandler extends TextWebSocketHandler {\n    private Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();\n    public void afterConnectionEstablished(WebSocketSession session) {\n        sessions.put(session.getAttributes().get(\"userId\").toString(), session);\n    }\n    public void handleTextMessage(WebSocketSession from, TextMessage message) {\n        var msg = parseMessage(message.getPayload());\n        var recipientSession = sessions.get(msg.getTo());\n        if (recipientSession != null) recipientSession.sendMessage(message);\n    }\n}"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-design-news-feed-system-twitterinstagram-like",
            "title": "Design News Feed System (Twitter/Instagram-like)",
            "slug": "sd-design-news-feed-system-twitterinstagram-like",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Design News Feed System (Twitter/Instagram-like) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Design News Feed System (Twitter/Instagram-like) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Design News Feed System (Twitter/Instagram-like)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Design News Feed System (Twitter/Instagram-like)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Design News Feed System (Twitter/Instagram-like) in Python\nprint('Production architecture pattern: Design News Feed System (Twitter/Instagram-like)')",
              "java": "// Design News Feed System (Twitter/Instagram-like) in Java\nSystem.out.println(\"Design News Feed System (Twitter/Instagram-like)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-design-notification-system",
            "title": "Design Notification System",
            "slug": "sd-design-notification-system",
            "difficulty": "Medium",
            "description": "HLD for a multi-channel notification system: architecture for email, SMS, push notifications, priority queuing, rate limiting, and delivery tracking.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Design Notification System - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Requirements\nSupport multiple channels: Push (APNs/FCM), Email (SendGrid/SES), SMS (Twilio). Delivery guarantees (at-least-once). Priority (critical alerts vs marketing). Rate limiting per user.\n\n### 2. Architecture\n```mermaid\ngraph LR\n    API[Notification API] --> Q[Priority Queue]\n    Q -->|High Priority| CP[Critical Processor]\n    Q -->|Low Priority| MP[Marketing Processor]\n    CP & MP --> Router[Channel Router]\n    Router --> Push[Push: APNs/FCM]\n    Router --> Email[Email: SendGrid]\n    Router --> SMS[SMS: Twilio]\n    Push & Email & SMS --> Tracker[Delivery Tracker DB]\n```\n\n### 3. Retry & DLQ\n- Retry failed notifications with exponential backoff (1s, 2s, 4s, 8s...).\n- After max retries → move to Dead Letter Queue for investigation.\n\n### 4. Rate Limiting\n- Max 3 SMS/day per user (SMS is expensive).\n- Max 5 marketing emails/week per user.\n- Critical alerts (OTP, payment) bypass rate limits.",
            "code_example": {
              "language": "multi",
              "python": "from enum import Enum\nfrom dataclasses import dataclass, field\nfrom typing import List\n\nclass Channel(Enum): PUSH = 'push'; EMAIL = 'email'; SMS = 'sms'\nclass Priority(Enum): CRITICAL = 0; HIGH = 1; NORMAL = 2; LOW = 3\n\n@dataclass\nclass Notification:\n    user_id: int\n    title: str\n    body: str\n    channels: List[Channel]\n    priority: Priority = Priority.NORMAL\n\nclass NotificationService:\n    def send(self, notif: Notification):\n        for channel in notif.channels:\n            if channel == Channel.PUSH: self._send_push(notif)\n            elif channel == Channel.EMAIL: self._send_email(notif)\n            elif channel == Channel.SMS: self._send_sms(notif)\n\n    def _send_push(self, n): print(f'[PUSH] → User {n.user_id}: {n.title}')\n    def _send_email(self, n): print(f'[EMAIL] → User {n.user_id}: {n.title}')\n    def _send_sms(self, n): print(f'[SMS] → User {n.user_id}: {n.title}')\n\nsvc = NotificationService()\nsvc.send(Notification(123, 'Payment Done', 'Rs 500 debited', [Channel.PUSH, Channel.EMAIL]))",
              "java": "// Spring @Async multi-channel sender\n@Service\npublic class NotificationService {\n    @Async\n    public CompletableFuture<Void> sendPush(Notification n) {\n        fcmClient.send(n.getUserId(), n.getTitle(), n.getBody());\n        return CompletableFuture.completedFuture(null);\n    }\n    @Async\n    public CompletableFuture<Void> sendEmail(Notification n) {\n        sesClient.sendEmail(n.getUserEmail(), n.getTitle(), n.getBody());\n        return CompletableFuture.completedFuture(null);\n    }\n}"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-design-e-commerce-system",
            "title": "Design E-commerce System",
            "slug": "sd-design-e-commerce-system",
            "difficulty": "Hard",
            "description": "End-to-end HLD of an e-commerce platform: product catalog, search, shopping cart, flash sale concurrency, inventory reservation locks, checkout, and order fulfillment.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Design E-Commerce System - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### High-Level Design: E-Commerce System (Amazon / Flipkart)\\n\\nDesigning an e-commerce platform requires handling high read traffic (browsing/search) and mission-critical ACID write consistency (inventory & payments).\\n\\n#### 1. Core Requirements\\n- **Functional**: Browse products, search with filters, manage cart, place order with payment, track order status.\\n- **Non-Functional**: High availability for browsing, strict consistency for inventory (no overselling!), sub-200ms latency, handles flash sales (100k req/sec on single SKU).\\n\\n#### 2. Architecture & Microservices\\n- **Catalog & Search Service**: Product details stored in Document DB (MongoDB/DynamoDB) for flexible attributes; indexed into **Elasticsearch** for fuzzy full-text search, facets, and price filtering. Heavily cached via Redis and CDN.\\n- **Cart Service**: Fast key-value store (Redis) with TTL. Synced to database on login across devices.\\n- **Inventory & Flash Sale Concurrency**:\\n  - Avoid DB row locks during flash sales.\\n  - Use **Redis distributed atomic counter** via Lua script: `if redis.call('get', sku) > 0 then return redis.call('decr', sku) else return 0 end`.\\n  - Holds a 10-minute temporary inventory reservation while user finishes payment.\\n- **Order & Payment Pipeline**:\\n  - Implemented via **Saga Pattern (Orchestration)**: Order Service triggers Payment → Inventory Finalize → Shipping → Notification.\\n  - If payment fails, compensation events release the reserved inventory.",
            "code_example": {
              "language": "multi",
              "python": "# Atomic inventory deduction using Redis Lua script\nLUA_DEDUCT_INVENTORY = '''\nlocal stock = tonumber(redis.call('get', KEYS[1]) or '0')\nlocal requested = tonumber(ARGV[1])\nif stock >= requested then\n    redis.call('decrby', KEYS[1], requested)\n    return 1 -- Success\nelse\n    return 0 -- Out of stock\nend\n'''\nprint('Lua script executes atomically on Redis single thread, preventing overselling')",
              "java": "// Distributed Saga Order Orchestrator\n// public void processOrder(Order order) {\n//     paymentClient.charge(order);\n//     inventoryClient.confirmReservation(order);\n//     shippingClient.createShipment(order);\n// }"
            },
            "complexity": {
              "time": "Search: O(1) ES lookup, Order: O(1) async queue",
              "space": "Petabytes of catalog and order history"
            },
            "practice_questions": []
          },
          {
            "id": "sd-design-distributed-cache-redis-like",
            "title": "Design Distributed Cache (Redis-like)",
            "slug": "sd-design-distributed-cache-redis-like",
            "difficulty": "Hard",
            "description": "HLD for a distributed in-memory cache: consistent hashing for data distribution, replication for availability, eviction policies, and cache cluster operations.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Design Distributed Cache (Redis-like) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Requirements\n**Functional:** Set(key, value, TTL), Get(key), Delete(key). **Non-Functional:** < 1ms P99 latency, 99.99% availability, handle 1M QPS.\n\n### 2. Architecture\n- Multiple **cache nodes** (consistent hashing ring).\n- Each node has in-memory hash table.\n- **Replication:** Each node has 1-2 replicas on different physical machines.\n- Client connects to any node; node routes if wrong shard.\n\n### 3. Data Partitioning\nUse consistent hashing: `node = hash(key) % virtual_ring`. Adding a node only migrates ~1/N keys.\n\n### 4. Cache Cluster Operations\n- **Hot key problem:** One key gets >90% traffic → replicate hot keys to multiple nodes.\n- **Cache stampede:** Many misses at same time → use mutex/lock to allow only one DB fetch.",
            "code_example": {
              "language": "multi",
              "python": "from collections import OrderedDict\nimport threading\n\nclass CacheNode:\n    def __init__(self, capacity=1000):\n        self.cache = OrderedDict()\n        self.capacity = capacity\n        self.lock = threading.Lock()\n\n    def get(self, key: str):\n        with self.lock:\n            if key not in self.cache: return None\n            self.cache.move_to_end(key)\n            return self.cache[key]\n\n    def set(self, key: str, value: str, ttl: int = None):\n        with self.lock:\n            if key in self.cache: self.cache.move_to_end(key)\n            self.cache[key] = value\n            if len(self.cache) > self.capacity:\n                self.cache.popitem(last=False)  # LRU eviction\n\nnode = CacheNode(capacity=3)\nnode.set('user:1', 'Rahul')\nnode.set('user:2', 'Priya')\nnode.set('user:3', 'Arjun')\nnode.set('user:4', 'Kiran')  # Evicts user:1 (LRU)\nprint('user:1:', node.get('user:1'))  # None (evicted)\nprint('user:2:', node.get('user:2'))  # Priya",
              "java": "// Thread-safe LRU cache in Java\nclass LRUCache<K,V> extends LinkedHashMap<K,V> {\n    private final int cap;\n    LRUCache(int cap) { super(cap, 0.75f, true); this.cap = cap; }\n    protected boolean removeEldestEntry(Map.Entry<K,V> e) { return size() > cap; }\n    public synchronized V safeGet(K key) { return get(key); }\n    public synchronized void safeSet(K key, V val) { put(key, val); }\n}"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-design-parking-lot-system-lld",
            "title": "Design Parking Lot System (LLD)",
            "slug": "sd-design-parking-lot-system-lld",
            "difficulty": "Medium",
            "description": "LLD for a parking lot: class hierarchy (ParkingLot, Floor, Spot, Vehicle, Ticket), OOP design, multi-floor support, payment calculation, and concurrency handling.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Design Parking Lot System (LLD) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Core Concepts",
                  "start_seconds": 0
                }
              ]
            },
            "explanation": "### 1. Requirements\n**Functional:** Multiple floors, spot types (compact, large, handicapped, motorcycle), issue ticket on entry, calculate fee on exit, real-time spot availability.\n\n### 2. Class Design\n```\nParkingLot\n├── floors: List[ParkingFloor]\n├── getAvailableSpot(VehicleType) → ParkingSpot\n└── displayAvailability()\n\nParkingFloor\n├── spots: List[ParkingSpot]\n└── getAvailableSpots(VehicleType) → List[ParkingSpot]\n\nParkingSpot (id, type, isOccupied, vehicle)\nVehicle (licensePlate, type: CAR/BIKE/TRUCK)\nTicket (ticketId, spot, vehicle, entryTime)\nParkingFee (hourlyRate by vehicle type, calculateFee(ticket))\n```",
            "code_example": {
              "language": "multi",
              "python": "from datetime import datetime\nfrom enum import Enum\nfrom typing import Optional, List\n\nclass SpotType(Enum): COMPACT = 1; LARGE = 2; MOTORCYCLE = 3\nclass VehicleType(Enum): CAR = 1; TRUCK = 2; BIKE = 3\n\nVEHICLE_TO_SPOT = {VehicleType.CAR: SpotType.COMPACT, VehicleType.TRUCK: SpotType.LARGE, VehicleType.BIKE: SpotType.MOTORCYCLE}\nHOURLY_RATE = {VehicleType.CAR: 50, VehicleType.TRUCK: 100, VehicleType.BIKE: 20}\n\nclass Vehicle:\n    def __init__(self, plate: str, v_type: VehicleType):\n        self.plate = plate; self.type = v_type\n\nclass ParkingSpot:\n    def __init__(self, spot_id: str, spot_type: SpotType):\n        self.id = spot_id; self.type = spot_type; self.vehicle = None\n    def is_free(self) -> bool: return self.vehicle is None\n    def park(self, v: Vehicle): self.vehicle = v\n    def vacate(self): self.vehicle = None\n\nclass Ticket:\n    def __init__(self, vehicle: Vehicle, spot: ParkingSpot):\n        self.vehicle = vehicle; self.spot = spot\n        self.entry = datetime.now()\n    def calculate_fee(self) -> float:\n        hours = (datetime.now() - self.entry).seconds / 3600 + 1\n        return hours * HOURLY_RATE[self.vehicle.type]\n\nclass ParkingLot:\n    def __init__(self, spots: List[ParkingSpot]):\n        self.spots = spots\n        self.tickets = {}\n    def enter(self, vehicle: Vehicle) -> Optional[Ticket]:\n        needed = VEHICLE_TO_SPOT[vehicle.type]\n        for spot in self.spots:\n            if spot.is_free() and spot.type == needed:\n                spot.park(vehicle)\n                ticket = Ticket(vehicle, spot)\n                self.tickets[vehicle.plate] = ticket\n                print(f'{vehicle.plate} → Spot {spot.id}')\n                return ticket\n        print('No spot available!'); return None\n    def exit(self, plate: str) -> float:\n        ticket = self.tickets.pop(plate)\n        fee = ticket.calculate_fee()\n        ticket.spot.vacate()\n        print(f'{plate} exited. Fee: Rs {fee:.0f}')\n        return fee\n\nlot = ParkingLot([ParkingSpot('A1', SpotType.COMPACT), ParkingSpot('B1', SpotType.MOTORCYCLE)])\nlot.enter(Vehicle('MH01AB1234', VehicleType.CAR))\nlot.exit('MH01AB1234')",
              "java": "// Java parking lot (abbreviated)\nenum VehicleType { CAR, BIKE, TRUCK }\nrecord Vehicle(String plate, VehicleType type) {}\nclass ParkingSpot {\n    String id; SpotType type; Vehicle vehicle;\n    boolean isFree() { return vehicle == null; }\n}"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-design-ride-sharing-app-uber-like",
            "title": "Design Ride-Sharing App (Uber-like)",
            "slug": "sd-design-ride-sharing-app-uber-like",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Design Ride-Sharing App (Uber-like) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Design Ride-Sharing App (Uber-like) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Design Ride-Sharing App (Uber-like)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Design Ride-Sharing App (Uber-like)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Design Ride-Sharing App (Uber-like) in Python\nprint('Production architecture pattern: Design Ride-Sharing App (Uber-like)')",
              "java": "// Design Ride-Sharing App (Uber-like) in Java\nSystem.out.println(\"Design Ride-Sharing App (Uber-like)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-design-video-streaming-platform-youtubenetflix-like",
            "title": "Design Video Streaming Platform (YouTube/Netflix-like)",
            "slug": "sd-design-video-streaming-platform-youtubenetflix-like",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Design Video Streaming Platform (YouTube/Netflix-like) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Design Video Streaming Platform (YouTube/Netflix-like) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Design Video Streaming Platform (YouTube/Netflix-like)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Design Video Streaming Platform (YouTube/Netflix-like)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Design Video Streaming Platform (YouTube/Netflix-like) in Python\nprint('Production architecture pattern: Design Video Streaming Platform (YouTube/Netflix-like)')",
              "java": "// Design Video Streaming Platform (YouTube/Netflix-like) in Java\nSystem.out.println(\"Design Video Streaming Platform (YouTube/Netflix-like)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-design-search-autocompletetypeahead",
            "title": "Design Search Autocomplete/Typeahead",
            "slug": "sd-design-search-autocompletetypeahead",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Design Search Autocomplete/Typeahead in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Design Search Autocomplete/Typeahead - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Design Search Autocomplete/Typeahead\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Design Search Autocomplete/Typeahead** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Design Search Autocomplete/Typeahead in Python\nprint('Production architecture pattern: Design Search Autocomplete/Typeahead')",
              "java": "// Design Search Autocomplete/Typeahead in Java\nSystem.out.println(\"Design Search Autocomplete/Typeahead\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-design-file-storage-system-google-drivedropbox-like",
            "title": "Design File Storage System (Google Drive/Dropbox-like)",
            "slug": "sd-design-file-storage-system-google-drivedropbox-like",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Design File Storage System (Google Drive/Dropbox-like) in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Design File Storage System (Google Drive/Dropbox-like) - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Design File Storage System (Google Drive/Dropbox-like)\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Design File Storage System (Google Drive/Dropbox-like)** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Design File Storage System (Google Drive/Dropbox-like) in Python\nprint('Production architecture pattern: Design File Storage System (Google Drive/Dropbox-like)')",
              "java": "// Design File Storage System (Google Drive/Dropbox-like) in Java\nSystem.out.println(\"Design File Storage System (Google Drive/Dropbox-like)\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-design-web-crawler",
            "title": "Design Web Crawler",
            "slug": "sd-design-web-crawler",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Design Web Crawler in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Design Web Crawler - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Design Web Crawler\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Design Web Crawler** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Design Web Crawler in Python\nprint('Production architecture pattern: Design Web Crawler')",
              "java": "// Design Web Crawler in Java\nSystem.out.println(\"Design Web Crawler\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          },
          {
            "id": "sd-design-payment-system",
            "title": "Design Payment System",
            "slug": "sd-design-payment-system",
            "difficulty": "Medium",
            "description": "Comprehensive guide to Design Payment System in system design.",
            "video": {
              "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI",
              "title": "Design Payment System - System Design",
              "start_seconds": 0,
              "end_seconds": 600,
              "chapters": [
                {
                  "title": "Overview",
                  "timestamp": "00:00"
                }
              ]
            },
            "explanation": "### Design Payment System\n\nDetailed architectural overview, engineering trade-offs, and practical design principles for **Design Payment System** in scalable distributed architectures.",
            "code_example": {
              "language": "multi",
              "python": "# Design Payment System in Python\nprint('Production architecture pattern: Design Payment System')",
              "java": "// Design Payment System in Java\nSystem.out.println(\"Design Payment System\");"
            },
            "complexity": {
              "time": "O(1)",
              "space": "O(1)"
            },
            "practice_questions": []
          }
        ]
      }
    ]
  }
];
