var kidsWithCandies = function (candies, extraCandies) {
    let arr = [];
    let max = Math.max(...candies);
    for (c of candies) {
        (c + extraCandies >= max) ? arr.push(true) : arr.push(false);
    }
    return arr;
};