const Loader = require('./loader')
const SolverBase = require('./solver_base')


class SolverDay09 extends SolverBase {
  constructor(testData = false) {
    super('09', testData)
  }


  loadData() {
    return Loader.loadNumberLines(this.dataFile)
  }


  findMatchingPairs(list, number) {
    let found = false
    list.permute2((a, b) => {
      if(a + b == number) {
        found = true
        return
      }
    })

    return found
  }


  puzzle1() {
    const preamble = 25
    let data = this.loadData()

    let index = preamble
    while(index < data.length) {
      let slice = data.slice(index - preamble, index)
      let matches = this.findMatchingPairs(slice, data[index])
      if(matches == false) {
        console.log(`${data[index]} doesn't fit`)
        break
      }

      index += 1
    }
  }


  puzzle2() {
    const p1value = 1504371145  // from puzzle1
    let data = this.loadData()

    let index = 0

    while(true) {
      let upper = 1
      let cumulative = data[index]
      let found = false

      while(true) {
        cumulative += data[index + upper]
        if(cumulative == p1value) {
          found = true
          break
        }
        if(cumulative > p1value)
          break

        upper += 1
      }

      if(found) {
        let slice = data.slice(index, index + upper + 1)
        slice.sort((a, b) => { return a - b })

        console.log(`encryption weakness = ${slice[0] + slice[slice.length - 1]}`)
        break
      }
      index += 1
    }
  }
}


module.exports = SolverDay09
