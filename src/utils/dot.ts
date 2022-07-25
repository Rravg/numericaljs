/**
 * Finds the dot product or inner product of the arrays **a** and **b**.
 * @param {number[]} a An array of numbers.
 * @param {number[]} b An array of numbers.
 * @returns {number} The dot product of **a** and **b**.
 */
export function dot(a: number[], b: number[]) {
  let result: number = 0;
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      result += a[i] * b[i];
    }
  }
  return result;
}
