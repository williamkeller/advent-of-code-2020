const aoc = require('./aoc')
const SolverBase = require('./solver_base')

class SolverDay02 extends SolverBase {

  constructor(day, testData = false) {
    super(day, testData)
  }


  loadData() {
    return aoc.loadLinesToArray(this.dataFile)
  }


  puzzle1() {
    let data = this.loadData()
    let valid = 0
    let re = /^(\d*)-(\d*) ([a-z]): ([a-z]*)/

    for(let pw of data) {
      let vars = pw.match(re)
      if(vars === null)
        continue


      let min = parseInt(vars[1])
      let max = parseInt(vars[2])
      let pwd = vars[4]
      let char = vars[3]
      let count = 0

      for(let i = 0; i < pwd.length; i++) {
        if(pwd.charAt(i) === char)
          count += 1
      }
      if(count >= min && count <= max) {
        valid += 1
      }
    }
    console.log(`There were ${valid} matching passwords`)
  }


  puzzle2() {
    let data = this.loadData()
    let valid = 0
    let re = /^(\d*)-(\d*) ([a-z]): ([a-z]*)/

    for(let pw of data) {
      let vars = pw.match(re)
      if(vars === null)
        continue

      let a = parseInt(vars[1])
      let b = parseInt(vars[2])
      let pwd = vars[4]
      let char = vars[3]
      let count = 0

      let m = 0
      if(pwd.charAt(a - 1) === char)
        m += 1
      if(pwd.charAt(b - 1) === char)
        m += 1

      if(m === 1)
        valid += 1
    }
    console.log(`There were ${valid} matching passwords`)
  }
}

module.exports = SolverDay02
