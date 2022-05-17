let array = [];
let nArr = 50;

function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
          return false; 
    return num > 1;
}

for( let a = 0; a <=nArr; a+=1){
    array.push(a)
}


for (let b = 0; b < array.length; b +=1) {
    console.log(isPrime(b))
}
