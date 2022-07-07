/**
 * Returns an array containing the column elements of the matrix *m*.
 * @param {number[][]} m The matrix *m* where the column will be extracted
 * @param {number} column The column number that will be extracted (0 indexed).
 * @param {number} start The start row of the column that is going to be extracted
 * If **start** is undefined the slice begins at index 0
 * @param {number} end The end row of the column (exclusive).
 * If **end** is undefined the slice will take the last row or *m.length*.
 * @returns {number[]} The column extracted from the matrix *m*.
 */
export function sliceColumn(m, column, start = 0, end = m.length) {
  let slice = [];
  for (let i = start; i < end; i++) {
    slice.push(m[i][column]);
  }
  return slice;
}
