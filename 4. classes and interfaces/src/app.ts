interface Named {
  readonly name: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  age = 30;
  constructor(public name: string) {}

  greet(phrase: string) {
    console.log(phrase + " " + this.name + "!!!!!");
  }
}

let user1: Greetable;
user1 = new Person("Paul");

// user1.name = 'John'; // impossible due to readonly 'name'

user1.greet("hi");
