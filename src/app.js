// @ts-check
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

const PORT = 5006

const chatRoom = io.of('/chatRoom')

app.get('/', (req, res) => {
  console.log(req.query)
  res.json({
    server: 'ChatSocketServer',
  })
})

chatRoom.on('connection', (socket) => {
  console.log('A user connected in the chatRoom')

  socket.on('disconnect', () => {
    socket.disconnect()
    console.log('The client has disconnected')
  })
})

server.listen(PORT, () => {
  console.log(`Server Listening at port: ${PORT}`)
})
