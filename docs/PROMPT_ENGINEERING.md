# Prompt Engineering

ArenaPilot AI uses structured prompts instead of free-form prompting.

## Objectives

Generate

- Operational Briefings
- Risk Scores
- Crowd Insights
- Emergency Recommendations

---

## Prompt Structure

System Role

↓

Scenario Context

↓

Operational Data

↓

Expected JSON Schema

---

## Example

You are an AI Stadium Operations Commander.

Analyze the following scenario and generate operational recommendations.

Return ONLY valid JSON.

Scenario:

- Stadium: Lusail Stadium
- Crowd: 48000
- Weather: Clear
- Incident: Crowd Congestion

---

## AI Output

- Risk Score
- Crowd Status
- AI Briefing
- Recommended Actions
- Gate Suggestions
- Medical Recommendation
- Security Recommendation

---

## Hallucination Prevention

- Strict JSON
- Temperature control
- Output validation
- Fallback responses

---

## Prompt Optimization

- Context-first prompting
- Schema enforcement
- Domain-specific terminology
- Operational reasoning