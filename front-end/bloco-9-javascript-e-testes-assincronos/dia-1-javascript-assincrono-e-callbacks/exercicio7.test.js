const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Testando se uppercase transforma letras minusculas em maiusculas. ', (done) => {
  uppercase('abc', (result) => {
    try {
      expect(result).toBe('ABC');
      expect(result).not.toBe('ABCD');
      done();
    } catch (error) {
      done(error);
    }
  });
});
