var countEven = function (num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        let digitSum = i.toString().split('')
        .reduce((a, b) => a + Number(b),0)
        if (digitSum % 2 === 0) {
            count++
        }
    }
    return count;
};