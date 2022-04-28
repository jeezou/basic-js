const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(val) {
    if (arguments.length < 1) this.arr.push("( )");
    else this.arr.push(`( ${val} )`);
    return this;
  },
  removeLink(pos) {
    if (pos <= 0 || isNaN(pos) || pos > this.arr.length - 1) {
      this.arr.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.arr = this.arr.filter((el, index) => index != pos - 1);
    return this;
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
    let tmp = [...this.arr];
    this.arr.length = 0;
    return tmp.join("~~");
  },
};

module.exports = {
  chainMaker,
};
