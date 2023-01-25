const factorial = function(number){
    if(number == 0 || number == 1){
        return 1
    }
    fact = 1
    for(num = number; num > 1; num--){
        fact *= num // will do the for and add the fact values every time
        /* fact = 1 * 5
            fact = 5 * 5
            fact = 4 * 5
            fact = 3 * 5... */
    }
    return fact
}
console.log(factorial(5))  //120