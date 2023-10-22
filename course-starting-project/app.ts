const birthYear = 1986;
const currentYear = new Date().getFullYear();

const person = {
  name: "Paul",
  age: currentYear - birthYear,
  hobbies: ["Cooking", "Biking", "Photography"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // Error because hobby is interfered as string not array
}
