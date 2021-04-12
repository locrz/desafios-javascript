/*
 * Regex
 */

/* ENUNCIADO
 *
 * Escreva uma função que busque no texto os valores de "height" e "width"
 * e retorne um objeto { "height": x, "width": y } contendo esses valores ignorando sua medida (px, %, em).
 *
 * Ex:1
 * [INPUT]
 * "<div style="height: 20px; width: 60px;">"
 * [OUTPUT]
 * {
 *   height: 20,
 *   width: 60
 * }
 *
 * Ex: 2
 * [INPUT] String
 * "<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>"
 * [OUTPUT] Object
 * {
 *   width: 120,
 *   height: 20
 * }
 */

const extractSize = (htmlTemplate) => {
  let width = 0;
  let height = 0;

  const heightMatches = htmlTemplate.match(/height\:\s\d+/g);
  const widthMatches = htmlTemplate.match(/width\:\s\d+/g);

  if (heightMatches) {
    height = Number(heightMatches[0].replace(/height\:\s/, ''));
  }

  if (widthMatches) {
    width = Number(widthMatches[0].replace(/width\:\s/, ''));
  }

  return { width, height };
}

module.exports = extractSize
