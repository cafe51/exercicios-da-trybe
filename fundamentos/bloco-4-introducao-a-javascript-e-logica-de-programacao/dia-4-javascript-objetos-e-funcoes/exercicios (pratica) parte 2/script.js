// Exercicio 1

let palavra = 'desenvolvimento';


function palindromo(word){
    let resultado = '';
    let contador = 0;
    if(word.length % 2 === 0){
        for (indice = 0; indice < word.length/2; indice += 1){
            if(word[indice] === word[word.length - 1 - indice]){
                contador += 1
            }if (contador === word.length/2){
                resultado = true
            }else resultado = false
        }

    }else
        for (indice = 0; indice < (word.length - 1)/2; indice += 1){
            if(word[indice] === word[word.length - 1 - indice]){
                contador += 1
            }if (contador === (word.length - 1)/2){
                resultado = true
            }else resultado = false           
    }
return resultado
}
console.log(palindromo(palavra))

// Exercicio 2

let array = [2, 3, 6, 7, 10, 1]

function indiceMaior(array){
    let counter = 0
    for (index = 0; index < array.length; index += 1){
        for (index2 = 0; index2 < array.length; index2 += 1){
            if(array[index] >= array[index2]){
                counter += 1
            }else counter = 0
            if (counter === array.length){
                result = index
            }
        }
    }
    return result
}
console.log(indiceMaior(array))

// // Exercicio 3

let arrays = [2, 4, 6, 7, 10, 0, -3];

function indiceMenor(array2){
    let counterr = 0
    for (ind = 0; ind < array2.length; ind += 1){
        for (ind2 = 0; ind2 < array2.length; ind2 += 1){
            if(array2[ind] <= array2[ind2]){
                counterr += 1
            }else counterr = 0
            if (counterr === array2.length){
                resultad = ind
            }
        }
    }
    return resultad
}
console.log(indiceMenor(arrays))

// Exercicio 4

let arrayDeTestes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

function ordenador(lista){
    let auxi = '';
    let element1 = 0
    let element2 = 0
    for (let i2 = 1; i2 < lista.length; i2 += 1){
        for(let i3 = 0; i3 < lista.length; i3 += 1){
            element1 = lista[i2]
            element2 = lista[i3]
            if (element1.length> element2.length){
                auxi = lista[i2];
                lista[i2] = lista[i3];
                lista[i3] = auxi;
            }
        }
    }
return lista
}
console.log(ordenador(arrayDeTestes)[0]);

// Exercicio 5

let novoArray = [2, 3, 2, 5, 8, 2, 3];

function organizadorDeRepetições(array3){
    let arrayContador = [];
    arrayContador.length = array3.length;
    let counterrr = 0;
    for (indx = 0; indx < array3.length; indx += 1){
        for (indx2 = 0; indx2 < array3.length; indx2 += 1){
            if(array3[indx] === array3[indx2]){
                counterrr += 1;   
            }
        }
    arrayContador[indx] = counterrr;
    counterrr = 0;
    };
return arrayContador;
};

function bubbleSort(barray){
    for (let bindex2 = 1; bindex2 < barray.length; bindex2 += 1){
        for (let secondbIndex = 0; secondbIndex < bindex2; secondbIndex += 1) {
          if (barray[bindex2] > barray[secondbIndex]) {
            let position = barray[bindex2];
            barray[bindex2] = barray[secondbIndex];
            barray[secondbIndex] = position;
          }
        }
      }        
return barray;
};

function oMaisRepetido(barray) {
    const arrayDeRepeticoes = organizadorDeRepetições(barray);

    const arrayOrganizadoCrescente = bubbleSort(organizadorDeRepetições(barray));

    const maiorNumeroDeRepetições = arrayOrganizadoCrescente[0];

    const indiceDaMaiorRepeticao = arrayDeRepeticoes.indexOf(maiorNumeroDeRepetições);

    const elementoMaisRepetido = barray[indiceDaMaiorRepeticao];

return elementoMaisRepetido;
};

function mensagem(barray){
    const msg = 'O elemento ' + oMaisRepetido(barray) + ' se repetetiu por ' + bubbleSort(organizadorDeRepetições(barray))[0] + ' vezes';
    return msg;
};

console.log (mensagem(novoArray));

// Exercicio 6

let N = 5
function somatorio (number){
    let soma = 0
    if (number >= 0 && number%1 === 0){
        for (xindex = 1; xindex <= number;  xindex += 1){
            soma = xindex + soma
        }
    }else soma = 'O numero inserido não é inteiro ou positivo'    
return soma
}
console.log(somatorio(N))

// Exercicio 7

function verificadorDeStrings(word, ending){
    let resposta = 0
    for (yndex = 0; yndex < ending.length;  yndex += 1){
        if (ending[(ending.length -1) - yndex] === word[(word.length -1) - yndex]){
            resposta = true
        }else resposta = false
    }
    return resposta    
}

console.log(verificadorDeStrings('joaofernando', 'fernan'))

