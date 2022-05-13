let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let a = 0;
let b

for (let i = 0; i < numbers.length; i+=1) {
    a += numbers[i];
    b = a/numbers.length;
}
console.log(b);