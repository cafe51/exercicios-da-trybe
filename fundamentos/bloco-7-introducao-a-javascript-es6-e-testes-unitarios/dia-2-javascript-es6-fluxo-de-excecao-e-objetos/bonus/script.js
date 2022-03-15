// 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const lesson1 = {
	materia: 'Matemática',
	numeroEstudantes: 20,
	professor: 'Maria Clara',
	turno: 'manhã',
};

const lesson2 = {
	materia: 'História',
	numeroEstudantes: 20,
	professor: 'Carlos',
	turno: 'tarde',
};

const lesson3 = {
	materia: 'Matemática',
	numeroEstudantes: 10,
	professor: 'Maria Clara',
	turno: 'noite',
};

const allLessons = {
	lesson1,
	lesson2,
	lesson3,
}

//1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const contadorDeAlunos = (materia) => {
	let counter = 0;
	for (let i =0; i < Object.keys(allLessons).length; i += 1) {
		let licao = Object.values(allLessons)[i]
		if (licao['materia'] === materia) {
			counter += licao['numeroEstudantes'];
		} 
	}
	return counter;
}

//2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:


const findMatter = (nomeDoPorfessor) => {
	let materia = [];
	for (let i =0; i < Object.keys(allLessons).length; i += 1) {
		let licoes = Object.values(allLessons)[i]
		let licao = Object.values(licoes)
		if (licao.includes(nomeDoPorfessor)) {
			materia.push(licoes['materia']) 
		}
	}
return materia;
}

const createReport = (nomeDoPorfessor) => {
	let materia = findMatter(nomeDoPorfessor);
	let numeroEstudantes = contadorDeAlunos(materia)
	const relatorio = {
		professor: nomeDoPorfessor,
		aulas: materia,
		estudantes: numeroEstudantes,
	}
	return relatorio;
}

console.log(createReport('Maria Clara'))
