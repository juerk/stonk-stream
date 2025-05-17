// viewer-counter.js
const express = require('express');
const http    = require('http');
const app     = express();

// Keep track of active sessions
const sessions = new Set();

function handleViewer(req, res) {
  const join    = req.query.join;
  const session = req.query.session;
  if (!session) return res.status(400).json({ error: 'session required' });

  if (join === '1') {
    sessions.add(session);
  } else if (join === '0') {
    sessions.delete(session);
  }

  return res.json({ viewers: sessions.size });
}

// Both GET and POST for /api/viewers
app.get('/api/viewers',    handleViewer);
app.post('/api/viewers',   handleViewer);

// Return current count
app.get('/api/viewers/count', (req, res) => {
  res.json({ viewers: sessions.size });
});

const server = http.createServer(app);
server.listen(3001, () => {
  console.log('Viewer counter running on port 3001');
});
