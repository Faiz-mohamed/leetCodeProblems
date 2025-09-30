/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let arr = [];
    for (let i = left; i <= right; i++) {
        checkNum(i);
    }
    function checkNum(N) {
        let num = N.toString()
        if (num.includes(0)) return;
        let count = num.length
        for (n of num) {
            if ((+num) % (+n) === 0) count--
        }
        if (count === 0) arr.push((+num))
    }
    return arr
};