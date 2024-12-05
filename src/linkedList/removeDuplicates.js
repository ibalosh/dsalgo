import {ListNode, createList, printList} from "./ListNode.js";

/**
 *
 * 83. Remove duplicates from sorted list.
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/?envType=problem-list-v2&envId=linked-list
 * -------------------------------------------------------------
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
 * Return the linked list sorted as well.
 *
 * Example 1:
 *
 * Input: head = [1,1,2]
 * Output: [1,2]
 *
 * Example 2:
 *
 * Input: head = [1,1,2,3,3]
 * Output: [1,2,3]
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [0, 300].
 * -100 <= Node.val <= 100
 * The list is guaranteed to be sorted in ascending order.
 * -------------------------------------------------------------
 * Runtime complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function(head) {
  if (head === null) return null;

  let node = new ListNode(-1);
  node.next = head;
  let uniqueNodeElements = new Set();

  while (node.next !== null) {
    if (uniqueNodeElements.has(node.next.val)) {
      node.next = node.next.next;
    } else {
      uniqueNodeElements.add(node.next.val);
      node = node.next;
    }
  }

  return head;
};

let nodes = createList([1,1,1]);
let list = deleteDuplicates(nodes)
printList(list);

nodes = createList([1,1]);
list = deleteDuplicates(nodes)
printList(list);

nodes = createList([1,1,2,3,3]);
list = deleteDuplicates(nodes)
printList(list);

nodes = createList([1,1,2])
list = deleteDuplicates(nodes)
printList(list);