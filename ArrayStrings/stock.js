//? BEST TIME TO BUY AND SELL STOCK RETURN MAX PROFIT
var maxProfit = function (prices) {
  let mapOriginalIndex = {};
  for (let i = 0; i < prices.length; i++) {
    mapOriginalIndex[prices[i]] = i;
  }
  prices = prices.sort((a, b) => a - b);
  let buy = 0;
  let sell = prices.length - 1;
  let maxProfit = 0;
  console.log(mapOriginalIndex);
  for (let i = 0; i < prices.length; i++) {
    if (mapOriginalIndex[prices[sell]] > mapOriginalIndex[prices[buy]]) {
      let profit = prices[sell] - prices[buy];
      sell--;

      if (profit > maxProfit) maxProfit = profit;
    } else {
      buy++;
    }
  }
  return maxProfit;
};
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); //! no work
