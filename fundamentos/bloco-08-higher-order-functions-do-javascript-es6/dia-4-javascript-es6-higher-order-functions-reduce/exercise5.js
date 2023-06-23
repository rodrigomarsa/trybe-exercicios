// 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, name) =>
    acc + name.split('').reduce((sum, letter) => {
      if (letter.toLowerCase() === 'a') return sum + 1;
      return sum;
    }, 0), 0);
}
console.log(containsA(names));
