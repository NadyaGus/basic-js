const { NotImplementedError } = require('../extensions/index.js');

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
  let count = 1;
  let answer = "";
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      count += 1;
    }
    if (str[i] !== str[i + 1]) {
      if (count !== 1) {
        answer += count;
      }
      count = 1;
      answer += str[i];
    }
  }
  return answer;
}

module.exports = {
  encodeLine
};
