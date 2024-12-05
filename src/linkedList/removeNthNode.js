import {ListNode, createList} from "./ListNode.js";

/**
 * 19. Remove Nth node from end of list.
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/?envType=problem-list-v2&envId=linked-list
 * -------------------------------------------------------------
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 * Example 2:
 *
 * Input: head = [1], n = 1
 * Output: []
 * Example 3:
 *
 * Input: head = [1,2], n = 1
 * Output: [1]
 *
 *
 * Constraints:
 *
 * The number of nodes in the list is sz.
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 *
 *
 * Follow up: Could you do this in one pass?
 * -------------------------------------------------------------
 * Runtime complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = function(head, n) {
  let fastPointer = head;
  let slowPointer = head;

  for (let i = 0; i < n; i++) {
    fastPointer = fastPointer.next;
    // if fast becomes null, means we want to delete head
    if (fastPointer === null) {
      head = head.next;
      return head;
    }
  }

  while (fastPointer.next !== null) {
    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
  }

  slowPointer.next = slowPointer.next.next;
  return head;
};

let list = createList([1,2,3,4,5]);
let n = 2;
console.log(removeNthFromEnd(list, n));

list = createList([1]);
n = 1;
console.log(removeNthFromEnd(list, n));

list = createList([1,2]);
n = 1
console.log(removeNthFromEnd(list, n));


list = createList([1,2]);
n = 2
console.log(removeNthFromEnd(list, n));
