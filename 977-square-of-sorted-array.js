/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let n = nums.length - 1;
  const result = new Array(nums.length);
  let left = 0;
  let right = n;

  for (let i = n; i >= 0; i--) {
    const leftSqr = Math.pow(nums[left], 2);
    const rightSqr = Math.pow(nums[right], 2);

    if (leftSqr > rightSqr) {
      result[i] = leftSqr;
      left += 1;
    } else {
      result[i] = rightSqr;
      right -= 1;
    }
  }

  return result;
};
