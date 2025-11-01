var maxVowels = function (s, k) {
    let count = 0;

    let checkVowels = (el) => el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u';

    for (let i = 0; i < k; i++) {
        if (checkVowels(s[i])) {
            count++
        }
    }

    let temp = count;

    for (let j = k; j < s.length; j++) {
        if (checkVowels(s[j])) temp++;
        if (checkVowels(s[j - k])) temp--;
        if(temp > count) count = temp;
    }

    return count;
};