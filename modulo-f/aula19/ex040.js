let num = [1, 5, 3, 9, 12]
for(let pos in num){
    console.log(`The value ${num[pos]} is in the position ${num.indexOf(num[pos])}`)
}