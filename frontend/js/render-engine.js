/**
 * PrepFlow AI - Centralized Content & Visualization Rendering Engine
 * Unified modular rendering engine for DSA explanations, Interactive SVG Graphs,
 * Tables, Memory Architecture, Visual Trees, Dual Side-by-Side Diagrams & Markdown.
 */

(function (global) {
    'use strict';

    const PrepFlowRender = {};

    // 1. Safe HTML Entity Escaper
    PrepFlowRender.escapeHtml = function (str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    };

    // 2. Authentic VS Code Dark+ Syntax Highlighter (Python & Java 8 Supported)
    PrepFlowRender.highlightSyntax = function (code, lang = 'python') {
        if (!code) return '';
        const source = String(code);

        // Linear Master Regex for Python & Java 8 (No DOM attribute corruption)
        const masterRegex = /(#.*$|\/\/.*$)|("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(\b(?:return|if|elif|else|while|for|do|in|and|or|not|is|try|catch|except|finally|throw|throws|raise|with|pass|break|continue|yield|await|async|switch|case|default)\b)|(\b(?:def|class|interface|enum|public|private|protected|static|final|abstract|synchronized|extends|implements|package|import|from|as|lambda|function|const|let|var|new|this|super|instanceof)\b)|(\b(?:None|null|True|true|False|false|int|long|double|float|boolean|char|byte|short|void|String|Integer|Long|Double|Boolean|Character|List|ArrayList|Map|HashMap|Set|HashSet|Queue|LinkedList|Stack|Deque|Arrays|Collections|Math|System|str|dict|tuple|Array|Promise)\b)|(\b(?:len|range|print|println|append|pop|add|remove|get|put|contains|containsKey|size|length|charAt|substring|min|max|sum|sort|enumerate|zip|console)\b)|(\b[a-zA-Z_]\w*(?=\s*\())|(\b\d+(?:\.\d+)?\b)|(==|!=|<=|>=|->|\+=|-=|\*=|\/=|&&|\|\||[+\-*\/%=<>!&|^~])|([:;,()[\]{}])|([a-zA-Z_]\w*)|([^\s\w]+|\s+)/gm;

        let match;
        let html = '';

        while ((match = masterRegex.exec(source)) !== null) {
            const [
                full,
                comment,
                str,
                controlKw,
                defKw,
                typeKw,
                builtinFn,
                funcName,
                number,
                operator,
                punctuation,
                ident
            ] = match;

            if (comment !== undefined) {
                html += `<span class="tok-comment">${PrepFlowRender.escapeHtml(comment)}</span>`;
            } else if (str !== undefined) {
                html += `<span class="tok-string">${PrepFlowRender.escapeHtml(str)}</span>`;
            } else if (controlKw !== undefined) {
                html += `<span class="tok-control">${PrepFlowRender.escapeHtml(controlKw)}</span>`;
            } else if (defKw !== undefined) {
                html += `<span class="tok-def">${PrepFlowRender.escapeHtml(defKw)}</span>`;
            } else if (typeKw !== undefined) {
                html += `<span class="tok-type">${PrepFlowRender.escapeHtml(typeKw)}</span>`;
            } else if (builtinFn !== undefined) {
                html += `<span class="tok-builtin">${PrepFlowRender.escapeHtml(builtinFn)}</span>`;
            } else if (funcName !== undefined) {
                html += `<span class="tok-fn">${PrepFlowRender.escapeHtml(funcName)}</span>`;
            } else if (number !== undefined) {
                html += `<span class="tok-num">${PrepFlowRender.escapeHtml(number)}</span>`;
            } else if (operator !== undefined) {
                html += `<span class="tok-op">${PrepFlowRender.escapeHtml(operator)}</span>`;
            } else if (punctuation !== undefined) {
                html += `<span class="tok-punct">${PrepFlowRender.escapeHtml(punctuation)}</span>`;
            } else if (ident !== undefined) {
                html += `<span class="tok-ident">${PrepFlowRender.escapeHtml(ident)}</span>`;
            } else {
                html += PrepFlowRender.escapeHtml(full);
            }
        }

        return html;
    };

    // 3. Intelligent Java 8 Equivalent Generator
    PrepFlowRender.generateJava8Equivalent = function (pyCode) {
        if (!pyCode) return '';
        const trimmed = pyCode.trim();

        // -------------------------------------------------------------
        // A. GRANULAR SPACE COMPLEXITY SINGLE-METHOD GENERATORS
        // -------------------------------------------------------------
        const isMultiSpaceSuite = trimmed.includes('SpaceComplexityDemonstrator') || 
            (trimmed.includes('reverse_in_place') && trimmed.includes('recursive_binary_search'));

        if (!isMultiSpaceSuite) {
            // 1. O(1) In-Place Two Pointers
            if (trimmed.includes('reverse_in_place')) {
                return `// Java 8 Solution: O(1) Auxiliary Space (In-Place Two Pointers)
public class Solution {
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
}`;
            }

            // 2. O(log N) Recursive Call Stack
            if (trimmed.includes('recursive_binary_search')) {
                return `// Java 8 Solution: O(log N) Auxiliary Space (Recursive Call Stack)
public class Solution {
    public int recursiveBinarySearch(int[] arr, int target, int low, int high) {
        if (low > high) return -1;
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] > target) {
            return recursiveBinarySearch(arr, target, low, mid - 1);
        }
        return recursiveBinarySearch(arr, target, mid + 1, high);
    }
}`;
            }

            // 3. O(N) Frequency Hash Map
            if (trimmed.includes('count_frequencies')) {
                return `// Java 8 Solution: O(N) Auxiliary Space (Frequency Hash Map)
import java.util.*;

public class Solution {
    public Map<Integer, Integer> countFrequencies(int[] arr) {
        Map<Integer, Integer> freqMap = new HashMap<>();
        for (int num : arr) {
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }
        return freqMap;
    }
}`;
            }

            // 4. O(N^2) 2D Grid
            if (trimmed.includes('build_multiplication_grid')) {
                return `// Java 8 Solution: O(N^2) Auxiliary Space (2D Matrix Grid Allocation)
public class Solution {
    public int[][] buildMultiplicationGrid(int n) {
        int[][] grid = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                grid[i][j] = (i + 1) * (j + 1);
            }
        }
        return grid;
    }
}`;
            }

            // 5. O(2^N) Power Set
            if (trimmed.includes('generate_all_subsets')) {
                return `// Java 8 Solution: O(2^N) Auxiliary Space (Power Set / Subsets Storage)
import java.util.*;

public class Solution {
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
}`;
            }
        }

        // -------------------------------------------------------------
        // B. GRANULAR TIME COMPLEXITY SINGLE-METHOD GENERATORS
        // -------------------------------------------------------------
        const isMultiTimeSuite = trimmed.includes('TimeComplexityDemonstrator') ||
            (trimmed.includes('constant_time') && trimmed.includes('merge_sort'));

        if (!isMultiTimeSuite) {
            if (trimmed.includes('constant_time') || trimmed.includes('get_head')) {
                return `// Java 8 Solution: O(1) Constant Time (Direct Array Index Access)
public class Solution {
    public int constantTime(int[] arr) {
        return (arr != null && arr.length > 0) ? arr[0] : -1;
    }
}`;
            }
            if (trimmed.includes('find_max')) {
                return `// Java 8 Solution: O(N) Linear Time (Single Loop Max Traversal)
public class Solution {
    public int findMax(int[] arr) {
        if (arr == null || arr.length == 0) return -1;
        int maxVal = arr[0];
        for (int num : arr) {
            if (num > maxVal) maxVal = num;
        }
        return maxVal;
    }
}`;
            }
            if (trimmed.includes('merge_sort')) {
                return `// Java 8 Solution: O(N log N) Linearithmic Time (Merge Sort)
public class Solution {
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
}`;
            }
            if (trimmed.includes('print_all_pairs')) {
                return `// Java 8 Solution: O(N^2) Quadratic Time (Nested Loops)
public class Solution {
    public void printAllPairs(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                System.out.println(arr[i] + ", " + arr[j]);
            }
        }
    }
}`;
            }
            if (trimmed.includes('fibonacci')) {
                return `// Java 8 Solution: O(2^N) Exponential Time (Recursive Binary Tree)
public class Solution {
    public int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}`;
            }
            if (trimmed.includes('generate_permutations')) {
                return `// Java 8 Solution: O(N!) Factorial Time (Generate All N! Permutations)
import java.util.*;

public class Solution {
    public List<List<Integer>> generatePermutations(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrackPermutations(0, nums, result);
        return result;
    }

    private void backtrackPermutations(int start, int[] nums, List<List<Integer>> result) {
        if (start == nums.length) {
            List<Integer> current = new ArrayList<>();
            for (int num : nums) current.add(num);
            result.add(current);
            return;
        }
        for (int i = start; i < nums.length; i++) {
            swap(nums, start, i);
            backtrackPermutations(start + 1, nums, result);
            swap(nums, start, i);
        }
    }

    private void swap(int[] nums, int i, int j) {
        int tmp = nums[i]; nums[i] = nums[j]; nums[j] = tmp;
    }
}`;
            }
        }

        // -------------------------------------------------------------
        // C. COMPLETE MULTI-METHOD SUITES
        // -------------------------------------------------------------
        // Full Space Complexities Suite
        if (isMultiSpaceSuite || trimmed.includes('demonstrate_space_complexities') || trimmed.includes('demonstrateSpaceComplexities')) {
            return `// Java 8 Solution: Space Complexity & Memory Optimization
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
}`;
        }

        // Full Time Complexities Suite
        if (isMultiTimeSuite || trimmed.includes('demonstrate_all_complexities') || trimmed.includes('demonstrateAllComplexities')) {
            return `// Java 8 Solution: Complete Implementations for Each Complexity Type
import java.util.*;

public class Solution {
    // 1. O(1) Constant Time (Direct array index access)
    public int constantTime(int[] arr) {
        return (arr != null && arr.length > 0) ? arr[0] : -1;
    }

    // 2. O(log N) Logarithmic Time (Binary Search - Divide & Conquer Search)
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

    // 3. O(N) Linear Time (Single loop traversal / Find Maximum)
    public int findMax(int[] arr) {
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

    // 5. O(N^2) Quadratic Time (Nested loops - All Pair Combinations)
    public void printAllPairs(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                System.out.println(arr[i] + ", " + arr[j]);
            }
        }
    }

    // 6. O(2^N) Exponential Time (Recursive Binary Tree / Naive Fibonacci)
    public int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    // 7. O(N!) Factorial Time (Generate All N! Permutations)
    public List<List<Integer>> generatePermutations(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrackPermutations(0, nums, result);
        return result;
    }

    private void backtrackPermutations(int start, int[] nums, List<List<Integer>> result) {
        if (start == nums.length) {
            List<Integer> current = new ArrayList<>();
            for (int num : nums) current.add(num);
            result.add(current);
            return;
        }
        for (int i = start; i < nums.length; i++) {
            swap(nums, start, i);
            backtrackPermutations(start + 1, nums, result);
            swap(nums, start, i);
        }
    }

    private void swap(int[] nums, int i, int j) {
        int tmp = nums[i]; nums[i] = nums[j]; nums[j] = tmp;
    }
}`;
        }

        // 1. Subsets
        if (trimmed.includes('def subsets') || (trimmed.includes('subsets') && trimmed.includes('backtrack'))) {
            return `// Java 8 Solution
import java.util.*;

public class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(0, nums, new ArrayList<>(), result);
        return result;
    }

    private void backtrack(int start, int[] nums, List<Integer> path, List<List<Integer>> result) {
        result.add(new ArrayList<>(path));
        for (int i = start; i < nums.length; i++) {
            path.add(nums[i]);              // 1. CHOOSE
            backtrack(i + 1, nums, path, result); // 2. EXPLORE
            path.remove(path.size() - 1);    // 3. UN-CHOOSE (Backtrack)
        }
    }
}`;
        }

        // 2. Word Search
        if (trimmed.includes('def exist') || (trimmed.includes('board') && trimmed.includes('word') && trimmed.includes('dfs'))) {
            return `// Java 8 Solution
public class Solution {
    public boolean exist(char[][] board, String word) {
        int rows = board.length, cols = board[0].length;
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (dfs(board, word, r, c, 0)) return true;
            }
        }
        return false;
    }

    private boolean dfs(char[][] board, String word, int r, int c, int k) {
        if (k == word.length()) return true;
        if (r < 0 || r >= board.length || c < 0 || c >= board[0].length || board[r][c] != word.charAt(k)) {
            return false;
        }

        char temp = board[r][c];
        board[r][c] = '#'; // Mark visited
        boolean found = dfs(board, word, r + 1, c, k + 1) ||
                        dfs(board, word, r - 1, c, k + 1) ||
                        dfs(board, word, r, c + 1, k + 1) ||
                        dfs(board, word, r, c - 1, k + 1);
        board[r][c] = temp; // Unchoose (Backtrack)
        return found;
    }
}`;
        }

        // 3. N-Queens
        if (trimmed.includes('solve_n_queens') || trimmed.includes('solveNQueens')) {
            return `// Java 8 Solution
import java.util.*;

public class Solution {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> result = new ArrayList<>();
        char[][] board = new char[n][n];
        for (int i = 0; i < n; i++) Arrays.fill(board[i], '.');
        
        Set<Integer> cols = new HashSet<>();
        Set<Integer> posDiag = new HashSet<>(); // (r + c)
        Set<Integer> negDiag = new HashSet<>(); // (r - c)
        
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

            // 1. CHOOSE
            cols.add(c); posDiag.add(r + c); negDiag.add(r - c);
            board[r][c] = 'Q';

            // 2. EXPLORE
            backtrack(r + 1, n, board, cols, posDiag, negDiag, result);

            // 3. UN-CHOOSE
            cols.remove(c); posDiag.remove(r + c); negDiag.remove(r - c);
            board[r][c] = '.';
        }
    }
}`;
        }

        // 4. Two Pointer Patterns (Two Sum II, Container With Most Water, Remove Duplicates, 3Sum)
        if (trimmed.includes('two_sum') || trimmed.includes('twoSum') ||
            trimmed.includes('max_area') || trimmed.includes('maxArea') ||
            trimmed.includes('remove_duplicates') || trimmed.includes('removeDuplicates') ||
            trimmed.includes('three_sum') || trimmed.includes('threeSum') ||
            (trimmed.includes('left < right') && (trimmed.includes('height') || trimmed.includes('target') || trimmed.includes('nums')))) {
            return `// Java 8 Solution: Complete Two Pointer Patterns (O(N) Time, O(1) Auxiliary Space)
import java.util.*;

public class Solution {
    // Pattern 1: Two Sum in Sorted Array (Opposite Ends Convergence - O(N) Time, O(1) Space)
    public int[] twoSumSorted(int[] numbers, int target) {
        int left = 0, right = numbers.length - 1;
        while (left < right) {
            int sum = numbers[left] + numbers[right];
            if (sum == target) {
                return new int[]{left + 1, right + 1}; // 1-indexed for LeetCode #167
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

    // Pattern 3: Remove Duplicates in Sorted Array (Fast & Slow Pointers - O(N) Time, O(1) Space)
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

    // Pattern 4: 3Sum (Sorting + Two Pointers - O(N^2) Time, O(1) Auxiliary Space)
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
}`;
        }

        // 5. Binary Search
        if (trimmed.includes('binary_search') || (trimmed.includes('low') && trimmed.includes('high') && trimmed.includes('mid'))) {
            return `// Java 8 Solution
public class Solution {
    public int binarySearch(int[] arr, int target) {
        int low = 0, high = arr.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (arr[mid] == target) return mid;
            else if (arr[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return -1; // Not found
    }
}`;
        }

        // 6. Kadane's Algorithm
        if (trimmed.includes('max_sub') || trimmed.includes('max_so_far') || trimmed.includes('curr_sum')) {
            return `// Java 8 Solution
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
}`;
        }

        // 7. Sort Colors (Dutch National Flag)
        if (trimmed.includes('sort_colors') || trimmed.includes('low, mid, high')) {
            return `// Java 8 Solution
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
        int tmp = nums[i]; nums[i] = nums[j]; nums[j] = tmp;
    }
}`;
        }

        // 8. Longest Substring Without Repeating Characters
        if (trimmed.includes('length_of_longest_substring') || trimmed.includes('char_map')) {
            return `// Java 8 Solution
import java.util.*;

public class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int maxLen = 0, left = 0;
        
        for (int right = 0; right < s.length(); right++) {
            char ch = s.charAt(right);
            if (map.containsKey(ch) && map.get(ch) >= left) {
                left = map.get(ch) + 1;
            }
            map.put(ch, right);
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
}`;
        }

        // 9. Subarray Sum Equals K
        if (trimmed.includes('subarray_sum_equals_k') || trimmed.includes('prefix_counts')) {
            return `// Java 8 Solution
import java.util.*;

public class Solution {
    public int subarraySum(int[] nums, int k) {
        Map<Integer, Integer> prefixCounts = new HashMap<>();
        prefixCounts.put(0, 1);
        int currentSum = 0, count = 0;
        
        for (int num : nums) {
            currentSum += num;
            if (prefixCounts.containsKey(currentSum - k)) {
                count += prefixCounts.get(currentSum - k);
            }
            prefixCounts.put(currentSum, prefixCounts.getOrDefault(currentSum, 0) + 1);
        }
        return count;
    }
}`;
        }

        // 10. Merge Intervals
        if (trimmed.includes('merge_intervals') || trimmed.includes('intervals.sort')) {
            return `// Java 8 Solution
import java.util.*;

public class Solution {
    public int[][] merge(int[][] intervals) {
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
}`;
        }

        // 11. Spiral Matrix
        if (trimmed.includes('spiral_order') || trimmed.includes('traverse_spiral')) {
            return `// Java 8 Solution
import java.util.*;

public class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> res = new ArrayList<>();
        if (matrix == null || matrix.length == 0) return res;
        int top = 0, bottom = matrix.length - 1;
        int left = 0, right = matrix[0].length - 1;
        
        while (top <= bottom && left <= right) {
            for (int c = left; c <= right; c++) res.add(matrix[top][c]);
            top++;
            for (int r = top; r <= bottom; r++) res.add(matrix[r][right]);
            right--;
            if (top <= bottom) {
                for (int c = right; c >= left; c--) res.add(matrix[bottom][c]);
                bottom--;
            }
            if (left <= right) {
                for (int r = bottom; r >= top; r--) res.add(matrix[r][left]);
                left++;
            }
        }
        return res;
    }
}`;
        }

        // -- Recursion anatomy snippets: return proper Java, not wrapped Python --
        if (trimmed.includes('def factorial') && (trimmed.includes('if n == 0 or n == 1') || trimmed.includes('if n <= 1'))) {
            const isFullVersion = trimmed.includes('result = factorial') || trimmed.includes('print(factorial');
            const isTailVersion = trimmed.includes('acc');
            if (isTailVersion) {
                return `// Java — Factorial Tail Recursive Version
public class RecursionPatterns {
    public long factorialTail(int n, long acc) {
        if (n <= 1) return acc;
        return factorialTail(n - 1, acc * n); // Pure tail call
    }
    public static void main(String[] args) {
        RecursionPatterns rp = new RecursionPatterns();
        System.out.println(rp.factorialTail(5, 1)); // Output: 120
    }
}`;
            }
            if (isFullVersion) {
                return `// Java — Full Factorial (Base Case + Recursive Call + Combine)
public class Main {
    public static long factorial(int n) {
        if (n <= 1) {                        // Part 1: Base Case
            return 1L;
        }
        long result = factorial(n - 1);      // Part 2: Recursive Call (waits here)
        return (long) n * result;            // Part 3: Combine — multiply after return ⬆️
    }
    public static void main(String[] args) {
        System.out.println(factorial(4));    // Output: 24
    }
}`;
            }
            // Base case only or recursive case only snippets
            return `// Java — Factorial Base + Recursive Case
public long factorial(int n) {
    if (n == 0 || n == 1) {
        return 1L;   // ✅ Base Case: direct answer
    }
    return (long) n * factorial(n - 1);  // 🔄 Recursive Case: shrink n → n-1
}`;
        }

        // -- Type 2: Head / Linear Recursion (print_reverse / print_forward) --
        if (trimmed.includes('print_reverse') || trimmed.includes('print_forward')) {
            return `// Java — Type 2: Head / Linear Recursion
public class Main {

    // Head Recursion — work happens AFTER recursive call returns
    public static void printReverse(int n) {
        if (n == 0) return;          // Base case
        printReverse(n - 1);         // Recursive call FIRST
        System.out.println(n);       // Work happens AFTER — prints 1,2,3,4,5
    }

    // vs printForward — work happens BEFORE recursive call
    public static void printForward(int n) {
        if (n == 0) return;
        System.out.println(n);       // Work happens BEFORE — prints 5,4,3,2,1
        printForward(n - 1);         // Recursive call AFTER
    }

    public static void main(String[] args) {
        System.out.println("Reverse:"); printReverse(5);  // 1 2 3 4 5
        System.out.println("Forward:"); printForward(5);  // 5 4 3 2 1
    }
}`;
        }

        // -- Type 3: Tree / Binary Recursion (fib_naive / fib_memo) --
        if (trimmed.includes('fib_naive') || trimmed.includes('fib_memo')) {
            return `// Java — Type 3: Tree / Binary Recursion (Fibonacci)
import java.util.*;

public class Main {

    // Naive Tree Recursion — O(2^N) time, O(N) space
    public static int fibNaive(int n) {
        if (n <= 1) return n;
        return fibNaive(n - 1) + fibNaive(n - 2);  // TWO recursive calls!
    }

    // Memoized — O(N) time, O(N) space
    private static Map<Integer, Integer> memo = new HashMap<>();
    public static int fibMemo(int n) {
        if (n <= 1) return n;
        if (memo.containsKey(n)) return memo.get(n);   // Cache hit!
        memo.put(n, fibMemo(n - 1) + fibMemo(n - 2));
        return memo.get(n);
    }

    public static void main(String[] args) {
        System.out.println(fibNaive(10)); // 55 (slow for large n)
        System.out.println(fibMemo(40));  // 102334155 (instant)
    }
}`;
        }

        // -- Type 4: Mutual / Nested Recursion (is_even / is_odd / ackermann) --
        if (trimmed.includes('is_even') || trimmed.includes('is_odd') || trimmed.includes('ackermann')) {
            return `// Java — Type 4: Mutual / Nested Recursion
public class Main {

    // Mutual Recursion: isEven ↔ isOdd
    public static boolean isEven(int n) {
        if (n == 0) return true;
        return isOdd(n - 1);     // calls isOdd
    }

    public static boolean isOdd(int n) {
        if (n == 0) return false;
        return isEven(n - 1);    // calls isEven back!
    }

    // Nested Recursion (Ackermann — grows EXTREMELY fast)
    public static int ackermann(int m, int n) {
        if (m == 0) return n + 1;
        if (n == 0) return ackermann(m - 1, 1);
        return ackermann(m - 1, ackermann(m, n - 1));  // Nested call as parameter!
    }

    public static void main(String[] args) {
        System.out.println(isEven(4));      // true
        System.out.println(isOdd(7));       // true
        System.out.println(ackermann(2, 3)); // 9
    }
}`;
        }

        // -- Merge Sort --
        if (trimmed.includes('merge_sort') || trimmed.includes('def merge')) {
            return `// Java — Merge Sort Implementation (O(N log N) time, O(N) space)
import java.util.Arrays;

public class Solution {
    public static void mergeSort(int[] arr, int left, int right) {
        if (left >= right) return;          // Base Case: 1 element

        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);          // Divide left half
        mergeSort(arr, mid + 1, right);      // Divide right half

        merge(arr, left, mid, right);       // Conquer / Combine
    }

    private static void merge(int[] arr, int left, int mid, int right) {
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

    public static void main(String[] args) {
        int[] arr = {38, 27, 43, 3, 9, 82, 10};
        mergeSort(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr)); // [3, 9, 10, 27, 38, 43, 82]
    }
}`;
        }

        // Generic Java 8 Solution wrapper fallback
        const lines = pyCode.split('\n').map(l => '        ' + l).join('\n');
        return `// Java 8 Solution
import java.util.*;

public class Solution {
    // Java 8 Equivalent Implementation:
${lines}
}`;
    };

    // 4. Authentic VS Code Editor Block Generator with Dual Language Switch (Python & Java 8)
    PrepFlowRender.renderCodeBlock = function (codeOrObj, defaultLang = 'python', filename = '') {
        if (!codeOrObj) return '';

        let pythonCode = '';
        let javaCode = '';

        if (typeof codeOrObj === 'object' && codeOrObj !== null) {
            pythonCode = codeOrObj.python || codeOrObj.code || '';
            javaCode = codeOrObj.java || codeOrObj.java8 || '';
        } else {
            const raw = String(codeOrObj).trim();
            if (defaultLang.toLowerCase().includes('java')) {
                javaCode = raw;
                pythonCode = '';
            } else {
                pythonCode = raw;
                javaCode = PrepFlowRender.generateJava8Equivalent(raw);
            }
        }

        const preferredLang = (typeof localStorage !== 'undefined' && localStorage.getItem('prepflow_preferred_lang')) || 'python';
        const activeIsJava = preferredLang === 'java' && Boolean(javaCode);

        // Format Python code lines
        const pyHighlighted = PrepFlowRender.highlightSyntax(pythonCode, 'python');
        const pyLinesHtml = pyHighlighted.split('\n').map((lineHtml, i) => {
            return `<div class="code-line"><span class="line-num">${i + 1}</span><span class="line-code">${lineHtml || ' '}</span></div>`;
        }).join('');

        // Format Java 8 code lines
        const javaHighlighted = javaCode ? PrepFlowRender.highlightSyntax(javaCode, 'java') : '';
        const javaLinesHtml = javaHighlighted ? javaHighlighted.split('\n').map((lineHtml, i) => {
            return `<div class="code-line"><span class="line-num">${i + 1}</span><span class="line-code">${lineHtml || ' '}</span></div>`;
        }).join('') : '';

        const editorId = 'editor_' + Math.random().toString(36).substr(2, 9);

        return `
            <div class="content-block vscode-editor-container" id="${editorId}">
                <div class="vscode-topbar">
                    <div class="vscode-dots">
                        <span class="dot dot-red"></span>
                        <span class="dot dot-yellow"></span>
                        <span class="dot dot-green"></span>
                    </div>
                    <div class="vscode-tabs-group">
                        <button type="button" class="vscode-tab ${!activeIsJava ? 'active' : ''}" onclick="switchEditorLang('${editorId}', 'python')" title="Python (Standard / Lower version)">
                            <span class="tab-icon">🐍</span>
                            <span class="tab-name">solution.py</span>
                        </button>
                        ${javaCode ? `
                        <button type="button" class="vscode-tab ${activeIsJava ? 'active' : ''}" onclick="switchEditorLang('${editorId}', 'java')" title="Java 8 Solution">
                            <span class="tab-icon">☕</span>
                            <span class="tab-name">Solution.java</span>
                        </button>` : ''}
                    </div>
                    <div class="vscode-actions">
                        <span class="vscode-lang-badge">${!activeIsJava ? 'PYTHON' : 'JAVA 8'}</span>
                        <button type="button" class="vscode-copy-btn" onclick="copyCode(this)" title="Copy Code">📋 Copy</button>
                    </div>
                </div>
                <div class="vscode-editor-body">
                    <pre class="vscode-pre lang-panel-python" style="display: ${!activeIsJava ? 'block' : 'none'};"><code class="vscode-code">${pyLinesHtml}</code></pre>
                    ${javaCode ? `<pre class="vscode-pre lang-panel-java" style="display: ${activeIsJava ? 'block' : 'none'};"><code class="vscode-code">${javaLinesHtml}</code></pre>` : ''}
                </div>
            </div>
        `;
    };

    // 3. Markdown Table Parser & Renderer
    PrepFlowRender.renderTable = function (tableLines) {
        if (!tableLines || tableLines.length < 2) return '';

        const parseRow = (line) => {
            return line
                .trim()
                .replace(/^\|/, '')
                .replace(/\|$/, '')
                .split('|')
                .map(cell => cell.trim());
        };

        const headerCells = parseRow(tableLines[0]);
        const dataRows = [];

        for (let i = 1; i < tableLines.length; i++) {
            const line = tableLines[i].trim();
            if (!line.includes('|')) continue;
            const cells = parseRow(line);
            const isSeparator = cells.every(c => /^:?-+:?$/.test(c) || c === '');
            if (isSeparator) continue;
            dataRows.push(cells);
        }

        const formatCell = (cellText) => {
            let text = cellText;
            text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="table-bold">$1</strong>');
            text = text.replace(/`([^`]+)`/g, (m, c) => `<code class="inline-code">${PrepFlowRender.escapeHtml(c)}</code>`);
            text = text.replace(/✅\s*Yes/gi, '<span class="table-badge badge-yes">✅ Yes</span>');
            text = text.replace(/❌\s*No/gi, '<span class="table-badge badge-no">❌ No</span>');
            text = text.replace(/\b(O\([^)]+\))/g, '<span class="table-complexity-pill">$1</span>');
            return text;
        };

        return `
            <div class="table-responsive-wrapper">
                <table class="prepflow-styled-table">
                    <thead>
                        <tr>
                            ${headerCells.map(h => `<th>${formatCell(h)}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${dataRows.map(row => `
                            <tr>
                                ${row.map(cell => `<td>${formatCell(cell)}</td>`).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    };

    // =========================================================================
    // 3. CENTRALIZED DIAGRAM TEMPLATES REGISTRY (Single Source of Truth)
    // =========================================================================
    const DIAGRAM_TEMPLATES = {
        'asymptotic-notations': {
            title: 'Asymptotic Notations Classification Flowchart',
            icon: '📐',
            visual: `
                <div class="svg-diagram-wrapper" style="max-width:540px;">
                    <svg viewBox="0 0 540 200" class="responsive-svg" preserveAspectRatio="xMidYMid meet">
                        <g stroke="#38bdf8" stroke-width="2" stroke-opacity="0.6">
                            <line x1="270" y1="30" x2="100" y2="90" />
                            <line x1="270" y1="30" x2="270" y2="90" />
                            <line x1="270" y1="30" x2="440" y2="90" />
                            <line x1="100" y1="90" x2="100" y2="155" stroke-dasharray="3,3" />
                            <line x1="270" y1="90" x2="270" y2="155" stroke-dasharray="3,3" />
                            <line x1="440" y1="90" x2="440" y2="155" stroke-dasharray="3,3" />
                        </g>
                        <!-- Root Node -->
                        <g class="visual-node" transform="translate(270, 30)">
                            <rect x="-85" y="-15" width="170" height="30" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5" />
                            <text text-anchor="middle" dy="5" fill="#38bdf8" font-size="11" font-weight="800" font-family="'JetBrains Mono', monospace">Asymptotic Notations</text>
                        </g>
                        <!-- Level 1: Categories -->
                        <g class="visual-node" transform="translate(100, 90)">
                            <rect x="-70" y="-14" width="140" height="28" rx="5" fill="#1e293b" stroke="#f43f5e" stroke-width="2" />
                            <text text-anchor="middle" dy="4" fill="#fb7185" font-size="10" font-weight="700" font-family="'JetBrains Mono', monospace">Upper Bound (Worst)</text>
                        </g>
                        <g class="visual-node" transform="translate(270, 90)">
                            <rect x="-65" y="-14" width="130" height="28" rx="5" fill="#1e293b" stroke="#818cf8" stroke-width="2" />
                            <text text-anchor="middle" dy="4" fill="#a5b4fc" font-size="10" font-weight="700" font-family="'JetBrains Mono', monospace">Tight Bound (Exact)</text>
                        </g>
                        <g class="visual-node" transform="translate(440, 90)">
                            <rect x="-70" y="-14" width="140" height="28" rx="5" fill="#1e293b" stroke="#10b981" stroke-width="2" />
                            <text text-anchor="middle" dy="4" fill="#34d399" font-size="10" font-weight="700" font-family="'JetBrains Mono', monospace">Lower Bound (Best)</text>
                        </g>
                        <!-- Level 2: Notations -->
                        <g class="visual-node" transform="translate(100, 155)">
                            <rect x="-65" y="-13" width="130" height="26" rx="4" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5" />
                            <text text-anchor="middle" dy="4" fill="#ffffff" font-size="9.5" font-weight="700" font-family="'JetBrains Mono', monospace">Big O (O) &amp; Little o (o)</text>
                        </g>
                        <g class="visual-node" transform="translate(270, 155)">
                            <rect x="-55" y="-13" width="110" height="26" rx="4" fill="#0f172a" stroke="#818cf8" stroke-width="1.5" />
                            <text text-anchor="middle" dy="4" fill="#ffffff" font-size="9.5" font-weight="700" font-family="'JetBrains Mono', monospace">Big Theta (Θ)</text>
                        </g>
                        <g class="visual-node" transform="translate(440, 155)">
                            <rect x="-65" y="-13" width="130" height="26" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
                            <text text-anchor="middle" dy="4" fill="#ffffff" font-size="9.5" font-weight="700" font-family="'JetBrains Mono', monospace">Big Ω (Ω) &amp; Little ω (ω)</text>
                        </g>
                    </svg>
                </div>
            `,
            explanations: [
                { icon: '', title: 'Upper Bound: Big O (O)', text: 'Guarantees the algorithm will never exceed this maximum time limit (Worst-Case).' },
                { icon: '', title: 'Tight Bound: Big Theta (Θ)', text: 'Both upper and lower limits grow at the exact same mathematical rate (Exact Runtime).' },
                { icon: '', title: 'Lower Bound: Big Omega (Ω)', text: 'The absolute minimum time required by the algorithm under ideal conditions (Best-Case).' },
                { icon: '', title: 'Interview Standard', text: 'Google and top tech companies prioritize Big O (Worst-Case) to ensure scalability.' }
            ]
        },
        'big-o': {
            title: 'Big O Asymptotic Growth Curves',
            icon: '📈',
            visual: `
                <div class="svg-chart-container">
                    <svg viewBox="0 0 540 310" class="big-o-svg" preserveAspectRatio="xMidYMid meet">
                        <defs>
                            <linearGradient id="gradO1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#10b981" /><stop offset="100%" stop-color="#34d399" /></linearGradient>
                            <linearGradient id="gradOlogN" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#06b6d4" /><stop offset="100%" stop-color="#38bdf8" /></linearGradient>
                            <linearGradient id="gradON" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#eab308" /><stop offset="100%" stop-color="#fde047" /></linearGradient>
                            <linearGradient id="gradONlogN" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#f97316" /><stop offset="100%" stop-color="#fb923c" /></linearGradient>
                            <linearGradient id="gradON2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#f43f5e" /><stop offset="100%" stop-color="#fb7185" /></linearGradient>
                            <linearGradient id="gradO2N" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#d946ef" /><stop offset="100%" stop-color="#f472b6" /></linearGradient>
                            <linearGradient id="gradONFact" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#ef4444" /><stop offset="100%" stop-color="#dc2626" /></linearGradient>
                        </defs>
                        <g class="chart-grid" stroke="rgba(255,255,255,0.06)" stroke-width="1" stroke-dasharray="4,4">
                            <line x1="50" y1="40" x2="500" y2="40" /><line x1="50" y1="100" x2="500" y2="100" /><line x1="50" y1="160" x2="500" y2="160" /><line x1="50" y1="220" x2="500" y2="220" /><line x1="160" y1="20" x2="160" y2="270" /><line x1="280" y1="20" x2="280" y2="270" /><line x1="400" y1="20" x2="400" y2="270" />
                        </g>
                        <g class="chart-axes" stroke="#64748b" stroke-width="2">
                            <line x1="50" y1="20" x2="50" y2="270" /><line x1="50" y1="270" x2="510" y2="270" />
                            <polygon points="50,15 46,24 54,24" fill="#64748b" /><polygon points="515,270 506,266 506,274" fill="#64748b" />
                        </g>
                        <text x="50" y="12" fill="#94a3b8" font-size="10" font-weight="700" text-anchor="middle" font-family="'JetBrains Mono', monospace">Time (T)</text>
                        <text x="500" y="292" fill="#94a3b8" font-size="10" font-weight="700" text-anchor="end" font-family="'JetBrains Mono', monospace">Elements (N) ➔</text>
                        <text x="45" y="285" fill="#64748b" font-size="9" font-family="'JetBrains Mono', monospace">0</text>
                        <path d="M 50 250 L 500 250" fill="none" stroke="url(#gradO1)" stroke-width="3" stroke-linecap="round" /><text x="505" y="254" fill="#34d399" font-size="10" font-weight="800" font-family="'JetBrains Mono', monospace">O(1)</text>
                        <path d="M 50 268 Q 120 230 500 215" fill="none" stroke="url(#gradOlogN)" stroke-width="3" stroke-linecap="round" /><text x="505" y="218" fill="#38bdf8" font-size="10" font-weight="800" font-family="'JetBrains Mono', monospace">O(log N)</text>
                        <path d="M 50 270 L 480 145" fill="none" stroke="url(#gradON)" stroke-width="3" stroke-linecap="round" /><text x="485" y="145" fill="#fde047" font-size="10" font-weight="800" font-family="'JetBrains Mono', monospace">O(N)</text>
                        <path d="M 50 270 Q 250 200 440 90" fill="none" stroke="url(#gradONlogN)" stroke-width="3" stroke-linecap="round" /><text x="445" y="85" fill="#fb923c" font-size="10" font-weight="800" font-family="'JetBrains Mono', monospace">O(N log N)</text>
                        <path d="M 50 270 Q 200 240 330 30" fill="none" stroke="url(#gradON2)" stroke-width="3" stroke-linecap="round" /><text x="335" y="30" fill="#fb7185" font-size="10" font-weight="800" font-family="'JetBrains Mono', monospace">O(N²)</text>
                        <path d="M 50 270 Q 140 250 210 25" fill="none" stroke="url(#gradO2N)" stroke-width="3" stroke-linecap="round" /><text x="215" y="25" fill="#f472b6" font-size="10" font-weight="800" font-family="'JetBrains Mono', monospace">O(2ᴺ)</text>
                        <path d="M 50 270 Q 95 240 120 20" fill="none" stroke="url(#gradONFact)" stroke-width="3" stroke-linecap="round" /><text x="125" y="20" fill="#ef4444" font-size="10" font-weight="800" font-family="'JetBrains Mono', monospace">O(N!)</text>
                    </svg>
                </div>
                <div class="chart-legend-grid">
                    <div class="legend-badge tier-excellent"><span class="badge-dot" style="background:#10b981;"></span><strong>O(1)</strong> <small>Excellent</small></div>
                    <div class="legend-badge tier-good"><span class="badge-dot" style="background:#06b6d4;"></span><strong>O(log N)</strong> <small>Good</small></div>
                    <div class="legend-badge tier-fair"><span class="badge-dot" style="background:#eab308;"></span><strong>O(N)</strong> <small>Fair</small></div>
                    <div class="legend-badge tier-bad"><span class="badge-dot" style="background:#f97316;"></span><strong>O(N log N)</strong> <small>Bad</small></div>
                    <div class="legend-badge tier-horrible"><span class="badge-dot" style="background:#f43f5e;"></span><strong>O(N²)</strong> <small>Horrible</small></div>
                    <div class="legend-badge tier-horrible"><span class="badge-dot" style="background:#d946ef;"></span><strong>O(2ᴺ) &amp; O(N!)</strong> <small>Catastrophic</small></div>
                </div>
            `,
            explanations: [
                { icon: '🟢', title: 'Safe Zone (O(1), O(log N))', text: 'Constant hash lookups & divide-and-conquer binary search scale effortlessly to billions of inputs.' },
                { icon: '🟡', title: 'Linear (O(N), O(N log N))', text: 'Single pass traversals and standard efficient sorting algorithms (MergeSort, QuickSort).' },
                { icon: '🔴', title: 'Danger Zone (O(N²), O(2ᴺ), O(N!))', text: 'Nested loops, powersets, and permutations explode rapidly. Fails for large N.' },
                { icon: '⚡', title: 'Interview Rule', text: 'Always drop constant coefficients & lower-order terms: O(3N² + 5N + 100) simplifies to O(N²).' }
            ]
        },

        'memory-layout': {
            title: 'Process Memory Architecture & Call Stack',
            icon: '💾',
            visual: `
                <div class="memory-segments-container">
                    <div class="memory-address-tag">0xFFFFFFFF (High Memory)</div>
                    <div class="memory-segment segment-stack">
                        <div class="segment-left"><div class="segment-name">STACK SEGMENT</div><div class="segment-desc">Local variables, function arguments, recursive stack frames</div></div>
                        <div class="segment-badge stack-badge">⬇️ Grows Downward</div>
                    </div>
                    <div class="memory-free-gap">
                        <div class="gap-arrow-down">⬇️ Stack Expansion</div>
                        <div class="gap-label">Unallocated Address Space</div>
                        <div class="gap-arrow-up">⬆️ Heap Expansion</div>
                    </div>
                    <div class="memory-segment segment-heap">
                        <div class="segment-left"><div class="segment-name">HEAP (DYNAMIC MEMORY)</div><div class="segment-desc">Dynamic allocations, objects, arrays (new / malloc)</div></div>
                        <div class="segment-badge heap-badge">⬆️ Grows Upward</div>
                    </div>
                    <div class="memory-segment segment-data">
                        <div class="segment-left"><div class="segment-name">DATA &amp; BSS SEGMENTS</div><div class="segment-desc">Global variables, static constants</div></div>
                        <div class="segment-badge static-badge">📌 Fixed Size</div>
                    </div>
                    <div class="memory-segment segment-text">
                        <div class="segment-left"><div class="segment-name">TEXT (CPU MACHINE CODE)</div><div class="segment-desc">Compiled binary instructions</div></div>
                        <div class="segment-badge code-badge">🔒 Read-Only</div>
                    </div>
                    <div class="memory-address-tag">0x00000000 (Low Memory)</div>
                </div>
            `,
            explanations: [
                { icon: '⬇️', title: 'Stack Segment (LIFO)', text: 'Fast, CPU-managed memory storing local variables and recursive call frames. Automatically deallocated on function return.' },
                { icon: '⬆️', title: 'Heap Segment (Dynamic)', text: 'Dynamically allocated objects (new/malloc). Larger in capacity, managed via Garbage Collection.' },
                { icon: '⚠️', title: 'Stack Overflow Condition', text: 'Occurs when deep or infinite recursion exhausts the stack space, causing it to crash into heap memory.' },
                { icon: '🔒', title: 'Text & Data Segments', text: 'Text stores read-only CPU machine code, while Data/BSS stores global/static variables.' }
            ]
        },

        'recursion-tree': {
            title: 'Recursion Tree: fib(4) Call Stack',
            icon: '🌳',
            visual: `
                <div class="svg-diagram-wrapper">
                    <svg viewBox="0 0 500 230" class="responsive-svg" preserveAspectRatio="xMidYMid meet">
                        <g stroke="#38bdf8" stroke-width="2" stroke-opacity="0.6">
                            <line x1="250" y1="35" x2="140" y2="85" /><line x1="250" y1="35" x2="360" y2="85" /><line x1="140" y1="85" x2="80" y2="140" /><line x1="140" y1="85" x2="190" y2="140" /><line x1="360" y1="85" x2="310" y2="140" /><line x1="360" y1="85" x2="420" y2="140" /><line x1="80" y1="140" x2="45" y2="195" /><line x1="80" y1="140" x2="105" y2="195" />
                        </g>
                        <g class="visual-node" transform="translate(250, 35)"><circle r="20" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="10" font-weight="700" font-family="'JetBrains Mono', monospace">fib(4)</text></g>
                        <g class="visual-node" transform="translate(140, 85)"><circle r="18" fill="#1e293b" stroke="#818cf8" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="9" font-weight="700" font-family="'JetBrains Mono', monospace">fib(3)</text></g>
                        <g class="visual-node" transform="translate(360, 85)"><circle r="18" fill="#1e293b" stroke="#818cf8" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="9" font-weight="700" font-family="'JetBrains Mono', monospace">fib(2)</text></g>
                        <g class="visual-node" transform="translate(80, 140)"><circle r="16" fill="#1e293b" stroke="#a78bfa" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="9" font-weight="700" font-family="'JetBrains Mono', monospace">fib(2)</text></g>
                        <g class="visual-node" transform="translate(190, 140)"><circle r="16" fill="#1e293b" stroke="#34d399" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#34d399" font-size="9" font-weight="700" font-family="'JetBrains Mono', monospace">fib(1)</text></g>
                        <g class="visual-node" transform="translate(310, 140)"><circle r="16" fill="#1e293b" stroke="#34d399" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#34d399" font-size="9" font-weight="700" font-family="'JetBrains Mono', monospace">fib(1)</text></g>
                        <g class="visual-node" transform="translate(420, 140)"><circle r="16" fill="#1e293b" stroke="#f472b6" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#f472b6" font-size="9" font-weight="700" font-family="'JetBrains Mono', monospace">fib(0)</text></g>
                        <g class="visual-node" transform="translate(45, 195)"><circle r="14" fill="#1e293b" stroke="#34d399" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#34d399" font-size="8" font-weight="700" font-family="'JetBrains Mono', monospace">fib(1)</text></g>
                        <g class="visual-node" transform="translate(105, 195)"><circle r="14" fill="#1e293b" stroke="#f472b6" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#f472b6" font-size="8" font-weight="700" font-family="'JetBrains Mono', monospace">fib(0)</text></g>
                    </svg>
                </div>
            `,
            explanations: [
                { icon: '🌳', title: 'Binary Call Tree', text: 'Each recursive call splits into 2 sub-calls, creating 2ᴺ total nodes without caching.' },
                { icon: '🔁', title: 'Redundant Overlap', text: 'Subproblem fib(2) is calculated twice from scratch, wasting CPU compute cycles.' },
                { icon: '🚀', title: 'DP Optimization', text: 'Applying Top-Down Memoization or Bottom-Up Tabulation reduces time from O(2ᴺ) to linear O(N).' },
                { icon: '💾', title: 'Stack Footprint', text: 'Maximum recursion call depth is O(N), representing the single longest active path in stack memory.' }
            ]
        },

        'backtracking': {
            title: 'Backtracking Decision & State Space Tree',
            icon: '🎯',
            visual: `
                <div class="svg-diagram-wrapper">
                    <svg viewBox="0 0 480 180" class="responsive-svg" preserveAspectRatio="xMidYMid meet">
                        <g stroke="#38bdf8" stroke-width="2" stroke-opacity="0.6">
                            <line x1="240" y1="30" x2="140" y2="85" /><line x1="240" y1="30" x2="340" y2="85" />
                            <line x1="140" y1="85" x2="140" y2="140" stroke-dasharray="4,4" stroke="#f43f5e" /><line x1="340" y1="85" x2="340" y2="140" stroke-dasharray="4,4" stroke="#f43f5e" />
                        </g>
                        <text x="175" y="50" fill="#38bdf8" font-size="9" font-weight="700" font-family="'JetBrains Mono', monospace">Pick 1 ➔</text>
                        <text x="305" y="50" fill="#38bdf8" font-size="9" font-weight="700" font-family="'JetBrains Mono', monospace">➔ Pick 2</text>
                        <text x="150" y="120" fill="#fb7185" font-size="9" font-weight="700" font-family="'JetBrains Mono', monospace">↺ Undo 1 (Backtrack)</text>
                        <text x="350" y="120" fill="#fb7185" font-size="9" font-weight="700" font-family="'JetBrains Mono', monospace">↺ Undo 2 (Backtrack)</text>
                        <g class="visual-node" transform="translate(240, 30)"><rect x="-40" y="-12" width="80" height="24" rx="5" fill="#1e293b" stroke="#38bdf8" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="10" font-weight="700" font-family="'JetBrains Mono', monospace">State [ ]</text></g>
                        <g class="visual-node" transform="translate(140, 85)"><rect x="-40" y="-12" width="80" height="24" rx="5" fill="#1e293b" stroke="#818cf8" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="10" font-weight="700" font-family="'JetBrains Mono', monospace">State [ 1 ]</text></g>
                        <g class="visual-node" transform="translate(340, 85)"><rect x="-40" y="-12" width="80" height="24" rx="5" fill="#1e293b" stroke="#818cf8" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="10" font-weight="700" font-family="'JetBrains Mono', monospace">State [ 2 ]</text></g>
                    </svg>
                </div>
            `,
            explanations: [
                { icon: '🎯', title: 'Choose Step', text: 'Select a candidate element (e.g. Include element 1) and append it to current state list.' },
                { icon: '🧭', title: 'Explore Step', text: 'Recursively descend down the search space to find all subsequent combinations.' },
                { icon: '↩️', title: 'Unchoose / Backtrack', text: 'Remove candidate from state before returning to parent node so adjacent paths start clean.' },
                { icon: '✂️', title: 'Pruning Optimization', text: 'Terminate invalid branches early when constraints are violated to prevent exploring redundant subtrees.' }
            ]
        },

        '2d-array': {
            title: '2D Matrix to 1D Contiguous Memory Layout',
            icon: '📊',
            visual: `
                <div class="array-visual-container">
                    <div class="matrix-grid-box">
                        <div class="matrix-label">2D Matrix (2 Rows × 3 Cols):</div>
                        <div class="matrix-table">
                            <div class="matrix-row"><span class="cell-coord">[0,0]</span><span class="cell-val">1</span><span class="cell-coord">[0,1]</span><span class="cell-val">2</span><span class="cell-coord">[0,2]</span><span class="cell-val">3</span></div>
                            <div class="matrix-row"><span class="cell-coord">[1,0]</span><span class="cell-val">4</span><span class="cell-coord">[1,1]</span><span class="cell-val">5</span><span class="cell-coord">[1,2]</span><span class="cell-val">6</span></div>
                        </div>
                    </div>
                    <div class="mapping-arrow">⬇️ CPU Memory Flattening (<code class="inline-code">Index = row × Cols + col</code>) ⬇️</div>
                    <div class="linear-memory-strip">
                        <div class="mem-slot"><span class="mem-idx">Idx 0</span><span class="mem-val">1</span></div>
                        <div class="mem-slot"><span class="mem-idx">Idx 1</span><span class="mem-val">2</span></div>
                        <div class="mem-slot"><span class="mem-idx">Idx 2</span><span class="mem-val">3</span></div>
                        <div class="mem-slot highlight-row2"><span class="mem-idx">Idx 3</span><span class="mem-val">4</span></div>
                        <div class="mem-slot highlight-row2"><span class="mem-idx">Idx 4</span><span class="mem-val">5</span></div>
                        <div class="mem-slot highlight-row2"><span class="mem-idx">Idx 5</span><span class="mem-val">6</span></div>
                    </div>
                </div>
            `,
            explanations: [
                { icon: '🧠', title: '1D RAM Flattening', text: 'Hardware RAM is purely 1D contiguous addresses. 2D grids are stored sequentially row after row.' },
                { icon: '🧮', title: 'Conversion Formula', text: '1D Index = (row * cols) + col. Inverse: row = index // cols, col = index % cols.' },
                { icon: '⚡', title: 'Cache Line Performance', text: 'Iterating row-by-row utilizes CPU spatial cache locality. Column-first iteration causes cache misses.' },
                { icon: '⏱️', title: 'Access Time', text: 'Any cell (r, c) is calculated and retrieved in O(1) constant time via direct memory offset.' }
            ]
        },

        'two-pointers': {
            title: 'Two Pointers Convergence Pattern',
            icon: '👉👈',
            visual: `
                <div class="pointer-visual-container">
                    <div class="pointer-step">
                        <div class="step-desc"><strong>Step 1:</strong> Initial Pointers (<code class="inline-code">Sum = 1 + 19 = 20 &gt; 13 ➔ right--</code>)</div>
                        <div class="array-strip">
                            <div class="array-cell active-left"><span class="ptr-tag">left ➔</span><span class="cell-data">1</span></div>
                            <div class="array-cell"><span class="cell-data">3</span></div>
                            <div class="array-cell"><span class="cell-data">5</span></div>
                            <div class="array-cell"><span class="cell-data">8</span></div>
                            <div class="array-cell"><span class="cell-data">12</span></div>
                            <div class="array-cell active-right"><span class="ptr-tag">⬅ right</span><span class="cell-data">19</span></div>
                        </div>
                    </div>
                    <div class="pointer-step" style="margin-top:0.65rem;">
                        <div class="step-desc"><strong>Step 2:</strong> Converged Target Found! (<code class="inline-code">Sum = 5 + 8 = 13 == Target ✅</code>)</div>
                        <div class="array-strip">
                            <div class="array-cell"><span class="cell-data">1</span></div>
                            <div class="array-cell"><span class="cell-data">3</span></div>
                            <div class="array-cell match-found"><span class="ptr-tag">left ⭐</span><span class="cell-data">5</span></div>
                            <div class="array-cell match-found"><span class="ptr-tag">right ⭐</span><span class="cell-data">8</span></div>
                            <div class="array-cell"><span class="cell-data">12</span></div>
                            <div class="array-cell"><span class="cell-data">19</span></div>
                        </div>
                    </div>
                </div>
            `,
            explanations: [
                { icon: '🎯', title: 'Prerequisite', text: 'Input array must be sorted in ascending order for directional pointer adjustments.' },
                { icon: '⚖️', title: 'Decision Rule', text: 'If Sum < Target: increment left (need larger). If Sum > Target: decrement right (need smaller).' },
                { icon: '🚀', title: 'Complexity Boost', text: 'Replaces O(N²) nested loops with a clean single pass O(N) time & O(1) auxiliary space.' },
                { icon: '💡', title: 'Key Variations', text: 'Two-Sum II, 3Sum, Container With Most Water, Trapping Rain Water.' }
            ]
        },

        'sliding-window': {
            title: 'Fixed Size Sliding Window Dynamic Shift',
            icon: '🪟',
            visual: `
                <div class="window-visual-container">
                    <div class="window-step">
                        <div class="window-info"><span class="window-badge">Window 1 [0..2]</span> <strong>Sum = 2 + 1 + 5 = 8</strong></div>
                        <div class="array-strip">
                            <div class="array-cell in-window"><span class="cell-data">2</span></div>
                            <div class="array-cell in-window"><span class="cell-data">1</span></div>
                            <div class="array-cell in-window"><span class="cell-data">5</span></div>
                            <div class="array-cell"><span class="cell-data">1</span></div>
                            <div class="array-cell"><span class="cell-data">3</span></div>
                            <div class="array-cell"><span class="cell-data">2</span></div>
                        </div>
                    </div>
                    <div class="window-step" style="margin-top:0.65rem;">
                        <div class="window-info"><span class="window-badge optimal-badge">Window 3 [2..4] (MAX!)</span> <strong>Sum = 5 + 1 + 3 = 9 ⭐</strong></div>
                        <div class="array-strip">
                            <div class="array-cell"><span class="cell-data">2</span></div>
                            <div class="array-cell"><span class="cell-data">1</span></div>
                            <div class="array-cell in-window max-window"><span class="cell-data">5</span></div>
                            <div class="array-cell in-window max-window"><span class="cell-data">1</span></div>
                            <div class="array-cell in-window max-window"><span class="cell-data">3</span></div>
                            <div class="array-cell"><span class="cell-data">2</span></div>
                        </div>
                    </div>
                </div>
            `,
            explanations: [
                { icon: '🪟', title: 'Window Sliding', text: 'Slide right boundary to add new element; slide left boundary to drop trailing element.' },
                { icon: '⚡', title: 'Incremental O(1) Updates', text: 'Update sum: window_sum += arr[right] - arr[left-1] instead of looping K elements.' },
                { icon: '⏱️', title: 'Linear Time O(N)', text: 'Each element enters and exits the window at most once, guaranteeing O(N) efficiency.' },
                { icon: '🎯', title: 'Use Cases', text: 'Maximum sum subarray of size K, Longest substring without repeating characters, Minimum window substring.' }
            ]
        },

        'prefix-sum': {
            title: 'Prefix Sum Array & O(1) Range Queries',
            icon: '⚡',
            visual: `
                <div class="prefix-visual-container">
                    <div class="prefix-table-box">
                        <div class="prefix-row-label">Original Array <code class="inline-code">arr[ ]</code>:</div>
                        <div class="array-strip">
                            <div class="array-cell"><span class="cell-idx">[0]</span><span class="cell-data">3</span></div>
                            <div class="array-cell in-range"><span class="cell-idx">[1]</span><span class="cell-data">1</span></div>
                            <div class="array-cell in-range"><span class="cell-idx">[2]</span><span class="cell-data">4</span></div>
                            <div class="array-cell in-range"><span class="cell-idx">[3]</span><span class="cell-data">1</span></div>
                            <div class="array-cell"><span class="cell-idx">[4]</span><span class="cell-data">5</span></div>
                        </div>
                    </div>
                    <div class="prefix-table-box" style="margin-top:0.65rem;">
                        <div class="prefix-row-label">Prefix Array <code class="inline-code">prefix[ ]</code>:</div>
                        <div class="array-strip">
                            <div class="array-cell"><span class="cell-idx">[0]</span><span class="cell-data">0</span></div>
                            <div class="array-cell range-sub"><span class="cell-idx">[1]</span><span class="cell-data">3</span></div>
                            <div class="array-cell"><span class="cell-idx">[2]</span><span class="cell-data">4</span></div>
                            <div class="array-cell"><span class="cell-idx">[3]</span><span class="cell-data">8</span></div>
                            <div class="array-cell range-add"><span class="cell-idx">[4]</span><span class="cell-data">9</span></div>
                            <div class="array-cell"><span class="cell-idx">[5]</span><span class="cell-data">14</span></div>
                        </div>
                    </div>
                    <div class="range-formula-result" style="margin-top:0.6rem; font-size:0.85rem;">
                        📐 <code class="inline-code">Sum(1..3) = Prefix[4] - Prefix[1] = 9 - 3 = 6 (1 + 4 + 1)</code>
                    </div>
                </div>
            `,
            explanations: [
                { icon: '📊', title: 'One-Time Precomputation', text: 'Construct cumulative sum array: prefix[i] = prefix[i-1] + arr[i] in O(N) time.' },
                { icon: '⚡', title: 'Instant O(1) Queries', text: 'Calculate range sum Sum(L, R) in O(1) arithmetic operations: Prefix[R+1] - Prefix[L].' },
                { icon: '🎯', title: 'Subarray Sum Equals K', text: 'Combine with HashMap to find contiguous subarrays with sum K in O(N) time.' },
                { icon: '📐', title: '2D Extension', text: 'Can be extended to 2D matrices for submatrix region sum queries in O(1).' }
            ]
        },

        'hashmap-chaining': {
            title: 'Hash Table Array & Separate Chaining',
            icon: '🗝️',
            visual: `
                <div class="hash-visual-container">
                    <div class="hash-bucket-row">
                        <div class="bucket-box"><span class="b-idx">Bucket [0]</span><span class="b-val">Null / None</span></div>
                    </div>
                    <div class="hash-bucket-row">
                        <div class="bucket-box bucket-active"><span class="b-idx">Bucket [1]</span><span class="b-head">Head ➔</span></div>
                        <div class="chain-node"><span class="node-key">"apple"</span><span class="node-val">5</span></div>
                        <div class="chain-link">➔</div>
                        <div class="chain-node"><span class="node-key">"cherry"</span><span class="node-val">8</span></div>
                        <div class="chain-link">➔ Null</div>
                    </div>
                    <div class="hash-bucket-row">
                        <div class="bucket-box bucket-active"><span class="b-idx">Bucket [2]</span><span class="b-head">Head ➔</span></div>
                        <div class="chain-node"><span class="node-key">"banana"</span><span class="node-val">2</span></div>
                        <div class="chain-link">➔ Null</div>
                    </div>
                </div>
            `,
            explanations: [
                { icon: '🔑', title: 'Hashing Function', text: 'Converts arbitrary key into integer bucket index: index = hash(key) % capacity.' },
                { icon: '🔗', title: 'Separate Chaining', text: 'When keys collide into the same bucket, they form a linked list or balanced tree.' },
                { icon: '⚡', title: 'Time Complexity', text: 'Average O(1) for Insert, Search, Delete. Degrades to O(N) if all keys collide into 1 bucket.' },
                { icon: '⚖️', title: 'Load Factor', text: 'When (Elements / Capacity) > 0.75, table automatically doubles in size & rehashes all entries.' }
            ]
        },

        'binary-tree': {
            title: 'Binary Tree Node Hierarchy & Traversals',
            icon: '🌲',
            visual: `
                <div class="tree-and-orders-container">
                    <div class="svg-diagram-wrapper" style="max-width:280px;">
                        <svg viewBox="0 0 300 190" class="responsive-svg">
                            <g stroke="#38bdf8" stroke-width="2" stroke-opacity="0.6">
                                <line x1="150" y1="30" x2="80" y2="85" /><line x1="150" y1="30" x2="220" y2="85" /><line x1="80" y1="85" x2="40" y2="140" /><line x1="80" y1="85" x2="120" y2="140" />
                            </g>
                            <g class="visual-node" transform="translate(150, 30)"><circle r="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="10" font-weight="700" font-family="'JetBrains Mono', monospace">1</text></g>
                            <g class="visual-node" transform="translate(80, 85)"><circle r="15" fill="#1e293b" stroke="#818cf8" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="9" font-weight="700" font-family="'JetBrains Mono', monospace">2</text></g>
                            <g class="visual-node" transform="translate(220, 85)"><circle r="15" fill="#1e293b" stroke="#818cf8" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="9" font-weight="700" font-family="'JetBrains Mono', monospace">3</text></g>
                            <g class="visual-node" transform="translate(40, 140)"><circle r="13" fill="#1e293b" stroke="#34d399" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="9" font-weight="700" font-family="'JetBrains Mono', monospace">4</text></g>
                            <g class="visual-node" transform="translate(120, 140)"><circle r="13" fill="#1e293b" stroke="#34d399" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="9" font-weight="700" font-family="'JetBrains Mono', monospace">5</text></g>
                        </svg>
                    </div>
                    <div class="traversals-list-box">
                        <div class="order-pill"><span class="order-tag tag-pre">PREORDER (Root➔Left➔Right):</span> <code class="inline-code">1 ➔ 2 ➔ 4 ➔ 5 ➔ 3</code></div>
                        <div class="order-pill"><span class="order-tag tag-in">INORDER (Left➔Root➔Right):</span> <code class="inline-code">4 ➔ 2 ➔ 5 ➔ 1 ➔ 3</code></div>
                        <div class="order-pill"><span class="order-tag tag-post">POSTORDER (Left➔Right➔Root):</span> <code class="inline-code">4 ➔ 5 ➔ 2 ➔ 3 ➔ 1</code></div>
                        <div class="order-pill"><span class="order-tag tag-level">LEVELORDER (BFS Breadth):</span> <code class="inline-code">1 ➔ 2 ➔ 3 ➔ 4 ➔ 5</code></div>
                    </div>
                </div>
            `,
            explanations: [
                { icon: '🌳', title: 'Preorder (Root, Left, Right)', text: 'Used for creating a copy of the tree, prefix expression parsing, and serialization.' },
                { icon: '🌳', title: 'Inorder (Left, Root, Right)', text: 'In a Binary Search Tree (BST), inorder traversal produces strictly non-decreasing sorted order.' },
                { icon: '🌳', title: 'Postorder (Left, Right, Root)', text: 'Used for deleting tree nodes from bottom-up and evaluating postfix / bottom-up DP trees.' },
                { icon: '🌊', title: 'Levelorder (Breadth First)', text: 'Traverses nodes layer-by-layer using a Queue. Best for shortest path and tree views.' }
            ]
        },

        'trie': {
            title: 'Trie (Prefix Tree) Architecture',
            icon: '🔤',
            visual: `
                <div class="svg-diagram-wrapper" style="max-width:400px;">
                    <svg viewBox="0 0 420 180" class="responsive-svg">
                        <g stroke="#38bdf8" stroke-width="2" stroke-opacity="0.6">
                            <line x1="210" y1="25" x2="110" y2="70" /><line x1="210" y1="25" x2="310" y2="70" /><line x1="110" y1="70" x2="110" y2="115" /><line x1="110" y1="115" x2="110" y2="160" /><line x1="310" y1="70" x2="310" y2="115" /><line x1="310" y1="115" x2="310" y2="160" />
                        </g>
                        <g class="visual-node" transform="translate(210, 25)"><circle r="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="9" font-weight="700" font-family="'JetBrains Mono', monospace">Root</text></g>
                        <g class="visual-node" transform="translate(110, 70)"><circle r="14" fill="#1e293b" stroke="#818cf8" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="10" font-weight="800">'c'</text></g>
                        <g class="visual-node" transform="translate(110, 115)"><circle r="14" fill="#1e293b" stroke="#818cf8" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="10" font-weight="800">'a'</text></g>
                        <g class="visual-node" transform="translate(110, 160)"><circle r="15" fill="#065f46" stroke="#34d399" stroke-width="2.5" /><text text-anchor="middle" dy="4" fill="#34d399" font-size="10" font-weight="800">'t' ✓</text></g>
                        <g class="visual-node" transform="translate(310, 70)"><circle r="14" fill="#1e293b" stroke="#818cf8" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="10" font-weight="800">'d'</text></g>
                        <g class="visual-node" transform="translate(310, 115)"><circle r="14" fill="#1e293b" stroke="#818cf8" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="10" font-weight="800">'o'</text></g>
                        <g class="visual-node" transform="translate(310, 160)"><circle r="15" fill="#065f46" stroke="#34d399" stroke-width="2.5" /><text text-anchor="middle" dy="4" fill="#34d399" font-size="10" font-weight="800">'g' ✓</text></g>
                    </svg>
                </div>
            `,
            explanations: [
                { icon: '🔤', title: 'Prefix Node Sharing', text: 'Common character sequences share identical nodes, saving storage across large dictionaries.' },
                { icon: '⚡', title: 'O(L) Search & Insert', text: 'Time complexity is strictly proportional to word length L, independent of millions of dictionary entries.' },
                { icon: '✅', title: 'isEndOfWord Flag', text: 'Green node indicates completion of a valid inserted dictionary word (e.g. "cat" or "dog").' },
                { icon: '📱', title: 'Industry Applications', text: 'Search autocomplete suggestions, spell check dictionary, IP routing prefix matching.' }
            ]
        },

        'graph-traversals': {
            title: 'Graph Traversal Comparison: BFS vs DFS',
            icon: '🕸️',
            visual: `
                <div class="graph-visual-container">
                    <div class="svg-diagram-wrapper" style="max-width:280px;">
                        <svg viewBox="0 0 240 170" class="responsive-svg">
                            <g stroke="#38bdf8" stroke-width="2" stroke-opacity="0.6">
                                <line x1="50" y1="35" x2="190" y2="35" /><line x1="50" y1="35" x2="50" y2="135" /><line x1="190" y1="35" x2="190" y2="135" /><line x1="50" y1="135" x2="190" y2="135" />
                            </g>
                            <g class="visual-node" transform="translate(50, 35)"><circle r="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="10" font-weight="800">0</text></g>
                            <g class="visual-node" transform="translate(190, 35)"><circle r="16" fill="#1e293b" stroke="#818cf8" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="10" font-weight="800">1</text></g>
                            <g class="visual-node" transform="translate(50, 135)"><circle r="16" fill="#1e293b" stroke="#818cf8" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="10" font-weight="800">2</text></g>
                            <g class="visual-node" transform="translate(190, 135)"><circle r="16" fill="#1e293b" stroke="#34d399" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="10" font-weight="800">3</text></g>
                        </svg>
                    </div>
                    <div class="graph-paths-box" style="margin-top:0.6rem;">
                        <div class="order-pill"><span class="order-tag tag-level">BFS (Queue Shortest Path):</span> <code class="inline-code">0 ➔ 1 ➔ 2 ➔ 3</code></div>
                        <div class="order-pill"><span class="order-tag tag-pre">DFS (Stack / Deepest Path):</span> <code class="inline-code">0 ➔ 1 ➔ 3 ➔ 2</code></div>
                    </div>
                </div>
            `,
            explanations: [
                { icon: '🌊', title: 'BFS (Breadth-First / Queue)', text: 'Explores neighbors layer-by-layer. Guarantees minimum edge shortest path in unweighted graphs.' },
                { icon: '🧭', title: 'DFS (Depth-First / Stack)', text: 'Explores path as deep as possible before backtracking. Best for cycle detection & topological sort.' },
                { icon: '📌', title: 'Visited Set Prerequisite', text: 'Must maintain a visited set/array to avoid infinite loops and cycles in graphs.' },
                { icon: '⏱️', title: 'Time Complexity', text: 'Both BFS and DFS operate in O(V + E) time where V = vertices and E = edges.' }
            ]
        },

        'recursion-types': {
            title: '4 Major Types of Recursion',
            icon: '🔄',
            visual: `
                <div class="memory-segments-container">
                    <div class="memory-segment segment-stack">
                        <div class="segment-left">
                            <div class="segment-name">1. TAIL RECURSION (Fastest)</div>
                            <div class="segment-desc"><code class="inline-code">return helper(n - 1, acc * n)</code> — Last statement is recursive call. O(1) space with TCO.</div>
                        </div>
                        <div class="segment-badge stack-badge">⚡ O(1) Optimized</div>
                    </div>
                    <div class="memory-segment segment-heap">
                        <div class="segment-left">
                            <div class="segment-name">2. HEAD / LINEAR RECURSION</div>
                            <div class="segment-desc"><code class="inline-code">return n * fact(n - 1)</code> — Recursive call happens first, calculations wait on stack return.</div>
                        </div>
                        <div class="segment-badge heap-badge">⏳ O(N) Stack</div>
                    </div>
                    <div class="memory-segment segment-data">
                        <div class="segment-left">
                            <div class="segment-name">3. TREE / BINARY RECURSION</div>
                            <div class="segment-desc"><code class="inline-code">return fib(n-1) + fib(n-2)</code> — Function calls itself 2 or more times, creating an exponential tree.</div>
                        </div>
                        <div class="segment-badge static-badge">🌳 O(2ᴺ) Tree</div>
                    </div>
                    <div class="memory-segment segment-text">
                        <div class="segment-left">
                            <div class="segment-name">4. NESTED / INDIRECT RECURSION</div>
                            <div class="segment-desc"><code class="inline-code">funA() ➔ funB() ➔ funA()</code> or <code class="inline-code">ackermann(m, ackermann(m-1, n))</code> — Circular or nested self calls.</div>
                        </div>
                        <div class="segment-badge code-badge">🌀 Complex</div>
                    </div>
                </div>
            `,
            explanations: [
                { icon: '⚡', title: 'Tail Recursion Rule', text: 'Nothing happens after the recursive call. State is accumulated in parameter arguments.' },
                { icon: '⏳', title: 'Head Recursion Delay', text: 'Processing occurs on the winding or unwinding phase after child calls return.' },
                { icon: '🌳', title: 'Tree Recursion Warning', text: 'Always use Memoization (Dynamic Programming) on Tree Recursion to avoid redundant subproblem recalculations.' },
                { icon: '🎯', title: 'Interview Selection', text: 'Convert Head/Tree recursion to Tail Recursion or Iteration when memory limits are strict.' }
            ]
        },

        'merge-sort-tree': {
            title: 'Merge Sort — Recursion Tree Complexity Flowchart',
            icon: '🌳',
            visual: `
                <div class="tree-and-orders-container">
                    <div style="text-align:center; margin-bottom:8px; font-size:13px; color:var(--text-secondary);">Each level does <strong style="color:#38bdf8">N total work</strong> across <strong style="color:#818cf8">log₂(N) levels</strong> → <strong style="color:#4ade80">O(N log N)</strong></div>
                    <div class="svg-diagram-wrapper" style="max-width:480px; margin:0 auto;">
                        <svg viewBox="0 0 460 210" class="responsive-svg">
                            <!-- Connecting branch lines -->
                            <g stroke="#38bdf8" stroke-width="1.8" stroke-opacity="0.5">
                                <line x1="230" y1="28" x2="130" y2="75" />
                                <line x1="230" y1="28" x2="330" y2="75" />
                                <line x1="130" y1="75" x2="80" y2="125" />
                                <line x1="130" y1="75" x2="180" y2="125" />
                                <line x1="330" y1="75" x2="280" y2="125" />
                                <line x1="330" y1="75" x2="380" y2="125" />
                                <line x1="80" y1="125" x2="55" y2="175" stroke-dasharray="2,2" />
                                <line x1="80" y1="125" x2="105" y2="175" stroke-dasharray="2,2" />
                                <line x1="180" y1="125" x2="155" y2="175" stroke-dasharray="2,2" />
                                <line x1="180" y1="125" x2="205" y2="175" stroke-dasharray="2,2" />
                                <line x1="280" y1="125" x2="255" y2="175" stroke-dasharray="2,2" />
                                <line x1="280" y1="125" x2="305" y2="175" stroke-dasharray="2,2" />
                                <line x1="380" y1="125" x2="355" y2="175" stroke-dasharray="2,2" />
                                <line x1="380" y1="125" x2="405" y2="175" stroke-dasharray="2,2" />
                            </g>

                            <!-- Level 0 Root -->
                            <g transform="translate(230, 28)">
                                <rect x="-60" y="-15" width="120" height="30" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
                                <text text-anchor="middle" dy="4" fill="#38bdf8" font-size="11" font-weight="700" font-family="'JetBrains Mono', monospace">mergeSort(N)</text>
                            </g>
                            <text x="445" y="32" text-anchor="end" fill="#38bdf8" font-size="10" font-weight="700">L0: Work = N</text>

                            <!-- Level 1 -->
                            <g transform="translate(130, 75)">
                                <rect x="-50" y="-14" width="100" height="28" rx="5" fill="#1e293b" stroke="#818cf8" stroke-width="1.8"/>
                                <text text-anchor="middle" dy="4" fill="#c084fc" font-size="10" font-weight="700" font-family="'JetBrains Mono', monospace">mergeSort(N/2)</text>
                            </g>
                            <g transform="translate(330, 75)">
                                <rect x="-50" y="-14" width="100" height="28" rx="5" fill="#1e293b" stroke="#818cf8" stroke-width="1.8"/>
                                <text text-anchor="middle" dy="4" fill="#c084fc" font-size="10" font-weight="700" font-family="'JetBrains Mono', monospace">mergeSort(N/2)</text>
                            </g>
                            <text x="445" y="79" text-anchor="end" fill="#c084fc" font-size="10" font-weight="700">L1: Work = N</text>

                            <!-- Level 2 -->
                            <g transform="translate(80, 125)">
                                <rect x="-28" y="-12" width="56" height="24" rx="4" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
                                <text text-anchor="middle" dy="4" fill="#fbbf24" font-size="9" font-weight="700" font-family="'JetBrains Mono', monospace">N/4</text>
                            </g>
                            <g transform="translate(180, 125)">
                                <rect x="-28" y="-12" width="56" height="24" rx="4" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
                                <text text-anchor="middle" dy="4" fill="#fbbf24" font-size="9" font-weight="700" font-family="'JetBrains Mono', monospace">N/4</text>
                            </g>
                            <g transform="translate(280, 125)">
                                <rect x="-28" y="-12" width="56" height="24" rx="4" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
                                <text text-anchor="middle" dy="4" fill="#fbbf24" font-size="9" font-weight="700" font-family="'JetBrains Mono', monospace">N/4</text>
                            </g>
                            <g transform="translate(380, 125)">
                                <rect x="-28" y="-12" width="56" height="24" rx="4" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
                                <text text-anchor="middle" dy="4" fill="#fbbf24" font-size="9" font-weight="700" font-family="'JetBrains Mono', monospace">N/4</text>
                            </g>
                            <text x="445" y="129" text-anchor="end" fill="#fbbf24" font-size="10" font-weight="700">L2: Work = N</text>

                            <!-- Level log N Base Cases -->
                            <g transform="translate(55, 175)"><circle r="8" fill="#065f46" stroke="#34d399" stroke-width="1.5"/><text text-anchor="middle" dy="3" fill="#34d399" font-size="7" font-weight="800">1</text></g>
                            <g transform="translate(105, 175)"><circle r="8" fill="#065f46" stroke="#34d399" stroke-width="1.5"/><text text-anchor="middle" dy="3" fill="#34d399" font-size="7" font-weight="800">1</text></g>
                            <g transform="translate(155, 175)"><circle r="8" fill="#065f46" stroke="#34d399" stroke-width="1.5"/><text text-anchor="middle" dy="3" fill="#34d399" font-size="7" font-weight="800">1</text></g>
                            <g transform="translate(205, 175)"><circle r="8" fill="#065f46" stroke="#34d399" stroke-width="1.5"/><text text-anchor="middle" dy="3" fill="#34d399" font-size="7" font-weight="800">1</text></g>
                            <g transform="translate(255, 175)"><circle r="8" fill="#065f46" stroke="#34d399" stroke-width="1.5"/><text text-anchor="middle" dy="3" fill="#34d399" font-size="7" font-weight="800">1</text></g>
                            <g transform="translate(305, 175)"><circle r="8" fill="#065f46" stroke="#34d399" stroke-width="1.5"/><text text-anchor="middle" dy="3" fill="#34d399" font-size="7" font-weight="800">1</text></g>
                            <g transform="translate(355, 175)"><circle r="8" fill="#065f46" stroke="#34d399" stroke-width="1.5"/><text text-anchor="middle" dy="3" fill="#34d399" font-size="7" font-weight="800">1</text></g>
                            <g transform="translate(405, 175)"><circle r="8" fill="#065f46" stroke="#34d399" stroke-width="1.5"/><text text-anchor="middle" dy="3" fill="#34d399" font-size="7" font-weight="800">1</text></g>
                            <text x="445" y="179" text-anchor="end" fill="#34d399" font-size="10" font-weight="700">L_logN: Work = N</text>
                        </svg>
                    </div>
                </div>
            `,
            explanations: [
                { icon: '📊', title: 'N Work Per Level', text: 'At every level of the recursion tree, the total merging work adds up to exactly N — regardless of how many nodes are at that level.' },
                { icon: '📏', title: 'log(N) Total Levels', text: 'Each call halves the input (N → N/2 → N/4 ...). It takes exactly log₂(N) splits to reach arrays of size 1.' },
                { icon: '🔢', title: 'Total = N × log(N)', text: 'Total Work = Work per level × Number of levels = N × log(N) = O(N log N). This is the best possible comparison-based sort.' },
                { icon: '💾', title: 'Space O(N)', text: 'Merge Sort needs O(N) extra space for the temporary arrays used during merging at each level.' }
            ]
        },

        'factorial-call-stack': {
            title: 'Factorial(4) Call Stack Memory & Unwinding Flow',
            icon: '🥞',
            visual: `
                <div class="memory-segments-container" style="display:flex; flex-direction:column; gap:10px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-hover, #1e293b); padding:8px 14px; border-radius:8px; border:1px solid #38bdf8;">
                        <span style="font-weight:700; color:#38bdf8; font-size:12px;">⬇️ WINDING PHASE (Frames Push)</span>
                        <span style="font-weight:700; color:#34d399; font-size:12px;">⬆️ UNWINDING PHASE (Values Return)</span>
                    </div>

                    <div class="memory-segment segment-stack" style="padding:10px 14px; border-left:4px solid #38bdf8;">
                        <div class="segment-left" style="width:100%;">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <span class="segment-name" style="color:#38bdf8; font-weight:700; font-size:13px;">FRAME 4: factorial(4)</span>
                                <span class="segment-badge stack-badge" style="background:#0284c7; color:#fff;">Push ⬇️</span>
                            </div>
                            <div style="font-family:monospace; font-size:12px; margin-top:4px; color:var(--text-secondary);">
                                n = 4 &nbsp;|&nbsp; Waiting for factorial(3) ... &nbsp;➔&nbsp; <strong style="color:#34d399;">Returns 4 × 6 = 24</strong>
                            </div>
                        </div>
                    </div>

                    <div class="memory-segment segment-heap" style="padding:10px 14px; border-left:4px solid #818cf8;">
                        <div class="segment-left" style="width:100%;">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <span class="segment-name" style="color:#818cf8; font-weight:700; font-size:13px;">FRAME 3: factorial(3)</span>
                                <span class="segment-badge heap-badge">Push ⬇️</span>
                            </div>
                            <div style="font-family:monospace; font-size:12px; margin-top:4px; color:var(--text-secondary);">
                                n = 3 &nbsp;|&nbsp; Waiting for factorial(2) ... &nbsp;➔&nbsp; <strong style="color:#34d399;">Returns 3 × 2 = 6</strong>
                            </div>
                        </div>
                    </div>

                    <div class="memory-segment segment-data" style="padding:10px 14px; border-left:4px solid #fbbf24;">
                        <div class="segment-left" style="width:100%;">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <span class="segment-name" style="color:#fbbf24; font-weight:700; font-size:13px;">FRAME 2: factorial(2)</span>
                                <span class="segment-badge static-badge">Push ⬇️</span>
                            </div>
                            <div style="font-family:monospace; font-size:12px; margin-top:4px; color:var(--text-secondary);">
                                n = 2 &nbsp;|&nbsp; Waiting for factorial(1) ... &nbsp;➔&nbsp; <strong style="color:#34d399;">Returns 2 × 1 = 2</strong>
                            </div>
                        </div>
                    </div>

                    <div class="memory-segment segment-text" style="padding:10px 14px; border-left:4px solid #34d399; background:rgba(52, 211, 153, 0.1);">
                        <div class="segment-left" style="width:100%;">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <span class="segment-name" style="color:#34d399; font-weight:800; font-size:13px;">FRAME 1: factorial(1) 🛑 BASE CASE</span>
                                <span class="segment-badge code-badge" style="background:#059669; color:#fff;">Return 1 ⬆️</span>
                            </div>
                            <div style="font-family:monospace; font-size:12px; margin-top:4px; color:#34d399; font-weight:600;">
                                n = 1 ≤ 1? YES ➔ Direct return 1 (No further recursive calls!)
                            </div>
                        </div>
                    </div>
                </div>
            `,
            explanations: [
                { icon: '⬇️', title: 'Winding Phase (Stack Push)', text: 'Each call creates a new Stack Frame with local variables (n) and waits for child call to finish.' },
                { icon: '🛑', title: 'Base Case Hit', text: 'When n=1, condition holds true. Base case returns 1 directly without making any recursive call.' },
                { icon: '⬆️', title: 'Unwinding Phase (Stack Pop)', text: 'Returned values multiply on the way back up (1 ➔ 2 ➔ 6 ➔ 24) as frames pop off the stack.' },
                { icon: '💾', title: 'Space Complexity O(N)', text: 'Maximum 4 active frames reside in memory simultaneously before unwinding starts.' }
            ]
        },

        'backtracking-types': {
            title: '3 Core Types of Backtracking Problems',
            icon: '🧭',
            visual: `
                <div class="memory-segments-container">
                    <div class="memory-segment segment-stack">
                        <div class="segment-left">
                            <div class="segment-name">1. DECISION PROBLEM (Boolean True/False)</div>
                            <div class="segment-desc">Dhoondho ki target valid path exist karta hai ya nahi (e.g. Word Search, Rat in a Maze, Sudoku Solver).</div>
                        </div>
                        <div class="segment-badge stack-badge">✅ Return Early</div>
                    </div>
                    <div class="memory-segment segment-heap">
                        <div class="segment-left">
                            <div class="segment-name">2. ENUMERATION PROBLEM (Find All Solutions)</div>
                            <div class="segment-desc">Saare possible combinations, permutations ya subsets generate karna (e.g. Subsets, Permutations, N-Queens).</div>
                        </div>
                        <div class="segment-badge heap-badge">📋 Collect All</div>
                    </div>
                    <div class="memory-segment segment-data">
                        <div class="segment-left">
                            <div class="segment-name">3. OPTIMIZATION PROBLEM (Best / Min / Max)</div>
                            <div class="segment-desc">Sabse optimal solution dhoondhna under constraints (e.g. Minimum Path Sum in Grid with obstacles).</div>
                        </div>
                        <div class="segment-badge static-badge">⭐ Best Metric</div>
                    </div>
                </div>
            `,
            explanations: [
                { icon: '✅', title: 'Decision Early Exit', text: 'In Decision problems, stop immediately and return true as soon as the first valid solution is discovered.' },
                { icon: '📋', title: 'Enumeration Full Traversal', text: 'In Enumeration problems, explore every valid branch and append copies of state paths to output list.' },
                { icon: '⭐', title: 'Optimization Pruning', text: 'Keep track of current global best value. If partial path cost already exceeds best, prune immediately.' },
                { icon: '💡', title: 'State Restoration', text: 'All 3 types strictly require un-choosing (backtracking) changes before returning to parent frames.' }
            ]
        },

        'amortized-time': {
            title: 'Amortized Analysis: Dynamic Array Doubling',
            icon: '📈',
            visual: `
                <div class="array-visual-container">
                    <div class="matrix-label">Vector / ArrayList Capacity Expansion:</div>
                    <div class="linear-memory-strip">
                        <div class="mem-slot"><span class="mem-idx">Cap 1</span><span class="mem-val">O(1)</span></div>
                        <div class="mem-slot highlight-row2"><span class="mem-idx">Cap 2</span><span class="mem-val">Copy 1</span></div>
                        <div class="mem-slot highlight-row2"><span class="mem-idx">Cap 4</span><span class="mem-val">Copy 2</span></div>
                        <div class="mem-slot highlight-row2"><span class="mem-idx">Cap 8</span><span class="mem-val">Copy 4</span></div>
                        <div class="mem-slot"><span class="mem-idx">Cap 16</span><span class="mem-val">Copy 8</span></div>
                    </div>
                    <div class="range-formula-result" style="margin-top:0.6rem; font-size:0.82rem;">
                        📐 <code class="inline-code">Total Copies = 1 + 2 + 4 + ... + N/2 = N - 1 copies over N inserts ➔ O(1) Amortized!</code>
                    </div>
                </div>
            `,
            explanations: [
                { icon: '⚡', title: 'Normal Push: O(1)', text: 'When capacity is available, inserting at the end takes instant constant O(1) time.' },
                { icon: '📦', title: 'Rare Resize: O(N)', text: 'When array is full, allocates 2x new array and copies existing N elements.' },
                { icon: '⚖️', title: 'Amortized O(1)', text: 'Averaging the rare O(N) cost across all N inserts gives an average O(1) time per operation.' },
                { icon: '💡', title: 'Interview Tip', text: 'ArrayList in Java & list in Python both use Amortized O(1) dynamic table doubling.' }
            ]
        },

        'divide-and-conquer-tree': {
            title: 'Divide & Conquer Recurrence Tree (MergeSort)',
            icon: '🌲',
            visual: `
                <div class="svg-diagram-wrapper">
                    <svg viewBox="0 0 460 170" class="responsive-svg">
                        <g stroke="#38bdf8" stroke-width="2" stroke-opacity="0.6">
                            <line x1="230" y1="25" x2="120" y2="70" /><line x1="230" y1="25" x2="340" y2="70" />
                            <line x1="120" y1="70" x2="60" y2="120" /><line x1="120" y1="70" x2="180" y2="120" />
                            <line x1="340" y1="70" x2="280" y2="120" /><line x1="340" y1="70" x2="400" y2="120" />
                        </g>
                        <text x="440" y="25" fill="#38bdf8" font-size="9" font-weight="700">Work: cN</text>
                        <text x="440" y="70" fill="#38bdf8" font-size="9" font-weight="700">Work: cN</text>
                        <text x="440" y="120" fill="#38bdf8" font-size="9" font-weight="700">Work: cN</text>
                        <g class="visual-node" transform="translate(230, 25)"><rect x="-40" y="-12" width="80" height="24" rx="5" fill="#1e293b" stroke="#38bdf8" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="9" font-weight="700">T(N)</text></g>
                        <g class="visual-node" transform="translate(120, 70)"><rect x="-35" y="-12" width="70" height="24" rx="5" fill="#1e293b" stroke="#818cf8" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="9" font-weight="700">T(N/2)</text></g>
                        <g class="visual-node" transform="translate(340, 70)"><rect x="-35" y="-12" width="70" height="24" rx="5" fill="#1e293b" stroke="#818cf8" stroke-width="2" /><text text-anchor="middle" dy="4" fill="#ffffff" font-size="9" font-weight="700">T(N/2)</text></g>
                        <g class="visual-node" transform="translate(60, 120)"><rect x="-30" y="-10" width="60" height="20" rx="4" fill="#1e293b" stroke="#34d399" stroke-width="1.5" /><text text-anchor="middle" dy="4" fill="#34d399" font-size="8" font-weight="700">T(N/4)</text></g>
                        <g class="visual-node" transform="translate(180, 120)"><rect x="-30" y="-10" width="60" height="20" rx="4" fill="#1e293b" stroke="#34d399" stroke-width="1.5" /><text text-anchor="middle" dy="4" fill="#34d399" font-size="8" font-weight="700">T(N/4)</text></g>
                        <g class="visual-node" transform="translate(280, 120)"><rect x="-30" y="-10" width="60" height="20" rx="4" fill="#1e293b" stroke="#34d399" stroke-width="1.5" /><text text-anchor="middle" dy="4" fill="#34d399" font-size="8" font-weight="700">T(N/4)</text></g>
                        <g class="visual-node" transform="translate(400, 120)"><rect x="-30" y="-10" width="60" height="20" rx="4" fill="#1e293b" stroke="#34d399" stroke-width="1.5" /><text text-anchor="middle" dy="4" fill="#34d399" font-size="8" font-weight="700">T(N/4)</text></g>
                    </svg>
                </div>
            `,
            explanations: [
                { icon: '📊', title: 'Work Per Level', text: 'Sum of work at each level is exactly c*N (Splitting and Merging cost).' },
                { icon: '📏', title: 'Total Tree Height', text: 'Problem is halved at each step, producing log₂(N) total depth levels.' },
                { icon: '🧮', title: 'Total Complexity', text: 'Total Work = (Work per level) × (Tree Height) = c*N × log₂(N) = O(N log N).' },
                { icon: '⚡', title: 'Optimal Bound', text: 'O(N log N) is mathematically proven as the optimal lower bound for comparison-based sorting.' }
            ]
        },

        'array-operations': {
            title: 'Array Memory Shift: Insertion vs Deletion Mechanics',
            icon: '📦',
            visual: `
                <div class="array-visual-container">
                    <div class="matrix-label">1. Insertion at Index 2 (Shift Elements Right ➔ O(N)):</div>
                    <div class="linear-memory-strip">
                        <div class="mem-slot"><span class="mem-idx">[0]</span><span class="mem-val">10</span></div>
                        <div class="mem-slot"><span class="mem-idx">[1]</span><span class="mem-val">20</span></div>
                        <div class="mem-slot highlight-row2"><span class="mem-idx">[2] NEW</span><span class="mem-val">99 ⭐</span></div>
                        <div class="mem-slot"><span class="mem-idx">[3] ➔</span><span class="mem-val">30</span></div>
                        <div class="mem-slot"><span class="mem-idx">[4] ➔</span><span class="mem-val">40</span></div>
                    </div>
                    <div class="matrix-label" style="margin-top:0.75rem;">2. Deletion at Index 1 (Shift Elements Left ⬅ O(N)):</div>
                    <div class="linear-memory-strip">
                        <div class="mem-slot"><span class="mem-idx">[0]</span><span class="mem-val">10</span></div>
                        <div class="mem-slot highlight-row2"><span class="mem-idx">[1] ⬅</span><span class="mem-val">30</span></div>
                        <div class="mem-slot highlight-row2"><span class="mem-idx">[2] ⬅</span><span class="mem-val">40</span></div>
                        <div class="mem-slot"><span class="mem-idx">[3]</span><span class="mem-val">Empty</span></div>
                    </div>
                </div>
            `,
            explanations: [
                { icon: '⚡', title: 'Random Access: O(1)', text: 'Accessing arr[i] is immediate constant time via formula BaseAddress + (i * ElementSize).' },
                { icon: '📦', title: 'Middle Insert/Delete: O(N)', text: 'Inserting or removing at arbitrary index requires shifting up to N elements in contiguous RAM.' },
                { icon: '🚀', title: 'End Operations: O(1)', text: 'Pushing or popping from array end takes instantaneous O(1) time.' },
                { icon: '🔍', title: 'Search: O(N) vs O(log N)', text: 'Linear scan takes O(N). If array is sorted, Binary Search locates keys in O(log N).' }
            ]
        },

        'kadanes': {
            title: "Kadane's Algorithm DP Decision State Transition",
            icon: '⚡',
            visual: `
                <div class="array-visual-container">
                    <div class="matrix-label">Array: <code class="inline-code">[-2, 1, -3, 4, -1, 2, 1, -5, 4]</code></div>
                    <div class="linear-memory-strip">
                        <div class="mem-slot"><span class="mem-idx">[0]</span><span class="mem-val">-2</span></div>
                        <div class="mem-slot"><span class="mem-idx">[1]</span><span class="mem-val">1</span></div>
                        <div class="mem-slot"><span class="mem-idx">[2]</span><span class="mem-val">-2</span></div>
                        <div class="mem-slot highlight-row2"><span class="mem-idx">[3] Start</span><span class="mem-val">4</span></div>
                        <div class="mem-slot highlight-row2"><span class="mem-idx">[4]</span><span class="mem-val">3</span></div>
                        <div class="mem-slot highlight-row2"><span class="mem-idx">[5]</span><span class="mem-val">5</span></div>
                        <div class="mem-slot highlight-row2"><span class="mem-idx">[6] MAX!</span><span class="mem-val">6 ⭐</span></div>
                        <div class="mem-slot"><span class="mem-idx">[7]</span><span class="mem-val">1</span></div>
                        <div class="mem-slot"><span class="mem-idx">[8]</span><span class="mem-val">5</span></div>
                    </div>
                    <div class="range-formula-result" style="margin-top:0.65rem; font-size:0.84rem;">
                        📐 <code class="inline-code">curr_sum = max(num, curr_sum + num) ➔ Discard negative prefix burdens!</code>
                    </div>
                </div>
            `,
            explanations: [
                { icon: '💡', title: 'Local DP Choice', text: 'At each element, either extend previous subarray or start fresh if previous sum < 0.' },
                { icon: '⭐', title: 'Global Maximum', text: 'max_so_far tracks the highest curr_sum observed across the entire single pass.' },
                { icon: '⏱️', title: 'Optimal Runtime', text: 'Operates in strictly single-pass O(N) time and O(1) auxiliary memory.' },
                { icon: '⚠️', title: 'All-Negative Edge Case', text: 'Initialize max_so_far to arr[0] (or -infinity) rather than 0 to correctly handle all-negative arrays.' }
            ]
        },

        'dutch-flag': {
            title: 'Dutch National Flag 3-Way Partitioning (0, 1, 2)',
            icon: '🇳🇱',
            visual: `
                <div class="array-visual-container">
                    <div class="linear-memory-strip">
                        <div class="mem-slot" style="background:#881337; border-color:#f43f5e;"><span class="mem-idx">0 .. low-1</span><span class="mem-val">0s (Red)</span></div>
                        <div class="mem-slot" style="background:#1e293b; border-color:#94a3b8;"><span class="mem-idx">low .. mid-1</span><span class="mem-val">1s (White)</span></div>
                        <div class="mem-slot" style="background:#1e1b4b; border-color:#818cf8;"><span class="mem-idx">mid .. high</span><span class="mem-val">Unknown ❓</span></div>
                        <div class="mem-slot" style="background:#0c4a6e; border-color:#38bdf8;"><span class="mem-idx">high+1 .. N-1</span><span class="mem-val">2s (Blue)</span></div>
                    </div>
                    <div class="range-formula-result" style="margin-top:0.65rem; font-size:0.84rem;">
                        📐 <code class="inline-code">low=0, mid=0, high=N-1 ➔ Swap 0 to low++, swap 2 to high--, mid stays on 1</code>
                    </div>
                </div>
            `,
            explanations: [
                { icon: '🎯', title: '3-Pointer Regions', text: 'Partitions array into 4 invariant zones: 0s on left, 1s in middle, 2s on right, and active search window.' },
                { icon: '🔄', title: 'Swap Operations', text: 'If arr[mid]==0: swap(low++, mid++). If arr[mid]==1: mid++. If arr[mid]==2: swap(mid, high--).' },
                { icon: '⚡', title: 'Strictly 1 Pass', text: 'Sorts 3 distinct keys in exactly 1 iteration over array without counting passes or extra space.' },
                { icon: '🚀', title: 'QuickSort Partitioning', text: 'Used as 3-way partition (Dutch Partition) in QuickSort to handle arrays with dense duplicates in O(N).' }
            ]
        },

        'array-rotation': {
            title: '3-Reversal In-Place Array Rotation by K Steps',
            icon: '🔄',
            visual: `
                <div class="array-visual-container">
                    <div class="matrix-label">Original: <code class="inline-code">[1, 2, 3, 4, 5, 6, 7]</code> with <code class="inline-code">k = 3</code></div>
                    <div class="pointer-step" style="margin-top:0.4rem;">
                        <div class="step-desc"><strong>Step 1: Reverse Entire Array</strong> ➔ <code class="inline-code">[7, 6, 5, 4, 3, 2, 1]</code></div>
                    </div>
                    <div class="pointer-step" style="margin-top:0.4rem;">
                        <div class="step-desc"><strong>Step 2: Reverse First K Elements [0..k-1]</strong> ➔ <code class="inline-code">[5, 6, 7, 4, 3, 2, 1]</code></div>
                    </div>
                    <div class="pointer-step" style="margin-top:0.4rem;">
                        <div class="step-desc"><strong>Step 3: Reverse Remaining [k..N-1]</strong> ➔ <code class="inline-code">[5, 6, 7, 1, 2, 3, 4] ✅</code></div>
                    </div>
                </div>
            `,
            explanations: [
                { icon: '🔄', title: '3-Reversal Mechanism', text: 'Reversing entire array puts target segments in position, sub-reversals restore internal ordering.' },
                { icon: '⚡', title: 'O(1) Auxiliary Space', text: 'No temporary arrays or auxiliary memory buffers required. Strictly modifies input in-place.' },
                { icon: '🎯', title: 'Modulo Normalization', text: 'Always set k = k % N to handle cases where shift count k is larger than array length N.' },
                { icon: '💡', title: 'Left vs Right Rotation', text: 'Left rotate by K is identical to Right rotate by (N - K).' }
            ]
        },

        'intervals': {
            title: 'Sweep Line Interval Overlap & Merging',
            icon: '📅',
            visual: `
                <div class="array-visual-container">
                    <div class="matrix-label">Sorted Intervals: <code class="inline-code">[[1,3], [2,6], [8,10], [15,18]]</code></div>
                    <div class="linear-memory-strip" style="margin-top:0.5rem;">
                        <div class="mem-slot highlight-row2"><span class="mem-idx">[1, 3]</span><span class="mem-val">Overlap</span></div>
                        <div class="mem-slot highlight-row2"><span class="mem-idx">[2, 6]</span><span class="mem-val">➔ [1, 6] ⭐</span></div>
                        <div class="mem-slot"><span class="mem-idx">[8, 10]</span><span class="mem-val">Disjoint</span></div>
                        <div class="mem-slot"><span class="mem-idx">[15, 18]</span><span class="mem-val">Disjoint</span></div>
                    </div>
                    <div class="range-formula-result" style="margin-top:0.65rem; font-size:0.84rem;">
                        📐 <code class="inline-code">if curr.start &lt;= prev.end ➔ prev.end = max(prev.end, curr.end)</code>
                    </div>
                </div>
            `,
            explanations: [
                { icon: '🔑', title: 'Sort by Start Time', text: 'Sorting intervals by their starting point O(N log N) reduces complexity from quadratic to linear scan.' },
                { icon: '🔗', title: 'Overlap Condition', text: 'Two intervals overlap if and only if interval[i].start <= interval[i-1].end.' },
                { icon: '📏', title: 'End Boundary Extension', text: 'Merged interval end is set to max(prev.end, curr.end) to account for completely enclosed intervals.' },
                { icon: '🏢', title: 'Industry Applications', text: 'Calendar scheduling, meeting room booking, IP address routing range mergers.' }
            ]
        },

        'subarray-subsequence': {
            title: 'Subarray vs Subsequence vs Subset Hierarchy',
            icon: '🧩',
            visual: `
                <div class="memory-segments-container">
                    <div class="memory-segment segment-stack">
                        <div class="segment-left">
                            <div class="segment-name">1. SUBARRAY (Contiguous, Order Preserved)</div>
                            <div class="segment-desc">Total: <strong>N*(N+1)/2 = O(N²)</strong>. Elements must be strictly adjacent in original array (e.g. <code class="inline-code">[2, 3]</code> from <code class="inline-code">[1, 2, 3, 4]</code>).</div>
                        </div>
                        <div class="segment-badge stack-badge">Contiguous</div>
                    </div>
                    <div class="memory-segment segment-heap">
                        <div class="segment-left">
                            <div class="segment-name">2. SUBSEQUENCE (Non-contiguous, Order Preserved)</div>
                            <div class="segment-desc">Total: <strong>2ᴺ = O(2ᴺ)</strong>. Elements do not need to be adjacent, but relative order must not change (e.g. <code class="inline-code">[1, 3, 4]</code>).</div>
                        </div>
                        <div class="segment-badge heap-badge">Relative Order</div>
                    </div>
                    <div class="memory-segment segment-data">
                        <div class="segment-left">
                            <div class="segment-name">3. SUBSET (Any Combination, Any Order)</div>
                            <div class="segment-desc">Total: <strong>2ᴺ = O(2ᴺ)</strong>. Mathematical collection of elements with no adjacency or order constraints (e.g. <code class="inline-code">[4, 1]</code>).</div>
                        </div>
                        <div class="segment-badge static-badge">Any Order</div>
                    </div>
                </div>
            `,
            explanations: [
                { icon: '🧩', title: 'Subarray Problems', text: 'Solved using Sliding Window, Prefix Sum, or Kadane in O(N) because elements are contiguous.' },
                { icon: '📈', title: 'Subsequence Problems', text: 'Solved using Dynamic Programming (e.g. LIS, LCS) or Recursion because elements skip indices.' },
                { icon: '🎯', title: 'Subset Problems', text: 'Solved using Backtracking (Choose-Explore-Unchoose) or Bitmasking (0 to 2ᴺ - 1).' },
                { icon: '💡', title: 'Key Identification Rule', text: 'If problem says "contiguous", think Subarray. If it says "delete elements without changing order", think Subsequence.' }
            ]
        }
    };

    // =========================================================================
    // 4. UNIFIED MASTER VISUAL CARD RENDERER (Ek Function Jo Har Jagah Chalta Hai)
    // =========================================================================
    PrepFlowRender.renderVisualCard = function (typeOrKey, customOptions = {}) {
        // Check if type matches one of our preconfigured templates
        const template = DIAGRAM_TEMPLATES[typeOrKey];

        let title = customOptions.title || (template ? template.title : 'Visual Architecture & Structure');
        let icon = customOptions.icon || (template ? template.icon : '📊');
        let visualHtml = '';
        let explanations = customOptions.explanations || (template ? template.explanations : null);

        if (template) {
            visualHtml = template.visual;
        } else if (typeOrKey === 'custom' || !template) {
            const rawContent = customOptions.content || typeOrKey || '';
            const lang = (customOptions.lang || '').toLowerCase();
            const isAsciiDiagram = /[\u2500-\u257F\u2190-\u21FF\u2B00-\u2BFF]|WINDING PHASE|UNWINDING|START: factorial|FRAME \d+|[\+\-\|\/\\]{2,}|State \[|Matrix|Bucket|Root|Levelorder/i.test(rawContent);

            if (isAsciiDiagram && lang !== 'python' && lang !== 'py' && lang !== 'java') {
                visualHtml = `<pre class="code-pre diagram-pre"><code class="code-content">${PrepFlowRender.escapeHtml(rawContent)}</code></pre>`;
                if (!explanations) {
                    explanations = [
                        { icon: '📋', title: 'Visual Flow & State', text: 'Traces memory layout, pointer step-by-step positions, and boundary conditions.' },
                        { icon: '💡', title: 'Dry Run Tip', text: 'Always sketch pointers or stack state on paper before coding the final algorithm.' },
                        { icon: '⚡', title: 'Edge Case Check', text: 'Verify behavior for empty input (N=0), single element (N=1), and maximum boundary limits.' }
                    ];
                }
            } else {
                const isCode = ['python', 'py', 'javascript', 'js', 'cpp', 'java', 'c', 'ts', 'typescript', 'go', 'rust', 'code'].includes(lang) ||
                               /(\bdef\s+\w+|\bfunction\s+\w+|\breturn\b|\bclass\s+\w+|\bimport\s+|\bfor\s+\w+\s+in\b)/.test(rawContent);

                return PrepFlowRender.renderCodeBlock(rawContent, lang || 'python');
            }
        }

        // Build side-by-side explanation items
        const itemsHtml = (explanations || []).map(item => `
            <li class="diagram-explain-item">
                <span class="explain-bullet">${item.icon || '✦'}</span>
                <div class="explain-text-wrap">
                    <strong class="explain-item-title">${item.title}:</strong>
                    <span class="explain-item-desc">${item.text}</span>
                </div>
            </li>
        `).join('');

        // Return single, responsive, side-by-side card
        return `
            <div class="diagram-dual-layout">
                <div class="diagram-visual-side">
                    <div class="diagram-card-header">
                        <div class="diagram-title-wrap">
                            <span class="diagram-icon">${icon}</span>
                            <strong class="diagram-main-title">${title}</strong>
                        </div>
                    </div>
                    <div class="diagram-inner-visual">
                        ${visualHtml}
                    </div>
                </div>
                <div class="diagram-explain-side">
                    <div class="diagram-explain-header">
                        <span class="explain-header-icon">💡</span>
                        <span>Graph Analysis &amp; Concept Breakdown</span>
                    </div>
                    <ul class="diagram-explain-list">
                        ${itemsHtml}
                    </ul>
                </div>
            </div>
        `;
    };

    // Helper: Calculation & Formula Box
    PrepFlowRender.renderFormulaBox = function (formulaText) {
        const cleanFormula = formulaText
            .replace(/^For recurrence:\s*/i, '')
            .replace(/^\*\*(.*?)\*\*$/, '$1')
            .replace(/^`|`$/g, '');

        return `
            <div class="formula-box">
                <div class="formula-header">
                    <span class="formula-tag">📐 KEY FORMULA / CALCULATION</span>
                </div>
                <div class="formula-math">${cleanFormula}</div>
            </div>
        `;
    };

    // =========================================================================
    // 5. MASTER MARKDOWN & CONTENT RENDERER
    // =========================================================================
    PrepFlowRender.renderRichMarkdown = function (rawMarkdown) {
        if (!rawMarkdown) return '';

        const codeBlocks = [];

        // Step 1: Detect and route all diagrams & code blocks through renderVisualCard
        let text = rawMarkdown.replace(/```([a-zA-Z0-9_:-]*)\s*([\s\S]*?)```/g, (match, langHeader, code) => {
            const index = codeBlocks.length;
            const trimmed = code.replace(/^\n+|\n+$/g, '');
            const lang = (langHeader || '').trim().toLowerCase();

            // Check explicit diagram marker (e.g. ```diagram:recursion-types```)
            if (lang.startsWith('diagram:')) {
                const key = lang.replace('diagram:', '').trim();
                codeBlocks.push(PrepFlowRender.renderVisualCard(key));
                return `\n\n@@@CODEBLOCK_${index}@@@\n\n`;
            }

            let diagramKey = null;
            if (trimmed.includes('Time (T)') && trimmed.includes('O(N!)')) diagramKey = 'big-o';
            else if (trimmed.includes('Stack (Call Frames)') && trimmed.includes('Heap (Dynamic Alloc)')) diagramKey = 'memory-layout';
            else if (trimmed.includes('fib(4)')) diagramKey = 'recursion-tree';
            else if (trimmed.includes('State []') && trimmed.includes('Pick 1')) diagramKey = 'backtracking';
            else if (trimmed.includes('Row-Major Flattened Memory') || trimmed.includes('Index = row * cols + col')) diagramKey = '2d-array';
            else if (trimmed.includes('Target: 13') && trimmed.includes('right--')) diagramKey = 'two-pointers';
            else if (trimmed.includes('k = 3') && trimmed.includes('Sum = 8')) diagramKey = 'sliding-window';
            else if (trimmed.includes('Prefix:') && trimmed.includes('Sum(1, 3)')) diagramKey = 'prefix-sum';
            else if (trimmed.includes('Bucket [1]') && trimmed.includes('Chaining')) diagramKey = 'hashmap-chaining';
            else if (trimmed.includes('Preorder:') && trimmed.includes('Levelorder:')) diagramKey = 'binary-tree';
            else if (trimmed.includes("'cat'") || (trimmed.includes("'c'") && trimmed.includes("'d'"))) diagramKey = 'trie';
            else if (trimmed.includes('BFS from 0:') && trimmed.includes('DFS from 0:')) diagramKey = 'graph-traversals';
            else if (trimmed.includes('TAIL RECURSION (Fastest)') || trimmed.includes('TREE / BINARY RECURSION')) diagramKey = 'recursion-types';
            else if (trimmed.includes('DECISION PROBLEM (Boolean True/False)')) diagramKey = 'backtracking-types';
            else if (trimmed.includes('Amortized Analysis: Dynamic Array Doubling')) diagramKey = 'amortized-time';
            else if (trimmed.includes('Divide & Conquer Recurrence Tree (MergeSort)')) diagramKey = 'divide-and-conquer-tree';
            else if (trimmed.includes('START: factorial(4)') || trimmed.includes('WINDING PHASE')) diagramKey = 'factorial-call-stack';

            if (diagramKey) {
                codeBlocks.push(PrepFlowRender.renderVisualCard(diagramKey));
            } else {
                codeBlocks.push(PrepFlowRender.renderVisualCard('custom', { content: trimmed, lang: lang || 'code' }));
            }
            return `\n\n@@@CODEBLOCK_${index}@@@\n\n`;
        });

        // Step 2: Line-by-line parsing for tables, headings, formulas, lists
        const lines = text.split('\n');
        const processedBlocks = [];
        let inList = false;
        let listType = null;
        let tableBuffer = [];

        const flushTable = () => {
            if (tableBuffer.length > 0) {
                processedBlocks.push(PrepFlowRender.renderTable(tableBuffer));
                tableBuffer = [];
            }
        };

        const flushList = () => {
            if (inList) {
                processedBlocks.push(listType === 'ol' ? '</ol>' : '</ul>');
                inList = false;
                listType = null;
            }
        };

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();

            if (line.startsWith('|') && line.endsWith('|')) {
                flushList();
                tableBuffer.push(line);
                continue;
            } else {
                flushTable();
            }

            if (!line) {
                flushList();
                continue;
            }

            if (/^@@@CODEBLOCK_\d+@@@$/.test(line)) {
                flushList();
                processedBlocks.push(line);
                continue;
            }

            if (/^---+$|^===+$|^\*\*\*+$/.test(line)) {
                flushList();
                processedBlocks.push('<div class="exp-divider-wrap"><hr class="exp-divider"></div>');
                continue;
            }

            const bqMatch = line.match(/^>\s*(.*)/);
            if (bqMatch) {
                flushList();
                processedBlocks.push(`<div class="exp-callout-box"><div class="callout-content">${bqMatch[1]}</div></div>`);
                continue;
            }

            if (/^\$\$(.*?)\$\$$/.test(line)) {
                flushList();
                const formulaMath = line.replace(/^\$\$\s*|\s*\$\$$/g, '');
                processedBlocks.push(PrepFlowRender.renderFormulaBox(formulaMath));
                continue;
            }

            if (line.startsWith('#### ')) {
                flushList();
                const title = line.replace(/^####\s+/, '');
                processedBlocks.push(`<h4 class="exp-h4">${title}</h4>`);
                continue;
            }

            if (line.startsWith('### ')) {
                flushList();
                const title = line.replace(/^###\s+/, '');
                processedBlocks.push(`<h3 class="exp-h3">${title}</h3>`);
                continue;
            }

            if (line.startsWith('## ')) {
                flushList();
                const title = line.replace(/^##\s+/, '');
                processedBlocks.push(`<h2 class="exp-h2">${title}</h2>`);
                continue;
            }

            const isFormulaLine = (
                /^\*\*Total Space\s*=/i.test(line) ||
                /^\*\*Time Complexity\s*=/i.test(line) ||
                /^\*\*Space Complexity\s*=/i.test(line) ||
                /^\*\*`?T\([nN]\)\s*=/i.test(line) ||
                /^\*\*`?prefix\[/i.test(line) ||
                /^\*\*`?Sum\(/i.test(line) ||
                /^Formula:/i.test(line) ||
                /^Index\s*=\s*row\s*\*\s*cols/i.test(line) ||
                /^For recurrence:\s*\*\*`?T\([nN]\)/i.test(line)
            );

            if (isFormulaLine) {
                flushList();
                processedBlocks.push(PrepFlowRender.renderFormulaBox(line));
                continue;
            }

            const olMatch = line.match(/^(\d+)\.\s+(.*)/);
            if (olMatch) {
                if (!inList || listType !== 'ol') {
                    flushList();
                    processedBlocks.push('<ol class="exp-step-list">');
                    inList = true;
                    listType = 'ol';
                }
                processedBlocks.push(`<li class="exp-step-item"><span class="step-num">${olMatch[1]}</span><div class="step-text">${olMatch[2]}</div></li>`);
                continue;
            }

            const ulMatch = line.match(/^[-*]\s+(.*)/);
            if (ulMatch) {
                if (!inList || listType !== 'ul') {
                    flushList();
                    processedBlocks.push('<ul class="exp-bullet-list">');
                    inList = true;
                    listType = 'ul';
                }
                processedBlocks.push(`<li class="exp-bullet-item"><span class="bullet-dot">✦</span><div class="bullet-text">${ulMatch[1]}</div></li>`);
                continue;
            }

            flushList();
            processedBlocks.push(`<p class="exp-paragraph">${line}</p>`);
        }

        flushTable();
        flushList();

        let parsedHtml = processedBlocks.join('\n');

        // Block formulas $$...$$
        parsedHtml = parsedHtml.replace(/\$\$(.*?)\$\$/g, (m, f) => {
            return PrepFlowRender.renderFormulaBox(f.trim());
        });

        // Inline Math $...$ -> clean math expression
        parsedHtml = parsedHtml.replace(/\$([^\$\n]+)\$/g, (m, math) => {
            let clean = math.replace(/\\text\{([^}]+)\}/g, '$1')
                            .replace(/\\implies/g, '➔')
                            .replace(/\\rightarrow/g, '➔')
                            .replace(/\\leq/g, '<=')
                            .replace(/\\geq/g, '>=')
                            .replace(/\\log_2/g, 'log₂')
                            .replace(/\\times/g, '×');
            return `<span class="math-expr">${PrepFlowRender.escapeHtml(clean.trim())}</span>`;
        });

        // Bold-Italic ***...***
        parsedHtml = parsedHtml.replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="exp-bold"><em class="exp-italic">$1</em></strong>');

        // Bold **...**
        parsedHtml = parsedHtml.replace(/\*\*(.*?)\*\*/g, '<strong class="exp-bold">$1</strong>');

        // Italic *...* or _..._
        parsedHtml = parsedHtml.replace(/\*([^*\n\t]+)\*/g, '<em class="exp-italic">$1</em>');
        parsedHtml = parsedHtml.replace(/_([^_\n\t]+)_/g, '<em class="exp-italic">$1</em>');

        // Inline code `...`
        parsedHtml = parsedHtml.replace(/`([^`]+)`/g, (match, inlineCode) => {
            return `<code class="inline-code">${PrepFlowRender.escapeHtml(inlineCode)}</code>`;
        });

        codeBlocks.forEach((block, idx) => {
            parsedHtml = parsedHtml.replace(`@@@CODEBLOCK_${idx}@@@`, block);
        });

        return parsedHtml;
    };

    // AI Message Formatter
    PrepFlowRender.formatAIMessage = function (rawText) {
        if (!rawText) return '';
        return PrepFlowRender.renderRichMarkdown(rawText);
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = PrepFlowRender;
    }
    global.PrepFlowRender = PrepFlowRender;

})(typeof window !== 'undefined' ? window : global);
