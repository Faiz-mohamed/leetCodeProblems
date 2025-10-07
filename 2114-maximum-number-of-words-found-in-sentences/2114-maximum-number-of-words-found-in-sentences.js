var mostWordsFound = function (sentences) {
    let count = 0;
    let maxWord = 0;
    for (let sentence of sentences) {
        for (let s of sentence) {
            if (s === ' ') count++
        }
        if (count > maxWord) maxWord = count;
        count = 0
    }
    return maxWord + 1
};