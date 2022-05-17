let a = -1;

function positivo (b){
    if (b > 0){
        return "Positivo"
    }
    else if (b < 0){
        return "Negativo"
    }
    else {
        return "Zero"
    }
}

console.log(positivo(a))