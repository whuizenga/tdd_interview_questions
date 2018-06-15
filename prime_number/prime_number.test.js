import Math from './prime_number'

describe('Math.isPrime', () => {
  it('Returns NaN if it is given a string.', () => {
    const notPrime = Math.isPrime('hello world')
    expect(notPrime).toEqual(NaN)
  })
  it('Returns NaN if it is given an array.', () => {
    const notPrime = Math.isPrime(['hello world'])
    expect(notPrime).toEqual(NaN)
  })
  it('Returns NaN if it is given an object.', () => {
    const notPrime = Math.isPrime({hello: 'world'})
    expect(notPrime).toEqual(NaN)
  })
  it('Accepts a number and returns false if the number is not a prime', () => {
    const notPrime = Math.isPrime(4)
    expect(notPrime).toEqual(false)
  })

  it('Accepts a number and returns true if the number is prime', () => {
    const isPrime = Math.isPrime(29)
    expect(isPrime).toEqual(true)
  })

  it('throws an error when supplied with an undefined value', () => {
    const notPrime = Math.isPrime(undefined)
    expect(notPrime).toThrowError('undefined')
  })
  it('throws an error when supplied with an null value', () => {
    const notPrime = Math.isPrime(null)
    expect(notPrime).toThrowError('undefined')
  })
})