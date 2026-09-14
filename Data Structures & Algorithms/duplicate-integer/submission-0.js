class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const visited = {};
        for (const n of nums) {
            if (n in visited) return true;
            visited[n] = true;
        }
        return false;
    }
}
