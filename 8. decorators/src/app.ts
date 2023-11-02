// function Logger(logString: string) {
//   console.log("LOGGER FACTORY");
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log("TEMPLATE FACTORY");
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     originalConstructor: T,
//   ) {
//     return class extends originalConstructor {
//       constructor(..._: any[]) {
//         super();
//         console.log("Rendering template");
//         const hookEl = document.getElementById(hookId);
//         if (hookEl) {
//           hookEl.innerHTML = template;
//           hookEl.querySelector("h1")!.textContent = this.name;
//         }
//       }
//     };
//   };
// }

// // execution of decorators bottom up (↑)
// // but creation of decorators happens top to bottom (↓)
// @Logger("Logging")
// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person {
//   name = "Paul";

//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const person = new Person();

// // console.log(person);

// // ------

// // Property decorator
// function Log(target: any, name: string | Symbol) {
//   console.log("Property decorator!");
//   console.log(target, name);
// }

// // Setter decorator
// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("Accessor decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// // Method decorator
// function Log3(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor,
// ) {
//   console.log("Method decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log("Parameter decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }

// class Product {
//   @Log
//   title: string;

//   constructor(
//     title: string,
//     private _price: number,
//   ) {
//     this.title = title;
//   }

//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid price - should be positive!");
//     }
//   }

//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }

// function AutoBind(
//   _target: any,
//   _methodName: string,
//   descriptor: PropertyDescriptor,
// ) {
//   const originalMethod = descriptor.value;
//   const adjDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       const boundFn = originalMethod.bind(this);
//       return boundFn;
//     },
//   };

//   return adjDescriptor;
// }

// class Printer {
//   message = "This works!";

//   @AutoBind
//   showMessage() {
//     console.log(this.message);
//   }
// }

// const p = new Printer();

// const button = document.querySelector("button")!;

// button.addEventListener("click", p.showMessage);

// ----

const config: { [input: string]: string[] } = {};

const addValidator = (input: string, type: string) => {
  config[input] = config[input] ? [...config[input], type] : [type];
};

const Required = (_: any, input: string) => addValidator(input, "required");
const Positive = (_: any, input: string) => addValidator(input, "positive");

const validate = (course: any) => {
  return Object.entries(config).every(([input, types]) =>
    types.every(
      (type) =>
        (type === "required" && course[input]) ||
        (type === "positive" && course[input] > 0),
    ),
  );
};

class Course {
  @Required title: string;
  @Positive price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!");
    return;
  }

  // console.log(createdCourse);
});
