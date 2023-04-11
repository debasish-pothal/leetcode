/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let isIncreasing = true;
  let isDescreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      isDescreasing = false;
    }

    if (nums[i] < nums[i - 1]) {
      isIncreasing = false;
    }

    if (!isIncreasing && !isDescreasing) {
      return false;
    }
  }

  return true;
};
