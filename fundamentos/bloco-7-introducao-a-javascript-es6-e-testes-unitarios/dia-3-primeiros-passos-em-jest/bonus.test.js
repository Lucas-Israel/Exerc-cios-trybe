const searchEmployee = require('./bonus.js')

describe('testa a função do exercício bonus do dia 7.3', () => {
  it('testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('testa se searchEmployee recebe dois parametros na sua criação', () => {
    expect(searchEmployee.length).toBe(2);
  });

  it('testa se searchEmployee retorna erro ao faltar parametros em seu uso', () => {
    expect(() => searchEmployee(1)).toThrow(Error);
    expect(() => searchEmployee(undefined, 'a')).toThrow(Error);
  });

  it('testa se searchEmployee recebe os parametros do tipo certo', () => {
    expect(() => searchEmployee('a', 1)).toThrow(Error);
    expect(() => searchEmployee(a, b)).toThrow(Error);
  });
})