/**
 * Solves [L\U]{x} = {b}. The inputs **a** and **seq** of this function are the returned values of *LUPsolve*.
 * @param {number[][]} a A 2 dimensional array of numbers.
 * @param {number[]} b An array of numbers.
 * @param {numer[]} seq Permutation array.
 * @returns {number[]} An array of numbers containing the solution {x}.
 */
export function LUPsolve(a, b, seq) {
  const n = a.length;

  // Arrange constant vector
  let x = [...b];
  for (let i = 0; i < n; i++) {
    x[i] = b[seq[i]];
  }

  // Forward Substitution
  for (let k = 1; k < n; k++) {
    x[k] = x[k] - dot(a[k].slice(0, k), x.slice(0, k));
  }
  x[n - 1] = x[n - 1] / a[n - 1][n - 1];
  for (let k = n - 2; k >= 0; k--) {
    x[k] = (x[k] - dot(a[k].slice(k + 1, n), x.slice(k + 1, n))) / a[k][k];
  }
  return x;
}
