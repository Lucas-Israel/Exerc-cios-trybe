let a = 877;

let primo = true;

if (a < 2) {
    primo = false;
} 
else {
     for (let b = 2; b < a; b+=1) {
      if (a % b == 0) {
        primo = false;
        break;
        }
    }
}

if (primo) {
    console.log(a+" é primo")
} 
else {
    console.log(a+" não é primo")
}