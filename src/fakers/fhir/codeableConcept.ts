import type {ICodeableConcept, ICoding} from "@ahryman40k/ts-fhir-types/lib/R4";
import {faker} from "@faker-js/faker";
import {createCoding} from "./coding";

type CreateCodeableConceptOptions = {
    codingFactory?: () => ICoding;
    text?: string
    count?: number | {
        min: number;
        max: number;
    }
}

export function createCodeableConcept(options: CreateCodeableConceptOptions = {codingFactory: createCoding}): ICodeableConcept {
    const {
        codingFactory,
        ...rest
    } = options;
    const codings = faker.helpers.multiple(codingFactory, rest)
    return {
        coding: codings,
        text: faker.helpers.maybe(() => faker.helpers.arrayElement(codings).display, {probability: .66})
    }
}
