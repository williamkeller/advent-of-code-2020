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

      let qcount = qs.uniq().length

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

      let histogram = answers.histogram()

      for(let [key, value] of Object.entries(histogram)) {
        if(value == groupSize)
          pcount += 1
      }

      total += pcount
    }

    console.log(`total = ${total}`)
  }
}


module.exports = SolverDay06
