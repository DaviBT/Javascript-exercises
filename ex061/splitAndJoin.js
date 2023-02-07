// manipulating strings and arrays

// separate a text that has spaces between words to a new array where each text is a position of the array. After, transform the array into a text, and where had spaces, put _

let str = "I want to reach my dreams!"
let strArray = str.split(" ")

let strArrayWhitUnderscore = strArray.join("_")
console.log(strArrayWhitUnderscore)

// result: I_want_to_reach_my_dreams!