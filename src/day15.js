const Loader = require('./loader')
const SolverBase = require('./solver_base')
const util = require('util')


class SolverDay15 extends SolverBase {
  constructor(testData = false) {
    super('15', testData)
  }


  loadData() {
    return Loader.loadLines(this.dataFile)[0].split(',')
  }


  puzzle1() {
    let input = this.loadData().map(x => parseInt(x))
    let guesses = []

    for(let g of input) {
      guesses.unshift(g)
    }

    let len = guesses.length

    while(len < 10) {
      let cur = guesses[0]
      let i = guesses.slice(1).indexOf(cur)
      if(i == -1) {
        guesses.unshift(0)
      } else {
        guesses.unshift(len - (len - i) + 1)
      }

      if(len > 2000)
        guesses.pop()

      len += 1
    }
    console.log(guesses)
    console.log(`final number: ${guesses[0]}`)

  }


  puzzle2() {
    let input = this.loadData().map(x => parseInt(x))
    let guesses = {}

    for(let i = 0; i < input.length - 1; i++) {
      guesses[input[i]] = i
    }

    let i = input.length - 1

    const loop_count = 30000000

    let last = input[i]

    while(i < loop_count - 1) {
      let newLast

      let l = guesses[last]
      if(l != undefined) {
        newLast = i - l
      } else {
        newLast = 0
      }

      guesses[last] = i
      last = newLast
      i += 1
    }
    console.log(last)
  }
}


module.exports = SolverDay15
