const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];
//1/
function addCharacter(character) {
  // Ваш код
  if (typeof character.name === 'string' && typeof character.age === 'number') {
    return characters.push(character);
  } else { throw new Error('Invalid input: character must have a name (string) and age (number).'); }
 }

//addCharacter({ name: 'Bob', age: 25 });
//console.log(characters);
//2/
function getCharacter(name) {
  if (name !== undefined) {
      return characters.find((character) => character.name === name) || undefined; 
  } else {
    throw new Error('Invalid input'); 
  }
}

//console.log(getCharacter('Fred'));*/
//3/
function getCharactersByAge(minAge) {
  
  if (typeof minAge === "number") {
    return characters.filter((character) => character.age >= minAge);
  } else {
    throw new Error('Invalid input');
  }
}
//const filteredCharacters = getCharactersByAge(36);
//console.log(filteredCharacters);
//4/
function updateCharacter(name, newCharacter) {
  const character = characters.find(character => character.name === name); 
  if (character) {
    Object.assign(character, newCharacter); // Обновляем данные персонажа
  } else {
    throw new Error('Invalid input'); // Выбрасываем ошибку, если персонаж не найден
  }
}
updateCharacter('Jdd', { age: 50 });
console.log(characters); 
//5/
function removeCharacter(name) {
  const index = characters.findIndex(character => character.name === name); 
  if (index >= 0) {
    characters.splice(index, 1); 
  } else {
    throw new Error('Character not found'); 
  }
}
removeCharacter('Jack')
console.log(characters);