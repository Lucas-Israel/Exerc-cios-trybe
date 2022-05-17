let n = 5;

for (let a = 1; a <= n; a +=1) {
    if (n > 1) {
        let o = "";
        for(let b = 0; b < n - a; b +=1) {
            o += " ";
        }
            for (let c = 0; c < a; c +=1) {
                o += "*";
            }

        console.log(o);
    }
}

