const birthYear = 1986;
const currentYear = new Date().getFullYear();

// const person: {
//   name: string;
//   hobbies: string[];
//   age: number;
//   role: [number, string];
// } = {
//   name: "Paul",
//   age: currentYear - birthYear,
//   hobbies: ["Cooking", "Biking", "Photography"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = 200,
}

const person = {
  name: "Paul",
  age: currentYear - birthYear,
  hobbies: ["Cooking", "Biking", "Photography"],
  role: Role.ADMIN,
};

// person.role[1] = 10; // Cannot change elements in tuple
// person.role.push("admin"); // But we can push elements to tuple
// person.role = [1, 'author', 12]; // although we cannot assign extended arrays, lol

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // Error because hobby is interfered as string not array
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
