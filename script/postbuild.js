#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, '..', 'index.html')

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err

    fs.writeFileSync(filePath, data.replace('_assets/src/', ''))
})