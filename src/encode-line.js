const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = [];
  let arr = [...str];
  let counter = 1;

  for (let j = 0; j < arr.length; j) {
    let first = j;
    while (str[first + 1] == str[first]) {
      first++;
      counter++;
    }
    if (counter == 1) res.push(`${arr[j]}`);
    else res.push(`${counter}${arr[j]}`);
    j += counter;
    counter = 1;
  }

  return res.join("");
}

module.exports = {
  encodeLine,
};
