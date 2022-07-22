//exercicio 1:
// let resultado = 1;
// for (let index = 2; index <= 10; index += 1){
//     resultado *= index;
// }
// console.log(resultado);

//exercicio 2:
// let word = 'tryber';
// let palavraInvertida = '';
// for (let index = 0; index < word.length; index += 1) {
//     palavraInvertida += word[word.length - 1 - index];    
// }
// console.log(palavraInvertida);

//exercicio 3:
// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let biggestWord = array[0];
// let smallestWord = array[0];

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length > biggestWord.length) {
//     biggestWord = array[index];
//   }
// }

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length < smallestWord.length) {
//     smallestWord = array[index];
//   }
// }

// console.log(biggestWord);
// console.log(smallestWord);

//exercicio 4:
let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);