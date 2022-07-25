/**
 * Finds the index of the maximum value in the array.
 * @param {number[]} arr - The array of numbers
 * @returns {number} Maximum value index
 */
export function indexOfMax(arr: number[]) {
  return arr.indexOf(Math.max(...arr));
}
