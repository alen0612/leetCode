/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let ans = [];

  const combination = (openParentheses, closeParantheses, currentString) => {
    if (closeParantheses === n) {
      ans.push(currentString);
      return;
    }

    if (openParentheses < n)
      combination(openParentheses + 1, closeParantheses, currentString + "(");
    if (closeParantheses < openParentheses)
      combination(openParentheses, closeParantheses + 1, currentString + ")");
  };
  combination(1, 0, "(");
  return ans;
};
// @lc code=end
