function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

//   Exercício 1:

function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthDaysList = document.querySelector('#days');
  
    for (let index = 0; index < dezDaysList.length; index += 1) {
        const days = dezDaysList[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerText = days;
        dayListItem.className = 'day';
        if (days === 24 || days === 25 || days === 31) {
            // dayListItem.className = 'holiday'
            dayListItem.classList.add('holiday');
            // dayListItem.setAttribute('class', 'holiday')
            dayListItem.innerText = days;
        }
        if (days === 4 || days === 11 || days === 18 || days === 25) {
            // dayListItem.className = 'friday'
            dayListItem.classList.add('friday');
            // dayListItem.setAttribute('class', 'friday')
            dayListItem.innerText = days;
        }

        monthDaysList.appendChild(dayListItem)
    }
}
createDaysOfTheMonth()

// Exercício 2:

function botão (nomeDoBotao, id) {
    const botao = document.createElement('button');
    botao.setAttribute('id', id);
    const buttonContainer = document.querySelector('.buttons-container');
    botao.innerText = nomeDoBotao;
    buttonContainer.appendChild(botao);    
}

botão ('Feriados', 'btn-holiday')


// Exercício 3:

let botaoF = document.querySelector('#btn-holiday');
let holiday = document.querySelectorAll('.holiday')




function corDeFundo (botao, categoria, cor) {
    const corDoBody = document.body.style.backgroundColor;
    botao.addEventListener('click', function (){
        for (let index = 0; index < categoria.length; index += 1) {
            if (categoria[index].style.backgroundColor === corDoBody) {
                categoria[index].style.backgroundColor = cor
            } else  {
                    categoria[index].style.backgroundColor = corDoBody
                }
            
        }
        
    })
}


corDeFundo (botaoF, holiday, 'blue');

// Exercício 4:

botão ('Sexta-feira', 'btn-friday');

// Exercício 5:

let botaoS = document.querySelector('#btn-friday');
let sexta = document.querySelectorAll('.friday');


function texto (botao, categoria, texto) {
    let sextaAntiga = [];
    for (let i = 0; i < sexta.length; i += 1) {
        sextaAntiga.push(sexta[i].innerText);
    }
    botao.addEventListener('click', function () {
        for (let index = 0; index < categoria.length; index += 1) {
            let textoDoItem = categoria[index];
            if (textoDoItem.innerText !== texto) {
                textoDoItem.innerText = texto;
            } else {
                     textoDoItem.innerText = sextaAntiga[index];
                }
        }       
    })
}

texto (botaoS, sexta, 'SEXTOU!')

