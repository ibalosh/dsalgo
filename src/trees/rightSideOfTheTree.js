import {TreeNode} from "./TreeNode.js";

/**
 * 199. Binary Tree Right Side View
 * https://leetcode.com/problems/binary-tree-right-side-view/description/?envType=study-plan-v2&envId=top-interview-150
 * ---------------------------------------------------------------------------------------
 * Given the root of a binary tree, imagine yourself standing on the right side of it,
 * return the values of the nodes you can see ordered from top to bottom.
 *
 * Example 1:
 *
 * Input: root = [1,2,3,null,5,null,4]
 * Output: [1,3,4]
 * Example 2:
 *
 * Input: root = [1,null,3]
 * Output: [1,3]
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
 * ---------------------------------------------------------------------------------------
 * Runtime complexity: O(n)
 * Space complexity: O(D) - where D is the diameter of the tree
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
let rightSideView = function(root) {
  if (root === null) return [];
  let rightSide = []

  // next level queue
  let nextLevel = [root];
  let currentLevel = [];

  while (nextLevel.length > 0) {
    currentLevel = nextLevel;
    nextLevel = [];

    let node = null;
    while (currentLevel.length > 0) {
      node = currentLevel.shift();

      if (node.left !== null) nextLevel.push(node.left);
      if (node.right !== null) nextLevel.push(node.right);
    }

    rightSide.push(node.val);
  }

  return rightSide;
};


let tree = new TreeNode(
  1,
  new TreeNode(2,
    null,
      new TreeNode(5)
    ),
  new TreeNode(3,
    null,
    new TreeNode(4)
  )
);
console.log(rightSideView(tree));

tree = new TreeNode(
  1,
  null,
    new TreeNode(2)
);

console.log(rightSideView(tree));

tree = new TreeNode(
  1,
  new TreeNode(2,
    new TreeNode(4)
  ),
  new TreeNode(3)
);
console.log(rightSideView(tree));