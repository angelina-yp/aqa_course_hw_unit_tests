/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  // Ваш код
  arrays=[].concat(...arrays);
 
//console.log(arrays);
return arrays;
}
let a = [1,2];
let b = [3,4];
mergeArrays(a,b);

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  // Ваш код
  const words = sentence.split(/\s+/); 
  let result = ''; 

  for (let i = 0; i < words.length; i++) {
    if (i === 0 ) {
      result += words[i].toLowerCase();
    } else {
      result += '_' + words[i].substring(0, 1).toUpperCase().trim() + words[i].slice(1).toLowerCase().trim(); 
    }
  }

  console.log(result);
  return result; 

}
let sentence1 = 'I  am super engineer'
devideBy(sentence1)

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  // Ваш код
  //1.вариант:
  /*if(n<=1) {
    return n;
   } else {
  return fibonacci(n-1)+fibonacci(n-2)
   }
}
if (n < 0) {
  return null; 
}
if (n <= 1) {
  return n;
}*/
//2.вариант:

if (n < 0) {
  return null; 
}
if (n <= 1) {
  return n;
}
let a = 0, b = 1, step;
for (let i = 2; i <= n; i++) {
  step = a + b; 
  a = b; 
  b = step; 
}
return b; 
}
console.log(fibonacci(8));

export { mergeArrays, fibonacci, devideBy };
