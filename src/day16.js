const Loader = require('./loader')
const SolverBase = require('./solver_base')


class SolverDay16 extends SolverBase {
  constructor(testData = false) {
    super('16', testData)
  }


  loadData() {
    return Loader.loadLines(this.dataFile)
  }


  puzzle1() {
    let data = this.loadData()
    let rules  = {}
    let mine = []
    let tickets = []

    let row = 0

    while(true) {
      let line = data[row].trim()
      console.log(line)

      if(line.length == 0)
        break
  
      let rangeValues = []
      let [label, values] = line.split(':')
      let ranges = values.split('or')
      console.log(ranges)
      for(let range of ranges) {
        let [min, max] = range.split('-')
        rangeValues.push([parseInt(min), parseInt(max)])
      }
      rules[label] = rangeValues

      row += 1
    }

    row += 1
    if(data[row].trim() != "your ticket:")
      throw "Data out of sync"
    row += 1
    mine = data[row].split(',').map(x => parseInt(x))

    row += 1  // blank 
    row += 1  // nearby tickets:
    row += 1  // first line of tickets

    while(row < data.length) {
      let numbers = data[row].split(',').map(x => parseInt(x))
      tickets.push(numbers)
      row += 1
    }

    let errors = []
    for(let ticket of tickets) {
      for(let field of ticket) {
         let valid = false
         for(let rule of Object.values(rules)) {
           for(let subrule of rule) {
             // console.log(subrule, field, subrule[0], (field >= subrule[0]), (field <= subrule[1]))
             if(field >= subrule[0] && field <= subrule[1]) {
               valid = true
               break
             }
             if(valid == true)
               break
           }
         }
         if(valid == false) {
           errors.push(field)
           break
         }
      }
    }



    // console.log(rules)
    // console.log(mine)
    // console.log(tickets)
    console.log(errors)
    let total = errors.reduce((acc, val) => acc + val)
    console.log(total)
    return
  }


  puzzle2() {
    let data = this.loadData()
    let rules  = {}
    let mine = []
    let tickets = []
    let badtickets = []

    let row = 0

    while(true) {
      let line = data[row].trim()
      console.log(line)

      if(line.length == 0)
        break
  
      let rangeValues = []
      let [label, values] = line.split(':')
      let ranges = values.split('or')
      console.log(ranges)
      for(let range of ranges) {
        let [min, max] = range.split('-')
        rangeValues.push([parseInt(min), parseInt(max)])
      }
      rules[label] = rangeValues

      row += 1
    }

    row += 1
    if(data[row].trim() != "your ticket:")
      throw "Data out of sync"
    row += 1
    mine = data[row].split(',').map(x => parseInt(x))

    row += 1  // blank 
    row += 1  // nearby tickets:
    row += 1  // first line of tickets

    while(row < data.length) {
      let numbers = data[row].split(',').map(x => parseInt(x))
      tickets.push(numbers)
      row += 1
    }

    let errors = []
    for(let ticket of tickets) {
      for(let field of ticket) {
         let valid = false
         for(let rule of Object.values(rules)) {
           for(let subrule of rule) {
             // console.log(subrule, field, subrule[0], (field >= subrule[0]), (field <= subrule[1]))
             if(field >= subrule[0] && field <= subrule[1]) {
               valid = true
               break
             }
             if(valid == true)
               break
           }
         }
         if(valid == false) {
           errors.push(field)
           badtickets.push(ticket)
           break
         }
      }
    }

    for(let bt of badtickets) {
      let i = tickets.indexOf(bt)
      if(i == -1)
        throw "lookup failure"
      else
        tickets.splice(i, 1)
    }

    let matches = []
    for(let rule of Object.entries(rules)) {
      let [[min1, max1], [min2, max2]] = rule[1]
      let valid_columns = []
      for(let col = 0; col < mine.length; col++) {
        // console.log(`${rule[0]}, column ${col}`)
        let valid = true
        for(let ticket of tickets) {
          let value = ticket[col]
          if(((value >= min1 && value <= max1) ||
              (value >= min2 && value <= max2)) == false) {
            valid = false
            break
          }
        }
        if(valid == true)
          valid_columns.push(col)
      }

      matches.push([rule[0], valid_columns])
    }

    let sorted = matches.sort((a, b) => {
      return a[1].length - b[1].length
    })

    for(let m of sorted) {
      console.log(m[0], m[1].join(','))
    }
  }
}


module.exports = SolverDay16
