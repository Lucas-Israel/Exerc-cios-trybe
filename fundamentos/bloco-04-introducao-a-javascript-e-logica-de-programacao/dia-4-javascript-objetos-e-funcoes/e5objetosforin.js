let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

  info.recorrente = 'Sim';

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain Dell's Four Color Commics #178",
    nota: "O último MacPatinhas",
};

info2.recorrente = "Sim";


if(info.recorrente == info2.recorrente ) {
    delete info.recorrente;
    delete info2.recorrente;

    for (let a in info2) {
        console.log(info[a]+" e "+info2[a])  
    }
    console.log("Ambos recorrentes")
}
else {
    for (let a in info2) {
        console.log(info[a]+" e "+info2[a])  
    } 
}