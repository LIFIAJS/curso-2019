#!/usr/bin/env node
const http = require('http')

const port = parseInt(process.argv[2]) || 9000

/**
 * 
 * @param {String} url Es la url
 * 
 * @returns {Array} Par Datos, Estado de la respuesta
 */
function router(url) {
  switch(url) {
    case '/': 
    {
      return [ 'index', 200 ]
    }

    case '/text':
    {
      return [ 'Hola\nEsto es texto plano', 200 ]
    }

    case '/json':
    {
      return [ 
        JSON.stringify({
        status: 200,
        data: {
          header: 'Hola',
          parragraph: 'Esto es un JSON'
        }
      }), 200 ]
    }

    case '/html':
    {
      return [
        `<h1>Hola</h1>
<p>
  Esto es un HTML
</p>`,
        200
      ]
    }

    default:
    {
      return [ 'HTTP/1.1 404 Not Found', 404 ]
    }
  }
}

const server = http.createServer((req, res) => {
  const [ data, status ] = router(req.url)
  res.statusCode = status
  res.end(data)
})

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request')
})

console.log(`Starting server on ${port}`)

server.listen(port)