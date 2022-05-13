let selecao = "aprovada";
let message = "";

switch (selecao) {
    case "aprovada":
        message = "Parabéns você foi aprovada(o)!";
        break;
    
    case "lista":
        message = "Você está na lista";
        break;

    case "reprovada":
        message = "Você foi reprovada(o)";
        break;
    
    default:
        message = "não se aplica";
        break;
}

console.log(message);
