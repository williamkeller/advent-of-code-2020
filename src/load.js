// Data file loaders
const path = require('path')
const fs = require('fs')

const DATA_DIR = path.resolve('./data')

/**
 * Loads a data file that is made up of lines of numbers, one value per line.
 * @param {string} name - Name of the file to load (from the data directory)
 * @return {array} The loaded numbers
 */
export function loadLinesToNumberArray(name) {
  return fs.readFileSync(path.join(DATA_DIR, name), 'utf8')
           .split('\n').map(x => parseInt(x))
}

