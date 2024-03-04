import { question } from "readline-sync";

function main() {
  const number = Number(question(`Digite um número inteiro (3 dígitos):_`));

  const reverseNumber = reverseIt(number);

  const result = sumWithReverse(number, reverseNumber);

  console.log(`
    Soma do número ${number} + ${reverseNumber}: 
    =======  ${result}  =======
  `);
}

function reverseIt(number) {
  const cents = Math.floor(number / 1000);
  const decs = Math.floor((number % 100) / 10);
  const units = Math.floor(number % 10);

  return Number(`${units}${decs}${cents}`);
}

function sumWithReverse(number, reverse) {
  return number + reverse;
}

main();
