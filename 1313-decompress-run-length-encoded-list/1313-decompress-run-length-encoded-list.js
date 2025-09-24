var decompressRLElist = function (nums) {
    let arr = [];
    let freq = 0;
    let val = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            freq = nums[i]
            console.log(arr)
        } else {
            val = nums[i]
            for (let j = 0; j < freq ; j++){
                arr.push(val)
            }
        }
    }
    return arr
};