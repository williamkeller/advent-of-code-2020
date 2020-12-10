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
    let data = this.loadData()
    data.unshift(0)
    data.push(data[data.length - 1] + 3)
    let runs = []

    let index = 1
    let inRun = (data[0] == 1)
    let runStart = 1

    while(index < data.length) {
      let diff = data[index] - data[index - 1]

      if(diff == 1) {
        if(!inRun) {
          inRun = true
          runStart = index
        }
      } else {
         if(inRun) {
           inRun = false
           runs.push([runStart - 1, index])
         }
      }
      index += 1
    }

    let total = 1
    for(let run of runs) {
      let len = run[1] - run[0]
      switch(len) {
        case 2:
          break
        case 3: 
          total *= 2  // worked out by hand
          break
        case 4:
          total *= 4  // worked out by hand
          break
        case 5:
          total *= 7  // worked out by hand
          break
        default:
          throw `unexpected value ${len}`
      }
    }

    console.log(total)
  }
}


module.exports = SolverDay10
