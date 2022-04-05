/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // array
  if (n < 2) return n;
  let ans = new Array(n);
  for (var i = 0; i <= n; i++) {
    if (i < 2) ans[i] = i;
    else ans[i] = ans[i - 1] + ans[i - 2];
  }

  console.log(ans);

  return ans[n];
};
// @lc code=end
