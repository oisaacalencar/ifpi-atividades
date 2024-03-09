import { question } from "readline-sync";

function main() {
  console.log(`
    Calculando a formula a seguir:
    D = R + S
        -----, onde R = (A + B)**2 e S = (B + C)**2
          2
  `);
  const number_one = Number(question("Digite um numero inteiro e positivo: "));
  const number_two = Number(question("Digite outro inteiro e positivo: "));
  const number_three = Number(question("Digite mais uminteiro e positivo: "));

  const r = squareSum(number_one, number_two);
  const s = squareSum(number_two, number_three);

  const result = (r + s) / 2;

  console.log(`
    Resultado:
    D = R + S
        -----, onde R = (A + B)**2 e S = (B + C)**2
          2

    = ${result}
  `);
}

function squareSum(a, b) {
  return (a + b) ** 2;
}

main();
