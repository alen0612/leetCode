/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // recursive
  const reverse = (cur, prev) => {
    if (!cur) return prev;

    let next = cur.next;
    cur.next = prev;

    return reverse(next, cur);
  };

  return reverse(head, null);

  /*// iterative
  cur = head;
  prev = null;

  while (cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;*/
};
// @lc code=end
