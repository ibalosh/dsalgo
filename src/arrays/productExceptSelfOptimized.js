/**
 * 238. Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75
 * -------------------------------------------------------------
 * Given an integer array nums, return an array answer such that answer[i] is equal
 * to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * Example 2:
 *
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 *
 * Constraints:
 *
 * 2 <= nums.length <= 105
 * -30 <= nums[i] <= 30
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * -------------------------------------------------------------
 *
 * Optimized version of the previous solution where one less array is used,
 * still same space complexity though.
 *
 * Space complexity: O(n)
 * Runtime complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
let productExceptSelf = function(nums) {
  let leftMultipliedNums = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    leftMultipliedNums[i] = leftMultipliedNums[i-1] * nums[i-1];
  }

  let currentProductFromRight = 1;
  let answer = Array(nums.length).fill(1);
  for (let i = nums.length-1; i >= 0; i--) {
    currentProductFromRight = (i<nums.length-1) ? currentProductFromRight * nums[i+1] : currentProductFromRight;
    answer[i] = currentProductFromRight * leftMultipliedNums[i];
  }

  return answer;
};

// Test example runs
let nums = [1,2,3,4]
console.log(productExceptSelf(nums))


