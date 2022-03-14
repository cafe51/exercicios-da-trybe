// 1 - Crie uma função que receba um número e retorne seu fatorial. 

const getFatorial = (n) => {
	let resultado = n
	if (n === 0 || n === 1) {
		resultado = 1;
	} else {
			resultado *= getFatorial(n - 1);
	}
	return resultado;
}

console.log(getFatorial(4));


// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator.

const getFatorialBonus = (n) => (n === 0 || n === 1) ? 1 : n * getFatorialBonus(n - 1);

console.log(getFatorialBonus(4));

//2. Crie uma função que receba uma frase e retorne qual a maior palavra.

const frase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const arrayFrase = frase.split(' ');

const ordenador = (a, b) => {
	if (a.length > b.length) return 1;
	if (a.length < b.length) return -1;
	if (a.length === b.length) return 0;
}

const fraseOrdenada = arrayFrase.sort(ordenador);

console.log(fraseOrdenada[fraseOrdenada.length - 1]);

// 4. Crie um código JavaScript (...):

const substituiPalavra = (frase, palavra) => frase.split("x").join(palavra);

console.log(substituiPalavra("Olá, x mundo maravilhoso, blá blé bló", "nosso"));


const skills = ['comer', 'dormir', 'beber', 'procrastinar', 'codar']

const contacatenacao = (habilidades) => `${substituiPalavra("Tryber x aqui!", "Japhé")} Minhas cinco principais habilidades são: ${habilidades.sort().join(', ')}`;

console.log(contacatenacao(skills));

