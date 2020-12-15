const Loader = require('./loader')
const SolverBase = require('./solver_base')


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

    while(len < 2020) {
      let cur = guesses[0]
      let i = guesses.slice(1).indexOf(cur)
      if(i == -1)
        guesses.unshift(0)
      else {
        guesses.unshift(len - (len - i) + 1)
      }

      if(len > 2000)
        guesses.pop()

      len += 1

    }

    console.log(`final number: ${guesses[0]}`)

  }


  puzzle2() {
    let input = this.loadData().map(x => parseInt(x))
    let guesses = []

    for(let g of input) {
      guesses.unshift(g)
    }

    let len = guesses.length 

    while(len < 2020) {
      let cur = guesses[0]
      let i = guesses.slice(1).indexOf(cur)
      if(i == -1)
        guesses.unshift(0)
      else {
        guesses.unshift(len - (len - i) + 1)
      }

      // if(len > 2000)
      //   guesses.pop()

      len += 1
    }

    console.log(guesses.reverse().join(','))
    console.log(`final number: ${guesses[0]}`)

  }
}


module.exports = SolverDay15
