/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let ans = -1;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      ans = i;
      break;
    }
  }

  return ans;
};
// @lc code=end
