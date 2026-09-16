class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strsSorted = strs.map(str => this.sort(str));
        const indexes = {};

        for (let i = 0; i < strsSorted.length; i++) {
            const str = strsSorted[i];
            if (str in indexes) {
                indexes[str].push(strs[i]);
            } else {
                indexes[str] = [strs[i]];
            }
        }

        return Object.values(indexes);
    }

    sort(str) {
        return str.split('').sort().join('');
    }
}
