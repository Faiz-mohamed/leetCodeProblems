var isEmpty = function (obj) {
    return Array.isArray(obj) ? obj.length === 0 : JSON.stringify(obj) === '{}';
};