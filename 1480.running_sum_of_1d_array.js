/**
 * @param {number[]} nums
 * @return {number[]}
 */

const runningSum = nums => {
  let total = 0;
  return nums.map(n => total += n)
};