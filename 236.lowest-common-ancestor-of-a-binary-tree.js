/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 */

const { start } = require("repl");

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const helper = (root) => {
    if (!root || root === p || root === q) return root;
    let left = helper(root.left);
    let right = helper(root.right);
    return left && right ? root : left || right;
  };

  return helper(root);
};
// @lc code=end
