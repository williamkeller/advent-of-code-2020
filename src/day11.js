const Loader = require('./loader')
const SolverBase = require('./solver_base')


class SolverDay11 extends SolverBase {
  constructor(testData = false) {
    super('11', testData)
  }


  loadData() {
    return Loader.load2dCharArray(this.dataFile)
  }


  getOccupiedCount(data) {
    let count = 0

    for(var row of data) {
      for(var col of row) {
        if(col == '@')
          count += 1
      }
    }
    return count
  }


  visImmediate(row, col, data) {
    const width = data[0].length

    let seats = []
    if(row > 0) {
      if(col > 0)
        seats.push(data[row - 1][col - 1])
      seats.push(data[row - 1][col])
      if(col < width - 1)
        seats.push(data[row - 1][col + 1])
    }

    if(col > 0)
      seats.push(data[row][col - 1])
    if(col < width - 1)
      seats.push(data[row][col + 1])

    if(row < data.length - 1) {
      if(col > 0)
        seats.push(data[row + 1][col - 1])
      seats.push(data[row + 1][col])
      if(col < width - 1)
        seats.push(data[row + 1][col + 1])
    }

    return seats
  }


  step(data, visEval, maxNeighbors) {
    const width = data[0].length 

    var newData = this.copyData(data)

    for(let row = 0; row < data.length; row++) {
      for(let col = 0; col < width; col++) {
        if(data[row][col] == '.')
          continue

        let seats = visEval(row, col, data)

        let neighborCount = seats.reduce((memo, seat) => {
          if(seat == 'P' || seat == '#')
            return memo + 1
          else
            return memo
        }, 0)

        if(data[row][col] == 'L' && neighborCount == 0)
          newData[row][col] = '#'
        if(data[row][col] == '#' && neighborCount >= maxNeighbors)
          newData[row][col] = 'L'
      }
    }

    return newData
  }

  copyData(data) {
    var newData = []
    for(var row of data) {
      newData.push(row.slice())
    }
    return newData
  }

  isEqual(data1, data2) {
    let width = data1[0].length

    for(let i = 0; i < data1.length; i++) {
      for(let j = 0; j < width; j++) {
        if(data1[i][j] != data2[i][j])
          return false
      }
    }
    return true
  }

  puzzle1() {
    var data = this.loadData()
    // console.log(data.map(row => row.join('')).join('\n'))

    var stepCount = 0

    let inData = data
    while(stepCount < 1000) {
      var outData = this.step(inData, this.visImmediate, 4)

      if(this.isEqual(inData, outData)) {
        console.log('data is equal')
        console.log(outData.map(row => row.join('')).join('\n'))

        let count = 0

        let width = outData[0].length
        for(let i = 0; i < outData.length; i++) {
          for(let j = 0; j < width; j++) {
            if(outData[i][j] == '#')
              count += 1
          }
        }

        console.log(`${count} seats filled`)

        break
      }

      inData = outData
      stepCount += 1
    }
  }

  visDir(curRow, curCol, dirRow, dirCol, data) {
    const height = data.length
    const width = data[0].length

    let tmpRow = curRow
    let tmpCol = tmpCol

    while(true) {
      tmpRow += dirRow
      tmpCol += dirCol

      if(tmpRow < 0 || tmpCol < 0 || tmpRow >= width || tmpCol >= height)
        return nil 
      if(data[tmpRow][tmpCol] == '.')
        continue
      else
        return data[tmpRow][tmpCol]
    }
  }

  visList(curRow, curCol, data) {
    let vis = []
    let cell

    const dirs = [
      [0, -1],
      [1, -1],
      [1, 0],
      [1, 1],
      [0, 1],
      [-1, 1],
      [-1, 0],
      [-1, -1]
    ]
    const height = data.length
    const width = data[0].length

    for(let dir of dirs) {

      let tmpRow = curRow
      let tmpCol = curCol

      while(true) {
        tmpRow += dir[0]
        tmpCol += dir[1]

        if(tmpRow < 0 || tmpCol < 0 || tmpRow >= height || tmpCol >= width) {
          cell = null
          break
        }
        if(data[tmpRow][tmpCol] == '.')
          continue
        else {
          cell = data[tmpRow][tmpCol]
          break
        }
      }

      if(cell)
        vis.push(cell)
    }

    return vis
  }

  puzzle2() {
    const data = this.loadData()

    let stepCount = 0

    let inData = data
    while(stepCount < 1000) {
      var outData = this.step(inData, this.visList, 5)

      // console.log(outData.map(row => row.join('')).join('\n'))
      // console.log('\n')

      if(this.isEqual(inData, outData)) {
        console.log('data is equal')
        console.log(outData.map(row => row.join('')).join('\n'))

        let count = 0

        let width = outData[0].length
        for(let i = 0; i < outData.length; i++) {
          for(let j = 0; j < width; j++) {
            if(outData[i][j] == '#')
              count += 1
          }
        }

        console.log(`${count} seats filled`)

        break
      }

      inData = outData
      stepCount += 1
    }

  }
}


module.exports = SolverDay11
