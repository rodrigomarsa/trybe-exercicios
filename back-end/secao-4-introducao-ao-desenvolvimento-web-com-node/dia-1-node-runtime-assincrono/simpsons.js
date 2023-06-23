const fs = require('fs').promises;

async function readSimpsonsData() {
  try {
    const data = await fs.readFile('./simpsons.json');
    const simpsons = JSON.parse(data);
    const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
    strings.forEach((name) => console.log(name));
  } catch (error) {
    console.error(error);
  }
}

async function getSimpsonById(id) {
  const data = await fs.readFile('./simpsons.json');
  const simpsons = JSON.parse(data);
  const chosenSimpson = simpsons.find(({ id }) => id === id);
  if(!chosenSimpson) {
    throw new Error('id não encontrado');
  }
  return chosenSimpson;
}

async function filterSimpsons() {
  try {
    const data = await fs.readFile('./simpsons.json');
    const simpsons = JSON.parse(data);
    const newArray = simpsons.filter(({ id }) => id !== '10' && id !== '6');
    await fs.writeFile('./simpsons.json', JSON.stringify(newArray)); 
  } catch (error) {
    console.error(error.message);
  }
}

async function main() {
  // await readSimpsonsData();
  // const simpson = await getSimpsonById(1);
  // console.log(simpson);
  await filterSimpsons();
}

main();