import {createMedicationBatch, createMedicationIngredient, medicationCodingFactory} from "./constants";
import type {IMedication} from "@ahryman40k/ts-fhir-types/lib/R4";
import {createCodeableConcept} from "../fhir/codeableConcept";
import {faker} from "@faker-js/faker";
import {createRatio} from "../fhir/ratio";

export const createRandomMedication = (): IMedication => {
    const codeableConcept = createCodeableConcept({codingFactory: medicationCodingFactory, count: {min: 1, max: 15}})
    return {
        resourceType: 'Medication',
        code: codeableConcept,
        status: 'active',
        ingredient: faker.helpers.multiple(createMedicationIngredient),
        batch: createMedicationBatch(),
        amount: createRatio(),
        form: createCodeableConcept(),
        manufacturer: {
            reference: `Organization/${faker.string.uuid()}`
        }
    }
}

// console.log(JSON.stringify(createRandomMedication(), null, 2));
for (let i = 0; i< 1000; i++){
    console.log(JSON.stringify(createRandomMedication(), null, 2))
    console.log()
    console.log()
}