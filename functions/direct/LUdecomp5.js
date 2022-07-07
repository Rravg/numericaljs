/**
 * LU decomposition of symmetric pentadiagonal matrix [a] = [f\e\d\e\f].
 * {f}, {e}, {d} are the diagonal elements of [a]. The functions outputs an array containing the arrays {d}, {e}, {f} of thee decomposed matrix [a].
 * @param {number[]} d An array of numbers.
 * @param {number[]} e An array of numbers.
 * @param {number[]} f An array of numbers.
 *
 * @returns {number[][]} An array containing the decomposed values {d}, {e}, {f}.
 */
export function LUdecomp5(d, e, f) {
  const n = d.length;
  for (let k = 0; k < n - 2; k++) {
    const lam = e[k] / d[k];
    d[k + 1] = d[k + 1] - lam * e[k];
    e[k + 1] = e[k + 1] - lam * f[k];
    e[k] = lam;
    lam = f[k] / d[k];
    d[k + 2] = d[k + 2] - lam * f[k];
    f[k] = lam;
  }
  const lam = e[n - 2] / d[n - 2];
  d[n - 1] = d[n - 1] - lam * e[n - 2];
  e[n - 2] = lam;
  return [d, e, f];
}
