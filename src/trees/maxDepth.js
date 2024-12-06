import {TreeNode} from "./TreeNode.js";

/**
 * 104. Maximum Depth of Binary Tree
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75
 * -----------------------------------------------------------------------------
 *
 * Given the root of a binary tree, return its maximum depth.
 *
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the
 * farthest leaf node.
 *
 * Example 1:
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 *
 * Example 2:
 *
 * Input: root = [1,null,2]
 * Output: 2
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 104].
 * -100 <= Node.val <= 100
 * -----------------------------------------------------------------------------
 * Runtime complexity: O(n) - n is the number of nodes in the tree
 * Space complexity: O(n) - when tree is completely unbalanced (like a linked list - only has left nodes for example)
 * Space complexity: O(log(n)) - when tree is balanced - height of the tree is log(n)
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxDepth = function(root) {
  if (root === null) return 0;
  else {
    let leftHeight = maxDepth(root.left);
    let rightHeight = maxDepth(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
};

let tree = new TreeNode(
  4,
  new TreeNode(2,
    new TreeNode(1),
    new TreeNode(1)
  ),
  new TreeNode(7)
);

console.log(maxDepth(tree));


