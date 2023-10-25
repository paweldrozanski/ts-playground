const userName = "Paul";

let age = 30;
age = 37;

// let result;
// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// }
// console.log(result);

// not working due to block scoped 'age'
// if (age > 30) {
//   let isOld = true;
// }
// console.log(isOld);

const add = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput(add(5, 2));
