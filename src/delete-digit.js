const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n) {
  let biggestNumber = 0;
  let maybeBigNumber = 0;
  for (let i = 0; i < Array.from(n + '').length; i += 1) {
    let arrOfNubmer = Array.from(n + '');
    arrOfNubmer.splice(i, 1)
    maybeBigNumber = arrOfNubmer.reduce((sum, digit) => sum + digit, '');
    if (+maybeBigNumber > biggestNumber) {
      biggestNumber = +maybeBigNumber;
    }
  }
  return biggestNumber;
}

module.exports = {
  deleteDigit
};
