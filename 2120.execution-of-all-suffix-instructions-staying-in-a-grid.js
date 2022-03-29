/*
 * @lc app=leetcode id=2120 lang=javascript
 *
 * [2120] Execution of All Suffix Instructions Staying in a Grid
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function (n, startPos, s) {
  let ans = [];
  let tmp = 0;

  while (s.length > 0) {
    let [x, y] = startPos;
    tmp = 0;

    for (var c of s) {
      if (c === "U") x--;
      else if (c === "D") x++;
      else if (c === "L") y--;
      else y++;

      if (x < 0 || y < 0 || x >= n || y >= n) break;

      tmp++;
    }

    ans.push(tmp);
    s = s.slice(1);
  }

  return ans;
};
// @lc code=end
