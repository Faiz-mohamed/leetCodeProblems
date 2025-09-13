/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count, maxDepth;
    count = maxDepth = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            count++
        } else if (s[i] === ')') {
            count--
        }
        if (count > maxDepth) {
            maxDepth = count
        }
    }
    return maxDepth;
};