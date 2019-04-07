/**
 * @file A barrel to merge all config files in one module
 * @version 0.1.0
 */

const fs = require('fs')

const config = {}

const entries = fs.readdirSync(__dirname).filter(entry => entry.lastIndexOf('.js') !== -1 && entry !== 'index.js')
for (const entry of entries) {
  const name = entry.split('.')[0]

  config[name] = require(require.resolve(name, {
    paths: [
      __dirname
    ]
  }))
}

module.exports = exports = config
