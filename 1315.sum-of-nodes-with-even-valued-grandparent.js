/*
 * @lc app=leetcode id=1315 lang=javascript
 *
 * [1315] Sum of Nodes with Even-Valued Grandparent
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const addSum = (node, depth) => {
  if (!node) return 0;
  if (depth === 0) {
    return node.val;
  }

  return addSum(node.left, depth - 1) + addSum(node.right, depth - 1);
};

var sumEvenGrandparent = function (root) {
  if (!root) return 0;
  let ans = 0;

  if (root.val % 2 === 0) {
    ans += addSum(root.left, 1) + addSum(root.right, 1);
  }
  ans += sumEvenGrandparent(root.left) + sumEvenGrandparent(root.right);

  return ans;
};
// @lc code=end
