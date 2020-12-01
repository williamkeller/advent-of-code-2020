

function print_usage() {
  console.log('npm start puzzle day')
  console.log('  puzzle - 1 runs the first puzzle for the day, 2 runs the second')
  console.log('  day - optional value, 1 to 25. Defaults to the current day if not provided')
  console.log('')
}

function padDay(day) {
  let str = day.toString()
  if(str.length == 1)
    return `0${str}`
  else
    return str
}

function main() {
  let args = process.argv.slice(2)

  if(args.length == 0) {
    console.log('ERROR: no arguments provided')
    print_usage()
    return
  }

  let valid = ['1', '2'].indexOf(args[0])
  if(valid == -1) {
    console.log('ERROR: puzzle argument is invalid')
    print_usage()
    return
  }
  let puzzle = args[0]

  let day
  if(args[1]) {
    day = args[1]
    let numDay = parseInt(day)
    if(isNaN(numDay)) {
      console.log('ERROR: day argument isn\'t even a day!')
      print_usage()
      return
    }
    if(numDay <= 0 || numDay > 25) {
      console.log('ERROR: day argument is out of range')
      print_usage()
      return
    }
  }
  else {
    let date = new Date()
    day = date.getUTCDate()
  }

  // Load the specified file
  let solver
  try {
    solver = require(`./day${padDay(day)}`)
  }
  catch {
    console.log('ERROR: Looks like you tried to run a day that has been written yet')
    return
  }

  // Run the specified puzzle
  try {
    solver[`puzzle${puzzle}`]()
  }
  catch(err) {
    console.log(`ERROR: puzzle${puzzle} threw an error`)
    console.log(err)
  }
}

main()




