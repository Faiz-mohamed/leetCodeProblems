/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    const words = text.split(' ');
    const letters = brokenLetters.split('')
    let counter = words.length;
    for (word of words){
        for(l of letters){
            if(word.includes(l)){
                counter--
                break;
            }
        }
    }
    return counter
};