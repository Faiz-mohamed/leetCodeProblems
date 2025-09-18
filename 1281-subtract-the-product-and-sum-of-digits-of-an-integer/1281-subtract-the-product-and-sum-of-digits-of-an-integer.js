var subtractProductAndSum = function (N) {
    let num = N.toString().split('').map(Number)
    let mul = 1;
    let add = 0;
    for(n of num){
        mul = n*mul
        add = n+add;
    }
    return mul - add;
};