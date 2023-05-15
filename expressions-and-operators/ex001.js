// deleting objects properties

const human = {
    age: 34,
    weight: 78,
    height: 1.80
}

delete human.weight

console.log(human)
// output: { age: 34, height: 1.8 }