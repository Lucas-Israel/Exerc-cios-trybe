let array = [];
let nArr = 50;

function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
          return false; 
    return num > 1;
}

for ( let a = nArr; a >=0; a-=1){
    array.push(a)
    
}

for ( let b = array[0]; b < array.length*1.5; b -=1){
      if( isPrime(b)){
          console.log(b);
          break;
      }
}

