const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
let resultUnique = [];
let resultNull = null; 

for (let i = 0; i < myPizzasT1.length; i++) {
  let Pizza_unique = true; 

  for (let j = 0; j < competitorPizzas.length; j++) {
    if (myPizzasT1[i].toLowerCase() === competitorPizzas[j].toLowerCase()) {
      Pizza_unique = false; 
      break; 
    }
  }

  if (Pizza_unique) {
    resultUnique.push(myPizzasT1[i].toLowerCase()); 
  }
}

console.log(resultNull, resultUnique);