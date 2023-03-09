"use strict";
const readline5 = require('readline-sync');
const units5 = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
const convert5 = (value, fromUnit, toUnit) => {
    const fromIndex = units5.indexOf(fromUnit);
    const toIndex = units5.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(1000, exponent);
};
function exec5() {
    // pegamos o valor a ser convertido digitado pela pessoa usuária
    const value = readline5.questionFloat('Digite o valor a ser convertido: \n');
    // pedimos que a pessoa usuária escolha a unidade base
    const fromUnitChoiceIndex = readline5.keyInSelect(units5, 'Escolha um número para a unidade base:');
    // pedimos que a pessoa usuária escolha a unidade para conversão
    const toUnitChoiceIndex = readline5.keyInSelect(units5, 'Escolha um número para a conversão:');
    const toUnitChoice = units5[toUnitChoiceIndex];
    const fromUnitChoice = units5[fromUnitChoiceIndex];
    // Se o usuário escolher a opção 0 (cancelar), uma mensagem é impressa no terminal e usamos o return para encerrar a execução
    if (!fromUnitChoice || !toUnitChoice) {
        console.log(`Função cancelada`);
        return 0;
    }
    const result = convert5(value, fromUnitChoice, toUnitChoice);
    // montamos a mensagem de saída
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    // printamos a mensagem de saída no terminal
    console.log(message);
}
exec5();
