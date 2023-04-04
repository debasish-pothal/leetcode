/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const bracketStack = [];
  const bracketCompliments = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  for (const bracket of s) {
    const topBracket = bracketStack[bracketStack.length - 1];

    if (
      bracketCompliments.has(bracket) &&
      bracketCompliments.get(bracket) === topBracket
    ) {
      bracketStack.pop();
    } else {
      bracketStack.push(bracket);
    }
  }

  return bracketStack.length === 0;
};
