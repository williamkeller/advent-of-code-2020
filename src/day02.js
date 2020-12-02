const aoc = require('./aoc')


export function puzzle1() {
  let data = aoc.loadLinesToArray('day02.txt')
  let valid = 0
  let re = /^(\d*)-(\d*) ([a-z]): ([a-z]*)/

  for(let pw of data) {
    let vars = pw.match(re)
    if(vars === null)
      continue


    let min = parseInt(vars[1])
    let max = parseInt(vars[2])
    let pwd = vars[4]
    let char = vars[3]
    let count = 0

    for(let i = 0; i < pwd.length; i++) {
      if(pwd.charAt(i) === char)
        count += 1
    }
    if(count >= min && count <= max) {
      valid += 1
    }
  }
  console.log(`There were ${valid} matching passwords`)
}


export function puzzle2() {
  let data = aoc.loadLinesToArray('day02.txt')
  let valid = 0
  let re = /^(\d*)-(\d*) ([a-z]): ([a-z]*)/

  for(let pw of data) {
    let vars = pw.match(re)
    if(vars === null)
      continue

    let a = parseInt(vars[1])
    let b = parseInt(vars[2])
    let pwd = vars[4]
    let char = vars[3]
    let count = 0

    let m = 0
    if(pwd.charAt(a - 1) === char)
      m += 1
    if(pwd.charAt(b - 1) === char)
      m += 1

    if(m === 1)
      valid += 1
  }
  console.log(`There were ${valid} matching passwords`)
}


export function puzzle3() {
  puzzle1()
  puzzle2()
}
