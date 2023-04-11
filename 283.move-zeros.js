/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let lastIndex = 0;

  for (const num of nums) {
    if (num !== 0) {
      nums[lastIndex] = num;
      lastIndex += 1;
    }
  }

  nums.fill(0, lastIndex);
};
