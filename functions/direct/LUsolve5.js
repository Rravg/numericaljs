/**
 * Solves [f\e\d\e\f]{x} = {b}, {d}, {e}, {f} are the arrays returned from the function LUdecomp5.
 * @param {number[]} d Array of numbers.
 * @param {number[]} e Array of numbers.
 * @param {number[]} f Array of numbers.
 * @param {number[]} b Array of numbers.
 * @returns {number[]} The array containing the solution {b}.
 */
export function LUsolve5(d, e, f, b) {
  const n = d.length;
  b[1] = b[1] - e[0] * b[0];
  for (let k = 2; k < n; k++) {
    b[k] = b[k] - e[k - 1] * b[k - 1] - f[k - 2] * b[k - 2];
  }
  b[n - 1] = b[n - 1] / d[n - 1];
  b[n - 2] = b[n - 2] / d[n - 2] - e[n - 2] * b[n - 1];
  for (let k = n - 3; k >= 0; k--) {
    b[k] = b[k] / d[k] - e[k] * b[k + 1] - f[k] * b[k + 2];
  }
  return b;
}
