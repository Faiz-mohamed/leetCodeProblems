var increasingTriplet = function (nums) {
    first = Infinity;
    second = Infinity;
    for (let n of nums) {
        if (n <= first) {
            first = n;
        } else if (n <= second) {
            second = n;
        } else {
            return true;
        }
    }
    return false;
};