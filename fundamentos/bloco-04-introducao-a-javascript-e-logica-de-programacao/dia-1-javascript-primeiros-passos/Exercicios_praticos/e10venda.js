const a = [1,2];
const b = [4,6];
const c = 1000;
const t = 1.2;

const lucroA = (a[1]-a[0]*t)*c;
const lucroB = (b[1]-b[0]*t)*c;

if(lucroA <= 0 || lucroB <= 0) {
    message = "Erro lucro igual ou menor que 0";
}
else {
    message = "Lucro A:"+lucroA+"     Lucro B:"+lucroB;
}



console.log(message);
