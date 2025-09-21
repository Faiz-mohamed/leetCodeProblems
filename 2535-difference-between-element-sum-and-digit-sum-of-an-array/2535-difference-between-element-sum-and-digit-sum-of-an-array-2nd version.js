var differenceOfSum = function (nums) {
    let sum = 0;
    let Dsum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        Dsum += nums[i].toString().split('').map(Number)
        .reduce((a, c) => a + c)
    }
    return Math.abs(sum - Dsum)
};