import { determinant } from "../../utils/determinant.js";

export function isSingular(M) {
    let det = determinant(M);
    if (det != 0) {
        return false;
    } else {
        return true;
    }
}