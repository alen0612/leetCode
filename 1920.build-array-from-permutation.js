/*
 * @lc app=leetcode id=1920 lang=javascript
 *
 * [1920] Build Array from Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  let ans = [];

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === i) ans.push(nums[i]);
    else ans.push(nums[nums[i]]);
  }

  return ans;
};
// @lc code=end
