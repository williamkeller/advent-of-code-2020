const Loader = require('./loader')
const SolverBase = require('./solver_base')


class SolverDay04 extends SolverBase {
  constructor(testData = false) {
    super('04', testData)
  }


  loadData() {
    let rows = Loader.loadLines(this.dataFile)
    let batches = []

    let batch = ''
    for(let row of rows) {
      if(row.length == 0) {
        batches.push(batch)
        batch = ''
      }
      else {
        batch += row + ' '
      }
    }
    batches.push(batch)

    console.log(`${batches.length} loaded`)

    return batches
  }


  puzzle1() {
    let batches = this.loadData()
    let correct = 0
    const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
    for(let batch of batches) {
      let valid = true
      for(let field of fields) {
        if(batch.includes(field) == false) {
          valid = false
          break
        }
      }

      if(valid)
        correct += 1
    }

    console.log(`there were ${correct} passports`)
  }


  puzzle2() {
    let batches = this.loadData()
    let correct = 0
    let match, value
    for(let batch of batches) {

      match = batch.match(/byr:(\d{4}) /)
      if(match == null)
        continue
      value = parseInt(match[1])
      if(value < 1920 || value > 2002)
        continue

      match = batch.match(/iyr:(\d{4}) /)
      if(match == null)
        continue
      value = parseInt(match[1])
      if(value < 2010 || value > 2020)
        continue

      match = batch.match(/eyr:(\d{4}) /)
      if(match == null)
        continue
      value = parseInt(match[1])
      if(value < 2020 || value > 2030)
        continue

      match = batch.match(/hgt:(\d{2,3})(cm|in)/)
      if(match == null)
        continue
      value = parseInt(match[1])
      if(match[2] == 'cm' && (value < 150 || value > 193))
        continue
      if(match[2] == 'in' && (value < 59 || value > 76))
        continue

      match = batch.match(/hcl:(\#[0-9a-f]{6}) /)
      if(match == null)
        continue

      match = batch.match(/ecl:(amb|blu|brn|gry|grn|hzl|oth)/)
      if(match == null)
        continue

      match = batch.match(/pid:(\d{9}) /)
      if(match == null)
        continue

      correct += 1
    }

    console.log(`there were ${correct} passports`)
  }
}


module.exports = SolverDay04
