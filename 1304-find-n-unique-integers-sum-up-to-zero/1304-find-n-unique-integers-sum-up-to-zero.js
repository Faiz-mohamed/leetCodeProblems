var sumZero = function (n) {
    let arr = [];
    for (let i = 1; i <= n / 2; i++) {
        arr.push(i);
        arr.push(-i);
    }
    if (n % 2 !== 0) arr.push(0)
    return arr;
};