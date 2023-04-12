/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  const minDiff = Math.min(...arr.slice(1).map((num, i) => num - arr[i]));

  return arr.slice(1).reduce((result, num, i) => {
    if (num - arr[i] === minDiff) {
      result.push([arr[i], num]);
    }
    return result;
  }, []);
};
