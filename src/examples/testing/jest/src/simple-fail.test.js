const sum = require('./simple')

describe('Test función de suma', () => {
  it('2 + 2 = 4', () => {
    expect(sum(2, 2)).toBe(4)
  })

  it('2 = 2', () => {
    expect(sum(2)).toBe(2)
  })

  it('sum sin parámetros', () => {
    expect(sum()).toBe(0)
  })
})