var maxProfit = function (prices) {
  //using brute force technique

  //   for (let i = 0; i < prices.length-1; i++) {
  //     for (let j = i + 1; j < prices.length; j++) {
  //       if (prices[j] - prices[i] > 0) {
  //         maxmimumSell = Math.max(maxmimumSell, prices[j] - prices[i]);
  //       }
  //     }
  //   }
  //   return maxmimumSell;
  //now one approach we can do is like during iteration differnce betwwn two indeces where prefix of max difference
  //  p(i,j)=max (j )  -min(i) where min i  must have to come first before j.here i means the value before current index.and j is current index

  //kadanes algo

  let globalMaxSell = 0;
  let currentMin = prices[0];
  for (let i = 1; i < prices.length; i++) {
    currentMin = Math.min(prices[i], currentMin);
    globalMaxSell = Math.max(prices[i] - currentMin, globalMaxSell);
  }

  return globalMaxSell;
};

const result = maxProfit([7, 1, 5, 3, 6, 4]);

console.log(result);
