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