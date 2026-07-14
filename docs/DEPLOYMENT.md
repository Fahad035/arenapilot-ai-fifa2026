# Deployment Guide

ArenaPilot AI is deployed using modern cloud platforms.

---

# Frontend

Platform

Vercel

Build Command

```
npm run build
```

Output Directory

```
dist
```

Environment Variables

```
VITE_API_URL=
```

---

# Backend

Platform

Render

Start Command

```
npm start
```

Environment Variables

```
PORT=

GEMINI_API_KEY=
```

---

# Local Development

Frontend

```
cd frontend

npm install

npm run dev
```

Backend

```
cd backend

npm install

npm start
```

---

# Deployment Flow

Developer

↓

GitHub

↓

Vercel (Frontend)

↓

Render (Backend)

↓

Google Gemini

---

# Production Checklist

✅ Environment Variables

✅ API Connected

✅ Gemini Configured

✅ HTTPS Enabled

✅ Build Successful

✅ No Console Errors

---

# Future Deployment

- Docker
- Kubernetes
- Google Cloud Run
- Azure
- AWS
