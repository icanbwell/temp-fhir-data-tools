const { faker } = require("@faker-js/faker");

function createCoding(system) {
  return {
    system:
      system ||
      `${faker.internet.url({
        appendSlash: true,
      })}${faker.internet.domainWord()}`,
    code: `${faker.number.int({ min: 1000, max: 9999 })}-${faker.number.int({
      min: 10,
      max: 99,
    })}`,
    display: faker.food.vegetable(),
  };
}

module.exports = { createCoding };
