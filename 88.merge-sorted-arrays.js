/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = nums1.length - 1;

  while (second >= 0) {
    if (nums1[first] > nums2[second]) {
      nums1[i] = nums1[first];
      i -= 1;
      first -= 1;
    } else {
      nums1[i] = nums2[second];
      i -= 1;
      second -= 1;
    }
  }
};
