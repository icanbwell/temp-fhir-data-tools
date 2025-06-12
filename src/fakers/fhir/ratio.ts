import {createQuantity} from "./quantity";

export const createRatio = () => ({
    numerator: createQuantity(),
    denominator: createQuantity(),
})