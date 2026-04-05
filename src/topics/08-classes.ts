export class Person {
    public firstName: string;
    public lastName: string;
    private address: string;

    constructor(
        firstName: string,
        lastName: string,
        address: string = 'No address'
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }
}

/* export class Hero extends Person {
    public alterEgo: string;
    public age: number;
    public realName: string;

    constructor(alterEgo: string, age: number, realName: string) {
        super(realName, 'Pamplona');
        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;
    }
} */

export class Hero {
    public alterEgo: string;
    public age: number;
    public realName: string;
    public person: Person;

    constructor(alterEgo: string, age: number, realName: string, person: Person) {
        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;
        this.person = person;
    }
}

const person = new Person('Tony', 'Stark', 'New York');
const iroman = new Hero('Ironman', 45, 'Tony', person);

console.log(iroman)