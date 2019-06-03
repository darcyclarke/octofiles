const fs = require('fs')
const path = require('path')
const package = require('../package')
const manifest = require('../src/manifest')
console.log('Updating version:', manifest.version, 'to', package.version)
manifest.version = package.version
fs.writeFileSync(path.resolve(__dirname, '../src/manifest.json'), JSON.stringify(manifest, null, 2))
