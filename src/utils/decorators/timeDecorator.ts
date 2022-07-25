/**
 * Function decorator that measures computation time of a function in ms.
 *
 * Example usage:
 *
 *      function func1(params) {
 *          // do something
 *      }
 *
 *      timeDecorator(func1)(params);
 * @param {func} func
 * @returns function
 */

export function timeDecorator(func: Function) {
  return function () {
    const initialTime = performance.now();
    const result = func.apply(func, arguments);
    const finalTime = performance.now();
    console.log(`Time of ${func.name}: ${finalTime - initialTime}ms`);
    return result;
  };
}
