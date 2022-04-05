/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices || prices.length < 2) return 0;

  let max = 0;
  let min = prices[0];

  prices.map((cur) => {
    min = Math.min(cur, min);
    max = Math.max(max, cur - min);
  });

  return max;
};
// @lc code=end
