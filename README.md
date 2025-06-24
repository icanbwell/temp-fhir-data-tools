# FHIR Data Tools

A collection of utility scripts for working with FHIR data.

## Overview

This repository contains tools for manipulating and fixing FHIR data issues, specifically focusing on resolving reference issues between different FHIR resources.

## Scripts

### makeEncounterResolvableInMedDispense.js

This script ensures that Encounter resources referenced in MedicationDispense resources actually exist in the FHIR server. It:

1. Fetches all MedicationDispense resources for a specified patient
2. Extracts Encounter references from the context field and its extensions
3. Checks if each referenced Encounter exists in the FHIR server
4. Creates any missing Encounter resources with a standard template

#### Usage

```bash
node scripts/makeEncounterResolvableInMedDispense.js
```

Before running, make sure to set:

- `env`: The environment (e.g., "staging")
- `accessToken`: A valid OAuth token with appropriate permissions
- `clientFhirPersonId`: The FHIR Person ID to process

## Requirements

- Node.js
- Axios for HTTP requests
