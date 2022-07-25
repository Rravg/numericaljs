import { zeros } from "../../utils/zeros.js";

/**
 * LU decomposition using Doolittle's method, [L][U] = [a]. The returned matrix
 * [a] = [L\U] contains [U] in the upper triangle and the nondiagonal terms of [L]
 * in the lower triangle.
 *
 * @param {Array.<number[]>} a
 * @returns {Array.<number[]>} The [a] = [L\U] matrix.
 */
export function LUdecomp(a: number[][]) {
  const n: number = a.length;
  let aContainer: number[][] = zeros(n, n);
  for (let k = 0; k < n - 1; k++) {
    for (let i = k + 1; i < n; i++) {
      if (a[i][k] != 0.0) {
        const lam = a[i][k] / a[k][k];
        a.splice(
          i,
          1,
          a[i].map((x, index) => x - lam * a[k][index])
        );
        aContainer[i][k] = lam;
      }
    }
  }
  for (let k = 0; k < n - 1; k++) {
    for (let i = k + 1; i < n; i++) {
      a[i][k] = aContainer[i][k];
    }
  }
  return a;
}
