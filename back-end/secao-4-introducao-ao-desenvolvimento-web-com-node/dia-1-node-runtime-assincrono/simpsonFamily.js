const fs = require('fs').promises;

async function createSimpsonsFamily() {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons.filter(({ id }) => familyIds.includes(Number(id)));
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily));
}

async function addNelsonToFamily() {
  const data = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsonsFamily = JSON.parse(data);
  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz'});
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily));
}

async function replaceNelson() {
  const data = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsonsFamily = JSON.parse(data);

  // Filtramos o array para remover o personagem Nelson
  const simpsonsWithoutNelson = simpsonsFamily.filter((simpson) => simpson.id !== '8');

  // Criamos um novo Array contendo a personagem Maggie
  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat([{ id: '15', name: 'Maggie Simpson' }]);
  // com spread seria assim:
  // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

  // Escrevemos o novo array no arquivo e retornamos a promise de escrita
  return fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsWithMaggie));
}

async function main() {
  // await createSimpsonsFamily();
  // await addNelsonToFamily();
  await replaceNelson();
}

main();