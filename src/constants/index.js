require("dotenv").config();

const config = {
  env: process.env.FHIR_ENVIRONMENT || "dev",
  useProaServer: process.env.USE_PROA_SERVER === "true",
};

const ACCESS_TOKEN = process.env.ACCESS_TOKEN || "";

const FHIR_BASE_URL = `https://fhir.${config.env}.icanbwell.com/4_0_0`;
const PROA_FHIR_BASE_URL = `https://fhir-proa.${config.env}.icanbwell.com/4_0_0`;
const INTERNAL_FHIR_BASE_URL = `https://fhir-internal.${config.env}.bwell.zone/4_0_0`;

const CLIENT_PATIENT_ID = process.env.CLIENT_PATIENT_ID || "";
const CLIENT_PERSON_ID = process.env.CLIENT_PERSON_ID || "";

module.exports = {
  config,
  ACCESS_TOKEN,
  FHIR_BASE_URL,
  PROA_FHIR_BASE_URL,
  INTERNAL_FHIR_BASE_URL,
  CLIENT_PATIENT_ID,
  CLIENT_PERSON_ID,
};
