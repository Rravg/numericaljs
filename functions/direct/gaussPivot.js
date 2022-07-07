/**
 * Solves [a]{x} = {b} using Gauss Elimination method with row pivoting.
 * The funcion stores the solution array on **b**.
 * @param {number[][]} a A 2 dimensional array
 * @param {number[]} b An array of numbers.
 * @param {number} tol Tolerance, default = 1.0e-12.
 * @returns {number[]} An array containing the solution {x}.
 */
function gaussPivot(a, b, tol = 1.0e-12) {
  const n = b.length;

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
      swapColumns(b, k, p);
      swapColumns(s, k, p);
      swapRows(a, k, p);
    }
    // Elimination
    for (let i = k + 1; i < n; i++) {
      if (a[i][k] !== 0) {
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
  if (Math.abs(a[n - 1][n - 1] < tol))
    throw Error("Matrix is singular");
  // Back substitution
  b[n - 1] = b[n - 1] / a[n - 1][n - 1];
  for (let k = n - 2; i > -1; i--) {
    b[k] = (b[k] - dot(a[k].slice(k + 1, n), b.slice(k + 1, n))) / a[k][k];
  }
  return b;
}
