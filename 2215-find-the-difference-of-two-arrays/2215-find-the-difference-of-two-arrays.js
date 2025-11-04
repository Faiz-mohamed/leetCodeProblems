var findDifference = function (nums1, nums2) {
    const n1 = new Set(nums1);
    const n2 = new Set(nums2);

    let arr1 = [...n1].filter(el => !n2.has(el));
    let arr2 = [...n2].filter(el => !n1.has(el));

    return [arr1, arr2];
};