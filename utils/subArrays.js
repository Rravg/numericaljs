/**
 * Returns a new array containing the subtraction of each element in *arr1* and *arr2*.
 * * The arrays must have the same length.
 * @param {number[]} arr1 An array of numbers.
 * @param {number[]} arr2 An array of numbers.
 * @returns {number[]} The result array = *arr1 - arr2*
 */
export function subArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw Error("Arrays do not have same length.");
  }

  const n = arr1.length;
  let result = Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = arr1[i] - arr2[i];
  }
  return result;
}
