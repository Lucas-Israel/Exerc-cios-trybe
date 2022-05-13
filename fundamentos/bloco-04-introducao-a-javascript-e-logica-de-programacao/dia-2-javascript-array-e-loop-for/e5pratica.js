let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var maior = numbers[0];

for (var a = 1; a < numbers.length; a++) {
  if (numbers[a] > maior) {
    maior = numbers[a];
  }
}
console.log("O maior é: " +maior);
