let one = 1
console.log( one == "1" )
// output: true  --> because the '==' make implicits comparisions, without take the type in consideration

let two = 2
console.log( two === "2" )
// output: false --> the '===' doesn't make implicit comparisions, it takes the type of the data in considerasion