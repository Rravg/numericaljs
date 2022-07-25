import { zeros } from "./zeros.js";

/**
 * Finds the determinant of the square matrix **M**.
 * @param {number[][]} M  The square matrix.
 * @returns {number} Determinant of **M**.
 */
export function determinant(M: number[][]) {
  let a: number[][] = M.map((inner) => inner.slice());
  const n: number = a.length;
  let det: number = 1;
  for (let k = 0; k < n - 1; k++) {
    for (let i = k + 1; i < n; i++) {
      if (a[i][k] != 0.0) {
        const lam: number = a[i][k] / a[k][k];
        a.splice(
          i,
          1,
          a[i].map((x, index) => x - lam * a[k][index])
        );
      }
    }
  }
  for (let i = 0; i < a.length; i++) {
    det *= a[i][i];
  }
  return det;
}
