const numbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];
let find;
find = numbers.find((element,index) => {
   return element == index;
});

console.log(find)