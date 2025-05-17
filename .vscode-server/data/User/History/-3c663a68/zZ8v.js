// viewer-counter.js
const express = require('express');
const http = require('http');
const app = express();

// Track sessions in a Set for accurate join/leave
const sessions = new Set();

app.use(express.json());

// Unified handler for join/leave
function handleViewer(req, res) {
  const data = req.method === 'POST' ? req.body : req.query;
  const { join, session } = data;
  if (!session) return res.status(400).json({ error: 'session required' });

  if (join === '1') {
    if (!sessions.has(session)) {
      sessions.add(session);
    }
  } else if (join === '0') {
    if (sessions.has(session)) {
      sessions.delete(session);
    }
  }

  // Current count is size of sessions Set
  res.json({ viewers: sessions.size });
}

// Accept both GET and POST on /api/viewers
app.get('/api/viewers', handleViewer);
app.post('/api/viewers', handleViewer);

// Count endpoints
app.get('/api/viewers/count', (req, res) => {
  res.json({ viewers: sessions.size });
});
app.post('/api/viewers/count', (req, res) => {
  res.json({ viewers: sessions.size });
});

// Start HTTP server
const server = http.createServer(app);
server.listen(3001, () => {
  console.log('Viewer counter running on port 3001');
});
