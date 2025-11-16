var tribonacci = function (n) {
    if (n === 0) return 0;
    let first = 0;
    let second = 1;
    let third = 1;
    for (i = 3; i <= n; i++) {
        let next = first + second + third;
        first = second;
        second = third;
        third = next;
    }
    return third;
};