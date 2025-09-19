/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];
    let profit = 0;
    for(sell of prices){
        if(sell>buy){
            profit = Math.max(profit , sell-buy)
        }else{
            buy = sell
        }
    }
    return profit
};