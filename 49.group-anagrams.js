/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const strsCpy = strs.map((s) => s.split("").sort().join(""));
  const result = [];
  const strsMap = {};

  for (let i = 0; i < strsCpy.length; i++) {
    if (strsMap[strsCpy[i]]) {
      strsMap[strsCpy[i]].push(strs[i]);
    } else {
      strsMap[strsCpy[i]] = [strs[i]];
    }
  }

  for (const key of Object.keys(strsMap)) {
    result.push(strsMap[key]);
  }

  return result;
};
