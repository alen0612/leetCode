/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  // optimized recursive O(n)
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  let ans = new Array(n);
  ans.fill(-1);
  ans[0] = 0;
  ans[1] = 1;

  const optimizedRecursiveHelper = (n) => {
    if (n < 2) return n;

    // even number
    if (n % 2 === 0) return ans[n / 2];
    else return ans[Math.floor(n / 2)] + 1;
  };

  for (var i = 2; i <= n; i++) ans[i] = optimizedRecursiveHelper(i);

  return ans;

  // recursive O(nlogn)
  /*if (n === 0) return [0];
  if (n === 1) return [0, 1];

  let ans = new Array(n);
  ans[0] = 0;
  ans[1] = 1;

  const recursiveHelper = (n) => {
    if (n < 2) return n;

    if (n % 2 === 0) return recursiveHelper(n / 2);
    else return recursiveHelper(Math.floor(n / 2)) + 1;
  };

  for (var i = 2; i <= n; i++) ans[i] = recursiveHelper(i);  

  return ans;*/

  // iterative O(n)
  /*if (n === 0) return [0];
  if (n === 1) return [0, 1];

  let ans = new Array(n);
  ans[0] = 0;
  ans[1] = 1;

  const iterativeHelper = () => {
    for (var i = 2; i <= n; i++) {
      if (i % 2 === 0) ans[i] = ans[i / 2];
      else ans[i] = ans[Math.floor(i / 2)] + 1;
    }
  };

  iterativeHelper();
  return ans;*/
};
// @lc code=end
