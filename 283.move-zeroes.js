/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// a is 0 if swap is called
// Ex: [0, 1, 2, 3]
// => a = 0, b = 3
// shift a to b's index
// => [1, 2, 3, 0]
const swap = (arr, a, b) => {
  while (a != b) {
    arr[a] = arr[a + 1];
    arr[a + 1] = 0;
    a++;
  }
};

var moveZeroes = function (nums) {
  if (!nums || nums.length === 1) return;

  let idx = nums.length - 1;
  while (nums[idx] === 0) idx--;
  if (idx <= 0) return;

  for (var i = idx - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      swap(nums, i, idx);
      idx--;
    }
  }
};
// @lc code=end
