var firstPalindrome = function(words) {
    for(w of words){
        if(w === w.split('').reverse().join('')) return w;
    }
    return '';
};