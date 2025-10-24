var reverseWords = function (s) {
    function formatStr(arr) {
        let str = '';
        let length = arr.length;
        for (let i = 0; i < length; i++) {
            if (i === length - 1)
                str += arr[i];
            else
                str += arr[i] + " ";

        }

        return str
    }
    s = s.split(' ').filter(e => e !== '').reverse();
    return formatStr(s);
};