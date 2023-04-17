/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const sameArray = (arr1, arr2) => {
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

var findAnagrams = function (s, p) {
  const sArr = new Array(26).fill(0);
  const pArr = new Array(26).fill(0);
  const result = [];

  for (let i = 0; i < p.length; i++) {
    const index = p.charCodeAt(i) % 26;
    pArr[index] += 1;
  }

  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) % 26;
    sArr[index] += 1;

    if (i > p.length - 1) {
      const startIndex = s.charCodeAt(i - p.length) % 26;
      sArr[startIndex] -= 1;
    }

    if (i >= p.length - 1) {
      if (sameArray(sArr, pArr)) {
        result.push(i - (p.length - 1));
      }
    }
  }

  return result;
};
