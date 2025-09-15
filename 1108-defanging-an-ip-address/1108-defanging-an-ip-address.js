/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    let result = [];
    for (i = 0; i < address.length; i++) {
        if (address[i] === ".") {
            result.push("[.]")
        }else{
            result.push(address[i])
        }
    }
    return result.join('');
};