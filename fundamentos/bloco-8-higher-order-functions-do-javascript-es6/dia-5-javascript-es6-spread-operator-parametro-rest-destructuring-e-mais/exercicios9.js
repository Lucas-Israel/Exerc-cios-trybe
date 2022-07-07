
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const abc = (A) => ({spring, summer, autumn, winter} = A, [ ...winter, ...spring, ...summer, ...autumn]);

console.log(abc(yearSeasons));
