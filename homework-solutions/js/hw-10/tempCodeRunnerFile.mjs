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