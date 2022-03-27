/*
 * @lc app=leetcode id=1038 lang=javascript
 *
 * [1038] Binary Search Tree to Greater Sum Tree
 */

const { node } = require("prop-types");

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
 * @return {TreeNode}
 */

var bstToGst = function (root) {
  let value = 0;

  const traverse = (root) => {
    if (!root) return;
    traverse(root.right);
    root.val += value;
    value = root.val;
    traverse(root.left);
  };

  traverse(root);

  return root;
};
// @lc code=end
