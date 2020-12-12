const Loader = require('./loader')
const SolverBase = require('./solver_base')


class SolverDay12 extends SolverBase {
  constructor(testData = false) {
    super('12', testData)
  }


  loadData() {
    return Loader.loadLines(this.dataFile)
  }


  puzzle1() {
    let data = this.loadData()
    let shipDir = 1
    let ewCoord = 0
    let nsCoord = 0

    for(let cmd of data) {
      let dir = cmd[0]
      let amount = parseInt(cmd.slice(1))

      switch(dir) {
        case 'F':
          switch(shipDir) {
            case 1:
              ewCoord += amount
              break
            case 3:
              ewCoord -= amount
              break
            case 0:
              nsCoord += amount
              break
            case 2:
              nsCoord -= amount
              break
          }
          break
        case 'L':
          shipDir -= (amount / 90)
          if(shipDir < 0)
            shipDir += 4
          break
        case 'R':
          shipDir += (amount / 90)
          if(shipDir > 3)
            shipDir -= 4
          break
        case 'N':
          nsCoord += amount
          break
        case 'S':
          nsCoord -= amount
          break
        case 'E':
          ewCoord += amount
          break
        case 'W':
          ewCoord -= amount
          break
      }
    }

    let dist = Math.abs(ewCoord) + Math.abs(nsCoord)
    console.log(`Distance = ${dist}`)
  }


  puzzle2() {
    let data = this.loadData()
    let shipDir = 1
    let ewCoord = 0
    let nsCoord = 0

    let w_ewCoord = 10
    let w_nsCoord = 1

    for(let cmd of data) {
      let dir = cmd[0]
      let amount = parseInt(cmd.slice(1))

      let ewtmp, nstmp, angle

      switch(dir) {
        case 'F':
          ewCoord += w_ewCoord * amount
          nsCoord += w_nsCoord * amount
          break
        case 'L':
          angle = (amount / 90)
          for(let i = 0; i < angle; i++) {
            ewtmp = w_ewCoord
            nstmp = w_nsCoord

            w_nsCoord = ewtmp
            w_ewCoord = -nstmp
          }
          break
        case 'R':
          angle = (amount / 90)
          for(let i = 0; i < angle; i++) {
            ewtmp = w_ewCoord
            nstmp = w_nsCoord

            w_nsCoord = -ewtmp
            w_ewCoord = nstmp
          }
          break
        case 'N':
          w_nsCoord += amount
          break
        case 'S':
          w_nsCoord -= amount
          break
        case 'E':
          w_ewCoord += amount
          break
        case 'W':
          w_ewCoord -= amount
          break
      }
    }

    let dist = Math.abs(ewCoord) + Math.abs(nsCoord)
    console.log(`Distance = ${dist}`)
  }
}


module.exports = SolverDay12
