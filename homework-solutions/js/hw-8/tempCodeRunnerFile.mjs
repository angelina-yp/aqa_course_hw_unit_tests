
const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  // Ваш код
  function glasnay(words){
   let gl =  'aeiouAEIOU' 
   let count=0;
   for(let el of words){
    if(gl.includes(el)) {
      count++;
    }
   }
   return count;
  }
 
  wordsArr.sort((a,b) => {
    return glasnay(a)-glasnay(b)
  });
  return wordsArr
  
}


console.log(sortedByVowels(words));