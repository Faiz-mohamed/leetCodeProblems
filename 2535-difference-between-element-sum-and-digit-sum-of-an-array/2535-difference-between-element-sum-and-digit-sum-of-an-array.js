var differenceOfSum = function (nums) {
    let sum = 0;
    let Dsum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let temp = nums[i].toString();
        for(n of temp){
            Dsum += Number(n)
        }
    }
    return Math.abs(sum - Dsum)
};