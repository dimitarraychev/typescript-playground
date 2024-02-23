class Person {
    firstName: string; 
    lastName: string;
    age: number;
    email: string;

    constructor(firstName: string, lastName: string, age: number, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

const person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');

console.log(person.toString());