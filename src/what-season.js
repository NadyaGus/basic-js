const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const year = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "fall", "fall", "fall", "winter"];
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  }
  if (Object.getOwnPropertyNames(date).length > 0) {
    throw new Error("Invalid date!");
  }
  const numberOfMonth = date.getMonth();
  return year[numberOfMonth];
}

module.exports = {
  getSeason,
};
