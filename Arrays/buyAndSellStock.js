var maxProfit = function (prices) {
  let maxmimumSell = -Infinity;
  //using brute force technique

  for (let i = 0; i < prices.length-1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > 0) {
        maxmimumSell = Math.max(maxmimumSell, prices[j] - prices[i]);
      }
    }
  }
  return maxmimumSell;
};

const result = maxProfit([7, 1, 5, 3, 6, 4]);

console.log(result)