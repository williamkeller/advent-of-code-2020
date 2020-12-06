require('../src/monkeypatches')

describe('Monkeypatching javascript objects', () => {
  describe('string sort', () => {

    test('out of order strings are sorted', () => {
      let x = 'cba'
      expect(x.sort()).toEqual('abc')
    })

    test('in order strings are untouched', () => {
      let x = 'xyz'
      expect(x.sort()).toEqual('xyz')
    })
  })


  describe('array permutation', () => {
    test('permute2', () => {
      const array = [0, 1, 2, 3, 4, 5, 6, 7, 8]
      let count = 0

      array.permute2((a, b) => {
        expect(a).not.toEqual(b)
        count += 1
      })

      expect(count).toEqual(36)
    })

    test('permute3', () => {
      const array = [0, 1, 2, 3, 4, 5, 6, 7, 8]
      let count = 0

      array.permute3((a, b, c) => {
        expect(a).not.toEqual(b)
        expect(a).not.toEqual(c)
        expect(b).not.toEqual(c)
        count += 1
      })

      expect(count).toEqual(84)
    })
  })
})


