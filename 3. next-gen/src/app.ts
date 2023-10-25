const userName = "Paul";

let age = 30;
age = 37;

let result;
function add(a: number, b: number) {
  result = a + b;
  return result;
}
console.log(result);

// not working due to block scoped 'age'
// if (age > 30) {
//   let isOld = true;
// }
// console.log(isOld);
