// Sem usar bubble sort

//1. Ordene o array numbers em ordem crescente e imprima seus valores
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];




function achadorDeNumeroMenor(a){
    let contadorAcertos = ['x'];
    for(let i = 0; i < a.length; i += 1){
        for (let i2 = 0; i2 < a.length; i2 += 1){
            if (a[i] <= a[i2]){
                contadorAcertos.push('x');
            }
                 
        }
        if (contadorAcertos.length - 1 === a.length){
            return a[i];
        }else contadorAcertos = ['x']   
    }
}

function ordenadorCrescente(array){
    v2 = array.length
    let removidos = 0;
    let arrayOrdenado = [];
    for(let i3 = 0; i3 < v2; i3 += 1){    
        arrayOrdenado.push(achadorDeNumeroMenor(array));
        array.splice(    [array.indexOf(    achadorDeNumeroMenor(array)   )]     , 1      )
    }
return arrayOrdenado;
}




//2. Ordene o array numbers em ordem decrescente e imprima seus valores;
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
function achadorDeNumeroMaior(a){
    let contadorAcertos = ['x'];
    for(let i = 0; i < a.length; i += 1){
        for (let i2 = 0; i2 < a.length; i2 += 1){
            if (a[i] >= a[i2]){
                contadorAcertos.push('x');
            }
                 
        }
        if (contadorAcertos.length - 1 === a.length){
            return a[i];
        }else contadorAcertos = ['x']   
    }
}

function ordenadorDecrescente(array){
    v2 = array.length
    let removidos = 0;
    let arrayOrdenado = [];
    for(let i3 = 0; i3 < v2; i3 += 1){    
        arrayOrdenado.push(achadorDeNumeroMaior(array));
        array.splice(    [array.indexOf(    achadorDeNumeroMaior(array)   )]     , 1      )
    }
return arrayOrdenado;
}

console.log(ordenadorDecrescente(numbers))

// Usando bubble sort

//1. Ordene o array numbers em ordem crescente e imprima seus valores
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
function bubbleSort(array2){
    for (let index = 1; index < array2.length; index += 1) {
        for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
          if (array2[index] < array2[secondIndex]) {
            let position = array2[index];
            array2[index] = array2[secondIndex];
            array2[secondIndex] = position;
          }
        }
      }        
return array2
}
console.log(bubbleSort(numbers));

//2. Ordene o array numbers em ordem decrescente e imprima seus valores;
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
function bubbleSort2(array3){
    for (let index = 1; index < array3.length; index += 1) {
        for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
          if (array3[index] > array3[secondIndex]) {
            let position = array3[index];
            array3[index] = array3[secondIndex];
            array3[secondIndex] = position;
          }
        }
      }        
return array3
}
console.log(bubbleSort2(numbers));

// Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
function bubbleSort3(array4){
    let novoArray = []
    for (let index = 1; index < array4.length; index += 1) {
        for (let secondIndex = index - 1; secondIndex < index; secondIndex += 1){
            array4[secondIndex] = (array4[secondIndex] * array4[index]);
            novoArray.push(array4[secondIndex])
        }
    }
array4[array4.length - 1] = (array4[array4.length - 1]*2);
novoArray.push(array4[array4.length - 1]);    
return novoArray;
}

console.log(bubbleSort3(numbers))

// Usando push

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
function bubbleSort3(array4){
    for (let index = 1; index < array4.length; index += 1) {
        for (let secondIndex = index - 1; secondIndex < index; secondIndex += 1){
            array4[secondIndex] = (array4[secondIndex] * array4[index]);
        }
    }
array4[array4.length - 1] = array4[array4.length - 1]*2       
return array4
}

console.log(bubbleSort3(numbers))


