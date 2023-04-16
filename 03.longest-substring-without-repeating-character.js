/**
 * @param {string} s
 * @return {string}
 */
const getStringSlice = (left, right, str) => {
  while (left >= 0 && right < str.length) {
    if (str[left] !== str[right]) {
      break;
    }

    left -= 1;
    right += 1;
  }

  return [left + 1, right];
};

var longestPalindrome = function (s) {
  let max = [0, 1];

  for (let i = 0; i < s.length; i++) {
    const even = getStringSlice(i - 1, i, s);
    const odd = getStringSlice(i - 1, i + 1, s);

    const currentMax = even[1] - even[0] > odd[1] - odd[0] ? even : odd;
    max = max[1] - max[0] > currentMax[1] - currentMax[0] ? max : currentMax;
  }

  return s.slice(max[0], max[1]);
};
