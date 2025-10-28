var compress = function (chars) {
    let write = 0;
    let count = 1
    let val = chars[0]

    function makeArr(count, val) {
        chars[write] = val;
        write++;
        if (count !== 1) {
            let s = count.toString()
            for (let j = 0; j < s.length; j++) {
                chars[write] = s[j];
                write++
            }
        }
    }

    for (let i = 1; i < chars.length; i++) {
        if (val === chars[i]) {
            count++
        } else {
            makeArr(count, val)
            val = chars[i]
            count = 1
        }
    }

    makeArr(count, val)

    chars.length = write

    return chars.length
};
