import Date from './leap_year'



describe('isLeapYear', () => {
  it('Is not a leap year when it is not divisible by four.', () => {
    const notALeapYear = Date.prototype.isLeapYear(2007)
    expect(notALeapYear).toEqual(false)
  })

  it('Is a leap year when it is divisible by four.', () => {
    const isALeapYear = Date.prototype.isLeapYear(2008)
    expect(isALeapYear).toEqual(true)
  })

  it('Is not a leap year when the year is divisble by 100,', () => {
    const notALeapYear = Date.prototype.isLeapYear(1700)
    expect(notALeapYear).toEqual(false)
  })

  it('unless the year is divisible by both 100 and 400.', () => {
    const isALeapYear = Date.prototype.isLeapYear(1600)
    expect(isALeapYear).toEqual(true)
  })

  it('Years before 1582 AD are not leap years in the Gregorian Calendar', () => {
    const isNotALeapYear = Date.prototype.isLeapYear(1560)
    expect(isNotALeapYear).toEqual(false)
  })

  it('Throws an error when not supplied with a date', () => {
    const isNotALeapYear = Date.prototype.isLeapYear({foo: 'bar'})
    expect(isNotALeapYear).toThrowError('invalid date')
  })
})