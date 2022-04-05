/*
 * @lc app=leetcode id=2161 lang=javascript
 *
 * [2161] Partition Array According to Given Pivot
 */

const { indexOf } = require("lodash");

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  // using map & concat method
  let smaller = [];
  let greater = [];
  let equal = [];

  nums.map((number) => {
    if (number < pivot) {
      smaller.push(number);
    } else if (number > pivot) greater.push(number);
    else equal.push(number);
  });

  return smaller.concat(equal).concat(greater);
};
// @lc code=end
