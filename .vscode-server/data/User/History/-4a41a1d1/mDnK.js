// /root/viewer-counter.js
import express from 'express'
import http from 'http'

const app = express()
let count = 0

// increment or decrement depending on query
app.get('/api/viewers', (req, res) => {
  if (req.query.join === '1') count++
  if (req.query.join === '0' && count > 0) count--
  res.json({ viewers: count })
})

// status check
app.get('/api/viewers/count', (req, res) => {
  res.json({ viewers: count })
})

const server = http.createServer(app)
server.listen(3001, () => {
  console.log('Viewer counter running on port 3001')
})
