import {faker} from "@faker-js/faker";
import {ICoding} from "@ahryman40k/ts-fhir-types/lib/R4";

export function createCoding(system?: string): ICoding {
    return {
        system: system || `${faker.internet.url({appendSlash: true})}${faker.internet.domainWord()}`,
        code: `${faker.number.int({min: 1000, max: 9999})}-${faker.number.int({min: 10, max: 99})}`,
        display: faker.food.vegetable()
    }
}

const codingFactory=  (fn: ()=>ICoding) : ICoding => fn()

// export type IFactory<T> = {}

type  factory = <T>(fn: () => T)=>T;