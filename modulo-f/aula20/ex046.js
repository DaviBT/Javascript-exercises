function factorial(n){
    if (n==1 || n==0){
        return 1
    } else {
        return n * factorial(n - 1)
    }
} console.log(factorial(5))
/*5! = 5*(5-1)*(5-2)*(5-3)*(5-4)
  5! = 5*4*3*2*1
  5!= 120*/
  
// recursive function