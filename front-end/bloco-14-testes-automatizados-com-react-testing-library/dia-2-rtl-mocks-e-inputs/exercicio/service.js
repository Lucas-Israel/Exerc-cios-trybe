const randomNum = () => Math.floor(Math.random() * 101);

const paraMaiuscula = (a) => a.toUpperCase();

const primeiraLetra = (a) => a[0]

const concatena = (a, b) => a + b

const fetchDog = async () => {
  const URL = 'https://dog.ceo/api/breeds/image/random';
  const fetch = fetch(URL, { headers: { Accept: 'application/json' } })
    .then((result) => result.json()
      .then((json) => result.ok ? Promise.resolve(json) : Promise.reject(json)))
}

module.exports = {
  randomNum,
  paraMaiuscula,
  primeiraLetra,
  concatena,
  fetchDog,
};
