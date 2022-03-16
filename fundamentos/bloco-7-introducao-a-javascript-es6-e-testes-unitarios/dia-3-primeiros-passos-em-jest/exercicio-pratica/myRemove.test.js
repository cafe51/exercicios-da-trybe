const myRemove = require('./myRemove.js')

describe('Testes myRemove', () =>{
    it('retorna o array esperado', () => {
        expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3))
    })
    it('não retorna o array não esperado', () => {
        expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3))
    })
    it('retorna o array esperado se remover um número que não existe dentro do array', () => {
        expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5))
    })
})