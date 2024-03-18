import { question } from "readline-sync";

export function getNumber(questionText = "") {
  return Number(question(questionText));
}
