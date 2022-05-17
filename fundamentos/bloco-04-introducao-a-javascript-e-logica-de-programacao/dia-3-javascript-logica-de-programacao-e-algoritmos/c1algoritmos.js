let fruits = [3, 4, 10, 1, 12];
let a = 0;

for ( let index = 0; index < fruits.length; index +=1) {
    a += fruits[index];
}

if (a > 15 ){
    console.log(a)
}
else{
    console.log("valor menor que 16")
}
