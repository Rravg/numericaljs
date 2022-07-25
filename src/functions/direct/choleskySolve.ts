import { dot } from "../../utils/dot";

/**
 * Solves [L][L]transpose = [a]{x} = {b}. **L** is the return value of choleskyDecomp, the lower triangular matrix.
 * @param {number[][]} L A 2 dimensional array of numbers.
 * @param {number[]} b An array of numbers
 * @returns {number[]} An array of numbers containing the solution {x}.
 */
export function choleskySolve(L: number[][], b: number[]) {
  const n: number = b.length;
  for (let k = 0; k < n; k++) {
    b[k] = (b[k] - dot(L[k].slice(0, k), b.slice(0, k))) / L[k][k];
  }

  for (let j = n - 1; j >= 0; j--) {
    let transposeSlice = [];
    for (let i = j + 1; i < n; i++) {
      transposeSlice.push(L[i][j]);
    }
    b[j] = (b[j] - dot(transposeSlice, b.slice(j + 1, n))) / L[j][j];
  }
  return b;
}
