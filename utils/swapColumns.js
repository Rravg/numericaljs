/**
 * Swaps the columns **i, j** of the matrix **m**.
 * @param {number[][]} m A two dimensional matrix **m**.
 * @param {number} i An index number of the column to swap.
 * @param {number} j An index number of the column to swap.
 */
export function swapColumns(m, i, j) {
  if (Array.isArray(m[0])) {
    for (let k = 0; k < m.length; k++) {
      [m[k][i], m[k][j]] = [m[k][j], m[k][i]];
    }
  } else {
    [m[i], m[j]] = [m[j], m[i]];
  }
}
