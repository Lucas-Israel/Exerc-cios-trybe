const API_URL = 'https://api.coincap.io/v2/assets';
const API_URL1 = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json'

function append({ name, symbol, priceUsd, rank }) {
  const section = document.querySelector("h2");
  const coinInfo = document.createElement("h5");
  coinInfo.id = `crypto${rank}`
  coinInfo.classList.add("coin-info");

  fetch(API_URL1)
  .then((response) => response.json())
  .then(({ usd: { brl }}) => coinInfo.innerText =
  `${rank} - ${name} (${symbol}): 
  USD = ${priceUsd.match(/^-?\d+(?:\.\d{0,2})?/)} 
  BRL = ${(priceUsd * brl).toFixed(2)}`);

  section.appendChild(coinInfo);
}

const fetchCrypto = () => {
const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(({ data }) => {
    data.forEach(({ name, symbol, priceUsd, rank}, I) => I < 10 ? append({ name, symbol, priceUsd, rank}) : 0);
  });
};

window.onload = () => fetchCrypto();