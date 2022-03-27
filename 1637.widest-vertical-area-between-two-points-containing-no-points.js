/*
 * @lc app=leetcode id=1637 lang=javascript
 *
 * [1637] Widest Vertical Area Between Two Points Containing No Points
 */

const { get } = require("lodash");

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */

const sortFunction = (a, b) => {
  if (a[0] === b[0]) {
    return 0;
  }
  return a[0] < b[0] ? -1 : 1;
};

var maxWidthOfVerticalArea = function (points) {
  points.sort(sortFunction);
  let prev = points[0][0];
  maxDistance = 0;

  points.map((point) => {
    maxDistance = Math.max(maxDistance, point[0] - prev);
    prev = point[0];
  });

  return maxDistance;
};
// @lc code=end
