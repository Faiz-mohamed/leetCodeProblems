/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        let digitSum = i.toString().split('').map(Number)
            .reduce((a, b) => a + b)
        if (digitSum % 2 === 0) {
            count++
        }
    }
    return count;
};