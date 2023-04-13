/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let [sum, maxAvg] = [
    nums.slice(0, k).reduce((a, b) => a + b, 0),
    nums.slice(0, k).reduce((a, b) => a + b, 0) / k,
  ];
  let [start, end] = [1, k];

  while (end < nums.length) {
    sum = sum - nums[start - 1] + nums[end];
    const currentAvg = sum / k;

    maxAvg = Math.max(maxAvg, currentAvg);

    [start, end] = [start + 1, end + 1];
  }

  return maxAvg;
};
