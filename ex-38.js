import { question } from "readline-sync";

function main() {
  console.log("Informe a seguir a sua idade:");
  const frac_one_numerator = Number(
    question(`Digite o numerador da fração 1:_`),
  );
  const frac_one_denominator = Number(
    question(`Digite o denominador da fração 1:_`),
  );

  const frac_two_numerator = Number(
    question(`Digite o numerador da fração 2:_`),
  );
  const frac_two_denominator = Number(
    question(`Digite o denominador da fração 2:_`),
  );

  const lcmValue = lcm(frac_one_denominator, frac_two_denominator);

  const result_numerator =
    (lcmValue / frac_one_denominator) * frac_one_numerator +
    (lcmValue / frac_two_denominator) * frac_two_numerator;

  const result = `
    ${result_numerator}
    ---
    ${lcmValue}
  `;

  console.log(`
    *** Resultado da soma dessas frações: ***
    =======  ${result}  =======
  `);
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function lcm(a, b) {
  if (a === 0 || b === 0) {
    return 0; // LCM is undefined for zero
  } else {
    return Math.abs(a * b) / gcd(a, b);
  }
}

main();
