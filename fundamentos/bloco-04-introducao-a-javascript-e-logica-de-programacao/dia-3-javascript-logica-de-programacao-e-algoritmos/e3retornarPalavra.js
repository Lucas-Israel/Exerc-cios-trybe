let array = ['java', 'javascript', 'python', 'html', 'css'];

let asc = array.sort((a,b) => a.length - b.length);
console.log("Menor: "+asc[0]);

let asc2 = array.sort((a,b) => b.length - a.length);
console.log("Maior: "+asc2[0]);
