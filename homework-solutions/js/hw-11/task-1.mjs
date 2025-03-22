class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== "string") throw new Error("Invalid name");
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== "string") throw new Error("Invalid name");
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== "string") throw new Error("Invalid profession");
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== "number" || value<0) throw new Error("Invalid salary");
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #employees = [];

  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== "string") throw new Error("Invalid title");
    this._title = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    if (typeof value !== "string") throw new Error("Invalid phone"); 
    this._phone = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    if (typeof value !== "string") throw new Error("Invalid address");
    this._address = value;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error("Invalid employee");
    }
    this.#employees.push(employee);
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

// Проверка работы
const company = new Company("Tech Corp", "123-456", "Main Street");
const emp1 = new Employee("John", "Doe", "Developer", 3000);
const emp2 = new Employee("Barbara", "Johnson", "QA", 2500);
company.addEmployee(emp1);
company.addEmployee(emp2);
console.log(company.getEmployees()); // [Employee, Employee]
console.log(company.getInfo()); // Информация о компании


export { Employee, Company };
