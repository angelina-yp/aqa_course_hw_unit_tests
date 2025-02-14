/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/
let minAge1 = 18;
let maxAge1 = 60;
let age1 = "60";

let age2 = Number(age1);

if (isNaN(age2)) { 
  console.log("Incorrect data type");}
  else if(age2 < minAge1) {
  console.log("You don't have access cause your age is " + age2 + " It's less then ");
  } else if (age2 >=  minAge1 && age2 < maxAge1) {
    console.log("Welcome  !");
  } else if (age2 > maxAge1) {
    console.log("Keep calm and look Culture channel");
  } else {
    console.log("Technical work");
  }
 
