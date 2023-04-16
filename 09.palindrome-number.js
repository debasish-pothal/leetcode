/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let num = 0;
  const xCopy = x;
  const max = Math.pow(2, 31);
  const min = Math.pow(-2, 31);

  while (x) {
    const rem = x % 10;
    x = Math.floor(x / 10);

    num = num * 10 + rem;

    if (num >= max || num <= min) {
      return 0;
    }
  }

  return num === xCopy;
};
