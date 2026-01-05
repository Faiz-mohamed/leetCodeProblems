function maxVowels(s: string, k: number): number {
    function isVowel(chr: string): boolean {
        if (chr === 'a') return true;
        if (chr === 'e') return true;
        if (chr === 'i') return true;
        if (chr === 'o') return true;
        if (chr === 'u') return true;
        return false;
    }

    let count: number = 0;

    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) count++;
    }

    let temp: number = count;

    for (let j = k; j < s.length; j++) {
        if (isVowel(s[j])) temp++;
        if (isVowel(s[j - k])) temp--;
        if (temp > count) count = temp;
    }

    return count;
};