var canBeTypedWords = function (text, brokenLetters) {
    const words = text.split(' ');
    let counter = words.length;
    for (word of words){
        for(l of brokenLetters){
            if(word.includes(l)){
                counter--
                break;
            }
        }
    }
    return counter
};