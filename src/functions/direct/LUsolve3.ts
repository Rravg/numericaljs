/**
 * Solves [c\d\e]{x} = {b}, {c} {d} {e} are the arrays returned from LUdecomp3.
 * @param {number[]} c An array of numbers.
 * @param {number[]} d An array of numbers.
 * @param {number[]} e An array of numbers.
 * @param {number[]} b An array of numbers.
 * @returns {number[]} The solution array {b}.
 */
export function LUsolve3(c: number[], d: number[], e: number[], b: number[]) {
  const n: number = d.length;
  for (let k = 1; k < n; k++) {
    b[k] = b[k] - c[k - 1] * b[k - 1];
  }
  b[n - 1] = b[n - 1] / d[n - 1];
  for (let k = n - 2; k >= 0; k--) {
    b[k] = (b[k] - e[k] * b[k + 1]) / d[k];
  }
  return b;
}
