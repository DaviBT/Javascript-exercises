const factoral = function(number){
    if(number == 0 || number == 1){
        return 1;
    }
    let fact = 1;
    for(let num = number; num > 1; num--){
        fact = fact * num
    }
    return fact
}
console.log(factoral(5));