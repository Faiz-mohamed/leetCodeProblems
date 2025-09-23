var findTheDistanceValue = function (arr1, arr2, d) {
    let count = 0;
    for (let n of arr1) {
        for (let el of arr2) {
            let temp = Math.abs(n - el)
            if (temp <= d) {
                count++
                break;
            }
        }
    }
    return arr1.length - count;
};