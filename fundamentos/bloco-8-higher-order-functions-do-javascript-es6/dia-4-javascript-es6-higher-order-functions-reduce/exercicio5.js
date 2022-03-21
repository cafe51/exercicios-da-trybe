// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.


const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(letra) {
  // escreva seu código aqui
  return names
  .reduce((acc, element) => acc + element)
  .toLowerCase()
  .split('')
  .reduce((acc, element) => element === letra ? acc + element : acc)
  .length;
}

console.log(containsA('a'))

