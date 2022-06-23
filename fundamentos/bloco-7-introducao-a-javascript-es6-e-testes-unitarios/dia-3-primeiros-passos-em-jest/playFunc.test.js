const { encode, decode } = require('../../../../projetos-T23/sd-023-b-project-playground-functions/src/challenges');

describe('testa as funções encode, decode', () => {
  it('testa se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('a e i o u')).toBe('1 2 3 4 5');
  });

  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
    expect(decode('1 2 3 4 5')).toBe('a e i o u');
  });

  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('b c d f g')).toBe('b c d f g');
    expect(decode(6, 7, 8, 9, 10)).toBe(6, 7, 8, 9, 10);
  });

  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('teste').length).toBe(5);
    expect(encode('paralelepipedo').length).toBe(14);
  });
})