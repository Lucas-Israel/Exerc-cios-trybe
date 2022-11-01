const fs = require('fs').promises;
const path = '/files/chocolates.json';
const { join } = require('path');

const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const chocoNameCheck = async (nameQuerry) => {
  const cacau = await readCacauTrybeFile();
  const searched = cacau.chocolates.filter(({ name }) => name.toLowerCase()
  .includes(nameQuerry.toLowerCase()));
  return searched;
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const chocoFindByID = async (idQuerry) => {
  const getAll = await readCacauTrybeFile();
  const searched = getAll.chocolates.find(({id}) => +id === +idQuerry);
  return searched;
};

const writeCacauTrybe = async (content) => {
  try {
    const completePath = join(__dirname, path);
    const string = JSON.stringify(content);
    await fs.writeFile(completePath, string);
  } catch (e) {
    console.error('Erro ao salvar o arquivo', e.message);
    return null;
  }
}

const updateChocolate = async (id, update) => {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolateToUpdate = cacauTrybe.chocolates.find(
    (chocolate) => chocolate.id === id,
  );

  if (chocolateToUpdate) {
    cacauTrybe.chocolates = cacauTrybe.chocolates.map((chocolate) => {
        if (chocolate.id === id) return { id, ...update };
        return chocolate;
      });
  
    await writeCacauTrybe(cacauTrybe);
    return { id, ...update };
  }

  return false;
};

module.exports = {
    getAllChocolates,
    chocoNameCheck,
    chocoFindByID,
    updateChocolate,
};