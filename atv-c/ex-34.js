import { question } from "readline-sync";

function main() {
  const numberOne = Number(question(`Digite um número inteiro:_`));
  const numberTwo = Number(question(`Digite outro número:_`));
  const numberThree = Number(question(`Digite mais um número:_`));

  const mean = calcMean(numberOne, numberTwo, numberThree);

  console.log(`
    A média dos números é igual a: 
    =======  ${mean}  =======
  `);
}

function calcMean(n1, n2, n3) {
  const sum = n1 + n2 + n3;
  const totalElm = 3;

  return (sum / totalElm).toFixed(2);
}

main();
