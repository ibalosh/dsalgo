/**
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 *
 *
 * Example 1:
 *
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * Example 2:
 *
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 * @param {number} n
 * @return {number}
 */
let climbStairsBottomUp = function(n) {
  const results = new Array(n);
  results[0] = 1;
  results[1] = 2;

  for (let i = 2; i < n; i++) {
    results[i] = results[i-1] + results[i-2];
  }
  return results[n-1];
};

let climbStairsTopBottom = function(n) {
    if (n===1) return 1;
    if (n === 2) return 2;

    return climbStairsTopBottom(n-1) + climbStairsTopBottom(n-2)
};

let climbStairsBottomUpOptimised = function(n) {
  if (n===1) return 1;
  if (n===2) return 2;
  let a = 1;
  let b= 2;
  let c = a + b;

  for (let i = 2; i < n; i++) {
    c = a + b;
    a = b;
    b=c;
  }
  return c;
};

console.log(climbStairsBottomUp(4));
console.log(climbStairsTopBottom(4));
console.log(climbStairsTopBottom(4));


/*

1
--
1

2
--
2
1 1


3
--
1 2
2 1
1 1 1

4
2 1 1
1 2 1
1 1 2
2 2
1 1 1 1



 */

