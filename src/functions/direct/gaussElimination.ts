import { dot } from "../../utils/dot.js";

/**
 * Solves [a]{b} = {x} by Gauss Elimination method.
 *
 * [a] is a nxn square matrix and {b} is a vector of length n.
 * @param {number[][]} a - The a matrix
 * @param {number[]} b - The b vector
 * @returns {number[]} The solution vector {x}
 * @todo define not nullable arguments in jsdocs
 */
export function gaussElimination(a: number[][], b: number[]) {
  const n: number = b.length;
  // Elimination
  for (let k = 0; k < n - 1; k++) {
    for (let i = k + 1; i < n; i++) {
      if (a[i][k] !== 0.0) {
        const lam = a[i][k] / a[k][k];
        a.splice(
          i,
          1,
          a[i].map((x, index) => x - lam * a[k][index])
        );
        b[i] = b[i] - lam * b[k];
      }
    }
  }
  // Back Substitution
  for (let k = n - 1; k >= 0; k--) {
    b[k] = (b[k] - dot(a[k].slice(k + 1, n), b.slice(k + 1, n))) / a[k][k];
  }
  return b;
}
