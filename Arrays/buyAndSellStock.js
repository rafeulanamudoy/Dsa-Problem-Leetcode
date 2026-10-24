
//brute force



// var maxProfit = function (prices) {

//    let maxmimumSell=0
//     for (let i = 0; i < prices.length-1; i++) {
//       for (let j = i + 1; j < prices.length; j++) {
//         if (prices[j] - prices[i] > 0) {
//           maxmimumSell = Math.max(maxmimumSell, prices[j] - prices[i]);
//         }
//       }
//     }
//     return maxmimumSell;



// }

//kadanes alog

// var maxProfit = function (prices) {


//   let globalMaxSell = 0;
//   let currentMin = prices[0];
//   for (let i = 1; i < prices.length; i++) {
//     currentMin = Math.min(prices[i], currentMin);
//     globalMaxSell = Math.max(prices[i] - currentMin, globalMaxSell);
//   }

//   return globalMaxSell;
// };


//sliding window technique
var maxProfit = function (prices) {

  let currentMin = prices[0];


  let maxProfit = 0

  for (let i = 1; i < prices.length; i++) {


    
    if(currentMin>prices[i]){
      

      currentMin=prices[i]

    }



    maxProfit = Math.max(maxProfit, prices[i] - currentMin)
  }





  return maxProfit
};




const result = maxProfit([7, 1, 5, 3, 6, 4]);

console.log(result);
