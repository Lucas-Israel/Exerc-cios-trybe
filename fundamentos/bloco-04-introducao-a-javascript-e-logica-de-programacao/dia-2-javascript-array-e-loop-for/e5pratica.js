let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];

for (let a = 1; a < numbers.length; a+=1) {
  if (numbers[a] > maior) {
    maior = numbers[a];
  }
}
console.log("O maior é: " +maior);
