function load(){
    var date = new Date()
    var time = date.getHours()

    var msg = window.document.getElementById('msg')
    //images:
    var imgMorning = window.document.getElementsByClassName('morning')[0]
    var imgAfternoon = window.document.getElementsByClassName('afternoon')[0]
    var imgNight = window.document.getElementsByClassName('night')[0]
    if (time > 5 && 12 > time){
        msg.innerHTML = `It's ${time}h. Good morning!`
        imgAfternoon.style.display = 'none'
        imgNight.style.display = 'none'
    } else if (time >= 12 && 19 > time){
        msg.innerHTML = `It's ${time}h. Good afternoon!`
        imgMorning.style.display = 'none'
        imgNight.style.display = 'none'
        window.document.body.style.background = 'rgba(182, 91, 31, 0.932)'
    } else {
        msg.innerHTML = `It's ${time}h. Good night!`
        imgMorning.style.display = 'none'
        imgAfternoon.style.display = 'none'
        window.document.body.style.background = 'purple'
    }
}