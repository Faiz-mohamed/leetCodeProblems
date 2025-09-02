/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let arr = [];
    const DivBoth = (i) => i % 3 === 0 && i % 5 === 0;
    const DivThree = (i) => i % 3 === 0;
    const DivFive = (i) => i % 5 === 0;
    for (let i = 1; i <= n; i++) {
        if (DivBoth(i)) {
            arr.push("FizzBuzz")
        }
        else if (DivThree(i)) {
            arr.push("Fizz")
        }
        else if (DivFive(i)){
            arr.push("Buzz")
        }
        else{
            arr.push(`${i}`)
        }
    }
    return arr;
};