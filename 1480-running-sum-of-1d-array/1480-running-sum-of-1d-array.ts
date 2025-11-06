function runningSum(nums: number[]): number[] {
    let sum: number = 0;
    let arr: number[] = []
    for (let n of nums) {
        sum += n;
        arr.push(sum);
    }
    return arr;
};