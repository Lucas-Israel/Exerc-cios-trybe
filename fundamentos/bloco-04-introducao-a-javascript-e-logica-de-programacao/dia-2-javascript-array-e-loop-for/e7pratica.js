let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var menor = numbers[0];

for (var a = 1; a < numbers.length; a++) {
  if (numbers[a] < menor) {
    menor = numbers[a];
  }
}
console.log("O menor é: " +menor);
