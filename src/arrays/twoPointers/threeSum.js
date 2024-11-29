/**
 * 15. 3Sum
 * https://leetcode.com/problems/3sum/description/?envType=study-plan-v2&envId=top-interview-150
 * -----------------------------------------------------------------------
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 * Example 1:
 *
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation:
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 * Notice that the order of the output and the order of the triplets does not matter.
 *
 * Example 2:
 *
 * Input: nums = [0,1,1]
 * Output: []
 * Explanation: The only possible triplet does not sum up to 0.
 * Example 3:
 *
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 * Explanation: The only possible triplet sums up to 0.
 *
 * Constraints:
 *
 * 3 <= nums.length <= 3000
 * -105 <= nums[i] <= 105
 * -----------------------------------------------------------------------
 * Runtime complexity: O(n^2) + O(n*logn) ~= O(n^2)
 * Space complexity: O(n)
 *
 * @param {number[]} nums
 * @param {target} target number
 * @return {number[][]}
 */
let threeSum = function(nums, target) {
  let values = [];
  nums.sort((a, b) => a - b);

  for (let i=0;i<nums.length;i++) {
      if (nums[i] > 0) continue;
      // you want to skip duplicates for first value in triplet
      if (nums[i] === nums[i-1]) continue;
      twoSum(nums, i, values);
  }

  return values;
};

function twoSum(nums, i, values) {
  let left=i+1;
  let right=nums.length-1;

  while (left<right) {
    let sum = nums[i] + nums[left] + nums[right];

    if (sum === 0) {
      values.push([nums[left], nums[i], nums[right]]);
      left++;
      right--;

      // you want to skip duplicates for second value in triplet
      while (nums[left] === nums[left-1])
        left++;
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }

  return values;
}

// -4, -1, -1, 0, 1, 2
let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums, 0)); // [[-1,-1,2],[-1,0,1]]

nums = [0,1,1]
console.log(threeSum(nums, 0)); // []

nums = [0,0,0,0]
console.log(threeSum(nums, 0)); // []

nums = [-2,0,0,2,2]
console.log(threeSum(nums, 0)); // []