// const names: Array<string> = ["Paul", "Ewelina"]; // string[]

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// // won't pass because of Promise type (number)
// promise.then((data) => {
//   data.split(" ");
// });

// Generics function
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

const mergedObj = merge(
  { name: "Paul", hobbies: ["Cooking", "Fathering"] },
  // 30, // won't pass because type T is constrained
  { age: 30 },
);

console.log(mergedObj);

interface Lenghty {
  length: number;
}

function countAndDescribe<T extends Lenghty>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got " + element.length + " element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Cooking", "Fathering"]));
console.log(countAndDescribe([]));
// console.log(countAndDescribe(10)); // ain't gonna work, because 10 has no length property

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U,
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Paul" }, "name"));

// Generic classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
// textStorage.addItem(10); // won't work due to wrong type of 10
textStorage.addItem("Paul");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(10);
console.log(numberStorage);
