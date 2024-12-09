/**
 * 49. Group Anagrams
 * https://leetcode.com/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-interview-150
 * -------------------------------------------------------------
 * Given an array of strings strs, group the
 * anagrams
 *  together. You can return the answer in any order.
 *
 * Example 1:
 *
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * Explanation:
 *
 * There is no string in strs that can be rearranged to form "bat".
 * The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
 * The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
 *
 * Example 2:
 *
 * Input: strs = [""]
 * Output: [[""]]
 *
 * Example 3:
 *
 * Input: strs = ["a"]
 * Output: [["a"]]
 *
 * Constraints:
 *
 * 1 <= strs.length <= 104
 * 0 <= strs[i].length <= 100
 * strs[i] consists of lowercase English letters.
 * -------------------------------------------------------------
 *
 * Runtime complexity: O(NxMlogM) - N is the number of strings in the input array and M is the length of the longest string
 * Space complexity: O(NXM)
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function(strs) {
  let anagrams = new Map();

  for (let str of strs) {
    const key = str.split("").sort().join("");
    if (anagrams[key] === undefined) {
      anagrams[key] = [str];
    }
    else {
      anagrams[key].push(str);
    }
  }

  return Object.values(anagrams);
};

let strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs)); // [["bat"],["nat","tan"],["ate","eat","tea"]]

strs = [""]
console.log(groupAnagrams(strs)); // [[""]]

strs = ["a"]
console.log(groupAnagrams(strs)); // [["a"]]