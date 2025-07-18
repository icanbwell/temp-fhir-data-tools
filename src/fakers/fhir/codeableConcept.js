const { faker } = require("@faker-js/faker");
const { createCoding } = require("./coding.js");

function createCodeableConcept(options = { codingFactory: createCoding }) {
  const { codingFactory, ...rest } = options;
  const codings = faker.helpers.multiple(codingFactory, rest);
  return {
    coding: codings,
    text: faker.helpers.maybe(
      () => faker.helpers.arrayElement(codings).display,
      { probability: 0.66 }
    ),
  };
}

module.exports = { createCodeableConcept };
