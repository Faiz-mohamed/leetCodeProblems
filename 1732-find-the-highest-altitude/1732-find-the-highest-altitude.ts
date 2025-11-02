function largestAltitude(gain: number[]): number {
    let output: number = 0;
    let temp: number = 0;
    for (let g of gain) {
        temp += g;
        if (temp > output) output = temp;
    }
    return output;
};