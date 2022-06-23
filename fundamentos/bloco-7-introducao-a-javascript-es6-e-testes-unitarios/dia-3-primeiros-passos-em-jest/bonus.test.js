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

  it('testa se searchEmployee retorna os erros corretos no preenchimento dos parametros', () => {
    expect(() => searchEmployee('a')).toThrow('erro1');
    expect(() => searchEmployee(undefined, 123)).toThrow('erro1');
    expect(() => searchEmployee()).toThrow('erro1');
    expect(() => searchEmployee(1, 2)).not.toThrow('erro1');
    expect(() => searchEmployee(1, 'a')).toThrow('erro2');
    expect(() => searchEmployee('1', 2)).toThrow('erro2');
    expect(() => searchEmployee(1, 2)).toThrow('erro2');
    expect(() => searchEmployee('1', '2')).not.toThrow('erro2');
  });

  it('testa se searchEmployee retorna o valor do parametro2 quando procurar o valor do parametro1 dentro do objeto professionalBoard', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
    expect(searchEmployee('4456-4', 'specialities')).toContain('Context API', 'RTL', 'Bootstrap');
  });

  it('testa se searchEmployee retorna os erros corretos quando o parametro 1 ou parametro 2 não existam no objeto', () => {
    expect(() => searchEmployee('8579-7', 'firstName')).toThrow('ID não identificada');
    expect(() => searchEmployee('8579-6', 'firstNamess')).toThrow('Informação indisponível');
  });
})