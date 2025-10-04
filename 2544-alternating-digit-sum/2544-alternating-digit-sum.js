var alternateDigitSum = function (n) {
    let nums = n.toString();
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            ans += +nums[i]
        } else {
            ans -= +nums[i]
        }
    }
    return ans
};