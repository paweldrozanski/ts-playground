function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12)); // returns void

let combinedValues: (a: number, b: number) => number;

combinedValues = add;
// combinedValues = printResult; // error due to wrong function type

console.log(combinedValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  console.log("in the addAndHandle");
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log("in the cb");
  console.log(result);
});
