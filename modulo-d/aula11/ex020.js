function sent(){
    var txtPlanet = window.document.getElementById('itxtPlanet');

    var planet = txtPlanet.value

    var res = window.document.getElementById('result');
    res.innerHTML = `The planet you live is ${planet}`
    if (planet == 'Earth' || 'earth'){
        res.innerText += ` We live in the same planet!`
    } else {
        res.innerText += ` Are you an alien?`
    }
}