let vector = [[1, 2], [3,4,5,6], [7,8,9,10,]];

function qualPar(){
    let arr2=[];
    for (let a of vector){
        for (let i of a){
            arr2.push(i);
        }
    }

    let par=[];
    for (i of arr2){
        if(arr2[i]%2 !== 0){
            par.push(i);
        }
    }return par;
}

console.log(qualPar(vector))
