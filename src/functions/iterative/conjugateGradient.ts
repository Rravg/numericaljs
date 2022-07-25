import { dot } from "../../utils/dot.js";
import { subArrays } from "../../utils/subArrays.js";
import { sumArrays } from "../../utils/sumArrays.js";

/**
 * @callback Av
 * @param {number[]}
 */
/**
 * Solves [A]{x} = {b} using the Conjugate gradient method.
 * Notes:
 * * The matrix [A] should be sparse.
 * * Av(v) is a function that returs the computation of [A]{v}
 * @param {Av} Av Callback function.
 * @param {number[]} x An array of numbers
 * @param {number[]} b An array of numbers
 * @param {number} tol Tolerance
 * @returns {number[][]} Returns the solution array {x} and the
 * convergence iteration number *index* in an array.
 */
export function conjugateGradient(Av: Function, x: number[], b: number[], tol: number = 1.0e-9) {
  const n: number = b.length;
  let r: number[] = subArrays(b, Av(x));
  let s: number[] = [...r];
  let index: number = 0;
  for (index; index < n; index++) {
    let u = Av(s);
    let alpha: number = dot(s, r) / dot(s, u);
    x = sumArrays(
      x,
      s.map((e) => e * alpha)
    );
    r = subArrays(b, Av(x));
    if (Math.sqrt(dot(r, r)) < tol) {
      break;
    } else {
      let beta = -dot(r, u) / dot(s, u);
      s = sumArrays(
        r,
        s.map((e) => e * beta)
      );
    }
  }
  return [x, index];
}
