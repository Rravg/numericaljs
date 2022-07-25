/**
 * Replace a column or column elements of the matrix **a**.
 * @param {number[][]} a A 2 dimensional array (Matrix **a**).
 * @param {number} col Index that represents the column of the matrix to be replaced
 * @param {[number, number]} param2 start and end indices of the column to be replaced.
 * @param {number[]} items Items to be replaced in the column and range.
 */
export function replaceCol(
  a: number[][],
  col: number,
  [start, end]: [number, number],
  items: number[]
) {
  let k: number = 0;
  for (let i = start; i < end; i++) {
    a[i][col] = items[k++];
  }
}
