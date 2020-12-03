const path = require('path')
const fs = require('fs')


function dataDir() {
  return path.resolve('./data')
}


function loadDataFile(name, dir = dataDir()) {
  return fs.readFileSync(path.join(dir, name), 'utf8')
}


/**
 * Loads a data file that is made up of lines of text.
 * @param {string} name - Name of the file to load (from the data directory)
 * @param {string} dir - Data directory (usually only used during testing)
 * @return {array} The loaded text strings
 */
export function loadLinesToArray(name, dir = dataDir()) {
  return loadDataFile(name, dir).split('\n')
}


/**
 * Loads a data file that is made up of lines of numbers, one value per line.
 * @param {string} name - Name of the file to load (from the data directory)
 * @param {string} dir - Data directory (usually only used during testing)
 * @return {array} The loaded numbers
 */
export function loadLinesToNumberArray(name, dir = dataDir()) {
  return loadLinesToArray(name, dir).map(x => parseInt(x))
}


export function loadSeparatedValues(name, sep = ',', dir = dataDir()) {
  return loadDataFile(name, dir).split(sep)
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


export function padDay(day) {
  let str = day.toString()
  if(str.length == 1)
    return `0${str}`
  else
    return str
}
