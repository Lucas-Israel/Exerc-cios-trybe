let fatorial = [];
let n = 6;

function somaTudo(param){
    for ( let index = n; index >= 1; index -=1) {
        fatorial.push(index);
    }

    let a = 1;

    for (let index2 = 0; index2 < fatorial.length; index2 +=1){
        a *= fatorial[index2]
    }return a
}

console.log(somaTudo(n))