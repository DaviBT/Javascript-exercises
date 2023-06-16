class person {
  constructor(name, age) {
    // properties
    this.name = name;
    this.age = age;
  }
}

class employee extends person {
  constructor(name, age, job, salary) {
    super(name, age);
    this.job = job;
    this.salary = salary;
  }
}

class programer extends employee {
  constructor(name, job, salary, programingLanguage) {
    super(name, job, salary);
    this.programingLanguage = programingLanguage;
  }

  toPresent() {
    super.toPresent();
    console.log(
      `My name is ${this.name},I work as ${this.job}, programing in ${this.programingLanguage} and I make $ ${this.salary} a month.`
    );
  }
}
//instance for programer
const programerInstance = new programer("Caio", "programer", 8000, "Dart");

class designer extends employee {
  constructor(name, age, job, salary, typeofDesign) {
    super(name, age, job, salary);
    this.typeofDesign = typeofDesign;
  }

  toPresent() {
    super.toPresent();
    console.log(
      `My name is ${this.name},I work as ${this.cargo}, specifically in ${this.typeofDesign} and I make $ ${this.salary} a month.`
    );
  }
}
const designerInstance = new designer("Thomas", "designer", 4000, "UX");

class manager extends employee {
  constructor(name, age, job, salary, department) {
    super(name, age, job, salary);
    this.department = department;
  }

  toPresent() {
    super.toPresent();
    console.log(
      `My name is ${this.name},I work as ${this.job}, specifically in ${this.departament} department and I make $ ${this.salary} a month.`
    );
  }
}
const managerDepartmentInstance = new manager("development");
