/*
  У вас есть массив чисел. 
  Напиши функцию countOccurrences, которая принимает массив чисел и
  возвращает объект с подсчётом каждого числа.
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  
  Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }
*/
let arr = [1, 2, 2, 3, 4, 4, 4, 5];
function countOccurrences(arr) {
  // ваш код
let obj = { };
arr.forEach((element) => {
  if (!(element in obj)) {
    obj[element] = 1; 
} else {
  obj[element] += 1; 
}
});
return obj; 
}
const result = countOccurrences(arr);
console.log(result); 

 countOccurrences(arr)
export { countOccurrences };
