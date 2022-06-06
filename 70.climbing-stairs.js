/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // iterative
  let arr = new Array(n + 1);
  arr.fill(-1);
  arr[0] = 0;
  arr[1] = 1;
  arr[2] = 2;
  arr[3] = 3;

  for (var i = 4; i <= n; i++) arr[i] = arr[i - 1] + arr[i - 2];

  return arr[n];

  // DP
  //   let arr = new Array(n + 1);
  //   arr.fill(-1);
  //   arr[0] = 0;
  //   arr[1] = 1;
  //   arr[2] = 2;
  //   arr[3] = 3;

  //   const helper = (n) => {
  //     if (arr[n] !== -1) return arr[n];
  //     arr[n] = helper(n - 1) + helper(n - 2);
  //     return arr[n];
  //   };

  //   return helper(n);
};
// @lc code=end
