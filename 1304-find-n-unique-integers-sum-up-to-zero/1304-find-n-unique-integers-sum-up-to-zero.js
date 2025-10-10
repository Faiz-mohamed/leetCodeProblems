var sumZero = function (n) {
    let arr = [];
    let j = Math.floor(n / 2);
    for (let i = 1; i <= j; i++) {
        arr.push(i);
        arr.push(-i);
    }
    if (n % 2 !== 0) arr.push(0)
    return arr;
};