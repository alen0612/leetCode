/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;
  const bfs = (root) => {
    if (root) {
      bfs(root.left);
      bfs(root.right);
      let tmp = root.left;
      root.left = root.right;
      root.right = tmp;
      return root;
    }
  };

  return bfs(root);
};
// @lc code=end
