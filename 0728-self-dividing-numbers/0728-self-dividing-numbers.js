var selfDividingNumbers = function (left, right) {
    let arr = [];
    for (let i = left; i <= right; i++) {
        if(checkNum(i)) arr.push(i)
    }
    function checkNum(N) {
        let num = N.toString()
        if (num.includes(0)) return false;
        let count = num.length
        for (n of num) {
            if ((+num) % (+n) === 0) count--
        }
        return count === 0
    }
    return arr
};
