"use strict";
const readline4 = require('readline-sync');
const units4 = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
const convert4 = (value, fromUnit, toUnit) => {
    const fromIndex = units4.indexOf(fromUnit);
    const toIndex = units4.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(100, exponent);
};
function exec4() {
    // pegamos o valor a ser convertido digitado pela pessoa usuária
    const value = readline4.questionFloat('Digite o valor a ser convertido: \n');
    // pedimos que a pessoa usuária escolha a unidade base
    const fromUnitChoiceIndex = readline4.keyInSelect(units4, 'Escolha um número para a unidade base:');
    // pedimos que a pessoa usuária escolha a unidade para conversão
    const toUnitChoiceIndex = readline4.keyInSelect(units4, 'Escolha um número para a conversão:');
    const toUnitChoice = units4[toUnitChoiceIndex];
    const fromUnitChoice = units4[fromUnitChoiceIndex];
    // Se o usuário escolher a opção 0 (cancelar), uma mensagem é impressa no terminal e usamos o return para encerrar a execução
    if (!fromUnitChoice || !toUnitChoice) {
        console.log(`Função cancelada`);
        return 0;
    }
    const result = convert4(value, fromUnitChoice, toUnitChoice);
    // montamos a mensagem de saída
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    // printamos a mensagem de saída no terminal
    console.log(message);
}
exec4();
