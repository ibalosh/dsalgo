import {TreeNode} from "./TreeNode.js";

/**
 * * 100. Same Tree
 *  * https://leetcode.com/problems/same-tree/description/?envType=problem-list-v2&envId=breadth-first-search
 *  * ------------------------------------------------
 *  * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 *  *
 *  * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 *  *
 *  * Example 1:
 *  *
 *  * Input: p = [1,2,3], q = [1,2,3]
 *  * Output: true
 *  *
 *  * Example 2:
 *  *
 *  * Input: p = [1,2], q = [1,null,2]
 *  * Output: false
 *  *
 *  * Example 3:
 *  *
 *  * Input: p = [1,2,1], q = [1,1,2]
 *  * Output: false
 *  *
 *  * Constraints:
 *  *
 *  * The number of nodes in both trees is in the range [0, 100].
 *  * -104 <= Node.val <= 104
 *  * ------------------------------------------------
 *  * Runtime complexity - O(n)
 *  * Space complexity - O(n)
 *  *
 *  * @param {TreeNode} p
 *  * @param {TreeNode} q
 *  * @return {boolean}
 *  */
let isSameTree = function(p, q) {
  let queuePTree = [];
  let queueQTree = [];

  queuePTree.push(p);
  queueQTree.push(q);

  while (queuePTree.length > 0) {
    let nodeP = queuePTree.shift();
    let nodeQ = queueQTree.shift();

    if (nodeP === null && nodeQ !== null) return false;
    if (nodeP !== null && nodeQ === null) return false;
    if (nodeP !== null && nodeQ !== null) {
      if (nodeP.val !== nodeQ.val) return false;
    }

    if (nodeP !== null) {
      queuePTree.push(nodeP.left);
      queuePTree.push(nodeP.right);
    }

    if (nodeQ !== null) {
      queueQTree.push(nodeQ.left);
      queueQTree.push(nodeQ.right);
    }
  }

  return true;
};

let q = new TreeNode(
  1,
  new TreeNode(2),
  new TreeNode(3)
);

let p = new TreeNode(
  1,
  new TreeNode(2),
  new TreeNode(3)
);
console.log(isSameTree(p, q));

p = new TreeNode(
  1,
  new TreeNode(2),
  null
);

q = new TreeNode(
  1,
  null,
  new TreeNode(2)
);
console.log(isSameTree(p, q));


p = new TreeNode(
  1,
  new TreeNode(2),
  new TreeNode(1)
);

q = new TreeNode(
  1,
  new TreeNode(1),
  new TreeNode(2)
);
console.log(isSameTree(p, q));
