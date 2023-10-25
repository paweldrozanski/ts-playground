const button = document.querySelector("button") as HTMLInputElement;

// comment not visible in .js due to removeComments config in tsconfig.json
button.addEventListener("click", () => {
  console.log("Clicked ya!");
});
