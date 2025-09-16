/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {
    let LRcounter = 0;
    let Dcounter = 0;
    for (let m of moves) {
        m === 'L' && LRcounter--;
        m === 'R' && LRcounter++;
        m === '_' && Dcounter++;
    }
    return Math.abs(LRcounter) + Dcounter
};