const userName = "Paul";

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

// const add = (a: number, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

// printOutput(add(5));
// printOutput(add(5, 10));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];

console.log(activeHobbies);

const person = {
  firstName: "Paul",
  age: 37,
};

// const copiedPerson = person;

// copy of the object (below), instead of copy of the pointer (above)
const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const sumNumOrString = (...elements: (number | string)[]) => {
  return elements.reduce((cur, next) => {
    return +cur + +next;
  }, 0);
};

console.log(sumNumOrString(1, "2", 3, 4, 5, 6, "7", "8", "9", 10));

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2);

const { age, firstName: theName } = person;
console.log(theName, age);
