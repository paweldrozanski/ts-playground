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
