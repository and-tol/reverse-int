/**
 *
 * @param {Number} n
 */
module.exports = function reverse(n) {
    let str = n
        .toString()
        .split("")
        .reverse()
        .join("");
    return parseInt(str, 10);
};

// console.log(reverse(95034));
