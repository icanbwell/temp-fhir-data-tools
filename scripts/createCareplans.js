const axios = require("axios");

async function createCarePlans({
  env,
  proaAccessToken,
  randomUserData,
  proaClientFhirPatientId,
}) {
  const carePlansData = [
    {
      resourceType: "CarePlan",
      id: `${randomUserData.randomCarePlan1}`,
      meta: {
        source: "https://www.icanbwell.com",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo_samsung",
          },
          {
            system: "https://www.icanbwell.com/vendor",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/sourceAssigningAuthority",
            code: "proa_demo",
          },
        ],
      },
      status: "unknown",
      intent: "plan",
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/careplan-category",
              code: "weight-plan",
              display: "Weight management plan",
            },
          ],
          text: "Weight management plan",
        },
      ],
      description: "Weight management plan",
      subject: {
        "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      period: {
        start: "2018-02-01T10:31:10.000Z",
        end: "2019-06-01T10:30:10.000Z",
      },
      created: "2018-02-01T10:30:10.000Z",
      author: {
        reference: `Practitioner/${randomUserData.practitionerId1}`,
        display: `${randomUserData.practitionerFN1} ${randomUserData.practitionerLN1}`,
      },
    },
    {
      resourceType: "CarePlan",
      id: `${randomUserData.randomCarePlan2}`,
      meta: {
        source: "https://www.icanbwell.com",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo_samsung",
          },
          {
            system: "https://www.icanbwell.com/vendor",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/sourceAssigningAuthority",
            code: "proa_demo",
          },
        ],
      },
      status: "active",
      intent: "plan",
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/careplan-category",
              code: "assess-plan",
              display: "Assessment and Plan of Treatment",
            },
          ],
          text: "Assessment and Plan of Treatment",
        },
      ],
      description: "Assessment and Plan of Treatment",
      subject: {
        "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      period: {
        start: "2016-01-01T10:31:10.000Z",
        end: "2017-06-01T10:30:10.000Z",
      },
      created: "2016-01-01T10:30:10.000Z",
      author: {
        reference: `Practitioner/${randomUserData.practitionerId3}`,
        display:  `${randomUserData.practitionerFN3} ${randomUserData.practitionerLN3}`,
      },
    },
    {
      resourceType: "CarePlan",
      id: `${randomUserData.randomCarePlan3}`,
      meta: {
        source: "https://www.icanbwell.com/postman-QA-collection",
        security: [
          {
            system: "https://www.icanbwell.com/owner",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/access",
            code: "proa_demo_samsung",
          },
          {
            system: "https://www.icanbwell.com/vendor",
            code: "proa_demo",
          },
          {
            system: "https://www.icanbwell.com/sourceAssigningAuthority",
            code: "proa_demo",
          },
        ],
      },
      status: "active",
      intent: "order",
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/careplan-category",
              code: "assess-plan",
              display: "Assess-Plan",
            },
          ],
          text: "Assess-Plan",
        },
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "698360004",
              display: "Diabetes self management plan",
            },
          ],
          text: "Diabetes self management plan",
        },
      ],
      title: "Diabetes self management plan",
      subject: {
        "reference": `Patient/${proaClientFhirPatientId}`,
            "display": `${randomUserData.random_LN}, ${randomUserData.random_FN}`
      },
      period: {
        start: "2012-03-03T01:45:51.000Z",
        end: "2013-03-03T01:45:51.000Z",
      },
      created: "2020-01-01T10:30:10.000Z",
      author: {
        reference: `Practitioner/${randomUserData.practitionerId1}`,
        display: `${randomUserData.practitionerFN1} ${randomUserData.practitionerLN1}`,
      },
      activity: [
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "160670007",
                  display: "Diabetic diet",
                },
              ],
              text: "Diabetic diet",
            },
            status: "in-progress",
          },
        },
        {
          detail: {
            code: {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "229065009",
                  display: "Exercise therapy",
                },
              ],
              text: "Exercise therapy",
            },
            status: "in-progress",
          },
        },
      ],
    },
  ];

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://fhir-proa.${env}.icanbwell.com/4_0_0/CarePlan/$merge`,
    headers: {
      "Content-Type": "application/fhir+json",
      Authorization: `Bearer ${proaAccessToken}`,
    },
    data: carePlansData,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error("Error creating PROA CarePlan Records:", error);
    throw error;
  }
}

module.exports = createCarePlans;
