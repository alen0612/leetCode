/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const checkValid = (root, max, min) => {
    if (!root) return true;

    return (
      root.val < max &&
      root.val > min &&
      checkValid(root.left, root.val, min) &&
      checkValid(root.right, max, root.val)
    );
  };

  return checkValid(root, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);
};
// @lc code=end
