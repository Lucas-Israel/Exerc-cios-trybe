let a = 6;
let b = 5;
let c = 4;

function maior3 (d, e, f){
    if (d > e && d > f){
        return d;
    }
    else if (e > d && e > f){
        return e;
    }
    else {
        return f;
    }
}

console.log(maior3(a, b, c))