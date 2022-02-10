// Exercício 1


function geradorDeFatorial(number){
    let result = number;
    let aux = 0;
    for (let index = 1; index < number; index +=1 ){
        aux = (number - index);
        result = aux*result
    }
return result;
}
console.log(geradorDeFatorial(10))

// Exercício 2

let word = 'trybe'

function inversor(w){
    let inverted = '';
    for(let i = 1; i <= w.length; i += 1){
        inverted = inverted.concat(w[w.length - i])
    }
return inverted;
}
console.log(inversor(word));

// Exercicio 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let lista = ['shampoo', 'condicionador', 'oi', 'u', 'opa' ]

function ordenador(array){
    let auxi = '';
    let element1 = 0
    let element2 = 0
    for (let i2 = 1; i2 < array.length; i2 += 1){
        for(let i3 = 0; i3 < array.length; i3 += 1){
            element1 = array[i2]
            element2 = array[i3]
            if (element1.length> element2.length){
                auxi = array[i2];
                array[i2] = array[i3];
                array[i3] = auxi;
            }
        }
    }
return array
}    
function biggerString(array){
    let biggerString = ordenador(array)[0]
    return biggerString
}
console.log('A maior palavra do vetor é:', biggerString(array))

function smallerString(array){
    let smallerString = ordenador(array)[array.length - 1]
    return smallerString
}
console.log('A menor palavra do vetor é:', smallerString(array))

// Exercicio 4
 
function primos(a){
    let counter = [];
    let primos = [];
    for(let i4 = 2; i4 < a; i4 += 1){
        counter = [];
        for (let i5 = 1; i5 <= i4; i5 +=1){
            if (i4 % i5 === 0){
                counter.push('x');
            }
        }
        if (counter.length < 3){
            primos.push(i4);
        }
    }
return primos;
}

function bubbleSort(array3){
    for (let index2 = 1; index2 < array3.length; index2 += 1) {
        for (let secondIndex = 0; secondIndex < index2; secondIndex += 1) {
          if (array3[index2] > array3[secondIndex]) {
            let position = array3[index2];
            array3[index2] = array3[secondIndex];
            array3[secondIndex] = position;
          }
        }
      }        
return array3
}

console.log('O menor número primo entre 0 e', 50, 'é', bubbleSort(primos(50))[0])
 
