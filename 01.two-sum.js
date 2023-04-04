/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const rem = target - num;

    if (numMap.has(rem)) {
      return [i, numMap.get(rem)];
    } else {
      numMap.set(num, i);
    }
  }
};
