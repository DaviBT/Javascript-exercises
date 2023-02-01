function Person(name){
    this.name = name
    this.walk = name + " is walking."
}
const walter = new Person("Heisenberg")
console.log(walter.walk)

// result: Heisenberg is walking.