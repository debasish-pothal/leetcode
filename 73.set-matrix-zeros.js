/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const zeroCords = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        zeroCords.push([row, col]);
      }
    }
  }

  for (let i = 0; i < zeroCords.length; i++) {
    const [zeroRow, zeroCol] = zeroCords[i];

    for (let col = 0; col < matrix[0].length; col++) {
      matrix[zeroRow][col] = 0;
    }

    for (let row = 0; row < matrix.length; row++) {
      matrix[row][zeroCol] = 0;
    }
  }
};
