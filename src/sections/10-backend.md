## Backend

----

### NodeJS



El engine de Chrome (V8) ahora corre fuera de una navegador

Se abre el abanico de posiblidades para JS

----

Posibilidad de proyectos Full Stack JS

Uso de la libreria `http` de node para atender requests en un servidor

```javascript
const http = require('http')

const server = http.createServer((req, res) => {
  res.end('First server')
})

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 bad Request')
})

server.listen(9000)
```

----

### Un ejemplo un poco más complejo

```javascript
const http = require('http')

const port = parseInt(process.argv[2]) || 9000

/**
 * 
 * @param {String} url Es la url
 * 
 * @returns {Array<String,Number>} Par Datos, Estado de la respuesta
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
        `
          <h1>Hola</h1>
          <p>
            Esto es un HTML
          </p>
        `,
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
```

----

Hacer todo el servidor a mano, puede ser costoso dependiendo
la complejidad de la aplicación

Para esto contamos con diferentes frameworks que nos
solucionan bastantes cosas, como por ejemplo

----

## Frameworks backend

- express
- sails
- ...

En este curso se va a explicar el uso de `express`

----

## Express

Cuenta con una amplia variedad de funcionalidades interesantes,
como lo son, diferentes motores de plantillas (como también
escribir el tuyo propio), middlewares, manejadores de errores,
entre otros

Reescribamos los mismos ejemplos de los servidores con express

----

## Servidor simple

```javascript
const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('First express server'))

app.listen(9000, () => console.log('Listening on port 9000'))
```

----

## Segundo ejemplo

```javascript
#!/usr/bin/env node
const express = require('express')

const app = express()

const port = parseInt(process.argv[2]) || 9000

app.get('/', (req, res) => res.send('index'))
app.get('/text', (req, res) => res.send('Hola\nEsto es texto plano'))
app.get('/json', (req, res) => res.send({
  status: 200,
  data: {
    header: 'Hola',
    parragraph: 'Esto es un JSON'
  }
}))

app.get('/html', (req, res) => res.send(`<h1>Hola</h1>
<p>
  Esto es un HTML
</p>`))

app.listen(port, () => console.log(`Listening on port ${port}`))
```

----

### Comparativa http vs express

Como podemos notar a simple vista, el código con express queda
más simple, y de regalo tenemos ciertas funcionalidades ya resueltas.