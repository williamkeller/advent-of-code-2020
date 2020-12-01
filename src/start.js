

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


function validatePuzzleArg(arg) {
  if(['1', '2'].indexOf(arg) == -1)
    throw "puzzle argument is invalid"

  return arg
}


function validateDayArg(arg) {
  let day = parseInt(arg)
  if(isNaN(day))
    throw "day argument isn't even a day!"

  if(day <= 0 || day > 25)
    throw "day argument is out of range"

  return day.toString()
}


function getCurrentDay() {
  return new Date().getUTCDate().toString()
}


function runPuzzle(puzzle, day) {

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


function main() {
  let args = process.argv.slice(2)

  if(args.length == 0) {
    console.log('ERROR: no arguments provided')
    print_usage()
    return
  }

  let puzzle
  try {
    puzzle = validatePuzzleArg(args[0])
  }
  catch(err) {
    console.log(`ERROR: ${err}`)
    print_usage()
    return
  }

  let day
  try {
    day = validateDayArg(args[1] || getCurrentDay())
  }
  catch(err) {
    console.log('ERROR: day argument isn\'t even a day!')
    print_usage()
    return
  }

  runPuzzle(puzzle, day)
}


// Don't call main unless this file was called directly. It shouldn't run if part of a test suite.
if(process.argv[1] == __filename)
  main()

module.exports = {
  padDay,
  validatePuzzleArg,
  validateDayArg,
  getCurrentDay
}


