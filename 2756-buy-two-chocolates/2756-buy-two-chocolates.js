/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
    let min1 = Infinity, min2 = Infinity;
    for (let price of prices) {
        if (price < min1) {
            min2 = min1;
            min1 = price
        }
        else if (price < min2) {
            min2 = price
        }
    }
    let balance = money - (min1 + min2)
    if (balance >= 0) {
        return balance    
    }
    else{
        return money
    }
};