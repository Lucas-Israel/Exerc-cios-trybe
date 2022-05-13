const salario = 3000;
const INSS1 = 1556.94;
const INSS2 = [1556.95, 2594.92]
const INSS3 = [2594.93, 5189.82]
const IR1 = 1903.98;
const IR2 = [1903.99 , 2826.65];
const IR3 = [2826.66, 3751.05];
const IR4 = [3751.06, 4664.68];
let aliquotaINSS = "";
let aliquotaIR = "";



if (salario <= INSS1){
    aliquotaINSS = 1.08;
}
else if (salario >= INSS2[0] && salario <= INSS2[1]){
    aliquotaINSS = 1.09;
}
else if (salario >= INSS3[0] && salario < INSS3[1]){
    aliquotaINSS = 1.11;
}
else {
    aliquotaINSSMAX = 570.88;
}

console.log("Aliquota INSS: *"+aliquotaINSS)


if (salario < IR1){
    aliquotaIR = 1;
    parcelaIR = 0;
}
else if (salario >= IR2[0] && salario <= IR2[1]){
    aliquotaIR = 1.075; 
    parcelaIR = 142.80;
}
else if (salario >= IR3[0] && salario <= IR3[1]){
    aliquotaIR = 1.15;
    parcelaIR = 354.80;
}
else if (salario >= IR4[0] && salario <= IR4[1]){
    aliquotaIR = 1.225; 
    parcelaIR = 636.13;
}
else {
    aliquotaIRMAX = 1.275;
    parcelaIR = 869.36;
}

console.log("Aliquota IR: *"+aliquotaIR,"   Parcela de IR R$:" +parcelaIR)

const reducaoINSS = salario * aliquotaINSS - salario;
const salarioBase = salario - reducaoINSS
// const reducaoIR = salario*aliquotaIR-salario;

console.log(Math.round(salarioBase))

