var capitalizeTitle = function (title) {
    let arr = title.split(' ')
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].length > 2) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
        }else{
            arr[i] = arr[i].toLowerCase();
        }
    }
    return arr.join(' ')
};