//TODO:Task_1
/*1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee*/
interface IEmployee  {
    name: string;
    salary: number;
    isManager: boolean;  
}
const QA: IEmployee = {
    name:'A',
    salary: 5000,
    isManager: true,   
}

/*2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)*/
type EmployeeKeys = keyof IEmployee;

/*3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)*/
type QaKeys = keyof typeof QA;
//const qaKey: QaKeys = "name";
//console.log(qaKey)

/*4. Создайте тип UserType из объекта QA (используйте typeof)*/
type UserType = typeof QA;

/*5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными*/
type PartialEmployee = Partial<IEmployee>;
const partialEmployee: Partial<IEmployee>= {name:'A'};
console.log(partialEmployee);

/*6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee*/
type EmployeeNameAndSalary = Pick<IEmployee, 'name' | 'salary'>;

/*7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager*/
type EmployeeisManager = Omit<IEmployee, 'isManager'>;

/*8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)*/
type readonlyIEmployee = Readonly<IEmployee>;

/*9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - ключи объекта QA (Используйте Record, keyof, typeof)*/
type QaRecordkey = keyof typeof QA;
type QaRecord = Record<string, QaRecordkey>;
//const qaRecord: Record<string, QaRecordkey> = {
//    key1: 'name',
//    key2: 'salary',
//    key3: 'isManager',
//};
//console.log(qaRecord);

/*10. Создайте дженерик функцию wrapInArray, которая принимает значение любого типа и возвращает его в виде массива этого типа.*/
    function wrapInArray<T>(arg: T): T[]{
      // ваш код здесь
return [arg];
    }

    const numberArray = wrapInArray(5); // [5]
    const stringArray = wrapInArray('Hello'); // ['Hello']
    console.log(numberArray);
    console.log(stringArray);
/*11. Создайте дженерик функцию getLastElement, которая принимает массив элементов типа T, и возвращает последний элемент (типа T).*/

function getLastElement<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1];
}

    console.log(getLastElement([1, 2, 3, 4])); // 4
    console.log(getLastElement(['a', 'b', 'c'])); // 'c'*/


//TODO:Task_2
    /*Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). Функция принимеют на вход массив и колбэк. Используйте дженерик типы. 
   Затипизировать надо саму функцию и коллбэк.
   Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
   где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
   Пример:
   map([1,2,3,4,5], callback) => [0,2,6,12,20]*/

   function funMap<T>(array: T[], callback: (el: T, index: number, array: T[]) => T): T[] {
    const result: T[] = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

const num = [1, 2, 3, 4, 5];
const result = funMap(num, (el, i) => el * i);
console.log(result); 