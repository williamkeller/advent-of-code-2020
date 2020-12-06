const path = require('path')
const fs = require('fs')

class Loader {

  static dataDir() {
    return path.resolve('./data')
  }


  /**
   * Loads the entire contents of a data file into a single string
   * @param {string} name - Name of the file to load
   * @param {string} dir - The data directory 
   * @return {string} The loaded text data
   **/
  static loadDataFile(name, dir = this.dataDir()) {
    return fs.readFileSync(path.join(dir, name), 'utf8').trim()
  }


  /**
   * Loads a data file that is made up of lines of text.
   * @param {string} name - Name of the file to load (from the data directory)
   * @param {string} sep - The separator used to break up the data
   * @param {string} dir - Data directory (usually only used during testing)
   * @return {array} The loaded text strings
   */
  static loadElements(name, sep, dir = this.dataDir()) {
    return this.loadDataFile(name, dir).split(sep)
  }


  /**
   * Loads a data file that is made up of lines of text.
   * @param {string} name - Name of the file to load (from the data directory)
   * @param {string} dir - Data directory (usually only used during testing)
   * @return {array} The loaded text strings
   */
  static loadLines(name, dir = this.dataDir()) {
    return this.loadElements(name, '\n', dir).map(l => l.trim())
  }


  /**
   * Loads a data file that is made up of lines of numbers, one value per line.
   * @param {string} name - Name of the file to load (from the data directory)
   * @param {string} dir - Data directory (usually only used during testing)
   * @return {array} The loaded numbers
   */
  static loadNumberLines(name, dir = this.dataDir()) {
    return this.loadLines(name, dir).map(x => parseInt(x))
  }


  static loadSeparatedValues(name, sep = ',', dir = this.dataDir()) {
    return this.loadDataFile(name, dir).split(sep)
  }


  static load2dCharArray(name, dir = this.dataDir()) {
    let data = this.loadLines(name, dir)
    return data.map(line => line.split(''))
  }

  static loadTextChunks(name, dir = this.dataDir()) {
    let lines = this.loadLines(name, dir)
    let chunks = []
    let chunk = []

    for(let line of lines) {
      if(line == '') {
        chunks.push(chunk)
        chunk = []
      }
      else {
        chunk.push(line)
      }
    }
    if(chunk.length > 0)
      chunks.push(chunk)

    return chunks
  }
}

module.exports = Loader
