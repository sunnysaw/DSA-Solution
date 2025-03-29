/*
ou are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell it.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (prices[1] = 1) and sell on day 5 (prices[4] = 6), profit = 6 - 1 = 5.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: No transaction can be made, so the maximum profit is 0.

Constraints:
1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4
 */

const buyAndSellStock = (prices) => {
    if (prices.length < 2) return 0;
    let min = Infinity;
    let max = 0;
  for (let stock = 0; stock < prices.length; stock++) {
    min = Math.min(min, prices[stock]);
    max = Math.max(max, prices[stock] - min);
    }
    return max;
};
console.log(buyAndSellStock([7,1,5,3,6,4]));
