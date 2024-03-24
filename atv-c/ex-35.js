import { question } from "readline-sync";

function main() {
  const number = Number(question(`Digite um número inteiro (4 dígitos):_`));

  const numbers = processNumber(number);

  const result = sumDigits(numbers);

  console.log(`
    O somatório dos números que compõe ${number}: 
    =======  ${result}  =======
  `);
}

function processNumber(number) {
  const mil = Math.floor(number / 1000);
  const cents = Math.floor((number % 1000) / 100);
  const decs = Math.floor((number % 100) / 10);
  const units = Math.floor(number % 10);

  return {
    mil,
    cents,
    decs,
    units,
  };
}

function sumDigits(digits = {}) {
  return digits.mil + digits.cents + digits.decs + digits.units;
}

main();
