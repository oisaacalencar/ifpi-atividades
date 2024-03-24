import { question } from "readline-sync";

function main() {
  console.log("Descubra o quanto voce ja gastou como fumante 🚬");

  const yearsSmoking = Number(question("Ha quantos anos voce fuma?"));
  const howManyCigarets = Number(
    question("Quantos cigarros voce fuma por dia?"),
  );
  const howManyCosts = Number(
    question("Quanto custa uma carteira de cigarros?"),
  );

  const cigarretsPerYear = yearsSmoking * 365 * howManyCigarets;

  const result = Math.floor(cigarretsPerYear * howManyCosts);

  console.log(`
    Voce gastou aproximadamente R$ ${result} em cigarros
    durante a sua vida!
  `);
}

main();
