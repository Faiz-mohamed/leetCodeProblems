/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let counter = 0;
    let counts = 0;
    for(let num of nums){
        counts += num;
        if(counts === 0){
            counter++
        }
    }
    return counter
};