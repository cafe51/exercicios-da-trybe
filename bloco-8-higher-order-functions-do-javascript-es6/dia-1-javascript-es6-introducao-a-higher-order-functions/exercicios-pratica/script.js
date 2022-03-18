// // Exercicio 1

// const dados = (name) => ({
//     nomeCompleto: name,
// 		email: `${name.split(' ').join('').toLowerCase()}@trybe.com`,
// })

// const newEmployees = (action) => {
//   const employees = {
//     id1: action('Pedro Guerra'), // Nome:  -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: action('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: action('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// console.log(newEmployees(dados));

// // Exercicio 2

// const sorteio = (aposta, action) => aposta === action() ? 'ganhou' : 'perdeu';
// console.log(sorteio(2, () => Math.ceil(Math.random()*5)));

// const numeroSorteado = () => Math.ceil(Math.random()*5);
// console.log(sorteio(2, numeroSorteado));

// Exercicio 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correcao = (gabarito, resposta) => {
	let acertos = 0;
	let erros = 0;
	for (let i = 0; i <= gabarito.length; i += 1) {
		if (gabarito[i] !== resposta[i] && resposta[i] !== 'N.A') {
			erros += 1;
		} 
		if (gabarito[i] === resposta[i]) {
			acertos += 1;
		}
	}
	return acertos - erros*0.5;
}

const avaliador = (resposta, gabarito, correcao) => correcao(resposta, gabarito)


console.log(avaliador(RIGHT_ANSWERS, STUDENT_ANSWERS, correcao));
