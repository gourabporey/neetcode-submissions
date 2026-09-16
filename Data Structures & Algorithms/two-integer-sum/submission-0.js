class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const remainingIndexes = {};
        for (let i = 0; i < nums.length; i++) {
            const remaining = target - nums[i];
            if (remaining in remainingIndexes) {
                return [i, remainingIndexes[remaining]];
            }
            remainingIndexes[nums[i]] = i;
        }
    }
}
