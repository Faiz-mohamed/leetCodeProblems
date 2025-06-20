/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let String = x.toString()
    let reversed =  String.split('').reverse().join('')
    return String===reversed
};