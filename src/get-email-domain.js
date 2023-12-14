const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const atDot = /@[a-z]/;
  const indexOfAtDot = email.match(atDot).index;
  const domain = email.slice(indexOfAtDot + 1);
  return domain;
}

module.exports = {
  getEmailDomain
};
