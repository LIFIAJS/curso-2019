const http = require('http')

const server = http.createServer((req, res) => {
  res.end('First server')
})

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 bad Request')
})

server.listen(9000)