var findDuplicates = function(nums) {
    let seen = new Set();
    let dupes = [];
    for(n of nums){
        (seen.has(n)) ? dupes.push(n) : seen.add(n);
    }
    return dupes;
};