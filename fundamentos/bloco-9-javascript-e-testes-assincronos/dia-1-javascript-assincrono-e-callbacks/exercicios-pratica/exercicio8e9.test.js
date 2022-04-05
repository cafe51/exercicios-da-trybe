// Verifique se a importação do arquivo correto está sendo feita.
const { expect } = require("@jest/globals");
const { getPokemonDetails } = require("./exercicio8e9.js");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedString = new Error('Não temos esse pokémon para você :(');
    const mensagem = (erro, result) => {
        expect(erro).toEqual(expectedString)
        done()
    }
    getPokemonDetails('Bulsadsfur', mensagem)
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedString = "Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf";
    const mensagem = (erro, result) => {
        expect(result).toBe(expectedString)
        done()
    }
    getPokemonDetails('Bulbasaur', mensagem)
  });
});