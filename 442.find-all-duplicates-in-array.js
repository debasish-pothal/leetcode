/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const result = [];

  for (const num of nums) {
    const index = Math.abs(num) - 1;

    if (nums[index] < 0) {
      result.push(Math.abs(num));
    } else {
      nums[index] = -1 * Math.abs(nums[index]);
    }
  }

  return result;
};
