/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = -Infinity;
  let buyPrice = Infinity;

  for (const price of prices) {
    buyPrice = Math.min(buyPrice, price);
    maxProfit = Math.max(maxProfit, price - buyPrice);
  }

  return maxProfit;
};
