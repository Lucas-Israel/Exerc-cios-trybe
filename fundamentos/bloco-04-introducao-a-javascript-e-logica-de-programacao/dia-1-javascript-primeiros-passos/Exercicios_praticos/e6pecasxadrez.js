let peca = "peao";
let message = "";

switch(peca) {
    case "Peão": case "peão": case "Peao": case "peao":
        message = "Anda 1 ou 2 casas para frente e ataca na casa adjacente diagonal"
        break;
    
    case "Torre": case "torre": case "Tower": case "tower":
        message = "Anda em linha quantas casas desejar"
        break;

    case "Cavalo": case "cavalo": case "Horse": case "horse":
        message = "Anda em forma de L e apenas em L em qualquer direção e pula peças que estão no caminho"
        break;

    case "Bispo": case "bispo": case "Bishop": case "bishop":
        message = "Anda em diagonal quantas casas desejar"
        break;

    case "Rainha": case "rainha": case "Queen": case "queen":
        message = "Anda em linha reta em qualquer direção quantas casas desejar"
        break;

    case "Rei": case "rei": case "King": case "king":
        message = "Anda em qualquer direção 1 casa"
        break;

    default:
        message = "Essa peça não é valida"
        break;
}

console.log(message+ ".")