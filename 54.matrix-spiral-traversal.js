/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;
  const size = matrix.length * matrix[0].length;

  const result = [];

  while (result.length < size) {
    for (let i = left; i <= right && result.length < size; i++) {
      result.push(matrix[top][i]);
    }
    top += 1;

    for (let i = top; i <= bottom && result.length < size; i++) {
      result.push(matrix[i][right]);
    }
    right -= 1;

    for (let i = right; i >= left && result.length < size; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom -= 1;

    for (let i = bottom; i >= top && result.length < size; i--) {
      result.push(matrix[i][left]);
    }
    left += 1;
  }

  return result;
};
