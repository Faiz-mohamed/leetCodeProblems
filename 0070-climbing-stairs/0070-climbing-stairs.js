/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let N = n+1
  if (N === 0) return 1;
  if (N === 1) return 1;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= N; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
};