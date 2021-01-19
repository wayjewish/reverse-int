module.exports = function reverse (n) {
    let str = String(Math.abs(n));
    let res = str.split('').reverse().join('');
    return res;
}
