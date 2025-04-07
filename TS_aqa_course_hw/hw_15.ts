//TODO:Task_1
/*1. Создайте интерфейс IVehicle:
  Методы:
    - getDetails(): string — возвращает информацию о транспортном средстве.
    - start(): string — возвращает строку "The vehicle is starting".*/
    interface IVehicle  {
        getDetails(): string;
        start(): string;
       }

/*2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
  Реализуйте конструктор с полями:
    - make (строка)
    - model (строка)
  Добавьте методы:
    - start, возвращающего строку: "The vehicle {make} {model} is starting.".
    - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.*/
    abstract class Vehicle implements IVehicle {
     make: string;
     model: string;
    constructor(make: string, model: string) {
        this.make=make;
        this.model=model;
    }
    abstract getDetails(): string;
    start(): string {
        return `The vehicle ${this.make} ${this.model} is starting`;
    };
}

/*3. Создайте класс Car, который наследует Vehicle:
    - Добавляет поле year (число).
    - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".*/

    class Car extends Vehicle {
        year: number;
    constructor(make: string, model: string, year: number) {
        super(make, model); 
        this.year = year;
    }
    getDetails(): string {
        return ` ${this.make}, ${this.model}, ${this.year} `;
    }
}
/*4. Создайте объект класса Car и проверьте работоспособность
*/
const myCar = new Car('Toyota', 'Corolla', 2020);
console.log(myCar.getDetails()); 
console.log(myCar.start()); 

//TODO:Task_2
/*Создайте интерфейс IPerson, абстрактный класс Employee, который реализует интерфейс IPerson, и конкретные классы Manager и Developer.
  - Интерфейс IPerson должен содержать:
      Стринговые поля: name, surname
      Намберовые поля: experienceYears
      Метод, возвращающий строку: getDetails().

  - Абстрактный класс Employee должен:
      Имплементировать интерфейс IPerson.
      Содержать защищенное (protected) поле: salary, не передающееся в конструктор (по дефолту 0)
      Содержать защищенный (protected) абстрактный метод: calculateSalary().,
        который считает зарплату и вызывается в конструкторе, и будет реализован в наследниках
      Метод calculateSalary() должен быть использован в конструкторе
  
  - Конкретные классы Manager и Developer должны:
      Наследоваться от Employee.
      Класс менеджер должен на конструкторе получать поле prefered, которое может быть только 'scrum' или 'kanban'
      Класс девелопер должен на конструкторе получать поле programmingLanguage, который может быть 'js', 'ts', 'java', 'python'
      Метод calculateSalary должен для менеджера устанавливать зарплату по формуле: количество лет опыта * 500
      Метод calculateSalary должен для девелопера устанавливать зарплату по формуле: количество лет опыта * 1000
      Реализовывать метод getDetails(), который должен выводить полную информацию об объекте вида:
        'My name is Elena TSovna, I am software developer with 6 years of experience in TypeScript and 6000$ salary' (пример для девелопера)*/
        interface IPerson  {
            name: string;
            surname: string;
            experienceYears: number;
            getDetails(): string;
           }
           abstract class Employee implements IPerson  {
            name: string;
            surname: string;
            experienceYears: number;
            protected salary: number = 0;

           constructor(name: string, surname: string, experienceYears: number) {
            this.name = name;
            this.surname = surname;
            this.experienceYears = experienceYears;
            this.salary = this.calculateSalary();
               
           }  
           abstract calculateSalary(): number;
           abstract getDetails(): string;
        }     

        type prefered = 'scrum' | 'kanban';
        type programmingLanguage = 'js'| 'ts'| 'java'| 'python';

        class Manager extends Employee {
            preferred: prefered;
        
            constructor(name: string, surname: string, experienceYears: number, preferred: prefered) {
                super(name, surname, experienceYears);
                this.preferred = preferred;
            }
        
            calculateSalary(): number {
                return this.salary = this.experienceYears * 500; 
            }
        
            getDetails(): string {
                return `My name is ${this.name} ${this.surname}, I am a manager with ${this.experienceYears} years of experience in ${this.preferred} and ${this.salary}$ salary.`;
            }
        }

    class Developer extends Employee {
        programmingLanguage: programmingLanguage;
    
        constructor(name: string, surname: string, experienceYears: number, programmingLanguage: programmingLanguage) {
            super(name, surname, experienceYears);
            this.programmingLanguage = programmingLanguage;
        }
    
        calculateSalary(): number {
            return this.salary = this.experienceYears * 1000; 
        }
    
        getDetails(): string {
            return `My name is ${this.name} ${this.surname}, I am a software developer with ${this.experienceYears} years of experience in ${this.programmingLanguage} and ${this.salary}$ salary.`;
        }
    }

const manager = new Manager('Elena', 'TSovna', 6, 'scrum');
console.log(manager.getDetails());

const developer = new Developer('Ivan', 'Petrov', 4, 'python');
console.log(developer.getDetails());