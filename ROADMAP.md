# Roadmap

## Completed

- React frontend built with Vite
- Rule-based risk checker (money requests, urgency, unrealistic pay, sensitive documents, personal email domains)
- Risk level (Low / Medium / High) with the reasons behind it

## In Progress

- Node.js + Express REST API
- Move the risk checker to the backend: `POST /api/analyze`

## Planned

- MongoDB database for community reports
  - `POST /api/reports` – report a suspicious offer
  - `GET /api/reports?company=name` – search reports by company
- Add +3 to the risk score when a company has been reported by other students
- User login, so students can edit or delete their own reports
- Deploy the frontend on Vercel and the backend on Render
- Replace fixed keyword rules with an NLP/ML model
