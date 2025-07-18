import type {
  ICoding,
  IMedication,
  IMedication_Batch,
  IMedication_Ingredient,
} from "@ahryman40k/ts-fhir-types/lib/R4";
import { fa, faker } from "@faker-js/faker";
import { createCodeableConcept } from "../fhir/codeableConcept";
import { createRatio } from "../fhir/ratio";

const RXNORM_SYSTEM = "http://www.nlm.nih.gov/research/umls/rxnorm";
const NDC_SYSTEM = "http://www.nlm.nih.gov/research/umls/ndc";
const MEDICATION_INGREDIENT_ACTIVE_PROBABILITY = 0.25;

type MedicationCodeSystems = "rxnorm" | "ndc";
type CodingSeed = { code: string; display: string };

const rxNormCodings: CodingSeed[] = [
  {
    code: "993891",
    display:
      "acetaminophen 300 MG / codeine phosphate 60 MG [Tylenol with Codeine]",
  },
  {
    code: "993770",
    display: "acetaminophen 300 MG / codeine phosphate 15 MG Oral Tablet",
  },
  {
    code: "1536457",
    display:
      "acetaminophen 500 MG / codeine phosphate 8 MG Effervescent Oral Tablet",
  },
];

const ndcCodings: CodingSeed[] = [
  {
    code: "70645-500-88",
    display: "8 TABLET, CHEWABLE in 1 CONTAINER (70645-500-88)",
  },
  {
    code: "55758-012-05",
    display:
      "5 PACKET in 1 BOX (55758-012-05) / 1 GRANULE, FOR SOLUTION in 1 PACKET",
  },
  {
    code: " 0169-4130-01",
    display: "OZEMPIC- semaglutide injection, solution",
  },
];

class ValueSet {
  system: string;
  codings: ICoding[];
}

const createMedicationCoding = (): ICoding =>
  faker.helpers.arrayElement([createRxNormCoding(), createNDCCoding()]);

const createRxNormCoding = (): ICoding => {
  return {
    system: RXNORM_SYSTEM,
    ...faker.helpers.arrayElement(rxNormCodings),
  };
};

const createNDCCoding = (): ICoding => {
  return {
    system: NDC_SYSTEM,
    ...faker.helpers.arrayElement(ndcCodings),
  };
};

export const medicationCodingFactory = (system?: MedicationCodeSystems) => {
  if (system === "ndc") {
    return createNDCCoding();
  }
  if (system === "rxnorm") {
    return createRxNormCoding();
  }
  return createMedicationCoding();
};

export const createMedicationBatch = (): IMedication_Batch => {
  return {
    lotNumber: faker.string.numeric({
      allowLeadingZeros: true,
      length: { min: 2, max: 4 },
    }),
    expirationDate: faker.helpers
      .arrayElement([faker.date.future(), faker.date.past({ years: 10 })])
      .toISOString(),
  };
};

export const createMedicationIngredient = (): IMedication_Ingredient => {
  const item = faker.helpers.arrayElement([
    { itemCodeableConcept: createCodeableConcept() },
    {
      itemReference: {
        reference: `Medication/${faker.string.uuid()}`,
      },
    },
  ]);
  return {
    isActive: faker.datatype.boolean(MEDICATION_INGREDIENT_ACTIVE_PROBABILITY),
    strength: createRatio(),
    ...item,
  };
};
