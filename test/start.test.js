const start = require('../src/start')

describe('start module', () => {
  // test('padDay', () => {
  //   expect(start.padDay(1)).toEqual('01')
  //   expect(start.padDay(13)).toEqual('13')
  // })


  test('validatePuzzleArg', () => {
    expect(() => {
      start.validatePuzzleArg('1')
    }).not.toThrow()

    expect(() => {
      start.validatePuzzleArg('2')
    }).not.toThrow()

    expect(() => {
      start.validatePuzzleArg('9')
    }).toThrow()

    expect(() => {
      start.validatePuzzleArg('X')
    }).toThrow()
  })


  test('validateDayArg', () => {
    expect(() => {
      start.validateDayArg(1)
    }).not.toThrow()

    expect(() => {
      start.validateDayArg('1')
    }).not.toThrow()

    expect(() => {
      start.validateDayArg(26)
    }).toThrow()

    expect(() => {
      start.validateDayArg('bleh')
    }).toThrow()

    expect(start.validateDayArg(1)).toEqual('01')

    expect(start.validateDayArg('1')).toEqual('01')
  })


  test('getCurrentDay', () => {
    let today = new Date().getUTCDate().toString()
    expect(start.getCurrentDay()).toEqual(today)
  })
})
