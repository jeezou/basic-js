const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  let res = [];
  let numArray = [...number.toString()];
  numArray.forEach((el, index) =>
    res.push(parseInt(numArray.filter((e, i) => i != index).join("")))
  );
  return Math.max(...res);
}

module.exports = {
  deleteDigit,
};
