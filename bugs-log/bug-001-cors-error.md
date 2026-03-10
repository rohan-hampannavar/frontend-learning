# Bug 001 - CORS Error

## What broke
Frontend (localhost:5173) could not reach backend (localhost:5000). Browser blocked the request.

## Why
Server had no CORS headers. Browser enforces same-origin policy.

## Fix
```js
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:5173' }));
```

## Lesson
CORS is a browser security feature. The server opts in. In production set origin to your deployed client URL.
