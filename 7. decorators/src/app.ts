function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// execution of decorators bottom up (↑)
// but creation of decorators happens top to bottom (↓)
@Logger("Logging")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Paul";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();

console.log(person);

// ------

// Property decorator
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;

  constructor(
    title: string,
    private _price: number,
  ) {
    this.title = title;
  }

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
