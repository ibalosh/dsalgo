import {treeFromArray, TreeNode} from "./TreeNode.js";

/**
 * 530. Minimum Absolute Difference in BST
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/?envType=study-plan-v2&envId=top-interview-150
 * -----------------------------------------------------
 * Given the root of a Binary Search Tree (BST), return the minimum absolute difference between
 * the values of any two different nodes in the tree.
 *
 * Example 1:
 *
 * Input: root = [4,2,6,1,3]
 * Output: 1
 *
 * Example 2:
 *
 * Input: root = [1,0,48,null,null,12,49]
 * Output: 1
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [2, 104].
 * 0 <= Node.val <= 105
 *
 * Runtime complexity: O(nlog(n)) - since we need to sort the array, otherwise it would be O(n)
 * Space complexity: O(n)
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let getMinimumDifference = function(root) {
  if (root === null) return -1;
  let nodes = [];

  function dfs(node) {
    if (node === null) return;
    else nodes.push(node.val);

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  nodes.sort((a,b) => a-b);

  let min = Number.MAX_VALUE;
  for (let i=1; i<nodes.length; i++) {
    min = Math.min(min, nodes[i] - nodes[i-1]);
  }

  return min;
};

let root = [4,2];
console.log(getMinimumDifference(treeFromArray(root)));

root = [4,2,6,1,3];
console.log(getMinimumDifference(treeFromArray(root)));

root = [1,0,48,null,null,12,49];
console.log(getMinimumDifference(treeFromArray(root)));