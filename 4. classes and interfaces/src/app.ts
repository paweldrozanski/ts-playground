interface Greetable {
  readonly name: string;
  age: number;

  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(
    public name: string,
    public age: number,
  ) {}

  greet(phrase: string) {
    console.log(phrase + " " + this.name + "!!!!!");
  }
}

let user1: Greetable;
user1 = new Person("Paul", 37);

// user1.name = 'John'; // impossible due to readonly 'name'

user1.greet("hi");
