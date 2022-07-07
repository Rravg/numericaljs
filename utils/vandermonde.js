import { zeros } from "./zeros.js";

/**
 * Finds the Vandedrmonde matrix.
 * @param {*} v
 * @returns
 */
export function vandermonde(v) {
  const n = v.length;
  let A = zeros(n, n);
  for (let i = 0; i < v.length; i++) {
    for (let j = 0; j < v.length; j++) {
      A[i][j] = Math.pow(v[i], n - j - 1);
    }
  }
  return A;
}
