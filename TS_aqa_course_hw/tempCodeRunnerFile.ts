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