const a = 3;
const b = 1;
const c = 5;
let message;

if (a > b && a > c) {
    message = a;
}
else if (b > a && b > c) {
    message = b;
}
else {
    message = c;
}

console.log("O maior número é: " +message);
