import {ListNode, createList} from "./ListNode";

/**
 * 2. Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers/description/?envType=problem-list-v2&envId=linked-list
 * -------------------------------
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example 1:
 *
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 * Example 2:
 *
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 * Example 3:
 *
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 * --------------------------------------------------
 * Runtime complexity - O(max(n,m)) - n and m are the lengths of the two linked lists
 * Space complexity - O(1)
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
  let current = new ListNode(0);
  let dummyHead = current;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let l1Val = (l1 === null) ? 0 : l1.val;
    let l2Val = (l2 === null) ? 0 : l2.val;
    let sum = l1Val + l2Val + carry;
    carry = sum >= 10 ? 1 : 0;

    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  return dummyHead.next;
};

let l1 = createList([2,4,3]);
let l2 = createList([5,6,4]);
console.log(addTwoNumbers(l1, l2));

l1 = createList([0]);
l2 = createList([0]);
console.log(addTwoNumbers(l1, l2));

l1 = createList([9,9,9,9,9,9,9]);
l2 = createList([9,9,9,9]);
console.log(addTwoNumbers(l1, l2));
