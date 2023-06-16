class person {
  constructor(name, age) {
    // properties
    this.name = name;
    this.age = age;
  }
}

class employee extends person {
  constructor(job, salary) {
    this.job = job;
    this.salary = salary;
  }
}

class programer extends employee {
  constructor(programingLanguage) {
    this.programingLanguage = programingLanguage;
  }
}
const programerProgramingLanguage = new programer("JavaScript")

class designer extends employee {}

class manager extends employee {}
