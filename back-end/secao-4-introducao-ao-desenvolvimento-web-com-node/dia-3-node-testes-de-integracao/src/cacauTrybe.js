const fs = require('fs').promises;
const { join } = require('path');
const path = '/files/cacauTrybeFile.json';

const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const writeCacauTrybeFile = async (content) => {
  try {
    // parte externa da aplicação
    await fs.writeFile(join(__dirname, path), JSON.stringify(content));
  } catch (error) {
    return null;
  }
};

const createChocolate = async (name, brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  const newChocolate = { id: cacauTrybe.nextChocolateId, name, brandId };

  cacauTrybe.chocolates.push(newChocolate);
  cacauTrybe.nextChocolateId += 1;
  await writeCacauTrybeFile(cacauTrybe);

  return newChocolate;
};

const deleteChocolate = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolateExists = cacauTrybe.chocolates.some(
    (chocolate) => chocolate.id === id,
  );

  if (chocolateExists) {
    cacauTrybe.chocolates = cacauTrybe.chocolates.filter(
      (chocolate) => chocolate.id !== id,
    );

    await writeCacauTrybeFile(cacauTrybe);
    return true;
  }

  return false;
};

const findChocolateByName = async (query) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.name.toLowerCase().includes(query.toLowerCase()));
};

const updateChocolate = async (id, update) => {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolateToUpdate = cacauTrybe.chocolates.find(
    (chocolate) => chocolate.id === id,
  );

  if (chocolateToUpdate) {
    cacauTrybe.chocolates = cacauTrybe.chocolates.map((chocolate) => {
        if (chocolate.id === id) return { ...chocolate, ...update };
        return chocolate;
      });
  
    await writeCacauTrybeFile(cacauTrybe);
    return { ...chocolateToUpdate, ...update };
  };

  return false;
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  readCacauTrybeFile,
  writeCacauTrybeFile,
  createChocolate,
  deleteChocolate,
  findChocolateByName,
  updateChocolate,
};