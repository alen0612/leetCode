/*
 * @lc app=leetcode id=674 lang=javascript
 *
 * [674] Longest Continuous Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length <= 1) return nums.length;

  let max = 1,
    cur = 1;

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) cur++;
    else {
      max = Math.max(max, cur);
      cur = 1;
    }
  }

  return Math.max(max, cur);
};
// @lc code=end
