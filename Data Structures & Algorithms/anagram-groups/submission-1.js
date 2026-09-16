class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const str of strs) {
            const sortedStr = this.sort(str);
            if (map.has(sortedStr)) {
                map.get(sortedStr).push(str);
            } else {
                map.set(sortedStr, [str]);
            }
        }

        return Array.from(map.values());
    }

    sort(str) {
        return str.split('').sort().join('');
    }
}
