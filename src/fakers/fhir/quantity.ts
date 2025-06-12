import type {IQuantity} from "@ahryman40k/ts-fhir-types/lib/R4";
import {faker} from "@faker-js/faker";

const COMPARATOR_LIST = ['>', '<', '<=', '>=']
const maybeArrayElement = <T>(elements: T[], probability?: number) => {
    return faker.helpers.maybe(()=>faker.helpers.arrayElement(elements), {probability})
}
export const createQuantity = (): IQuantity & {comparator?: string}=> ({
    value: faker.number.float({fractionDigits: 2}),
    // @ts-ignore The comparator enum defined in types is odd
    comparator: maybeArrayElement(COMPARATOR_LIST, .15),
    unit: faker.science.unit().symbol
})