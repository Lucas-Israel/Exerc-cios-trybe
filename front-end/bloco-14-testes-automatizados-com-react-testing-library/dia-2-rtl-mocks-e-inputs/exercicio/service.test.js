let {
  randomNum,
  paraMaiuscula,
  primeiraLetra,
  concatena,
  fetchDog,
} = require('./service');

afterEach(() => jest.clearAllMocks());

describe('Testando a função randomNum', () => {
  it('é uma função?', () => {
    expect(typeof randomNum).toBe('function');
  });
  it('foi chamado apenas uma vez?', () => {
    randomNum = jest.fn();
    randomNum();
    expect(randomNum).toHaveBeenCalledTimes(1);
  });
  it('esta retornando um valor entre 0 e 100?', () => {
    randomNum = jest.fn().mockReturnValue(0);
    expect(randomNum()).not.toBe(-1);
    randomNum = jest.fn().mockReturnValue(100);
    expect(randomNum()).not.toBe(101);
  });
});

describe('Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez', () => {
  it('a função foi chamada e a nova implementação de divisão foi aplicada?', () => {
    randomNum = jest.fn().mockImplementationOnce((a, b) => a / b);
    expect(randomNum(10, 5)).toBe(2);
    expect(randomNum(10, 5)).not.toBe(3);
  });
  it('a aplicação da nova implementação acontece apenas uma vez?', () => {
    randomNum = jest.fn().mockImplementationOnce((a, b) => a / b);
    randomNum();
    expect(randomNum).toHaveBeenCalledTimes(1);
    randomNum();
    expect(randomNum).toHaveBeenCalledTimes(2);
  });
});

describe('What does Marcellus Wallace look like?', () => {
  it('he is black!', () => {
    randomNum = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
    expect(randomNum(10, 5, 2)).toBe(100);
    expect(randomNum(10, 5, 2)).not.toBe(3);
  });
});

describe('go on!', () => {
  it('he is bald!', () => {
    randomNum = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
    randomNum(5, 2, 1);
    randomNum(5, 2, 1);
    expect(randomNum).toHaveBeenCalledTimes(2);
  });
})

describe('does he look like a b...?', () => {
  it('what?', () => {
    randomNum = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
    randomNum(5,2,1)
    randomNum.mockReset();
    expect(randomNum).toHaveBeenCalledTimes(0)

  
    randomNum = jest.fn().mockImplementationOnce((a) => a * 2);
    expect(randomNum(5)).toBe(10)
    expect(randomNum).toHaveBeenCalledTimes(1)
    expect(randomNum).toHaveBeenCalledWith(5)
  });
})

describe('Faça o mock das funções para com os seguintes casos:', () => {
  it('Desenvolva uma nova implementação para a função "paraMaiuscula": agora ela deve retornar a string em caixa baixa.', () => {
    const service = { paraMaiuscula };
    let paraMaiuscul = jest.spyOn(service, "paraMaiuscula").mockImplementation(a => a.toLowerCase());
    expect(paraMaiuscul('ABC')).toBe('abc');
    service.paraMaiuscula.mockRestore();
    expect(service.paraMaiuscula('abc')).toBe('ABC');
  });
  it('Defina, para a função "primeiraLetra", uma nova implementação: ela deve retornar a última letra de uma string.', () => {
    const service = { primeiraLetra };
    jest.spyOn(service, "primeiraLetra").mockImplementationOnce((a) => a[a.length - 1])
    expect(service.primeiraLetra('abc')).toBe('c');
    service.primeiraLetra.mockRestore();
    expect(service.primeiraLetra('abc')).toBe('a');
  });
  it('Implemente, na terceira função: ela deve receber três strings e concatená-las.', () => {
    const service = { concatena };
    jest.spyOn(service, "concatena").mockImplementationOnce((a, b, c) => a + b + c)
    expect(service.concatena('abc', 'def', 'ghi')).toBe('abcdefghi')
    service.concatena.mockRestore();
    expect(service.concatena('abc', 'def', 'ghi')).toBe('abcdef')
  });
});

describe('Crie uma função que faça requisição para a api dog pictures. Mocke a requisição e crie dois testes', () => {
  afterEach(() => jest.clearAllMocks());
  fetchDog = jest.fn();

  it('O primeiro deve interpretar que a requisição se resolveu e teve como valor "request success".', async () => {
    fetchDog.mockResolvedValue("request success");
    
    fetchDog();

    expect(fetchDog).toHaveBeenCalledTimes(1);
    await expect(fetchDog()).resolves.toBe("request success");
    expect(fetchDog).toHaveBeenCalledTimes(2);
  });

  it('O segundo deve interpretar que a requisição falhou e ter como valor "request failed".', async () => {
    fetchDog.mockResolvedValue("request failed");
    
    fetchDog();

    expect(fetchDog).toHaveBeenCalledTimes(1);
    await expect(fetchDog()).resolves.toBe("request failed");
    expect(fetchDog).toHaveBeenCalledTimes(2);
  });
});