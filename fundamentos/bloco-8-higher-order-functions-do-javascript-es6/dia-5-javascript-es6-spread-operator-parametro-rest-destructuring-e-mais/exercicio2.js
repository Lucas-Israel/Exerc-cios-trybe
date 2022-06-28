const x = [1,2,3,4]

const sum = (...a) => a.reduce((a, b) => a + b);

console.log(sum(...x));