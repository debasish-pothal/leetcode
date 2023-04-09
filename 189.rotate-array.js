/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;

  const rotateArr = (start = 0, end = nums.length - 1) => {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;

      start += 1;
      end -= 1;
    }
  };

  rotateArr();
  rotateArr(0, k - 1);
  rotateArr(k, nums.length - 1);
};
