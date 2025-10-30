var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let Max_Area = 0;
    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left)
        Max_Area = Math.max(Max_Area, area)
        if (height[left] > height[right]) {
            right--;
        } else {
            left++
        }
    }
    return Max_Area
};