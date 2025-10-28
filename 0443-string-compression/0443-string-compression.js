var compress = function (chars) {
    let arr = []
    let count = 1
    let val = chars[0]

    function makeArr(count, val) {
        arr.push(val)
        if (count !== 1) {
            let s = count.toString()
            for (let j = 0; j < s.length; j++) {
                arr.push(s[j])
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

    chars.length = 0
    chars.push(...arr)

    return chars.length
};
