/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function (heights) {
  const result = [heights.length - 1];

  for (let i = heights.length - 2; i >= 0; i--) {
    const currentHeight = heights[i];
    const stackTopHeight = heights[result[result.length - 1]];

    if (currentHeight > stackTopHeight) {
      result.push(i);
    }
  }

  return result.reverse();
};
