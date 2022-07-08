// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   console.log(fetch(url));
// }

// fetchJoke();

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url).then((E) => E.json()).then((R) => console.log(R.value));
// }

// fetchJoke();

const fetch = require('node-fetch');

const fetchJoke = () => {
const url = 'api.chucknorris.io/jokes/random?category=dev';

fetch(url)
  .then((response) => response.json())
  .then(({ icon_url, value }) => console.log(icon_url))
  .catch((error) => console.log(`${error}`));
}

fetchJoke();

// Algo deu errado :(
// TypeError: Only absolute URLs are supported