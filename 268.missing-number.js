/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;

  const reqNum = Math.floor((n * (n + 1)) / 2);
  const currentNum = nums.reduce((num, acc) => num + acc, 0);

  return reqNum - currentNum;
};
