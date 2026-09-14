class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // Minimum 3 Height is required to store water
        // for < 3 return 0
        // i = 0, j = 1
        if (height.length < 3) return 0;
        
        // for any position I should have leftMax index, rightMaxIndex, and blockages heights = []
        // Start from index 1 to N - 2
        // [{leftMax: 0, rightMax: 3, self: 2}, {leftMax: 2, rightMax: 3, selfHeight: 0}, ....]
        // if left/right = 0 or any of them < self -> 0 ELSE min(leftMax, rightMax) - selfHeight
        
        // Pre-calculate all the leftmax and rightmax
        const lMaxes = new Array(height.length).fill(0);
        const rMaxes = new Array(height.length).fill(0);

        for (let i = 0; i < height.length; i++) {
            lMaxes[i] = Math.max(height[i - 1] || 0, lMaxes[i - 1] || 0);
        }

        for (let i = height.length - 1; i >= 0; i--) {
            rMaxes[i] = Math.max(height[i + 1] || 0, rMaxes[i + 1] || 0);
        }

        const ril = [];
        for (let i = 1; i < height.length - 1; i++) {
            const lMax = lMaxes[i]
            const rMax = rMaxes[i];
            ril.push({lMax, rMax, self: height[i]});
        }
        
        let totalWaterCapacity = 0;
        for (const e of ril) {
            const min = Math.min(e.lMax, e.rMax);
            if (min === 0 || min <= e.self) continue;
            totalWaterCapacity += min - e.self;
        }

        return totalWaterCapacity;
    }
}
