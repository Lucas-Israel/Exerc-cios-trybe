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
  const map = json.find((p) => +p.id === id)
  if (!map) return console.log('id não encontrado');
  console.log(map);
}

const remove = async (id) => {
  const data = await fs.readFile('./simpsonsMock.json', 'utf-8');
  const json = JSON.parse(data);
  const map = json.filter((p) => +p.id !== id)
  const string = JSON.stringify(map); 
  fs.writeFile('./simpsonsMock.json', string);
}

const family = async () => {
  const data = await fs.readFile('./simpsonsMock.json', 'utf-8');
  const json = JSON.parse(data);
  const map = json.filter(({id}) => {
      if (+id === 1) return true;
      if (+id === 2) return true;
      if (+id === 3) return true;
      if (+id === 4) return true;
      return false;
  })
  const string = JSON.stringify(map); 
  fs.writeFile('./simpsonFamily.json', string);
}

const intruso = async () => {
  const data = await fs.readFile('./simpsonsMock.json', 'utf-8');
  const familydata = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const json = JSON.parse(data);
  const jsonFam = JSON.parse(familydata);
  const map = json.find(({name}) => name === 'Nelson Muntz');
  const mappingFam = [...jsonFam, map];
  const string = JSON.stringify(mappingFam); 
  fs.writeFile('./simpsonFamily.json', string);
}

const corrige = async () => {
  const data = await fs.readFile('./simpsonsMock.json', 'utf-8');
  const familydata = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const json = JSON.parse(data);
  const jsonFam = JSON.parse(familydata);
  const map = json.find(({name}) => name === 'Maggie Simpson');
  const filtering = jsonFam.filter(({name}) => name !== 'Nelson Muntz');
  const mappingFam = [...filtering, map];
  const string = JSON.stringify(mappingFam); 
  fs.writeFile('./simpsonFamily.json', string);
}

module.exports = {
  simPersonagem,
  search,
  remove,
  family,
  intruso,
  corrige,
};