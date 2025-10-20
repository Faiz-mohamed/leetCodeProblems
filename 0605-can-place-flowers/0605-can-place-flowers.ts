function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let i: number = 0;
    let length: number = flowerbed.length;
    while (i < length) {
        let prev: number = (i === 0) ? 0 : flowerbed[i - 1];
        let next: number = (i === length - 1) ? 0 : flowerbed[i + 1];

        if (prev === 0 && flowerbed[i] === 0 && next === 0) {
            flowerbed[i] = 1;
            n--;
            if (n <= 0) return true;
            i += 2;
        } else {
            i++;
        }
    }
    return n <= 0;
};