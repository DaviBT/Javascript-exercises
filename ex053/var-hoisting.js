nam()

var nam = function sayMyName(){
    console.log("Heisenberg")
}

/* 
- What JavaScript does:

    var nam

    console.log(nam)

    var nam = function sayMyName(){
    console.log("Heisenberg")
}

- That's the reason why console.log will show 'undefined'
*/