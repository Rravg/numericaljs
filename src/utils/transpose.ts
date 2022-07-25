import { zeros } from "./zeros.js";

/**
 * Transpose the matrix **M** on place.
 * @param {number[][]} M A 2 dimensional array.
 * @returns {number[][]} The transposed matrix.
 */
export function transpose(M: number[][]) {
  const n: number = M.length;
  const m: number = M[0].length;
  let M_t: number[][] = zeros(n, m);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      M_t[j][i] = M[i][j];
    }
  }
  return M_t;
}
