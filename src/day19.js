const Loader = require('./loader')
const SolverBase = require('./solver_base')


class SolverDay19 extends SolverBase {
  constructor(testData = false) {
    super('19', testData)
  }


  loadData() {
    return Loader.loadLines(this.dataFile)
  }

  lex(msg, ruleId, rules) {
    let rule = rules[ruleId]

    // console.log(msg, '*', ruleId, rule)

    if(rule.indexOf('"') != -1) {
      // console.log('   match final')
      return (rule[1] == msg[0])
    }

    let subrules = rule.split('|')
    for(let sr of subrules) {
      let offset = 0
      let matched = true
      for(let id of sr.trim().split(' ')) {
        // console.log(`[${sr.split(' ')}]`)
        // console.log(`   => ${id}, ${msg[offset]}`)
        let rc = this.lex(msg.slice(offset), id, rules)
        if(rc == false) {
          matched = false
          break
        }
        offset += 1
      }
      if(matched) {
        // console.log('  match!')
        return true
      }
    }

    return false
  }

  puzzle1() {
    let lines = this.loadData()

    const rule_re = /^(\d+): (.*)$/

    let rules = []
    let messages = []

    for(let line of lines) {
      let m = line.match(rule_re)
      if(m) {
        rules[m[1]] = m[2].trim()
      }
      else if(line.trim().length == 0)
        continue
      else 
        messages.push(line.split(''))
    }

    // console.log(rules)
    // console.log(messages)

    let rc
    let trueCount = 0
    
    for(let message of messages) {
      rc = this.lex(message, 0, rules)
      if(rc) {
        console.log(message)
        trueCount++
      }
    }
    console.log(trueCount)
  }


  puzzle2() {

  }
}


module.exports = SolverDay19
