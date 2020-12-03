const aoc = require('./aoc')
const SolverBase = require('./solver_base')

class SolverDay03 extends SolverBase {

  constructor(day, testData = false) {
    super(day, testData)
  }

  runSlope(deltax, deltay, data) {
    let maxWidth = data[0].length
    let maxHeight = data.length

    let row = 0
    let col = 0

    let hitCount = 0

    while(row < maxHeight - deltay) {
      row += deltay
      col = (col + deltax) % maxWidth

      if(data[row].charAt(col) == '#')
        hitCount++
    }

    return hitCount
  }

  puzzle1() {
    let rows = aoc.loadLinesToArray(this.dataFile)
    let hitCount = this.runSlope(3, 1, rows)

    console.log(`trees hit = ${hitCount}`)
  }


  puzzle2() {
    let rows = aoc.loadLinesToArray('day03.txt')

    let runs = [
      [1, 1], [3, 1], [5, 1], [7, 1], [1, 2]
    ]

    let sums = runs.map(x => this.runSlope(x[0], x[1], rows))
    let total = sums.reduce((sum, v) => { return sum * v })

    console.log(`product of tree impacts is ${total}`)
  }
}

module.exports = SolverDay03
