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
  characters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  reverse = false;

  constructor(bool) {
    if (!(bool || [...arguments].length < 1)) this.reverse = true;
  }

  encrypt(input, keyword) {
    this.characters = [...this.characters.join("").toUpperCase()];
    if (
      [...arguments].length < 2 ||
      typeof [...arguments][0] !== "string" ||
      typeof [...arguments][1] !== "string"
    )
      throw new Error("Incorrect arguments!");
    input = input.toUpperCase();
    keyword = keyword.toUpperCase();
    let result = "";
    let keyword_index = 0;
    [...input].forEach((symbol) => {
      if (this.characters.includes(symbol)) {
        let c =
          (this.characters.indexOf(symbol) +
            this.characters.indexOf(keyword[keyword_index])) %
          this.characters.length;
        result += this.characters[c];
        keyword_index++;
      } else {
        result += symbol;
      }
      if (keyword_index == keyword.length) {
        keyword_index = 0;
      }
    });
    if (this.reverse) return [...result].reverse().join("");
    return result;
  }

  decrypt(input, keyword) {
    if (
      [...arguments].length < 2 ||
      typeof [...arguments][0] !== "string" ||
      typeof [...arguments][1] !== "string"
    )
      throw new Error("Incorrect arguments!");

    input = input.toUpperCase();
    keyword = keyword.toUpperCase();
    let result = "";
    let keyword_index = 0;

    [...input].forEach((symbol) => {
      if (this.characters.includes(symbol)) {
        let p =
          (this.characters.indexOf(symbol) +
            this.characters.length -
            this.characters.indexOf(keyword[keyword_index])) %
          this.characters.length;

        result += this.characters[p];

        keyword_index++;
      } else {
        result += symbol;
      }
      if (keyword_index == keyword.length) {
        keyword_index = 0;
      }
    });
    if (this.reverse) return [...result].reverse().join("");
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
