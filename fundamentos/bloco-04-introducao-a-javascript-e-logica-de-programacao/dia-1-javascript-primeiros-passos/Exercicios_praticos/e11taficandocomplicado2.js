const salario = 3000;
const INSS1 = [1556.95, 2594.93, 5189.83];
const IR1 = [1903.99, 2826.66, 3751.06, 4664.68];
let aliquotaINSS = "";
let aliquotaIR = "";


if (salario < INSS1[0]){
    aliquotaINSS = 1.08;
}
else if (salario >= INSS1[0] && salario < INSS1[1]){
    aliquotaINSS = 1.09;
}
else if (salario >= INSS1[1] && salario < INSS1[2]){
    aliquotaINSS = 1.11;
}
else {
    aliquotaINSSMAX = 570.88;
}

let reducaoINSS = salario * aliquotaINSS - salario;
let salarioBase = salario - reducaoINSS

if (salario > INSS1[2]) {
    salarioBase = salario - aliquotaINSSMAX;
}
else {
    aliquotaINSSMAX = 570.88
}


if (salarioBase < IR1[0]){
    aliquotaIR = 1;
    parcelaIR = 0;
}
else if (salarioBase >= IR1[0] && salarioBase < IR1[1]){
    aliquotaIR = 1.075; 
    parcelaIR = 142.80;
}
else if (salarioBase >= IR1[1] && salarioBase < IR1[2]){
    aliquotaIR = 1.15;
    parcelaIR = 354.80;
}
else if (salarioBase >= IR1[2] && salarioBase <= IR1[3]){
    aliquotaIR = 1.225; 
    parcelaIR = 636.13;
}
else {
    aliquotaIR = 1.275;
    parcelaIR = 869.36;
}


const salarioIR = salarioBase * aliquotaIR - salarioBase;
const salarioParc = salarioIR - parcelaIR;
const salarioLiq = (Math.round((salarioBase - salarioParc)*100)/100);


console.log("Salario Bruto R$:"+salario);
console.log("Aliquota INSS:*"+aliquotaINSS);
console.log("Aliquota INSSMAX R$:"+aliquotaINSSMAX)
console.log("Aliquota IR:*"+aliquotaIR,"   Parcela de IR R$:" +parcelaIR);
console.log("Salario Liquido R$:"+salarioLiq);
