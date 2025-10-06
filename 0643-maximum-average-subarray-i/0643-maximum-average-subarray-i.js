var findMaxAverage = function (nums, k) {
    if (nums.length === 1) return nums[0];
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    let MaxSum = windowSum;
    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum - nums[i - k] + nums[i]
        if (windowSum > MaxSum) MaxSum = windowSum;
    }
    return MaxSum / k
};