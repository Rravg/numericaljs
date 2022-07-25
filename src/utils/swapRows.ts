/**
 * Swaps the rows **i, j** of the matrix **m**.
 * @param {number[][]} m A two dimensional matrix **m**.
 * @param {number} i An index number of the row to swap.
 * @param {number} j An index number of the row to swap.
 */
export function swapRows(m: number[][], i: number, j: number) {
  const n: number = m[0].length;
  for (let k = 0; k < n; k++) {
    [m[i][k], m[j][k]] = [m[j][k], m[i][k]];
  }
}
