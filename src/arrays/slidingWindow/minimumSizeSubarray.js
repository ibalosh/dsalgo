/**
 * 209. Minimum Size Subarray Sum
 * --------------------------------------
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a
 * subarray
 *  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
 *
 * Example 1:
 *
 * Input: target = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 *
 * Example 2:
 *
 * Input: target = 4, nums = [1,4,4]
 * Output: 1
 *
 * Example 3:
 *
 * Input: target = 11, nums = [1,1,1,1,1,1,1,1]
 * Output: 0
 *
 * Constraints:
 *
 * 1 <= target <= 109
 * 1 <= nums.length <= 105
 * 1 <= nums[i] <= 104
 *
 *
 * Follow up: If you have figured out the O(n) solution, try coding another solution of
 * which the time complexity is O(n log(n)).
 * --------------------------------------
 * Runtime complexity - O(n)
 * Space complexity - O(1)
 *
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
let minSubArrayLen = function(target, nums) {
  let left =0;
  let sumOfArrayElements=0;
  let subArraySize = Number.MAX_VALUE;

  for (let right=0;right<nums.length;right++) {
    sumOfArrayElements += nums[right];

    while (sumOfArrayElements >= target) {
      subArraySize = Math.min(subArraySize, right - left + 1);
      sumOfArrayElements -= nums[left++];
    }
  }

  return subArraySize === Number.MAX_VALUE ? 0 : subArraySize;
};

let target = 7;
let nums = [2,3,1,2,4,3];
console.log(minSubArrayLen(target, nums)); // 2

target = 4;
nums = [1,4,4]
console.log(minSubArrayLen(target, nums)); // 1

target = 11;
nums = [1,1,1,1,1,1,1,1];
console.log(minSubArrayLen(target, nums)); // 0

target = 213;
nums = [12,28,83,4,25,26,25,2,25,25,25,12];
console.log(minSubArrayLen(target, nums)); // 8