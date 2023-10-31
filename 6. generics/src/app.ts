const names: Array<string> = ["Paul", "Ewelina"]; // string[]

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

// won't pass because of Promise type (number)
promise.then((data) => {
  data.split(" ");
});
