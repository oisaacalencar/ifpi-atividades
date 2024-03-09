import { question } from "readline-sync";

function main() {
  console.log("Informe a seguir a sua idade:");
  const years = Number(question(`Digite quantos anos:_`));
  const months = Number(question(`Digite quantos meses:_`));
  const days = Number(question(`Digite quantos dias:_`));

  const yearInput = processInput(years);
  const monthsInput = processInput(null, months);

  const ageInDays = calculateQuantityOfDays(yearInput, monthsInput, days);

  console.log(`
   A sua idade em dias é igual a: 
    =======  ${ageInDays}  =======
  `);
}

function processInput(years = 0, months = 0) {
  return years * 365 + months * 30;
}

function calculateQuantityOfDays(years, months, days) {
  return years + months + days;
}

main();
