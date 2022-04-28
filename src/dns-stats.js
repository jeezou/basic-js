const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dns = {};
  domains.forEach((el) => {
    let splitted = el.split(".").reverse();
    let str = `.${splitted[0]}`;
    if (dns[str] === undefined) dns[str] = 1;
    else dns[str]++;

    for (let i = 1; i < splitted.length; i++) {
      str += `.${splitted[i]}`;
      if (dns[str] === undefined) dns[str] = 1;
      else dns[str]++;
    }
  });
  return dns;
}

module.exports = {
  getDNSStats,
};
