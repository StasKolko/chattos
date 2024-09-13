import { classNames as cn } from "./classNames"

describe('classNames', () => {
  it.each([
    { classes: [], result: '' },
    { classes: [{ red: '', blue: false }, '', ' ', ['', ' ']], result: '' },
  ])('should return empty string', ({ classes, result }) => {
    const expected = cn(...classes);

    expect(expected).toBe(result)
  })

  it.each([
    { classes: ['red', '', ' '], result: 'red' },
    { classes: [['red', '', ' '], 'blue', ' ', ''], result: 'red blue' },
    { classes: [{ red: true, blue: '', yellow: ' ' }, ['red', '', ' '], 'blue', ' ', ''], result: 'red yellow red blue' },
  ])('should return string', ({ classes, result }) => {
    const expected = cn(...classes);

    expect(expected).toBe(result)
  })
})