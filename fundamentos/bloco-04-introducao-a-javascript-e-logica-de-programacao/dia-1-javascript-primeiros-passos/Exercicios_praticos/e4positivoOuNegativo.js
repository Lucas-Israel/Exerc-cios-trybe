const a = 0.50;
let message = "";

if (a < 0) {
    message = "negative"
}
else if (a > 0) {
    message = "positive"
}
else {
    message = "zero"
}

console.log("The number is " +message);
