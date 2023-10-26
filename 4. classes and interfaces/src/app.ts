class Department {
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(
    private readonly id: string,
    public name: string,
  ) {
    // this.id = id
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(
    id: string,
    private reports: string[],
  ) {
    super(id, "Accounting");
  }

  addEmployee(name: string) {
    if (name === "Paul") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Paweł"]);
it.addEmployee("Ewelina");
it.addEmployee("Adam");

it.describe();
it.printEmployeeInformation();

const accounting = new AccountingDepartment("d2", []);

accounting.addReport("Something went wrong...");

accounting.addEmployee("Paul");
accounting.addEmployee("Jacek");

accounting.printEmployeeInformation();

accounting.printReports();

// console.log(accounting.describe());

// const accountingCopy = { name: "s", describe: accounting.describe };
// accountingCopy.describe();
