function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

// const number1 = "5"; // causes an error due to incorrect type
let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";
// resultPhrase = 5;

const result = add(number1, number2, printResult, resultPhrase);
console.log(result);