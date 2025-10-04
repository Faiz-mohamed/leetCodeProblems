var getFinalState = function (nums, k, multiplier) {
    function minNumIdx(arr) {
        let minValue = arr[0];
        let idx = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < minValue) {
                minValue = arr[i]
                idx = i;
            }
        }
        return idx
    }
    for (let j = 1; j <= k; j++) {
        // let idx = minNumIdx(ans);
        nums[minNumIdx(nums)] = nums[minNumIdx(nums)] * multiplier;
    }
    return nums;
};