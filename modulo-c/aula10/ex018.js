function multiply(){
    txt1 = window.document.querySelector('input#inumber1');
    txt2 = window.document.querySelector('input#inumber2');

    n1 = Number(txt1.value);
    n2 = Number(txt2.value);

    divRes = window.document.querySelector('div#res');
    result = n1 * n2

    divRes.innerText = `The product of ${n1} multiplied by ${n2} is: ${result}`
}