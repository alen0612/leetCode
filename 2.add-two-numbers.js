/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l1_tmp = l1;
  let l2_tmp = l2;
  let ans = new ListNode(),
    ans_tmp = ans;
  let cin = 0;

  while (l1_tmp && l2_tmp) {
    ans_tmp.next = new ListNode(l1_tmp.val + l2_tmp.val + cin);
    if (ans_tmp.next.val >= 10) {
      ans_tmp.next.val -= 10;
      cin = 1;
    } else cin = 0;

    ans_tmp = ans_tmp.next;
    l1_tmp = l1_tmp.next;
    l2_tmp = l2_tmp.next;
  }

  if (l1_tmp) ans_tmp.next = l1_tmp;
  else if (l2_tmp) ans_tmp.next = l2_tmp;

  while (cin) {
    if (ans_tmp.next) {
      ans_tmp = ans_tmp.next;
      ans_tmp.val++;
      if (ans_tmp.val >= 10) {
        ans_tmp.val -= 10;
        cin = 1;
      } else cin = 0;
    } else {
      ans_tmp.next = new ListNode(cin);
      cin = 0;
    }
  }

  ans = ans.next;

  return ans;
};
// @lc code=end
