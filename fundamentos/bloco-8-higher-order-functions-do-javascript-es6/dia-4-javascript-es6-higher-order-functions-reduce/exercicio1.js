const arrays = require ('./matriz.js');

const abc = (A) => A.reduce((a, b) => a.concat(b))

console.log(abc(arrays))
