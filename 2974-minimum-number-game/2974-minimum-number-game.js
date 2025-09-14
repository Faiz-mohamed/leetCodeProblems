/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    let modedNums = nums.sort((a, b) => a - b)
    for (let i = 0 ; i< modedNums.length ;i +=2){
        let temp = modedNums[i]
        modedNums[i] = modedNums[i+1];
        modedNums[i+1] = temp
    }
    return modedNums
};