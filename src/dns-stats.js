const { NotImplementedError } = require('../extensions/index.js');

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
  const answer = {};
  for (let i = 0; i < domains.length; i += 1) {
    let arrFromDomain = domains[i].split(".");
    let domainName = "";
    for (let i = arrFromDomain.length - 1; i >= 0 ; i -= 1) {
      domainName += `.${arrFromDomain[i]}`;
      if (domainName in answer) {
        answer[domainName] += 1;
      } else {
        answer[domainName] = 1;
      }
    }
  }
  return answer;
}

module.exports = {
  getDNSStats
};
