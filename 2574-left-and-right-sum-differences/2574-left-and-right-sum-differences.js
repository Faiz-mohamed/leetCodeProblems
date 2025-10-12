var leftRightDifference = function (nums) {
    if (nums.length <= 1) return [0];

    function sumExceptFirstEl(arr) {
        let sum = 0;
        for (let i = 1; i < arr.length; i++) sum += arr[i];
        return sum;
    }

    let left = [0];
    let right = [sumExceptFirstEl(nums)];

    for (let i = 0; i < nums.length - 1; i++) {
        left.push(nums[i] + left[i]);
    }

    for (let j = 1; j<nums.length; j++) {
        right.push(right[j-1]-nums[j])
    }

    let result =[];

    for(let k = 0; k<nums.length; k++){
        let n = Math.abs(left[k]-right[k]);
        result.push(n);
    }
    
    return result
};