import { User } from "./models/User";

const user = new User({ name: "Carlo", age: 0 });

// quick reminder on accessors

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const carlo = new Person("carlo", "hina");
console.log(carlo.fullName);
