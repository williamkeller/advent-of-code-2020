const Loader = require('./loader')
const SolverBase = require('./solver_base')
const util = require('util')


class SolverDay17 extends SolverBase {
  constructor(testData = false) {
    super('17', testData)
  }


  loadData() {
    return Loader.load2dCharArray(this.dataFile)
  }


  neighbors(coord) {
    let [x, y, z] = coord.split(':').map(x => parseInt(x))
    return [
      [x - 1, y - 1, z - 1],
      [x - 1, y,     z - 1],
      [x - 1, y + 1, z - 1],

      [x,     y - 1, z - 1],
      [x,     y,     z - 1],
      [x,     y + 1, z - 1],

      [x + 1, y - 1, z - 1],
      [x + 1, y,     z - 1],
      [x + 1, y + 1, z - 1],

      [x - 1, y - 1, z    ],
      [x - 1, y,     z    ],
      [x - 1, y + 1, z    ],

      [x,     y - 1, z    ],
//      [x,     y,     z    ],
      [x,     y + 1, z    ],

      [x + 1, y - 1, z    ],
      [x + 1, y,     z    ],
      [x + 1, y + 1, z    ],

      [x - 1, y - 1, z + 1],
      [x - 1, y,     z + 1],
      [x - 1, y + 1, z + 1],

      [x,     y - 1, z + 1],
      [x,     y,     z + 1],
      [x,     y + 1, z + 1],

      [x + 1, y - 1, z + 1],
      [x + 1, y,     z + 1],
      [x + 1, y + 1, z + 1],
    ]
  }


  expand(cube) {
    let coords = Array.from(cube.keys())

    for(let coord of coords) {
      let neighbors = this.neighbors(coord)

      for(let n of neighbors) {
        n = n.join(':')
        if(cube.has(n) == false) {
          cube.set(n, '.')
        }
      }
    }
    return cube
  }


  step(cube) {
    let coords = Array.from(cube.keys())
    let newCube = new Map()

    for(let coord of coords) {
      let count = 0
      let neighbors = this.neighbors(coord)
      let value = cube.get(coord)
      for(let n of neighbors) {
        n = n.join(':')
        let v = cube.get(n)
        if(v === '#') {
          count += 1
        }
      }

      if(value === '#') {
        if(count < 2 || count > 3) {
          newCube.set(coord, '.')
        }
        else {
          newCube.set(coord, '#')
        }
      } else {
        if(count == 3) {
          newCube.set(coord, '#')
        }
        else {
          newCube.set(coord, '.')
        }
      }
    }

    return newCube
  }


  puzzle1() {
    let data = this.loadData()
    let cube = new Map()

    for(let row = 0; row < data.length; row++) {
      for(let col = 0; col < data[row].length; col++) {
        cube.set([col, row, 0].join(':'), data[row][col])
      }
    }

    for(let i = 0; i < 6; i++) {
      console.log(`step ${i}`)
      cube = this.expand(cube)
      cube = this.step(cube)
    }
    let count = 0
    for(let v of cube.values())
      if(v == '#')
        count += 1

    console.log(`count = ${count}`)
  }


  puzzle2() {

  }
}


module.exports = SolverDay17
