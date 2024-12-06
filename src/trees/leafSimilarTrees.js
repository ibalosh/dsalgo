/**
 * 872. Leaf-Similar Trees
 * https://leetcode.com/problems/leaf-similar-trees/description/?envType=study-plan-v2&envId=leetcode-75
 * ----------------------------------------------
 *
 * Consider all the leaves of a binary tree, from left to right order, the values of those leaves form
 * a leaf value sequence.
 *
 * For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
 *
 * Two binary trees are considered leaf-similar if their leaf value sequence is the same.
 *
 * Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
 *
 * Example 1:
 *
 * Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
 * Output: true
 *
 * Example 2:
 *
 * Input: root1 = [1,2,3], root2 = [1,3,2]
 * Output: false
 *
 * Constraints:
 *
 * The number of nodes in each tree will be in the range [1, 200].
 * Both of the given trees will have values in the range [0, 200].
 * -----------------------------------------------------
 * Runtime complexity O(n+m)) where n and m are the number of nodes in the trees
 * Space complexity O(n+m) where n and m are the number of nodes in the trees
 *
 */
import {TreeNode} from "./TreeNode.js";

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
let leafSimilar = function(root1, root2) {
  function dfs(node, leaves) {
    if (node !== null) {
      if (node.left === null && node.right === null) {
        leaves.push(node.val);
      }
      dfs(node.left, leaves);
      dfs(node.right, leaves);
    }
  }

  let leaves1 = [];
  let leaves2 = [];

  dfs(root1, leaves1);
  dfs(root2, leaves2);

  return (
    leaves1.length === leaves2.length &&
      leaves1.every((value, index) => leaves2[index] === value)
  )

};

let tree = new TreeNode(
  3,
  new TreeNode(5,
    new TreeNode(6),
    new TreeNode(2,
      new TreeNode(7),
      new TreeNode(4)
    )
  ),
  new TreeNode(1,
    new TreeNode(9),
    new TreeNode(8)
  )
);

let tree2 = new TreeNode(
  3,
  new TreeNode(5,
    new TreeNode(6),
    new TreeNode(7),
  ),
  new TreeNode(1,
    new TreeNode(4),
    new TreeNode(2,
      new TreeNode(9),
      new TreeNode(8)
    )
  )
);

console.log(leafSimilar(tree, tree2));