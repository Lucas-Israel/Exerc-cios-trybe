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
    expect(() => searchEmployee(2, 1)).toThrow(Error);
    expect(() => searchEmployee(a, b)).toThrow(Error);
  });

  it('testa se searchEmployee retorna os erros corretos', () => {
    expect(() => searchEmployee('a')).toThrow('erro1');
    expect(() => searchEmployee(undefined, 123)).toThrow('erro1');
    expect(() => searchEmployee()).toThrow('erro1');
    expect(() => searchEmployee(1, 2)).not.toThrow('erro1');
    expect(() => searchEmployee(1, 'a')).toThrow('erro2');
    expect(() => searchEmployee('1', 2)).toThrow('erro2');
    expect(() => searchEmployee(1, 2)).toThrow('erro2');
    expect(() => searchEmployee('1', '2')).not.toThrow('erro2');
  });

  it('testa se searchEmployee recebe dois parametros na sua criação', () => {
    expect(searchEmployee.length).toBe(2);
  });
})