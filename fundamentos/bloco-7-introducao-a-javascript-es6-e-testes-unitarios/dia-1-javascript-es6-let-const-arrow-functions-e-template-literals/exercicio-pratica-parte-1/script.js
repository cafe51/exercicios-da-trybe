// Exercicio 1

// const testingScope = (escopo) => {
// 	if (escopo === true) {
// 		let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
// 		ifScope = `${ifScope}  ótimo, fui utilizada no escopo !`;
// 		console.log(ifScope);
// 	} else {
// 		let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
// 		console.log(elseScope);
// 	}
// }

// testingScope(true);

// Exercicio 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

const funcaoOrdenadora = (a, b) => {
	if (a > b) return 1;
	if (a < b) return -1;
	if (a === b) return 0;
}

const ordenado = oddsAndEvens.sort(funcaoOrdenadora)

console.log(`Os números ${ordenado} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

