class Solution {
    /**
     * @param {string}
     * @param {string}
     * @return {boolean}
     */
    isAnagram(s, t) {
        const frequencies = {};
        
        for (const ch of s) {
            frequencies[ch] = (frequencies[ch] || 0) + 1;
        }
        
        for (const ch of t) {
            if (!(ch in frequencies)) return false;
            frequencies[ch] -= 1;
        }
        
        for (const ch in frequencies) {
            if (frequencies[ch] != 0) return false;
        }

        return true;
    }
}
