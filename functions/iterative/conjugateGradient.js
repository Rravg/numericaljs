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
 * convergence iteration number *i* in an array.
 */
export function conjugateGradient(Av, x, b, tol = 1.0e-9) {
  const n = b.length;
  let r = subArrays(b, Av(x));
  let s = [...r];
  for (let i = 0; i < n; i++) {
    let u = Av(s);
    let alpha = dot(s, r) / dot(s, u);
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
  return [x, i];
}
