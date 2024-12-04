/**
 *
 * Given an encoded string, return its decoded string.
 *
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
 *
 * You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
 *
 * The test cases are generated so that the length of the output will never exceed 105.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "3[a]2[bc]"
 * Output: "aaabcbc"
 * Example 2:
 *
 * Input: s = "3[a2[c]]"
 * Output: "accaccacc"
 * Example 3:
 *
 * Input: s = "2[abc]3[cd]ef"
 * Output: "abcabccdcdcdef"
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 30
 * s consists of lowercase English letters, digits, and square brackets '[]'.
 * s is guaranteed to be a valid input.
 * All the integers in s are in the range [1, 300].
 *
 * @param {string} s
 * @return {string}
 */
let decodeString = function(s) {
  Array.prototype.top = function() {
    return (this.length === 0) ? null : this[this.length - 1];
  }

  function isANumber(string) {
    return !Number.isNaN(+string);
  }

  let stack = [];

  for (let i=0;i<s.length;i++) {
    if (isANumber(s[i])) {
      let number = "" + s[i];
      while (isANumber(s[i+1])) {
        number = number + s[i+1];
        i++;
      }
      stack.push(+number);
    }
    else if (s[i] !== "]") {
      stack.push(s[i]);
    }
    else if (s[i] === "]") {
      let el = ""
      while (stack.top() !== "[" ) {
        el = stack.pop() + el;
      }
      stack.pop();
      stack.push(el.repeat(stack.pop()));
    }
  }

  return stack.join("");
};

let s = "100[leetcode]";
console.log(decodeString(s));

s = "2[abc]3[cd]ef";
console.log(decodeString(s));

s = "3[a]2[bc]"
console.log(decodeString(s));

s = "3[a2[c]]";
console.log(decodeString(s));





