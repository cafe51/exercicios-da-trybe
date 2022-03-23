// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

// escreva sum abaixo

const sum = (...array) => array.reduce((acc, element) => acc + element)

console.log(sum(2, 2, 3, 3))