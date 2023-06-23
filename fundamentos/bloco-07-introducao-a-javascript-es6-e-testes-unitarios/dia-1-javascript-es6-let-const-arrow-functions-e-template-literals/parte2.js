// Exercicio 1
const factorial = number => {
    let result = 1;
    for (let index = 2; index <= number; index += 1) {
        result *= index;
    }
    return result;
}

const print = factorial(4);

console.log(`Esse é o fatorial ${print}`);

// Exercicio 2
const longestWord = (text) => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

const longestWord2 = (text) => {
    const wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';
    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
    return result;
}
console.log(longestWord2('Antonio foi ao banheiro e não sabemos o que aconteceu'));