let array = [];
let numero = 0;

for ( let index = 1; index < 26; index +=1){
    array.push(index);
}


for (let index2 = 0; index2 < array.length; index2 +=1){
    array[index2] /= 2;
}

console.log(array);



