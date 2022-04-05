/*
 * @lc app=leetcode id=2149 lang=javascript
 *
 * [2149] Rearrange Array Elements by Sign
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  let positive = [];
  let negative = [];
  let ans = [];
  let idx = 0;

  nums.map((num) => {
    if (num > 0) positive.push(num);
    else negative.push(num);
  });

  positive.map((num) => {
    ans.push(num);
    ans.push(negative[idx++]);
  });

  return ans;
};
// @lc code=end
