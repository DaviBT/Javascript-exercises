// conditional (ternary) operator; (condition ? if its true : if it's false)

value = 4

if(value !=4 ? console.log("not four") : console.log("it's four")){} // output: it's four

///////////////////////////////////////////////////////

swim = true
coding = true

day = (swim && coding ? "good" : "bad")

console.log("My day is " + day) // output: My day is good

//////////////////////////////////////////////////////

eggs = true 
coffee = false
juice = false

breakfast = (eggs && coffee || eggs && juice ? "great" : "not very good")

console.log("My breakfast is " + breakfast) // output: My breakfast is not very good