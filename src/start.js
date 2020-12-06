require('./monkeypatches')

function print_usage() {
  console.log('npm start p [d]')
  console.log('  p - 1 runs the first puzzle for the day, 2 runs the second, 3 runs both')
  console.log('  t - option value, true to use test data, false to use real data. Default is false')
  console.log('  d - optional value, 1 to 25. Defaults to the current day if not provided')
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
  if(['1', '2', '3'].indexOf(arg) == -1)
    throw "puzzle argument is invalid"

  return arg
}

function validateTestData(arg) {
  if(['t', 'f'].indexOf(arg) == -1)
    throw "test data argument is invalid"

  return arg == 't' ? true : false
}

function validateDayArg(arg) {
  let day = parseInt(arg)
  if(isNaN(day))
    throw "day argument isn't even a day!"

  if(day <= 0 || day > 25)
    throw "day argument is out of range"

  return padDay(day)
}


// FIXME this only works for December, so handle cases when
// it's no longer December
function getCurrentDay() {
  return new Date().getUTCDate().toString()
}


function runPuzzle(puzzle, test, day) {
  // Load the specified file
  let Solver
  try {
    Solver = require(`./day${padDay(day)}`)
  }
  catch(err) {
    console.log(`ERROR: Unable to load puzzle file for day ${day}`)
    console.log(err)
    return
  }

  // Run the specified puzzle
  try {
    let s = new Solver(test)
    s[`puzzle${puzzle}`]()
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

  let testData = false
  try {
    testData = validateTestData(args[1] || 'f')
  }
  catch(err) {
    console.log(`ERROR: ${err}`)
  }

  let day
  try {
    day = validateDayArg(args[2] || getCurrentDay())
  }
  catch(err) {
    console.log(`ERROR: ${err}`)
    print_usage()
    return
  }

  runPuzzle(puzzle, testData, day)
}


// Don't call main unless this file was called directly. It shouldn't run if part of a test suite.
if(process.argv[1] == __filename)
  main()

module.exports = {
  validatePuzzleArg,
  validateDayArg,
  getCurrentDay
}


