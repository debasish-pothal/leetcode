/**
 * @param {number[]} nums
 * @return {number[]}
 */
const merge = (arr1, arr2) => {
  const arr = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      arr.push(arr1[p1]);
      p1++;
    } else {
      arr.push(arr2[p2]);
      p2++;
    }
  }

  while (p1 < arr1.length) {
    arr.push(arr1[p1]);
    p1++;
  }

  while (p2 < arr2.length) {
    arr.push(arr2[p2]);
    p2++;
  }

  return arr;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const arr1 = arr.slice(0, mid);
  const arr2 = arr.slice(mid);

  return merge(mergeSort(arr1), mergeSort(arr2));
};

var sortArray = function (nums) {
  return mergeSort(nums);
};
