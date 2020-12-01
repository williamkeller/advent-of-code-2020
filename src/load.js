// Data file loaders
const path = require('path')
const fs = require('fs')

const DATA_DIR = path.resolve('./data')

export function loadLinesToNumberArray(name) {
  return fs.readFileSync(path.join(DATA_DIR, name), 'utf8')
           .split('\n').map(x => parseInt(x))
}

