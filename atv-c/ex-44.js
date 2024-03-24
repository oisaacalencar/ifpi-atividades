const { question } = require("readline-sync");

function main() {
  const quantityInKG = Number(
    question("Quantos kilos de Latão você deseja analisar:_"),
  );

  const cuper = calculatePercentage(quantityInKG, 0.3);
  const zinc = calculatePercentage(quantityInKG, 0.7);

  console.log(`
    Quantidade de COBRE E ZINCO em ${quantityInKG} Kg de Latao
    - COBRE: ${cuper}Kg
    - ZINCO: ${zinc} kg
  `);
}

function calculatePercentage(value, percent) {
  return (value * percent).toFixed(2);
}

main();
