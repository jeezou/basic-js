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
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  else if (arr.length < 1) return arr;

  let newArr = [...arr];
  const controlStrings = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];

  const mutateArray = (control, index) => {
    newArr = newArr.filter((val, i) => i != index);
    if (control[1] === "prev") index--;
    if (index < 0 || index > newArr.length - 1) return;
    if (control[0] === "discard") {
      if (control[1] === "next" && newArr[index + 1] === controlStrings[1])
        newArr = newArr.filter((val, i) => i != index && i != index + 1);
      else if (control[1] === "next" && newArr[index + 1] === controlStrings[3])
        newArr = newArr.filter((val, i) => i != index && i != index + 1);
      else if (control[1] === "prev" && newArr[index - 1] === controlStrings[2])
        newArr = newArr.filter((val, i) => i != index - 1);
      else newArr = newArr.filter((val, i) => i != index);
    } else newArr.splice(index, 0, newArr[index]);
  };

  controlStrings.forEach((string) => {
    if (newArr.includes(string)) {
      // console.debug(newArr.indexOf(string));
      mutateArray(
        string.substring(2, string.length).split("-"),
        newArr.indexOf(string)
      );
    }
  });

  return newArr;
}

module.exports = {
  transform,
};
