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
  const phone2 = faker.phone.number();
  const phone3 = faker.phone.number();
  const phone4 = faker.phone.number();
  const phone5 = faker.phone.number();
  const phone6 = faker.phone.number();
  const phone7 = faker.phone.number();
  const phone8 = faker.phone.number();
  const phone9 = faker.phone.number();
  const phone10 = faker.phone.number();
  const phone11 = faker.phone.number();
  const phone12 = faker.phone.number();
  const phone13 = faker.phone.number();
  const phone14 = faker.phone.number();
  const phone15 = faker.phone.number();
  const phone16 = faker.phone.number();
  const phone17 = faker.phone.number();
  const phone18 = faker.phone.number();
  const phone19 = faker.phone.number();
  const phone20 = faker.phone.number();
  const phone21 = faker.phone.number();
  const phone22 = faker.phone.number();
  const phone23 = faker.phone.number();
  const phone24 = faker.phone.number();
  const email = `${lastName}.${firstName}@bwelltestuser.com`;
  const v4uuid = uuidv4();
  const v4uuid2 = uuidv4();
  const address = faker.location.streetAddress();
  const city = faker.location.city();
  const gender = genderPicker();
  const birthDate = randomDate(new Date(1945, 0, 1), new Date());

  // Allergy Intolerance Variables
  const allergyIntolerance1 = uuidv4();
  const allergyIntolerance2 = uuidv4();
  const allergyIntolerance3 = uuidv4();
  const allergyIntolerance4 = uuidv4();
  const allergyIntolerance5 = uuidv4();
  const allergyIntolerance6 = uuidv4();
  const allergyIntolerance7 = uuidv4();
  const allergyIntolerance8 = uuidv4();
  const allergyIntolerance9 = uuidv4();
  const randomId7 = uuidv4();

  // Organization Variables
  const organizationId1 = "b822b5ee-2b77-415f-a992-9aa994e7e5fd";
  const organizationId2 = "e69288ef-c9fe-4be3-b68d-df380650866c";
  const organizationId3 = "fc5880d1-7f79-4ba8-8eeb-c6e65c711a19";
  const organizationId4 = "16e6975b-8458-4c2e-8eeb-8d202be71017";
  const organizationId5 = "0dec7c55-4a99-4f07-8cf4-a5849814d879";
  const organizationId6 = "bb5fe6cc-fd69-4e11-bb26-5fd35abbe9cf";
  const organizationId7 = "c8a830ef-69f7-4dd8-a872-70091fa27108";

  // Practitioner Variables (IDs and Names)
  const practitionerId1 = uuidv4();
  const practitionerId2 = uuidv4();
  const practitionerId3 = uuidv4();
  const practitionerId4 = uuidv4();
  const practitionerId5 = uuidv4();
  const practitionerId6 = uuidv4();
  const practitionerId7 = uuidv4();
  const practitionerId8 = uuidv4();
  const practitionerId9 = uuidv4();
  const practitionerId10 = uuidv4();
  const practitionerFN1 = faker.person.firstName();
  const practitionerLN1 = faker.person.lastName();
  const practitionerFN2 = faker.person.firstName();
  const practitionerLN2 = faker.person.lastName();
  const practitionerFN3 = faker.person.firstName();
  const practitionerLN3 = faker.person.lastName();
  const practitionerFN4 = faker.person.firstName();
  const practitionerLN4 = faker.person.lastName();
  const practitionerFN5 = faker.person.firstName();
  const practitionerLN5 = faker.person.lastName();
  const practitionerFN6 = faker.person.firstName();
  const practitionerLN6 = faker.person.lastName();
  const practitionerFN7 = faker.person.firstName();
  const practitionerLN7 = faker.person.lastName();
  const practitionerFN8 = faker.person.firstName();
  const practitionerLN8 = faker.person.lastName();
  const practitionerFN9 = faker.person.firstName();
  const practitionerLN9 = faker.person.lastName();
  const practitionerFN10 = faker.person.firstName();
  const practitionerLN10 = faker.person.lastName();

  // Medication Variables
  const med_request_id1 = uuidv4();
  const med_request_id2 = uuidv4();
  const med_request_id3 = uuidv4();
  const med_request_id4 = uuidv4();
  const med_request_id5 = uuidv4();
  const med_request_id6 = uuidv4();
  const med_request_id7 = uuidv4();
  const med_request_id8 = uuidv4();
  const med_dispense_id1 = uuidv4();
  const med_dispense_id2 = uuidv4();
  const med_dispense_id3 = uuidv4();
  const med_dispense_id4 = uuidv4();
  const med_dispense_id5 = uuidv4();
  const med_dispense_id6 = uuidv4();
  const med_dispense_id7 = uuidv4();
  const med_dispense_id8 = uuidv4();
  const medStatementId1 = uuidv4();
  const medStatementId2 = uuidv4();
  const medStatementId3 = uuidv4();
  const medStatementId4 = uuidv4();

  // Condition Records
  const randomCondition1 = uuidv4();
  const randomCondition2 = uuidv4();
  const randomCondition3 = uuidv4();
  const randomSpecialCondition1 = uuidv4();
  const randomSpecialCondition2 = uuidv4();
  const randomSpecialCondition3 = uuidv4();
  const randomSpecialCondition4 = uuidv4();

  // Encounter Records
  const randomEncounter1 = uuidv4();
  const randomEncounter2 = uuidv4();
  const randomEncounter3 = uuidv4();
  const randomEncounter4 = uuidv4();
  const randomEncounter5 = uuidv4();
  const randomEncounter6 = uuidv4();
  const randomEncounter7 = uuidv4();
  const randomEncounter8 = uuidv4();
  const randomEncounter9 = uuidv4();
  const randomEncounter10 = uuidv4();
  const randomEncounter11 = uuidv4();
  const randomEncounter12 = uuidv4();
  const randomEncounter13 = uuidv4();
  const randomEncounter14 = uuidv4();
  const randomEncounter15 = uuidv4();
  const randomEncounter16 = uuidv4();
  const randomEncounter17 = uuidv4();
  const randomEncounter18 = uuidv4();
  const randomSpecialEncounter1 = uuidv4();
  const randomSpecialEncounter2 = uuidv4();
  const randomSpecialEncounter3 = uuidv4();
  const randomSpecialEncounter4 = uuidv4();

  // Care Plan Records
  const randomCarePlan1 = uuidv4();
  const randomCarePlan2 = uuidv4();
  const randomCarePlan3 = uuidv4();
  const procedureId1 = uuidv4();
  const procedureId2 = uuidv4();
  const procedureId3 = uuidv4();
  const procedureId4 = uuidv4();

  // Immunization Records
  const immunization1 = uuidv4();
  const immunization2 = uuidv4();
  const immunization3 = uuidv4();
  const immunization4 = uuidv4();
  const immunization5 = uuidv4();
  const immunization6 = uuidv4();
  const immunization7 = uuidv4();
  const immunization8 = uuidv4();
  const immunization9 = uuidv4();
  const immunization10 = uuidv4();
  const immunization11 = uuidv4();
  const immunization12 = uuidv4();
  const immunization13 = uuidv4();
  const immunization14 = uuidv4();
  const immunization15 = uuidv4();
  const immunization16 = uuidv4();
  const immunization17 = uuidv4();

  const observationId1 = uuidv4();
  const observationId2 = uuidv4();
  const observationId3 = uuidv4();
  const observationId4 = uuidv4();
  const observationId5 = uuidv4();
  const observationId6 = uuidv4();
  const observationId7 = uuidv4();
  const observationId8 = uuidv4();
  const observationId9 = uuidv4();
  const observationId10 = uuidv4();
  const observationId11 = uuidv4();
  const observationId12 = uuidv4();
  const observationId13 = uuidv4();
  const observationId14 = uuidv4();
  const observationId15 = uuidv4();
  const observationId16 = uuidv4();
  const observationId17 = uuidv4();
  const observationId18 = uuidv4();
  const observationId19 = uuidv4();
  const observationId20 = uuidv4();
  const observationId21 = uuidv4();
  const observationId22 = uuidv4();
  const observationId23 = uuidv4();
  const observationId24 = uuidv4();
  const observationId25 = uuidv4();
  const observationId26 = uuidv4();
  const observationId27 = uuidv4();
  const observationId28 = uuidv4();
  const observationId29 = uuidv4();
  const observationId30 = uuidv4();
  const observationId31 = uuidv4();
  const observationId32 = uuidv4();
  const observationId33 = uuidv4();
  const observationId34 = uuidv4();
  const observationId35 = uuidv4();
  const observationId36 = uuidv4();
  const observationId37 = uuidv4();
  const observationId38 = uuidv4();
  const observationId39 = uuidv4();
  const observationId40 = uuidv4();


  return {
    random_FN: firstName,
    random_LN: lastName,
    random_phone: phone,
    random_phone2: phone2,
    random_phone3: phone3,
    random_phone4: phone4,
    random_phone5: phone5,
    random_phone6: phone6,
    random_phone7: phone7,
    random_phone8: phone8,
    random_phone9: phone9,
    random_phone10: phone10,
    random_phone11: phone11,
    random_phone12: phone12,
    random_phone13: phone13,
    random_phone14: phone14,
    random_phone15: phone15,
    random_phone16: phone16,
    random_phone17: phone17,
    random_phone18: phone18,
    random_phone19: phone19,
    random_phone20: phone20,
    random_phone21: phone21,
    random_phone22: phone22,
    random_phone23: phone23,
    random_phone24: phone24,
    random_email: email,
    proaUUID1: v4uuid,
    random_street: address,
    random_city: city,
    personUUID1: v4uuid2,
    genderType: gender,
    randomBirthday: birthDate,
    // Allergy Intolerance
    allergyIntolerance1,
    allergyIntolerance2,
    allergyIntolerance3,
    allergyIntolerance4,
    allergyIntolerance5,
    allergyIntolerance6,
    allergyIntolerance7,
    allergyIntolerance8,
    allergyIntolerance9,
    randomId7,
    // Organization
    organizationId1,
    organizationId2,
    organizationId3,
    organizationId4,
    organizationId5,
    organizationId6,
    organizationId7,
    // Practitioner
    practitionerId1,
    practitionerId2,
    practitionerId3,
    practitionerId4,
    practitionerId5,
    practitionerId6,
    practitionerId7,
    practitionerId8,
    practitionerId9,
    practitionerId10,
    practitionerFN1,
    practitionerLN1,
    practitionerFN2,
    practitionerLN2,
    practitionerFN3,
    practitionerLN3,
    practitionerFN4,
    practitionerLN4,
    practitionerFN5,
    practitionerLN5,
    practitionerFN6,
    practitionerLN6,
    practitionerFN7,
    practitionerLN7,
    practitionerFN8,
    practitionerLN8,
    practitionerFN9,
    practitionerLN9,
    practitionerFN10,
    practitionerLN10,
    // Medication
    med_request_id1,
    med_request_id2,
    med_request_id3,
    med_request_id4,
    med_request_id5,
    med_request_id6,
    med_request_id7,
    med_request_id8,
    med_dispense_id1,
    med_dispense_id2,
    med_dispense_id3,
    med_dispense_id4,
    med_dispense_id5,
    med_dispense_id6,
    med_dispense_id7,
    med_dispense_id8,
    medStatementId1,
    medStatementId2,
    medStatementId3,
    medStatementId4,
    // Condition
    randomCondition1,
    randomCondition2,
    randomCondition3,
    randomSpecialCondition1,
    randomSpecialCondition2,
    randomSpecialCondition3,
    randomSpecialCondition4,
    // Encounter
    randomEncounter1,
    randomEncounter2,
    randomEncounter3,
    randomEncounter4,
    randomEncounter5,
    randomEncounter6,
    randomEncounter7,
    randomEncounter8,
    randomEncounter9,
    randomEncounter10,
    randomEncounter11,
    randomEncounter12,
    randomEncounter13,
    randomEncounter14,
    randomEncounter15,
    randomEncounter16,
    randomEncounter17,
    randomEncounter18,
    randomSpecialEncounter1,
    randomSpecialEncounter2,
    randomSpecialEncounter3,
    randomSpecialEncounter4,
    // Care Plan
    randomCarePlan1,
    randomCarePlan2,
    randomCarePlan3,
    procedureId1,
    procedureId2,
    procedureId3,
    procedureId4,
    // Immunization
    immunization1,
    immunization2,
    immunization3,
    immunization4,
    immunization5,
    immunization6,
    immunization7,
    immunization8,
    immunization9,
    immunization10,
    immunization11,
    immunization12,
    immunization13,
    immunization14,
    immunization15,
    immunization16,
    immunization17,

    // Observations
    observationId1,
    observationId2,
    observationId3,
    observationId4,
    observationId5,
    observationId6,
    observationId7,
    observationId8,
    observationId9,
    observationId10,
    observationId11,
    observationId12,
    observationId13,
    observationId14,
    observationId15,
    observationId16,
    observationId17,
    observationId18,
    observationId19,
    observationId20,
    observationId21,
    observationId22,
    observationId23,
    observationId24,
    observationId25,
    observationId26,
    observationId27,
    observationId28,
    observationId29,
    observationId30,
    observationId31,
    observationId32,
    observationId33,
    observationId34,
    observationId35,
    observationId36,
    observationId37,
    observationId38,
    observationId39,
    observationId40

  };
}

if (require.main === module) {
  const data = generateScriptData();
  console.log(JSON.stringify(data, null, 2));
}

module.exports = generateScriptData;
