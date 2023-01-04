function oddeven(num){ //odd = ímpar ; even = par
    if(num%2 == 0){
        return 'even'
    } else {
        return 'odd'
    }
}
let result = oddeven(5)
console.log(`The number is ${result}`) // using the variable to print the result