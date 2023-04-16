/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let num = 0;
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
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

  return sign * num;
};
