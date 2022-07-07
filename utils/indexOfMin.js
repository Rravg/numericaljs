/**
 * Finds the index of the minimun value in the array.
 * @param {number[]} arr - The array of numbers
 * @returns {number} Minimum value index
 */
export function indexOfMin(arr) {
  return arr.indexOf(Math.min(...arr));
}
