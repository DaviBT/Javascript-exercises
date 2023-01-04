function add() {
    var tn1 = window.document.getElementById('inumber1'); //the input will be the variable tn1
    var tn2 = window.document.querySelector('input#inumber2'); //the other input will be the variable tn2
    var res = window.document.querySelector('div#res') // the variable of the div

    n1 = Number(tn1.value); // defines the value of the input
    n2 = Number(tn2.value);
    var result = n1 + n2; // defines the result

    res.innerHTML = `Adding ${n1} plus ${n2}, you will obtain the result: ${result}`; // defines where the result will be shown
}