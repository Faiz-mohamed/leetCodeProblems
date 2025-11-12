var equalPairs = function (grid) {
    let output = 0;

    function ArraysEqual(a, b) {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    for (let c = 0; c < grid.length; c++) {
        let current_column = [];
        for (let r = 0; r < grid.length; r++) {
            current_column.push(grid[r][c]);
        }

        for (let r = 0; r < grid.length; r++) {
            if (ArraysEqual(grid[r], current_column)) output++;
        }
    }

    return output;
};
