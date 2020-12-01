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


export function permute2(array, callback) {
  let len = array.length
  for(let i = 0; i < len - 1; i++) {
    for(let j = i + 1; j < len; j++) {
      if(callback(array[i], array[j]) == true)
        return
    }
  }
}


export function permute3(array, callback) {
  let len = array.length
  for(let i = 0; i < len - 2; i++) {
    for(let j = i + 1; j < len - 1; j++) {
      for(let k = j + 1; k < len; k++) {
        if(callback(array[i], array[j], array[k]) == true)
          return
      }
    }
  }
}
