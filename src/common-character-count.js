const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let checker = [];
  let res = 0;
  [...s1].forEach((el) => {
    if (!checker.includes(el) && s2.includes(el)) {
      res += Math.min(
        [...s1].filter((symbol) => symbol == el).length,
        [...s2].filter((symbol) => symbol == el).length
      );
      checker.push(el);
    }
  });
  return res;
}

module.exports = {
  getCommonCharacterCount,
};
