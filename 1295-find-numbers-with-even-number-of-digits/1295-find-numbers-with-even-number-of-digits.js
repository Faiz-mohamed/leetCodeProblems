var findNumbers = function (nums) {
    let count = 0;
    for (n of nums) {
        if (n.toString().length % 2 === 0) count++
    }
    return count;
};