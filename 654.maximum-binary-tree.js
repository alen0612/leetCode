/*
 * @lc app=leetcode id=654 lang=javascript
 *
 * [654] Maximum Binary Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */

const findGreatest = (array) => {
  let greatest = 0;

  array.map((num) => {
    if (num > greatest) {
      greatest = num;
    }
  });

  return greatest;
};

var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) return null;

  let greatest = findGreatest(nums);
  let index = nums.indexOf(greatest);
  let node = new TreeNode(greatest);
  node.left = constructMaximumBinaryTree(nums.slice(0, index));
  node.right = constructMaximumBinaryTree(nums.slice(index + 1));

  return node;
};
// @lc code=end
