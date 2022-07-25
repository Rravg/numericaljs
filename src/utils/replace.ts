/**
 * Replace a row or row elements of the matrix **a**.
 * @param {number[][]} a The matrix a
 * @param {number} row The row of the matrix where elements will be replaced
 * @param {[number, number]} tuple The start and end of elements to be replaced in a row
 * @param  {number[]} items Items to be replaced in the row and range.
 */
export function replace(
  a: number[][],
  row: number,
  [start, end]: [number, number],
  items: number[]
) {
  let k: number = 0;
  for (let i = start; i < end; i++) {
    a[row][i] = items[k++];
  }
}
