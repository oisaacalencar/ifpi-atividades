import { question } from "readline-sync";

function main() {
  console.log("***** CAIXA ELETRONICO ***** ");
  const requestedAmmount = Number(question("Valor do saque:_"));

  if (requestedAmmount === 0) {
    console.log("Por favor, digite um valor valido!");
    return Number(question("Valor do saque:_"));
  }

  const notes = processWithdraw(requestedAmmount);

  console.log(`
    Saque autorizado!\n
    Receba suas notas: ${notes}
  `);
}

let notes = "";

function processWithdraw(ammount) {
  let rest = ammount;

  if (rest - 50 >= 0) {
    rest -= 50;

    notes += "50 ";
    processWithdraw(rest);
  } else if (rest - 10 >= 0) {
    rest -= 10;

    notes += "10 ";
    processWithdraw(rest);
  } else if (rest - 5 >= 0) {
    rest -= 5;

    notes += "5 ";
    processWithdraw(rest);
  } else if (rest - 1 >= 0) {
    rest -= 1;

    notes += "1 ";
    processWithdraw(rest);
  } else {
    return ammount;
  }

  return notes;
}

main();
