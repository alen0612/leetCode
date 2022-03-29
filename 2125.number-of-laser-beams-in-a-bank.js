/*
 * @lc app=leetcode id=2125 lang=javascript
 *
 * [2125] Number of Laser Beams in a Bank
 */

const { object } = require("prop-types");

// @lc code=start
/**
 * @param {string[]} bank
 * @return {number}
 */

// return 0 if no "1" in the string
// else return number of "1"
const checkOne = (string) => {
  let count = 0;
  string.split("").forEach((char) => {
    if (char === "1") count++;
  });

  return count;
};

var numberOfBeams = function (bank) {
  let ans = 0,
    prev = 0;
  // you can't form a beam from one or no cell
  if (bank.length < 2) return ans;

  Object.entries(bank).forEach((string) => {
    let count = checkOne(string[1]);
    if (count) {
      if (prev) ans += count * prev;
      prev = count;
    }
  });

  return ans;
};
// @lc code=end
