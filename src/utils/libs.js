/**
 * Some prepositions: spanish and english
 */
const dictionary = /a|ante|con|de|desde|en|hacia|para|por|sin|tras|the|is|on|of|in|at|since|for|ago|before|to|by|from|out|off/gi;

/**
 *
 * @param {string} str
 * @return {boolean}
 */
function isAlphaNumeric(str) {
  let code;

  for (let i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 96 && code < 123) && // lower alpha (a-z)
      !(code === 241) && // ñ
      !(code === 225) && // á
      !(code === 233) && // é
      !(code === 237) && // í
      !(code === 243) && // ó
      !(code === 250) // ú
    ) {
      return false;
    }
  }
  return true;
}

/**
 *
 * @param {object} data
 * @return {array}
 */
function parsingData(data) {
  let arr = [];
  for (const key of Object.keys(data)) {
    arr.push({ word: key, count: data[key] });
  }
  return arr;
}

/**
 *
 * @param {string} paragraph
 * @return {object}
 */
export function countWords(paragraph) {
  let counter = {};
  const noSpacesLower = paragraph
    .toLowerCase()
    .replace(/\,/g, "")
    .split(" ");
  for (let char of noSpacesLower) {
    if (isAlphaNumeric(char)) {
      counter[char] = ++counter[char] || 1;
    }
  }
  return counter;
}

/**
 *
 * @param {array} data
 * @return {array}
 */
export function orderSlice(data) {
  const parsedData = parsingData(data);
  const sortData = parsedData.sort((a, b) => b.count - a.count);
  return sortData.slice(0, 9);
}
