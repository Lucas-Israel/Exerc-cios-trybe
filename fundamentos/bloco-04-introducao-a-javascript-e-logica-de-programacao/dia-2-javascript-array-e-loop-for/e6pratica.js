let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let a = 0;
let qntImpar = 0;

for (let i = 0; i < numbers.length; i+=1) {
    if ( numbers[i]%2 == 1 ){
        qntImpar += 1;
    }
    else {
        
    }
}

if(qntImpar>0){
    console.log("Existem "+qntImpar+" impares")
}
else {
    console.log("Não existe impar")
}