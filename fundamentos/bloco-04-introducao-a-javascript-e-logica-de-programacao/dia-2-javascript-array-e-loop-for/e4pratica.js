let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Com o mesmo código do exercício anterior, 
// caso o valor final seja maior que 20,
//  imprima a mensagem: "valor maior que 20". 
// Caso não seja, imprima a mensagem: 
// "valor menor ou igual a 20";

let a = 0;
let b

for (let i = 0; i < numbers.length; i+=1) {
    a += numbers[i];
    b = a/numbers.length;
}
console.log(b);

if (b > 20){
    console.log("Valor maior que 20")
}
else {
    console.log("Valor menor que 20")
}