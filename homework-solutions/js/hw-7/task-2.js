/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  // Ваш код
  if (typeof word !== 'string') {
    return false; 
  }

  let word_1 = word.split('').reverse().join('');
  if(word_1.toLowerCase() === word.toLowerCase() && word!= " ") {
  console.log(true);
    return true;
  } 
  console.log(false);
  return false;
}
//let word1 = ' '
//isPalindrom(word1)
/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  // Ваш код
  if (typeof sentence !== 'string') {
    return []; 
  }

  let array = sentence.split(' ');
  let maxLength = 0;
  let maxword = [];
  for (let element of array) {
    if (element.length > 0) { 
      maxLength = Math.max(maxLength, element.length);
    }
  }
  //console.log(maxLength);
  for (let element of array) {
    if (element.length === maxLength && element.length > 0) {
      maxword.push(element);
    } 
  }
   // console.log(maxword);
  return maxword
}  
let sentence1 = ' '
findLongestWords(sentence1)

export { isPalindrom, findLongestWords };
