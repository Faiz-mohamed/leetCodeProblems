var getFinalState = function (nums, k, multiplier) {
    function minNumIdx(arr) {
        let idx = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[idx]) {
                minValue = arr[i]
                idx = i;
            }
        }
        return idx
    }
    for (let j = 1; j <= k; j++) {
        nums[minNumIdx(nums)] = nums[minNumIdx(nums)] * multiplier;
    }
    return nums;
};