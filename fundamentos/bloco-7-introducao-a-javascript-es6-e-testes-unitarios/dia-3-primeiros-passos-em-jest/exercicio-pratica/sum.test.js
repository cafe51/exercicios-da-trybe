const sum = require('./sum.js');

describe('soma dois números', () => {
    it ('soma 4 e 5', () => {
        expect(sum(4, 5)).toBe(9)
    })
    it ('soma 0 e 0', () => {
        expect(sum(0, 0)).toBe(0)
    })
    it ('soma número e string', () => {
        expect(() => sum(4, "5").toThrow('parameters must be numbers'))
    })
})