let fatorial = [];

for ( let index = 10; index >= 1; index -=1) {
    fatorial.push(index);
}

console.log(fatorial)
let a = 1;

for (let index2 = 0; index2 < fatorial.length; index2 +=1){
    a *= fatorial[index2]
}

console.log(a)