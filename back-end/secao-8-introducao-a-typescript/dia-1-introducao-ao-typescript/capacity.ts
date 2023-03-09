const readline3 = require('readline-sync');
const units3 = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

const convert3 = (value: number, fromUnit: string, toUnit: string): number => {
  const fromIndex = units3.indexOf(fromUnit);
  const toIndex = units3.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}

function exec3() {
  // pegamos o valor a ser convertido digitado pela pessoa usuária
  const value = readline3.questionFloat('Digite o valor a ser convertido: \n');

  // pedimos que a pessoa usuária escolha a unidade base
  const fromUnitChoiceIndex = readline3.keyInSelect(units3, 'Escolha um número para a unidade base:');

  // pedimos que a pessoa usuária escolha a unidade para conversão
  const toUnitChoiceIndex = readline3.keyInSelect(units3, 'Escolha um número para a conversão:');

  const toUnitChoice = units3[toUnitChoiceIndex];
  const fromUnitChoice = units3[fromUnitChoiceIndex];

  // Se o usuário escolher a opção 0 (cancelar), uma mensagem é impressa no terminal e usamos o return para encerrar a execução
  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }
  
  const result = convert3(value, fromUnitChoice, toUnitChoice);

  // montamos a mensagem de saída
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

  // printamos a mensagem de saída no terminal
  console.log(message);
}

exec3();