const Loader = require('./loader')
const SolverBase = require('./solver_base')


class SolverDay10 extends SolverBase {
  constructor(testData = false) {
    super('10', testData)
  }


  loadData() {
    return Loader.loadNumberLines(this.dataFile).sort((a, b) => {
      return a - b
    })
  }


  puzzle1() {
    let data = this.loadData()
    let device = data[data.length - 1] + 3

    console.log(data)
    console.log(data.length)

    let one_count = 0
    let three_count = 0

    if(data[0] == 1)
      one_count += 1
    else
      three_count += 1

    if(data[data.length - 1] == 1)
      one_count += 1
    else
      three_count += 1

    let index = 1
    while(index < data.length) {
      if(data[index] - data[index - 1] == 1)
        one_count += 1
      else
        three_count += 1

      index += 1
    }

    console.log(`1s = ${one_count}, 3s = ${three_count}`)
    console.log(one_count * three_count)

  }


  puzzle2() {

  }
}


module.exports = SolverDay10
