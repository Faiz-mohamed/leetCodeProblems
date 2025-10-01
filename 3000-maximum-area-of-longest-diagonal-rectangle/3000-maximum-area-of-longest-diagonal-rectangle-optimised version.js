var areaOfMaxDiagonal = function (dimensions) {
    let max_area = 0;
    let max_diago = 0;
    for (let i = 0; i < dimensions.length; i++) {
        let temp = (dimensions[i][0] * dimensions[i][0]) + (dimensions[i][1] * dimensions[i][1]);
        if (temp > max_diago || (temp===max_diago && dimensions[i][0] * dimensions[i][1] > max_area)){
            max_diago = temp
            max_area = dimensions[i][0] * dimensions[i][1];
        }
    }
    return max_area;
};