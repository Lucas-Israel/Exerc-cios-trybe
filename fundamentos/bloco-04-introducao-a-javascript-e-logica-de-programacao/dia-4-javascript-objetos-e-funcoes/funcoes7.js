let word = 'joaofernando';
let ending = 'fernan';

function wordEnd(w, e){
    let a = Array.from(word);
    let b = Array.from(ending);

    a.reverse();
    b.reverse();

    let c = true

    for ( let index = 0; index < b.length; index +=1 ){
        if (a[index] !== b[index]){
            c = false;
            break;
        }
    }
    console.log(c)
}

wordEnd(word, ending)
