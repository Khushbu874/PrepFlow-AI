/**
 * PrepFlow AI - Static Comprehensive DSA Learning Roadmap & Content Data
 * All 17 Core Modules with Explanations, Visual Diagrams, Code Implementations, Complexity & LeetCode Challenges.
 */

const PREPFLOW_TOPICS_DATA = [
    {
        id: "cat-dsa",
        name: "Data Structures & Algorithms",
        slug: "dsa",
        icon: "⚡",
        description: "Master foundational to advanced Data Structures and Algorithms for coding interviews.",
        subcategories: [
            // 1. Basics / Foundations
            {
                id: "sub-foundations",
                name: "1. Basics & Foundations",
                icon: "🧱",
                topics: [
                    {
                        id: "topic-time-complexity",
                        title: "Time Complexity (Big O, Big Ω, Big Θ & Amortized)",
                        slug: "time-complexity",
                        difficulty: "Easy",
                        description: "Deep dive into asymptotic notations, Best/Worst/Average/Amortized types, loop analysis, and runtime growth curves with multi-diagrams.",
                        video: {
                            url: "https://www.youtube.com/watch?v=FPu9Uld7W-E",
                            title: "Big O Notation & Time Complexity Masterclass",
                            start_seconds: 0,
                            end_seconds: 720,
                            chapters: [
                                { title: "Introduction & Why Time Complexity Matters", start_seconds: 0 },
                                { title: "4 Types of Complexity (Best, Worst, Average, Amortized)", start_seconds: 150 },
                                { title: "Common Complexities (O(1) to O(N!))", start_seconds: 330 },
                                { title: "Loop Analysis & Dropping Constants", start_seconds: 510 },
                                { title: "Interview Golden Rules", start_seconds: 640 }
                            ]
                        },
                        explanation: `
### 1. Simple Definition & Intuition
Time Complexity tells us how the running time (total operations) of an algorithm grows when the input size (n) increases.

**In Simple Words:**
Input bada hone par algorithm ko kitna kaam (operations) karna padega, ye Time Complexity batati hai.

---

### 2. Why Do We Need Time Complexity?
Suppose humare paas ek hi problem ko solve karne ke 2 solutions hain:
- **Solution A:** n operations
- **Solution B:** n² operations

Jab n chhota ho (e.g. n = 5), dono solutions fast execute honge. Lekin jab input size **n = 1,000** ho jata hai:
- **Solution A (n):** 1,000 operations (Instant execution)
- **Solution B (n²):** 1,000,000 operations (1,000x slower)

**Conclusion:** Time Complexity hume hardware speed se independent hokar sabse efficient algorithm choose karne me help karti hai.

---

### 3. What is n? (Input Size Explained)
**n** ka matlab hai **Input Data ka Total Size** (Elements count, string length, etc.).

**Examples:**
- **Array Input:**
\`\`\`python
arr = [10, 20, 30, 40, 50]  # 5 elements -> n = 5
\`\`\`
Agar array me 1,000 elements hain ➔ **n = 1000**.

- **String Input:**
\`\`\`python
s = "google"  # 6 characters -> n = 6
\`\`\`

---

### 4. Asymptotic Notations: Types & Classification

\`\`\`diagram:asymptotic-notations
\`\`\`

#### 1. Big O Notation (O) — Upper Bound (Worst-Case)
- **Meaning:** Maximum time limit. Algorithm isse zyada time kabhi nahi lega.
- **Simple Words:** Worst to worst scenario me algorithm maximum itna time lega.
- **Math Relation:** f(n) <= c * g(n)
- **Interview Importance:** Most critical notation. Interviews me 99% yahi pucha jata hai.

#### 2. Big Omega Notation (Ω) — Lower Bound (Best-Case)
- **Meaning:** Minimum time limit. Kam se kam itna time toh lagega hi lagega.
- **Simple Words:** Best scenario me bhi algorithm ko kam se kam itna time chahiye.
- **Math Relation:** f(n) >= c * g(n)

#### 3. Big Theta Notation (Θ) — Tight Bound (Exact Growth Rate)
- **Meaning:** Jab Upper Bound aur Lower Bound dono exact same curve ko follow karein.
- **Simple Words:** Algorithm hamesha isi exact rate se grow karega.
- **Math Relation:** c1 * g(n) <= f(n) <= c2 * g(n)
- **Example:** Merge Sort har scenario (Best, Average, Worst) me hamesha Θ(N log N) leta hai.

#### 4. Little o Notation (o) — Strict Upper Bound
- **Meaning:** Strictly less than (<), kabhi equal nahi ho sakta.
- **Example:** 2n = O(n) is valid, but 2n = o(n) is false. 2n = o(n²) is true.

#### 5. Little omega Notation (ω) — Strict Lower Bound
- **Meaning:** Strictly greater than (>), strictly larger growth rate.
- **Example:** n² = Ω(n) and n² = ω(n) are both true.

---

### 5. Quick Comparison: All 5 Notations

| Notation | Symbol | Meaning | Math Equivalent | Real Coding Example |
| :--- | :---: | :--- | :---: | :--- |
| **Big O** | **O** | Upper Bound (Worst-Case Limit) | <= | Linear Search: O(N) |
| **Big Omega** | **Ω** | Lower Bound (Best-Case Limit) | >= | Linear Search: Ω(1) |
| **Big Theta** | **Θ** | Tight Bound (Exact Rate) | = | Merge Sort: Θ(N log N) |
| **Little o** | **o** | Strict Upper Bound | < | N = o(N²) |
| **Little omega** | **ω** | Strict Lower Bound | > | N² = ω(N) |

---

### 6. Visual Growth Curves of Common Complexities

\`\`\`diagram:big-o
\`\`\`

---

### 7. Detailed Analysis of Amortized Time Complexity
Dynamic array (Python \`list\` ya C++ \`vector\`) me jab elements add karte hain, toh mostly \`O(1)\` time lagta hai. Jab capacity full hoti hai, toh array double size ka naya memory allocate karke purane elements copy karta hai (\`O(N)\`).

\`\`\`diagram:amortized-time
\`\`\`

---

### 8. Code Implementations for Each Complexity Type

\`\`\`python
# 1. O(1) Constant Time (Direct array index access)
def constant_time(arr):
    return arr[0] if arr else None

# 2. O(log N) Logarithmic Time (Binary Search - Halving search space)
def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

# 3. O(N) Linear Time (Single loop traversal / Find Maximum)
def find_max(arr):
    if not arr: return None
    max_val = arr[0]
    for num in arr:
        if num > max_val: max_val = num
    return max_val

# 4. O(N log N) Linearithmic Time (Merge Sort - Divide & Conquer)
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# 5. O(N^2) Quadratic Time (Nested loops - Compare all pairs)
def print_all_pairs(arr):
    n = len(arr)
    for i in range(n):
        for j in range(i + 1, n):
            print(arr[i], arr[j])

# 6. O(2^N) Exponential Time (Recursive Binary Tree / Naive Fibonacci)
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# 7. O(N!) Factorial Time (Generating all N! Permutations)
def generate_permutations(nums):
    result = []
    def backtrack(start):
        if start == len(nums):
            result.append(nums[:])
            return
        for i in range(start, len(nums)):
            nums[start], nums[i] = nums[i], nums[start]
            backtrack(start + 1)
            nums[start], nums[i] = nums[i], nums[start]
    backtrack(0)
    return result
\`\`\`

---

### 9. Step-by-Step Time Complexity Calculation Rules
- **Rule 1 (Drop Constants):** \`O(2N + 5) -> O(N)\`. Constants asymptotic slope change nahi karte.
- **Rule 2 (Drop Non-Dominant Terms):** \`O(N² + 100N + 500) -> O(N²)\`.
- **Rule 3 (Different Inputs = Different Variables):** Do alag arrays \`A\` aur \`B\` ke liye complexity \`O(A + B)\` hogi.
- **Rule 4 (Multiplicative Loop):** Agar loop variable \`i = i * 2\` ya \`i = i / 2\` ho raha hai, toh loop \`log₂(N)\` baar chalega.
                        `,
                        code_example: {
                            language: "multi",
                            python: `# Python (Compatible with Python 2.7, 3.6 - 3.12)
class ComplexityDemonstrator:
    # 1. O(1) Constant Time (Direct array index access)
    def constant_time(self, arr):
        return arr[0] if arr else -1

    # 2. O(log N) Logarithmic Time (Binary Search)
    def binary_search(self, arr, target):
        low, high = 0, len(arr) - 1
        while low <= high:
            mid = low + (high - low) // 2
            if arr[mid] == target:
                return mid
            elif arr[mid] < target:
                low = mid + 1
            else:
                high = mid - 1
        return -1

    # 3. O(N) Linear Time (Single Loop / Linear Scan)
    def linear_scan(self, arr):
        if not arr: return -1
        max_val = arr[0]
        for num in arr:
            if num > max_val:
                max_val = num
        return max_val

    # 4. O(N log N) Linearithmic Time (Merge Sort)
    def merge_sort(self, arr):
        if len(arr) <= 1:
            return arr
        mid = len(arr) // 2
        left = self.merge_sort(arr[:mid])
        right = self.merge_sort(arr[mid:])
        return self._merge(left, right)

    def _merge(self, left, right):
        result, i, j = [], 0, 0
        while i < len(left) and j < len(right):
            if left[i] <= right[j]:
                result.append(left[i]); i += 1
            else:
                result.append(right[j]); j += 1
        result.extend(left[i:])
        result.extend(right[j:])
        return result

    # 5. O(N^2) Quadratic Time (Nested Loops / All Pairs)
    def quadratic_pairs(self, arr):
        pairs = []
        n = len(arr)
        for i in range(n):
            for j in range(i + 1, n):
                pairs.append((arr[i], arr[j]))
        return pairs

    # 6. O(2^N) Exponential Time (Recursive Binary Tree)
    def fibonacci(self, n):
        if n <= 1:
            return n
        return self.fibonacci(n - 1) + self.fibonacci(n - 2)

    # 7. O(N!) Factorial Time (Generate All Permutations)
    def permutations(self, nums):
        res = []
        def backtrack(start):
            if start == len(nums):
                res.append(nums[:])
                return
            for i in range(start, len(nums)):
                nums[start], nums[i] = nums[i], nums[start]
                backtrack(start + 1)
                nums[start], nums[i] = nums[i], nums[start]
        backtrack(0)
        return res`,
                            java: `// Java 8 Solution: Complete Implementations for Each Complexity Type
import java.util.*;

public class Solution {
    // 1. O(1) Constant Time (Direct array index access)
    public int constantTime(int[] arr) {
        return (arr != null && arr.length > 0) ? arr[0] : -1;
    }

    // 2. O(log N) Logarithmic Time (Binary Search)
    public int binarySearch(int[] arr, int target) {
        int low = 0, high = arr.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (arr[mid] == target) return mid;
            else if (arr[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }

    // 3. O(N) Linear Time (Single Loop / Linear Scan)
    public int linearScan(int[] arr) {
        if (arr == null || arr.length == 0) return -1;
        int maxVal = arr[0];
        for (int num : arr) {
            if (num > maxVal) maxVal = num;
        }
        return maxVal;
    }

    // 4. O(N log N) Linearithmic Time (Merge Sort - Divide & Conquer)
    public void mergeSort(int[] arr, int left, int right) {
        if (left >= right) return;
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }

    private void merge(int[] arr, int left, int mid, int right) {
        int[] temp = new int[right - left + 1];
        int i = left, j = mid + 1, k = 0;
        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) temp[k++] = arr[i++];
            else temp[k++] = arr[j++];
        }
        while (i <= mid) temp[k++] = arr[i++];
        while (j <= right) temp[k++] = arr[j++];
        System.arraycopy(temp, 0, arr, left, temp.length);
    }

    // 5. O(N^2) Quadratic Time (Nested Loops / All Pairs)
    public List<int[]> quadraticPairs(int[] arr) {
        List<int[]> pairs = new ArrayList<>();
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                pairs.add(new int[]{arr[i], arr[j]});
            }
        }
        return pairs;
    }

    // 6. O(2^N) Exponential Time (Recursive Binary Tree)
    public int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    // 7. O(N!) Factorial Time (Generate All Permutations)
    public List<List<Integer>> generatePermutations(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(0, nums, result);
        return result;
    }

    private void backtrack(int start, int[] nums, List<List<Integer>> result) {
        if (start == nums.length) {
            List<Integer> current = new ArrayList<>();
            for (int num : nums) current.add(num);
            result.add(current);
            return;
        }
        for (int i = start; i < nums.length; i++) {
            swap(nums, start, i);
            backtrack(start + 1, nums, result);
            swap(nums, start, i);
        }
    }

    private void swap(int[] nums, int i, int j) {
        int tmp = nums[i]; nums[i] = nums[j]; nums[j] = tmp;
    }
}`
                        },
                        complexity: {
                            time: "O(1) Constant to O(N!) Factorial",
                            space: "O(1) Auxiliary space"
                        },
                        practice_questions: [
                            { title: "Two Sum (LeetCode #1) — O(N²) to O(N) Hash Map Optimization", difficulty: "Easy", url: "https://leetcode.com/problems/two-sum/" },
                            { title: "Contains Duplicate (LeetCode #217) — O(N²) vs O(N log N) vs O(N) Comparison", difficulty: "Easy", url: "https://leetcode.com/problems/contains-duplicate/" },
                            { title: "Binary Search (LeetCode #704) — Fundamental O(log N) Logarithmic Search", difficulty: "Easy", url: "https://leetcode.com/problems/binary-search/" },
                            { title: "Pow(x, n) (LeetCode #50) — Reducing O(N) Linear to O(log N) Binary Exponentiation", difficulty: "Medium", url: "https://leetcode.com/problems/powx-n/" },
                            { title: "Maximum Subarray (LeetCode #53) — Kadane's Algorithm O(N²) to O(N) Optimization", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-subarray/" },
                            { title: "3Sum (LeetCode #15) — Reducing O(N³) Brute Force to O(N²) Two Pointers", difficulty: "Medium", url: "https://leetcode.com/problems/3sum/" },
                            { title: "Subsets (LeetCode #78) — O(2ᴺ) Exponential State Space Traversal", difficulty: "Medium", url: "https://leetcode.com/problems/subsets/" }
                        ]
                    },
                    {
                        id: "topic-space-complexity",
                        title: "Space Complexity & Memory Layout",
                        slug: "space-complexity",
                        difficulty: "Easy",
                        description: "Deep dive into Input Space vs Auxiliary Space, 4-Segment RAM layout (Stack, Heap, Data, Text), Call Stack recursion limits, and In-Place pointer algorithms.",
                        video: {
                            url: "https://www.youtube.com/watch?v=PwKv8fOcriM",
                            title: "Time & Space Complexity Complete Tutorial (Apna College)",
                            start_seconds: 0,
                            end_seconds: 1800,
                            chapters: [
                                { title: "Introduction & What is Space Complexity", start_seconds: 0 },
                                { title: "Memory Allocation & Variables", start_seconds: 240 },
                                { title: "Input Space vs Auxiliary Space", start_seconds: 510 },
                                { title: "Recursion & Call Stack Memory", start_seconds: 890 },
                                { title: "Common Complexities & Optimization", start_seconds: 1320 }
                            ]
                        },
                        explanation: `
### 1. Simple Definition & Intuition
Space Complexity batati hai ki jab input data ka size **n** badhta hai, toh algorithm ko execute hone ke liye **Total kitni RAM (Memory)** allocate karni padti hai.

**In Simple Words:**
Input bada hone par algorithm ko chalne ke liye computer RAM me kitni extra memory chahiye, ye Space Complexity measure karti hai.

---

### 2. Why Do We Need Space Complexity?
Time fast hone ke saath memory efficient hona kyu zaroori hai?
- **Hardware Limitations:** Embedded systems, mobile apps, aur IoT devices me limited RAM (e.g. 512MB ya 2GB) hoti hai.
- **OutOfMemoryError (OOM):** Agar algorithm memory limit cross kar deta hai, toh OS process ko crash kar deta hai.
- **L1/L2 Cache Locality:** \`O(1)\` in-place algorithms CPU Cache me directly fit hote hain, jisse execution speed 10x-50x fast ho jati hai.
- **Server Cloud Costs:** Microservices me memory usage 50% kam karne se cloud infrastructure cost aadhi ho jati hai.

---

### 3. The Golden Space Complexity Formula
Jab bhi hum kisi algorithm ki Space Complexity calculate karte hain:

**Total Space Complexity = Input Space + Auxiliary Space**

#### 1. Input Space (Mandatory)
Input data ko memory me store karne ke liye required space.
- **Example:** Agar function me \`N\` size ka array pass kiya gaya hai, toh Input Space \`O(N)\` hota hai.

#### 2. Auxiliary Space (Temporary / Extra)
Algorithm ko solve karte waqt jo **Extra Variables, Hash Maps, Call Stacks, ya Temporary Arrays** allocate hote hain.
- **Example:** Frequency count karne ke liye banaya gaya HashMap \`O(N)\` Auxiliary Space leta hai.

> 💡 **Golden Interview Rule:** Coding Interviews me jab interviewer puchta hai *"What is the Space Complexity?"*, toh 99% cases me wo **Auxiliary Space** ke baare me puch rahe hote hain (Input space ko chhod kar extra memory).

---

### 4. Process Memory Architecture (RAM Layout)
Jab aap kisi program (C++, Java, Python) ko run karte hain, toh Operating System usko RAM me **4 alag-alag hisso (Segments)** me baant deta hai:

\`\`\`diagram:memory-layout
\`\`\`

#### 🏠 Asaan Real-Life Analogy (Kitchen & Restaurant Example):
- **1. Text Segment (Recipe Book):** Chef ki kitchen recipe book (Instructions jo change nahi hoti, sirf read ki jaati hain).
- **2. Data Segment (Notice Board):** Kitchen ke wall par laga static notice board (Global cheezein jo sabhi chefs ke liye common hain).
- **3. Stack Segment (Working Counter Desk):** Chef ki working table jaha temporary bartan aur chammach rakhe hain. Kaam khatam hote hi table turant saaf ho jaati hai ($O(1)$ Ultra-Fast).
- **4. Heap Segment (Bada Storage Warehouse):** Bada godown jaha bade packets, fridge aur naye raw materials store hote hain (\`new\`, \`malloc\`, dynamic objects).

---

#### 🔍 4 Memory Segments Ka Asaan Breakdown:

1. **Text / Code Segment (🔒 Read-Only):**
   - **Kya store hota hai:** Aapke pure program ka compiled binary machine code (0s & 1s).
   - **Kyu zaroori hai:** Ye hamesha Read-Only hota hai taaki koi virus ya bug runtime par aapke code ke logic ko overwrite na kar sake.

2. **Data / BSS Segment (📌 Fixed Size):**
   - **Kya store hota hai:** Program ke \`Global Variables\` aur \`Static Variables\`.
   - **Lifespan:** Program start hone se lekar program terminate hone tak ye RAM me bane rehte hain.

3. **Heap Segment (⬆️ Grows Upward - Dynamic Memory):**
   - **Kya store hota hai:** Runtime par dynamically banne wale bade objects, arrays, HashMaps, aur Trees (e.g. \`new int[N]\`, \`new ArrayList<>()\`, Python \`list\`/\`dict\`).
   - **Khaas Baat:** Size me bahut bada hota hai (Available RAM ke barabar). Garbage Collector isse clean karta hai.
   - **Error Risk:** Agar bina soche-samjhe bahut bada array allocate kar diya, toh **OutOfMemoryError (OOM)** crash ho jata hai.

4. **Stack Segment (⬇️ Grows Downward - LIFO Fast Memory):**
   - **Kya store hota hai:** Chhote local variables (\`int\`, \`double\`, \`pointers\`), function arguments, aur function call addresses.
   - **Khaas Baat:** Super Fast (CPU L1/L2 Cache me fit hota hai). Function return hote hi memory instant free ho jaati hai.
   - **Error Risk:** Agar recursive function me base case bhool gaye, toh stack bhar jata hai aur **StackOverflowError** crash hota hai.

> 💡 **Stack aur Heap aamne-saamne kyu badhte hain?**
> RAM ke beech me unallocated khali space hoti hai. Stack upar se neeche (⬇️) aur Heap neeche se upar (⬆️) badhta hai taaki dono dynamic tarike se free RAM ko efficiently share kar sakein!

---

### 5. Stack vs Heap Memory Comparison

| Parameter | Stack Memory | Heap Memory |
| :--- | :--- | :--- |
| **Data Stored** | Local primitive variables, function call frames | Objects, dynamic arrays, reference types |
| **Allocation Mechanism** | Automatic (LIFO pushed/popped by CPU) | Dynamic via \`new\`/\`malloc\` (Garbage Collector) |
| **Access Speed** | Ultra Fast (CPU L1/L2 cache friendly) | Slower compared to Stack |
| **Size Limit** | Small & strictly bounded (e.g. 1MB - 8MB) | Large (Entire available system RAM) |
| **Failure Exception** | **StackOverflowError** | **OutOfMemoryError** |

---

### 6. Recursion & Call Stack Space Deep Dive
Har recursive function call CPU Call Stack par ek **Stack Frame** push karta hai.

\`\`\`diagram:recursion-tree
\`\`\`

**Recursive Auxiliary Space = O(Max Tree Height H)**

#### Recursion Memory Rules:
- **Linear Recursion (\`N ➔ 0\`):** Max Call Depth = \`N\` ➔ \`O(N)\` Stack Space.
- **Divide & Conquer Binary Search:** Max Call Depth = \`log₂(N)\` ➔ \`O(log N)\` Stack Space.
- **Tree DFS on Balanced Tree:** Max Call Depth = \`log₂(N)\` ➔ \`O(log N)\` Stack Space.
- **Tree DFS on Skewed Tree (Linked List shape):** Max Call Depth = \`N\` ➔ \`O(N)\` Stack Space.

---

### 7. Classification of Common Space Complexities

\`\`\`diagram:big-o
\`\`\`

| Complexity | Growth Rate | Description | Classic DSA Examples |
| :--- | :--- | :--- | :--- |
| **O(1)** | Constant | Zero extra heap memory; uses 2-3 fixed primitive pointers | In-place Two Pointers, Fast & Slow Pointers, Dutch National Flag |
| **O(log N)** | Logarithmic | Divide-and-Conquer call stack frames | Recursive Binary Search, QuickSort stack, Balanced BST traversal |
| **O(N)** | Linear | Memory scales directly with input elements | Hash Map, Frequency Counter, Visited HashSet, Stack, Queue, BFS |
| **O(N²)** | Quadratic | 2D Matrices, Grids, or DP Tabulation tables | 2D DP Grid (\`dp[N][N]\`), Graph Adjacency Matrix (\`adj[V][V]\`) |
| **O(2ᴺ)** | Exponential | Storing all combinations / subsets in memory | Power Set generation (storing all 2ᴺ subsets), Permutations |

---

### 8. In-Place vs Extra Memory Algorithms
**In-Place Algorithm** wo algorithm hota hai jo input data structure ko directly modify karta hai without allocating any extra proportional memory (\`Auxiliary Space = O(1)\`).

#### Real Comparison:
- **Approach 1 (Extra Memory - \`O(N)\` Space):**
  Naya array banakar reverse elements copy karna ➔ \`O(N)\` Space.
- **Approach 2 (In-Place - \`O(1)\` Space):**
  Left aur Right pointers swap karke array ko in-place reverse karna ➔ \`O(1)\` Space.

---

### 9. Code Deep Dive: Kaha Kitni Complexity Hai Aur Kyo Hai?

#### Type 1: O(1) Constant Auxiliary Space (In-Place Two Pointers)

\`\`\`python
def reverse_in_place(arr: list[int]) -> None:
    left = 0                  # Line 1: 4 bytes (Stack)
    right = len(arr) - 1      # Line 2: 4 bytes (Stack)
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]  # Line 4: In-place swap
        left += 1             # Line 5: Update pointer
        right -= 1            # Line 6: Update pointer
\`\`\`

- **Kaha kitni memory use hui?**
  - \`left\`: 1 primitive integer = 4 Bytes on Stack
  - \`right\`: 1 primitive integer = 4 Bytes on Stack
  - Heap Memory: **0 Bytes** (Koi naya array/object nahi banaya gaya).
  - Total Extra Memory: **Fixed 8 Bytes** (Constant).
- **Kyo O(1) hai?**
  Input array ka size \`N = 10\` ho ya \`N = 10,000,000\`, algorithm hamesha sirf 2 pointers (\`left\`, \`right\`) hi use karta hai. Isliye Auxiliary Space input size \`N\` par depend nahi karti ➔ \`O(1)\`.

---

#### Type 2: O(log N) Logarithmic Auxiliary Space (Recursive Binary Search)

\`\`\`python
def recursive_binary_search(arr: list[int], target: int, low: int, high: int) -> int:
    if low > high:
        return -1
    mid = low + (high - low) // 2       # Mid calculation
    if arr[mid] == target:
        return mid
    elif arr[mid] > target:
        return recursive_binary_search(arr, target, low, mid - 1)  # Left Half
    else:
        return recursive_binary_search(arr, target, mid + 1, high) # Right Half
\`\`\`

- **Kaha kitni memory use hui?**
  - Har recursive call par CPU Call Stack me **1 naya Stack Frame** banta hai (\`low\`, \`high\`, \`mid\`, return address).
  - Binary search har step par search space ko aadha (\`N / 2\`) kar deta hai: \`N ➔ N/2 ➔ N/4 ➔ ... ➔ 1\`.
  - Call Stack ki maximum depth \`H = log₂(N)\` frames hoti hai.
- **Kyo O(log N) hai?**
  Call Stack par ek samay me active frames ki maximum sankhya \`log₂(N)\` hoti hai. Example: Agar \`N = 1,048,576\` ($2^{20}$) elements hain, toh Call Stack me maximum sirf **20 frames** banenge ➔ \`O(log N)\`.

---

#### Type 3: O(N) Linear Auxiliary Space (Frequency Hash Map)

\`\`\`python
def count_frequencies(arr: list[int]) -> dict[int, int]:
    freq_map = {}             # Line 1: Dynamic Dictionary on Heap
    for num in arr:
        freq_map[num] = freq_map.get(num, 0) + 1  # Line 3: Insert keys
    return freq_map
\`\`\`

- **Kaha kitni memory use hui?**
  - \`freq_map\`: Heap memory par dynamically allocate hota hai.
  - Worst Case: Agar input array ke saare \`N\` elements unique hain (e.g. \`[10, 20, 30, 40, 50]\`), toh HashMap me \`N\` key-value pairs store honge.
- **Kyo O(N) hai?**
  HashMap me store hone wale entries ki sankhya directly input array ke size \`N\` ke proportional hoti hai. Agar \`N = 1,000\`, toh \`1,000\` entries store hongi ➔ \`O(N)\`.

---

#### Type 4: O(N²) Quadratic Auxiliary Space (2D Matrix / DP Table)

\`\`\`python
def build_multiplication_grid(n: int) -> list[list[int]]:
    grid = [[0] * n for _ in range(n)]  # Line 1: N x N 2D Grid on Heap
    for i in range(n):
        for j in range(n):
            grid[i][j] = (i + 1) * (j + 1)
    return grid
\`\`\`

- **Kaha kitni memory use hui?**
  - \`grid\`: Heap memory par \`N\` rows allocate hoti hain aur har row me \`N\` columns hote hain.
  - Total Memory Cells = \`N × N = N²\` integers.
- **Kyo O(N²) hai?**
  Agar \`N = 100\`, toh matrix me \`100 × 100 = 10,000\` cells allocate honge. Agar \`N = 1,000\`, toh \`1,000,000\` integers memory me store honge ➔ \`O(N²)\`.

---

#### Type 5: O(2ᴺ) Exponential Auxiliary Space (Power Set / Subsets)

\`\`\`python
def generate_all_subsets(nums: list[int]) -> list[list[int]]:
    result = []                        # Output list holding all 2ᴺ subsets
    def backtrack(start, path):
        result.append(path[:])         # Copy current subset to result
        for i in range(start, len(nums)):
            path.append(nums[i])
            backtrack(i + 1, path)
            path.pop()
    backtrack(0, [])
    return result
\`\`\`

- **Kaha kitni memory use hui?**
  - \`result\`: Heap memory par \`2ᴺ\` subsets store karta hai.
  - $N=3 \implies 2^3 = 8$ subsets.
  - $N=20 \implies 2^{20} = 1,048,576$ subsets.
- **Kyo O(2ᴺ) hai?**
  Mathematics ke rule ke anusaar, \`N\` elements ke total \`2ᴺ\` possible subsets hote hain. Jab hum saare subsets ko memory me store karte hain, toh memory exponential rate se explode hoti hai ➔ \`O(2ᴺ)\`.

---

### 10. Top 5 Space Optimization Techniques for Coding Interviews
1. **Two Pointers instead of Extra Arrays:** Slicing ya duplicate array create karne ke bajay \`left\` aur \`right\` index variables use karein (\`O(N) ➔ O(1)\`).
2. **Space-Optimized DP (Rolling Variables):** Agar \`dp[i][j]\` sirf previous row \`dp[i-1]\` par depend karta hai, toh 2D matrix ke bajay 1D array ya 2 variables use karein (\`O(N²) ➔ O(N)\` ya \`O(N) ➔ O(1)\`).
3. **Bit Manipulation / Bitmasks:** Boolean visited flags ko boolean array ke bajay ek integer variable ke bits me store karein (\`O(N) ➔ O(1)\`).
4. **Input Array Mutation (Index-as-Hash):** Constraints check karke positive/negative sign flipping se input array ko hi visited hash set ki tarah use karein (\`O(N) ➔ O(1)\`).
5. **Iteration over Deep Recursion:** Stack frames overflow se bachne ke liye recursive DFS ko iterative loop ya explicit small stack se replace karein.
                        `,
                        code_example: {
                            language: "multi",
                            python: `# Python (Compatible with Python 2.7, 3.6 - 3.12)
class SpaceComplexityDemonstrator:
    # 1. O(1) Auxiliary Space: In-Place Two Pointers
    def reverse_in_place(self, arr):
        if not arr: return
        left, right = 0, len(arr) - 1
        while left < right:
            arr[left], arr[right] = arr[right], arr[left]
            left += 1
            right -= 1

    # 2. O(log N) Auxiliary Space: Recursive Call Stack
    def recursive_binary_search(self, arr, target, low, high):
        if low > high: return -1
        mid = low + (high - low) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] > target:
            return self.recursive_binary_search(arr, target, low, mid - 1)
        else:
            return self.recursive_binary_search(arr, target, mid + 1, high)

    # 3. O(N) Auxiliary Space: Hash Map Frequency Counter
    def count_frequencies(self, arr):
        freq_map = {}
        for num in arr:
            freq_map[num] = freq_map.get(num, 0) + 1
        return freq_map

    # 4. O(N^2) Auxiliary Space: 2D Matrix Grid Allocation
    def build_multiplication_grid(self, n):
        grid = [[0] * n for _ in range(n)]
        for i in range(n):
            for j in range(n):
                grid[i][j] = (i + 1) * (j + 1)
        return grid

    # 5. O(2^N) Auxiliary Space: Power Set Storage
    def generate_all_subsets(self, nums):
        result = []
        def backtrack(start, path):
            result.append(path[:])
            for i in range(start, len(nums)):
                path.append(nums[i])
                backtrack(i + 1, path)
                path.pop()
        backtrack(0, [])
        return result`,
                            java: `// Java 8 Solution: Space Complexity & Memory Optimization
import java.util.*;

public class Solution {
    // 1. O(1) Auxiliary Space: In-Place Two Pointers (Zero Extra Heap Memory)
    public void reverseInPlace(int[] arr) {
        if (arr == null || arr.length <= 1) return;
        int left = 0, right = arr.length - 1;
        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

    // 2. O(log N) Auxiliary Space: Recursive Call Stack (Binary Search)
    public int recursiveBinarySearch(int[] arr, int target, int low, int high) {
        if (low > high) return -1;
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] > target) {
            return recursiveBinarySearch(arr, target, low, mid - 1);
        }
        return recursiveBinarySearch(arr, target, mid + 1, high);
    }

    // 3. O(N) Auxiliary Space: Hash Map Frequency Counter / Visited Set
    public Map<Integer, Integer> countFrequencies(int[] arr) {
        Map<Integer, Integer> freqMap = new HashMap<>();
        for (int num : arr) {
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }
        return freqMap;
    }

    // 4. O(N^2) Auxiliary Space: 2D Dynamic Programming Grid / Matrix
    public int[][] buildMultiplicationGrid(int n) {
        int[][] grid = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                grid[i][j] = (i + 1) * (j + 1);
            }
        }
        return grid;
    }

    // 5. O(2^N) Auxiliary Space: Power Set Storage (All Subsets)
    public List<List<Integer>> generateAllSubsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrackSubsets(0, nums, new ArrayList<>(), result);
        return result;
    }

    private void backtrackSubsets(int start, int[] nums, List<Integer> path, List<List<Integer>> result) {
        result.add(new ArrayList<>(path));
        for (int i = start; i < nums.length; i++) {
            path.add(nums[i]);
            backtrackSubsets(i + 1, nums, path, result);
            path.remove(path.size() - 1);
        }
    }
}`
                        },
                        complexity: {
                            time: "O(1) Constant to O(2ᴺ) Exponential",
                            space: "O(1) In-Place Auxiliary space to O(2ᴺ) PowerSet"
                        },
                        practice_questions: [
                            { title: "Reverse String (LeetCode #344) — O(1) In-Place Two Pointers", difficulty: "Easy", url: "https://leetcode.com/problems/reverse-string/" },
                            { title: "Move Zeroes (LeetCode #283) — O(1) In-Place Array Shift", difficulty: "Easy", url: "https://leetcode.com/problems/move-zeroes/" },
                            { title: "Remove Duplicates from Sorted Array (LeetCode #26) — O(1) In-Place Fast/Slow Pointers", difficulty: "Easy", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
                            { title: "Rotate Array (LeetCode #189) — O(1) 3-Reversal In-Place Technique", difficulty: "Medium", url: "https://leetcode.com/problems/rotate-array/" },
                            { title: "Product of Array Except Self (LeetCode #238) — O(1) Auxiliary Space Accumulation", difficulty: "Medium", url: "https://leetcode.com/problems/product-of-array-except-self/" },
                            { title: "Set Matrix Zeroes (LeetCode #73) — O(1) In-Place First Row/Col Marker Optimization", difficulty: "Medium", url: "https://leetcode.com/problems/set-matrix-zeroes/" },
                            { title: "Subsets (LeetCode #78) — O(2ᴺ) Power Set Auxiliary Space", difficulty: "Medium", url: "https://leetcode.com/problems/subsets/" }
                        ]
                    },
                    {
                        id: "topic-recursion-basics",
                        title: "Recursion (Anatomy, 4 Types, Call Stack & Patterns)",
                        slug: "recursion-basics",
                        difficulty: "Medium",
                        description: "Deep dive into recursion mechanics — 3-part anatomy (base case, recursive case, return), call stack frame tracing, 4 major types, recursion tree complexity analysis, memoization, and 6 interview patterns with full code.",
                        video: {
                            url: "https://www.youtube.com/watch?v=9OsMG4fI4OY",
                            title: "Recursion Tutorial - Basics to Advanced | Part 1 (Apna College)",
                            start_seconds: 0,
                            end_seconds: 2560,
                            chapters: [
                                { title: "Introduction & What is Recursion?", start_seconds: 50 },
                                { title: "Recursive Function — How it works", start_seconds: 570 },
                                { title: "Call Stack & Recursion Tree", start_seconds: 678 },
                                { title: "Math of Recursion & Recurrence Relation", start_seconds: 1124 },
                                { title: "N Factorial (Recursive) + Code", start_seconds: 1316 },
                                { title: "Time Complexity in Recursion", start_seconds: 1621 },
                                { title: "Space Complexity in Recursion", start_seconds: 2041 },
                                { title: "Sum of N Numbers (Recursive) + Complexity", start_seconds: 2256 }
                            ]
                        },
                        explanation: `
### 1. Simple Definition & Intuition
Recursion ek aisi programming technique hai jisme ek **function apne aap ko hi call karta hai** — jab tak ek defined stopping condition (**Base Case**) na aa jaye.

**In Simple Words:**
Ek badi problem ko choti-choti same-type ki subproblems me todna, unhe solve karna, aur phir answers ko combine karna — yahi Recursion hai.

**Real Life Analogy (Mirror Room):**
Socho tum do aaine (mirrors) ke beech khade ho — tum apna infinite reflection dekhte ho. Har reflection doosre reflection ko call karta hai. Base Case wo hoga jab mirror band ho jaye — warna ye loop kabhi nahi rukta! StackOverflow ho jata!

---

### 2. Why Do We Need Recursion?
Kuch problems ki structure **naturally self-similar (recursive)** hoti hai:
- **Trees aur Graphs:** Har subtree bhi ek tree hota hai.
- **Divide & Conquer:** Merge Sort, Quick Sort.
- **Mathematical Sequences:** Fibonacci, Factorial.
- **Backtracking:** Subsets, Permutations, N-Queens.

**Iterative vs Recursive Comparison:**
| Aspect | Iterative (Loop) | Recursive |
| :--- | :--- | :--- |
| **Code Readability** | Complex nested logic | Clean, mirrors the problem |
| **Space Usage** | O(1) for simple loops | O(H) call stack frames |
| **Best For** | Simple repetition | Tree/Graph/Divide & Conquer |
| **Risk** | Infinite loop | Stack Overflow (no base case) |
| **Debugging** | Easier | Needs recursion tree mental model |

---

### 3. The 3-Part Anatomy of Every Recursive Function
Har recursive function ke **exactly 3 parts** hote hain. Ek bhi miss hua toh function galat ya infinite hoga.


#### Part 1 — Base Case (🛑 The Stopping Condition)
- **Kya hai:** Wo simplest condition jahan recursion ruk jaata hai aur direct answer return hota hai without any recursive call.
- **Kyu zaroori hai:** Base case nahi hoga toh function infinitely call hota rahega jab tak Stack Overflow na aa jaye.
- **Real Rule:** Sochna hai — "Sabse simple possible input kya hoga jiske liye mujhe directly answer pata hai?"

\`\`\`python
# Factorial ke liye base case:
def factorial(n):
    if n == 0 or n == 1:
        return 1   # ✅ Direct answer, no recursive call needed
\`\`\`

#### Part 2 — Recursive Case (🔄 The Self-Call)
- **Kya hai:** Problem ko choti subproblem me todke apne aap ko call karna.
- **Golden Rule:** Har recursive call me problem **thodi choti** honi chahiye — warna kabhi base case reach nahi hoga.
- **Shrinkage Guarantee:** n → n-1 (linear), n → n/2 (logarithmic), n → two halves (divide & conquer).

\`\`\`python
# Factorial ka recursive case:
def factorial(n):
    if n <= 1: return 1
    return n * factorial(n - 1)  # 🔄 n se n-1 tak shrink ho raha hai
\`\`\`

#### Part 3 — Return / Combine (📦 Build the Answer)
- **Kya hai:** Jab recursive call se answer wapas aata hai, use current level ke data ke sath combine karke upar return karna.
- **2 Flavors:**
  - **Pre-order work:** Kuch karo BEFORE recursive call (e.g. print before going deep).
  - **Post-order work:** Kuch karo AFTER recursive call returns (e.g. multiply AFTER factorial returns).

\`\`\`python
# Full Factorial — Teen parts ek saath:
def factorial(n):
    if n <= 1:                      # Part 1: Base Case
        return 1
    result = factorial(n - 1)       # Part 2: Recursive Call (waits here)
    return n * result               # Part 3: Combine — multiply after return ⬆️

print(factorial(4))   # Output: 24
\`\`\`

---

### 4. Call Stack Mechanics — Exactly Kya Hota Hai Memory Me?
Jab bhi ek recursive function call hota hai, CPU **Call Stack** par ek naya **Stack Frame** push karta hai.

#### Stack Frame Me Kya Hota Hai?
- Function ke **local variables** (e.g. \`n\`, \`acc\`)
- Function ke **parameters**
- **Return address** (ye next frame kaha jayega return karne ke baad)

#### factorial(4) Ka Call Stack — Flowchart + Code

**📊 PART 1: Visual Flowchart (Kya hota hai step-by-step)**

\`\`\`
 START: factorial(4) called
        │
        ▼
┌─────────────────────────────────────────────┐
│  WINDING PHASE ⬇️ (Frames Push karte hain)  │
└─────────────────────────────────────────────┘
        │
        ▼
  ┌─────────────────────────────────┐
  │ FRAME 4: factorial(4)           │
  │   n=4 → is 4 <= 1? NO           │
  │   → calls factorial(3)... wait  │
  └─────────────────────────────────┘
        │ (calls)
        ▼
  ┌─────────────────────────────────┐
  │ FRAME 3: factorial(3)           │
  │   n=3 → is 3 <= 1? NO           │
  │   → calls factorial(2)... wait  │
  └─────────────────────────────────┘
        │ (calls)
        ▼
  ┌─────────────────────────────────┐
  │ FRAME 2: factorial(2)           │
  │   n=2 → is 2 <= 1? NO           │
  │   → calls factorial(1)... wait  │
  └─────────────────────────────────┘
        │ (calls)
        ▼
  ┌─────────────────────────────────┐
  │ FRAME 1: factorial(1)           │
  │   n=1 → is 1 <= 1? ✅ YES       │
  │   → return 1  (BASE CASE HIT!)  │
  └─────────────────────────────────┘
        │ (returns 1)
        ▼
┌─────────────────────────────────────────────┐
│  UNWINDING PHASE ⬆️ (Frames Pop karte hain) │
└─────────────────────────────────────────────┘
        │
        ▼
  ┌─────────────────────────────────┐
  │ FRAME 2: factorial(2) resumes   │
  │   n=2, got 1 back               │
  │   → return 2 * 1 = 2            │
  └─────────────────────────────────┘
        │ (returns 2)
        ▼
  ┌─────────────────────────────────┐
  │ FRAME 3: factorial(3) resumes   │
  │   n=3, got 2 back               │
  │   → return 3 * 2 = 6            │
  └─────────────────────────────────┘
        │ (returns 6)
        ▼
  ┌─────────────────────────────────┐
  │ FRAME 4: factorial(4) resumes   │
  │   n=4, got 6 back               │
  │   → return 4 * 6 = 24           │
  └─────────────────────────────────┘
        │
        ▼
   FINAL ANSWER: 24 ✅
\`\`\`

---

**💻 PART 2: Actual Code (Har step code me kahan hai)**

\`\`\`python
def factorial(n):
    # ─────────────────────────────────────────
    # BASE CASE: Sabse chhota input ka direct answer
    # Ye condition TRUE hone par stack UNWIND hona shuru hota hai
    # ─────────────────────────────────────────
    if n <= 1:
        return 1          # Frame 1: factorial(1) → returns 1

    # ─────────────────────────────────────────
    # RECURSIVE CASE: Apne aap ko chote input ke saath call karo
    # Ye line execute hone par ek naya FRAME stack pe PUSH hota hai
    # Current frame yahan RUKA REHTA HAI — jab tak recursive call return na kare
    # ─────────────────────────────────────────
    result = factorial(n - 1)
    #         ↑ Ye call return hone ke baad NEECHE ki line chalti hai

    # ─────────────────────────────────────────
    # COMBINE: Recursive call ka answer wapas aaya → ab multiply karo
    # Ye UNWINDING phase me hota hai (stack se pop hote waqt)
    # ─────────────────────────────────────────
    return n * result
    # Frame 2: return 2 * 1 = 2
    # Frame 3: return 3 * 2 = 6
    # Frame 4: return 4 * 6 = 24  ← Final answer!


# ─── How to call ───
print(factorial(4))   # Output: 24
\`\`\`

> 💡 **Key Insight:** Recursion ke 2 phases hote hain:
> - **Winding Phase ⬇️ (Call):** Jab tak base case nahi aata, stack pe frames push hote rehte hain.
> - **Unwinding Phase ⬆️ (Return):** Base case ke baad, frames pop hoke answer combine hota hai.

> ⚠️ **StackOverflowError Kab Hota Hai?**
> Agar \`n\` bahut bada ho (e.g. n = 100,000) ya base case miss ho, toh Call Stack ki fixed limit (typically 1MB-8MB) exceed ho jati hai → **StackOverflowError crash!**

---

### 5. 4 Major Types of Recursion — Deep Dive

\`\`\`diagram:recursion-types
\`\`\`

#### Type 1: Tail Recursion (⚡ Fastest & Most Memory-Efficient)
- **Definition:** Function ki **sabse aakhri operation** ek recursive call hoti hai — koi pending computation nahi hoti return ke baad.
- **Why Special:** Compiler is pattern ko detect karke **Tail Call Optimization (TCO)** apply karta hai — stack frame create karne ki zaroorat nahi, ek hi frame reuse hota hai.
- **Space Complexity:** O(1) with TCO (vs O(N) without)
- **Key Trick:** Ek **accumulator** variable use karo jo running result hold kare.

\`\`\`python
# ❌ Non-Tail (Head) Recursion — pending multiplication on stack
def factorial_head(n):
    if n <= 1: return 1
    return n * factorial_head(n - 1)  # n * ? — pending work after call!

# ✅ Tail Recursion — accumulator carries result
def factorial_tail(n, acc=1):
    if n <= 1: return acc            # Base case returns accumulated result
    return factorial_tail(n - 1, acc * n)  # Pure tail call, no pending work!

# Call trace: factorial_tail(4, 1)
# → factorial_tail(3, 4)   → factorial_tail(2, 12)   → factorial_tail(1, 24) → 24
\`\`\`

> 💡 **Interview Note:** Python does NOT implement TCO by default (CPython limitation). Java doesn't either. But understanding TCO pattern is important for interviews and languages like Scala, Haskell, Kotlin.

---

#### Type 2: Head / Linear Recursion (📋 Most Common in Interviews)
- **Definition:** Recursive call pehle hoti hai, aur uske return ke BAAD current frame me koi computation hoti hai.
- **Stack Behavior:** Har call ek frame push karta hai, return par computation hoti hai (Unwinding phase me kaam hota hai).
- **Space Complexity:** O(N) — N frames ek saath stack par hote hain.

\`\`\`python
# Head Recursion — work happens AFTER recursive call returns
def print_reverse(n):
    if n == 0: return      # Base case
    print_reverse(n - 1)   # Recursive call FIRST
    print(n)               # Work happens AFTER — prints 1,2,3,4,5 (reverse)

# vs print_forward(n) — work happens BEFORE
def print_forward(n):
    if n == 0: return
    print(n)               # Work happens BEFORE — prints 5,4,3,2,1
    print_forward(n - 1)   # Recursive call AFTER
\`\`\`

---

#### Type 3: Tree / Binary Recursion (🌳 Divide & Conquer Core)
- **Definition:** Ek function ke body me **2 ya zyada** recursive calls hoti hain — ek binary tree jaisa structure ban jaata hai.
- **Why Tree-Shaped:** Har call 2 naye calls generate karta hai → exponential branching.
- **Space Complexity:** O(H) — sirf ek path (Height) ek saath stack par hota hai.
- **Time Complexity:** O(2^N) naive case, but can be optimized with memoization.

\`\`\`python
# Tree Recursion — fib(4) tree:
#           fib(4)
#          /       \\
#       fib(3)    fib(2)
#       /    \\    /    \\
#    fib(2) fib(1) fib(1) fib(0)
#    /    \\
# fib(1) fib(0)

def fib_naive(n):        # O(2^N) time, O(N) space
    if n <= 1: return n
    return fib_naive(n - 1) + fib_naive(n - 2)  # TWO recursive calls!

def fib_memo(n, memo={}):  # O(N) time, O(N) space (Memoized)
    if n <= 1: return n
    if n in memo: return memo[n]
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]
\`\`\`

**Recursion Tree ka Total Work Count:**
- Level 0: 1 node × O(1) = O(1)
- Level 1: 2 nodes × O(1) = O(2)
- Level k: 2^k nodes × O(1) = O(2^k)
- Total levels = N → **Total work = O(2^N)**

---

#### Type 4: Nested / Mutual Recursion (🔄 Advanced Pattern)
- **Definition:** Function A, Function B ko call karta hai, aur B wapas A ko call karta hai. Ya parameter ke andar hi recursive call pass hoti hai (Ackermann function).

\`\`\`python
# Mutual Recursion: is_even ↔ is_odd
def is_even(n):
    if n == 0: return True
    return is_odd(n - 1)    # calls is_odd

def is_odd(n):
    if n == 0: return False
    return is_even(n - 1)   # calls is_even back!

# Nested Recursion (Ackermann - grows EXTREMELY fast)
def ackermann(m, n):
    if m == 0: return n + 1
    if n == 0: return ackermann(m - 1, 1)
    return ackermann(m - 1, ackermann(m, n - 1))  # Nested call as parameter!
\`\`\`

---

### 6. Recursion Tree Method — Complexity Calculate Karna
Recursion tree draw karo aur **total work count karo** — ye interviews me sabse reliable method hai.

**Steps:**
1. Tree Draw Karo
2. Har Level ka Work Count Karo
3. Total Levels Count Karo
4. Sab Add Karo

**Example: Merge Sort ka Complexity nikalna**

\`\`\`diagram:merge-sort-tree
\`\`\`

\`\`\`python
# Merge Sort — Full Implementation (O(N log N) time, O(N) space)
def merge_sort(arr):
    if len(arr) <= 1:             # Base Case: single element → already sorted
        return arr

    mid = len(arr) // 2
    left  = merge_sort(arr[:mid])   # Recursive call on left half  ⬇️ Divide
    right = merge_sort(arr[mid:])   # Recursive call on right half ⬇️ Divide

    return merge(left, right)       # Combine the two sorted halves ⬆️ Conquer

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])   # Remaining elements
    result.extend(right[j:])
    return result

# Test
arr = [38, 27, 43, 3, 9, 82, 10]
print(merge_sort(arr))  # [3, 9, 10, 27, 38, 43, 82]
\`\`\`

---

### 7. The 3 Golden Rules for Recursion in Interviews

**Rule 1 — Trust the Recursion (Leap of Faith):**
Jab tum recursive function likhte ho, assume karo ki \`f(n-1)\` **pehle se sahi kaam kar raha hai**. Tumhara kaam sirf ye define karna hai ki \`f(n)\` kya karta hai \`f(n-1)\` ke result ko lekar.

**Rule 2 — Base Case Pehle Socho:**
Pehle sochna hai — "Sabse chota input kya hoga jahan mujhe directly answer pata hai?" Ye hi base case hai. Fir sochna hai recursive case.

**Rule 3 — Shrinkage Guarantee:**
Har recursive call me input **measurably chota** hona chahiye (n → n-1, n → n//2, list → smaller list), tabhi base case kabhi na kabhi reach hoga.

---

### 8. How to Approach Any Recursion Problem (Interview Framework)

**Step 1 — Define the Function:**
"Ye function exactly kya karta hai? Input kya hai, output kya hai?" — Clearly define karo.

**Step 2 — Find the Base Case:**
"Sabse simple possible input kya hai jaha directly answer return kar sakta hoon bina recursive call ke?"

**Step 3 — Find the Recursive Case:**
"Agar mujhe f(n-1) ka answer pata ho (assume karo), toh f(n) ka answer kaise nikaloonga?"

**Step 4 — Draw the Recursion Tree:**
Ek small example ke liye (n=3 ya n=4) manually tree draw karo aur trace karo.

**Step 5 — Calculate Complexity:**
Tree ka use karke Time and Space complexity nikalo.

\`\`\`python
# Interview Approach Example: Power Set (All Subsets)

# Step 1: subsets(nums) returns list of all possible subsets
# Step 2: Base case — when start == len(nums), add current path to result
# Step 3: At each position, two choices: include element OR skip it
# Step 4: Tree for [1,2,3]:
#              []
#            /    \\
#          [1]     []        → include or skip 1
#         /  \\    /  \\
#       [1,2] [1] [2] []   → include or skip 2
# Step 5: O(2^N) time, O(N) space

def subsets(nums):
    result = []
    def backtrack(start, path):
        result.append(path[:])          # Record current subset
        for i in range(start, len(nums)):
            path.append(nums[i])        # Include nums[i]
            backtrack(i + 1, path)      # Explore with it included
            path.pop()                  # Exclude nums[i] (backtrack)
    backtrack(0, [])
    return result
\`\`\`

---

### 9. Common Recursion Patterns (Cheat Sheet)

| Pattern | When to Use | Key Idea | Example Problems |
| :--- | :--- | :--- | :--- |
| **Linear Recursion** | Linked list, simple sequence | n → n-1, single call | Factorial, Reverse String |
| **Binary Recursion** | Divide & Conquer | n → two halves | Merge Sort, Fibonacci, Binary Search |
| **Tail Recursion** | When accumulator possible | Pass result as param | Factorial with acc |
| **Tree DFS Recursion** | Tree traversal | Node → left & right children | Inorder, Preorder, Height |
| **Backtracking** | All possibilities | Choose, Explore, Un-choose | Subsets, Permutations, N-Queens |
| **Memoized Recursion** | Overlapping subproblems | Cache results in dict/array | Fibonacci, Coin Change, Climbing Stairs |

---

### 10. Memoization — Recursion + Caching = Dynamic Programming Gateway

**Problem with Naive Tree Recursion:**
\`fib(5)\` calls \`fib(3)\` TWICE — wasteful repeated work!

**Solution — Memoize:** Store each result once it's computed. If same input seen again, return cached result instantly.

\`\`\`python
# Without Memoization — O(2^N) redundant calls
def fib(n):
    if n <= 1: return n
    return fib(n-1) + fib(n-2)

# With Memoization — O(N) unique calls only
def fib_memo(n, memo={}):
    if n <= 1: return n
    if n in memo: return memo[n]      # Cache hit! Instant return.
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]

# Clean Version using @lru_cache decorator
from functools import lru_cache

@lru_cache(maxsize=None)
def fib_lru(n):
    if n <= 1: return n
    return fib_lru(n-1) + fib_lru(n-2)

# Complexity Comparison:
# fib(40) naive    → ~2.7 billion calls (extremely slow)
# fib(40) memoized → 40 unique calls   (instant)
\`\`\`

**Memoized Recursion = Top-Down Dynamic Programming!**
Ye DP ka first step hai — recursive solution likho → memoize karo → phir optional: bottom-up DP table banao.
                        `,
                        code_example: {
                            language: "multi",
                            python: `# Python — Complete Recursion Patterns Masterclass
from functools import lru_cache

# ============================================================
# PATTERN 1: Linear Recursion — Factorial (O(N) time, O(N) space)
# ============================================================
def factorial(n):
    # Base Case: direct answer for simplest input
    if n <= 1:
        return 1
    # Recursive Case: shrink n → n-1, combine with n
    return n * factorial(n - 1)

# Tail Recursive version (O(1) space conceptually with TCO)
def factorial_tail(n, acc=1):
    if n <= 1: return acc
    return factorial_tail(n - 1, acc * n)  # Pure tail call

# ============================================================
# PATTERN 2: Binary Recursion — Merge Sort (O(N log N), O(N))
# ============================================================
def merge_sort(arr):
    # Base Case: array of 0 or 1 elements is already sorted
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    # Recursive Case: sort left half AND right half separately
    left = merge_sort(arr[:mid])    # First recursive call
    right = merge_sort(arr[mid:])   # Second recursive call
    return merge(left, right)       # Combine results

def merge(left, right):
    result, i, j = [], 0, 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# ============================================================
# PATTERN 3: Memoized Recursion — Fibonacci (O(N), O(N))
# ============================================================
@lru_cache(maxsize=None)
def fib(n):
    # Base Case: fib(0)=0, fib(1)=1
    if n <= 1: return n
    # Recursive Case with caching
    return fib(n - 1) + fib(n - 2)

# ============================================================
# PATTERN 4: Backtracking — All Subsets (O(2^N), O(N))
# ============================================================
def subsets(nums):
    result = []
    def backtrack(start, path):
        result.append(path[:])          # Record current state
        for i in range(start, len(nums)):
            path.append(nums[i])        # CHOOSE
            backtrack(i + 1, path)      # EXPLORE
            path.pop()                  # UN-CHOOSE (backtrack)
    backtrack(0, [])
    return result

# ============================================================
# PATTERN 5: Tree DFS Recursion — Height of Binary Tree (O(N), O(H))
# ============================================================
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

def tree_height(root):
    # Base Case: empty tree has height 0
    if root is None: return 0
    # Recursive Case: height = 1 + max(left_height, right_height)
    left_h = tree_height(root.left)    # Recurse left subtree
    right_h = tree_height(root.right)  # Recurse right subtree
    return 1 + max(left_h, right_h)   # Combine

# ============================================================
# PATTERN 6: Divide & Conquer — Binary Exponentiation (O(log N), O(log N))
# ============================================================
def my_pow(x, n):
    # Base Case
    if n == 0: return 1.0
    if n < 0: x, n = 1.0 / x, -n
    # Recursive Case: divide exponent in half each time
    half = my_pow(x, n // 2)
    if n % 2 == 0:
        return half * half          # Even: x^n = (x^(n/2))^2
    else:
        return half * half * x      # Odd:  x^n = (x^(n/2))^2 * x`,
                            java: `// Java — Complete Recursion Patterns Masterclass
// ✅ Proper Java syntax: class, return types, main method, actual calls
import java.util.*;

public class RecursionPatterns {

    // ============================================================
    // PATTERN 1: Linear Recursion — Factorial (O(N) time, O(N) space)
    // ============================================================
    // Return type: long  |  Parameter: int n
    public long factorial(int n) {
        // Base Case: simplest input → direct answer
        if (n <= 1) return 1L;
        // Recursive Case: n * factorial(n-1)
        return (long) n * factorial(n - 1);
    }

    // Tail Recursive Version: accumulator parameter carry karta hai result
    public long factorialTail(int n, long acc) {
        if (n <= 1) return acc;
        return factorialTail(n - 1, acc * n); // Pure tail call
    }

    // ============================================================
    // PATTERN 2: Binary Recursion — Merge Sort (O(N log N), O(N))
    // ============================================================
    public void mergeSort(int[] arr, int left, int right) {
        // Base Case: single element already sorted
        if (left >= right) return;
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);       // Sort left half
        mergeSort(arr, mid + 1, right);  // Sort right half
        merge(arr, left, mid, right);    // Combine both halves
    }

    private void merge(int[] arr, int left, int mid, int right) {
        int[] temp = new int[right - left + 1];
        int i = left, j = mid + 1, k = 0;
        while (i <= mid && j <= right)
            temp[k++] = (arr[i] <= arr[j]) ? arr[i++] : arr[j++];
        while (i <= mid)  temp[k++] = arr[i++];
        while (j <= right) temp[k++] = arr[j++];
        System.arraycopy(temp, 0, arr, left, temp.length);
    }

    // ============================================================
    // PATTERN 3: Memoized Recursion — Fibonacci (O(N), O(N))
    // ============================================================
    private Map<Integer, Long> memo = new HashMap<>();

    public long fib(int n) {
        if (n <= 1) return n;                         // Base Case
        if (memo.containsKey(n)) return memo.get(n); // Cache hit!
        long result = fib(n - 1) + fib(n - 2);
        memo.put(n, result);                          // Cache result
        return result;
    }

    // ============================================================
    // PATTERN 4: Backtracking — All Subsets (O(2^N), O(N))
    // ============================================================
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(0, nums, new ArrayList<>(), result);
        return result;
    }

    private void backtrack(int start, int[] nums, List<Integer> path,
                           List<List<Integer>> result) {
        result.add(new ArrayList<>(path));        // Record current state
        for (int i = start; i < nums.length; i++) {
            path.add(nums[i]);                    // CHOOSE
            backtrack(i + 1, nums, path, result); // EXPLORE
            path.remove(path.size() - 1);         // UN-CHOOSE (backtrack)
        }
    }

    // ============================================================
    // PATTERN 5: Tree DFS Recursion — Height of Binary Tree (O(N), O(H))
    // ============================================================
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) { this.val = val; }
    }

    public int treeHeight(TreeNode root) {
        if (root == null) return 0;              // Base Case: null → height 0
        int leftH  = treeHeight(root.left);     // Recurse left
        int rightH = treeHeight(root.right);    // Recurse right
        return 1 + Math.max(leftH, rightH);     // Combine
    }

    // ============================================================
    // PATTERN 6: Divide & Conquer — Binary Exponentiation (O(log N))
    // ============================================================
    public double myPow(double x, int n) {
        long N = n;
        if (N < 0) { x = 1.0 / x; N = -N; }
        return binaryPow(x, N);
    }

    private double binaryPow(double x, long n) {
        if (n == 0) return 1.0;               // Base Case
        double half = binaryPow(x, n / 2);   // Halve the exponent
        return (n % 2 == 0) ? half * half : half * half * x;
    }

    // ============================================================
    // MAIN METHOD — Entry point: actual calls & outputs
    // ============================================================
    public static void main(String[] args) {
        RecursionPatterns rp = new RecursionPatterns();

        // Pattern 1: Factorial
        System.out.println("factorial(5)     = " + rp.factorial(5));       // 120
        System.out.println("factorialTail(5) = " + rp.factorialTail(5, 1)); // 120

        // Pattern 2: Merge Sort
        int[] arr = {5, 3, 8, 1, 2};
        rp.mergeSort(arr, 0, arr.length - 1);
        System.out.println("mergeSort result  = " + Arrays.toString(arr)); // [1,2,3,5,8]

        // Pattern 3: Fibonacci (memoized)
        System.out.println("fib(10)          = " + rp.fib(10));            // 55

        // Pattern 4: Subsets
        int[] nums = {1, 2, 3};
        System.out.println("subsets([1,2,3]) = " + rp.subsets(nums));      // 8 subsets

        // Pattern 5: Tree Height
        TreeNode root = new TreeNode(1);
        root.left  = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        System.out.println("treeHeight       = " + rp.treeHeight(root));   // 3

        // Pattern 6: Power
        System.out.println("2^10             = " + rp.myPow(2, 10));       // 1024.0
    }
}`
                        },
                        complexity: {
                            time: "O(N) linear | O(log N) binary pow | O(N log N) merge sort | O(2^N) naive tree",
                            space: "O(N) call stack depth (linear) | O(log N) divide & conquer | O(H) tree DFS"
                        },
                        practice_questions: [
                            { title: "Fibonacci Number (LeetCode #509) — Classic Tree Recursion + Memoization", difficulty: "Easy", url: "https://leetcode.com/problems/fibonacci-number/" },
                            { title: "Climbing Stairs (LeetCode #70) — Fibonacci Pattern with Memoization", difficulty: "Easy", url: "https://leetcode.com/problems/climbing-stairs/" },
                            { title: "Reverse Linked List (Recursive) (LeetCode #206) — Head Recursion on Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/reverse-linked-list/" },
                            { title: "Merge Two Sorted Lists (LeetCode #21) — Linear Recursion + Combine", difficulty: "Easy", url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
                            { title: "Maximum Depth of Binary Tree (LeetCode #104) — Tree DFS Recursion", difficulty: "Easy", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
                            { title: "Pow(x, n) (LeetCode #50) — Divide & Conquer Binary Exponentiation", difficulty: "Medium", url: "https://leetcode.com/problems/powx-n/" },
                            { title: "Subsets (LeetCode #78) — Backtracking + Recursion Tree", difficulty: "Medium", url: "https://leetcode.com/problems/subsets/" },
                            { title: "Permutations (LeetCode #46) — All Orderings via Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/permutations/" },
                            { title: "K-th Symbol in Grammar (LeetCode #779) — Binary Recursion Pattern", difficulty: "Medium", url: "https://leetcode.com/problems/k-th-symbol-in-grammar/" },
                            { title: "Decode Ways (LeetCode #91) — Memoized Recursion (DP Gateway)", difficulty: "Medium", url: "https://leetcode.com/problems/decode-ways/" }
                        ]
                    },
                    {
                        id: "topic-backtracking-basics",
                        title: "Backtracking Basics (3 Types & State Trees)",
                        slug: "backtracking-basics",
                        difficulty: "Medium",
                        description: "Master the 3 types of backtracking problems, Decision State Trees, Pruning, and the Choose-Explore-Unchoose blueprint.",
                        video: {
                            url: "https://www.youtube.com/watch?v=DKCbsiDBN6c",
                            title: "Backtracking Algorithm Architecture & Blueprint",
                            start_seconds: 0,
                            end_seconds: 650,
                            chapters: [
                                { title: "What is Backtracking?", start_seconds: 0 },
                                { title: "3 Types of Backtracking Problems", start_seconds: 140 },
                                { title: "Universal Choose-Explore-Unchoose Pattern", start_seconds: 280 },
                                { title: "Decision Tree Construction & Pruning", start_seconds: 460 }
                            ]
                        },
                        explanation: `
### 💡 What is Backtracking?
Backtracking ek smart Brute-Force search technique hai jo candidate solutions ko incrementally banati hai. Jaise hi pata chalta hai ki current state se valid solution nahi ban sakta, yeh turant **piche lautkar (backtrack karke)** doosra branch explore karti hai.

### 🏷️ 3 Core Types of Backtracking Problems

\`\`\`diagram:backtracking-types
\`\`\`

1. **Decision Problems (Boolean True/False)**: Check karna ki koi target valid path exist karta hai ya nahi (e.g. Word Search, Rat in a Maze, Sudoku Solver). *Pehla solution milte hi return true kar do!*
2. **Enumeration Problems (Find ALL Solutions)**: Saare possible combinations, permutations ya subsets collect karna (e.g. Subsets, Permutations, N-Queens).
3. **Optimization Problems (Find BEST Metric)**: Constraints ke under Minimum ya Maximum cost path dhoondhna.

### 🔄 The Universal 3-Step Backtracking Blueprint

\`\`\`
         State []
        /        \\
    Pick 1      Pick 2
     /             \\
 State [1]       State [2]
    |               |
 Undo 1          Undo 2
\`\`\`

1. **CHOOSE**: Ek candidate element pick karke current state list me add karo (\`path.append(choice)\`).
2. **EXPLORE**: Next level solution dhoondhne ke liye recursively aage badho (\`backtrack(next_index, path)\`).
3. **UN-CHOOSE (BACKTRACK)**: Return aate hi state restore karne ke liye remove karo (\`path.pop()\`).

### 💻 Code Implementations for Backtracking Types

\`\`\`python
# Type 1: Enumeration (Find All Subsets)
def subsets(nums: list[int]) -> list[list[int]]:
    result = []
    def backtrack(start: int, path: list[int]):
        result.append(list(path))
        for i in range(start, len(nums)):
            path.append(nums[i])          # 1. CHOOSE
            backtrack(i + 1, path)         # 2. EXPLORE
            path.pop()                     # 3. UN-CHOOSE (Backtrack)
    backtrack(0, [])
    return result

# Type 2: Decision Problem (Word Search Grid DFS)
def exist(board: list[list[str]], word: str) -> bool:
    rows, cols = len(board), len(board[0])
    def dfs(r, c, k):
        if k == len(word): return True
        if r < 0 or r >= rows or c < 0 or c >= cols or board[r][c] != word[k]:
            return False
        
        temp, board[r][c] = board[r][c], '#'  # 1. CHOOSE (Mark visited)
        found = (dfs(r+1,c,k+1) or dfs(r-1,c,k+1) or dfs(r,c+1,k+1) or dfs(r,c-1,k+1)) # 2. EXPLORE
        board[r][c] = temp                    # 3. UN-CHOOSE (Restore state)
        return found

    for i in range(rows):
        for j in range(cols):
            if dfs(i, j, 0): return True
    return False
\`\`\`
                        `,
                        code_example: {
                            language: "multi",
                            python: `# Type 3: Constraint Satisfaction - N-Queens (Python)
def solve_n_queens(n):
    cols = set(); pos_diag = set(); neg_diag = set()
    result = []
    board = [["."] * n for _ in range(n)]

    def backtrack(r):
        if r == n:
            result.append(["".join(row) for row in board])
            return

        for c in range(n):
            if c in cols or (r + c) in pos_diag or (r - c) in neg_diag:
                continue
            cols.add(c); pos_diag.add(r + c); neg_diag.add(r - c)
            board[r][c] = "Q"
            backtrack(r + 1)
            cols.remove(c); pos_diag.remove(r + c); neg_diag.remove(r - c)
            board[r][c] = "."
    backtrack(0)
    return result`,
                            java: `// Type 3: Constraint Satisfaction - N-Queens (Java 8)
import java.util.*;

public class Solution {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> result = new ArrayList<>();
        char[][] board = new char[n][n];
        for (int i = 0; i < n; i++) Arrays.fill(board[i], '.');
        
        Set<Integer> cols = new HashSet<>(), posDiag = new HashSet<>(), negDiag = new HashSet<>();
        
        backtrack(0, n, board, cols, posDiag, negDiag, result);
        return result;
    }

    private void backtrack(int r, int n, char[][] board, Set<Integer> cols, 
                          Set<Integer> posDiag, Set<Integer> negDiag, List<List<String>> result) {
        if (r == n) {
            List<String> current = new ArrayList<>();
            for (char[] row : board) current.add(new String(row));
            result.add(current);
            return;
        }

        for (int c = 0; c < n; c++) {
            if (cols.contains(c) || posDiag.contains(r + c) || negDiag.contains(r - c)) continue;
            cols.add(c); posDiag.add(r + c); negDiag.add(r - c);
            board[r][c] = 'Q';
            backtrack(r + 1, n, board, cols, posDiag, negDiag, result);
            cols.remove(c); posDiag.remove(r + c); negDiag.remove(r - c);
            board[r][c] = '.';
        }
    }
}`
                        },
                        complexity: {
                            time: "O(2^N) for subsets, O(N!) for permutations & N-Queens",
                            space: "O(N) recursion call stack depth"
                        },
                        practice_questions: [
                            { title: "Subsets (LeetCode #78)", difficulty: "Medium", url: "https://leetcode.com/problems/subsets/" },
                            { title: "Permutations (LeetCode #46)", difficulty: "Medium", url: "https://leetcode.com/problems/permutations/" },
                            { title: "Combination Sum (LeetCode #39)", difficulty: "Medium", url: "https://leetcode.com/problems/combination-sum/" },
                            { title: "Generate Parentheses (LeetCode #22)", difficulty: "Medium", url: "https://leetcode.com/problems/generate-parentheses/" },
                            { title: "Letter Combinations of a Phone Number (LeetCode #17)", difficulty: "Medium", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
                            { title: "N-Queens (LeetCode #51)", difficulty: "Hard", url: "https://leetcode.com/problems/n-queens/" }
                        ]
                    },
                    {
                        id: "topic-recurrence-relations",
                        title: "Recurrence Relations (3 Solving Methods & Master Theorem)",
                        slug: "recurrence-relations",
                        difficulty: "Medium",
                        description: "Master recurrence equations via 3 methods: Master Theorem, Recursion Tree Method, and Substitution Method.",
                        video: {
                            url: "https://www.youtube.com/watch?v=2T-A_3vwG3o",
                            title: "Master Theorem & Solving Recurrence Relations",
                            start_seconds: 0,
                            end_seconds: 600,
                            chapters: [
                                { title: "What is a Recurrence Relation?", start_seconds: 0 },
                                { title: "3 Solving Methods (Tree, Master, Substitution)", start_seconds: 160 },
                                { title: "Master Theorem Formula & 3 Cases", start_seconds: 320 },
                                { title: "Real Algorithm Derivations (Merge Sort, Binary Search)", start_seconds: 460 }
                            ]
                        },
                        explanation: `
### 💡 What is a Recurrence Relation?
Ek recursive algorithm ka runtime calculate karne ke liye hum use ek mathematical equation ke roop me formulate karte hain jise **Recurrence Relation** kehte hain.

### 🏷️ 3 Major Methods to Solve Recurrence Relations
1. **Master Theorem Method (Instant Formula)**: Divide & conquer recurrences ke liye sabse fast formula.
2. **Recursion Tree Method (Visual Summation)**: Har level ka work calculate karke tree height se multiply karna.
3. **Substitution Method (Mathematical Induction)**: Pehle guess lagana fir induction se prove karna.

### 🌳 Method 1: Recursion Tree Visualization (Merge Sort)

\`\`\`diagram:divide-and-conquer-tree
\`\`\`

### 📐 Method 2: Master Theorem Standard Formula
Jab recurrence equation is form me ho:
**\`T(N) = a * T(N / b) + O(N^d)\`**
- **\`a\`**: Subproblems generated at each step (\`a >= 1\`).
- **\`b\`**: Division factor of input size (\`b > 1\`).
- **\`d\`**: Work degree outside recursion (split / combine cost).

| Case Condition | Mathematical Result | Real Algorithm Example |
| :--- | :--- | :--- |
| **Case 1: \`d < log_b(a)\`** | **\`O(N^(log_b(a)))\`** | Strassen Matrix Multiplication (\`T(N)=7T(N/2)+O(N²)\` ➔ \`O(N^2.81)\`) |
| **Case 2: \`d == log_b(a)\`** | **\`O(N^d * log N)\`** | Merge Sort (\`T(N)=2T(N/2)+O(N)\` ➔ \`O(N log N)\`), Binary Search (\`T(N)=1T(N/2)+O(1)\` ➔ \`O(log N)\`) |
| **Case 3: \`d > log_b(a)\`** | **\`O(N^d)\`** | QuickSelect / Linear Partitioning (\`T(N)=T(N/2)+O(N)\` ➔ \`O(N)\`) |

### 💻 Code Implementations of Solved Recurrences

\`\`\`python
# 1. Binary Search: T(N) = 1*T(N/2) + O(1) -> O(log N)
def binary_search_rec(arr, low, high, target):
    if low > high: return -1
    mid = (low + high) // 2
    if arr[mid] == target: return mid
    elif arr[mid] > target: return binary_search_rec(arr, low, mid - 1, target)
    else: return binary_search_rec(arr, mid + 1, high, target)

# 2. Merge Sort: T(N) = 2*T(N/2) + O(N) -> O(N log N)
def merge_sort(arr):
    if len(arr) <= 1: return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])    # T(N/2)
    right = merge_sort(arr[mid:])   # T(N/2)
    return merge(left, right)       # O(N) combine step
\`\`\`
                        `,
                        code_example: {
                            language: "multi",
                            python: `# Complete Recurrence Reference Examples
# Case 2 Example: Merge Sort (T(N)=2T(N/2)+O(N) -> O(N log N))
def merge_sort_demo(arr):
    if len(arr) <= 1: return arr
    mid = len(arr) // 2
    return sorted(arr)`,
                            java: `// Java 8 Solution: Merge Sort (T(N) = 2T(N/2) + O(N) -> O(N log N))
import java.util.*;

public class Solution {
    public int[] sortArray(int[] nums) {
        if (nums.length <= 1) return nums;
        mergeSort(nums, 0, nums.length - 1);
        return nums;
    }

    private void mergeSort(int[] arr, int l, int r) {
        if (l >= r) return;
        int mid = l + (r - l) / 2;
        mergeSort(arr, l, mid);
        mergeSort(arr, mid + 1, r);
        merge(arr, l, mid, r);
    }

    private void merge(int[] arr, int l, int mid, int r) {
        int[] temp = new int[r - l + 1];
        int i = l, j = mid + 1, k = 0;
        while (i <= mid && j <= r) temp[k++] = (arr[i] <= arr[j]) ? arr[i++] : arr[j++];
        while (i <= mid) temp[k++] = arr[i++];
        while (j <= r) temp[k++] = arr[j++];
        System.arraycopy(temp, 0, arr, l, temp.length);
    }
}`
                        },
                        complexity: {
                            time: "Analytical Mathematical Derivation via Master Theorem",
                            space: "O(log N) to O(N) call tree depth"
                        },
                        practice_questions: [
                            { title: "Sort an Array (Merge Sort O(N log N)) (LeetCode #912)", difficulty: "Medium", url: "https://leetcode.com/problems/sort-an-array/" },
                            { title: "Kth Largest Element in an Array (QuickSelect O(N)) (LeetCode #215)", difficulty: "Medium", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
                            { title: "Majority Element (Divide & Conquer) (LeetCode #169)", difficulty: "Easy", url: "https://leetcode.com/problems/majority-element/" },
                            { title: "Search a 2D Matrix II (LeetCode #240)", difficulty: "Medium", url: "https://leetcode.com/problems/search-a-2d-matrix-ii/" }
                        ]
                    },
                    {
                        id: "topic-stl-collections",
                        title: "Language STL & Built-in Collections Internals (C++, Java & Python)",
                        slug: "stl-collections-internals",
                        difficulty: "Easy",
                        description: "Master internal data structures, exact Time/Space complexities of vectors, hash maps, priority queues, and custom comparators for Google interviews.",
                        video: {
                            url: "https://www.youtube.com/watch?v=R5PEu0p_c_A",
                            title: "C++ STL, Java Collections & Python Internals for Interviews",
                            start_seconds: 0,
                            end_seconds: 720,
                            chapters: [
                                { title: "Why STL & Collections Internals Matter in Interviews", start_seconds: 0 },
                                { title: "Vectors, ArrayLists & Python Lists Dynamic Resizing", start_seconds: 120 },
                                { title: "HashMaps vs TreeMaps (Hash Table vs Red-Black Tree)", start_seconds: 300 },
                                { title: "Heaps & Priority Queues Under the Hood", start_seconds: 480 },
                                { title: "Custom Sorting & Lambda Comparators", start_seconds: 620 }
                            ]
                        },
                        explanation: `
### 🌟 Why Language Internals Matter in Google Interviews
Google interviews me jab aap built-in data structures (jaise C++ me \`std::map\`, Java me \`TreeMap\`, ya Python me \`heapq\`) use karte hain, toh interviewer aapse turant poochta hai:
- *"Under the hood iska internal data structure kya hai?"*
- *"Worst-case aur average-case time complexity kya hai?"*
- *"Iska memory overhead aur collision handling mechanism kya hai?"*

---

### 📊 Master Comparison: C++ STL vs Java Collections vs Python

| Abstract DS | C++ STL Equivalent | Java Collections | Python Built-in | Under the Hood DS | Common Operations Complexity |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Dynamic Array** | \`std::vector\` | \`ArrayList<T>\` | \`list\` | Contiguous memory buffer (Doubling factor) | Append: \`O(1)\` Amortized<br>Random Access: \`O(1)\`<br>Insert/Delete Middle: \`O(N)\` |
| **Doubly Linked List** | \`std::list\` | \`LinkedList<T>\` | \`collections.deque\` | Nodes with Prev/Next pointers | Insert/Delete at ends: \`O(1)\`<br>Random Access: \`O(N)\` |
| **Hash Set / Map** | \`unordered_set\` / \`unordered_map\` | \`HashSet<T>\` / \`HashMap<K,V>\` | \`set\` / \`dict\` | Hash Table with Buckets (Separate Chaining / Open Addressing) | Insert/Find/Delete:<br>Avg \`O(1)\`, Worst \`O(N)\` |
| **Ordered Set / Map** | \`std::set\` / \`std::map\` | \`TreeSet<T>\` / \`TreeMap<K,V>\` | \`sortedcontainers.SortedDict\` | Self-Balancing BST (**Red-Black Tree**) | Insert/Find/Delete: **Strict \`O(log N)\`**<br>In-order traversal is sorted! |
| **Priority Queue (Heap)** | \`std::priority_queue\` (Max-heap default) | \`PriorityQueue<T>\` (Min-heap default) | \`heapq\` (Min-heap default) | Complete Binary Tree inside Array | Push: \`O(log N)\`<br>Pop (Top): \`O(log N)\`<br>Peek: \`O(1)\`<br>Heapify: \`O(N)\` |
| **Double-ended Queue** | \`std::deque\` | \`ArrayDeque<T>\` | \`collections.deque\` | Circular Ring Buffer / Block Arrays | Push/Pop Front & Back: \`O(1)\` |

---

### ⚠️ Google Interview Gotchas (Must-Know Nuances)
1. **\`unordered_map\` Worst Case Attack**: C++ \`unordered_map\` me custom hash na hone par hash collision attack se operations \`O(N)\` ho sakte hain. Isliye critical cases me \`std::map\` ya custom hash use karein.
2. **Min-Heap vs Max-Heap Defaults**:
   - C++ \`priority_queue<int>\` ➔ **Max-Heap** by default (Top element largest).
   - Java \`PriorityQueue<Integer>\` & Python \`heapq\` ➔ **Min-Heap** by default (Top element smallest).
3. **Custom Comparator Rules (Strict Weak Ordering)**:
   - Agar do elements equal hain, toh comparator ko \`false\` return karna chahiye taaki infinite loop / segmentation fault na aaye.
                        `,
                        code_example: {
                            language: "multi",
                            python: `# Python Collections & Custom Sorting Guide
import heapq
from collections import deque, Counter, defaultdict

# 1. Min-Heap & Max-Heap
min_heap = [5, 1, 9, 3]
heapq.heapify(min_heap)               # O(N) linear time heapify
heapq.heappush(min_heap, 2)           # O(log N) push
top_smallest = heapq.heappop(min_heap)# O(log N) pop -> 1

# Max-heap trick in Python (multiply by -1)
max_heap = [-x for x in [5, 1, 9, 3]]
heapq.heapify(max_heap)
top_largest = -heapq.heappop(max_heap)# 9

# 2. Deque (Double Ended Queue) - O(1) ends operations
dq = deque([1, 2, 3])
dq.appendleft(0)  # O(1)
dq.pop()          # O(1)

# 3. Custom Comparator (Sort intervals by start asc, end desc)
intervals = [[1, 4], [2, 3], [1, 5]]
intervals.sort(key=lambda x: (x[0], -x[1])) # [[1, 5], [1, 4], [2, 3]]`,
                            java: `// Java Collections & PriorityQueue Custom Comparator
import java.util.*;

public class STLCollectionsDemo {
    public static void main(String[] args) {
        // 1. Min-Heap (Default) vs Max-Heap
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        
        // 2. Custom Comparator for 2D Arrays / Objects (e.g. Intervals)
        int[][] intervals = {{1, 4}, {2, 3}, {1, 5}};
        Arrays.sort(intervals, (a, b) -> {
            if (a[0] != b[0]) return Integer.compare(a[0], b[0]); // Sort by start asc
            return Integer.compare(b[1], a[1]);                  // Sort by end desc
        });
        
        // 3. TreeMap (Sorted Key Navigation - O(log N))
        TreeMap<Integer, String> treeMap = new TreeMap<>();
        treeMap.put(10, "Ten");
        treeMap.put(20, "Twenty");
        Integer floor = treeMap.floorKey(15); // <= 15 -> Returns 10 in O(log N)
        Integer ceiling = treeMap.ceilingKey(15); // >= 15 -> Returns 20 in O(log N)
    }
}`
                        },
                        complexity: {
                            time: "Vector/Map/Heap operations range from O(1) to O(log N)",
                            space: "O(N) data container capacity"
                        },
                        practice_questions: [
                            { title: "Top K Frequent Elements (LeetCode #347)", difficulty: "Medium", url: "https://leetcode.com/problems/top-k-frequent-elements/" },
                            { title: "Merge K Sorted Lists (PriorityQueue) (LeetCode #23)", difficulty: "Hard", url: "https://leetcode.com/problems/merge-k-sorted-lists/" },
                            { title: "Find Median from Data Stream (Two Heaps) (LeetCode #295)", difficulty: "Hard", url: "https://leetcode.com/problems/find-median-from-data-stream/" },
                            { title: "Insert Delete GetRandom O(1) (LeetCode #380)", difficulty: "Medium", url: "https://leetcode.com/problems/insert-delete-getrandom-o1/" }
                        ]
                    },
                    {
                        id: "topic-math-number-theory",
                        title: "Basic Math & Number Theory for Coding Interviews",
                        slug: "math-number-theory-basics",
                        difficulty: "Easy",
                        description: "Master GCD/LCM (Euclidean), Prime Sieve of Eratosthenes, Fast Modular Exponentiation, and Integer Overflow protection.",
                        video: {
                            url: "https://www.youtube.com/watch?v=1xNbjMdbjug",
                            title: "Number Theory, GCD, Prime Sieve & Modular Arithmetic",
                            start_seconds: 0,
                            end_seconds: 680,
                            chapters: [
                                { title: "Essential Number Theory for Interviews", start_seconds: 0 },
                                { title: "Euclidean Algorithm for GCD & LCM", start_seconds: 110 },
                                { title: "Sieve of Eratosthenes for Prime Numbers", start_seconds: 260 },
                                { title: "Modular Arithmetic & Fast Power (a^b % mod)", start_seconds: 440 },
                                { title: "Avoiding 32-bit Integer Overflow", start_seconds: 590 }
                            ]
                        },
                        explanation: `
### 🌟 Why Math & Number Theory are Tested in Google Interviews
Google ke coding rounds me pure theoretical math ke sawal nahi aate, balki **mathematical sub-routines** aate hain jo bade algorithmic problems ka crucial hissa hote hain.

---

### 🔑 4 Core Mathematical Pillars for DSA

#### 1. Euclidean Algorithm for Greatest Common Divisor (GCD)
- **Mathematical Principle**: \`gcd(a, b) = gcd(b, a % b)\` with base case \`gcd(a, 0) = a\`.
- **Time Complexity**: **\`O(log(min(a, b)))\`** (Lame's Theorem).
- **LCM Relationship**: \`lcm(a, b) = (a * b) / gcd(a, b)\`.

#### 2. Sieve of Eratosthenes (Prime Numbers up to N)
- 1 se lekar \`N\` tak ke saare prime numbers nikalne ka sabse optimal algorithm.
- **Time Complexity**: **\`O(N log(log N))\`** (Lagbhag Linear time).

\`\`\`diagram:sieve-primes
\`\`\`

#### 3. Fast Modular Exponentiation (Binary Exponentiation)
- \`(base^exp) % MOD\` calculate karna in **\`O(log exp)\`** time instead of \`O(exp)\`.
- Industry Standard \`MOD = 10^9 + 7\` (1000000007) jo ek large prime number hai aur integer multiplication overflow prevent karta hai.

#### 4. Avoiding Integer Overflow (Google Trap)
- \`low + high\` calculation me \`int\` 32-bit overflow ho sakta hai:
  - ❌ \`mid = (low + high) / 2\`
  - ✅ \`mid = low + (high - low) / 2\`
                        `,
                        code_example: {
                            language: "multi",
                            python: `# Python Math & Number Theory Toolbelt
def gcd(a: int, b: int) -> int:
    while b:
        a, b = b, a % b
    return a

def lcm(a: int, b: int) -> int:
    return (a * b) // gcd(a, b)

# Sieve of Eratosthenes O(N log log N)
def sieve_of_eratosthenes(n: int) -> list[int]:
    is_prime = [True] * (n + 1)
    is_prime[0] = is_prime[1] = False
    
    p = 2
    while p * p <= n:
        if is_prime[p]:
            for i in range(p * p, n + 1, p):
                is_prime[i] = False
        p += 1
    return [i for i in range(2, n + 1) if is_prime[i]]

# Fast Modular Exponentiation: (base^exp) % mod in O(log exp)
def modular_pow(base: int, exp: int, mod: int = 10**9 + 7) -> int:
    res = 1
    base = base % mod
    while exp > 0:
        if exp % 2 == 1:
            res = (res * base) % mod
        base = (base * base) % mod
        exp //= 2
    return res`,
                            java: `// Java Number Theory Toolbelt
import java.util.*;

public class NumberTheory {
    // GCD in O(log(min(a, b)))
    public static long gcd(long a, long b) {
        return b == 0 ? a : gcd(b, a % b);
    }

    public static long lcm(long a, long b) {
        return (a / gcd(a, b)) * b;
    }

    // Sieve of Eratosthenes
    public static boolean[] sieve(int n) {
        boolean[] isPrime = new boolean[n + 1];
        Arrays.fill(isPrime, true);
        isPrime[0] = isPrime[1] = false;
        
        for (int p = 2; p * p <= n; p++) {
            if (isPrime[p]) {
                for (int i = p * p; i <= n; i += p) {
                    isPrime[i] = false;
                }
            }
        }
        return isPrime;
    }

    // Fast Power (base^exp) % MOD in O(log exp)
    public static long modularPow(long base, long exp, long mod) {
        long res = 1;
        base %= mod;
        while (exp > 0) {
            if ((exp & 1) == 1) res = (res * base) % mod;
            base = (base * base) % mod;
            exp >>= 1;
        }
        return res;
    }
}`
                        },
                        complexity: {
                            time: "GCD: O(log(min(a,b))), Sieve: O(N log log N), Fast Pow: O(log exp)",
                            space: "Sieve: O(N), Others: O(1)"
                        },
                        practice_questions: [
                            { title: "Count Primes (LeetCode #204)", difficulty: "Medium", url: "https://leetcode.com/problems/count-primes/" },
                            { title: "Pow(x, n) (LeetCode #50)", difficulty: "Medium", url: "https://leetcode.com/problems/powx-n/" },
                            { title: "Greatest Common Divisor of Strings (LeetCode #1071)", difficulty: "Easy", url: "https://leetcode.com/problems/greatest-common-divisor-of-strings/" },
                            { title: "Super Pow (Euler/Modular Math) (LeetCode #372)", difficulty: "Medium", url: "https://leetcode.com/problems/super-pow/" }
                        ]
                    },
                    {
                        id: "topic-constraints-complexity",
                        title: "Constraint-to-Complexity Master Guide (Google Heuristics)",
                        slug: "constraint-to-complexity-guide",
                        difficulty: "Easy",
                        description: "Master the 5-second constraint deduction formula to instantly predict the expected optimal algorithm during Google technical rounds.",
                        video: {
                            url: "https://www.youtube.com/watch?v=wBeg02tmsO0",
                            title: "How to Guess Expected Time Complexity from Problem Constraints",
                            start_seconds: 0,
                            end_seconds: 600,
                            chapters: [
                                { title: "The 1-Second CPU Operations Rule (10^8 ops)", start_seconds: 0 },
                                { title: "Constraint vs Target Complexity Table", start_seconds: 130 },
                                { title: "N <= 20: Backtracking & Bitmask DP", start_seconds: 280 },
                                { title: "N <= 10^5: Sorting, Heaps, Two Pointers", start_seconds: 420 },
                                { title: "N >= 10^9: Math & Binary Search on Answer", start_seconds: 520 }
                            ]
                        },
                        explanation: `
### ⚡ The 1-Second CPU Operation Rule (10⁸ Operations / sec)
Modern online judges (LeetCode, Codeforces, Google internal interview runners) allow approximately **1 second (or 2 seconds)** per test case:
- **Rule of Thumb**: Aapka total number of operations **\`~10^8\` (100 Million)** se kam hona chahiye!
- Agar \`Total Operations > 10^8\` ➔ **Time Limit Exceeded (TLE)** error aayega!

---

### 🗺️ The Google Interview Constraint Decoding Table

| Given Input Constraint (N) | Max Expected Time Complexity | Expected Algorithm / Technique to Apply | Real Interview Problem Example |
| :--- | :--- | :--- | :--- |
| **\`N <= 10\` to \`12\`** | **\`O(N!)\`** or **\`O(N^2 * 2^N)\`** | Factorial Permutations, TSP, Brute-force Recursion | Traveling Salesperson, Permutations |
| **\`N <= 20\`** | **\`O(2^N)\`** | Subsets Backtracking, Bitmask DP, Meet in the Middle | N-Queens, Word Search, Partition Equal Subset |
| **\`N <= 100\`** | **\`O(N^4)\`** or **\`O(N^3)\`** | 3D Dynamic Programming, Matrix Chain Multiplication, Floyd Warshall | Burst Balloons, Shortest Path All Pairs |
| **\`N <= 500\` to \`1,000\`** | **\`O(N^2)\`** | Nested Loops, 2D Grid DP, All-Pairs Check, Bubble/Insertion logic | Longest Common Subsequence (LCS), Edit Distance |
| **\`N <= 10^5\` to \`10^6\`** | **\`O(N log N)\`** or **\`O(N)\`** | **Most Common Google Bracket**: Sorting, Heaps, Two Pointers, Sliding Window, DSU, Dijkstra, Monotonic Stack, Greedy | Two Sum, Merge Intervals, Course Schedule, Trapping Rain Water |
| **\`N <= 10^9\` to \`10^18\`** | **\`O(log N)\`** or **\`O(1)\`** | Binary Search on Answer, Mathematical Formulas, Matrix Exponentiation | Aggressive Cows, Sqrt(x), Capacity To Ship Packages |

---

### 🎯 5-Step Interview Constraint Analysis Routine
Jab bhi question open ho:
1. **Pehle Constraints Check Karein**: Look at \`1 <= nums.length <= 10^5\`.
2. **Reverse Engineer Complexity**: \`10^5\` means $O(N^2)$ will fail with TLE ($10^{10} > 10^8$). Target MUST be $O(N \log N)$ or $O(N)$.
3. **Shortlist Candidate Data Structures**: Since target is $O(N)$ or $O(N \log N)$, think: HashMap, Monotonic Stack, Sliding Window, Sorting + Two Pointers.
4. **Clarify Edge Ranges**: Is $N=0$ possible? Can elements be negative? Is integer overflow possible if sum is taken?
                        `,
                        code_example: {
                            language: "multi",
                            python: `# Constraint-Driven Algorithm Selection Example:
# Problem: Given array of N integers, find 2 numbers that sum to Target.

# Case 1: If N <= 100 (O(N^2) Brute Force passes easily)
def two_sum_quadratic(nums, target):
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []

# Case 2: If N <= 10^5 (O(N) Hash Table REQUIRED to avoid TLE)
def two_sum_linear(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
                            java: `// Java Constraint Decision Example
import java.util.*;

public class TwoSumSelection {
    // O(N) Hash Map Required when N = 10^5
    public int[] twoSumLinear(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{};
    }
}`
                        },
                        complexity: {
                            time: "Decision Heuristic: Maps constraints N directly to target runtime",
                            space: "Determines trade-offs (e.g. O(N) auxiliary memory for O(N) runtime)"
                        },
                        practice_questions: [
                            { title: "Two Sum (LeetCode #1)", difficulty: "Easy", url: "https://leetcode.com/problems/two-sum/" },
                            { title: "3Sum (LeetCode #15)", difficulty: "Medium", url: "https://leetcode.com/problems/3sum/" },
                            { title: "Trapping Rain Water (LeetCode #42)", difficulty: "Hard", url: "https://leetcode.com/problems/trapping-rain-water/" },
                            { title: "Median of Two Sorted Arrays (O(log(min(m,n)))) (LeetCode #4)", difficulty: "Hard", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/" }
                        ]
                    }
                ]
            },

            // 2. Arrays
            {
                id: "sub-arrays",
                name: "2. Arrays",
                icon: "📊",
                topics: [
                    // 1. 1D & 2D ARRAYS
                    {
                        id: "topic-1d-2d-arrays",
                        title: "1D & 2D Arrays (Matrix Traversals & Memory Mapping)",
                        slug: "1d-2d-arrays",
                        difficulty: "Easy",
                        description: "Understand contiguous RAM allocation, row-major vs column-major indexing, Spiral Matrix traversal, and matrix rotations.",
                        video: {
                            url: "https://www.youtube.com/watch?v=pmN9ExVY3gE",
                            title: "2D Matrix Traversals & Memory Architecture",
                            start_seconds: 0,
                            end_seconds: 500,
                            chapters: [
                                { title: "Contiguous Memory & Cache Locality", start_seconds: 0 },
                                { title: "Row-Major Indexing: idx = r * C + c", start_seconds: 140 },
                                { title: "4 Types of Matrix Traversals", start_seconds: 280 },
                                { title: "Spiral Matrix Traversal Walk", start_seconds: 400 }
                            ]
                        },
                        explanation: `
### 💡 1D & 2D Array Memory Representation
Hardware RAM purely **1D linear memory addresses** hoti hai. Jab hum 2D matrix banate hain, CPU use **Row-Major Order** me flatten karke store karta hai.

### 📐 2D to 1D Memory Mapping Formula
- **Matrix Cell to 1D Index**: \`Index = (row * cols) + col\`
- **1D Index to 2D Cell**: \`row = index // cols\`, \`col = index % cols\`

\`\`\`diagram:2d-array
\`\`\`

### 🏷️ 4 Major Matrix Traversal Patterns
1. **Row-by-Row Traversal (Cache Optimal)**: CPU spatial cache lines ko efficiently utilize karta hai (**Fastest**).
2. **Column-by-Column Traversal**: Memory me bar-bar jumps karta hai, causing frequent CPU Cache Misses.
3. **Diagonal Traversal**: Same diagonals ke elements ka \`(r + c)\` ya \`(r - c)\` constant hota hai.
4. **Boundary / Spiral Traversal**: 4 pointers (\`top, bottom, left, right\`) maintain karke matrix ke outer boundary ko layer-by-layer peel karna.

### 💻 Code Implementations: Spiral Matrix & In-Place Rotation (90°)

\`\`\`python
# 1. Spiral Matrix Traversal (O(R * C) Time, O(1) Auxiliary Space)
def spiral_order(matrix):
    if not matrix: return []
    res = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    
    while top <= bottom and left <= right:
        # Step 1: Traverse Right
        for c in range(left, right + 1): res.append(matrix[top][c])
        top += 1
        # Step 2: Traverse Down
        for r in range(top, bottom + 1): res.append(matrix[r][right])
        right -= 1
        # Step 3: Traverse Left
        if top <= bottom:
            for c in range(right, left - 1, -1): res.append(matrix[bottom][c])
            bottom -= 1
        # Step 4: Traverse Up
        if left <= right:
            for r in range(bottom, top - 1, -1): res.append(matrix[r][left])
            left += 1
    return res

# 2. In-Place Rotate Matrix 90° Clockwise (Transpose + Reverse Rows)
def rotate_matrix_90(matrix):
    n = len(matrix)
    # Step A: Transpose matrix (swap matrix[i][j] with matrix[j][i])
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    # Step B: Reverse each row
    for r in range(n):
        matrix[r].reverse()
\`\`\`
                        `,
                        code_example: {
                            language: "multi",
                            python: `# Set Matrix Zeroes (Python 2.7, 3.6 - 3.12 compatible)
def set_zeroes(matrix):
    if not matrix: return
    rows, cols = len(matrix), len(matrix[0])
    row_zero = False
    
    for r in range(rows):
        for c in range(cols):
            if matrix[r][c] == 0:
                matrix[0][c] = 0
                if r > 0: matrix[r][0] = 0
                else: row_zero = True
                
    for r in range(1, rows):
        for c in range(1, cols):
            if matrix[0][c] == 0 or matrix[r][0] == 0:
                matrix[r][c] = 0
                
    if matrix[0][0] == 0:
        for r in range(rows): matrix[r][0] = 0
    if row_zero:
        for c in range(cols): matrix[0][c] = 0`,
                            java: `// Java 8 Solution: Set Matrix Zeroes (In-Place O(1) Space)
public class Solution {
    public void setZeroes(int[][] matrix) {
        int rows = matrix.length, cols = matrix[0].length;
        boolean rowZero = false;

        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (matrix[r][c] == 0) {
                    matrix[0][c] = 0;
                    if (r > 0) matrix[r][0] = 0;
                    else rowZero = true;
                }
            }
        }

        for (int r = 1; r < rows; r++) {
            for (int c = 1; c < cols; c++) {
                if (matrix[0][c] == 0 || matrix[r][0] == 0) {
                    matrix[r][c] = 0;
                }
            }
        }

        if (matrix[0][0] == 0) {
            for (int r = 0; r < rows; r++) matrix[r][0] = 0;
        }
        if (rowZero) {
            for (int c = 0; c < cols; c++) matrix[0][c] = 0;
        }
    }
}`
                        },
                        complexity: {
                            time: "O(R * C) matrix elements",
                            space: "O(1) in-place pointers"
                        },
                        practice_questions: [
                            { title: "Spiral Matrix (LeetCode #54)", difficulty: "Medium", url: "https://leetcode.com/problems/spiral-matrix/" },
                            { title: "Rotate Image (In-Place 90°) (LeetCode #48)", difficulty: "Medium", url: "https://leetcode.com/problems/rotate-image/" },
                            { title: "Set Matrix Zeroes (LeetCode #73)", difficulty: "Medium", url: "https://leetcode.com/problems/set-matrix-zeroes/" },
                            { title: "Search a 2D Matrix (LeetCode #74)", difficulty: "Medium", url: "https://leetcode.com/problems/search-a-2d-matrix/" },
                            { title: "Diagonal Traverse (LeetCode #498)", difficulty: "Medium", url: "https://leetcode.com/problems/diagonal-traverse/" }
                        ]
                    },

                    // 2. TRAVERSAL, INSERTION, DELETION & ARRAY OPERATIONS
                    {
                        id: "topic-array-operations",
                        title: "Array Operations: Traversal, Insertion & Deletion Mechanics",
                        slug: "array-operations",
                        difficulty: "Easy",
                        description: "Understand low-level array memory layout, insertion/deletion shifting mechanics, linear vs binary search, and dynamic array resizing.",
                        video: {
                            url: "https://www.youtube.com/watch?v=73hx_m_rIog",
                            title: "Array Data Structure: Memory, Insertion & Deletion",
                            start_seconds: 0,
                            end_seconds: 560,
                            chapters: [
                                { title: "Array Memory Representation & Address Calculation", start_seconds: 0 },
                                { title: "Insertion Mechanics & Right Shift", start_seconds: 140 },
                                { title: "Deletion Mechanics & Left Shift", start_seconds: 290 },
                                { title: "Linear vs Binary Search", start_seconds: 420 }
                            ]
                        },
                        explanation: `
### 💡 Array Memory Model & Random Access
Array ek **contiguous (continuous block)** of memory allocation hota hai. Har element ka memory address direct formula se compute hota hai:

**\`Address(arr[i]) = Base_Address + (i * Element_Size_In_Bytes)\`**
Is formula ki wajah se array me kisi bhi index ko access karna **\`O(1)\` Constant Time** hota hai!

\`\`\`diagram:array-operations
\`\`\`

### 🏷️ Core Array Operations Breakdown
1. **Traversal (\`O(N)\`)**: Har element ko ek-ek karke visit karna.
2. **Insertion**:
   - At End (with spare capacity): **\`O(1)\`**
   - At Start / Middle index \`k\`: **\`O(N)\`** (Elements from index \`k\` to \`N-1\` ko right shift karna padta hai).
3. **Deletion**:
   - From End: **\`O(1)\`**
   - From Start / Middle index \`k\`: **\`O(N)\`** (Elements from index \`k+1\` to \`N-1\` ko left shift karna padta hai).
4. **Search**:
   - Linear Search (Unsorted): **\`O(N)\`**
   - Binary Search (Sorted): **\`O(log N)\`**

### 💻 Code Implementations: Insert, Delete & Search

\`\`\`python
# 1. In-Place Element Insertion at Index
def insert_at_index(arr, idx, val):
    arr.append(0)  # Expand size
    for i in range(len(arr) - 1, idx, -1):
        arr[i] = arr[i - 1]  # Shift elements right
    arr[idx] = val

# 2. In-Place Element Deletion from Index
def delete_at_index(arr, idx):
    if idx < 0 or idx >= len(arr): return
    for i in range(idx, len(arr) - 1):
        arr[i] = arr[i + 1]  # Shift elements left
    arr.pop()

# 3. Binary Search in Sorted Array (O(log N))
def binary_search(arr, target):
    l, r = 0, len(arr) - 1
    while l <= r:
        mid = l + (r - l) // 2
        if arr[mid] == target: return mid
        elif arr[mid] < target: l = mid + 1
        else: r = mid - 1
    return -1
\`\`\`
                        `,
                        code_example: {
                            language: "multi",
                            python: `# Remove Element In-Place (LeetCode #27)
def remove_element(nums, val):
    k = 0
    for i in range(len(nums)):
        if nums[i] != val:
            nums[k] = nums[i]
            k += 1
    return k`,
                            java: `// Java 8 Solution: Remove Element In-Place (O(N) Time, O(1) Space)
public class Solution {
    public int removeElement(int[] nums, int val) {
        int k = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != val) {
                nums[k++] = nums[i];
            }
        }
        return k;
    }
}`
                        },
                        complexity: {
                            time: "O(1) access/end insert, O(N) middle insert/delete/search",
                            space: "O(1) in-place auxiliary memory"
                        },
                        practice_questions: [
                            { title: "Remove Element (LeetCode #27)", difficulty: "Easy", url: "https://leetcode.com/problems/remove-element/" },
                            { title: "Remove Duplicates from Sorted Array (LeetCode #26)", difficulty: "Easy", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
                            { title: "Concatenation of Array (LeetCode #1929)", difficulty: "Easy", url: "https://leetcode.com/problems/concatenation-of-array/" },
                            { title: "Find Numbers with Even Number of Digits (LeetCode #1295)", difficulty: "Easy", url: "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/" }
                        ]
                    },

                    // 3. TWO POINTER TECHNIQUE
                    {
                        id: "topic-two-pointer-tech",
                        title: "Two Pointer Technique (3 Major Patterns & Multi-Directional)",
                        slug: "two-pointer-technique",
                        difficulty: "Easy",
                        description: "Eliminate nested O(N^2) loops into linear O(N) using Opposite Ends, Fast & Slow, and Partitioning pointers.",
                        video: {
                            url: "https://www.youtube.com/watch?v=-gjxg6Pln50",
                            title: "Two Pointers Patterns for LeetCode Interviews",
                            start_seconds: 0,
                            end_seconds: 600,
                            chapters: [
                                { title: "Pattern 1: Opposite Ends Convergence", start_seconds: 0 },
                                { title: "Pattern 2: Fast & Slow / Chasing Pointers", start_seconds: 220 },
                                { title: "Pattern 3: Trapping Rain Water & 3Sum", start_seconds: 410 }
                            ]
                        },
                        explanation: `
### 💡 What is the Two Pointer Technique?
Two Pointer technique nested loops (\`O(N²)\`) ko linear scan (\`O(N)\`) me convert karti hai do synchronized indices maintain karke.

\`\`\`diagram:two-pointers
\`\`\`

### 🏷️ 3 Core Two-Pointer Patterns
1. **Opposite Ends Convergence**: Ek pointer start (\`left = 0\`) par aur doosra end (\`right = n - 1\`) par hota hai. Array sorted hona chahiye. Current sum dekhkar decide karte hain kis pointer ko aage badhana hai (e.g. Two Sum II, 3Sum, Container With Most Water).
2. **Fast & Slow (Reader-Writer) Pointers**: \`fast\` pointer pure array ko scan karta hai aur \`slow\` pointer valid elements ko in-place write karta hai (e.g. Remove Duplicates, Move Zeroes, Linked List Cycle).
3. **Two Arrays Merging**: Do sorted arrays ko traverse karke single sorted array banana (e.g. Merge Sorted Array).

### 💻 Code Implementations for Two Pointer Patterns

\`\`\`python
# Pattern 1: Two Sum in Sorted Array (O(N) Time, O(1) Space - Python)
def two_sum_sorted(nums, target):
    left, right = 0, len(nums) - 1
    while left < right:
        curr = nums[left] + nums[right]
        if curr == target: return [left + 1, right + 1]
        elif curr < target: left += 1   # Need bigger sum
        else: right -= 1               # Need smaller sum
    return []

# Pattern 2: Container With Most Water (Greedy Two Pointers)
def max_area(height):
    left, right = 0, len(height) - 1
    max_water = 0
    while left < right:
        width = right - left
        h = min(height[left], height[right])
        max_water = max(max_water, width * h)
        if height[left] < height[right]: left += 1
        else: right -= 1
    return max_water

# Pattern 3: Remove Duplicates in Sorted Array (Fast & Slow)
def remove_duplicates(nums):
    if not nums: return 0
    slow = 0
    for fast in range(1, len(nums)):
        if nums[fast] != nums[slow]:
            slow += 1
            nums[slow] = nums[fast]
    return slow + 1
\`\`\`
                        `,
                        code_example: {
                            language: "multi",
                            python: `# Python: Complete Two Pointer Patterns Suite (O(N) - O(N^2) Time, O(1) Space)

# Pattern 1: Two Sum in Sorted Array (Opposite Ends Convergence)
def two_sum_sorted(nums: list[int], target: int) -> list[int]:
    left, right = 0, len(nums) - 1
    while left < right:
        curr = nums[left] + nums[right]
        if curr == target:
            return [left + 1, right + 1]  # 1-based index
        elif curr < target:
            left += 1
        else:
            right -= 1
    return []

# Pattern 2: Container With Most Water (Greedy Two Pointers)
def max_area(height: list[int]) -> int:
    left, right = 0, len(height) - 1
    max_water = 0
    while left < right:
        width = right - left
        h = min(height[left], height[right])
        max_water = max(max_water, width * h)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_water

# Pattern 3: Remove Duplicates in Sorted Array (Fast & Slow Pointers)
def remove_duplicates(nums: list[int]) -> int:
    if not nums: return 0
    slow = 0
    for fast in range(1, len(nums)):
        if nums[fast] != nums[slow]:
            slow += 1
            nums[slow] = nums[fast]
    return slow + 1

# Pattern 4: 3Sum (Sorting + Two Pointers - O(N^2) Time, O(1) Extra Space)
def three_sum(nums: list[int]) -> list[list[int]]:
    nums.sort()
    res = []
    n = len(nums)
    for i in range(n - 2):
        if i > 0 and nums[i] == nums[i - 1]: continue  # Skip duplicate i
        l, r = i + 1, n - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if s == 0:
                res.append([nums[i], nums[l], nums[r]])
                while l < r and nums[l] == nums[l + 1]: l += 1
                while l < r and nums[r] == nums[r - 1]: r -= 1
                l += 1; r -= 1
            elif s < 0:
                l += 1
            else:
                r -= 1
    return res`,
                            java: `// Java 8 Solution: Complete Two Pointer Patterns Suite
import java.util.*;

public class Solution {
    // Pattern 1: Two Sum in Sorted Array (Opposite Ends - O(N) Time, O(1) Space)
    public int[] twoSumSorted(int[] numbers, int target) {
        int left = 0, right = numbers.length - 1;
        while (left < right) {
            int sum = numbers[left] + numbers[right];
            if (sum == target) {
                return new int[]{left + 1, right + 1}; // 1-indexed (LeetCode #167)
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
        return new int[0];
    }

    // Pattern 2: Container With Most Water (Greedy Two Pointers - O(N) Time, O(1) Space)
    public int maxArea(int[] height) {
        int left = 0, right = height.length - 1;
        int maxWater = 0;
        while (left < right) {
            int width = right - left;
            int h = Math.min(height[left], height[right]);
            maxWater = Math.max(maxWater, width * h);
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxWater;
    }

    // Pattern 3: Remove Duplicates in Sorted Array (Fast & Slow - O(N) Time, O(1) Space)
    public int removeDuplicates(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        int slow = 0;
        for (int fast = 1; fast < nums.length; fast++) {
            if (nums[fast] != nums[slow]) {
                slow++;
                nums[slow] = nums[fast];
            }
        }
        return slow + 1;
    }

    // Pattern 4: 3Sum (Sorting + Two Pointers - O(N^2) Time, O(1) Extra Space)
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<>();
        int n = nums.length;

        for (int i = 0; i < n - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue; // Skip duplicate i

            int l = i + 1, r = n - 1;
            while (l < r) {
                int sum = nums[i] + nums[l] + nums[r];
                if (sum == 0) {
                    res.add(Arrays.asList(nums[i], nums[l], nums[r]));
                    while (l < r && nums[l] == nums[l + 1]) l++;
                    while (l < r && nums[r] == nums[r - 1]) r--;
                    l++; r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    r--;
                }
            }
        }
        return res;
    }
}`
                        },
                        complexity: {
                            time: "O(N) for Two Sum/Container/Duplicates, O(N^2) for 3Sum",
                            space: "O(1) in-place pointers"
                        },
                        practice_questions: [
                            { title: "Two Sum II - Input Array Is Sorted (LeetCode #167)", difficulty: "Medium", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
                            { title: "3Sum (LeetCode #15)", difficulty: "Medium", url: "https://leetcode.com/problems/3sum/" },
                            { title: "Container With Most Water (LeetCode #11)", difficulty: "Medium", url: "https://leetcode.com/problems/container-with-most-water/" },
                            { title: "Trapping Rain Water (LeetCode #42)", difficulty: "Hard", url: "https://leetcode.com/problems/trapping-rain-water/" },
                            { title: "4Sum (LeetCode #18)", difficulty: "Medium", url: "https://leetcode.com/problems/4sum/" }
                        ]
                    },

                    // 4. SLIDING WINDOW TECHNIQUE
                    {
                        id: "topic-sliding-window",
                        title: "Sliding Window Technique (Fixed vs Dynamic Windows)",
                        slug: "sliding-window",
                        difficulty: "Medium",
                        description: "Maintain contiguous subarray windows to solve range constraints in linear O(N) time.",
                        video: {
                            url: "https://www.youtube.com/watch?v=jM2DHncPXVg",
                            title: "Sliding Window Algorithm Masterclass",
                            start_seconds: 0,
                            end_seconds: 700,
                            chapters: [
                                { title: "Fixed Size Window Pattern", start_seconds: 0 },
                                { title: "Dynamic / Variable Window Pattern", start_seconds: 240 },
                                { title: "At Most K & Substring Problems", start_seconds: 480 }
                            ]
                        },
                        explanation: `
### 💡 Sliding Window Concept
Jab bhi question me **Contiguous Subarray** ya **Substring** ke upar maximum, minimum ya target condition puchi ho, toh nested loops lagane ke bajaye sliding window use karte hain.

\`\`\`diagram:sliding-window
\`\`\`

### 🏷️ 2 Major Types of Sliding Window
1. **Fixed Size Window (Size K)**: Window ka size fixed \`K\` rehta hai. Window ko ek step right slide karte waqt naya element add karte hain (\`arr[right]\`) aur peeche wala element subtract karte hain (\`arr[left]\`) in \`O(1)\` time.
2. **Variable / Dynamic Window**: 
   - \`right\` pointer ko expand karo aur element window me include karo.
   - Jab tak condition violate ho rahi ho, \`left\` pointer ko aage badha kar window shrink karo.
   - Window valid hote hi result calculate karo.

### 💻 Code Implementations: Fixed vs Dynamic Windows

\`\`\`python
# Type 1: Maximum Sum Subarray of Fixed Size K (Python)
def max_sum_subarray(arr, k):
    if len(arr) < k: return 0
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]  # O(1) sliding step!
        max_sum = max(max_sum, window_sum)
    return max_sum

# Type 2: Longest Substring Without Repeating Characters (Python)
def length_of_longest_substring(s):
    char_map = {}
    max_len = 0
    left = 0
    
    for right in range(len(s)):
        ch = s[right]
        if ch in char_map and char_map[ch] >= left:
            left = char_map[ch] + 1  # Shrink window past duplicate
        char_map[ch] = right
        max_len = max(max_len, right - left + 1)
    return max_len
\`\`\`
                        `,
                        code_example: {
                            language: "multi",
                            python: `# Longest Substring Without Repeating Characters (Python)
def length_of_longest_substring(s):
    char_map = {}
    max_len = 0
    left = 0
    for right, ch in enumerate(s):
        if ch in char_map and char_map[ch] >= left:
            left = char_map[ch] + 1
        char_map[ch] = right
        max_len = max(max_len, right - left + 1)
    return max_len`,
                            java: `// Java 8 Solution: Longest Substring Without Repeating Characters
import java.util.*;

public class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> charMap = new HashMap<>();
        int maxLen = 0, left = 0;

        for (int right = 0; right < s.length(); right++) {
            char ch = s.charAt(right);
            if (charMap.containsKey(ch) && charMap.get(ch) >= left) {
                left = charMap.get(ch) + 1;
            }
            charMap.put(ch, right);
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
}`
                        },
                        complexity: {
                            time: "O(N) each character processed at most twice",
                            space: "O(K) character map"
                        },
                        practice_questions: [
                            { title: "Longest Substring Without Repeating Characters (LeetCode #3)", difficulty: "Medium", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
                            { title: "Minimum Size Subarray Sum (LeetCode #209)", difficulty: "Medium", url: "https://leetcode.com/problems/minimum-size-subarray-sum/" },
                            { title: "Max Consecutive Ones III (LeetCode #1004)", difficulty: "Medium", url: "https://leetcode.com/problems/max-consecutive-ones-iii/" },
                            { title: "Minimum Window Substring (LeetCode #76)", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-window-substring/" },
                            { title: "Fruit Into Baskets (LeetCode #904)", difficulty: "Medium", url: "https://leetcode.com/problems/fruit-into-baskets/" }
                        ]
                    },

                    // 5. PREFIX SUM & SUFFIX SUM
                    {
                        id: "topic-prefix-suffix-sum",
                        title: "Prefix Sum & Suffix Sum (1D/2D Range Queries & Target K)",
                        slug: "prefix-suffix-sum",
                        difficulty: "Easy",
                        description: "Precompute cumulative prefix arrays to answer range sum queries and find subarray sums equals K in O(1).",
                        video: {
                            url: "https://www.youtube.com/watch?v=pVS3yhlzrlQ",
                            title: "Prefix Sum Array & Subarray Sum Equals K Masterclass",
                            start_seconds: 0,
                            end_seconds: 550,
                            chapters: [
                                { title: "Prefix Array Construction & Formula", start_seconds: 0 },
                                { title: "O(1) Range Queries: Prefix[R] - Prefix[L-1]", start_seconds: 180 },
                                { title: "Prefix Sum + Hash Map for Target K", start_seconds: 320 }
                            ]
                        },
                        explanation: `
### 💡 Prefix Sum Formula & Range Queries
Prefix Sum array har index par 0 se lekar us index tak ka cumulative sum store karta hai:
- \`prefix[i] = prefix[i-1] + arr[i]\`
- \`Sum(L, R) = prefix[R] - prefix[L - 1]\` (Time: **\`O(1)\`**)

\`\`\`diagram:prefix-sum
\`\`\`

### 🔬 Finding Subarrays with Sum Equals K
Agar current prefix sum \`S\` hai aur hume pata hai ki pehle kabhi prefix sum \`S - K\` aa chuka hai, toh un dono ke beech ka contiguous subarray ka sum **exactly \`K\`** hoga!
- Ek **HashMap** maintain karo jo store kare: \`{ prefix_sum: count_of_occurrences }\`.

### 💻 Code Implementation: Subarray Sum Equals K

\`\`\`python
# O(N) Time & O(N) Space via Prefix Sum + HashMap (Python)
def subarray_sum_equals_k(nums, k):
    prefix_counts = {0: 1}  # Base state: 0 sum seen once
    current_sum = 0
    total_subarrays = 0
    
    for num in nums:
        current_sum += num
        if (current_sum - k) in prefix_counts:
            total_subarrays += prefix_counts[current_sum - k]
            
        prefix_counts[current_sum] = prefix_counts.get(current_sum, 0) + 1
        
    return total_subarrays
\`\`\`
                        `,
                        code_example: {
                            language: "multi",
                            python: `# Subarray Sum Equals K (Python 2.7, 3.6 - 3.12)
def subarray_sum_equals_k(nums, k):
    prefix_counts = {0: 1}
    current_sum = 0
    total_count = 0
    for num in nums:
        current_sum += num
        if (current_sum - k) in prefix_counts:
            total_count += prefix_counts[current_sum - k]
        prefix_counts[current_sum] = prefix_counts.get(current_sum, 0) + 1
    return total_count`,
                            java: `// Java 8 Solution: Subarray Sum Equals K (O(N) Time & Space)
import java.util.*;

public class Solution {
    public int subarraySum(int[] nums, int k) {
        Map<Integer, Integer> prefixCounts = new HashMap<>();
        prefixCounts.put(0, 1);
        int currentSum = 0, totalCount = 0;

        for (int num : nums) {
            currentSum += num;
            if (prefixCounts.containsKey(currentSum - k)) {
                totalCount += prefixCounts.get(currentSum - k);
            }
            prefixCounts.put(currentSum, prefixCounts.getOrDefault(currentSum, 0) + 1);
        }
        return totalCount;
    }
}`
                        },
                        complexity: {
                            time: "O(N) one-time precomputation, O(1) per query",
                            space: "O(N) prefix array / hash map"
                        },
                        practice_questions: [
                            { title: "Subarray Sum Equals K (LeetCode #560)", difficulty: "Medium", url: "https://leetcode.com/problems/subarray-sum-equals-k/" },
                            { title: "Range Sum Query - Immutable (LeetCode #303)", difficulty: "Easy", url: "https://leetcode.com/problems/range-sum-query-immutable/" },
                            { title: "Range Sum Query 2D - Immutable (LeetCode #304)", difficulty: "Medium", url: "https://leetcode.com/problems/range-sum-query-2d-immutable/" },
                            { title: "Contiguous Array with Equal 0s and 1s (LeetCode #525)", difficulty: "Medium", url: "https://leetcode.com/problems/contiguous-array/" },
                            { title: "Product of Array Except Self (LeetCode #238)", difficulty: "Medium", url: "https://leetcode.com/problems/product-of-array-except-self/" }
                        ]
                    },

                    // 6. KADANE'S ALGORITHM
                    {
                        id: "topic-kadanes-algorithm",
                        title: "Kadane's Algorithm (Max Subarray Sum & DP Variations)",
                        slug: "kadanes-algorithm",
                        difficulty: "Medium",
                        description: "Find the maximum contiguous subarray sum in linear O(N) time with Dynamic Programming state transitions.",
                        video: {
                            url: "https://www.youtube.com/watch?v=AHZpyQDE7m4",
                            title: "Kadane's Algorithm Explained with DP Intuition",
                            start_seconds: 0,
                            end_seconds: 520,
                            chapters: [
                                { title: "Why Negative Sums Should Be Discarded", start_seconds: 0 },
                                { title: "Kadane's Core DP Equation", start_seconds: 180 },
                                { title: "Circular Subarray Extension", start_seconds: 350 }
                            ]
                        },
                        explanation: `
### 💡 Kadane's Core Intuition
Har element \`num\` par hamare paas 2 options hote hain:
1. **Pichle subarray ko continue karo**: \`current_sum + num\`
2. **Pichla negative bojh chhodkar naya subarray shuru karo**: \`num\`

**State Equation**: \`current_max = max(num, current_max + num)\`

\`\`\`diagram:kadanes
\`\`\`

### 🏷️ 3 Major Variations of Kadane's Algorithm
1. **Standard Maximum Subarray**: Pure array me maximum contiguous sum dhoondhna (\`O(N)\` Time, \`O(1)\` Space).
2. **Maximum Product Subarray**: Negative number se multiply hone par min product max ban sakta hai, isliye **Max aur Min dono track** karte hain.
3. **Maximum Circular Subarray Sum**: Max sum either normal subarray hoga ya \`TotalSum - MinSubarraySum\` hoga.

### 💻 Code Implementations: Kadane & Max Product Subarray

\`\`\`python
# 1. Standard Kadane's Algorithm (O(N) Time, O(1) Space - Python)
def max_sub_array(nums):
    max_so_far = nums[0]
    curr_sum = nums[0]
    
    for num in nums[1:]:
        curr_sum = max(num, curr_sum + num)  # Reset if previous was negative
        max_so_far = max(max_so_far, curr_sum)
        
    return max_so_far

# 2. Maximum Product Subarray (Tracking both max and min)
def max_product(nums):
    res = max(nums)
    cur_min, cur_max = 1, 1
    
    for n in nums:
        if n == 0:
            cur_min, cur_max = 1, 1
            continue
        tmp = cur_max * n
        cur_max = max(n * cur_max, n * cur_min, n)
        cur_min = min(tmp, n * cur_min, n)
        res = max(res, cur_max)
        
    return res
\`\`\`
                        `,
                        code_example: {
                            language: "multi",
                            python: `# Standard Kadane's Maximum Subarray Sum (Python)
def max_sub_array(nums):
    max_so_far = nums[0]
    curr_sum = nums[0]
    for num in nums[1:]:
        curr_sum = max(num, curr_sum + num)
        max_so_far = max(max_so_far, curr_sum)
    return max_so_far`,
                            java: `// Java 8 Solution: Kadane's Algorithm (O(N) Time, O(1) Space)
public class Solution {
    public int maxSubArray(int[] nums) {
        int maxSoFar = nums[0];
        int currSum = nums[0];

        for (int i = 1; i < nums.length; i++) {
            currSum = Math.max(nums[i], currSum + nums[i]);
            maxSoFar = Math.max(maxSoFar, currSum);
        }
        return maxSoFar;
    }
}`
                        },
                        complexity: {
                            time: "O(N) single pass",
                            space: "O(1) constant auxiliary space"
                        },
                        practice_questions: [
                            { title: "Maximum Subarray (LeetCode #53)", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-subarray/" },
                            { title: "Maximum Product Subarray (LeetCode #152)", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-product-subarray/" },
                            { title: "Maximum Sum Circular Subarray (LeetCode #918)", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-sum-circular-subarray/" },
                            { title: "Best Time to Buy and Sell Stock (LeetCode #121)", difficulty: "Easy", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" }
                        ]
                    },

                    // 7. DUTCH NATIONAL FLAG ALGORITHM
                    {
                        id: "topic-dutch-national-flag",
                        title: "Dutch National Flag Algorithm (3-Way In-Place 0, 1, 2 Sort)",
                        slug: "dutch-national-flag",
                        difficulty: "Medium",
                        description: "Single pass 3-way in-place partitioning with 3 pointers: low, mid, and high.",
                        video: {
                            url: "https://www.youtube.com/watch?v=oaVa-9wmpns",
                            title: "Sort Colors - Dutch National Flag Algorithm",
                            start_seconds: 0,
                            end_seconds: 480,
                            chapters: [
                                { title: "3-Pointer Invariants", start_seconds: 0 },
                                { title: "Single Pass Partitioning Walkthrough", start_seconds: 190 }
                            ]
                        },
                        explanation: `
### 💡 3-Way Partitioning Invariants
Dutch National Flag algorithm 3 pointers (\`low, mid, high\`) se array ko 4 distinct regions me divide karta hai:
- \`[0 ... low - 1]\`: Strictly **0s** (Red)
- \`[low ... mid - 1]\`: Strictly **1s** (White)
- \`[mid ... high]\`: **Unprocessed elements** (Unknown)
- \`[high + 1 ... N - 1]\`: Strictly **2s** (Blue)

\`\`\`diagram:dutch-flag
\`\`\`

### 🔄 Algorithm Steps
Jab tak \`mid <= high\`:
- Agar \`arr[mid] == 0\`: Swap \`arr[low]\` aur \`arr[mid]\`, increment \`low++\` aur \`mid++\`.
- Agar \`arr[mid] == 1\`: Already in place, bas \`mid++\`.
- Agar \`arr[mid] == 2\`: Swap \`arr[mid]\` aur \`arr[high]\`, decrement \`high--\` (Note: \`mid\` ko increment mat karo kyu naya swap element unknown hai).

### 💻 Code Implementation: Sort Colors (DNF)

\`\`\`python
# O(N) Strictly Single Pass & O(1) Space (Python)
def sort_colors(nums):
    low, mid, high = 0, 0, len(nums) - 1
    
    while mid <= high:
        if nums[mid] == 0:
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1
            mid += 1
        elif nums[mid] == 1:
            mid += 1
        else: # nums[mid] == 2
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1
\`\`\`
                        `,
                        code_example: {
                            language: "multi",
                            python: `# Sort Colors / DNF 3-Way Partitioning (Python)
def sort_colors(nums):
    low, mid, high = 0, 0, len(nums) - 1
    while mid <= high:
        if nums[mid] == 0:
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1; mid += 1
        elif nums[mid] == 1:
            mid += 1
        else:
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1`,
                            java: `// Java 8 Solution: Sort Colors (Single-Pass O(N) Time, O(1) Space)
public class Solution {
    public void sortColors(int[] nums) {
        int low = 0, mid = 0, high = nums.length - 1;
        while (mid <= high) {
            if (nums[mid] == 0) {
                swap(nums, low++, mid++);
            } else if (nums[mid] == 1) {
                mid++;
            } else {
                swap(nums, mid, high--);
            }
        }
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}`
                        },
                        complexity: {
                            time: "O(N) strictly single pass",
                            space: "O(1) in-place pointers"
                        },
                        practice_questions: [
                            { title: "Sort Colors (LeetCode #75)", difficulty: "Medium", url: "https://leetcode.com/problems/sort-colors/" },
                            { title: "Sort Array by Parity (LeetCode #905)", difficulty: "Easy", url: "https://leetcode.com/problems/sort-array-by-parity/" },
                            { title: "Sort Array by Parity II (LeetCode #922)", difficulty: "Easy", url: "https://leetcode.com/problems/sort-array-by-parity-ii/" },
                            { title: "Wiggle Sort II (LeetCode #324)", difficulty: "Medium", url: "https://leetcode.com/problems/wiggle-sort-ii/" }
                        ]
                    },

                    // 8. ROTATION OF ARRAYS
                    {
                        id: "topic-array-rotation",
                        title: "Rotation of Arrays (3-Reversal In-Place & Cyclic Shifts)",
                        slug: "array-rotation",
                        difficulty: "Medium",
                        description: "Rotate arrays in O(1) auxiliary space using the 3-reversal algorithm, cyclic shifts, and juggling method.",
                        video: {
                            url: "https://www.youtube.com/watch?v=BHr381Guz3Y",
                            title: "Rotate Array in O(1) Space - 3 Reversals Explained",
                            start_seconds: 0,
                            end_seconds: 520,
                            chapters: [
                                { title: "Naive Shift vs Extra Space", start_seconds: 0 },
                                { title: "The 3-Reversal In-Place Algorithm", start_seconds: 140 },
                                { title: "Left vs Right Rotation Math", start_seconds: 320 }
                            ]
                        },
                        explanation: `
### 💡 3-Reversal Trick for Array Rotation by K
Bina kisi extra array ke array ko right shift karne ka best method:
1. **Reverse entire array**: \`[1, 2, 3, 4, 5, 6, 7] -> [7, 6, 5, 4, 3, 2, 1]\`
2. **Reverse first K elements**: \`[5, 6, 7, 4, 3, 2, 1]\`
3. **Reverse remaining N - K elements**: \`[5, 6, 7, 1, 2, 3, 4]\` (Done in **\`O(N)\` Time & \`O(1)\` Space**).

\`\`\`diagram:array-rotation
\`\`\`

### 🏷️ 3 Methods to Rotate an Array
1. **3-Reversal Method (Recommended)**: Best and cleanest \`O(N)\` time and \`O(1)\` space.
2. **Cyclic Replacements (Juggling Algorithm)**: Elements ko cycle-by-cycle shift karna using \`GCD(N, K)\`.
3. **Auxiliary Buffer**: Extra array allocate karke copy karna (\`O(N)\` Space).

### 💻 Code Implementation: 3-Reversal Array Rotation

\`\`\`python
# O(N) Time and O(1) Auxiliary Space
def rotate(nums, k):
    k = k % len(nums)
    def reverse(l, r):
        while l < r:
            nums[l], nums[r] = nums[r], nums[l]
            l += 1; r -= 1
            
    reverse(0, len(nums) - 1)      # Step 1: Reverse all
    reverse(0, k - 1)              # Step 2: Reverse first K
    reverse(k, len(nums) - 1)      # Step 3: Reverse rest
\`\`\`
                        `,
                        code_example: {
                            language: "multi",
                            python: `# Rotate Array by K Steps (LeetCode #189 - Python)
def rotate(nums, k):
    n = len(nums)
    k = k % n
    def reverse(l, r):
        while l < r:
            nums[l], nums[r] = nums[r], nums[l]
            l += 1; r -= 1
    reverse(0, n - 1)
    reverse(0, k - 1)
    reverse(k, n - 1)`,
                            java: `// Java 8 Solution: Rotate Array (In-Place 3-Reversal O(1) Space)
public class Solution {
    public void rotate(int[] nums, int k) {
        int n = nums.length;
        k = k % n;
        reverse(nums, 0, n - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, n - 1);
    }

    private void reverse(int[] nums, int l, int r) {
        while (l < r) {
            int temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            l++; r--;
        }
    }
}`
                        },
                        complexity: {
                            time: "O(N) linear single pass",
                            space: "O(1) in-place pointers"
                        },
                        practice_questions: [
                            { title: "Rotate Array (LeetCode #189)", difficulty: "Medium", url: "https://leetcode.com/problems/rotate-array/" },
                            { title: "Rotate Image Matrix 90° (LeetCode #48)", difficulty: "Medium", url: "https://leetcode.com/problems/rotate-image/" },
                            { title: "Search in Rotated Sorted Array (LeetCode #33)", difficulty: "Medium", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
                            { title: "Find Minimum in Rotated Sorted Array (LeetCode #153)", difficulty: "Medium", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" }
                        ]
                    },

                    // 9. MERGING INTERVALS
                    {
                        id: "topic-merging-intervals",
                        title: "Merging Intervals (Sweep Line Sorting & Interval Scheduling)",
                        slug: "merging-intervals",
                        difficulty: "Medium",
                        description: "Consolidate overlapping intervals and schedule non-overlapping time ranges using sweep line sorting.",
                        video: {
                            url: "https://www.youtube.com/watch?v=44H3cEC2fFM",
                            title: "Merge Overlapping Intervals & Array Rotation",
                            start_seconds: 0,
                            end_seconds: 600,
                            chapters: [
                                { title: "Sorting Intervals by Start Time", start_seconds: 0 },
                                { title: "Merge Overlapping Intervals Algorithm", start_seconds: 240 },
                                { title: "Insert Interval Edge Cases", start_seconds: 450 }
                            ]
                        },
                        explanation: `
### 💡 Merge Overlapping Intervals Algorithm
1. Intervals ko unke **start time** ke hisab se sort karo (\`O(N log N)\`).
2. Iterate karo: Agar \`current_interval.start <= previous_interval.end\` hai, toh dono overlap kar rahe hain ➔ \`previous_interval.end = max(previous.end, current.end)\`.
3. Warna naya interval output me push karo.

\`\`\`diagram:intervals
\`\`\`

### 🏷️ 3 Major Types of Interval Problems
1. **Merge Overlapping Intervals**: Overlapping intervals ko combine karke minimal non-overlapping list banana.
2. **Insert Interval**: Ek naya interval existing sorted list me insert karke merge karna.
3. **Interval Conflict / Meeting Rooms**: Minimum number of rooms calculate karna using Two Pointers on start and end arrays or Min-Heap.

### 💻 Code Implementations: Merge Intervals & Insert Interval

\`\`\`python
# 1. Merge Overlapping Intervals (O(N log N) Time, O(N) Space)
def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = []
    
    for interval in intervals:
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            merged[-1][1] = max(merged[-1][1], interval[1])
            
    return merged

# 2. Insert Interval (O(N) Time, O(N) Space)
def insert(intervals, newInterval):
    res = []
    i = 0
    n = len(intervals)
    
    # Add non-overlapping intervals before newInterval
    while i < n and intervals[i][1] < newInterval[0]:
        res.append(intervals[i])
        i += 1
    # Merge overlapping intervals
    while i < n and intervals[i][0] <= newInterval[1]:
        newInterval[0] = min(newInterval[0], intervals[i][0])
        newInterval[1] = max(newInterval[1], intervals[i][1])
        i += 1
    res.append(newInterval)
    # Add remaining intervals
    while i < n:
        res.append(intervals[i])
        i += 1
    return res
\`\`\`
                        `,
                        code_example: {
                            language: "multi",
                            python: `# Merge Overlapping Intervals (LeetCode #56 - Python)
def merge_intervals(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = []
    for interval in intervals:
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            merged[-1][1] = max(merged[-1][1], interval[1])
    return merged`,
                            java: `// Java 8 Solution: Merge Intervals (O(N log N) Sorting)
import java.util.*;

public class Solution {
    public int[][] merge(int[][] intervals) {
        if (intervals.length <= 1) return intervals;
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        List<int[]> merged = new ArrayList<>();

        for (int[] interval : intervals) {
            if (merged.isEmpty() || merged.get(merged.size() - 1)[1] < interval[0]) {
                merged.add(interval);
            } else {
                merged.get(merged.size() - 1)[1] = Math.max(merged.get(merged.size() - 1)[1], interval[1]);
            }
        }
        return merged.toArray(new int[merged.size()][]);
    }
}`
                        },
                        complexity: {
                            time: "O(N log N) sorting intervals, O(N) linear merge",
                            space: "O(N) merged result output list"
                        },
                        practice_questions: [
                            { title: "Merge Intervals (LeetCode #56)", difficulty: "Medium", url: "https://leetcode.com/problems/merge-intervals/" },
                            { title: "Insert Interval (LeetCode #57)", difficulty: "Medium", url: "https://leetcode.com/problems/insert-interval/" },
                            { title: "Non-overlapping Intervals (LeetCode #435)", difficulty: "Medium", url: "https://leetcode.com/problems/non-overlapping-intervals/" },
                            { title: "Meeting Rooms II (LeetCode #253)", difficulty: "Medium", url: "https://leetcode.com/problems/meeting-rooms-ii/" }
                        ]
                    },

                    // 10. SUBARRAY VS SUBSEQUENCE VS SUBSET PROBLEMS
                    {
                        id: "topic-subarray-subsequence",
                        title: "Subarray vs Subsequence vs Subset Problems (Patterns & Strategy)",
                        slug: "subarray-subsequence",
                        difficulty: "Medium",
                        description: "Master the fundamental differences between Subarrays, Subsequences, and Subsets, and learn which algorithmic technique solves each.",
                        video: {
                            url: "https://www.youtube.com/watch?v=9_B53msS-u4",
                            title: "Subarray vs Subsequence vs Subset Demystified",
                            start_seconds: 0,
                            end_seconds: 540,
                            chapters: [
                                { title: "Subarray vs Subsequence vs Subset Comparison", start_seconds: 0 },
                                { title: "Total Counts: N*(N+1)/2 vs 2^N", start_seconds: 140 },
                                { title: "Strategy Decision Matrix", start_seconds: 320 }
                            ]
                        },
                        explanation: `
### 💡 The Big 3: Subarray vs Subsequence vs Subset

| Concept | Adjacency (Contiguous)? | Relative Order Preserved? | Total Count | Common Techniques |
| :--- | :--- | :--- | :--- | :--- |
| **Subarray** | **YES (Strictly Adjacent)** | **YES** | \`N*(N+1)/2 = O(N²)\` | Sliding Window, Prefix Sum, Kadane |
| **Subsequence** | **NO (Can Skip Elements)** | **YES** | \`2ᴺ - 1 = O(2ᴺ)\` | Dynamic Programming (LIS, LCS), Recursion |
| **Subset** | **NO (Any Combination)** | **NO (Any Order)** | \`2ᴺ = O(2ᴺ)\` | Backtracking, Bitmasking |

\`\`\`diagram:subarray-subsequence
\`\`\`

### 🏷️ Strategy Decision Matrix
- **If question asks for contiguous elements**: Use **Sliding Window** (if positive/monotone) or **Prefix Sum + HashMap** (if negative numbers present) or **Kadane's** (if max/min sum).
- **If question allows deleting elements without reordering**: Use **Dynamic Programming** (\`O(N²)\` or \`O(N log N)\`) or **Recursion with Memoization**.
- **If question asks for all combinations**: Use **Backtracking** (\`O(2ᴺ)\` or \`O(N!)\`).

### 💻 Code Implementations: Generating Subarrays vs Subsequences

\`\`\`python
# 1. Generating All Subarrays (O(N^2) Time, Contiguous)
def generate_all_subarrays(arr):
    subarrays = []
    n = len(arr)
    for i in range(n):
        for j in range(i, n):
            subarrays.append(arr[i:j+1])
    return subarrays

# 2. Generating All Subsequences via Backtracking (O(2^N) Time)
def generate_all_subsequences(arr):
    res = []
    def backtrack(idx, path):
        if idx == len(arr):
            res.append(list(path))
            return
        # 1. Include element
        path.append(arr[idx])
        backtrack(idx + 1, path)
        path.pop()
        # 2. Exclude element
        backtrack(idx + 1, path)
    backtrack(0, [])
    return res
\`\`\`
                        `,
                        code_example: {
                            language: "multi",
                            python: `# Longest Increasing Subsequence (LeetCode #300 - O(N log N) via Binary Search)
import bisect

def length_of_lis(nums):
    tails = []
    for x in nums:
        idx = bisect.bisect_left(tails, x)
        if idx == len(tails):
            tails.append(x)
        else:
            tails[idx] = x
    return len(tails)`,
                            java: `// Java 8 Solution: Longest Increasing Subsequence (O(N log N) Binary Search)
import java.util.*;

public class Solution {
    public int lengthOfLIS(int[] nums) {
        int[] tails = new int[nums.length];
        int size = 0;

        for (int x : nums) {
            int i = 0, j = size;
            while (i != j) {
                int m = (i + j) / 2;
                if (tails[m] < x) i = m + 1;
                else j = m;
            }
            tails[i] = x;
            if (i == size) size++;
        }
        return size;
    }
}`
                        },
                        complexity: {
                            time: "O(N^2) for all subarrays, O(2^N) for subsequences, O(N log N) for LIS",
                            space: "O(N) auxiliary space"
                        },
                        practice_questions: [
                            { title: "Longest Increasing Subsequence (LeetCode #300)", difficulty: "Medium", url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
                            { title: "Is Subsequence (LeetCode #392)", difficulty: "Easy", url: "https://leetcode.com/problems/is-subsequence/" },
                            { title: "Maximum Subarray (LeetCode #53)", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-subarray/" },
                            { title: "Distinct Subsequences (LeetCode #115)", difficulty: "Hard", url: "https://leetcode.com/problems/distinct-subsequences/" }
                        ]
                    }
                ]
            },

            // 3. Strings
            {
                id: "sub-strings",
                name: "3. Strings",
                icon: "🔤",
                topics: [
                    {
                        id: "topic-string-manipulation",
                        title: "String Traversal, Palindromes & Anagrams",
                        slug: "string-manipulation-anagrams",
                        difficulty: "Easy",
                        description: "Character frequency counting, ASCII arithmetic, palindrome verification, and anagram hashing.",
                        video: {
                            url: "https://www.youtube.com/watch?v=9UtInBqnCgA",
                            title: "Valid Anagram & Palindrome Problem Solving",
                            start_seconds: 0,
                            end_seconds: 520,
                            chapters: [
                                { title: "Two Pointer Palindrome Check", start_seconds: 0 },
                                { title: "Fixed 26-element ASCII Array Hash", start_seconds: 220 }
                            ]
                        },
                        explanation: `
### 💡 Anagram Verification with O(1) Space
Since lowercase English letters are only 26 characters (\`'a'\` to \`'z'\`), an array of size 26 acts as a fast fixed-size hash table.

\`\`\`
String 1: "anagram"   -> freq['a'-'a'] += 3, freq['n'-'a'] += 1, ...
String 2: "nagaram"   -> freq['n'-'a'] -= 1, freq['a'-'a'] -= 3, ...
Result: If all 26 buckets are 0, strings are valid anagrams!
\`\`\`
                        `,
                        code_example: {
                            language: "python",
                            code: `def is_anagram(s: str, t: str) -> bool:
    if len(s) != len(t): return False
    count = [0] * 26
    for char_s, char_t in zip(s, t):
        count[ord(char_s) - ord('a')] += 1
        count[ord(char_t) - ord('a')] -= 1
    return all(c == 0 for c in count)`
                        },
                        complexity: {
                            time: "O(N) single pass",
                            space: "O(1) auxiliary (26 integer array)"
                        },
                        practice_questions: [
                            { title: "Valid Anagram (LeetCode #242)", difficulty: "Easy", url: "https://leetcode.com/problems/valid-anagram/" },
                            { title: "Valid Palindrome (LeetCode #125)", difficulty: "Easy", url: "https://leetcode.com/problems/valid-palindrome/" },
                            { title: "Group Anagrams (LeetCode #49)", difficulty: "Medium", url: "https://leetcode.com/problems/group-anagrams/" }
                        ]
                    },
                    {
                        id: "topic-pattern-matching-kmp",
                        title: "Pattern Matching: KMP, Rabin-Karp & Z-Algorithm",
                        slug: "pattern-matching-kmp-rabin-karp",
                        difficulty: "Hard",
                        description: "Linear time O(N + M) substring search using LPS array, polynomial rolling hashes, and Z-boxes.",
                        video: {
                            url: "https://www.youtube.com/watch?v=JoF0Z7nVSrA",
                            title: "KMP Algorithm (Knuth-Morris-Pratt) LPS Table",
                            start_seconds: 0,
                            end_seconds: 800,
                            chapters: [
                                { title: "Why Naive Matching is O(N*M)", start_seconds: 0 },
                                { title: "Longest Prefix Suffix (LPS) Table", start_seconds: 240 },
                                { title: "Linear Search using LPS", start_seconds: 510 }
                            ]
                        },
                        explanation: `
### 💡 KMP (Knuth-Morris-Pratt) Principle
Avoid backtracking the main text pointer by precomputing the **LPS (Longest Proper Prefix which is also Suffix)** table.

\`\`\`
Pattern: A A B A A C
LPS:    [0, 1, 0, 1, 2, 0]

When mismatch occurs at 'C', we don't start from index 0!
We jump back to index LPS[4] = 2 ('B').
\`\`\`
                        `,
                        code_example: {
                            language: "python",
                            code: `def build_lps(pattern: str) -> list[int]:
    lps = [0] * len(pattern)
    length = 0
    i = 1
    while i < len(pattern):
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        elif length != 0:
            length = lps[length - 1]
        else:
            lps[i] = 0
            i += 1
    return lps`
                        },
                        complexity: {
                            time: "O(N + M) linear",
                            space: "O(M) for LPS array"
                        },
                        practice_questions: [
                            { title: "Find the Index of the First Occurrence in a String (LeetCode #28)", difficulty: "Easy", url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/" },
                            { title: "Shortest Palindrome (KMP LPS) (LeetCode #214)", difficulty: "Hard", url: "https://leetcode.com/problems/shortest-palindrome/" }
                        ]
                    }
                ]
            },

            // 4. Searching
            {
                id: "sub-searching",
                name: "4. Searching",
                icon: "🔍",
                topics: [
                    {
                        id: "topic-binary-search-mastery",
                        title: "Binary Search & Search Space Variations",
                        slug: "binary-search-mastery",
                        difficulty: "Medium",
                        description: "Search in sorted arrays, search in rotated sorted arrays, first/last occurrences, and 2D matrices.",
                        video: {
                            url: "https://www.youtube.com/watch?v=W9QJ8HaRvJQ",
                            title: "Binary Search On Answer & Rotated Arrays",
                            start_seconds: 0,
                            end_seconds: 720,
                            chapters: [
                                { title: "Standard Binary Search & Invariants", start_seconds: 0 },
                                { title: "Rotated Sorted Array Search", start_seconds: 280 },
                                { title: "Binary Search on Monotonic Answer Space", start_seconds: 510 }
                            ]
                        },
                        explanation: `
### 💡 Binary Search on Answer Space
Whenever a condition has a monotonic boolean boundary: \`[F, F, F, T, T, T, T]\`, Binary Search can find the exact transition point in \`O(log(High - Low))\`.

\`\`\`
Search Space:  1   2   3   4   5   6   7   8
Feasible?:    [N,  N,  N,  N,  Y,  Y,  Y,  Y]
                               ^ Minimum Answer!
\`\`\`
                        `,
                        code_example: {
                            language: "python",
                            code: `def search_rotated(nums: list[int], target: int) -> int:
    low, high = 0, len(nums) - 1
    while low <= high:
        mid = low + (high - low) // 2
        if nums[mid] == target: return mid
        
        # Left half is sorted
        if nums[low] <= nums[mid]:
            if nums[low] <= target < nums[mid]:
                high = mid - 1
            else:
                low = mid + 1
        # Right half is sorted
        else:
            if nums[mid] < target <= nums[high]:
                low = mid + 1
            else:
                high = mid - 1
    return -1`
                        },
                        complexity: {
                            time: "O(log N)",
                            space: "O(1)"
                        },
                        practice_questions: [
                            { title: "Binary Search (LeetCode #704)", difficulty: "Easy", url: "https://leetcode.com/problems/binary-search/" },
                            { title: "Search in Rotated Sorted Array (LeetCode #33)", difficulty: "Medium", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
                            { title: "Search a 2D Matrix (LeetCode #74)", difficulty: "Medium", url: "https://leetcode.com/problems/search-a-2d-matrix/" },
                            { title: "Koko Eating Bananas (BS on Answer) (LeetCode #875)", difficulty: "Medium", url: "https://leetcode.com/problems/koko-eating-bananas/" }
                        ]
                    },
                    {
                        id: "topic-ternary-exponential-search",
                        title: "Ternary & Exponential Search",
                        slug: "ternary-exponential-search",
                        difficulty: "Medium",
                        description: "Ternary search on unimodal functions and unbounded exponential search for large ranges.",
                        video: {
                            url: "https://www.youtube.com/watch?v=F3uX81GvE3g",
                            title: "Ternary Search & Finding Minima/Maxima",
                            start_seconds: 0,
                            end_seconds: 480,
                            chapters: [
                                { title: "Trisecting the Search Space", start_seconds: 0 },
                                { title: "Unbounded Exponential Search", start_seconds: 240 }
                            ]
                        },
                        explanation: `
### 💡 Ternary Search
Splits range into 3 equal parts using \`m1 = l + (r - l)/3\` and \`m2 = r - (r - l)/3\`. Used for finding peaks/troughs in unimodal convex functions.
                        `,
                        code_example: {
                            language: "python",
                            code: `def exponential_search(arr: list[int], target: int) -> int:
    if arr[0] == target: return 0
    i = 1
    n = len(arr)
    while i < n and arr[i] <= target:
        i *= 2
    # Binary search within range [i//2, min(i, n - 1)]
    low, high = i // 2, min(i, n - 1)
    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] == target: return mid
        elif arr[mid] < target: low = mid + 1
        else: high = mid - 1
    return -1`
                        },
                        complexity: {
                            time: "O(log i) where i is target index",
                            space: "O(1)"
                        },
                        practice_questions: [
                            { title: "Peak Index in a Mountain Array (LeetCode #852)", difficulty: "Medium", url: "https://leetcode.com/problems/peak-index-in-a-mountain-array/" }
                        ]
                    }
                ]
            },

            // 5. Sorting
            {
                id: "sub-sorting",
                name: "5. Sorting",
                icon: "🔄",
                topics: [
                    {
                        id: "topic-comparison-sorts",
                        title: "Merge Sort, Quick Sort & Heap Sort",
                        slug: "merge-quick-heap-sort",
                        difficulty: "Medium",
                        description: "Divide-and-conquer O(N log N) sorting algorithms: stable merge, in-place quicksort partitioning, and max-heaps.",
                        video: {
                            url: "https://www.youtube.com/watch?v=Hoixgm4-P4M",
                            title: "Quick Sort vs Merge Sort Deep Dive",
                            start_seconds: 0,
                            end_seconds: 750,
                            chapters: [
                                { title: "Merge Sort Divide & Conquer", start_seconds: 0 },
                                { title: "Lomuto & Hoare Partitioning in QuickSort", start_seconds: 320 },
                                { title: "Stability & Worst Case Scenarios", start_seconds: 560 }
                            ]
                        },
                        explanation: `
### 💡 Comparison Sort Tradeoffs
| Algorithm | Time (Best) | Time (Avg) | Time (Worst) | Space | Stable? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Merge Sort** | O(N log N) | O(N log N) | O(N log N) | O(N) | ✅ Yes |
| **Quick Sort** | O(N log N) | O(N log N) | O(N^2) | O(log N) | ❌ No |
| **Heap Sort** | O(N log N) | O(N log N) | O(N log N) | O(1) | ❌ No |
                        `,
                        code_example: {
                            language: "python",
                            code: `def quick_sort(arr: list[int], low: int, high: int):
    if low < high:
        # Lomuto Partition Scheme
        pivot = arr[high]
        i = low - 1
        for j in range(low, high):
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]
        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        p_idx = i + 1
        
        quick_sort(arr, low, p_idx - 1)
        quick_sort(arr, p_idx + 1, high)`
                        },
                        complexity: {
                            time: "O(N log N) Average",
                            space: "O(log N) Call Stack for Quicksort"
                        },
                        practice_questions: [
                            { title: "Sort an Array (LeetCode #912)", difficulty: "Medium", url: "https://leetcode.com/problems/sort-an-array/" },
                            { title: "Kth Largest Element in an Array (Quickselect) (LeetCode #215)", difficulty: "Medium", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" }
                        ]
                    },
                    {
                        id: "topic-non-comparison-sorts",
                        title: "Counting Sort, Radix Sort & Bucket Sort",
                        slug: "non-comparison-sorts",
                        difficulty: "Medium",
                        description: "Linear time O(N + K) sorting by breaking comparison barrier using digit indexing and buckets.",
                        video: {
                            url: "https://www.youtube.com/watch?v=OKd534EWcdk",
                            title: "Counting & Radix Sort in Linear Time",
                            start_seconds: 0,
                            end_seconds: 600,
                            chapters: [
                                { title: "Breaking the O(N log N) Barrier", start_seconds: 0 },
                                { title: "LSD (Least Significant Digit) Radix Sort", start_seconds: 290 }
                            ]
                        },
                        explanation: `
### 💡 Radix Sort with Counting Sort
Processes digits from Least Significant Digit (LSD) to Most Significant Digit (MSD). Stable counting sort on each digit preserves relative orders.
                        `,
                        code_example: {
                            language: "python",
                            code: `def counting_sort(arr: list[int]) -> list[int]:
    if not arr: return []
    min_val, max_val = min(arr), max(arr)
    count = [0] * (max_val - min_val + 1)
    for x in arr: count[x - min_val] += 1
    
    res = []
    for val_offset, freq in enumerate(count):
        res.extend([val_offset + min_val] * freq)
    return res`
                        },
                        complexity: {
                            time: "O(N + K) where K is value range",
                            space: "O(K) auxiliary buffer"
                        },
                        practice_questions: [
                            { title: "Maximum Gap (Bucket / Radix Sort) (LeetCode #164)", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-gap/" }
                        ]
                    }
                ]
            },

            // 6. Linked List
            {
                id: "sub-linked-list",
                name: "6. Linked List",
                icon: "🔗",
                topics: [
                    {
                        id: "topic-linked-list-core",
                        title: "Singly, Doubly, Circular Lists & In-Place Reversal",
                        slug: "linked-list-core-reversal",
                        difficulty: "Easy",
                        description: "Pointer rewiring, iterative and recursive reversal, dummy heads, and bidirectional nodes.",
                        video: {
                            url: "https://www.youtube.com/watch?v=G0_I-ZF0S38",
                            title: "Reverse Linked List Iteratively & Recursively",
                            start_seconds: 0,
                            end_seconds: 540,
                            chapters: [
                                { title: "3-Pointer In-Place Reversal", start_seconds: 0 },
                                { title: "Recursive Reversal Stack", start_seconds: 270 }
                            ]
                        },
                        explanation: `
### 💡 The 3-Pointer In-Place Reversal
Use \`prev\`, \`curr\`, and \`nxt\` pointers to flip \`curr.next = prev\` in a single pass.

\`\`\`
Step 0:  None <- [1]    [2] -> [3] -> None
         prev    curr   nxt

Step 1:  None <- [1] <- [2]    [3] -> None
                 prev   curr   nxt
\`\`\`
                        `,
                        code_example: {
                            language: "python",
                            code: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_list(head: ListNode) -> ListNode:
    prev = None
    curr = head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev`
                        },
                        complexity: {
                            time: "O(N) single traversal",
                            space: "O(1) auxiliary pointers"
                        },
                        practice_questions: [
                            { title: "Reverse Linked List (LeetCode #206)", difficulty: "Easy", url: "https://leetcode.com/problems/reverse-linked-list/" },
                            { title: "Reverse Nodes in k-Group (LeetCode #25)", difficulty: "Hard", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/" }
                        ]
                    },
                    {
                        id: "topic-floyds-cycle-merge",
                        title: "Floyd's Cycle Detection & Fast-Slow Pointers",
                        slug: "floyds-cycle-detection",
                        difficulty: "Medium",
                        description: "Tortoise and Hare algorithm for cycle detection, finding cycle entrance, middle node, and merging lists.",
                        video: {
                            url: "https://www.youtube.com/watch?v=gBTe7lFR3vc",
                            title: "Floyd's Tortoise and Hare Cycle Proof",
                            start_seconds: 0,
                            end_seconds: 600,
                            chapters: [
                                { title: "Cycle Existence Proof", start_seconds: 0 },
                                { title: "Finding Cycle Start Math Proof (2K - K = N*L)", start_seconds: 280 }
                            ]
                        },
                        explanation: `
### 💡 Floyd's Cycle Mathematics
When \`slow\` moves 1 step and \`fast\` moves 2 steps:
1. If they meet, a cycle exists.
2. Reset \`slow = head\`. Move both \`slow\` and \`fast\` 1 step at a time. The node where they collide is the **Cycle Start**!
                        `,
                        code_example: {
                            language: "python",
                            code: `def detect_cycle(head: ListNode) -> ListNode:
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            # Cycle detected; find start
            slow = head
            while slow != fast:
                slow = slow.next
                fast = fast.next
            return slow
    return None`
                        },
                        complexity: {
                            time: "O(N)",
                            space: "O(1) without hash sets"
                        },
                        practice_questions: [
                            { title: "Linked List Cycle (LeetCode #141)", difficulty: "Easy", url: "https://leetcode.com/problems/linked-list-cycle/" },
                            { title: "Linked List Cycle II (LeetCode #142)", difficulty: "Medium", url: "https://leetcode.com/problems/linked-list-cycle-ii/" },
                            { title: "Merge Two Sorted Lists (LeetCode #21)", difficulty: "Easy", url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
                            { title: "Remove Nth Node From End of List (LeetCode #19)", difficulty: "Medium", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
                            { title: "Intersection of Two Linked Lists (LeetCode #160)", difficulty: "Easy", url: "https://leetcode.com/problems/intersection-of-two-linked-lists/" }
                        ]
                    }
                ]
            },

            // 7. Stack
            {
                id: "sub-stack",
                name: "7. Stack",
                icon: "🥞",
                topics: [
                    {
                        id: "topic-stack-monotonic",
                        title: "Stack Implementation & Monotonic Stack",
                        slug: "monotonic-stack",
                        difficulty: "Medium",
                        description: "LIFO data structure, balanced parentheses, Next Greater Element, and largest rectangle in histograms.",
                        video: {
                            url: "https://www.youtube.com/watch?v=Dq_ObZwTY_Q",
                            title: "Monotonic Stack Next Greater Element Pattern",
                            start_seconds: 0,
                            end_seconds: 680,
                            chapters: [
                                { title: "LIFO Property & Array Implementation", start_seconds: 0 },
                                { title: "Monotonically Decreasing / Increasing Stack", start_seconds: 220 },
                                { title: "Largest Rectangle in Histogram", start_seconds: 450 }
                            ]
                        },
                        explanation: `
### 💡 Monotonic Stack Pattern
Maintains elements in strictly increasing or decreasing order. As soon as a new element violates the order, stack items are popped and resolved in \`O(1)\` amortized time.

\`\`\`
Input: [2, 1, 5, 6, 2, 3]
Stack stores indices of elements in ascending height order.
When current height < stack.top(), pop and calculate area with popped element as the limiting height!
\`\`\`
                        `,
                        code_example: {
                            language: "python",
                            code: `def next_greater_elements(nums: list[int]) -> list[int]:
    n = len(nums)
    res = [-1] * n
    stack = []  # indices
    
    for i in range(2 * n):
        idx = i % n
        while stack and nums[stack[-1]] < nums[idx]:
            popped_idx = stack.pop()
            res[popped_idx] = nums[idx]
        if i < n:
            stack.append(idx)
            
    return res`
                        },
                        complexity: {
                            time: "O(N) each element pushed/popped at most once",
                            space: "O(N) for stack"
                        },
                        practice_questions: [
                            { title: "Valid Parentheses (LeetCode #20)", difficulty: "Easy", url: "https://leetcode.com/problems/valid-parentheses/" },
                            { title: "Min Stack (O(1) getMin) (LeetCode #155)", difficulty: "Medium", url: "https://leetcode.com/problems/min-stack/" },
                            { title: "Daily Temperatures (LeetCode #739)", difficulty: "Medium", url: "https://leetcode.com/problems/daily-temperatures/" },
                            { title: "Largest Rectangle in Histogram (LeetCode #84)", difficulty: "Hard", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" }
                        ]
                    }
                ]
            },

            // 8. Queue
            {
                id: "sub-queue",
                name: "8. Queue & Deque",
                icon: "🚶",
                topics: [
                    {
                        id: "topic-queue-deque-monotonic",
                        title: "Queue, Circular Deque & Sliding Window Maximum",
                        slug: "queue-deque-sliding-window-max",
                        difficulty: "Medium",
                        description: "FIFO order, circular ring buffers, double-ended queues, and monotonic deque window extremes.",
                        video: {
                            url: "https://www.youtube.com/watch?v=DfljaUwZsOk",
                            title: "Sliding Window Maximum using Monotonic Deque",
                            start_seconds: 0,
                            end_seconds: 620,
                            chapters: [
                                { title: "FIFO Buffer & Circular Index Arithmetic", start_seconds: 0 },
                                { title: "Monotonic Decreasing Deque for Window Max", start_seconds: 240 }
                            ]
                        },
                        explanation: `
### 💡 Monotonic Deque for Sliding Window Maximum
Maintain a deque where elements are strictly decreasing.
1. Pop smaller elements from the back before inserting the new element.
2. Remove elements from the front that fell outside the left window boundary \`i - k\`.
3. \`deque[0]\` is always the current maximum!
                        `,
                        code_example: {
                            language: "python",
                            code: `from collections import deque

def max_sliding_window(nums: list[int], k: int) -> list[int]:
    q = deque()  # stores indices
    res = []
    
    for i, n in enumerate(nums):
        # 1. Remove elements out of window boundary
        if q and q[0] <= i - k:
            q.popleft()
            
        # 2. Remove smaller elements from back
        while q and nums[q[-1]] < n:
            q.pop()
            
        q.append(i)
        
        # 3. Add to output once first window of size k is formed
        if i >= k - 1:
            res.append(nums[q[0]])
            
    return res`
                        },
                        complexity: {
                            time: "O(N) linear pass",
                            space: "O(K) deque size"
                        },
                        practice_questions: [
                            { title: "Sliding Window Maximum (LeetCode #239)", difficulty: "Hard", url: "https://leetcode.com/problems/sliding-window-maximum/" },
                            { title: "Implement Queue using Stacks (LeetCode #232)", difficulty: "Easy", url: "https://leetcode.com/problems/implement-queue-using-stacks/" },
                            { title: "Design Circular Deque (LeetCode #641)", difficulty: "Medium", url: "https://leetcode.com/problems/design-circular-deque/" }
                        ]
                    }
                ]
            },

            // 9. Hashing
            {
                id: "sub-hashing",
                name: "9. Hashing",
                icon: "🔑",
                topics: [
                    {
                        id: "topic-hashmap-hashset",
                        title: "HashMap, Collision Resolution & Frequency Counting",
                        slug: "hashmap-hashset-concepts",
                        difficulty: "Easy",
                        description: "Hash functions, load factor, chaining with linked lists, open addressing, and constant time lookups.",
                        video: {
                            url: "https://www.youtube.com/watch?v=shs0KM3wKv8",
                            title: "How Hash Tables Work Under the Hood",
                            start_seconds: 0,
                            end_seconds: 640,
                            chapters: [
                                { title: "Hash Functions & Bucket Array", start_seconds: 0 },
                                { title: "Collision Handling: Chaining vs Probing", start_seconds: 240 },
                                { title: "Load Factor & Dynamic Rehashing", start_seconds: 450 }
                            ]
                        },
                        explanation: `
### 💡 Collision Resolution
- **Separate Chaining**: Buckets store linked lists (or self-balancing Red-Black trees if length > 8 as in Java 8+).
- **Open Addressing**: Linear Probing \`(h + i) % m\`, Quadratic Probing, or Double Hashing.

\`\`\`
Hash Table Array:
Bucket [0] -> None
Bucket [1] -> [ "apple": 5 ] -> [ "cherry": 8 ] (Chaining)
Bucket [2] -> [ "banana": 2 ]
\`\`\`
                        `,
                        code_example: {
                            language: "python",
                            code: `def two_sum(nums: list[int], target: int) -> list[int]:
    seen = {} # val -> index
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`
                        },
                        complexity: {
                            time: "O(1) Average lookup/insert, O(N) Worst Case collisions",
                            space: "O(N) bucket storage"
                        },
                        practice_questions: [
                            { title: "Two Sum (LeetCode #1)", difficulty: "Easy", url: "https://leetcode.com/problems/two-sum/" },
                            { title: "Longest Consecutive Sequence (LeetCode #128)", difficulty: "Medium", url: "https://leetcode.com/problems/longest-consecutive-sequence/" },
                            { title: "LRU Cache (HashMap + Doubly Linked List) (LeetCode #146)", difficulty: "Medium", url: "https://leetcode.com/problems/lru-cache/" }
                        ]
                    }
                ]
            },

            // 10. Trees
            {
                id: "sub-trees",
                name: "10. Trees",
                icon: "🌲",
                topics: [
                    {
                        id: "topic-binary-tree-traversals",
                        title: "Binary Tree Traversals (DFS & BFS Level Order)",
                        slug: "binary-tree-traversals",
                        difficulty: "Medium",
                        description: "Inorder, Preorder, Postorder (recursive & iterative), Level Order BFS, Zigzag, and Boundary walks.",
                        video: {
                            url: "https://www.youtube.com/watch?v=b_N49EWG15c",
                            title: "All Binary Tree Traversals in One Video",
                            start_seconds: 0,
                            end_seconds: 800,
                            chapters: [
                                { title: "Inorder, Preorder, Postorder Intuition", start_seconds: 0 },
                                { title: "Iterative Traversal using Stacks", start_seconds: 310 },
                                { title: "Level Order Traversal with Queue", start_seconds: 580 }
                            ]
                        },
                        explanation: `
### 💡 Traversal Orders
- **Preorder (Root -> Left -> Right)**: Used to clone trees and serialize state.
- **Inorder (Left -> Root -> Right)**: Gives sorted ascending elements in a Binary Search Tree (BST)!
- **Postorder (Left -> Right -> Root)**: Bottom-up evaluation (e.g., computing height, deleting tree).

\`\`\`
       1 (Root)
      / \\
     2   3
    / \\
   4   5
Preorder:   1 -> 2 -> 4 -> 5 -> 3
Inorder:    4 -> 2 -> 5 -> 1 -> 3
Postorder:  4 -> 5 -> 2 -> 3 -> 1
Levelorder: 1 -> 2 -> 3 -> 4 -> 5
\`\`\`
                        `,
                        code_example: {
                            language: "python",
                            code: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def level_order(root: TreeNode) -> list[list[int]]:
    if not root: return []
    res = []
    q = deque([root])
    
    while q:
        level_size = len(q)
        current_level = []
        for _ in range(level_size):
            node = q.popleft()
            current_level.append(node.val)
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
        res.append(current_level)
        
    return res`
                        },
                        complexity: {
                            time: "O(N) visiting every node exactly once",
                            space: "O(N) queue/stack size"
                        },
                        practice_questions: [
                            { title: "Binary Tree Level Order Traversal (LeetCode #102)", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
                            { title: "Binary Tree Zigzag Level Order Traversal (LeetCode #103)", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" },
                            { title: "Maximum Depth of Binary Tree (LeetCode #104)", difficulty: "Easy", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
                            { title: "Diameter of Binary Tree (LeetCode #543)", difficulty: "Easy", url: "https://leetcode.com/problems/diameter-of-binary-tree/" }
                        ]
                    },
                    {
                        id: "topic-bst-and-lca",
                        title: "Binary Search Tree (BST) & Lowest Common Ancestor (LCA)",
                        slug: "bst-and-lca",
                        difficulty: "Medium",
                        description: "BST validation, insertion, deletion, and LCA queries in both BSTs and arbitrary binary trees.",
                        video: {
                            url: "https://www.youtube.com/watch?v=gs2LMfuOR9k",
                            title: "Lowest Common Ancestor & BST Operations",
                            start_seconds: 0,
                            end_seconds: 650,
                            chapters: [
                                { title: "BST Invariant (Left < Root < Right)", start_seconds: 0 },
                                { title: "LCA in Binary Tree (Postorder DFS)", start_seconds: 290 }
                            ]
                        },
                        explanation: `
### 💡 Lowest Common Ancestor (LCA) Logic
In an arbitrary binary tree:
- If current node is \`p\` or \`q\`, return current node.
- Recurse on left and right.
- If both left and right return non-null, **current node is the LCA**!
                        `,
                        code_example: {
                            language: "python",
                            code: `def lowest_common_ancestor(root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
    if not root or root == p or root == q:
        return root
        
    left = lowest_common_ancestor(root.left, p, q)
    right = lowest_common_ancestor(root.right, p, q)
    
    if left and right:
        return root  # p and q are split across both subtrees
    return left if left else right`
                        },
                        complexity: {
                            time: "O(N) for tree, O(H) for BST",
                            space: "O(H) call stack"
                        },
                        practice_questions: [
                            { title: "Validate Binary Search Tree (LeetCode #98)", difficulty: "Medium", url: "https://leetcode.com/problems/validate-binary-search-tree/" },
                            { title: "Lowest Common Ancestor of a Binary Tree (LeetCode #236)", difficulty: "Medium", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
                            { title: "Serialize and Deserialize Binary Tree (LeetCode #297)", difficulty: "Hard", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" }
                        ]
                    },
                    {
                        id: "topic-trie-prefix-tree",
                        title: "Trie (Prefix Tree) & Auto-completion",
                        slug: "trie-prefix-tree",
                        difficulty: "Medium",
                        description: "N-ary tree structure to search and insert string prefixes in O(Length) time.",
                        video: {
                            url: "https://www.youtube.com/watch?v=o6563IIbQRE",
                            title: "Trie Data Structure Implementation & Prefix Searches",
                            start_seconds: 0,
                            end_seconds: 600,
                            chapters: [
                                { title: "Trie Node Structure & Children Map", start_seconds: 0 },
                                { title: "Insert & StartsWith Word Logic", start_seconds: 220 }
                            ]
                        },
                        explanation: `
### 💡 Trie Node Structure
Each node contains a fixed array or map of 26 child pointers and an \`is_end_of_word\` flag.
\`\`\`
       (Root)
       /    \\
     'c'    'd'
     /        \\
   'a'        'o'
   /            \\
 't' (End)      'g' (End)
\`\`\`
                        `,
                        code_example: {
                            language: "python",
                            code: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.is_end = True

    def starts_with(self, prefix: str) -> bool:
        node = self.root
        for ch in prefix:
            if ch not in node.children: return False
            node = node.children[ch]
        return True`
                        },
                        complexity: {
                            time: "O(L) where L is string length",
                            space: "O(Total Characters * Alphabet Size)"
                        },
                        practice_questions: [
                            { title: "Implement Trie (Prefix Tree) (LeetCode #208)", difficulty: "Medium", url: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
                            { title: "Word Search II (Trie + Backtracking) (LeetCode #212)", difficulty: "Hard", url: "https://leetcode.com/problems/word-search-ii/" }
                        ]
                    },
                    {
                        id: "topic-segment-tree-fenwick",
                        title: "Segment Tree, Fenwick Tree (BIT) & Heaps",
                        slug: "segment-tree-fenwick-heap",
                        difficulty: "Hard",
                        description: "Range query aggregations (Sum/Min/Max) and point updates in O(log N) using segment trees and binary heaps.",
                        video: {
                            url: "https://www.youtube.com/watch?v=rYBtV14zp60",
                            title: "Segment Tree Range Minimum & Point Updates",
                            start_seconds: 0,
                            end_seconds: 750,
                            chapters: [
                                { title: "Tree Array Representation (2i, 2i+1)", start_seconds: 0 },
                                { title: "O(log N) Query Overlap Cases", start_seconds: 320 }
                            ]
                        },
                        explanation: `
### 💡 Segment Tree Range Decomposition
Builds a binary tree where leaf nodes represent array items and internal nodes store merged range values (e.g. \`node.val = left.val + right.val\`).

\`\`\`
                     [0..3] (Sum=24)
                    /               \\
            [0..1] (10)           [2..3] (14)
            /        \\            /        \\
         [0](3)     [1](7)      [2](6)     [3](8)
\`\`\`
                        `,
                        code_example: {
                            language: "python",
                            code: `class SegmentTree:
    def __init__(self, nums: list[int]):
        self.n = len(nums)
        self.tree = [0] * (4 * self.n)
        self.build(nums, 0, 0, self.n - 1)

    def build(self, nums, node, l, r):
        if l == r:
            self.tree[node] = nums[l]; return
        mid = (l + r) // 2
        self.build(nums, 2 * node + 1, l, mid)
        self.build(nums, 2 * node + 2, mid + 1, r)
        self.tree[node] = self.tree[2 * node + 1] + self.tree[2 * node + 2]`
                        },
                        complexity: {
                            time: "O(log N) query & update, O(N) build",
                            space: "O(4N) array storage"
                        },
                        practice_questions: [
                            { title: "Range Sum Query - Mutable (LeetCode #307)", difficulty: "Medium", url: "https://leetcode.com/problems/range-sum-query-mutable/" },
                            { title: "Find Median from Data Stream (Heap) (LeetCode #295)", difficulty: "Hard", url: "https://leetcode.com/problems/find-median-from-data-stream/" }
                        ]
                    }
                ]
            },

            // 11. Graphs
            {
                id: "sub-graphs",
                name: "11. Graphs",
                icon: "🕸️",
                topics: [
                    {
                        id: "topic-graph-traversals",
                        title: "Graph Representation, BFS, DFS & Connected Components",
                        slug: "graph-bfs-dfs-components",
                        difficulty: "Medium",
                        description: "Adjacency list/matrix representations, flood fill, level-by-level BFS, and recursive DFS.",
                        video: {
                            url: "https://www.youtube.com/watch?v=tWVWeAqZ0WU",
                            title: "Graph Algorithms - BFS, DFS & Number of Islands",
                            start_seconds: 0,
                            end_seconds: 700,
                            chapters: [
                                { title: "Adjacency List vs Matrix Space/Time", start_seconds: 0 },
                                { title: "Breadth-First Search (Queue FIFO)", start_seconds: 220 },
                                { title: "Depth-First Search (Recursive Call)", start_seconds: 460 }
                            ]
                        },
                        explanation: `
### 💡 Graph Traversals Comparison
- **BFS (Breadth First Search)**: Uses a **Queue**. Guarantees the shortest path in unweighted graphs.
- **DFS (Depth First Search)**: Uses a **Stack / Recursion**. Ideal for connectivity, cycles, and backtracking.

\`\`\`
       (0) ------- (1)
        |           |
        |           |
       (2) ------- (3)
BFS from 0: 0 -> 1 -> 2 -> 3
DFS from 0: 0 -> 1 -> 3 -> 2
\`\`\`
                        `,
                        code_example: {
                            language: "python",
                            code: `from collections import deque

def num_islands(grid: list[list[str]]) -> int:
    if not grid: return 0
    rows, cols = len(grid), len(grid[0])
    islands = 0
    
    def bfs(r, c):
        q = deque([(r, c)])
        grid[r][c] = "0" # Mark visited in place
        while q:
            cr, cc = q.popleft()
            for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nr, nc = cr + dr, cc + dc
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == "1":
                    grid[nr][nc] = "0"
                    q.append((nr, nc))
                    
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == "1":
                bfs(r, c)
                islands += 1
    return islands`
                        },
                        complexity: {
                            time: "O(V + E) for graphs, O(R * C) for grids",
                            space: "O(V) visited hash set or queue"
                        },
                        practice_questions: [
                            { title: "Number of Islands (LeetCode #200)", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-islands/" },
                            { title: "Clone Graph (LeetCode #133)", difficulty: "Medium", url: "https://leetcode.com/problems/clone-graph/" },
                            { title: "Rotting Oranges (Multi-source BFS) (LeetCode #994)", difficulty: "Medium", url: "https://leetcode.com/problems/rotting-oranges/" }
                        ]
                    },
                    {
                        id: "topic-topological-sort-dsu",
                        title: "Topological Sort (Kahn's) & Disjoint Set Union (DSU)",
                        slug: "topological-sort-dsu",
                        difficulty: "Medium",
                        description: "DAG dependency resolution via in-degree BFS, and DSU with path compression & union by rank.",
                        video: {
                            url: "https://www.youtube.com/watch?v=cEB0wlPqvWA",
                            title: "Kahn's Algorithm & Disjoint Set Union (DSU)",
                            start_seconds: 0,
                            end_seconds: 680,
                            chapters: [
                                { title: "Directed Acyclic Graphs (DAG) & In-degrees", start_seconds: 0 },
                                { title: "Kahn's Algorithm with In-degree Array", start_seconds: 240 },
                                { title: "DSU Path Compression & Union by Rank", start_seconds: 450 }
                            ]
                        },
                        explanation: `
### 💡 Kahn's Algorithm (In-degree BFS)
1. Calculate in-degree for every vertex.
2. Push vertices with \`in_degree == 0\` into a queue.
3. Pop vertex, decrement in-degree of its neighbors. If neighbor reaches 0 in-degree, push to queue.
4. If processed count != V, a **cycle exists**!
                        `,
                        code_example: {
                            language: "python",
                            code: `from collections import deque, defaultdict

def can_finish(num_courses: int, prerequisites: list[list[int]]) -> bool:
    in_degree = [0] * num_courses
    adj = defaultdict(list)
    
    for dest, src in prerequisites:
        adj[src].append(dest)
        in_degree[dest] += 1
        
    q = deque([i for i in range(num_courses) if in_degree[i] == 0])
    count = 0
    
    while q:
        curr = q.popleft()
        count += 1
        for neighbor in adj[curr]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                q.append(neighbor)
                
    return count == num_courses`
                        },
                        complexity: {
                            time: "O(V + E) for Kahn's, O(α(N)) for DSU",
                            space: "O(V + E)"
                        },
                        practice_questions: [
                            { title: "Course Schedule (LeetCode #207)", difficulty: "Medium", url: "https://leetcode.com/problems/course-schedule/" },
                            { title: "Course Schedule II (LeetCode #210)", difficulty: "Medium", url: "https://leetcode.com/problems/course-schedule-ii/" },
                            { title: "Redundant Connection (DSU) (LeetCode #684)", difficulty: "Medium", url: "https://leetcode.com/problems/redundant-connection/" }
                        ]
                    },
                    {
                        id: "topic-shortest-paths-mst",
                        title: "Shortest Path (Dijkstra, Bellman-Ford) & MST (Kruskal, Prim)",
                        slug: "shortest-paths-dijkstra-mst",
                        difficulty: "Hard",
                        description: "Min-heap Dijkstra for non-negative weights, Bellman-Ford for negative cycles, and Kruskal's MST.",
                        video: {
                            url: "https://www.youtube.com/watch?v=XB4MIexjvY0",
                            title: "Dijkstra's Algorithm & Kruskal's MST Explained",
                            start_seconds: 0,
                            end_seconds: 750,
                            chapters: [
                                { title: "Dijkstra Greedy Edge Relaxation", start_seconds: 0 },
                                { title: "Priority Queue Optimization O(E log V)", start_seconds: 310 },
                                { title: "Kruskal MST with DSU", start_seconds: 520 }
                            ]
                        },
                        explanation: `
### 💡 Dijkstra's Edge Relaxation
Maintain a priority queue of \`(distance, node)\`. Always greedily extract the smallest unprocessed distance:
\`\`\`
if dist[u] + weight < dist[v]:
    dist[v] = dist[u] + weight
    heappush(pq, (dist[v], v))
\`\`\`
                        `,
                        code_example: {
                            language: "python",
                            code: `import heapq

def network_delay_time(times: list[list[int]], n: int, k: int) -> int:
    adj = {i: [] for i in range(1, n + 1)}
    for u, v, w in times:
        adj[u].append((v, w))
        
    pq = [(0, k)] # (dist, node)
    dist = {}
    
    while pq:
        d, u = heapq.heappop(pq)
        if u in dist: continue
        dist[u] = d
        
        for v, w in adj[u]:
            if v not in dist:
                heapq.heappush(pq, (d + w, v))
                
    return max(dist.values()) if len(dist) == n else -1`
                        },
                        complexity: {
                            time: "O(E log V) Dijkstra, O(V * E) Bellman-Ford",
                            space: "O(V + E)"
                        },
                        practice_questions: [
                            { title: "Network Delay Time (LeetCode #743)", difficulty: "Medium", url: "https://leetcode.com/problems/network-delay-time/" },
                            { title: "Cheapest Flights Within K Stops (LeetCode #787)", difficulty: "Medium", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
                            { title: "Min Cost to Connect All Points (Kruskal/Prim) (LeetCode #1584)", difficulty: "Medium", url: "https://leetcode.com/problems/min-cost-to-connect-all-points/" }
                        ]
                    }
                ]
            },

            // 12. Dynamic Programming
            {
                id: "sub-dp",
                name: "12. Dynamic Programming",
                icon: "🧠",
                topics: [
                    {
                        id: "topic-1d-2d-dp",
                        title: "Memoization vs Tabulation & 1D/2D DP",
                        slug: "1d-2d-dynamic-programming",
                        difficulty: "Medium",
                        description: "Overlapping subproblems, optimal substructure, top-down recursion + memoization, and bottom-up grid tables.",
                        video: {
                            url: "https://www.youtube.com/watch?v=Hdr64lKQ3e4",
                            title: "Dynamic Programming Patterns for Interviews",
                            start_seconds: 0,
                            end_seconds: 800,
                            chapters: [
                                { title: "Memoization Top-Down vs Tabulation Bottom-Up", start_seconds: 0 },
                                { title: "1D DP: Climbing Stairs & House Robber", start_seconds: 280 },
                                { title: "2D Grid DP: Unique Paths", start_seconds: 560 }
                            ]
                        },
                        explanation: `
### 💡 The 5 Steps to Master DP
1. **Define State**: What parameters uniquely identify a subproblem? (e.g., \`dp[i]\` or \`dp[i][j]\`)
2. **Formulate Transition**: \`dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])\`
3. **Establish Base Cases**: \`dp[0] = nums[0], dp[1] = max(nums[0], nums[1])\`
4. **Determine Computation Order**: Top-down or bottom-up loop direction.
5. **Optimize Space**: Can we replace array with 2 variables?
                        `,
                        code_example: {
                            language: "python",
                            code: `# House Robber with O(1) Space
def rob(nums: list[int]) -> int:
    rob1, rob2 = 0, 0
    # [rob1, rob2, n, n+1, ...]
    for n in nums:
        temp = max(n + rob1, rob2)
        rob1 = rob2
        rob2 = temp
    return rob2`
                        },
                        complexity: {
                            time: "O(N) 1D / O(M * N) 2D",
                            space: "O(1) space-optimized / O(N) array"
                        },
                        practice_questions: [
                            { title: "Climbing Stairs (LeetCode #70)", difficulty: "Easy", url: "https://leetcode.com/problems/climbing-stairs/" },
                            { title: "House Robber (LeetCode #198)", difficulty: "Medium", url: "https://leetcode.com/problems/house-robber/" },
                            { title: "Unique Paths (LeetCode #62)", difficulty: "Medium", url: "https://leetcode.com/problems/unique-paths/" },
                            { title: "Coin Change (LeetCode #322)", difficulty: "Medium", url: "https://leetcode.com/problems/coin-change/" }
                        ]
                    },
                    {
                        id: "topic-knapsack-subsets",
                        title: "0/1 Knapsack & Unbounded Knapsack Patterns",
                        slug: "knapsack-subset-sum",
                        difficulty: "Medium",
                        description: "Pick vs Skip decision paradigms, subset sum partitions, and target sum combinations.",
                        video: {
                            url: "https://www.youtube.com/watch?v=nLmhmB6NzcM",
                            title: "0/1 Knapsack Problem Dynamic Programming",
                            start_seconds: 0,
                            end_seconds: 700,
                            chapters: [
                                { title: "Recursive State Tree (Pick vs Not Pick)", start_seconds: 0 },
                                { title: "2D Tabulation Table Construction", start_seconds: 240 },
                                { title: "1D Array Backward Iteration Space Optimization", start_seconds: 480 }
                            ]
                        },
                        explanation: `
### 💡 0/1 Knapsack 1D Space Optimization
When compressing 2D \`dp[item][weight]\` to 1D \`dp[weight]\`, iterate weight **backwards** (\`W -> w[i]\`) to avoid using the same item multiple times!
                        `,
                        code_example: {
                            language: "python",
                            code: `def can_partition(nums: list[int]) -> bool:
    total = sum(nums)
    if total % 2 != 0: return False
    target = total // 2
    
    dp = [False] * (target + 1)
    dp[0] = True
    
    for num in nums:
        for w in range(target, num - 1, -1): # Reverse iteration!
            dp[w] = dp[w] or dp[w - num]
            
    return dp[target]`
                        },
                        complexity: {
                            time: "O(N * Target)",
                            space: "O(Target) 1D buffer"
                        },
                        practice_questions: [
                            { title: "Partition Equal Subset Sum (LeetCode #416)", difficulty: "Medium", url: "https://leetcode.com/problems/partition-equal-subset-sum/" },
                            { title: "Target Sum (LeetCode #494)", difficulty: "Medium", url: "https://leetcode.com/problems/target-sum/" }
                        ]
                    },
                    {
                        id: "topic-lcs-lis-strings",
                        title: "LCS, LIS & DP on Strings (Edit Distance)",
                        slug: "lcs-lis-edit-distance",
                        difficulty: "Hard",
                        description: "Longest Common Subsequence, Longest Increasing Subsequence with binary search O(N log N), and Levenshtein Edit Distance.",
                        video: {
                            url: "https://www.youtube.com/watch?v=XYi2-LPrwm4",
                            title: "Edit Distance & Longest Common Subsequence",
                            start_seconds: 0,
                            end_seconds: 750,
                            chapters: [
                                { title: "LCS 2D Table Transition", start_seconds: 0 },
                                { title: "Edit Distance Insert/Delete/Replace Operations", start_seconds: 300 },
                                { title: "LIS O(N log N) with Patience Sorting", start_seconds: 540 }
                            ]
                        },
                        explanation: `
### 💡 Edit Distance Transition
If \`word1[i] == word2[j]\`: \`dp[i][j] = dp[i-1][j-1]\`
Else: \`dp[i][j] = 1 + min(\`
- Insert: \`dp[i][j-1]\`
- Delete: \`dp[i-1][j]\`
- Replace: \`dp[i-1][j-1]\`
\`) \`
                        `,
                        code_example: {
                            language: "python",
                            code: `def min_distance(word1: str, word2: str) -> int:
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(m + 1): dp[i][0] = i
    for j in range(n + 1): dp[0][j] = j
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
                
    return dp[m][n]`
                        },
                        complexity: {
                            time: "O(M * N) for LCS/Edit Distance, O(N log N) for LIS",
                            space: "O(M * N) or O(min(M, N)) optimized"
                        },
                        practice_questions: [
                            { title: "Longest Common Subsequence (LeetCode #1143)", difficulty: "Medium", url: "https://leetcode.com/problems/longest-common-subsequence/" },
                            { title: "Longest Increasing Subsequence (LeetCode #300)", difficulty: "Medium", url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
                            { title: "Edit Distance (LeetCode #72)", difficulty: "Medium", url: "https://leetcode.com/problems/edit-distance/" }
                        ]
                    }
                ]
            },

            // 13. Greedy Algorithms
            {
                id: "sub-greedy",
                name: "13. Greedy Algorithms",
                icon: "💰",
                topics: [
                    {
                        id: "topic-greedy-core",
                        title: "Activity Selection, Interval Scheduling & Huffman Coding",
                        slug: "greedy-interval-scheduling",
                        difficulty: "Medium",
                        description: "Greedy choice property, local optimality leading to global optimum, and fractional knapsack.",
                        video: {
                            url: "https://www.youtube.com/watch?v=ARvQcqJ_-NY",
                            title: "Greedy Algorithms Masterclass & Proof of Correctness",
                            start_seconds: 0,
                            end_seconds: 600,
                            chapters: [
                                { title: "Greedy Choice Property vs Dynamic Programming", start_seconds: 0 },
                                { title: "Activity Selection: Sorting by End Time", start_seconds: 220 },
                                { title: "Huffman Encoding Frequency Trees", start_seconds: 440 }
                            ]
                        },
                        explanation: `
### 💡 Interval Scheduling Maximization
To maximize non-overlapping activities, **always sort by earliest finishing time (\`end_time\`)**. Picking the interval that finishes first leaves maximal remaining time for subsequent activities.
                        `,
                        code_example: {
                            language: "python",
                            code: `def erase_overlap_intervals(intervals: list[list[int]]) -> int:
    intervals.sort(key=lambda x: x[1]) # Sort by end time
    removals = 0
    last_end = float('-inf')
    
    for start, end in intervals:
        if start >= last_end:
            last_end = end # Compatible, take it
        else:
            removals += 1 # Overlapping, remove it
            
    return removals`
                        },
                        complexity: {
                            time: "O(N log N) sorting step",
                            space: "O(1) auxiliary"
                        },
                        practice_questions: [
                            { title: "Non-overlapping Intervals (LeetCode #435)", difficulty: "Medium", url: "https://leetcode.com/problems/non-overlapping-intervals/" },
                            { title: "Jump Game (LeetCode #55)", difficulty: "Medium", url: "https://leetcode.com/problems/jump-game/" },
                            { title: "Gas Station (LeetCode #134)", difficulty: "Medium", url: "https://leetcode.com/problems/gas-station/" }
                        ]
                    }
                ]
            },

            // 14. Backtracking
            {
                id: "sub-backtracking",
                name: "14. Backtracking",
                icon: "🔄",
                topics: [
                    {
                        id: "topic-n-queens-sudoku",
                        title: "N-Queens, Sudoku Solver & Word Search",
                        slug: "n-queens-sudoku-backtracking",
                        difficulty: "Hard",
                        description: "Exhaustive constraint satisfaction with bitmask pruning and recursion unrolling.",
                        video: {
                            url: "https://www.youtube.com/watch?v=Ph95IHmRp5M",
                            title: "N-Queens Backtracking with Diagonals Set Optimization",
                            start_seconds: 0,
                            end_seconds: 680,
                            chapters: [
                                { title: "Placing Queens & Diagonal Constraints (r + c, r - c)", start_seconds: 0 },
                                { title: "Sudoku 9x9 Valid Board Validation", start_seconds: 300 }
                            ]
                        },
                        explanation: `
### 💡 N-Queens Diagonal Invariants
- **Positive Diagonal (\`/\`)**: Constant \`r + c\` across all cells.
- **Negative Diagonal (\`\\\`)**: Constant \`r - c\` across all cells.
Track columns, positive diagonals, and negative diagonals in 3 hash sets for \`O(1)\` placement checks!
                        `,
                        code_example: {
                            language: "python",
                            code: `def solve_n_queens(n: int) -> list[list[str]]:
    col_set = set()
    pos_diag = set() # (r + c)
    neg_diag = set() # (r - c)
    res = []
    board = [["."] * n for _ in range(n)]
    
    def backtrack(r):
        if r == n:
            res.append(["".join(row) for row in board]); return
            
        for c in range(n):
            if c in col_set or (r + c) in pos_diag or (r - c) in neg_diag:
                continue
            col_set.add(c); pos_diag.add(r + c); neg_diag.add(r - c)
            board[r][c] = "Q"
            
            backtrack(r + 1)
            
            col_set.remove(c); pos_diag.remove(r + c); neg_diag.remove(r - c)
            board[r][c] = "."
            
    backtrack(0)
    return res`
                        },
                        complexity: {
                            time: "O(N!) factorial",
                            space: "O(N) recursion depth"
                        },
                        practice_questions: [
                            { title: "N-Queens (LeetCode #51)", difficulty: "Hard", url: "https://leetcode.com/problems/n-queens/" },
                            { title: "Sudoku Solver (LeetCode #37)", difficulty: "Hard", url: "https://leetcode.com/problems/sudoku-solver/" },
                            { title: "Word Search (LeetCode #79)", difficulty: "Medium", url: "https://leetcode.com/problems/word-search/" }
                        ]
                    }
                ]
            },

            // 15. Bit Manipulation
            {
                id: "sub-bit-manipulation",
                name: "15. Bit Manipulation",
                icon: "0️⃣",
                topics: [
                    {
                        id: "topic-bitwise-tricks",
                        title: "Bitwise Operators & Brian Kernighan's Algorithm",
                        slug: "bit-manipulation-tricks",
                        difficulty: "Easy",
                        description: "AND, OR, XOR, shifts, checking/setting/clearing bits, and counting set bits with n & (n - 1).",
                        video: {
                            url: "https://www.youtube.com/watch?v=5rtV0loSRt4",
                            title: "Bit Manipulation Tricks for Coding Interviews",
                            start_seconds: 0,
                            end_seconds: 580,
                            chapters: [
                                { title: "Essential Operators (AND, OR, XOR, Shifts)", start_seconds: 0 },
                                { title: "XOR Cancellation Property (x ^ x = 0)", start_seconds: 180 },
                                { title: "Brian Kernighan's n & (n - 1) Trick", start_seconds: 360 }
                            ]
                        },
                        explanation: `
### 💡 Essential Bit Hacks
- **Check if \`i\`-th bit is set**: \`(n & (1 << i)) != 0\`
- **Set \`i\`-th bit**: \`n | (1 << i)\`
- **Clear \`i\`-th bit**: \`n & ~(1 << i)\`
- **Toggle \`i\`-th bit**: \`n ^ (1 << i)\`
- **Clear Lowest Set Bit**: \`n & (n - 1)\` (Brian Kernighan)
- **Check Power of Two**: \`n > 0 and (n & (n - 1)) == 0\`
                        `,
                        code_example: {
                            language: "python",
                            code: `# Brian Kernighan: Count 1-Bits in O(Set Bits)
def count_set_bits(n: int) -> int:
    count = 0
    while n:
        n &= (n - 1)  # Clears the lowest set bit
        count += 1
    return count

# Find Single Number using XOR Cancellation
def single_number(nums: list[int]) -> int:
    res = 0
    for n in nums:
        res ^= n
    return res`
                        },
                        complexity: {
                            time: "O(1) 32-bit operations",
                            space: "O(1)"
                        },
                        practice_questions: [
                            { title: "Single Number (LeetCode #136)", difficulty: "Easy", url: "https://leetcode.com/problems/single-number/" },
                            { title: "Number of 1 Bits (LeetCode #191)", difficulty: "Easy", url: "https://leetcode.com/problems/number-of-1-bits/" },
                            { title: "Counting Bits (LeetCode #338)", difficulty: "Easy", url: "https://leetcode.com/problems/counting-bits/" }
                        ]
                    }
                ]
            },

            // 16. Math for DSA
            {
                id: "sub-math",
                name: "16. Math for DSA",
                icon: "📐",
                topics: [
                    {
                        id: "topic-math-dsa",
                        title: "Euclidean GCD, Sieve of Eratosthenes & Modular Arithmetic",
                        slug: "math-gcd-sieve-modular",
                        difficulty: "Medium",
                        description: "GCD Euclidean algorithm, prime generation in O(N log log N), and modular exponentiation.",
                        video: {
                            url: "https://www.youtube.com/watch?v=klcIklIwcGU",
                            title: "Math & Number Theory for Competitive Programming",
                            start_seconds: 0,
                            end_seconds: 640,
                            chapters: [
                                { title: "Euclidean GCD Algorithm", start_seconds: 0 },
                                { title: "Sieve of Eratosthenes Primes", start_seconds: 220 },
                                { title: "Fast Modular Exponentiation O(log B)", start_seconds: 440 }
                            ]
                        },
                        explanation: `
### 💡 Sieve of Eratosthenes
Generates all prime numbers up to \`N\`. We allocate an array of boolean flags and cross out multiples of every prime starting from \`p * p\`.
                        `,
                        code_example: {
                            language: "python",
                            code: `def sieve_of_eratosthenes(n: int) -> list[int]:
    is_prime = [True] * (n + 1)
    is_prime[0] = is_prime[1] = False
    
    p = 2
    while p * p <= n:
        if is_prime[p]:
            for multiple in range(p * p, n + 1, p):
                is_prime[multiple] = False
        p += 1
        
    return [i for i, prime in enumerate(is_prime) if prime]

def gcd(a: int, b: int) -> int:
    while b:
        a, b = b, a % b
    return a`
                        },
                        complexity: {
                            time: "O(N log log N) Sieve, O(log(min(A,B))) GCD",
                            space: "O(N) boolean array"
                        },
                        practice_questions: [
                            { title: "Count Primes (LeetCode #204)", difficulty: "Medium", url: "https://leetcode.com/problems/count-primes/" },
                            { title: "Pow(x, n) (LeetCode #50)", difficulty: "Medium", url: "https://leetcode.com/problems/powx-n/" }
                        ]
                    }
                ]
            },

            // 17. Advanced / Miscellaneous
            {
                id: "sub-advanced-misc",
                name: "17. Advanced & Miscellaneous",
                icon: "🚀",
                topics: [
                    {
                        id: "topic-sparse-table-sampling",
                        title: "Sparse Table, Reservoir Sampling & Randomized Algorithms",
                        slug: "sparse-table-reservoir-sampling",
                        difficulty: "Hard",
                        description: "O(1) Range Minimum Query lookup with sparse tables and uniform stream sampling with reservoir.",
                        video: {
                            url: "https://www.youtube.com/watch?v=0jWeUdxrGm4",
                            title: "Sparse Table for Static RMQ in O(1) Time",
                            start_seconds: 0,
                            end_seconds: 600,
                            chapters: [
                                { title: "Binary Lifting & 2^K Intervals", start_seconds: 0 },
                                { title: "Reservoir Sampling Proof of Probability (1/N)", start_seconds: 320 }
                            ]
                        },
                        explanation: `
### 💡 Sparse Table RMQ
Precomputes \`dp[i][j]\` representing minimum in range \`[i, i + 2^j - 1]\` in \`O(N log N)\`.
Any range \`[L, R]\` can be queried in **\`O(1)\`** using two overlapping intervals of length \`2^k\`, where \`k = floor(log2(R - L + 1))\`.
                        `,
                        code_example: {
                            language: "python",
                            code: `import random

class ReservoirSampling:
    def __init__(self, stream):
        self.stream = stream

    def sample_k_items(self, k: int):
        reservoir = []
        for i, item in enumerate(self.stream):
            if i < k:
                reservoir.append(item)
            else:
                j = random.randint(0, i)
                if j < k:
                    reservoir[j] = item
        return reservoir`
                        },
                        complexity: {
                            time: "O(1) RMQ Query, O(N) Streaming Sample",
                            space: "O(N log N) Sparse Table / O(K) Reservoir"
                        },
                        practice_questions: [
                            { title: "Random Pick Index (Reservoir Sampling) (LeetCode #398)", difficulty: "Medium", url: "https://leetcode.com/problems/random-pick-index/" },
                            { title: "Linked List Random Node (LeetCode #382)", difficulty: "Medium", url: "https://leetcode.com/problems/linked-list-random-node/" }
                        ]
                    }
                ]
            }
        ]
    }
];

if (typeof window !== 'undefined') {
    window.PREPFLOW_TOPICS_DATA = PREPFLOW_TOPICS_DATA;
}
