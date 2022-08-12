// Exercicio 1
const testingScope = escopo => {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    if (escopo === true) {
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

//Exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = array => {
    for (let index = 1; index < array.length; index += 1) {
        for (let index2 = 0; index2 < index; index2 += 1) {
            if (array[index] < array[index2]) {
                let element = array[index];
                array[index] = array[index2];
                array[index2] = element;
            }
        }
    }
    return array;
}

console.log(sortOddsAndEvens([13, 3, 4, 10, 7, 2])); // será necessário alterar essa linha 😉