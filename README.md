# Hospital-API
API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients.

## Tech Stack
**Server:** Node, Express
**Database:** Mogodb

## Installation
For local setup , please follow below steps:

Clone this repository using the following command: `git clone https://github.com/vizagabhi/Hospital-API.git`

Install the required dependencies using the following command: `$ npm install or npm i`

Start the application using the following command: `$ npm start`

Open the application in your postman app by visiting the following URL: `http://localhost:8000`

## Routes
- /doctors/register → with username and password
- /doctors/login → returns the JWT to be used
- /patients/register
- /patients/:id/create_report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status.

