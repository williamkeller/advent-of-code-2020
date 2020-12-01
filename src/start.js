

function print_usage() {
  console.log('npm start puzzle day')
  console.log('  puzzle - 1 runs the first puzzle for the day, 2 runs the second, both runs both')
  console.log('  day - optional value, 1 to 25. Defaults to the current day if not provided')
  console.log('')
}

// Assumes day is a string
function padDay(day) {
  if(day.length == 1)
    return `0${day}`
  else
    return day
}

function main() {
  let args = process.argv.slice(2)

  if(args.length == 0) {
    console.log('ERROR: no arguments provided')
    print_usage()
    return
  }

  let valid = ['1', '2', 'both'].indexOf(args[0])
  if(valid == -1) {
    console.log('ERROR: puzzle argument is invalid')
    print_usage()
    return
  }
  let puzzle = args[0]

  let day
  if(args[1]) {
    day = args[1]
  }
  else {
    day = '1'  // calculate current day, dumb timezones
    // some error checking too, you pleb
  }

  // Load the correct file and run the specified puzzle(s)
  const solver = require(`./day${padDay(day)}`)

  if(puzzle == '1' || puzzle == 'both')
    solver.puzzle1()
  if(puzzle == '2' || puzzle == 'both')
    solver.puzzle2()
}

main()




