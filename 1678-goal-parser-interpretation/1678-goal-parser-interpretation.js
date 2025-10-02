var interpret = function (command) {
    let i = 0;
    let ans = '';
    while (i < command.length) {
        if (command[i] === 'G') {
            ans += 'G';
            i++
        }
        else if (command[i] === '(' && command[i + 1] === ')') {
            ans += 'o';
            i += 2;
        }
        else if (command[i] === '(' && command[i + 1] === 'a') {
            ans += 'al'
            i += 4;
        }
    }
    return ans;
};