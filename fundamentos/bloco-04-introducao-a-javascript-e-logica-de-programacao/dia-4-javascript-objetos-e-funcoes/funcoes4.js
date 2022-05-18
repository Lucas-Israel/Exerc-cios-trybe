let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maNome(arr){
    let asc2 = arr.sort((a,b) => b.length - a.length);
    console.log("Maior: "+asc2[0]);
}

maNome(array)
