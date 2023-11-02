const button = document.querySelector("button")!;

// comment not visible in .js due to removeComments config in tsconfig.json

function clickHandler(message: string) {
  console.log("Clicked! " + message);
}

// strictBindCallApply would throw an error
// button.addEventListener("click", clickHandler.bind(null));

button.addEventListener("click", clickHandler.bind(null, "you're welcome"));
