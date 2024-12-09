/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import {treeFromArray} from "./TreeNode.js";

/**
 * 226. Invert Binary Tree
 * https://leetcode.com/problems/invert-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150
 * ------------------------------------------------------------
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * Example 1:
 *
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 * Example 2:
 *
 *
 * Input: root = [2,1,3]
 * Output: [2,3,1]
 *
 * Example 3:
 *
 * Input: root = []
 * Output: []
 *
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 * ------------------------------------------------------------
 * Runtime complexity: O(n)
 * Space complexity: O(n) - more precise it would be the height of the tree, which element of O(n) so it rounds into O(n)
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
let invertTree = function(root) {
  function dfs(node) {
    if (node === null)
      return null;

    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return root;
};

let root = [4,2,7,1,3,6,9];
invertTree(treeFromArray(root));