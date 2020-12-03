const aoc = require('./aoc')

class SolverBase {
  constructor(day, useTestData = false) {
    this._useTestData = useTestData
    this._day = day
  }

  get day() {
    return this._day
  }

  get dataFile() {
    let test = this._useTestData ? '_test' : ''
    return `day${this.day}${test}.txt`
  }


  puzzle1() {
    console.log('not implemented yet')
  }


  puzzle2() {
    console.log('not implemented yet')
  }


  puzzle3() {
    this.puzzle1()
    this.puzzle2()
  }
}

module.exports = SolverBase
