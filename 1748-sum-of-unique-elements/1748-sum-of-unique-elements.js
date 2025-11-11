var sumOfUnique = function (nums) {
    let seen = new Set();
    let uniq = new Set();

    for (let n of nums) {
        if (seen.has(n)) {
            uniq.delete(n);
        } else {
            seen.add(n);
            uniq.add(n);
        }
    }

    let sum = 0;
    for (let n of uniq) sum += n;
    return sum;
};