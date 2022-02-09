let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// Usando for
for(i = 0; i < numbers.length; i += 1){
    console.log(numbers[i]);
}

// Usando for of
for (let number of numbers){
    console.log(number);
}

//2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// Usando for
let sum = 0
for(i2 = 0; i2 < numbers.length; i2 += 1){
    sum = sum + numbers[i2];
}
console.log(sum);

// Usando for of
let sum2 = 0
for (let number1 of numbers){
    sum2 = sum2 + number1
}
console.log(sum2)

//3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

function sumNumbers(numbersToBeSummed){
    let sum3 = 0
    for(i2 = 0; i2 < numbersToBeSummed.length; i2 += 1){
        sum3 = sum3 + numbersToBeSummed[i2];
    }return sum3;
}console.log (sumNumbers(numbers))

let media = sumNumbers(numbers)/numbers.length


// console.log(media)

function giveMedia(array){
    let media = sumNumbers(array)/array.length
    return media;
}

console.log(giveMedia(numbers))

//4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

function giveMediaAndSize(array2){
    let result = ''
    if (giveMedia(array2) > 20){
        result = 'valor maior que 20'
    }else result = 'valor menor que 20'
    return result
}console.log(giveMediaAndSize(numbers))


//5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let contadorAcertos = [];
for(let i4 = 0; i4 < numbers.length; i4 += 1){
    for (i5 = 0; i5 < numbers.length; i5 += 1){
        if (numbers[i4] >= numbers[i5]){
            contadorAcertos.push('x')
        }else contadorAcertos = []

    }
    if (contadorAcertos.length === numbers.length){
        console.log(numbers[i4], 'é o maior número')
    }   
}


//6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let contadorImpares = [];
for(let i8 = 0; i8 < numbers.length; i8 += 1){
    if (numbers[i8] % 2 != 0){
    contadorImpares.push(numbers[i8]);
    }
}
if (contadorImpares.length > 0){
console.log('Existem', contadorImpares.length, 'valores ímpares');
}else console.log('Não existem valores ímpares')

//7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let contadorAcertos2 = [];
for(let i6 = 0; i6 < numbers.length; i6 += 1){
    for (i7 = 0; i7 < numbers.length; i7 += 1){
        if (numbers[i6] <= numbers[i7]){
            contadorAcertos2.push('x')
        }else contadorAcertos2 = [];
    }
    if (contadorAcertos2.length === numbers.length){
        console.log(numbers[i6], 'é o menor número');
    }   
}


//8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let banana = [];
for (let i9 = 1; i9 <= 25; i9 += 1){
    banana.push(i9);
}
console.log(banana);


//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

banana = []
for (let i10 = 1; i10 <= 25; i10 += 1){
    
    banana.push(i10/2);
}
console.log(banana);
