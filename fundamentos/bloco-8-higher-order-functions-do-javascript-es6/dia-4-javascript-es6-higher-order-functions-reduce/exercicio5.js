const names = require('./names.js');

const abc = (A) => A.reduce((a, b) => a + b).replace(/[b-zB-Z]/g, '').length

console.log(abc(names));
