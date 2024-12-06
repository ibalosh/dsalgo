import {TreeNode} from "./TreeNode.js";

/** 1161. Maximum Level Sum of a Binary Tree
 * https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/?envType=problem-list-v2&envId=breadth-first-search
 * ------------------------------------------------------------
 * Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
 *
 * Return the smallest level x such that the sum of all the values of nodes at level x is maximal.
 *
 * Example 1:
 *
 * Input: root = [1,7,0,7,-8,null,null]
 * Output: 2
 * Explanation:
 * Level 1 sum = 1.
 * Level 2 sum = 7 + 0 = 7.
 * Level 3 sum = 7 + -8 = -1.
 * So we return the level with the maximum sum which is level 2.
 *
 * Example 2:
 *
 * Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
 * Output: 2
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 104].
 * -105 <= Node.val <= 105
 * ------------------------------------------------------------
 * Runtime complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {TreeNode} root
 * @return {number}
 */
let maxLevelSum = function(root) {
  if (root == null) return 0;

  let queue = [root]
  let maxNumbersOnLevel = Number.MIN_VALUE;
  let maxNumbersLevel = null;
  let currentLevel = 0;

  while (queue.length > 0) {
    currentLevel++;
    let sumOnLevel = 0;

    let currentQueueSize = queue.length;
    for (let j = 0; j < currentQueueSize; j++) {
      let node = queue.shift();
      sumOnLevel += node.val;

      if (node.left !== null)
        queue.push(node.left);

      if (node.right !== null)
        queue.push(node.right);
    }

    if (sumOnLevel > maxNumbersOnLevel || maxNumbersLevel === null) {
      maxNumbersOnLevel = sumOnLevel;
      maxNumbersLevel = currentLevel;
    }
  }

  return maxNumbersLevel;
};

let tree = new TreeNode(
  1,
  new TreeNode(7,
    new TreeNode(7),
    new TreeNode(-8)
  ),
  new TreeNode(0)
);
console.log(maxLevelSum(tree));


tree = new TreeNode(
  -100,
  new TreeNode(-200,
    new TreeNode(-20),
    new TreeNode(-5)
  ),
  new TreeNode(-300,
    new TreeNode(-10)
    )
);
console.log(maxLevelSum(tree));