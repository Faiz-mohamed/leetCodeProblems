var areaOfMaxDiagonal = function (dimensions) {
    let dimension = [];
    let diagonal = 0;
    for (d of dimensions) {
        let temp = d[0] * d[0] + d[1] * d[1];
        if (temp > diagonal) {
            diagonal = temp;
            dimension = d;
        } else if (temp === diagonal) {
            if ((d[0] * d[1]) > (dimension[0] * dimension[1])) {
                dimension = d;
            }
        }
    }
    return dimension[0] * dimension[1];
};