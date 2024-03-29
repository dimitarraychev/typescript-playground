class Person {
    firstName: string; 
    lastName?: string;
    age?: number;
    email?: string;

    constructor(firstName: string, lastName?: string, age?: number, email?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

function getPersons(): Person[] {

    return [
        new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Johnson', 25),
        new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
    ];
}

console.table(getPersons());