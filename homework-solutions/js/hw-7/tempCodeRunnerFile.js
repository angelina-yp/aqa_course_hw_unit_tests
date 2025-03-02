function fibonacci(n) {
  // Ваш код
  /*if(n<=1) {
    return n;
   } else {
  return fibonacci(n-1)+fibonacci(n-2)
   }
}
if (n < 0) {
  return null; // Для отрицательных значений возвращаем null или другое значение по вашему выбору
}

if (n <= 1) {
  return n;
}*/

let a = 0, b = 1, temp;
for (let i = 2; i <= n; i++) {
  temp = a + b; // Суммируем два последних числа Фибоначчи
  a = b; // Сдвигаем a к следующему числу
  b = temp; // Сдвигаем b к следующему числу
}

return b; // Возвращаем n-е число Фибоначчи
}
console.log(fibonacci(8));