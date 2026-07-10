# ArenaPilotAI Backend Fix - TODO

- [x] Refactor Gemini initialization to be lazy (avoid module-load-time invalid key).
- [x] Update `backend/config/gemini.js` to export `getGeminiModel()`.
- [x] Update `backend/services/chatService.js` to use `getGeminiModel()`.
- [x] Update `backend/services/geminiService.js` to use `getGeminiModel()`.
- [x] Run backend and manually verify `/api/chat` no longer falls back to mock.



