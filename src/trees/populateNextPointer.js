import {treeFromArray} from "./TreeNode.js";

function TreeNode(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
};

/**
 * 117. Populating Next Right Pointers in Each Node II
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description/?envType=study-plan-v2&envId=top-interview-150
 * ------------------------------------------------------------
 * Given a binary tree
 *
 * struct Node {
 *   int val;
 *   Node *left;
 *   Node *right;
 *   Node *next;
 * }
 * Populate each next pointer to point to its next right node. If there is no next right node,
 * the next pointer should be set to NULL.
 *
 * Initially, all next pointers are set to NULL.
 *
 * Example 1:
 *
 * Input: root = [1,2,3,4,5,null,7]
 * Output: [1,#,2,3,#,4,5,7,#]
 * Explanation: Given the above binary tree (Figure A), your function should populate each next
 * pointer to point to its next right node, just like in Figure B. The serialized output is in
 * level order as connected by the next pointers, with '#' signifying the end of each level.
 *
 * Example 2:
 *
 * Input: root = []
 * Output: []
 *
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 6000].
 * -100 <= Node.val <= 100
 *
 * ------------------------------------------------------------
 * Runtime complexity: O(n)
 * Space complexity: O(n) - it would be actually diameter of the last level of the tree, which is n/2, which rounds
 * in the big O notation to O(n)
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
let connect = function(root) {
  if (root === null)
    return null;

  let node = root;
  let queue = [];
  queue.push(node);

  while (queue.length > 0) {
    let tempQueueLength = queue.length;

    for (let i=0;i < tempQueueLength; i++){
      let node = queue.shift();
      node.next = (i === tempQueueLength - 1) ? null : queue[0];

      if (node.left !== null)
        queue.push(node.left);

      if (node.right !== null)
        queue.push(node.right);
    }
  }

  return root;
};

let root = [1,2,3,4,5,null,7];
console.log(connect(treeFromArray(root)));

root = [];
console.log(connect(treeFromArray(root)));