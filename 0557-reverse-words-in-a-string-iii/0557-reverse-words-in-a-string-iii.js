/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = s.split(' ')
    let result = []
    for (el of arr) {
        let r = el.split('').reverse().join('')
        result.push(r)
    }
    return result.join(' ')
};