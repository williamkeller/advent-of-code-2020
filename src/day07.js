const Loader = require('./loader')
const SolverBase = require('./solver_base')
const util = require('util')


class SolverDay07 extends SolverBase {
  constructor(testData = false) {
    super('07', testData)
  }


  loadData() {
    return Loader.loadLines(this.dataFile)
  }


  parseInteriorBags(line) {
    let nodes = []
    let i = line.indexOf('contain')

    let re1 = /(\d+) ([\w ]+)(?= bags?\,)/
    let re2 = /(\d+) ([\w ]+)(?= bags?\.)/

    let remainder = line.slice(i + 8)

    let match
    while(true) {
      match = remainder.match(re1)
      if(match) {
        let node  = { color: match[2], amount: parseInt(match[1]) }
        nodes.push(node)
        let i = remainder.indexOf(',')
        remainder = remainder.slice(i + 2)
        continue
      }

      match = remainder.match(re2)
      if(match) {
        nodes.push({ color: match[2], amount: parseInt(match[1]) })
        break
      }
      else 
        throw `Couldn't match "${line}", remainder "${remainder}"`
    }

    return nodes
  }


  findGoldBag(bags, color) {
    let bag = bags.find(b => b.color == color)
    for(let iBag of bag.inside) {
      if(iBag.color == 'shiny gold') {
        process.stdout.write('shiny gold  ')
        return true
      }
      else {
        let ret = this.findGoldBag(bags, iBag.color)
        if(ret == true) {
          process.stdout.write(`${iBag.color}  `)
          return true
        }
      }
    }

    return false
  }


  findChildBagCount(bags, color) {
    let count = 0
    let bag = bags.find(b => b.color == color)
    for(let ibag of bag.inside) {
      count += ibag.amount
      count += this.findChildBagCount(bags, ibag.color) * ibag.amount
    }

    console.log(`${color} has ${count} children`)
    return count

  }


  puzzle1() {
    const data = this.loadData()
    const re_start = /^([\w ]+)(?= bags contain)/
    const re_end = /^([\w ]+)(?= bags contain no other bags)/

    let bags = []

    for(let line of data) {
      let match

      match = line.match(re_end)
      if(match) {
        bags.push( {color: match[1], inside: [] })
        continue
      }

      match = line.match(re_start)
      if(match) {
        let nodes = this.parseInteriorBags(line)

        bags.push( { color: match[1], inside: nodes })
        continue
      }
    }

    let foundIn = []
    for(let bag of bags) {
      // console.log(bag.color)
      let found = this.findGoldBag(bags, bag.color)
      if(found) {
        process.stdout.write(`${bag.color}  `)
        console.log('\n\n')
        foundIn.push(bag.color)
      }
    }


    console.log(foundIn)
    console.log(foundIn.length)
  }


  puzzle2() {
    const data = this.loadData()
    const re_start = /^([\w ]+)(?= bags contain)/
    const re_end = /^([\w ]+)(?= bags contain no other bags)/

    let bags = []

    for(let line of data) {
      let match

      match = line.match(re_end)
      if(match) {
        bags.push( {color: match[1], inside: [] })
        continue
      }

      match = line.match(re_start)
      if(match) {
        let nodes = this.parseInteriorBags(line)

        bags.push( { color: match[1], inside: nodes })
        continue
      }
    }

    for(let bag of bags) {
      console.log(util.inspect(bag))
    }

    let count = this.findChildBagCount(bags, 'shiny gold')

    console.log(`gold bag must contain ${count} bags`)


  }
}


module.exports = SolverDay07
