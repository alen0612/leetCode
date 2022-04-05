/*
 * @lc app=leetcode id=1409 lang=javascript
 *
 * [1409] Queries on a Permutation With Key
 */

// @lc code=start
/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */

const changePosition = (P, index) => {
  let tmp = P[index];
  while (index > 0) {
    P[index] = P[index - 1];
    index--;
  }
  P[0] = tmp;

  return P;
};

var processQueries = function (queries, m) {
  let ans = [];

  let P = Array.from({ length: m }, (v, i) => i + 1);

  queries.map((query) => {
    let index = P.indexOf(query);
    ans.push(index);
    P = changePosition(P, index);
  });

  return ans;
};
// @lc code=end
