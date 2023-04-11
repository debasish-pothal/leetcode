/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const result = new Array(numCols).fill().map(() => new Array(numRows));

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      result[j][i] = matrix[i][j];
    }
  }

  return result;
};
