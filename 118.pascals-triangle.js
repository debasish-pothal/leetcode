/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [];

  for (let i = 0; i < numRows; i++) {
    const currentRow = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        currentRow.push(1);
      } else {
        const num = result[i - 1][j - 1] + result[i - 1][j];
        currentRow.push(num);
      }
    }

    result.push(currentRow);
  }

  return result;
};
