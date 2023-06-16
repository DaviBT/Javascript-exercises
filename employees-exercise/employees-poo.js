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

    toPresent(){
        console.log('I work with ' + this.job)
    }
  }
}

class programer extends employee {
  constructor(programingLanguage) {
    this.programingLanguage = programingLanguage;
  }
}
const programerProgramingLanguage = new programer("JavaScript");

class designer extends employee {
  constructor(typeofDesign) {
    this.typeofDesign = typeofDesign;
  }
}
const designerTypeOfDesign = new designer("UX");

class manager extends employee {
  constructor(departament) {
    this.departament = departament;
  }
}
const managerDepartment = new manager("development");
