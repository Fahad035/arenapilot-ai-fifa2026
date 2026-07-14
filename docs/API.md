# API Documentation

ArenaPilot AI exposes RESTful APIs that power the operational dashboard and AI-assisted decision support.

---

## Base URL

Development

```
http://localhost:5000/api
```

Production

```
https://your-backend.onrender.com/api
```

---

# Endpoints

## Analyze Stadium Scenario

### POST

```
POST /analyze
```

### Description

Analyzes a stadium operation scenario and generates AI-powered recommendations.

### Request

```json
{
  "stadium": "Lusail Stadium",
  "match": "England vs France",
  "attendance": 48000,
  "weather": "Clear",
  "incident": "Crowd Congestion",
  "priority": "High",
  "notes": "Heavy congestion near Gate C"
}
```

### Successful Response

```json
{
  "success": true,
  "riskLevel": "High",
  "crowdDensity": "84%",
  "recommendedGate": "Gate D",
  "estimatedDelay": "12 min",
  "aiBriefing": "...",
  "recommendations": [
    "...",
    "...",
    "..."
  ]
}
```

---

## AI Assistant

### POST

```
POST /assistant
```

### Description

Allows users to ask operational questions about the current stadium scenario.

---

## Health Check

### GET

```
GET /health
```

Response

```json
{
  "status":"ok"
}
```

---

# Status Codes

| Code | Meaning |
|------|----------|
|200|Success|
|400|Invalid Input|
|404|Not Found|
|500|Internal Server Error|

---

# Authentication

Currently no authentication is required.

Future versions will support

- JWT
- Firebase Authentication
- OAuth

---

# AI Response Validation

All AI responses are validated before being displayed.

Fallback responses are automatically generated if:

- Gemini quota exceeded
- Invalid JSON returned
- API timeout
- Network failure
