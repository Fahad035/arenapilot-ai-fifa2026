# System Architecture

ArenaPilot AI follows a modern client-server architecture.

```
                +----------------------+
                |     React Frontend   |
                +----------+-----------+
                           |
                    REST API Calls
                           |
                +----------v-----------+
                |   Express Backend    |
                +----------+-----------+
                           |
        +------------------+------------------+
        |                                     |
+-------v-------+                    +--------v--------+
| Google Gemini |                    | Firebase / Mock |
+---------------+                    +-----------------+
```

## Frontend

- React
- Vite
- TailwindCSS
- Framer Motion
- React Icons
- Axios

---

## Backend

- Express.js
- Node.js
- REST API
- Zod Validation

---

## AI Layer

Google Gemini

Responsibilities

- Risk Analysis
- Crowd Prediction
- Operational Recommendations
- AI Briefings

---

## Data Flow

User

↓

Scenario Builder

↓

REST API

↓

Validation

↓

Gemini AI

↓

Structured JSON

↓

Dashboard Visualization

---

## Components

Dashboard

- Overview
- Crowd Intelligence
- AI Briefings
- Gate Management
- Alerts
- Navigator
- AI Assistant
- History

---

## Deployment

Frontend

Vercel

Backend

Render

AI

Google Gemini API

Database

Firebase / Mock Services