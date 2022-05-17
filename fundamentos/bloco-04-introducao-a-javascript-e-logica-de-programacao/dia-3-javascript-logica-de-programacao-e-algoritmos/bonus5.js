let n = 5;

for (let a = 1; a <= n; a +=2) {
    if (n > 1) {
        let o = "";
        for(let b = 0; b < Math.ceil((n - a)/2); b +=1) {
            o += " ";
        }
            for (let c = 0; c < a; c +=1) {
                if (c == 0 || c == a - 1 || a == n){
                o += "*";
                }
                else {
                    o += " ";
                }
            }
            

        console.log(o);
    }
}

