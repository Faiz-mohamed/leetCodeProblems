var maxVowels = function (s, k) {
    function checkVowels(el) {
        if (el === 'a') return true;
        if (el === 'e') return true;
        if (el === 'i') return true;
        if (el === 'o') return true;
        if (el === 'u') return true;

        return false
    }

    let count = 0;

    for (let i = 0; i < k; i++) {
        if (checkVowels(s[i])) {
            count++
        }
    }

    let temp = count;

    for (let j = k; j < s.length; j++) {
        if (checkVowels(s[j])) temp++;
        if (checkVowels(s[j - k])) temp--;
        if (temp > count) count = temp;
    }

    return count;
};