//task-1

//1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
function delayTwoSeconds(myFunction) {
    setTimeout(() => {
        myFunction();
    }, 2000); 
  }
    delayTwoSeconds(() => {
    console.log("Hello, world");
  });
//2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//  его резолва в консоль
const promise = new Promise((resolve, reject) => {
    resolve(1);
    });
    promise
    .then((one) => {
    console.log(one);
    });
//3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//  Обработайте промис методом .catch и выведите результат его резолва в консоль
const promise_1 = new Promise((resolve, reject) => {
    reject("Promise failed");
    }); promise_1
    .then((message) => {
     console.log(message);
    })
    .catch((error) => {
     console.error(error); 
    });
    
//4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
function promiseNumber (number) {
    return new Promise((resolve, reject) => {
        resolve(number);
      });
};

//5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//  в консоль результаты работы каждого промиса через .then

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((promiseNumber1, promiseNumber2, promiseNumber3) => {
  console.log(promiseNumber1);
  console.log(promiseNumber2);
  console.log(promiseNumber3);
})
.catch((error) => {
    console.error(error); 
   });

//6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//  в консоль статус и результат каждого промиса через .then
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((promiseNumber1, promiseNumber2, promiseNumber3) => {
    console.log(promiseNumber1);
    console.log(promiseNumber2);
    console.log(promiseNumber3);
  })
  .catch((error) => {
      console.error(error); 
     });
//7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
async function allPromises() {
    try {
      const [promiseNumber1, promiseNumber2, promiseNumber3] = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
  
      console.log(promiseNumber1);
      console.log(promiseNumber2);
      console.log(promiseNumber3);
    } catch (error) {
      console.error(error);
    }
  };

  async function allSetPromises() {
    try {
      const [promiseNumber1, promiseNumber2, promiseNumber3] = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
  
      console.log(promiseNumber1);
      console.log(promiseNumber2);
      console.log(promiseNumber3);
    } catch (error) {
      console.error(error);
    }
  }

  //task-2

  /*Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена*/

   async function createTodo(toDo) {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toDo),
      });
  
      if (response.status !== 201) {
        throw new Error(`Error ${response.status}`);
      }
  
      const data = await response.json();
  
          for (const key in toDo) {
        if (toDo[key] !== data[key]) {
          throw new Error(`Error "${key}"`);
        }
      }
  
      return data;
  
    } catch (error) {
      console.error("Error:", error);
    } finally {
      console.log("Работа функции завершена");
    }
  }