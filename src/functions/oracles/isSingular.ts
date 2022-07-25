import { determinant } from "../../utils/determinant";

export function isSingular(M: number[][]) {
  let det = determinant(M);
  if (det != 0) {
    return false;
  } else {
    return true;
  }
}
