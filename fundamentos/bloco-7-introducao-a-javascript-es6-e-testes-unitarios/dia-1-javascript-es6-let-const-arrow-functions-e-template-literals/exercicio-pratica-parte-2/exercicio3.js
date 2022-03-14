let counterText = document.querySelector('p');
const buttom = document.querySelector('button')
let counter = 0
counterText.innerHTML = counter;

const contaCliques = () => {counter += 1; counterText.innerHTML = counter;}

buttom.addEventListener('click', contaCliques);



