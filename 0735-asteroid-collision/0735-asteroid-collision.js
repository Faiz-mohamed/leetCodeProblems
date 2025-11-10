var asteroidCollision = function (asteroids) {
    let arr = [];
    for (a of asteroids) {
        if (a > 0) {
            arr.push(a);
        } else {
            while (
                arr.length > 0 &&
                arr[arr.length - 1] > 0 &&
                arr[arr.length - 1] < Math.abs(a)
            ) {
                arr.pop();
            }

            if (arr.length === 0 || arr[arr.length - 1] < 0) {
                arr.push(a);
            } else if (arr[arr.length - 1] === Math.abs(a)) {
                arr.pop();
            }
        }
    }
    return arr;
};