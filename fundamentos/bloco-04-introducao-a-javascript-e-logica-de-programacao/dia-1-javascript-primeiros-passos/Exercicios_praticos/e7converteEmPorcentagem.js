const nota = 49;
let message = "";

if (nota < 0 || nota > 100) {
  message = "essa nota não é um valor válido.";
}
else if (nota >= 90 && nota <= 100) {
  message = "A";
}
else if (nota >= 80) {
  message = "B";
}
else if (nota >= 70) {
  message = "C";
}
else if (nota >= 60) {
  message = "D";
}
else if (nota >= 50) {
  message = "E";
}
else if (nota < 50) {
  message = "F";
}

console.log("Nota: "+message);
