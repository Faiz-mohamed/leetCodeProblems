function averageValue(nums: number[]): number {
    let c: number, sum: number;
    c = sum = 0;
    for (const num of nums) {
        if (num % 6 === 0) {
            sum += num
            c++
        }
    }
    return Math.floor(sum / c) || 0
};