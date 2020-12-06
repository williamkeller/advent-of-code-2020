const Loader = require('./loader')

const SolverBase = require('./solver_base')

class SolverDay01 extends SolverBase {

  constructor(testData = false) {
    super('01', testData)
  }


  loadData() {
    return Loader.loadNumberLines(this.dataFile)
  }


  puzzle1() {
  let input = this.loadData()

  let result = -1
  input.permute2((a, b) => {
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
  input.permute3((a, b, c) => {
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

