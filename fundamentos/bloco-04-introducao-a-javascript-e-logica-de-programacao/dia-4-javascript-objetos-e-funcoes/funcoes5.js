let array = [1, 2, 3, 2, 5, 8, 2, 3];

function numIgual(arr){
    let igual ={};
    let repete = 0, q;

    for (let i of arr){
      igual[i] ? igual[i] +=1 : igual[i] = 1;
    }

    for (let o in igual){
        if (igual[o] > repete){
            repete = igual[o];
            q = o;
        }
    }
    return q;
}

console.log(numIgual(array))
