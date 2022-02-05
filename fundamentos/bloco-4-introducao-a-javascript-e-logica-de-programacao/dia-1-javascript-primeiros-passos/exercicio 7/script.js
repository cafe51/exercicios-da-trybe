// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
//  (a / b)
// Módulo (a % b)

let a = 9;
let b = 3;

// Programa 1 Adição
console.log('A soma de', + a, 'com', + b, 'é', + a + b);

// Programa 2 Subtração
console.log('A subtração de', + a, 'por', + b, 'é', + a - b);

// Programa 3 Multiplicação
console.log('A multiplicação de', + a, 'por', + b, 'é', + a * b);

// Programa 4 Divisão
console.log('A divisão de', + a, 'por', + b, 'é', + a / b);

// Programa 5 Módulo
console.log('O resto da divisão de', + a, 'por', + b, 'é', + a % b);


// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const c = 4;
const d = 5;

if (c > d){
    console.log('Entre', + c, 'e', + d, c, 'é maior');
}else if (d > c)
    console.log('Entre', + c, 'e', + d + ',', + d, 'é maior');


// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const e = 1;
const f = 2;
const g = 3;

if (e > f){
    if (e > g){
        console.log(e, 'é o maior número')
    }else console.log(g, 'é o maior nnúmero')
}else if (f > g){
    console.log (f, 'é o maior número')
}else console.log(g, 'é o maior nnúmero')


// 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const j = 0;

if (j > 0){
    console.log('positive')
}else if (j < 0){
    console.log('negative')
}else console.log('zero')


// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angulo1 = 40;
const angulo2 = 30
const angulo3 = 110;

if (typeof angulo1 != typeof angulo2 || typeof angulo1 != typeof angulo3 || angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
    console.log('erro')
}else if (angulo1 + angulo2 + angulo3 === 180){
    console.log(true)
}else if (angulo1 + angulo2 + angulo3 !== 180){
    console.log(false)
}


// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// Usando for

let apeça = 'radiNhA';
let apeça1 = apeça.toLowerCase()

let apeão = 'peão';
let atorre = 'torre';
let acavalo = 'cavalo';
let abispo = 'bispo';
let arei = 'rei';
let arainha = 'rainha';

let mpeão = 'O peão anda uma casa pra frente ou duas se no início do jogo';
let mtorre = 'A torre casas na vertical';
let mcavalo = 'O cavalo anda em L';
let mbispo = 'O bispo anda as casas na diagonal';
let mrei = 'O rei anda uma casa para qualquer direção';
let mrainha = 'A rainha anda casas em todas direções';


let xadrez = [apeão, atorre, acavalo, abispo, arei, arainha];
let contador = []
for (let i = 0; i < xadrez.length; i += 1){
    if (apeça1 === xadrez[i]){
        if (xadrez[i] === apeão){
            console.log(mpeão)
        }else if (xadrez[i] === atorre){
            console.log(mtorre)
        }else if (xadrez[i] === acavalo){
            console.log(mcavalo)
        }else if (xadrez[i] === abispo){
            console.log(mbispo)
        }else if (xadrez[i] === arei){
            console.log(mrei)
        }else if (xadrez[i] === arainha){
            console.log(mrainha)
        }
    }else contador.push(1)    
}
if (contador.length == 6){
    console.log(apeça + ' não é uma peça de xadrez')
}

//  usando switch       
 
let peça = 'cavalo';
let peça1 = peça.toLowerCase()

let peão = 'O peão ana uma casa pra frente ou duas se no início do jogo';
let torre = 'A torre casas na vertical';
let cavalo = 'O cavalo anda em L';
let bispo = 'O bispo anda as casas na diagonal';
let rei = 'O rei anda uma casa para qualquer direção';
let rainha = 'A rainha anda casas em todas direções';

switch(peça1){
    case 'peão':
        console.log(peão);
        break;
    case 'torre':
        console.log(torre);
        break;
    case 'cavalo':
        console.log(cavalo);
        break;
    case 'bispo':
        console.log(bispo);
        break;
    case 'rei':
        console.log(rainha);
        break;
    case 'rainha':
        console.log(rainha);
        break;
    default:
        console.log(peça + ' não é uma peça de xadrez')
}

// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 20;

if (nota > 100){
    console.log('E R R O')
}else if (nota >= 90){
            console.log('A')
        }else if (nota >= 80){
            console.log('B')
        }else if (nota >= 70){
            console.log('C')
        }else if (nota >= 60){
            console.log('D')
        }else if (nota >= 50){
            console.log('E')
        }else if (nota < 50){
            console.log('F')
        }

// 8 -Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false

// Usando o for

const ax = 4;
const ay = 8;
const az = 15;

let tresNumeros = [ax, ay, az];
let impares = []
let pares = []


for (index = 0; index <= tresNumeros.length; index += 1){
    if (tresNumeros[index] % 2 !== 0){
        impares.push(1)
    }else pares.push(1)
}
if (pares.length == tresNumeros.length){
    console.log('false')
}else console.log('true')

// Usando um único if

const bx = 4;
const by = 8;
const bz = 15;

// 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

if (bx % 2 !== 0 || by % 2 !== 0 || bz % 2 !== 0){
    console.log('true')
}else console.log('false')

// 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

const custo = 2; 
const venda = 3;

let custoComImposto = (custo + 0.2*custo); 
let lucro = (venda - custoComImposto);
let quantidade = 1000

console.log(quantidade * lucro)


// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

const salarioBruto = 1500;

let aliquotaInss = 0;

if (salarioBruto <= 1556.94){
    aliquotaInss = 0.08*salarioBruto
}else if (salarioBruto == 1556.95 || salarioBruto <= 2594.92){
    aliquotaInss = 0.09*salarioBruto
}else if (salarioBruto == 2594.93 || salarioBruto <= 5189.82){
    aliquotaInss = 0.11*salarioBruto
}else if (salarioBruto > 5189.82){
    aliquotaInss = 570*salarioBruto
}


const salarioInssPago = (salarioBruto - aliquotaInss);
let aliquotaIr;

if (salarioInssPago <= 1903.98){
    aliquotaIr = 0
}else if (salarioInssPago == 1903.99 || salarioInssPago <= 2826.65){
    aliquotaIr = 0.075*salarioInssPago - 142.80
}else if (salarioInssPago == 2826.66 || salarioInssPago <= 3751.05){
    aliquotaIr = 0.15*salarioInssPago - 354.80
}else if (salarioInssPago == 3751.06 || salarioInssPago <= 4664.68){
    aliquotaIr = 0.225*salarioInssPago - 636.13
}else if (salarioInssPago > 4664.68){
    aliquotaIr = 0.275*salarioInssPago - 869.36
}


let salarioLiquido = (salarioInssPago - aliquotaIr);

console.log('R$'+salarioBruto + ',00 de salário bruto dá R$'+ salarioLiquido + ',00 de salário líquido')

