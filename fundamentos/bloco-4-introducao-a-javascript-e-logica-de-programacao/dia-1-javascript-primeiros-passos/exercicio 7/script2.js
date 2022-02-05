const salarioBruto = 3000;

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
    aliquotaIr = 142.80
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

