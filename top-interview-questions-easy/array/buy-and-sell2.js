var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i];
    }
    console.log(profit);
  }
  return profit;
};

prices = [13, 5, 8, 32, 4, 1, 55, 12, 16, 18, 23, 17, 46, 24, 72, 14];
maxProfit(prices);
