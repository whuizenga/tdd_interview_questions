import { isLeapYear } from './leap_year'

describe('isLeapYear', () => {
  it('A year is not a leap year when it is not divisible by four.', () => {
    const notALeapYear = isLeapYear(2007)
    expect(notALeapYear).toEqual(false)
  })

  it('A year is a leap year when it is divisible by four.', () => {
    const isALeapYear = isLeapYear(2008)
    expect(isALeapYear).toEqual(true)
  })

  it('A year is not a leap year when the year is divisble by 100,', () => {
    const notALeapYear = isLeapYear(1700)
    expect(notALeapYear).toEqual(false)
  })

  it('unless the year is divisible by both 100 and 400.', () => {
    const isALeapYear = isLeapYear(1600)
    expect(isALeapYear).toEqual(true)
  })
})