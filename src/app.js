// @ts-check
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

const PORT = 5006

app.get('/', (req, res) => {
  console.log(req.query)
  res.json({
    server: 'ChatSocketServer',
  })
})

server.listen(PORT, () => {
  console.log(`Server Listening at port: ${PORT}`)
})
