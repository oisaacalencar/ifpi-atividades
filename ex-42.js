import { question } from "readline-sync";

function main() {
  const pointX1 = Number(
    question("Informe o ponto x1:_ "),
  );
  const pointX2 = Number(
    question("Informe o ponto x2:_ "),
  );

  const pointY1 = Number(
    question("Informe o ponto y1:_ "),
  );
  const pointY2 = Number(
    question("Informe o ponto y2:_ "),
  );

  const distanceBetweenPoints = 
    calcDistance(pointX1, pointX2, pointY1, pointY2)

  console.log(`
    A distancia entre esses dois pontos no plano eh:
    ${distanceBetweenPoints}
  `);
}

function calcDistance(a, b, c, d) {
  const deltaX = b - a
  const deltaY = c - d

  const distance = Math.sqrt((deltaX**2) + (deltaY ** 2))

  return distance
}

main();
