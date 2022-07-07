/**
 * Performs LU decomposition of matrix [a] using Doolittle's method and row pivoting.
 * The funcion changes **a** and returns a matrix that contains [U] in the upper triangle and the nondiagonal terms of [L] in the lower triangle.
 * The permutations of the operation are stored in the array {seq}.
 * @param {number[][]} a A 2 dimensional array.
 * @param {number} tol Tolerance, default = 1.0e-9.
 * @returns {number[][]} Returns [[L\U], seq].
 */
export function LUPdecomp(a, tol = 1.0e-9) {
  const n = a.length;
  let seq = Array.from(Array(n).keys());

  // Scale factor
  let s = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    s[i] = Math.max(...abs(a[i]));
  }
  for (let k = 0; k < n - 1; k++) {
    // Pivot
    let numerator = abs(sliceColumn(a, k, k));
    let denominator = s.slice(k);
    const p = indexOfMax(divArrays(numerator, denominator)) + k;
    if (Math.abs(a[p][k]) < tol)
      throw Error("Matrix is singular");
    if (p !== k) {
      swapColumns(s, k, p);
      swapRows(a, k, p);
      swapColumns(seq, k, p);
    }
    // Elimination
    for (let i = k + 1; i < n; i++) {
      if (a[i][k] !== 0.0) {
        const lam = a[i][k] / a[k][k];
        let leftSub = a[i].slice(k + 1, n);
        let rightSub = a[k].slice(k + 1, n).map((e) => e * lam);
        replace(a, i, [k + 1, n], subArrays(leftSub, rightSub));
        a[i][k] = lam;
      }
    }
  }
  return [a, seq];
}
