/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length <= 2) return nums[0];
  let cur = null;
  let count = 0;

  nums.reduce((acc, val) => {
    if (!cur) {
      cur = val;
      count = 1;
      return;
    }

    if (val === cur) count++;
    else count--;

    if (count === 0) {
      cur = val;
      count = 1;
    }
  }, 1);

  return cur;

  /*nums.sort();
  if (nums.length % 2 === 0) {
    if (nums[0] === nums[nums.length / 2 - 1]) return nums[0];
    else return nums[nums.length / 2];
  } else return nums[(nums.length - 1) / 2];*/
};
// @lc code=end
