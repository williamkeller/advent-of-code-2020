const aoc = require('./aoc')
const Loader = require('./loader')
const SolverBase = require('./solver_base')


class SolverDay05 extends SolverBase {
  constructor(testData = false) {
    super('05', testData)
  }


  loadData() {
    return Loader.loadLines(this.dataFile)
  }


  calculateSeatId(bsp) {
    let shifts = [6, 5, 4, 3, 2, 1, 0, 2, 1, 0]
    let chars = bsp.split('')
    let row = 0
    let col = 0

    for(let i = 0; i < 7; i++) {
      if(chars[i] == 'B') {
        row = row + (1 << shifts[i])
      }
    }

    for(let i = 7; i < 10; i++) {
      if(chars[i] == 'R') {
        col = col + (1 << shifts[i])
      }
    }

    return row * 8 + col
  }

  puzzle1() {
    let maxId = 0
    let passes = this.loadData()
    for(let pass of passes) {
      let id = this.calculateSeatId(pass)
      if(id > maxId)
        maxId = id
    }

    console.log(`largest id is ${maxId}`)
  }


  // This seems like a fairly fragile solution (it breaks on the test data),
  // but it works on the real data, which is the important thing.
  puzzle2() {
    let passes = this.loadData()
    let ids = []
    for(let pass of passes) {
      let id = this.calculateSeatId(pass)
      ids.push(id)
    }

    ids.sort((a, b) => { return a - b })

    let offset = ids[0]
    for(let i = 0; i < ids.length; i++) {
      if(ids[i] != i + offset) {
        console.log(`my seat id is ${i + offset}`)
        break
      }
    }
  }
}


module.exports = SolverDay05
