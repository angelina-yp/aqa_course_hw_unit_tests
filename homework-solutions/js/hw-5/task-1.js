/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';
/* 1 вариант решения:
for(let i=0; i<=10; i++) {
    if (i%2===0){
   evenNumbersResult += `${i}-`; 
    }
    evenNumbersResult = evenNumbersResult.split('').reverse().join('').replace('-01','10');
}

console.log(evenNumbersResult);*/
//2 вариант решения:
for(let i=10; i>=0; i--) {
    if (i%2===0){
   evenNumbersResult += i + '-'; 
   continue;
    }
}
if (evenNumbersResult.length > 0) {
    evenNumbersResult = evenNumbersResult.slice(0, -1);
}
console.log(evenNumbersResult);

/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smilePatternResult = '';
for(let a=1; a<=5; a++) {
    let smile = "";
    for (let j=0; j<a; j++){
        smile += ':)';
    }
    smilePatternResult += smile + '\n';
}
if (smilePatternResult.length > 0) {
    smilePatternResult = smilePatternResult.slice(0, -1);
}
console.log(smilePatternResult);

/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */
const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = '';
replaceSpacesWithOneResult = text.replaceAll(' ','1')
console.log(replaceSpacesWithOneResult);

export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
