/*
 * @lc app=leetcode id=1137 lang=javascript
 *
 * [1137] N-th Tribonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const helper = (n) => {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let arr = new Array(n);
    arr[0] = 0;
    arr[1] = arr[2] = 1;
    for (var i = 3; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
    }

    return arr[n];
  };

  return helper(n);
};
// @lc code=end
