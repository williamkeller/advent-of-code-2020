const aoc = require('./aoc')
const SolverBase = require('./solver_base')

class SolverDay01 extends SolverBase {

  constructor(testData = false) {
    super('01', testData)
  }


  loadData() {
    return aoc.loadLinesToNumberArray(this.dataFile)
  }


  puzzle1() {
  let input = this.loadData()

  let result = -1
  aoc.permute2(input, (a, b) => {
    if(a + b == 2020) {
      result = a * b
      return true
    }
    else
      return false
  })
  console.log(result)
  }


  puzzle2() {
  let input = this.loadData()

  let result = -1
  aoc.permute3(input, (a, b, c) => {
    if(a + b + c == 2020) {
      result = a * b * c
      return true
    }
    else
      return false
  })
  console.log(result)
  }
}

module.exports = SolverDay01

