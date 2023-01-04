var div = window.document.getElementById('rectangle')
div.addEventListener('click' , mouseclick)
div.addEventListener('dblclick' , dobleclick)
div.addEventListener('mouseenter' , mousein)
div.addEventListener('mouseout' , mouseout)

function mouseclick() {
    div.style.background = 'blue'
    div.innerText = 'You clicked!'
}

function dobleclick() {
    div.innerText = 'You doble clicked it!'
}

function mousein() {
    div.innerText = 'The mouse is in the div'
}

function mouseout() {
    div.innerText = 'The mouse is out of the div'
}
