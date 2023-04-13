/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let start = 0;
  let end = rows * cols - 1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start));
    const val = matrix[Math.floor(end / cols)][end % cols];

    if (val > target) {
      end = mid - 1;
    } else if (val < target) {
      start = mid + 1;
    } else {
      return true;
    }
  }

  return false;
};
