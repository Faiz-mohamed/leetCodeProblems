var kLengthApart = function (nums, k) {
    let lastIdx = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (lastIdx !== -1 && i - lastIdx - 1 < k) {
                return false;
            }
            lastIdx = i;
        }
    }

    return true;
};
