const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, obj) {
  const defaultObj = { separator: "+", additionSeparator: "|" };
  obj = Object.assign({}, defaultObj, obj);

  if (Object.keys(obj).includes("addition")) {
    if (Object.keys(obj).includes("additionRepeatTimes"))
      for (let i = 0; i < obj.additionRepeatTimes; i++) {
        if (obj.additionRepeatTimes > 1 && i > 0)
          str += `${obj.additionSeparator}`;
        str += `${obj.addition}`;
      }
    else str += `${obj.addition}`;
  }
  let tmp = str;
  for (let i = 0; i < obj.repeatTimes - 1; i++) str += `${obj.separator + tmp}`;
  return str;
}

module.exports = {
  repeater,
};
