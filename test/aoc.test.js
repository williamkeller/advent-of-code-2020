const aoc = require('../src/aoc')

describe('support functions', () => {
  test('permute2', () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    let count = 0

    aoc.permute2(array, (a, b) => {
      expect(a).not.toEqual(b)
      count += 1
    })

    expect(count).toEqual(36)
  })

  test('permute3', () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    let count = 0

    aoc.permute3(array, (a, b, c) => {
      expect(a).not.toEqual(b)
      expect(a).not.toEqual(c)
      expect(b).not.toEqual(c)
      count += 1
    })

    expect(count).toEqual(84)
  })
})
