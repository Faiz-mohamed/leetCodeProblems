var countMatches = function (items, ruleKey, ruleValue) {
    let count = 0;
    let i = (ruleKey === 'type') ? 0 : (ruleKey === 'color') ? 1 : 2;
    for (item of items) {
        if (ruleValue === item[i]) count++;
    }
    return count;
};