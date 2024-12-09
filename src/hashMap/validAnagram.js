/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/description/?envType=study-plan-v2&envId=top-interview-150
 * -------------------------------------------------------------
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * Example 1:
 *
 * Input: s = "anagram", t = "nagaram"
 *
 * Output: true
 *
 * Example 2:
 *
 * Input: s = "rat", t = "car"
 *
 * Output: false
 *
 * Constraints:
 *
 * 1 <= s.length, t.length <= 5 * 104
 * s and t consist of lowercase English letters.
 * -------------------------------------------------------------
 *  Space Complexity: O(1) - since array is fixed size
 *  Runtime Complexity: O(n)
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function(s, t) {
  if (s.length !== t.length)
    return false;

  let charsSum = Array(26).fill(0);

  for (let i=0;i<s.length;i++) {
    charsSum[(s.charCodeAt(i) - "a".charCodeAt(0))]++;
    charsSum[(t.charCodeAt(i) - "a".charCodeAt(0))]--;
  }

  return charsSum.every(s => s === 0);
};

let s = "anagram";
let t = "nagaram"
console.log(isAnagram(s,t));

s = "rat";
t = "car"
console.log(isAnagram(s,t));

s = "ac";
t = "bb";
console.log(isAnagram(s,t));