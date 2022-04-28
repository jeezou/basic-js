const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(files) {
  for (let i = 1; i < files.length; i++) {
    let preArray = files.filter((el, index) => el == files[i] && index < i);
    let preArrayCount = preArray.length;
    if (preArrayCount > 0) {
      if (
        !files
          .filter((a, num) => num < i)
          .includes(`${files[i]}(${preArrayCount})`)
      )
        files[i] += `(${preArrayCount})`;
      else files[i] += `(${preArrayCount + 1})`;
    }
  }

  return files;
}

module.exports = {
  renameFiles,
};
