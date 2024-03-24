import { question } from "readline-sync";

function main() {
  const carFactoryCost = Number(
    question("Quanto é o custo de fábrica desse carro?"),
  );

  const distributeCost = (28 * carFactoryCost) / 100;
  const taxes = (45 * carFactoryCost) / 100;

  const result = carFactoryCost + distributeCost + taxes;

  console.log(`
    Este carro vai custar ao consumidor:
    ${result}
  `);
}

main();
