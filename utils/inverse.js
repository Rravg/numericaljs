/**
 * Finds the inverse Matrix of **a** using Doolittle's Decomposition.
 * @param {number[][]} a A two dimensional array of numbers.
 * @returns {number[][]} The inverse matrix.
 */
export function inverse(a) {
  const n = a[0].length;
  let aInverted = identity(n);
  let seq;
  [a, seq] = LUPdecomp(a);
  for (let i = 0; i < n; i++) {
    replaceCol(
      aInverted,
      i,
      [0, n],
      LUPsolve(a, sliceColumn(aInverted, i), seq)
    );
  }
  return aInverted;
}
