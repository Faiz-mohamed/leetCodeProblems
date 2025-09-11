function returnToBoundaryCount(nums: number[]): number {
    let counter: number = 0;
    let sum: number = 0;
    for(let num of nums){
        sum += num;
        if(sum === 0){
            counter++
        }
    }
    return counter
};