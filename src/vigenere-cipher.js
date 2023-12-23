const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  constructor(reverse = true) {
    this.string = null;
    this.key = null;
    this.reverse = reverse;
  }

  getKey(string, key) {
    if (string && key) {
      this.string = string.toUpperCase();
      this.key = key.toUpperCase();
    } else {
      throw new Error("Incorrect arguments!");
    }

    let keyString = "";
    let keyIndex = 0;
    for (let i = 0; keyString.length <= string.length; i += 1) {
      if (keyIndex >= key.length) {
        keyIndex = 0;
      }

      if (string[i] === " ") {
        keyString += " ";
        keyIndex -= 1;
      } else {
        keyString += `${this.key[keyIndex]}`;
      }

      keyIndex += 1;
    }
    return keyString;
  }

  encrypt(string, key) {
    const encryptString = [];
    const keyString = this.getKey(string, key);

    for (let i = 0; encryptString.length < string.length; i += 1) {
      let indexOfKeyValue = this.alphabet.indexOf(keyString[i]);
      let indexOfStringValue = this.alphabet.indexOf(this.string[i]);

      let indexEncrypt = indexOfStringValue + indexOfKeyValue;
      if (indexEncrypt >= 26) {
        indexEncrypt = indexEncrypt % 26;
      }

      if (indexOfStringValue === -1) {
        encryptString.push(this.string[i]);
      } else {
        encryptString.push(this.alphabet[indexEncrypt]);
      }
    }

    return this.reverse ? encryptString.join("") : encryptString.reverse().join("")
  }

  decrypt(string, key) {
    const encryptString = [];
    const keyString = this.getKey(string, key);

    for (let i = 0; encryptString.length < string.length; i += 1) {
      let indexOfKeyValue = this.alphabet.indexOf(keyString[i]);
      let indexOfStringValue = this.alphabet.indexOf(this.string[i]);

      let indexEncrypt = indexOfStringValue - indexOfKeyValue;
      if (indexEncrypt < 0) {
        indexEncrypt = this.alphabet.length - Math.abs(indexEncrypt);
      }

      if (indexOfStringValue === -1) {
        encryptString.push(this.string[i]);
      } else {
        encryptString.push(this.alphabet[indexEncrypt]);
      }
    }

    return this.reverse ? encryptString.join("") : encryptString.reverse().join("")
  }
}

module.exports = {
  VigenereCipheringMachine,
};
