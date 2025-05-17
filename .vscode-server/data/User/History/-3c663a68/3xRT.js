// viewer-counter.js
const express = require('express');
const http    = require('http');

const app = express();
let count = 0;

// Increment/decrement on query
app.get('/api/viewers', (req, res) => {
  if (req.query.join === '1') count++;
  if (req.query.join === '0' && count > 0) count--;
  res.json({ viewers: count });
});

// Return current count
app.get('/api/viewers/count', (req, res) => {
  res.json({ viewers: count });
});

const server = http.createServer(app);
server.listen(3001, () => {
  console.log('Viewer counter running on port 3001');
});
