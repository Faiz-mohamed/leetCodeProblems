var isSubsequence = function (s, t) {
    if(!s.length) return true;

    let chrIdx = 0;

    for (let i = 0; i < t.length; i++) {
        if (s[chrIdx] === t[i]) {
            chrIdx++;
            if (chrIdx === s.length) return true
        }
    }

    return false;
};