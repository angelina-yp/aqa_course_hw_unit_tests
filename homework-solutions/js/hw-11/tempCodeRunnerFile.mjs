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
    if (typeof value !== "string" || value.length < 2 || value.length > 50 || !/^[A-Za-z]+$/.test(value)) throw new Error("Invalid name");
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== "string" || value.length < 1 || value.length > 50 || !/^[A-Za-z]+$/.test(value)) throw new Error("Invalid name");
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (!/^[A-Za-z ]+$/.test(value.trim())) throw new Error("Invalid profession");
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value === "string" || value <= 0 || value >= 10000 || isNaN(value)==true) throw new Error("Invalid salary");
    this.#salary = value;
  }

  getTotalSalary() {
    return this.#salary; 
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

  findEmployeeByName(firstName) {
    const employee = this.#employees.find(emp => emp.firstName === firstName);
    if (!employee) {
      throw new Error(`Employee with first name "${firstName}" not found.`);
    }
    return employee;
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex(emp => emp.firstName === firstName);
  }

  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
  
    if (index === -1) {
      throw new Error(`Employee with first name "${firstName}" not found.`);
    }
    this.#employees.splice(index, 1);
   // console.log(`Employee "${firstName}" has been removed.`);
  }
 
  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error("Invalid employee");
    }
    this.#employees.push(employee);
  }

  getTotalSalary() {
    return this.#employees.reduce((total, emp) => total + emp.salary, 0);
  }
}

// Пример использования
const emp1 = new Employee("John", "Doe", "Developer", 3000);
const emp2 = new Employee("Jane", "Smith", "Manager", 5000);
const emp3 = new Employee("Mark", "Brown", "Designer", 4000);

const company = new Company("Tech Corp", "123-456", "Main Street");
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName("Jane")); // Employee { firstName: 'Jane', ... }
company.removeEmployee("John");