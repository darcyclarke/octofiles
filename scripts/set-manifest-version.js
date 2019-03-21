const fs = require('fs')
const package = require('./package')
const manifest = require('./manifest')
manifest.version = package.version
fs.writeFileSync('./manifest', JSON.stringify(manifest))
