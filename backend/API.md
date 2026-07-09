# ArenaPilot AI Backend API

Base URL

```
http://localhost:5000/api
```

---

# Health Check

## GET

```
/health
```

### Response

```json
{
  "success": true,
  "message": "ArenaPilot API is running."
}
```

---

# Analyze Stadium Scenario

## POST

```
/analyze
```

### Headers

```
Content-Type: application/json
```

---

## Request Body

```json
{
  "eventName": "India vs Australia",
  "eventType": "Football Match",
  "attendance": 72000,
  "weather": "Storm",
  "gateA": 90,
  "gateB": 70,
  "gateC": 45,
  "gateD": 65,
  "accessibilityRequired": true,
  "medicalIncident": true,
  "securityIncident": false,
  "emergencyMode": false
}
```

---

## Success Response

```json
{
  "success": true,
  "generatedAt": "...",
  "dashboard": {
    "overallScore": 78,
    "overallStatus": "High Alert",
    "summary": []
  },
  "analysis": {
    "crowd": {},
    "risk": {},
    "route": {},
    "accessibility": {},
    "transport": {},
    "sustainability": {}
  },
  "aiBriefing": "# Executive Summary..."
}
```

---

## Validation Error

```json
{
  "success": false,
  "message": "Invalid scenario data.",
  "errors": {}
}
```

---

## Rate Limit

```json
{
  "success": false,
  "message": "Too many requests. Please try again after a few minutes."
}
```

---

# Backend Flow

```
Client

↓

POST /api/analyze

↓

Scenario Validator

↓

Analysis Service

↓

Crowd Engine

↓

Risk Engine

↓

Route Engine

↓

Accessibility Engine

↓

Transport Engine

↓

Sustainability Engine

↓

Gemini / Mock AI

↓

Response Formatter

↓

JSON Response
```