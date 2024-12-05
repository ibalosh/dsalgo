import {ListNode, createList} from "./ListNode.js";

/**
 * 206. Reverse linked list.
 * https://leetcode.com/problems/reverse-linked-list/description/?envType=problem-list-v2&envId=linked-list
 * -------------------------------------------------------------
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 *
 * Example 1:
 *
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 *
 *  Example 2:
 *
 * Input: head = [1,2]
 * Output: [2,1]
 *
 * Example 3:
 *
 * Input: head = []
 * Output: []
 *
 * Constraints:
 *
 * The number of nodes in the list is the range [0, 5000].
 * -5000 <= Node.val <= 5000
 *
 * Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
 * -------------------------------------------------------------
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = function(head) {
  let current = head;
  let prev = null;

  while(current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return prev;
};

let head = [1,2,3,4,5];
console.log(reverseList(createList(head)));

head = [];
console.log(reverseList(createList(head)));

