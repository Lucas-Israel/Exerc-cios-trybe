const fs = require('fs').promises;

const simPersonagem = async () => {
  try {
    const data = await fs.readFile('./simpsonsMock.json', 'utf-8');
    const json = JSON.parse(data);
    const map = json.map((p) => `${p.id} - ${p.name}`);
    console.log(map);
  } catch (error) {
    console.log(error.message);
  }
}

const search = async (id) => {
  const data = await fs.readFile('./simpsonsMock.json', 'utf-8');
  const json = JSON.parse(data);
  const map = json.find((p) => p.id == id)
  if (!map) return console.log('id não encontrado');
  console.log(map);
}

const remove = async (id) => {
  const data = await fs.readFile('./simpsonsMock.json', 'utf-8');
  const json = JSON.parse(data);
  const map = json.filter((p) => p.id == id)
}

module.exports = {
  simPersonagem,
  search,
  remove,
};