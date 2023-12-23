const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  let answer = '';
  let newStr = str;
  let separator = options.separator;
  let addition = options.addition;
  let additionSeparator = options.additionSeparator;
  let additionRepeatTimes = options.additionRepeatTimes

  if (options.separator === undefined) {
    separator = "+";
  }
  if (options.addition === undefined) {
    addition = "";
  }
  if (additionSeparator === undefined) {
    additionSeparator = "|";
  }
  if (additionRepeatTimes === undefined) {
    additionRepeatTimes = 1;
    additionSeparator = "";
  }
  let newAdd =  addition + additionSeparator;
  let addAndSeparateRepeat = newAdd.repeat(additionRepeatTimes - 1) + addition;
  newStr += addAndSeparateRepeat
  newStr += separator;
  answer = newStr.repeat(options.repeatTimes -1) + str + addAndSeparateRepeat;
  return answer;
}

module.exports = {
  repeater
};
