/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
    const evenNums = nums.filter(n => n % 2 === 0);
    const divByThree = evenNums.filter(e => e % 3 === 0);
    if (divByThree.length > 0) {
        let sum = 0;
        for (let num of divByThree) {
            sum += num
        }
        return Math.floor(sum / divByThree.length)
    }else{
        return 0
    }
};