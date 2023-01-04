function divclick() {
    var clicked = window.document.getElementById('rectangle')
    clicked.innerText = 'You clicked!'
    clicked.style.background = 'blue'
}

function mousein() {
    var mousein = window.document.getElementById('rectangle')
    mousein.innerText = 'The mouse is in the div'
}