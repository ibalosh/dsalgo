import {TreeNode} from "./TreeNode.js";

/**
 * Given an integer array nums where the elements are sorted in ascending order,
 * convert it to a height-balanced binary search tree.
 *
 * Example 1:
 *
 * Input: nums = [-10,-3,0,5,9]
 * Output: [0,-3,9,-10,null,5]
 * Explanation: [0,-10,5,null,-3,null,9] is also accepted:
 *
 * Example 2:
 *
 * Input: nums = [1,3]
 * Output: [3,1]
 * Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 104
 * -104 <= nums[i] <= 104
 * nums is sorted in a strictly increasing order.
 *
 *
 * @param {number[]} nums
 * @return {TreeNode}
 */
let sortedArrayToBST = function(nums) {
  function generateTree(left, right, nums) {
    if (left > right) return null;

    let mid = Math.floor((left + right) / 2);
    let node = new TreeNode(nums[mid]);

    node.left = generateTree(left, mid-1, nums);
    node.right = generateTree(mid+1, right,nums);
    return node;
  }

  return generateTree(0,nums.length-1, nums);
};

let nums = [-10,-3,0,5,9]
let tree = sortedArrayToBST(nums);
console.log(tree);