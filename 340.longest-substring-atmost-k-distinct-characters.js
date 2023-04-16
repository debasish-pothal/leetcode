/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
  let max = 0;
  let start = 0;
  let end = 0;
  const sMap = new Map();

  while (end < s.length) {
    const endChar = s[end];

    sMap.set(endChar, (sMap.get(endChar) || 0) + 1);

    while (sMap.size > k) {
      const startChar = s[start];

      sMap.set(startChar, sMap.get(startChar) - 1);

      if (sMap.get(startChar) === 0) {
        sMap.delete(startChar);
      }

      start += 1;
    }

    max = Math.max(max, end - start + 1);

    end += 1;
  }

  return max;
};
