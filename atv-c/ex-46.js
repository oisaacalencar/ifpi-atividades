import { question } from "readline-sync";

function main() {
  const productValue = Number(question("Qual eh o valor do produto?_"));

  const entryValue = calcEntryValue(productValue);
  const installments = processValue(productValue, entryValue);

  console.log(
    `-*-*-* VENDA DE PRODUTO -*-*-*
    Entrada de R$ ${entryValue} + 2 Parcelas de  R$ ${installments}
    `,
  );
}

function processValue(value, entry) {
  return Math.round((value - entry) / 2);
}

function calcEntryValue(value) {
  // 0,33 representa o valor aproximado para 1/3
  // para calcular os casos em que a divisao "exata" por 3 ja retorna
  // um valor pelo menos igual ao de cada parcela
  let entry = Math.ceil(value * 0.33);
  let installments = (value - entry) / 2;

  if (entry >= installments) {
    return entry;
  } else {
    // 0.34 eh o proximo numero maior ou pelo menos igual ao valor de
    // cada parcela individualmente
    return Math.floor(value * 0.34);
  }
}

main();
