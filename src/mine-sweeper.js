const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];
  matrix.forEach((a, i) => {
    let tmp = [];
    a.forEach((b, j) => {
      let counter = 0;
      //left up
      counter +=
        matrix[i - 1] === undefined
          ? 0
          : matrix[i - 1][j - 1] === undefined
          ? 0
          : matrix[i - 1][j - 1];
      //up
      counter +=
        matrix[i - 1] === undefined
          ? 0
          : matrix[i - 1][j] === undefined
          ? 0
          : matrix[i - 1][j];
      //up right
      counter +=
        matrix[i - 1] === undefined
          ? 0
          : matrix[i - 1][j + 1] === undefined
          ? 0
          : matrix[i - 1][j + 1];
      //right
      counter +=
        matrix[i] === undefined
          ? 0
          : matrix[i][j + 1] === undefined
          ? 0
          : matrix[i][j + 1];
      //right down
      counter +=
        matrix[i + 1] === undefined
          ? 0
          : matrix[i + 1][j + 1] === undefined
          ? 0
          : matrix[i + 1][j + 1];
      //down
      counter +=
        matrix[i + 1] === undefined
          ? 0
          : matrix[i + 1][j] === undefined
          ? 0
          : matrix[i + 1][j];
      //down left
      counter +=
        matrix[i + 1] === undefined
          ? 0
          : matrix[i + 1][j - 1] === undefined
          ? 0
          : matrix[i + 1][j - 1];
      //left
      counter +=
        matrix[i] === undefined
          ? 0
          : matrix[i][j - 1] === undefined
          ? 0
          : matrix[i][j - 1];

      tmp.push(counter);
    });
    res.push(tmp);
  });
  return res;
}

module.exports = {
  minesweeper,
};
