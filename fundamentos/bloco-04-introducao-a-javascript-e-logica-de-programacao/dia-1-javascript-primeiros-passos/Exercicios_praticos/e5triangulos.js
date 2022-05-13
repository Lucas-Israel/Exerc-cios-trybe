const a1 = 60;
const a2 = 60;
const a3 = 60;

if (a1 < 0 || a2 <0 || a3 < 0) {
    message = "ângulo inválido"
}
else if (a1+a2+a3 == 180) {
    message = true;
}
else {
    message = false;
}

console.log(message);