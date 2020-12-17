const Loader = require('./loader')
const SolverBase = require('./solver_base')


class SolverDay14 extends SolverBase {
  constructor(testData = false) {
    super('14', testData)
  }


  loadData() {
    return Loader.loadLines(this.dataFile)
  }

  apply_mask(number, mask) {
    let conv = BigInt(0)

    for(let i = 0; i < 36; i++) {
      let mchar = mask[mask.length - 1 - i]
      switch(mchar) {
        case 'X':
          conv += number & BigInt(1) << BigInt(i)
          break
        case '1':
          conv += BigInt(1) << BigInt(i)
          break
        case '0':
          break
        default:
          throw "unexpected char in mask"
      }
    }

    return conv
  }


  apply_memory_mask(number, mask) {
    let conv = BigInt(0) 
    let len = mask.length

    number = BigInt(number)

    for(let i = 0; i < len; i++) {
      let mchar = mask[mask.length - 1 - i]
      switch(mchar) {
        case '1':
          conv += (BigInt(1) << BigInt(i))
          break
        case '0':
          conv += (number & (BigInt(1) << BigInt(i)))
          break
        default:
          throw "unexpected char in mask"
      }
    }

    return conv
  }


  permute_mask(mask) {
    let index = mask.indexOf('X')
    if(index == -1) {
      return [mask]
    }

    let masks = []
    let results = []
    let head = mask.slice(0, index)
    let tail = mask.slice(index + 1)

    results = this.permute_mask('0' + tail)
    for(let result of results) {
      masks.push(head + result)
    }
    results = this.permute_mask('1' + tail)
    for(let result of results) {
      masks.push(head + result)
    }

    return masks
  }

  puzzle1() {
    let mask_re = /mask = ([01X]+)$/
    let mem_re = /mem\[(\d+)\] = (\d+)$/
    let data = this.loadData()
    let array = []

    let cur_mask
    let re
    for(let line of data) {
      re = line.match(mask_re)
      if(re) {
        cur_mask = re[1]
        continue
      }

      re = line.match(mem_re)
      if(re) {
        let index = parseInt(re[1])
        let number = parseInt(re[2])
        let converted = this.apply_mask(BigInt(number), cur_mask)
        console.log(`original: ${number}, converted: ${converted}`)
        array[index] = converted

        continue
      }

      throw `Unparsed input: ${line}`
    }

    console.log(array)
    let total = array.reduce((memo, value) => {
      if(value == undefined)
        return memo
      else
        return value + memo
    })
    console.log(total)
  }


  puzzle2() {
    let mask_re = /mask = ([01X]+)$/
    let mem_re = /mem\[(\d+)\] = (\d+)$/
    let data = this.loadData()
    let memory = {}

    let masks
    let re
    for(let line of data) {
      re = line.match(mask_re)
      if(re) {
        masks = this.permute_mask(re[1])
        continue
      }

      re = line.match(mem_re)
      if(re) {
        let index = parseInt(re[1])
        let number = parseInt(re[2])

        for(let mask of masks) {
          let newIndex = this.apply_memory_mask(index, mask)
          console.log('** ' + mask, index, (index >>> 0).toString(2), newIndex, (parseInt(newIndex) >>> 0).toString(2))
          memory[BigInt(newIndex)] = number
        }
        console.log('\n\n')
        continue
      }

      throw `Unexpected line format: ${line}`
    }

    // let total = BigInt(0)
    // for(let num of Object.values(memory))
    //   total += BigInt(num)

    // console.log(Object.values(memory).length)
    // console.log(total)
  }
}


module.exports = SolverDay14
