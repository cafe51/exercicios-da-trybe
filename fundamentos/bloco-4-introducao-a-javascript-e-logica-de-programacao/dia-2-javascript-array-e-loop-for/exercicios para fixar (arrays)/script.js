// Exercício 1
// Obtenha o valor "Serviços" do array menu :

let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = 0;

for (index1 = 0; index1 <= menu1.length; index1 += 1){
    if (menu1[index1] == 'Serviços'){
        menuServices = menu1[index1]
    }
}

console.log(menuServices);


// Exercício 2
// Procure o índice do valor "Portfólio" do array menu :

// let indexOfPortifolio = menu2.indexOf('Portifólio');
// console.log(indexOfPortifolio);


let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
console.log(menu2.indexOf('Portfólio'));

// Usando o for

let contador = []

for (let index2 = 0; menu2[index2] != 'Portfólio'; index2 += 1){
    contador.push('x')
}

let indexOfPortfolio = contador.length;

console.log(indexOfPortfolio);


// Exercício 3
// Adicione o valor "Contato" no final do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato')

console.log(menu);


