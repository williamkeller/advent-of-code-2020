const Loader = require('./loader')
const SolverBase = require('./solver_base')


class SolverDay13 extends SolverBase {
  constructor(testData = false) {
    super('13', testData)
  }


  loadData() {
    return Loader.loadLines(this.dataFile)
  }


  puzzle1() {
    let data = this.loadData()
    let timestamp = parseInt(data[0])
    let ids = data[1].split(',').filter(x => x != 'x').map(y => parseInt(y))

    let times = ids.map((id) => {
      let cycles = Math.floor(timestamp / id)
      let time = (cycles + 1) * id
      return [id, time]
    })

    let sorted = times.sort((a, b) => { return a[1] - b[1] })
    let minutes = sorted[0][1] - timestamp
    console.log(sorted[0][0] * minutes)
  }


  puzzle2() {
    let data = this.loadData()
    let routes = data[1].split(',').map((x, i) => {
      return [parseInt(x), i]
    }).filter(x => isNaN(x[0]) == false)

    console.log(routes)

    let time  = 1
    let stride = 1

    for(let route of routes) {
      while(true) {
        time += stride
        if((time + route[1]) % route[0] == 0) {
          break
        }
      }
      stride = stride * route[0]
    }

    console.log(`time: ${time}`)
  }
}


module.exports = SolverDay13
