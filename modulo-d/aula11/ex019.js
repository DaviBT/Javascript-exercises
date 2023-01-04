function sent(){
    var txtSent = window.document.getElementById('itxtSpeed');
    var speed = Number(txtSent.value);

    divoutput = window.document.querySelector('div#result');

    if (speed > 80) {
        divoutput.innerHTML += ' You have exceeded the speed limit.'
    } else {
        divoutput.innerHTML += ' You are under the speed limit.'
    }
}