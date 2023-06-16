class person {
  constructor(name, age) {
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

class programer extends employee {}

class designer extends employee {}

class manager extends employee {}
