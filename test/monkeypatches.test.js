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


  describe('Array uniq', () => {
    test('remove duplicates', () => {
      let x = [1, 1, 2, 3, 3, 4]
      expect(x.uniq()).toEqual([1, 2, 3, 4])
    })
  })


  describe('Array histogram', () => {
    test('generate histogram', () => {
      let a = ['a', 'a', 'a', 'b', 'b', 'c']
      let histo = a.histogram()

      expect(histo['a']).toEqual(3)
      expect(histo['b']).toEqual(2)
      expect(histo['c']).toEqual(1)
    })
  })
})


