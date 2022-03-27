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
var mergeNodes = function(head) {
    let ans = new ListNode(null, null);
    let ansTmp = ans, value = 0;
    
    let tmp = head.next;
    while(tmp){
        if(tmp.val !== 0){            
            value += tmp.val;    
        }
        else{
            ansTmp.val = value;
            if(tmp.next !== null){
                ansTmp.next = new ListNode(null, null);
                ansTmp = ansTmp.next;
                value = 0
            }
        }
        tmp = tmp.next;
    }
    
    return ans;
};