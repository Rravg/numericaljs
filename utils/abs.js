/**
 * Returns a new array containing the absolute values of all the *arr* elements.
 * @param {number[]} arr - The array of numbers.
 * @returns {number[]} The array containing the absolute values.
 */
export function abs(arr) {
  let absArray = arr.map((element) => Math.abs(element));
  return absArray;
}
