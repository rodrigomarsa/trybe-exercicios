"use strict";
const readline2 = require('readline-sync');
const units2 = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
const convert2 = (value, fromUnit, toUnit) => {
    const fromIndex = units2.indexOf(fromUnit);
    const toIndex = units2.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(10, exponent);
};
function exec2() {
    // pegamos o valor a ser convertido digitado pela pessoa usuária
    const value = readline2.questionFloat('Digite o valor a ser convertido: \n');
    // pedimos que a pessoa usuária escolha a unidade base
    const fromUnitChoiceIndex = readline2.keyInSelect(units2, 'Escolha um número para a unidade base:');
    // pedimos que a pessoa usuária escolha a unidade para conversão
    const toUnitChoiceIndex = readline2.keyInSelect(units2, 'Escolha um número para a conversão:');
    const toUnitChoice = units2[toUnitChoiceIndex];
    const fromUnitChoice = units2[fromUnitChoiceIndex];
    // Se o usuário escolher a opção 0 (cancelar), uma mensagem é impressa no terminal e usamos o return para encerrar a execução
    if (!fromUnitChoice || !toUnitChoice) {
        console.log(`Função cancelada`);
        return 0;
    }
    const result = convert2(value, fromUnitChoice, toUnitChoice);
    // montamos a mensagem de saída
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    // printamos a mensagem de saída no terminal
    console.log(message);
}
exec2();
