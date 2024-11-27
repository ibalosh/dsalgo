/**
 * 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150
 * ------------------------------------------------------
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase
 * letters and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Example 1:
 *
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 * Example 2:
 *
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 * Example 3:
 *
 * Input: s = " "
 * Output: true
 * Explanation: s is an empty string "" after removing non-alphanumeric characters.
 * Since an empty string reads the same forward and backward, it is a palindrome.
 *
 * Constraints:
 *
 * 1 <= s.length <= 2 * 105
 * s consists only of printable ASCII characters.
 * ------------------------------------------------------
 *
 * Runtime complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function(s) {
  let formattedStringAsArray = s.toLowerCase().match(/[a-z|0-9]/g);
  if (formattedStringAsArray === null)
    return true;

  let left = 0;
  let right = formattedStringAsArray.length-1;
  while (left < right) {
    if (formattedStringAsArray[left] !== formattedStringAsArray[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));

s = "race a car";
console.log(isPalindrome(s));

s = " ";
console.log(isPalindrome(s));

s = "a";
console.log(isPalindrome(s));

s = "aa";
console.log(isPalindrome(s));

s = "ab";
console.log(isPalindrome(s));

s = "0P";
console.log(isPalindrome(s));

s = "00";
console.log(isPalindrome(s));