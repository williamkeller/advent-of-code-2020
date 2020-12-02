const aoc = require('./aoc')

export function puzzle1() {
  let input = aoc.loadLinesToNumberArray('day01.txt')

  let result = -1
  aoc.permute2(input, (a, b) => {
    if(a + b == 2020) {
      result = a * b
      return true
    }
    else
      return false
  })
  console.log(result)
}

export function puzzle2() {
  let input = aoc.loadLinesToNumberArray('day01.txt')

  let result = -1
  aoc.permute3(input, (a, b, c) => {
    if(a + b + c == 2020) {
      result = a * b * c
      return true
    }
    else
      return false
  }) 
  console.log(result)
}

export function puzzle3() {
  puzzle1()
  puzzle2()
}
