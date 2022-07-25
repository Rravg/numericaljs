/**
 * Creates a *nxm* matrix of zero elements.
 * @param {number} n The dimension *n* of the return matrix.
 * @param {number} m The dimension *m* of the return matrix.
 * @returns
 */
export function zeros(n: number, m: number): number[][] {
  return Array.from(Array(n).fill(0.0), () => new Array(m).fill(0.0));
}
