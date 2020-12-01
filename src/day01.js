const load = require('./load')


export function puzzle1() {
  let input = load.loadLinesToNumberArray('day01.txt')

  let len = input.length
  for(let i = 0; i < len - 1; i++) {
    for(let j = 0; j < len; j++) {
      let sum = input[i] + input[j]
      if(sum == 2020) {
        console.log(input[i] * input[j])

        return
      }
    }
  }
}

export function puzzle2() {

  let input = load.loadLinesToNumberArray('day01.txt')

  let len = input.length
  for(let i = 0; i < len - 2; i++) {
    for(let j = i + 1; j < len - 1; j++) {
      for(let k = j + 1; k < len; k++) {

        let sum = input[i] + input[j] + input[k]
        if(sum == 2020) {
          console.log(input[i] * input[j] * input[k])
          return
        }
      }
    }
  }
}
