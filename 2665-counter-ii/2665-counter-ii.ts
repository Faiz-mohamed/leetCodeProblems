type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let current: number = init;
    return {
        increment(): number { return ++current; },
        decrement(): number { return --current; },
        reset(): number { return current = init; }
    }
};