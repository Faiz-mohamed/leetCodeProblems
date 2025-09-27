var sumOfTheDigitsOfHarshadNumber = function (x) {
    let sum = x.toString().split('')
        .reduce((a, b) => a + (+b), 0);
    return (x % sum === 0) ? sum : -1;
};