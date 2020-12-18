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


  neighbors3(coord) {
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


  neighbors4(coord) {
    let [x, y, z, w] = coord.split(':').map(x => parseInt(x))
    let neighbors = []

    for(let nx = -1; nx <= 1; nx++) {
      for(let ny = -1; ny <= 1; ny++) {
        for(let nz = -1; nz <= 1; nz++) {
          for(let nw = -1; nw <= 1; nw++) {
            neighbors.push([x + nx, y + ny, z + nz, w + nw])
          }
        }
      }
    }

    neighbors.splice(40, 1)

    return neighbors
  }


  expand3(cube) {
    let coords = Array.from(cube.keys())

    for(let coord of coords) {
      let neighbors = this.neighbors3(coord)

      for(let n of neighbors) {
        n = n.join(':')
        if(cube.has(n) == false) {
          cube.set(n, '.')
        }
      }
    }
    return cube
  }


  expand4(cube) {
    let coords = Array.from(cube.keys())

    for(let coord of coords) {
      let neighbors = this.neighbors4(coord)

      for(let n of neighbors) {
        n = n.join(':')
        if(cube.has(n) == false) {
          cube.set(n, '.')
        }
      }
    }
    return cube
  }


  step3(cube) {
    let coords = Array.from(cube.keys())
    let newCube = new Map()

    for(let coord of coords) {
      let count = 0
      let neighbors = this.neighbors3(coord)
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


  step4(cube) {
    let coords = Array.from(cube.keys())
    let newCube = new Map()

    for(let coord of coords) {
      let count = 0
      let neighbors = this.neighbors4(coord)
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
      cube = this.expand3(cube)
      cube = this.step3(cube)
    }
    let count = 0
    for(let v of cube.values())
      if(v == '#')
        count += 1

    console.log(`count = ${count}`)
  }


  puzzle2() {
    let data = this.loadData()
    let cube = new Map()

    for(let row = 0; row < data.length; row++) {
      for(let col = 0; col < data[row].length; col++) {
        cube.set([col, row, 0, 0].join(':'), data[row][col])
      }
    }

    for(let i = 0; i < 6; i++) {
      console.log(`step ${i}`)
      cube = this.expand4(cube)
      cube = this.step4(cube)
    }


    let count = 0
    for(let v of cube.values())
      if(v == '#')
        count += 1

    console.log(`count = ${count}`)
  }
}


module.exports = SolverDay17
