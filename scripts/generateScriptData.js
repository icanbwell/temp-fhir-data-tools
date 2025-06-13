// scripts/generateScriptData.js
// Script to generate random user data for use in other scripts

const { v4: uuidv4 } = require('uuid');
const { faker } = require('@faker-js/faker');

function genderPicker() {
  return Math.random() < 0.5 ? 'female' : 'male';
}

function randomDate(start, end) {
  const d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  if (year > 2000) year = year - 20;
  return [year, month, day].join('-');
}

function generateScriptData() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const phone = faker.phone.number();
  const email = `${lastName}.${firstName}@bwelltestuser.com`;
  const v4uuid = uuidv4();
  const v4uuid2 = uuidv4();
  const address = faker.location.streetAddress();
  const city = faker.location.city();
  const gender = genderPicker();
  const birthDate = randomDate(new Date(1945, 0, 1), new Date());

  return {
    random_FN: firstName,
    random_LN: lastName,
    random_phone: phone,
    random_email: email,
    proaUUID1: v4uuid,
    random_street: address,
    random_city: city,
    personUUID1: v4uuid2,
    genderType: gender,
    randomBirthday: birthDate
  };
}

if (require.main === module) {
  const data = generateScriptData();
  console.log(JSON.stringify(data, null, 2));
}

module.exports = generateScriptData;
