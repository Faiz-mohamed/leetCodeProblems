var findMedianSortedArrays = function (nums1, nums2) {
    let merged = [...nums1, ...nums2].sort((a, b) => a - b);
    let length = merged.length;
    let n = Math.floor(length / 2);
    if (length % 2 === 0) {
        return (merged[n-1] + merged[n]) / 2;
    } else {
        return merged[n];
    }
};