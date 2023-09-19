class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }
    getName() {
        let bio = `${this.firstName} is ${this.age}. `;
        this.likes.forEach((like) => {
            bio += `${this.firstName} likes ${like}.`;
        });
        return bio;
    }
    set fullName(fullName) {
        const name = fullName.split(' ');
        this.firstName = name[0];
        this.lastName = name[1];
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
 }
Person.prototype.location = "San francisco";

const person1 = new Person("Andrew","Meld",20,['riding','adventure']);
person1.fullName = "Clancey Turner";
console.log("name ",person1.fullName);
console.log("location ",person1.location);
