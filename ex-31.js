import { question } from "readline-sync";

function main() {
  const input = Number(
    question(`Digite um número inteiro em Binário (4 dígitos):_`)
  );

  const binaryDigits = processBinaryDigit(input);

  const result = convertToDecimal(binaryDigits);

  console.log(`
    Número convertido em decimal: 
    =======  ${result}  =======
  `);
}

function processBinaryDigit(binaryNumber) {
  const firstBit = Math.floor(binaryNumber / 1000);
  const secondBit = Math.floor((binaryNumber % 1000) / 100);
  const thirdBit = Math.floor((binaryNumber % 100) / 10);
  const fourthBit = Math.floor(binaryNumber % 10);

  return {
    firstBit,
    secondBit,
    thirdBit,
    fourthBit,
  };
}

function convertToDecimal(digits = {}) {
  // Converting to decimal
  const firstDecDigit = digits.fourthBit * 2 ** 0;
  const secondDecDigit = digits.thirdBit * 2 ** 1;
  const thirdDecDigit = digits.secondBit * 2 ** 2;
  const fourthDecDigit = digits.firstBit * 2 ** 3;

  return firstDecDigit + secondDecDigit + thirdDecDigit + fourthDecDigit;
}

main();
