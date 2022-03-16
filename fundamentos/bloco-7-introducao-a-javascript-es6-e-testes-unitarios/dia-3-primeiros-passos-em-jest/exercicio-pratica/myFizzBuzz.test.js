const myFizzBuzz = require('./myFizzBuzz.js');

describe('Testando a função myFizzBuzz', () => {
    it('testando múltiplo de 3 e 5', () => {
        expect(myFizzBuzz(45)).toBe('fizzbuzz')
    })
    it('testando número divisível apenas por 3', () => {
        expect(myFizzBuzz(18)).toBe('fizz')
    })
    it('testando número divisível apenas por 5', () => {
        expect(myFizzBuzz(25)).toBe('buzz')
    })
    it('testando número não divisível por 5 ou 3', () => {
        expect(myFizzBuzz(13)).toBe(13)
    })
    it('testando string', () => {
        expect(myFizzBuzz('peixe')).toBe(false)
    })
})
