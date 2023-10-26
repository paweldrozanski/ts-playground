interface Greetable {
  name: string;
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

const user1 = new Person("Paul", 37);

user1.greet("hi");
