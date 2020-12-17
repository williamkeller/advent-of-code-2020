const Loader = require('./loader')
const SolverBase = require('./solver_base')


class SolverDay18 extends SolverBase {
  constructor(testData = false) {
    super('18', testData)
  }


  loadData() {
    return Loader.loadLines(this.dataFile)
  }

  parseExpression1(expr) {
    let total = 0
    let elems = expr.split(' ')
    let op = ''

    total = parseInt(elems[0])

    for(let i = 1; i < elems.length; i++) {

      let elem = elems[i]
      if(elem == '+') {
        op = '+'
        continue
      }
      else if(elem == '*') {
        op = '*'
        continue
      }
      else {
        let n = parseInt(elem)
        if(isNaN(n))
          throw `could not parse "${elem}"`
        if(op == '+') {
          total += n
        }
        else if(op == '*') {
          total *= n
        }
      }
    }

    return total
  }

  parseExpression2(expr) {
    let elems = expr.split(' ')

    while(true) {
      let i

      i = elems.indexOf('+')
      if(i != -1) {
        elems[i] = parseInt(elems[i - 1]) + parseInt(elems[i + 1])
        elems.splice(i + 1, 1)
        elems.splice(i - 1, 1)
        continue
      }

      i = elems.indexOf('*')
      if(i != -1) {
        elems[i] = parseInt(elems[i - 1]) * parseInt(elems[i + 1])
        elems.splice(i + 1, 1)
        elems.splice(i - 1, 1)
        continue
      }

      if(elems.length > 1)
        throw "something went wrong"

      break
    }

    return parseInt(elems[0])
  }

  parseEquation(expr, expreval) {
    const re = /\(([0-9\+\*\ ]+)\)/

    let match = expr.match(re)
    if(match) {
      let sub = expreval(match[1])
      let newExpr = expr.slice(0, match.index) + sub.toString() +
        expr.slice(match.index + match[0].length)

      return this.parseEquation(newExpr, expreval)
    }
    else
      return expreval(expr)
  }


  puzzle1() {
    let data = this.loadData()

    let values = []
    for(let expr of data) {
      let ret = this.parseEquation(expr, this.parseExpression1)
      console.log(expr, ' = ', ret)
      values.push(ret)
    }

    let total = values.reduce((acc, x) => acc + x)
    console.log(total)
  }


  puzzle2() {
    let data = this.loadData()

    let values = []
    for(let expr of data) {
      let ret = this.parseEquation(expr, this.parseExpression2)
      console.log(expr, ' = ', ret)
      values.push(ret)
    }

    let total = values.reduce((acc, x) => acc + x)
    console.log(total)
  }
}


module.exports = SolverDay18
