const Loader = require('./loader')
const SolverBase = require('./solver_base')


class SolverDay08 extends SolverBase {
  constructor(testData = false) {
    super('08', testData)
  }


  loadData() {
    return Loader.loadLines(this.dataFile)
  }


  runProgram(code) {
    let acc = 0
    let visited = new Set()
    let rs = {}

    let ip = 0

    while(true) {
      if(ip >= code.length) {
        rs.code = 'ended'
        break
      }

      if(visited.has(ip)) {
        rs.code = 'loop'
        break
      }
      visited.add(ip)
      let line = code[ip]
      let [instr, value] = line.split(' ')
      switch(instr) {
        case 'nop':
          ip += 1
          break
        case 'acc':
          acc += parseInt(value)
          ip += 1
          break
        case 'jmp':
          ip += parseInt(value)
          break
      }
    }

    rs.acc = acc
    return rs
  }


  puzzle1() {
    let code = this.loadData()
    let rc = this.runProgram(code)

    console.log(`acc = ${rc.acc}`)
  }


  puzzle2() {
    let code = this.loadData()
    let rc

    for(let i = 0; i < code.length; i++) {
      let newCode = [...code]
      let line = newCode[i]
      if(line.startsWith('acc'))
        continue
      if(line.startsWith('jmp'))
        newCode[i] = 'nop ' + line.split(' ')[1]
      else
        newCode[i] = 'jmp ' + line.split(' ')[1]

      rc = this.runProgram(newCode)
      if(rc.code == 'ended')
        break
    }

    console.log(`acc = ${rc.acc}`)
  }
}


module.exports = SolverDay08
