var getSneakyNumbers = function(nums) {
    let seen = [];
    let dupes = [];
    for(let i = 0; i<nums.length; i++){
        if(seen.includes(nums[i])){
            dupes.push(nums[i])
        }else{
            seen.push(nums[i])
        }
    }
    return dupes
};