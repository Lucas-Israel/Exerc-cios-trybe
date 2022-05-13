const nota = 80;

if (nota >= 80 && nota <= 100){
  console.log ("Nota: "+nota+"! Parabéns, você foi aprovada(o)!" );
}
else if (nota < 80 && nota >= 60){
  console.log ("Nota: "+nota+", você está na nossa lista de espera" );
}
else if (nota < 60 && nota >=0){
  console.log ("Nota: "+nota+", você foi reprovada(o)" )
}
else {
  console.log ("Essa nota não é um valor valido.")
}
