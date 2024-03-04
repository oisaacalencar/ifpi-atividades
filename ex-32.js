import { question } from "readline-sync";

function main() {
  const number = requestInput(`Digite um número inteiro (3 dígitos):_`);

  const reverseNumber = reverseIt(number);

  const result = subtractWithReverse(number, reverseNumber);

  console.log(`
    Diferença do número ${number} - ${reverseNumber}: 
    =======  ${result}  =======
  `);
}

function reverseIt(number) {
  const cents = Math.floor(number / 100);
  const decs = Math.floor((number % 100) / 10);
  const units = Math.floor(number % 10);

  return Number(`${units}${decs}${cents}`);
}

function subtractWithReverse(number, reverse) {
  return number - reverse;
}

function requestInput(questionPhrase) {
  const input = question(questionPhrase);
  return Number(input);
}

main();
