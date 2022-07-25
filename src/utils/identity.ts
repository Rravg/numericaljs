import { zeros } from "./zeros";

/**
 * Returns a *nxn* identity matrix.
 * @param {number} n Dimension of the matrix.
 * @returns {number[][]} The identity matrix.
 */
export function identity(n: number) {
  let matrix = zeros(n, n);
  for (let i = 0; i < n; i++) {
    matrix[i][i] = 1;
  }
  return matrix;
}
