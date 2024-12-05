import {ListNode, createList} from "./ListNode.js";

/**
 * 141. Linked List Cycle
 * https://leetcode.com/problems/linked-list-cycle/description/?envType=problem-list-v2&envId=linked-list
 * ---------------------------------
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that can be reached again by
 * continuously following the next pointer. Internally, pos is used to denote the index of the node
 * that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 *
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 *
 * Example 1:
 *
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
 *
 * Example 2:
 *
 * Input: head = [1,2], pos = 0
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
 *
 * Example 3:
 *
 * Input: head = [1], pos = -1
 * Output: false
 * Explanation: There is no cycle in the linked list.
 *
 * Constraints:
 *
 * The number of the nodes in the list is in the range [0, 104].
 * -105 <= Node.val <= 105
 * pos is -1 or a valid index in the linked-list.
 *
 *
 * Follow up: Can you solve it using O(1) (i.e. constant) memory?
 * --------------------------------------
 * Runtime complexity - O(n) - n is the length of the linked list
 * Space complexity - O(1)
 *
 * @param {ListNode} head
 * @return {boolean}
 */
let hasCycle = function(head) {
  if (head === null) return false;
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (fastPointer === slowPointer) return true;
  }

  return false;
};

let list = createList([3,2,0,-4]);
let node = list.next;
list.next.next.next.next = node

console.log(hasCycle(list));

list = createList([1,2]);
list.next.next = list;
console.log(hasCycle(list));

list = createList([1]);
console.log(hasCycle(list));



