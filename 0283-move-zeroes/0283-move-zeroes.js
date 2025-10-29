var moveZeroes = function(nums) {
    let arr = []
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 0){
            count++
        } else {
            arr.push(nums[i])
        }
    }    
    for(let j = 0; j < count; j++){
        arr.push(0)
    }
    nums.length = 0;
    nums.push(...arr)
};