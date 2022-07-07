import { dot } from "../../utils/dot.js";
import { subArrays } from "../../utils/subArrays.js";

/**
 * @callback iterEqs
 * @param {number[]}
 * @param {number}
 *
 */
/**
 * Solves [A]{x} = {b} using the Gauss-Seidel method.
 * Note:
 * * The matrix [A] should be sparse.
 * * iterEqs(x, omega) is a function that returns the improved {x}.
 * omega is the relaxation factor.
 * @param {iterEqs} iterEqs Callback function.
 * @param {number[]} x An array of numbers.
 * @param {number} tol Tolerance
 * @returns {number[][]} Returns the solution array {x},
 * convergence iterator number *i* and the relaxation factor *omega* in an array.
 */
export function gaussSeidel(iterEqs, x, tol = 1.0e-9) {
  let omega = 1.0;
  const k = 10;
  const p = 1;

  for (let i = 0; i < 501; i++) {
    let xOld = [...x];
    x = iterEqs(x, omega);
    let dx = Math.sqrt(dot(subArrays(x, xOld), subArrays(x, xOld)));
    if (dx < tol) return [x, i, omega];

    // Relaxation factor
    if (i === k) var dx1 = dx;
    if (i === k + p) {
      let dx2 = dx;
      omega = 2.0 / (1.0 + Math.sqrt(1.0 - (dx2 / dx1) ** (1.0 / p)));
    }
  }
  console.log("Gauss-Seidel failed to converge");
}
