const aoc = require('./aoc')
const Loader = require('./loader')
const SolverBase = require('./solver_base')
const util = require('util')


class SolverDay06 extends SolverBase {
  constructor(testData = false) {
    super('06', testData)
  }


  loadData() {
    return Loader.loadLines(this.dataFile)
  }


  puzzle1() {
    let lines = this.loadData()
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
    chunks.push(chunk)

    let total = 0
    let forms = chunks.map((c) => {
      let people = c.length
      let qs = c.join('').split('')
      let questions = [...new Set(qs)].length

      total += questions
    })

    console.log(`total count = ${total}`)
  }


  puzzle2() {
    let lines = this.loadData()
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
    chunks.push(chunk)

    let total = 0

    for(let chunk of chunks) {

      let pcount = 0
      let people = chunk.length
      let answers = chunk.join('').split('')
      let qs = {} 

      for(let a of answers) {
        if(qs[a] === undefined)
          qs[a] = 1
        else
          qs[a] += 1
      }

      for(let [key, value] of Object.entries(qs)) {
        if(value == people)
          pcount += 1
      }

      total += pcount
      // console.log(`people = ${people}, ans = ${answers}  **  ${util.inspect(qs)}`)
    }

    console.log(`total = ${total}`)
  }
}


module.exports = SolverDay06
