var finalValueAfterOperations = function (operations) {
    let x = 0;
    for (el of operations) {
        if (el === 'X++' || el === '++X') {
            x++
        } else {
            x--
        }
    }
    return x
};