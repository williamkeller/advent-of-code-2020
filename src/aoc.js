const path = require('path')
const fs = require('fs')


function dataDir() {
  return path.resolve('./data')
}

/**
 * Loads a data file that is made up of lines of text.
 * @param {string} name - Name of the file to load (from the data directory)
 * @param {string} dir - Data directory (usually only used during testing)
 * @return {array} The loaded text strings
 */
export function loadLinesToArray(name, dir = dataDir()) {
  return fs.readFileSync(path.join(DATA_DIR, name), 'utf8').split('\n')
}


/**
 * Loads a data file that is made up of lines of numbers, one value per line.
 * @param {string} name - Name of the file to load (from the data directory)
 * @param {string} dir - Data directory (usually only used during testing)
 * @return {array} The loaded numbers
 */
export function loadLinesToNumberArray(name, dir = dataDir()) {
  return loadLinesToArray(name).map(x => parseInt(x))
}


/**
 * Calls a callback for every two element permutation of the array
 * @param {array} array - The array to permute
 * @param {callback} callback - (object1, object2)
 **/
export function permute2(array, callback) {
  let len = array.length
  for(let i = 0; i < len - 1; i++) {
    for(let j = i + 1; j < len; j++) {
      if(callback(array[i], array[j]) == true)
        return
    }
  }
}


/**
 * Calls a callback for every three element permutation of the array
 * @param {array} array - The array to permute
 * @param {callback} callback - (object1, object2)
 **/
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
