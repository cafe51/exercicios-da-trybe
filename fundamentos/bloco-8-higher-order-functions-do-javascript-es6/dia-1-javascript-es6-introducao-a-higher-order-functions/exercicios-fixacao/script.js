// 1 - Crie uma função que retorne a string 'Acordando!!' ;

const wakeUp = () => 'Acordado!!'

// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;

const breakfest = () => 'Bora tomar café!!'

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;

const goToBed = () => 'Partiu dormir!!'

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

const doingThings = (action) => action();

console.log(doingThings(wakeUp));
console.log(doingThings(breakfest));
console.log(doingThings(goToBed));