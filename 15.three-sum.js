/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    const target = -1 * nums[i];

    while (j < k) {
      const currentTarget = nums[j] + nums[k];

      if (currentTarget > target) {
        k -= 1;
      } else if (currentTarget < target) {
        j += 1;
      } else {
        result.push([nums[i], nums[j], nums[k]]);

        while (j < k && nums[j] === nums[j + 1]) {
          j += 1;
        }

        while (j < k && nums[k] === nums[k - 1]) {
          k -= 1;
        }

        j += 1;
        k -= 1;
      }
    }
  }

  return result;
};
