const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let result = [];
  if (!Array.isArray(arr)) {
    throw new Error(
      "'arr' parameter must be an instance of the Array!"
    );
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === "--discard-prev") {
      if (arr[i - 1]) {
        result.pop();
      }
    } else if (arr[i] === "--discard-next") {
      if (arr[i + 1]) {
        result.push("foo");
      }
    } else if (arr[i] === "--double-next") {
      if (arr[i + 1]) {
        result.push(arr[i + 1]);
      }
    } else if (arr[i] === "--double-prev") {
      if (arr[i - 1]) {
        if (!result.includes("foo")) {
          result.push(arr[i - 1]);
        } else {
          result.push("foo");
        }
      }
    } else {
      result.push(arr[i]);
    }
  }
  if (result.includes("foo")) {
    const fisrtIndex = result.indexOf("foo");
    const lastIndex = result.lastIndexOf("foo");
    const arrFirst = result.slice(0, fisrtIndex);
    const arrLast = result.slice(lastIndex + 1);
    result = arrFirst.concat(arrLast);
  }
  return result;
}

module.exports = {
  transform,
};
