/*
 * @lc app=leetcode id=700 lang=javascript
 *
 * [700] Search in a Binary Search Tree
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let ans = null;
  let found = false;

  const dfs = (root) => {
    if (found) return;
    if (root) {
      dfs(root.left);
      if (root.val === val) {
        ans = root;
        found = true;
      }
      dfs(root.right);
    }
  };

  dfs(root);
  return ans;
};
// @lc code=end
