/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let x, y;
    x = y = 0
    for (let m of moves) {
        if (m === 'U') {
            y++
        } else if (m === 'D') {
            y--
        } else if (m === 'R') {
            x++
        } else if (m === 'L') {
            x--
        }
    }

    if (x === 0 && y === 0) {
        return true
    } else {
        return false
    }
};