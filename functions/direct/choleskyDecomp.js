import { dot } from "./utils/dot.js";

/**
 * Cholesky's decomposition method [a] = [L][L]transpose.
 *
 * Note:
 * Cholesky's decomposition has some limitations:
 *
 * - Since [L][L]transpose is always a symmetric matrix, the method requires A to be *symmetric*.
 * - [a] must be *positive definite* in order to avoid square roots of negative numbers.
 *
 * @param {!number[][]} a - The [a] matrix.
 * @returns {!number[][]} The [L] matrix.
 */
export function choleskyDecomp(a) {
  const n = a.length;
  for (let k = 0; k < n; k++) {
    try {
      //Diagonal terms
      let result = Math.sqrt(a[k][k] - dot(a[k].slice(0, k), a[k].slice(0, k)));
      if (isNaN(result)) {
        throw Error("Matrix is not positive definite");
      }
      a[k][k] = result;
    } catch (error) {
      console.error(error);
    }
    for (let i = k + 1; i < n; i++) {
      //Nondiagonal terms
      a[i][k] = (a[i][k] - dot(a[i].slice(0, k), a[k].slice(0, k))) / a[k][k];
    }
  }
  for (let k = 0; k < n - 1; k++) {
    for (let i = k + 1; i < n; i++) {
      a[k][i] = 0;
    }
  }
  return a;
}
