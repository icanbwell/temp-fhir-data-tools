# Temp Fhir Data Tools

## Samsung PROA data generation

This repository contains tools for generating PROA FHIR data for Samsung users. The data is generated on a per-user basis. The generated data can be used for testing and development purposes.

## Usage

1. Login to AWS Console and set environment variables of your respective environment in terminal by copying from the AWS Console:

   - `export AWS_ACCESS_KEY_ID=...`
   - `export AWS_SECRET_ACCESS_KEY=...`
   - `export AWS_REGION=...`

2. Complete the fields in the `templateGenerateUserDataInput.js` file. This file contains the configuration for the user data generation.

3. Use the following commands to generate the data:

```bash
nvm use 20
npm install
node templateGenerateUserDataInput.js
```

4. You will see the oauth URL in the console. Open the URL in your browser and login with the credentials printed in the console.

Typically, the credentials are:

- Username: `testuserFirstName.testuserLastName`
- Password: `Password&1`

5. You can use the jwt to get the access token.
6. Get the clientPersonId by decoding the jwt using bruno dev tools or any jwt decoder.
7. Run IL PROA pipeline for the clientPersonId using prefect
