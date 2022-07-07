/**
 * LU decomposition of tridiagonal matrix [c\d\e].
 * The input and outputs are the arrays that each contain the diagonals elementes of the decomposed matrix.
 *
 * [{c}, {e}, {d}]
 * @param {number[]} c An array of numbers that represents the lower diagonal elements of the banded matrix.
 * @param {number[]} e An array of numbers that represents the middle diagonal elements of the banded matrix.
 * @param {number[]} d An array of numbers that represents the upper diagonal elements of the banded matrix.
 * @returns {number[][]} A matrix that contains the arrays {c}, {e}, {d}.
 */
export function LUdecomp3(c, d, e) {
  const n = d.length;
  for (let k = 1; k < n; k++) {
    const lam = c[k - 1] / d[k - 1];
    d[k] = d[k] - lam * e[k - 1];
    c[k - 1] = lam;
  }
  return [c, d, e];
}
