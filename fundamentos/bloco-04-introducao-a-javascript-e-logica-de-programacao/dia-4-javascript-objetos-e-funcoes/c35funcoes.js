let a = 60;
let b = 70;
let c = 60;

function triangulo (a, b, c){
    if (a + b + c == 180){
        return true;
    }
    else {
        return false;
    }
}

console.log(triangulo(a, b, c))