// Exercicio 1 - 5

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Exercicio 1

console.log('Bem vinda,', info.personagem);

// Exercicio 2

info.recorrente = 'Sim';

console.log(info);

// Exercicio 3

for (let key in info){
    console.log(key);
};

// Exercicio 4

for (key in info){
    console.log (info[key]);
};


// Exercicio 5

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for (let key2 in info2){
    if(info[key2] != 'Sim' ){
    console.log(info[key2], 'e', info2[key2]);
    }else console.log('Ambos recorrentes');
};

// Exercicio 6 - 8

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};

// Exercicio 6

console.log("O livro favorito de", leitor.nome, leitor.sobrenome, "se chama", "'"+leitor.livrosFavoritos[0].titulo+"'");

// Exercicio 7

leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',  
};

console.log(leitor);

// Exercicio 8

console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos')




