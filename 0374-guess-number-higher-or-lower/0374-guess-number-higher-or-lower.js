var guessNumber = function (n) {
    let left = 1;
    let right = n;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let val = guess(mid);

        if (val === 0) {
            return mid;
        } else if (val === -1) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
};
