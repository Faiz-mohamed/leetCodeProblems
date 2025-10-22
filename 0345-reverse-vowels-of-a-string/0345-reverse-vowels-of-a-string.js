var reverseVowels = function (s) {
    s = s.split('')
    let obj = [];
    function AddItems(order, value) {
        obj.push({ order, value });
    }

    for (let i = 0; i < s.length; i++) {
        if ('aeiouAEIOU'.includes(s[i])) {
            AddItems(i, s[i]);
        }
    }

    (() => obj.map(o => o.value).reverse().forEach((v, i) => obj[i].value = v))();

    for (let item of obj) {
        s[item.order] = item.value
    }
    return s.join('');
};