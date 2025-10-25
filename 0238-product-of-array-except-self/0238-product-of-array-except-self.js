var productExceptSelf = function (nums) {
    let arr = new Array(nums.length)

    let left = 1
    for(let i = 0; i < nums.length; i++){
        arr[i] = left;
        left *= nums[i]
    }

    let right = 1
    for(let j = nums.length-1; j >= 0; j--){
        arr[j] *= right
        right *= nums[j]
    }

    return arr
};