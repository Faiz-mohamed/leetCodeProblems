var findFinalValue = function (nums, original) {
    let n = original
    while(nums.includes(n)){
        n = n*2;
    }
    return n;
};