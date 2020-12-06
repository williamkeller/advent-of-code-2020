const Loader = require('./loader')
const SolverBase = require('./solver_base')
const util = require('util')


class SolverDay06 extends SolverBase {
  constructor(testData = false) {
    super('06', testData)
  }


  loadData() {
    return Loader.loadTextChunks(this.dataFile)
  }


  puzzle1() {
    let chunks = this.loadData()
    let total = 0
    for(let c of chunks) {
      let qs = c.join('').split('')

      // What a stupid way to do this. Javascript arrays don't have a 'unique'
      // function? You have to use Set instead? Just dumb.
      let qcount = [...new Set(qs)].length

      total += qcount
    }

    console.log(`total count = ${total}`)
  }


  puzzle2() {
    let chunks = this.loadData()
    let total = 0

    for(let chunk of chunks) {

      let pcount = 0
      let groupSize = chunk.length
      let answers = chunk.join('').split('')
      let qs = {}

      for(let a of answers) {
        if(qs[a] === undefined)
          qs[a] = 1
        else
          qs[a] += 1
      }

      // Figuring out this pattern was the only bright spot of the night
      for(let [key, value] of Object.entries(qs)) {
        if(value == groupSize)
          pcount += 1
      }

      total += pcount
    }

    console.log(`total = ${total}`)
  }
}


module.exports = SolverDay06
