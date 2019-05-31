## Backend

----

## NodeJS

NodeJs es un entorno de ejecución para JavaScript construido con el motor de [JavaScript V8 de Chrome](https://v8.dev/).

Se abre el abanico de posiblidades para JS.

----

Ahora se tiene la posibilidad de desarrollar proyectos FullStack JS.

----

Uso de la libreria `http` de node para atender requests en un servidor.

CODE: backend/http/first.js javascript editable

----

### Un ejemplo un poco más complejo

CODE: backend/http/second.js javascript editable

----

## Problemas a futuro

# Modelo de backend

----

## Parse URL

```javascript
function getQueryParams(url) {
  const query = url.substr(1)
  const result = {}
  
  return query.split("&").reduce((params, part) => {
    const item = part.split("=")
    
    return {
      ...params,
      [item[0]]: decodeURIComponent(item[1]),
    }
  }, {})
}

console.log(getQueryParams("?v=123&p=hello"))
```

----

## Usando RegExp

```javascript
function getQueryParams(url) {
  var match
  
  const regex = /[?&]([^=#]+)=([^&#]*)/g
  const params = {}

  while(match = regex.exec(url)) {
    params[match[1]] = decodeURIComponent(match[2])
  }

  return params
}

getQueryParams("www.domain.com/?v=123&p=hello")
```

----

## Body Parser

```javascript
const qs = require('querystring')

[...]

function (req, res) {
  if (req.method === 'POST') {
    var body = ''

    req.on('data', function(data) {
      body += data
      // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
      if (body.length > 1e6) {
        body = ''
        // FLOOD ATTACK OR FAULTY CLIENT, NUKE req
        req.connection.destroy()
      }
    })

    req.on('end', function() {
      const POST = qs.parse(body)
      console.log(POST)
    })
  }
}

[...]
```

----

## Usando Callbacks

```javascript
const http = require('http')
const qs = require('querystring')

function processPost(req, res, next) {
  var body = ''
  
  if(typeof next !== 'function') return null

  if(req.method == 'POST') {
    req.on('data', function(data) {
        body += data

        if(body.length > 1e6) {
            body = ''
            res.writeHead(413, {'Content-Type': 'text/plain'}).end()
            req.connection.destroy()
        }
    })

    req.on('end', function() {
        req.body = qs.parse(body)
        next()
    })
  } else {
      res.writeHead(405, {'Content-Type': 'text/plain'})
      res.end()
  }
}

http.createServer(function(req, res) {
  if(req.method == 'POST') {
    processPost(req, res, function() {
      console.log(req.body)
      // Use req.body here

      res.writeHead(200, 'OK', {'Content-Type': 'text/plain'})
      res.end()
    })
  } else {
    res.writeHead(200, 'OK', {'Content-Type': 'text/plain'})
    res.end()
  }

}).listen(8000)
```

----

Hacer todo el servidor a mano, puede ser costoso dependiendo
la complejidad de la aplicación.

Para esto contamos con diferentes librerias que nos proporcionan distinttas funcionalidades para resolver cada uno de los problemas.

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

CODE: backend/express/first.js javascript editable

----

## Segundo ejemplo

CODE: backend/express/second.js javascript editable

----

### Comparativa http vs express

Como podemos notar a simple vista, el código con express queda
más simple, y de regalo tenemos ciertas funcionalidades ya resueltas.