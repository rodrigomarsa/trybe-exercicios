// Exercicio 1:
// function verificaPalindromo(palavra) {
//     let contrario = palavra.split('').reverse().join('')
//     if (palavra === contrario) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(verificaPalindromo('arara'))
// console.log(verificaPalindromo('desenvolvimento'))

// Exercicio 2:
// function maiorNumero(numeros) {
//     let indiceMaior = 0;
//     for (let index in numeros) {
//         if (numeros[indiceMaior] < numeros[index]) {
//             indiceMaior = index;
//         }
//     }
//     return indiceMaior;
// }
// console.log(maiorNumero([2, 3, 6, 7, 10, 1]))

// Exercicio 3:
// function menorNumero(numeros) {
//     let indiceMenor = 0;
//     for (let index in numeros) {
//         if (numeros[indiceMenor] > numeros[index]) {
//             indiceMenor = index;
//         }
//     }
//     return indiceMenor;
// }
// console.log(menorNumero([2, 4, 6, 7, 10, 0, -3]))

// Exercicio 4:
// function maiorNome(nomes) {
//     let maiorPalavra = nomes[0];
//     for (let index in nomes) {
//         if (maiorPalavra.length < nomes[index].length) {
//             maiorPalavra = nomes[index];
//         }
//     }
//     return maiorPalavra;
// }
// console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// Exercicio 5:
// function maisRepete(numeros) {
//     let repetido = 0;
//     let numero = 0;
//     let indiceRepetido = 0;
//     for (let index in numeros) {
//         for (let index2 in numeros) {
//             if (numeros[index] === numeros[index2]) {
//                 numero += 1;
//             }
//         }
//         if (numero > repetido) {
//             repetido = numero;
//             indiceRepetido = index;
//         }
//         numero = 0;
//     }
//     return numeros[indiceRepetido];
// }
// console.log(maisRepete([2, 3, 2, 5, 8, 2, 3]))

// Exercicio 6:
// function somatorio(numero) {
//     let soma = 0;
//     for (let index = 1; index <= numero; index += 1) {
//         soma = soma + index;
//     }
//     return soma;
// }
// console.log(somatorio(5))

// Exercicio 7:
function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    let controle = true;

    for (let index = 0; index < fimPalavra.length; index += 1) {
        if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
            controle = false;
        }
    }

    return controle;
}

console.log(verificaFimPalavra('trybe', 'be')); //true
console.log(verificaFimPalavra('joaofernando', 'fernan')); //false