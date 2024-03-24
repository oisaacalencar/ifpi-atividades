import { question } from "readline-sync";

function main() {
  const a = Number(
    question("Informe o coeficiente a:_ "),
  );
  const b = Number(
    question("Informe o coeficiente b:_ "),
  );
  const c = Number(
    question("Informe o coeficiente c:_ "),
  );
  const d = Number(
    question("Informe o coeficiente d:_ "),
  );
  const e = Number(
    question("Informe o coeficiente e:_ "),
  );
  const f = Number(
    question("Informe o coeficiente f:_ "),
  );

  const x =
    calcXCoefficient(a, b, e, f)

  const y =
    calcYCoefficient(a, b, e, c, f, d)

  console.log(`
    Os valores de x e y sao:
    X: ${x}
    Y: ${y}
  `);
}

function calcXCoefficient(a, b, e, f, d) {
  const x = (c * e - b * f) / (a * e - b * d)
  return x
}

function calcYCoefficient(a, b, e, c, f, d) {
  const y = (a * f - c * d) / (a * e - b * d)
  return y
}

main();
