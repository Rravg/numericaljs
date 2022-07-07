import { dot } from "./utils/dot.js";

/**
 * Solves [a]{x} = {b} for {x}, where [a] = [L\U] is a matrix containing the upper triangle
 * and the nondiagonal terms of [L] in the lower triangle. [a] can be obtained by calling:
 *
 *      LUdecomp(a)
 *
 * on a matrix [a].
 * @param {!number[][]} a
 * @param {!number[]} b
 * @returns {!number[]} The solution vector {x}.
 */
export function LUsolve(a, b) {
  const n = a.length;
  // Forward Substitution
  for (let k = 1; k < n; k++) {
    b[k] = b[k] - dot(a[k].slice(0, k), b.slice(0, k));
  }
  // Back Substitution
  for (let k = n - 1; k >= 0; k--) {
    b[k] = (b[k] - dot(a[k].slice(k + 1, n), b.slice(k + 1, n))) / a[k][k];
  }
  return b;
}
