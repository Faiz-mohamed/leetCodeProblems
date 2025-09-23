var getCommon = function (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    let min = Infinity;
    for (num of set1) {
        for (el of set2) {
            if (num === el && min > num) {
                min = num;
            }
        }
    }
    return min === Infinity ? -1 : min;
};