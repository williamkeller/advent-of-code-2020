const Loader = require('./loader')
const SolverBase = require('./solver_base')


class SolverDay17 extends SolverBase {
  constructor(testData = false) {
    super('17', testData)
  }


  loadData() {
    return Loader.load2dCharArray(this.dataFile)
  }

  // neighbors for a single cell
  neighborMap3D(x, y, z) {
    let map = []

    for(let xoff = -1; xoff < 2; xoff++) {
      for(let yoff = -1; yoff < 2; yoff++) {
        for(let zoff = -1; zoff < 2; zoff++) {
          map.push([x = xoff, y + yoff, z + zoff])
        }
      }
    }

    // don't include the current cell
    map.splice(map.indexOf([x, y, z]), 1)

    return map
  }

  step(cube) {
    let newCube = {}

    for(let [k, v] of Object.entries(cube)) {
      let [x, y, z] = k.split(',').map(x => parseInt(x))
      // console.log(`looking at ${x}, ${y}, ${z}`)

      let neighbors = this.neighborMap3D(x, y, z)
      let ncount = neighbors.map(([nx, ny, nz]) => {
        let coords = [nx, ny, nz].toString()
        let n = cube[coords]
        if(n == undefined) {
          cube[coords] = '.'
          return false
        }
        else if(n == '.')
          return false

        else
          return true

      }).reduce((acc, n) => {
        return n == true ? acc + 1 : acc
      }, 0)

      // console.log(x, y, z, ncount)
      if(v == '.' && ncount == 3)
        newCube[[x, y, z]] = '#'
      else if(v == '#' && (ncount == 2 || ncount == 3))
        newCube[[x, y, z]] = '#'
      else
        newCube[[x, y, z]] = '.'
    }
    return newCube
  }

  puzzle1() {
    let data = this.loadData(this.dataFile)
    let cube = {}

    for(let y = 0; y < data.length; y++) {
      for(let x = 0; x < data[y].length; x++) {
        cube[[x, y, 0]] = data[y][x]
      }
    }

    console.log(cube)
    let newCube = this.step(cube)

    console.log(newCube)
  }


  puzzle2() {

  }
}


module.exports = SolverDay17
